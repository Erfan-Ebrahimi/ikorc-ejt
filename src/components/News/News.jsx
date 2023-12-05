import NewsCard from "../NewsCard/NewsCard"
import { Navigation, Autoplay, Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
// import "swiper/navigation"

const News = () => {
  return (
    <section className="">
      <h2 className="title-header w-1/4 mx-auto mb-5 pb-5 text-4xl text-center text-transparent  bg-clip-text bg-gradient-to-t from-rose-400 to-sky-600 font-MorabbaB">آخــــرین اخــــــــبار</h2>

      <div className="container mt-[60px]">

        <Swiper
          className="mySwiper"
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