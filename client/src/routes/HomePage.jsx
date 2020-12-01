import React from 'react'
import Header from '../components/Header'
import RestaurantAdd from '../components/RestaurantAdd'
import RestaurantListPage from './RestaurantListPage'

const HomePage = () => {
  return (
    <div>
      <Header />
      <RestaurantAdd />
      <RestaurantListPage />
    </div>
  )
}

export default HomePage;