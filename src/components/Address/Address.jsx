import "./Address.scss";

import { FaEdgeLegacy } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";



const Address = () => {
    return (
        <section id="address">
            <h2 className="title-header w-1/4 mx-auto mb-[60px] pb-5 text-4xl text-center text-transparent  bg-clip-text bg-gradient-to-t from-rose-400 to-sky-600 font-MorabbaB">آدرس</h2>
            <div className="address">
                <h3 className="text-red-100 bg-black/40 p-5 mb-10 text-center text-5xl font-MorabbaB">شهر مهاجران _ منطقه C _  باشگاه خدمات اجتماعی پالایشگاه شازند</h3>
                <div className="container flex justify-between" >

                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaEdgeLegacy className="text-rose-100 rounded-full text-7xl text-center" />
                            <span className="text-sky-300 font-DanaB pt-2">وبسایت</span>
                            <a className="text-rose-100 font-bold text-3xl font-sans pt-5" href="https://www.ikorc.ir/">IKORC.IR</a>
                        </div>
                    </div>
                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaPhoneVolume className="text-rose-100 rounded-full text-7xl text-center" />
                            <span className="text-sky-300 font-DanaB pt-2">تلفن</span>
                            <a className="text-rose-100 font-bold font-Dana text-xl pt-5 " href="https://www.ikorc.ir/">56563822 _ 086</a>
                        </div>
                    </div>
                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaInstagram className="text-rose-100 rounded-full text-7xl text-center" />
                            <span className="text-sky-300 font-DanaB pt-2">اینستاگرام</span>
                            <a className="text-rose-100 font-bold text-3xl font-sans pt-5" href="https://www.ikorc.ir/">IKORC1@</a>
                        </div>
                    </div>
                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaTelegramPlane className="text-rose-100 rounded-full text-7xl text-center" />
                            <span className="text-sky-300 font-DanaB pt-2">تلگرام</span>

                            <a className="text-rose-100 font-bold text-3xl font-sans pt-5" href="https://www.ikorc.ir/">IKORC1@</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>

    )
}

export default Address;