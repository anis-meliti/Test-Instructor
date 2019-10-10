import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import store from '../../js/store/index';
import { getgallery } from '../../js/actions/Gallery';
import Photo from '../../components/Photo/Photo';

const GalleryPhoto = ({ match }) => {
  //   const userId = match.param.id;
  //   useEffect(() => {
  //     store.dispatch(getgallery(userId));
  //   });
  const photos = [
    {
      title: 'Picture 1',
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599'
    },
    {
      title: 'Picture 2',
      src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799'
    },
    {
      title: 'Picture 3',
      src: 'https://source.unsplash.com/qDkso9nvCg0/600x799'
    },
    {
      title: 'Picture 4',
      src: 'https://source.unsplash.com/iecJiKe_RNg/600x799'
    },
    {
      title: 'Picture 5',
      src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799'
    },
    {
      title: 'Picture 6',
      src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599'
    },
    {
      title: 'Picture 7',
      src: 'https://source.unsplash.com/zh7GEuORbUw/600x799'
    },
    {
      title: 'Picture 8',
      src: 'https://source.unsplash.com/PpOHJezOalU/800x599'
    },
    {
      title: 'Picture 9',
      src: 'https://source.unsplash.com/I1ASdgphUH4/800x599'
    },
    {
      title: 'Picture 10',
      src: 'https://source.unsplash.com/XiDA78wAZVw/600x799'
    },
    {
      title: 'Picture 11',
      src: 'https://source.unsplash.com/x8xJpClTvR0/800x599'
    },
    {
      title: 'Picture 12',
      src: 'https://source.unsplash.com/u9cG4cuJ6bU/4927x1000'
    },
    {
      title: 'Picture 13',
      src: 'https://source.unsplash.com/qGQNmBE7mYw/800x599'
    },
    {
      title: 'Picture 14',
      src: 'https://source.unsplash.com/NuO6iTBkHxE/800x599'
    }
  ];
  return (
    <>
      <Row>
        <Col className='md-form my-3'>
          <Row>
            <Col md={6}>
              <i className='icon-search'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        {photos.map(photo => (
          <>
            <Photo title={photo.title} path={photo.src} />
          </>
        ))}
      </Row>
    </>
  );
};

export default GalleryPhoto;
