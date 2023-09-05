import React from "react";
import Product from "../UIUX/Product";
import { useSelector } from "react-redux";
import "./globalPage.css"; // Import your CSS file

export default function Catolog({ query }) {
  const products = useSelector((items) => items.StoreProducts);

  console.log("=Pro=>", products);

  return (
    <div
      className="catalog-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
      }}
    >
      {products.map((item) => (
        <Product item={item} key={item.id} />
      ))}
      {!products.length && <h1 style={{ color: "red" }}>No product Found</h1>}
    </div>
  );
}
