import React from 'react';
import { GalleryImg, GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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
ImageGalleryItem.propTypes = {
  el: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClickImage: PropTypes.func.isRequired,
};
