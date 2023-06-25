export const getAllProducts = () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };
  export const getProductsByCategory = (category) => {
    return fetch(`https://dummyjson.com/products/category/${category}`).then(
      (res) => res.json()
    );
  };