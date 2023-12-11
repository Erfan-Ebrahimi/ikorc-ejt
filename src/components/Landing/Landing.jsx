import Navbar from "../Navbar/Navbar";
import "./Landing.scss"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';


const Landing = () => {

    const showM = () => {
        Swal.fire({
                imageUrl: "./assets/images/moj-logo.png",
                imageHeight: 200,
                text: "*این سایت نمونه اولیه می باشد این قسمت توسعه داده نشده است*",
              });
    }
    return (
        <section id="hero" className="relative md:h-[100vh]">

            <div className="absolute w-full md:top-[-120px] z-[-100] grayscale-[65%] ">
                <video autoPlay muted loop>
                    <source src="../assets/images/50.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="hidden lg:flex">

                <Navbar />
            </div>

            <div className="w-full h-[100%] md:h-[100vh] md:mt-14">
                <div className="w-full h-[100%] md:h-[400px]   flex flex-col justify-center items-center pt-10 text-center">
                    <div className=" w-full">
                        <div id="logo" className="flex justify-center mx-auto text-center bg-slate-950/50">
                            <Link to="/"><img className="w-[70px] md:w-[150px] " src="../assets/images/e3.gif" /></Link>
                        </div>
                        <p className="text-white bg-slate-950/50 text-sm md:text-3xl  md:pt-5 rounded-lg  font-MorabbaB ">شرکت پالایش نفت امام خمینی(ره)</p>
                        <h1 className="font-MorabbaB bg-slate-950/50 text-rose-600 text-3xl md:text-7xl rounded-xl md:py-5 px-8 cursor-pointer">باشگاه خدمات اجتماعی </h1>
                        <div className="flex justify-center items-center gap-x-4 py-5 md:bg-slate-950/50">
                            <Link onClick={showM} href="/" className="w-[100px] md:w-[120px] bg-red-100 text-rose-700 py-1 md:py-1.5 text-sm md:text-base md:px-1 font-DanaB rounded-xl hover:text-white hover:bg-rose-700 transition-all duration-300">ورود | ثبت نام</Link>
                            <span className="text-white text-xl">|</span>
                            <Link onClick={showM} href="/" className="w-[100px] md:w-[120px] bg-rose-700 text-white py-1 md:py-1.5 text-sm md:text-base md:px-1 font-DanaB rounded-xl hover:text-rose-800 hover:bg-white transition-all duration-300">ارتباط با ما</Link>
                        </div>
                    </div>
                </div>

            </div>



        </section>

    )
}

export default Landing;