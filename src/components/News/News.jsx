import NewsCard from "../NewsCard/NewsCard"
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import 'swiper/css';
// import "swiper/navigation"

const News = () => {
  return (
    <section className="mt-20">

      <div className="container mx-auto w-1/2 text-center">
        <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 text-transparent  bg-clip-text bg-gradient-to-t from-rose-100 to-sky-600 dark:text-white">آخرین اخبار</h2>
        <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 border-b border-red-500 pb-4 text-white">سر تیتر خبرهای مهم</span>
      </div>
      <div className="">



        <div className="transition-colors relative hidden md:flex duration-300 mb-5 md:mb-3">
          <div className="swiper-button-prev" >
            <ChevronLeftIcon className="w-5 h-5 fill-zinc-600" />
          </div>
          <div className="swiper-button-next" >
            <ChevronRightIcon className="w-5 h-5 fill-zinc-600 dark:fill-white" />
          </div>
        </div>


      </div>



      <div className="container mt-[60px]">

        <Swiper
          className="mySwiper mx-auto"
          modules={[Navigation, Autoplay, Pagination]}
          slidesPerView={2}
          spaceBetween={20}
          speed={1500}
          pagination={true}
          // centeredSlides={true}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            330: {
              slidesPerView: 1,
              spaceBetween: 5
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20
            },

            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

        >

          <SwiperSlide>
            <NewsCard img="1" title="بازدید اساتید دانشگاه" desc="اساتید هیئت علمی و کارشناسان دانشگاه آیت الله العظمی بروجردی (ره) شهر بروجرد از شرکت پالایش نفت امام خمینی (ره) شازند بازدید کردند." date="1402/08/25" author="حسین محمدشاهی" />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard img="2" title="همایش تعالی خانواده" desc="همایش بزرگ “تعالی خانواده با محوریت تربیت فرزند” در شرکت پالایش نفت امام خمینی (ره) شازند برگزار شد." date="1402/09/07" author="حسین محمدشاهی" />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard img="3" title="نمایشگاه صنعت" desc="شرکت پالایش نفت امام خمینی(ره) شازند در شانزدهمین نمایشگاه صنعت استان مرکزی پذیرای کارشناسان ، صنعتگران و علاقه مندان است." date="1402/09/12" author="حسین محمدشاهی" />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard img="4" title="همایش بسیجیان" desc="همایش بسیجیان در شرکت پالایش نفت امام خمینی (ره) شازند برگزار شد." date="1402/09/08" author="حسین محمدشاهی" />
          </SwiperSlide>

        </Swiper>

        {/* <Pagination/> */}
      </div>

    </section>
  )
}

export default News