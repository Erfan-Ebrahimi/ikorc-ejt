/* eslint-disable react/no-unescaped-entities */
import "./Footer.scss";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-info">
                            <img loading="lazy" src="assets/img/logoo.png" alt="TheEvenet" />
                            <p><span className="sp">IKORC</span> is one of the subsidiary companies of Iran's National Petroleum Products Refining and Distribution Company, which was launched as the largest single unit refinery in Iran in 1372 with a nominal capacity of 150,000 barrels per day. It is also the first refinery whose study and implementation work began after the Islamic Revolution and in the first year after the imposed war.</p>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Links</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="https://farsi.khamenei.ir/">Leader.ir</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="https://www.president.ir/">President.ir</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="https://www.mop.ir/">Oil Ministry</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="www.saamad.ir">SAAMAD system</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="http://www.niordc.ir/">Distiribiution Company</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="https://www.put.ac.ir/">Petroleum University</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>MENU</h4>
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#about">About us</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="#speakers">UNITS</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="https://www.ikorc.ir/pr">Public relations</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="https://www.ikorc.ir/faq">Terms of service</a></li>
                                <li><i className="bi bi-chevron-right"></i> <a href="https://www.ikorc.ir/faq">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                ARAK
                                20 kilometer of Borujerd road
                                <strong>Phone :</strong> 086-33674541
                                <strong>Email :</strong> info@ikorc.ir
                            </p>

                            <div className="social-links">
                                <a href="https://eitaa.com/ikorc_ir"><i><img loading="lazy" src="./assets/img/icons/103-GraFa-4.png" alt="" /></i></a>
                                <a href="https://www.instagram.com/ikorc_ir/" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="https://telegram.me/ikorc" className="google-plus"><i className="bi bi-telegram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <span>IKORC</span> All Rights Reserved.
                </div>
                <div className="credits">
                    <p>Designed by <a className="hvr-grow" href="https://t.me/ME_7676"><img loading="lazy" src="./assets/img/ME.webp" alt="" /></a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;