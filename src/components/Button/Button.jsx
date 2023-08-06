import React from 'react';
import { StyledButton } from './Button.styled';

export const Button = ({ onLoadMore }) => {
  return (
    <div>
      <StyledButton type="button" onClick={onLoadMore}>
        Load more
      </StyledButton>
    </div>
  );
};
