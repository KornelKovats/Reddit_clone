import React, { useState, useEffect } from "react";
import fetchDataGeneral from "../../utilities/generalFetch";
import './Main.css';
import Post from '../Posts/Post';

function Main() {
  const [posts, setPosts] = useState([]);
  function useEffectAsync(effect, inputs) {
    useEffect(() => {
      effect();
    }, inputs);
  }
  useEffectAsync(async () => {
    const items = await fetchDataGeneral('/posts','GET');
    setPosts(items);
}, []);
  return (
    <div className="body">
        <div className="spaceimage">
        <h1>REDDIT CLONE</h1>
        </div>
        {posts.map((item,index)=><Post item={item} key={index}/>)}
    </div>
  );
}

export default Main;
