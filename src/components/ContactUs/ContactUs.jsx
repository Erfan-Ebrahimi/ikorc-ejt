import "./ContactUs.scss";
import { FaEdgeLegacy } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
    return (
        <>

            <h2 className="title-header w-1/4 mx-auto mb-[60px] pb-5 text-4xl text-center text-transparent  bg-clip-text bg-gradient-to-t from-rose-400 to-sky-600 font-MorabbaB">ارتبـــــــــــــــــــاط با مـــــا</h2>
            <section id="contact" className="h-[400px] flex justify-center items-center mb-[60px] p-5 bg-cover overflow-hidden relative !bg-fixed grayscale-[70%]">

                <div className="container flex justify-between" >

                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaEdgeLegacy className="text-rose-100 rounded-full text-7xl text-center" />
                            <a className="text-rose-100 font-bold text-3xl font-sans pt-5" href="https://www.ikorc.ir/">IKORC.IR</a>
                        </div>
                    </div>
                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaPhoneVolume className="text-rose-100 rounded-full text-7xl text-center" />
                            <a className="text-rose-100 font-bold font-Dana text-2xl pt-5" href="https://www.ikorc.ir/">08638225656</a>
                        </div>
                    </div>
                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaInstagram className="text-rose-100 rounded-full text-7xl text-center" />
                            <a className="text-rose-100 font-bold text-3xl font-sans pt-5" href="https://www.ikorc.ir/">IKORC1@</a>
                        </div>
                    </div>
                    <div className="w-[220px] p-5 border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-black/40 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <div className="flex flex-col justify-between items-center text-center">
                            <FaTelegramPlane className="text-rose-100 rounded-full text-7xl text-center" />
                            <a className="text-rose-100 font-bold text-3xl font-sans pt-5" href="https://www.ikorc.ir/">IKORC1@</a>
                        </div>
                    </div>









                </div>
            </section>
        </>
    )
}

export default ContactUs