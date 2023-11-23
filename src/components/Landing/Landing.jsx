
const Landing = () => {
    return (
        <section id="hero">

            <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
                <video autoPlay muted loop id="bg-video">
                    <source src="../assets/images/50.mp4" type="video/mp4" />
                </video>
                <div className="f1">
                    <h1>This is <span>IKORC</span></h1>
                    <p className="p2">leader in quality innovation</p>
                    <a href="#about" className="about-btn scrollto hvr-shrink">About The IKORC</a>
                </div>
            </div>
        </section>

    )
}

export default Landing;