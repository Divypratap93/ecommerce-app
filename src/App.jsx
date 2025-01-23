import React, { useState, useEffect, createContext, useContext } from 'react'

import Header from './components/Header'
import { Hero } from './components/Hero'
import Card from './components/card'

import Footer from './components/Footer'
import Drawer from './components/Drawer'
import { appContext } from './CartContext'



function App() {
  
  const {drawerOpen,Cart,Products} = useContext(appContext)
  


  

  return (
    
      <div className='flex flex-col items-center'>
        
        <Header />  
        
        <Hero />
        <div className='flex flex-col py-24 gap-12 items-center'>
          <h2 className='font-extrabold text-3xl  font-sans uppercase'>
            New Arrival
          </h2>
          
          <div className='flex flex-row flex-wrap gap-8 max-w-screen-xl justify-center py-12'>
            {Products.slice(0,4).map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
        </div>
          {drawerOpen? <Drawer cart={Cart}/> : null }
        
        <Footer />
      </div>
   
  )
}

export default App

