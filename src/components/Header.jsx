import { LuSearch } from "react-icons/lu";
import { CiShoppingCart } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { appContext } from "../CartContext";



export default function Header(){
    const {toggle} = useContext(appContext)
    
    return(
        <>
        <div className="w-full flex justify-center">
            <div className="flex flex-row items-center justify-between gap-16 items-center py-4 bg-white max-w-screen-xl flex-grow ">
                <a href="/" className="font-extrabold text-3xl">Shop.co</a>
                <div className=" nav-center flex flex-row gap-6 items-center w-fit">
                    <p className="font-medium font-sans text-sm hover:text-md hover:cursor-pointer w-fit">Shop</p>
                    <p className="font-medium font-sans text-sm hover:text-md hover:cursor-pointer w-fit">On Sale</p>
                    <p className="font-medium font-sans text-sm hover:text-md hover:cursor-pointer w-fit ">New Arrivals</p>
                    <p className="font-medium font-sans text-sm  hover:text-md hover:cursor-pointer w-fit">Brands</p>
                </div>
                <form className="bg-slate-100 py-2 px-8 rounded-full flex flex-row gap-2 items-center flex-grow">
            
                        <LuSearch />
                        <input placeholder="Search for products..." className="bg-transparent" ></input>
            
                </form>
            <div className="flex flex-row gap-4">
            <CiShoppingCart size="1.3em" onClick={()=>toggle()} className="hover:cursor-pointer"/>
            <FaRegUserCircle size="1.3em"/>
            </div>
            </div>
        </div>
        
        </>
    )
}