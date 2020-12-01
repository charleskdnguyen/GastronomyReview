import React, { useContext, useEffect } from 'react';
import RestaurantApi from '../apis/RestaurantApi';
import { RestaurantsContext } from '../context/RestaurantsContext';
import { useHistory } from 'react-router-dom';
import StarRating from '../components/StarRating'

const RestaurantListPage = () => {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext);

  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get('/');
        setRestaurants(response.data.data.restaurants);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (e, id) => {
    e.stopPropagation();
    try {
      history.push(`/restaurants/${id}/update`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      RestaurantApi.delete(`/${id}`);
      setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleRestaurantSelect = id => {
    history.push(`/restaurants/${id}`);
  };

  const renderRating = restaurant => {
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className="text-warning ml-1">({restaurant.count || 0})</span>
      </>
    )
  }

  return (
    <div className='list-group'>
      <table className='table table-hover table-dark'>
        <thead>
          <tr className='bg-primary'>
            <th scope='col'>Restaurant</th>
            <th scope='col'>Location</th>
            <th scope='col'>Price Range</th>
            <th scope='col'>Ratings</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants &&
            restaurants.map(restaurant => {
              return (
                <tr
                  key={restaurant.id}
                  onClick={() => handleRestaurantSelect(restaurant.id)}
                >
                  <td>{restaurant.name}</td>
                  <td>{restaurant.location}</td>
                  <td>{'$'.repeat(restaurant.price_range)}</td>
                  <td>{renderRating(restaurant)}</td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={e => handleUpdate(e, restaurant.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={e => handleDelete(e, restaurant.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default RestaurantListPage;
