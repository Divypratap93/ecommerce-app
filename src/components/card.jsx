import React from "react"
import { Link } from "react-router-dom"

export default function Card({product}){
    return (
        <Link to={`/Product/${product.id}`} state={{product: product}}>
            <div className="rounded-lg bg-white box-border border-2 w-64 h-full flex flex-col items-center pt-6 justify-between shadow-lg hover:cursor-pointer hover:border-2 hover:border-black hover:shadow-xl">
                <img 
                  src={product.image} 
                  className="w-32 h-32 object-cover object-top"
                  alt={product.title}
                />
                <div className="p-8 flex flex-col gap-4">
                    <p className="font-bold text-lg line-clamp-2">{product.title}</p>
                    <p className="font-medium text-blue-950 uppercase">{product.category}</p>
                    <p className="font-semibold text-xl text-green-800">${product.price}</p>
                </div>
            </div>
        </Link>
    )
}