import { getShoppingCart } from "../utilities/fakedb";

export const LoaderOfDataAndCart = async () => {
  //Getting products data
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  //console.log(products);

  //gettng storedCart
  const savedCart = getShoppingCart();
  const initialCart = [];
  for (const id in savedCart) {
    const productDetailsStored = products.find((product) => product.id === id);
    if (productDetailsStored) {
      const quantity = savedCart[id];
      productDetailsStored.quantity = quantity;
      console.log(id, quantity);
      initialCart.push(productDetailsStored);
    }
  }

  return { products: products, initialCart: initialCart };
};
