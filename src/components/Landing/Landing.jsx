import "./Landing.scss"
const Landing = () => {
    return (
        <section id="hero">

            <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                <video autoPlay muted loop id="bg-video">
                    <source src="../assets/images/50.mp4" type="video/mp4" />
                </video>
                <div className="f1">
                    <h1 className="f font-MorabbaB text-red-800 text-5xl bg-red-50/40 rounded-lg p-5">باشگاه خدمات اجتماعی پالایشگاه</h1>
                    <p className="p2 font-MorabbaB">پیشرو در نوآوری و کیفیت</p>
                    <a href="#about" className="about-btn scrollto hvr-shrink">About The IKORC</a>
                </div>
            </div>
        </section>

    )
}

export default Landing;