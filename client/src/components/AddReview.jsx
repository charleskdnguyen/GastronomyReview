import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import RestaurantApi from '../apis/RestaurantApi';

const AddReview = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [rating, setRating] = useState('Rating');
  const [review, setReview] = useState('');

  const location = useLocation();
  const history = useHistory();

  const handleSubmitReview = async e => {
    e.preventDefault();

    try {
      await RestaurantApi.post(`/${id}/addReview`, {
        name,
        review,
        rating,
      });
      history.push('/')
      history.push(location.pathname);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='mb-2'>
      <form action=''>
        <div className='form-row'>
          <div className='form-group col-8'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='name'
              className='form-control'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className='form-group col-4'>
            <label htmlFor='rating'>Rating</label>
            <select
              id='rating'
              className='custom-select'
              value={rating}
              onChange={e => setRating(e.target.value)}
            >
              <option disabled>Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='review'>Review</label>
          <textarea
            id='review'
            className='form-control'
            value={review}
            onChange={e => setReview(e.target.value)}
          ></textarea>
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={e => handleSubmitReview(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
