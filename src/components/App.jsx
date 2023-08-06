import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImg } from './services/api';
import { toast } from 'react-toastify';
import { LargeImg, Wrapper } from './App.styled';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    per_page: 12,
    totalHits: 0,
    loading: false,
    largeImageURL: '',
    isOpen: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, per_page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const { totalHits, hits } = await fetchImg({
          q: query,
          page: page,
          per_page: per_page,
        });
        if (!totalHits) {
          toast.warn(
            'Sorry, there are no images matching your search query. Please try again.'
          );
        } else {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }
        this.setState(prev => ({
          page,
          images: [...prev.images, ...hits],
          totalHits: totalHits,
        }));
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handlerSearchForm = query => {
    if (query !== this.state.query) {
      this.setState({
        query: query,
        page: 1,
        images: [],
      });
    }
  };

  handleLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  handleClickImage = largeImageURL => {
    this.setState({
      largeImageURL: largeImageURL,
      isOpen: true,
    });
    console.log('click on img ');
  };

  toggleModal = () =>
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { images, loading, totalHits, largeImageURL, isOpen } = this.state;
    return (
      <Wrapper>
        <Searchbar onSearchForm={this.handlerSearchForm} />
        {images.length > 0 && (
          <ImageGallery images={images} onClickImage={this.handleClickImage} />
        )}
        {loading && <Loader />}

        {isOpen && (
          <Modal onClose={this.toggleModal}>
            <LargeImg src={largeImageURL} alt="" />
          </Modal>
        )}

        {!loading && images.length > 0 && images.length < totalHits && (
          <Button onLoadMore={this.handleLoadMoreBtn} />
        )}
      </Wrapper>
    );
  }
}
