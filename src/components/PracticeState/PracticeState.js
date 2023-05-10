//this file is being used to practice only.
//This file is not added to APP file

import React, { useState } from "react";

const PracticeState = () => {
  const [flowers, setFlowers] = useState(0);
  const adding = (a) => {
    const newFlower = flowers + 1;
    setFlowers(newFlower);
    console.log(flowers);
  };

  //console.log("flowers", flowers);

  return (
    <div>
      <button onClick={adding}>hi me</button>
    </div>
  );
};

export default PracticeState;
