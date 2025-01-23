import React, { useContext } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { appContext } from './CartContext'
import Drawer from "./components/Drawer"
import Card from './components/card'



export default function Product(){
    const location = useLocation()
    const navigate = useNavigate()
    window.scrollTo(0, 100);
   
    const {drawerOpen, Products,addItemToCart, Cart} = useContext(appContext)
    const product = location.state?.product
    
    if (!product) {
        navigate("/")
        return null
    }

    const handleAddToCart = () => {
        
        addItemToCart(product)
    }

    return (
        <>
        <div className="main">
            <Header />
            <div className="flex flex-row">
                <a href="/" className="text-slate-600 hover:text-black hover:underline">Home /&nbsp;</a>
                <span className="text-slate-600">Product /&nbsp;</span>
                <span className="text-slate-600">&nbsp;{product.title}</span>
            </div>
            <div className="flex flex-row gap-48">
                <img 
                  src={product.image} 
                  className="w-4/12 object-contain flex-1"
                  alt={product.title}
                />
                <div className="flex flex-col gap-8 flex-1">
                    <p className="text-lg uppercase font-mono">{product.category}</p>
                    <h1 className="font-sans font-extrabold text-5xl">{product.title}</h1>
                    <p>{product.description}</p>
                    <p className="font-bold text-4xl font-semibold text-emerald-600">
                        ${product.price}
                    </p>
                    <button 
                      onClick={()=>handleAddToCart()}
                      className="rounded-full bg-black w-fit px-12 py-4 text-white text-xl"
                    >
                        Add to Cart
                    </button>
                    <p>Total Item in Cart: {Cart.length}</p>
                </div>
            </div>
            {drawerOpen?<Drawer cart={Cart} />:null}
            <div className="border-t-2 flex flex-col gap-12 justify-center items-center py-20">
                <h2 className='font-extrabold text-3xl font-sans uppercase'>
                          More Products
                        </h2>
                <div className='flex flex-row flex-wrap gap-8 max-w-screen-xl justify-center py-12'>
                          {Products.sort(() => 0.5 - Math.random()).slice(0, 8).map((item) => (
                            <Card key={item.id} product={item} />
                          ))}
                        </div>
            </div>
            <Footer />
        </div>
        </>
    )
}