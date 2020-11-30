import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantApi from '../apis/RestaurantApi';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="font-weight-light display-1 text-center">{selectedRestaurant && selectedRestaurant.name}</h1>
      <div>{selectedRestaurant && (
        <>
        <div className="mt-3">
          <Reviews />
        </div>
        </>
      )}</div>
    </div>
  );
};

export default RestaurantDetailPage;
