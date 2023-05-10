import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContexts";

const Header = () => {
  const { user, signingOut } = useContext(AuthContext);
  console.log("User inside", user);
  const handleSigningOut = () => {
    signingOut();
  };
  return (
    <nav className="headerStyle">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <Link to="/shopping">Shopping</Link>
        <Link to="/orderreview">Order Review</Link>
        {/* <Link to="/shipment">Shipment</Link> */}
        <Link to="/manageinventory">Manage Inventory</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
        {user?.email ? (
          <div className="spans">
            <span className="spanEmail">{user.email} </span>
            <button onClick={handleSigningOut}>SignOut</button>
          </div>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
