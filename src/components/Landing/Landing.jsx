import Header from "../Header/Header";
import "./Landing.scss"
const Landing = () => {
    return (
        <section id="hero" className="w-full h-[100vh] bg-none bg-cover overflow-hidden relative">

            <div className="hero-container flex justify-center items-center flex-col text-center absolute bottom-0 left-0 right-0 top-[90px]">
                <Header/>
                <video autoPlay muted loop id="bg-video" className="absolute z-[-100] top-[-263px] left-[-555px] grayscale-[80%] min-w-[1960px] ">
                    <source src="../assets/images/50.mp4" type="video/mp4" />
                </video>
                <div className="flex flex-col justify-center items-center text-center bg-sky-950/10">
                    <h1 className="font-MorabbaB text-transparent  bg-clip-text bg-gradient-to-t from-red-500 to-red-800 text-7xl  rounded-xl py-5 px-8  cursor-pointer">باشگاه خدمات اجتماعی </h1>
                    <p className="text-white text-3xl rounded-lg px-8 py-2 mt-5  font-MorabbaB border-b-2 border-red-500">پالایشگاه امام خمینی شازند</p>
                </div>
            </div>
        </section>

    )
}

export default Landing;