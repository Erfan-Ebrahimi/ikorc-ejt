import "./Address.scss"
const Address = () => {
    return (
        <section id="venue">

            <div className="container-fluid" data-aos="fade-up">

                <div className="section-header">
                    <h2>Address</h2>
                    <p>Come & Visit The <span >IKORC</span></p>
                </div>

                <div className="row g-0">
                    <div className="col-lg-4 venue-map">
                        <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18105.158454879886!2d49.491399043063325!3d34.014917323994254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fecf34f00304ad5%3A0x89cdd29bc1b31bbb!2sArak%20Oil%20Refinery!5e1!3m2!1sen!2snl!4v1667321543608!5m2!1sen!2snl" ></iframe>
                    </div>

                    <div className="col-lg-8 venue-info hvr-shrink">
                        <div className="row justify-content-center">
                            <div className="position-relative">
                                <i className="bi bi-geo-alt"></i>
                                <h3>ARAK - 20km Borujerd Road</h3>
                                <div className="social unitee ">
                                    <a className="" href="#"><img loading="lazy" className="imgicon hvr-grow" src="./assets/images/icons/q6.png" alt="" /></a>
                                    <a className="" href="#"><img loading="lazy" className="imgicon hvr-grow" src="./assets/images/icons/q1.png" alt="" /></a>
                                    <a className="" href="#"><img loading="lazy" className="imgicon hvr-grow" src="./assets/images/icons/q2.png" alt="" /></a>
                                    <a className="" href="#"><img loading="lazy" className="imgicon hvr-grow" src="./assets/images/icons/q3.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    )
}

export default Address;