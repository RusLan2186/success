import React from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';
import cl from './Coffee.module.scss';
const Gallery = () => {
  const coffeeList = useSelector((store) => store.coffee.coffee);

  return (
    <div className={cl.gallery}>
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
