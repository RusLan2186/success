import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useDispatch, useSelector } from 'react-redux';
const Gallery = () => {
  const coffeeList = useSelector((store) => store.coffee.coffee);

  return (
    <div>
      {
        <ImageGallery
          items={coffeeList.map((coffee) => ({
            original: coffee.image,
            thumbnail: coffee.image,
          }))}
          fullscreen
        />
      }
    </div>
  );
};

export default Gallery;
