import React, { useState } from "react";
import ImageSlider from "../UIUX/ImageSlider";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { FAKEDATA } from "../../Products";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const parameter = useParams();
  const [prod, setProd] = useState({});

  useEffect(() => {
    const Product = FAKEDATA.products.find((item) => item.id == parameter.id);
    console.log("====>", Product);
    setProd(Product);
  }, [parameter]);
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <div style={{ width: "650px" }}>
        <ImageSlider photos={prod.images} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flexGrow: "5",
        }}
      >
        <h1 style={{ margin: "0px auto" }}>{prod.title}</h1>
        <h2 style={{ margin: "10px auto" }}>Price : ${prod.price}</h2>
        <h4 style={{ margin: "20px auto" }}>{prod.description}</h4>
      </div>
    </Stack>
  );
}

export default ProductDetails;
