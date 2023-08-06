import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <GalleryList>
      {images.map(el => (
        <ImageGalleryItem key={el.id} el={el} onClickImage={onClickImage} />
      ))}
    </GalleryList>
  );
};
