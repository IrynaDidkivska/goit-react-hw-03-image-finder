import React from 'react';
import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onLoadMore }) => {
  return (
    <div>
      <StyledButton type="button" onClick={onLoadMore}>
        Load more
      </StyledButton>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
