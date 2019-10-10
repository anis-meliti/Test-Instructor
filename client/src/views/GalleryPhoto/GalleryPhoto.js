import React, { useEffect } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getgallery } from '../../js/actions/Gallery';
import Photo from '../../components/Photo/Photo';

const GalleryPhoto = ({ match }) => {
  const userId = match.params.id;
  console.log('TCL: GalleryPhoto ->  match.param.i', match.params.id);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.gallery.loading);
  const gallery = useSelector(state => state.gallery.gallery);
  useEffect(() => {
    dispatch(getgallery(userId));
  }, []);

  return loading ? (
    <Spinner color='primary' />
  ) : (
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
        {gallery.map(photo => (
          <>
            <Photo title={photo.title} path={photo.path} key={photo._id} />
          </>
        ))}
      </Row>
    </>
  );
};

export default GalleryPhoto;
