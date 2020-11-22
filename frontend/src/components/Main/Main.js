import React, { useEffect } from "react";
import fetchDataGeneral from "../../utilities/generalFetch";

function Main() {
  useEffect(() => {
    const endpoint = "/posts";
    const method = "GET";
    let data = fetchDataGeneral(endpoint, method);
    console.log(data);
  });
  return (
    <div>
      <h1>Main</h1>
    </div>
  );
}

export default Main;
