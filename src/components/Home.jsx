import React, { useEffect, useState } from "react";
import "./Home.css";
import Fuse from 'fuse.js';

function ImageCard({ src, caption, tags }) {
  return (
    <div className="image">
      <img src={src} alt="city" />
      <span>Title:{caption}</span><br />
      <span>Tags:{tags}</span>
    </div>
  )
}




export default function Home({searchTerm}) {
  // Options for Fuse.js
  const options = {
    keys: ['caption', 'tags'], 
    includeScore: true
  };

  // Create a new instance of Fuse
  
  const [images, setImages] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch("https://smartviewgal.azurewebsites.net/getImages", {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
      })
  }, [])


  const fuse = new Fuse(images, options);
  const result = fuse.search(searchTerm);
  console.log(result)
  // const images = [
  //   "austria.jpeg",
  //   "sunset.jpg",
  //   "sanfrancisco.jpg",
  //   "beach.jpg",
  //   "grandcanyon.jpg",
  // ];
  console.log(images)
  const img = images.map((image) => (

    <ImageCard src={image.dataUrl} caption={image.caption} tags={image.tags} />

  ));
  const searchedImages = result.map((image) => (
    <ImageCard src={image.item.dataUrl} caption={image.item.caption} tags={image.item.tags} />
  ));
  // return <div className="gallery-container">{img.length > 0 ? img : "Please Upload Images"}</div>;
  return (
    <div className="gallery-container">
      {searchTerm ? searchedImages : img}
    </div>
  )
}
