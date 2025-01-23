
import React, { createContext, useState,useEffect } from 'react';


// Create Cart Context
export const appContext = createContext()


export const CartProvider = ({ children }) => {




  const [Products, setProducts] = useState([])
  const [Cart, setCart] = useState([]);

useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        setProducts(data)
      } catch(err) {
        console.error(err)
      }
    }
    fetchProducts()
  }, [])

  const addItemToCart = (product) => {
    setCart(prevCart => {
      
      return [...prevCart, product]
    })
  }
  const removeItemFromCart = (product) => {
    setCart(prevCart => {
      
      return prevCart.filter((item)=>item.id !== product.id)
    })
  }


  
const [drawerOpen, setDrawerOpen] = useState(false)

  const toggle = ()=>{
    console.log("run")
    setDrawerOpen(prev=>!prev)
  }


  return (
    <appContext.Provider value={{drawerOpen, toggle,removeItemFromCart,Cart,addItemToCart, Products}}>
    
      {children}
    
    </appContext.Provider>
  );
};