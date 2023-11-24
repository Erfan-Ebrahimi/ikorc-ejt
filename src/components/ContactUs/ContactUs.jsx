import "./ContactUs.scss"

const ContactUs = () => {
    return (
        <section id="contact" className="section-bg">

            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Contact Us</h2>
                    <p ><span>IKORC</span> is ready to receive comments and suggestions from respected visitors.</p>
                </div>

                <div className="row contact-info">

                    <div className="col-md-4">
                        <div className="contact-address">
                            <i className="bi bi-browser-chrome"></i>
                            <h3>Website</h3>
                            <p><a href="https://www.ikorc.ir/">WWW.IKORC.IR</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-phone">
                            <i className="bi bi-telephone"></i>
                            <h3>Phone Number</h3>
                            <p><a href="tel:+988633674541">086-33674541</a></p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-email">
                            <i className="bi bi-envelope"></i>
                            <h3>Email</h3>
                            <p><a href="info@ikorc.ir">info@ikorc.ir</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs