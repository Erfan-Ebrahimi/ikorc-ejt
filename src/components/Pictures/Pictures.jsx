import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


import "./Pictures.scss";
import { Link } from 'react-router-dom';




const Pictures = () => {


    return (
        <section id="gallery" className="container mb-20">
            <div className="container mx-auto w-1/2 text-center mb-24">
                <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 text-transparent  bg-clip-text bg-gradient-to-t from-rose-100 to-sky-600 dark:text-white">گالری</h2>
                <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 border-b border-red-500 pb-4 text-white">گزارش تصویری</span>
            </div>


            <Swiper
                className="mySwiper mr-5 md:mr-0"
                modules={[Autoplay, Pagination, EffectCoverflow]}
                slidesPerView={2}
                dir='rtl'
                // width={100}
                spaceBetween={20}
                pagination={{ clickable: true }}
                speed={2000}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    330: {
                        slidesPerView: 1,
                        spaceBetween: 16
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 16
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 16
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }}

            >

                <SwiperSlide>
                    <img src="./assets/images/gallery/1.jpg" alt="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/2.jpg" alt="2" />
                </SwiperSlide>
               
                <SwiperSlide>
                    <img src="./assets/images/gallery/4.jpg" alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/5.jpg" alt="4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/6.jpg" alt="5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/7.jpg" alt="6" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/10.jpg" alt="7" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/11.jpg" alt="8" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/12.jpg" alt="9" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="./assets/images/gallery/13.jpg" alt="10" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/16.jpg" alt="11" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/17.jpg" alt="12" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/18.jpg" alt="13" />
                </SwiperSlide>
            </Swiper>

            <div className=" container flex flex-col md:flex-row  justify-center items-center mt-20 gap-5">
                <Link to='/pics' className='archive hover:scale-95 duration-300 transition-all w-full md:w-3/4 h-[100px] md:h-[200px] flex flex-col justify-center items-center rounded-xl overflow-hidden border border-red-400'>
                    <Link to="/pics" className=" text-center mr-5 text-white text-sm md:text-3xl md:px-1 font-MorabbaB rounded-xl hover:text-white  transition-all duration-300 z-30">آرشیو تصاویر</Link>
                    <Link to="/pics" className=" text-center mr-5 text-white text-sm md:text-xl md:px-1 font-MorabbaB rounded-xl hover:text-white  transition-all duration-300 z-30">قدیمی و جدید</Link>

                </Link>
                <div className='arc hover:scale-95 transition-all duration-300   w-full md:w-1/4 h-[150px] md:h-[200px] flex justify-center items-center rounded-xl overflow-hidden border border-red-400'  >

                    <div className='flex flex-col justify-center ml-5 items-center z-20'>
                        <span className="text-white font-MorabbaB mt-1 text-l">تصویربردار</span>
                        <span className="text-white font-MorabbaB mt-1 text-l"> حسین محمد شاهی</span>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Pictures