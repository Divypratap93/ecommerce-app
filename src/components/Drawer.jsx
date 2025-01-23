import { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { appContext } from "../CartContext";


export default function Drawer({cart}){

    const {Cart, drawerOpen, toggle, removeItemFromCart} = useContext(appContext)

    return(
        <>
        <div className="relative">
      

      {/* Overlay */}
      
        <div
          
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={toggle}></div>
      

      {/* Drawer */}
          <div className={`fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 transform flex flex-col justify-between pb-12 `}>
    <div className="flex flex-col">
            {/* Drawer Header */}
            <div className="p-4 bg-black text-white text-lg font-bold">
              {cart.length} Items
            </div>
            {/* Drawer Content */}
            <div className="p-4 flex flex-col gap-4">
              {cart.map((item)=>(
          
                <div key={item.id} className="flex flex-row gap-8 bg-slate-200 rounded-lg p-8 shadow-xl justify-between">
                    <img src={item.image} className="w-16 h-32 flex-1"></img>
                    <div className="flex flex-col justify-between flex-1">
                    <IoMdCloseCircleOutline className="self-end" onClick={()=>removeItemFromCart(item)}/>
                        <p className="font-mono text-sm font-extrabold line-clamp-2">{item.title}</p>
                        <p className="text-emerald-700 font-sans text-xl font-bold">${item.price}</p>
                    </div>
                </div>
              ))}
          
            </div>
      </div>
            <p className="font-extrabold font-sans text-emerald-800 text-xl px-6">Total: ${Cart.reduce((total, item) => total + item.price, 0)}</p>
      </div>
    </div>
  );
        
        
        </>
    )
}