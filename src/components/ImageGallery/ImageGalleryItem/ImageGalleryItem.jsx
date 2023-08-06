import React from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ el, onClickImage }) => {
  return (
    <GalleryItem>
      <GalleryImg
        src={el.webformatURL}
        alt={el.tags}
        loading="lazy"
        onClick={() => onClickImage(el.largeImageURL)}
      />
    </GalleryItem>
  );
};
