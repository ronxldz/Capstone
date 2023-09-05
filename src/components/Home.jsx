import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  // Define the number of products to display per row
  const productsPerRow = 3;

  return (
    <div className="home">
      <div className="home-container">
        {/* Create rows with the specified number of products per row */}
        {Array.from({ length: Math.ceil(products.length / productsPerRow) }).map(
          (_, rowIndex) => (
            <div className="home-row" key={rowIndex}>
              {products
                .slice(
                  rowIndex * productsPerRow,
                  rowIndex * productsPerRow + productsPerRow
                )
                .map((product) => (
                  <Product
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                  />
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
