import React from 'react'
import Header from '../components/Header'
import RestaurantAdd from '../components/RestaurantAdd'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
  return (
    <div>
      <Header />
      <RestaurantAdd />
      <RestaurantList />
    </div>
  )
}

export default Home;