import "./Address.scss";

import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";



const Address = () => {
    return (
        <section id="address">
            {/* <h2 className="title-header w-1/4 mx-auto mb-[60px] pb-5 text-4xl text-center text-transparent  bg-clip-text bg-gradient-to-t from-rose-400 to-sky-600 font-MorabbaB">آدرس</h2> */}
            <div className="address py-[60px] !bg-cover rounded-lg grayscale-[50%] bg-center !bg-fixed  ">
                <h3 className="relative overflow-hidden add-tit text-red-100 border-x-4 border-rose-600 max-w-max mx-auto bg-black/40 p-5 mb-10 text-center text-xl md:text-4xl font-MorabbaM">شهر مهاجران _ منطقه C _  باشگاه خدمات اجتماعی پالایشگاه شازند</h3>
                <div className=" container w-1/2 flex justify-center mx-auto gap-x-0 flex-wrap md:flex-nowrap " >

                    <div className="w-20 md:w-[100px] px-5 py-2 text-center mx-auto flex justify-center border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-slate-950/90 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <svg className="w-20 -4xl md:text-7xl text-center fill-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="m5.968 23.942a6.624 6.624 0 0 1 -2.332-.83c-1.62-.929-2.829-2.593-3.217-4.426-.151-.717-.17-1.623-.15-7.207.019-6.009.005-5.699.291-6.689.142-.493.537-1.34.823-1.767 1.055-1.57 2.607-2.578 4.53-2.943.384-.073.94-.08 6.056-.08 6.251 0 6.045-.009 7.066.314a6.807 6.807 0 0 1 4.314 4.184c.33.937.346 1.087.369 3.555l.02 2.23-.391.268c-.558.381-1.29 1.06-2.316 2.15-1.182 1.256-2.376 2.42-2.982 2.907-1.309 1.051-2.508 1.651-3.726 1.864-.634.11-1.682.067-2.302-.095-.553-.144-.517-.168-.726.464a6.355 6.355 0 0 0 -.318 1.546l-.031.407-.146-.03c-1.215-.241-2.419-1.285-2.884-2.5a3.583 3.583 0 0 1 -.26-1.219l-.016-.34-.309-.284c-.644-.59-1.063-1.312-1.195-2.061-.212-1.193.34-2.542 1.538-3.756 1.264-1.283 3.127-2.29 4.953-2.68.658-.14 1.818-.177 2.403-.075 1.138.198 2.067.773 2.645 1.639.182.271.195.31.177.555a.812.812 0 0 1 -.183.493c-.465.651-1.848 1.348-3.336 1.68-2.625.585-4.294-.142-4.033-1.759.026-.163.04-.304.031-.313-.032-.032-.293.104-.575.3-.479.334-.903.984-1.05 1.607-.036.156-.05.406-.034.65.02.331.053.454.192.736.092.186.275.45.408.589l.24.251-.096.122a4.845 4.845 0 0 0 -.677 1.217 3.635 3.635 0 0 0 -.105 1.815c.103.461.421 1.095.739 1.468.242.285.797.764.886.764.024 0 .044-.048.044-.106.001-.23.184-.973.326-1.327.423-1.058 1.351-1.96 2.82-2.74.245-.13.952-.47 1.572-.757 1.36-.63 2.103-1.015 2.511-1.305 1.176-.833 1.903-2.065 2.14-3.625.086-.57.086-1.634 0-2.207-.368-2.438-2.195-4.096-4.818-4.37-2.925-.307-6.648 1.953-8.942 5.427-1.116 1.69-1.87 3.565-2.187 5.443-.123.728-.169 2.08-.093 2.75.193 1.704.822 3.078 1.903 4.156a6.531 6.531 0 0 0 1.87 1.313c2.368 1.13 4.99 1.155 7.295.071.996-.469 1.974-1.196 3.023-2.25 1.02-1.025 1.71-1.88 3.592-4.458 1.04-1.423 1.864-2.368 2.272-2.605l.15-.086-.019 3.091c-.018 2.993-.022 3.107-.123 3.561-.6 2.678-2.54 4.636-5.195 5.242l-.468.107-5.775.01c-4.734.008-5.85-.002-6.19-.056z" />
                        </svg>
                    </div>
                    <div className="w-20 md:w-[100px] px-5 py-2 text-center mx-auto flex justify-center border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-slate-950/90 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <SiGmail className="fill-red-500   text-4xl md:text-7xl text-center" />
                    </div>
                    <div className="w-20 md:w-[100px] px-5 py-2 text-center mx-auto flex justify-center border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-slate-950/90 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <FaInstagram className="fill-red-500  text-4xl md:text-7xl text-center" />
                    </div>
                    <div className="w-20 md:w-[100px] px-5 py-2 text-center mx-auto flex justify-center border border-cyan-50/5 hover:border hover:border-yellow-500 hover:scale-110 bg-slate-950/90 hover:bg-black/60 rounded-2xl cursor-pointer transition-all duration-300">
                        <FaTelegramPlane className="fill-red-500  text-4xl md:text-7xl text-center" />
                    </div>

                </div>
            </div>

        </section>

    )
}

export default Address;