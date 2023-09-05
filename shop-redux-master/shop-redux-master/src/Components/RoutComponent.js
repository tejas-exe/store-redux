import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./UIUX/Header";

function RoutComponent() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Header
        onSubmmitRout={(search) => {
          setQuery(search);
        }}
      />
      <Outlet query={query} />
    </>
  );
}

export default RoutComponent;
