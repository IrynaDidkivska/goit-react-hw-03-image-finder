import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <GalleryList>
      {images.map(el => (
        <ImageGalleryItem key={el.id} el={el} onClickImage={onClickImage} />
      ))}
    </GalleryList>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClickImage: PropTypes.func.isRequired,
};
