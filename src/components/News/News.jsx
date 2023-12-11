import NewsCard from "../NewsCard/NewsCard"
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import 'swiper/css';

const News = () => {
  return (
    <section className="mt-20">

      <div className="container mx-auto w-1/2 text-center">
        <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 text-transparent  bg-clip-text bg-gradient-to-t from-rose-100 to-sky-600 dark:text-white">آخرین اخبار</h2>
        <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 border-b border-red-500 pb-4 text-white">تیتر خبرهای جاری</span>
      </div>
      <div className="">
        <div className="transition-colors relative hidden md:flex duration-300 mb-5 md:mb-3">
          <div className="swiper-button-prev" >
            <ChevronLeftIcon className="w-8 h-8 fill-zinc-600 dark:fill-yellow-500" />
          </div>
          <div className="swiper-button-next" >
            <ChevronRightIcon className="w-8 h-8 fill-zinc-600 dark:fill-yellow-500" />
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
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            330: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 6
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
              slidesPerView: 2,
              spaceBetween: 10
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 10
            }
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}

        >

          <SwiperSlide>
            <NewsCard img="1" title="برگزاری المپیاد جوانان" desc="میزبانی شرکت پخش و پالایش نفت شازند از المپیاد ورزشی فرزندان ذکور کارکنان زیر 25 سال کشور" date="1402/08/25" author="حسین محمدشاهی" />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard img="2" title="همایش تعالی خانواده" desc="همایش بزرگ “تعالی خانواده با محوریت تربیت فرزند” به همت باشگاه خدمات اجتماعی شرکت پالایش نفت امام خمینی (ره) شازند در سالن ستارگان برگزار شد." date="1402/09/07" author="حسین محمدشاهی" />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard img="3" title="اردوی زیارتی" desc="برگزاری اردوی یک روزه زیارتی قم با حضور خانواده کارکنان شرکت پخش و پالایش نفت شازند به همت باشگاه خدمات اجتماعی." date="1402/09/12" author="حسین محمدشاهی" />
          </SwiperSlide>
          <SwiperSlide>
            <NewsCard img="4" title="برگزاری مسابقات کشتی" desc="میزبانی شرکت پخش و پالایش نفت شازند از مسابقات کشتی فرزندان کارکنان رده سنی جوانان" date="1402/09/08" author="حسین محمدشاهی" />
          </SwiperSlide>

        </Swiper>

        {/* <Pagination/> */}
      </div>

    </section>
  )
}

export default News