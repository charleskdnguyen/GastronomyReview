import React from 'react'
import Header from '../components/Header'
import RestaurantAdd from '../components/RestaurantAdd'
import RestaurantList from '../components/RestaurantList'

const HomePage = () => {
  return (
    <div>
      <Header />
      <RestaurantAdd />
      <RestaurantList />
    </div>
  )
}

export default HomePage;