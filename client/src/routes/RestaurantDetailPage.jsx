import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantApi from '../apis/RestaurantApi';
import StarRating from '../components/StarRating';
import Reviews from '../components/Reviews';
import AddReview from '../components/AddReview';

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectedRestaurant } = useContext(
    RestaurantsContext,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantApi.get(`/${id}`);

        setSelectedRestaurant(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && (
        <>
          <h1 className='font-weight-light display-1 text-center'>
            {selectedRestaurant.restaurant.name}
          </h1>
          <div className="text-center display-4">
            <StarRating rating={selectedRestaurant.restaurant.average_rating} />
            <span className="text-warning ml-1">({selectedRestaurant.restaurant.count || 0})</span>
          </div>
          <div>
            {selectedRestaurant && (
              <>
                <div className='mt-3'>
                  <Reviews reviews={selectedRestaurant.reviews} />
                </div>
                <AddReview />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
