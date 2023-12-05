import { Navigation, Autoplay, Pagination, EffectCoverflow} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


import "./Pictures.scss";




const Pictures = () => {

    return (
        <section id="gallery" className="container mb-20">
            <h2 className="title-header w-1/4 mx-auto mb-[60px] pb-5 text-4xl text-center text-transparent  bg-clip-text bg-gradient-to-t from-rose-400 to-sky-600 font-MorabbaB">گالــــــــری</h2>


            <Swiper
                className="mySwiper"
                modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
                slidesPerView={2}
                spaceBetween={20}
                pagination={true}
                speed={2000}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
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
                        slidesPerView: 2,
                        spaceBetween: 5
                    },
                    480: {
                        slidesPerView: 2,
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
                        slidesPerView: 3,
                        spaceBetween: 40
                    }
                }}
            
                navigation={true}
            >

                <SwiperSlide>
                    <img src="./assets/images/gallery/20.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/22.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/23.JPG" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/5.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/6.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/9.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/10.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/11.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/12.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/13.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/14.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./assets/images/gallery/16.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
            <div className="flex flex-col justify-center items-center mt-5">
                <img className="w-20 !rounded-none !scale-100" src="./assets/images/ph1.png" alt="" />
                <span className="text-red-200 font-MorabbaB mt-1 text-l">حسین محمد شاهی</span>
            </div>
        </section >
    )
}

export default Pictures