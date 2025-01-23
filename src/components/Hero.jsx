import heroImage from "../assets/Rectangle.png"

export function Hero(){
    return(
        <>
        <div className="pt-20 px-12  bg-[#F2F0F1] w-full flex flex-col justify-center items-center" >
        
            <div className="max-w-screen-xl flex flex-row justify-center">
                <div className="w-6/12 flex flex-col gap-8">
                    <h1 className="text-5xl font-extrabold uppercase">Find clothes that matches your style</h1>
                    <p className="text-sm font-thin">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className="px-8 py-4 bg-black w-fit text-white rounded-full">Shop Now</button>
                    <div className="flex flex-row pb-8">
                        <div className="border-r-2 py-8 pr-8">
                            <h3 className="text-5xl font-semibold">200+</h3>
                            <span className="text-slate-500 font-medium">International Brands</span>
                        </div>
                        <div className="border-r-2 p-8">
                        <h3 className="text-5xl font-semibold">2000+</h3>
                        <span className="text-slate-500 font-medium">High-Quality Products</span>
                        </div>
                        <div className="p-8">
                        <h3 className="text-5xl font-semibold">30000+</h3>
                        <span className="text-slate-500 font-medium">Happy Customers</span>
                        </div>
                    </div>
                </div>
                <img src={heroImage} className="overflow-hidden object-cover object-right"></img>
            </div>
        </div>
        
        </>
    )
}