import React, { useEffect } from "react";
import fetchDataGeneral from "../../utilities/generalFetch";
import './Main.css';
import Post from '../Posts/Post';

function Main() {
  function useEffectAsync(effect, inputs) {
    useEffect(() => {
      effect();
    }, inputs);
  }
  useEffectAsync(async () => {
    const items = await fetchDataGeneral('/posts','GET');
    console.log(items);
}, []);
  async function getposts() {
    const endpoint = "/posts";
    const method = "GET";
    const data = await fetchDataGeneral(endpoint, method);
    return data;
  }
  return (
    <div className="body">
        <div className="spaceimage">
        <h1>REDDIT CLONE</h1>
        </div>
        <Post/>
    </div>
  );
}

export default Main;
