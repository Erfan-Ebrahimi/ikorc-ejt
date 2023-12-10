/* eslint-disable react/no-unescaped-entities */
import "./Services.scss";


const Services = () => {
  return (
    <section id="services" className="px-10 py-14 !bg-cover !bg-right !overflow-hidden !relative !bg-fixed">
      <div className="container mx-auto w-1/2 text-center">
        <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 text-transparent  bg-clip-text bg-gradient-to-t from-rose-100 to-sky-600 dark:text-white">خدمات ما</h2>
        <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 border-b border-red-500 pb-4 text-white">امکانات فرهنگی ، رفاهی ، ورزشی</span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:flex-row mt-20 gap-10 md:container justify-center child:cursor-pointer">

        <div className="flex flex-col w-[200px] justify-center items-center p-2 rounded-2xl border-b border-red-400/30 hover:bg-white/20 transition-all duration-300 ">
          <div className="w-20 md:w-[150px] md:h-[150px]">
            <img src="./assets/images/services/cinema.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center md:w-full ">
            <h1 className="text-red-100 text-3xl md:h-10 mt-5 font-MorabbaM">سینما</h1>
            <p className="font-DanaM text-xs pt-2 w-full md:h-10 text-white">اکران فیلم های سینمایی ایران و جهان </p>
          </div>
        </div>

        <div className="flex flex-col w-[200px] justify-center items-center p-2 rounded-2xl border-b border-red-400/30 hover:bg-white/20 transition-all duration-300 ">
          <div className="w-20 md:w-[150px] md:h-[150px]">
            <img src="./assets/images/services/food.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center md:w-full ">
            <h1 className="text-red-100 text-3xl md:h-10 mt-5 font-MorabbaM">رستوران</h1>
            <p className="font-DanaM text-xs pt-2 w-full md:h-10 text-white">پذیرایی از کارکنان و خانواده های محترمشان </p>
          </div>
        </div>

        <div className="flex flex-col w-[200px] justify-center items-center p-2 rounded-2xl border-b border-red-400/30 hover:bg-white/20 transition-all duration-300 ">
          <div className="w-20 md:w-[150px] md:h-[150px]">
            <img src="./assets/images/services/education.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center md:w-full ">
            <h1 className="text-red-100 text-3xl md:h-10 mt-5 font-MorabbaM">کتابخانه</h1>
            <p className="font-DanaM text-xs pt-2 w-full md:h-10 text-white">بیش از ده هزار جلد کتاب ارزنده </p>
          </div>
        </div>

        <div className="flex flex-col w-[200px] justify-center items-center p-2 rounded-2xl border-b border-red-400/30 hover:bg-white/20 transition-all duration-300 ">
          <div className="w-20 md:w-[150px] md:h-[150px]">
            <img src="./assets/images/services/sport.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center md:w-full ">
            <h1 className="text-red-100 text-3xl md:h-10 mt-5 font-MorabbaM">مجتمع ورزشی</h1>
            <p className="font-DanaM text-xs pt-2 w-full md:h-10 text-white">شامل استخر ، زمین چمن ، سالن چند منظوره و ...</p>
          </div>
        </div>

        <div className="flex flex-col w-[200px] justify-center items-center p-2 rounded-2xl border-b border-red-400/30 hover:bg-white/20 transition-all duration-300 ">
          <div className="w-20 md:w-[150px] md:h-[150px]">
            <img src="./assets/images/services/hotel.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center md:w-full ">
            <h1 className="text-red-100 text-3xl md:h-10 mt-5 font-MorabbaM">مجتمع تفریحی</h1>
            <p className="font-DanaM text-xs pt-2 w-full md:h-10 text-white">مجتمع تفریحی توسکا در شمال</p>
          </div>
        </div>





      </div>
    </section>
  )
}

export default Services