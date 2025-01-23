import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




export default function Footer(){
    return (
        <>
        <div className="flex flex-row gap-12 max-w-screen-xl pb-8 pt-24 border-t-2 justify-between px-20 flex-wrap">
            <div className="flex flex-col gap-4 flex-1">
                <a href="/" className="font-extrabold text-3xl">Shop.co</a>
            <span className="text-sm font-mono">We have clothes that suits your style and which you’re proud to wear. From women to men.</span>
                <div className="flex flex-row gap-4"><FaTwitter />
            <FaFacebook />
            <FaInstagram />
                </div>
            </div>
            
        {/* company list */}

        <div className="flex flex-col gap-6 flex-1">
            <p className="text-xl font-semibold text-slate-600 uppercase">Company</p>
            <ul className="flex flex-col gap-2">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
            </ul>
        </div>

        {/* help */}

        <div className="flex flex-col gap-6 flex-1">
            <p className="text-xl font-semibold text-slate-600 uppercase">help</p>
            <ul className="flex flex-col gap-2">
                <li>Customer Support</li>
                <li>Delivery Detail</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        {/* faq */}

        <div className="flex flex-col gap-6 flex-1">
            <p className="text-xl font-semibold text-slate-600 uppercase">Account</p>
            <ul className="flex flex-col gap-2">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
            </ul>
        </div>
        {/* resources */}

        <div className="flex flex-col gap-6 flex-1">
            <p className="text-xl font-semibold text-slate-600 uppercase">resources</p>
            <ul className="flex flex-col gap-2">
                <li>Free eBook</li>
                <li>Development Tutorial</li>
                <li>How to Blog</li>
                <li>Youtube Playlist</li>
            </ul>
        </div>
        

        </div>
        
        </>
    )
}