import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import reactDOM from 'react-dom';

function RandomCat() {
  const [catUrl, setCatUrl] = useState([]);

  useEffect(() => {
    console.log('effect>>', catUrl);
  }, [catUrl]);

  function getUrl() {
    fetch('https://api.thecatapi.com/v1/images/search')
      .then(res => res.json())
      .then(data => {
        console.log('data>>>', data[0].url);
        setCatUrl([data[0].url]);
      });
  }
  return (
    <>
      <button type="submit" onClick={getUrl}>getcat</button>
      {/* <img>{catUrl[0]}</img> */}

      {/* <div>{catUrl.map((element)=>{<img>{element}</img>})}</div> */}
    </>
  )
}

export default RandomCat;
