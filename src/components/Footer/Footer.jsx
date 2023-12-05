/* eslint-disable react/no-unescaped-entities */
import { FaChevronLeft } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top bg-slate-950 px-[30px] py-[60px]">
                <div className="container">
                    <div className="flex justify-between gap-5">

                        <div className="w-1/4 footer-info">
                            <img className="h-10 mb-2" loading="lazy" src="assets/images/logoo.png" alt="TheEvenet" />
                            <p className="text-sm/6 text-white font-DanaB"><span className="text-sm/6 text-red-500 font-DanaB">  پالایشگاه امام خمینی شازند </span>یکی از شرکت های تابعه شرکت ملی پالایش و پخش فرآورده های نفتی ایران است که به عنوان بزرگترین پالایشگاه تک واحدی ایران در سال ۱۳۷۲ با ظرفیت اسمی ۱۵۰ هزار بشکه در روز راه اندازی شد. همچنین اولین پالایشگاهی است که کار مطالعات و اجرای آن پس از انقلاب اسلامی و در سال اول پس از جنگ تحمیلی آغاز شد.</p>
                        </div>

                        <div className="w-1/4 footer-links">
                            <h4 className=" font-MorabbaB">لینک های مرتبط</h4>
                            <ul>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://farsi.khamenei.ir/">دفتر مقام معظم رهبری</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.president.ir/">دفتر ریاست جمهوری</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.mop.ir/">وزارت نفت</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="www.saamad.ir">سامانه سماد</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="http://www.niordc.ir/">شرکت ملی پالایش و پخش</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.put.ac.ir/">دانشگاه نفت</a></li>
                            </ul>
                        </div>

                        <div className="w-1/4 footer-links">
                            <h4 className=" font-MorabbaB">منو</h4>
                            <ul>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="#hero">خانه</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="#about">خدمات</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="#speakers">رزرو سینما</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.ikorc.ir/pr">کتابخانه</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.ikorc.ir/faq">قوانین سایت</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.ikorc.ir/faq">سیاست حفظ حریم خصوصی</a></li>
                            </ul>
                        </div>

                        <div className="w-1/4 footer-contact">
                            <h4 className="font-DanaB">ارتباط با ما</h4>
                            <p className="font-Dana">شهر مهاجران منطقه C</p>
                            <p className="font-DanaM">ایمیل : <span className="">ikorc1@gmail.com</span></p>
                            <p className="font-DanaM">تلفن : <span>38225656</span></p>

                            {/* <div className="social-links">
                                <a href="https://eitaa.com/ikorc_ir"><i><img loading="lazy" src="./assets/img/icons/103-GraFa-4.png" alt="" /></i></a>
                                <a href="https://www.instagram.com/ikorc_ir/" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="https://telegram.me/ikorc" className="google-plus"><i className="bi bi-telegram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div> */}

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