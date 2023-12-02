/* eslint-disable react/no-unescaped-entities */
import "./Services.scss";


const Services = () => {
  return (
    <section id="services" className="px-10 py-14 !bg-cover !bg-right !overflow-hidden !relative !bg-fixed">
      <h2 className="title-header w-1/4 mx-auto mb-5 pb-5 text-4xl text-center text-transparent  bg-clip-text bg-gradient-to-t from-rose-400 to-sky-600 font-MorabbaB">خــدمـــــات رفاهی</h2>

      <div className="flex gap-5 container">

        <div className="flex flex-col w-[300px] justify-center items-center p-2 rounded-2xl hover:bg-white/20 transition-all duration-300 ">
          <div className="w-[150px] h-[150px]">
            <img src="./assets/images/services/food.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center w-full ">
            <h1 className="text-red-100 text-3xl mt-5 font-MorabbaB">رستوران</h1>
            <p className="font-DanaM text-sm pt-2 text-white">پذیرایی از کارکنان و خانواده های محترمشان </p>
          </div>
        </div>

        <div className="flex flex-col w-[300px] justify-center items-center p-2 rounded-2xl hover:bg-white/20 transition-all duration-300 ">
          <div className="w-[150px] h-[150px]">
            <img src="./assets/images/services/education.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center w-full ">
            <h1 className="text-red-100 text-3xl mt-5 font-MorabbaB">کتابخانه</h1>
            <p className="font-DanaM text-sm pt-2 text-white">بیش از ده هزار جلد کتاب ارزنده </p>
          </div>
        </div>

        <div className="flex flex-col w-[300px] justify-center items-center p-2 rounded-2xl hover:bg-white/20 transition-all duration-300 ">
          <div className="w-[150px] h-[150px]">
            <img src="./assets/images/services/sport.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center w-full ">
            <h1 className="text-red-100 text-3xl mt-5 font-MorabbaB">مجتمع ورزشی</h1>
            <p className="font-DanaM text-sm pt-2 text-white">شامل استخر ، زمین چمن ، سالن چند منظوره و ...</p>
          </div>
        </div>

        <div className="flex flex-col w-[300px] justify-center items-center p-2 rounded-2xl hover:bg-white/20 transition-all duration-300 ">
          <div className="w-[150px] h-[150px]">
            <img src="./assets/images/services/hotel.svg" className="mx-auto" alt="" />
          </div>
          <div className="text-center w-full ">
            <h1 className="text-red-100 text-3xl mt-5 font-MorabbaB">مجتمع تفریحی</h1>
            <p className="font-DanaM text-sm pt-2 text-white">مجتمع تفریحی توسکا در شمال</p>
          </div>
        </div>





      </div>
    </section>
  )
}

export default Services