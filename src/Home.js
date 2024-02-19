import React from 'react'
import Header from './Container/Header'
import Tables from './Container/Tables'
import Filter from './Container/Filter'
import Card from './Container/Card'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      
        <Header/>
       <Tables/> 
       <Filter/> 
       <Card/> 
       <Footer/>
    </div>
  )
}

export default Home