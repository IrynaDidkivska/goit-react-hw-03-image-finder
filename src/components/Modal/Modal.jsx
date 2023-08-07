import React, { Component } from 'react';
import { Overlay, StyledModal } from './Modal.styled';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.onEscapeClick);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscapeClick);
  }
  onEscapeClick = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackDropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { children } = this.props;
    return (
      <Overlay onClick={this.onBackDropClick}>
        <StyledModal>{children}</StyledModal>
      </Overlay>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.shape().isRequired,
};
