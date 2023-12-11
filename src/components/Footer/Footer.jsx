/* eslint-disable react/no-unescaped-entities */
import { FaChevronLeft } from "react-icons/fa";
import Swal from 'sweetalert2';
import "./Footer.scss";

const Footer = () => {

    const showChart = () => {
        Swal.fire({
            imageUrl: "./assets/images/chart.png",
            imageHeight: 400,
            confirmButtonText: "بستن"
        });
    }


    return (
        <footer id="footer">
            <div className="footer-top bg-slate-950 px-[30px] py-[60px]">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between gap-5">

                        <div className="w-full md:w-1/4 footer-info">
                            <img className="mx-auto md:mx-1 h-10 mb-2" loading="lazy" src="assets/images/logoo.png" alt="TheEvenet" />
                            <p className="text-sm/6 text-justify md:text-right text-white font-DanaB"><span className="text-sm/6 text-red-500 font-DanaB">  پالایشگاه امام خمینی شازند </span>یکی از شرکت های تابعه شرکت ملی پالایش و پخش فرآورده های نفتی ایران است که به عنوان بزرگترین پالایشگاه تک واحدی ایران در سال ۱۳۷۲ با ظرفیت اسمی ۱۵۰ هزار بشکه در روز راه اندازی شد. همچنین اولین پالایشگاهی است که کار مطالعات و اجرای آن پس از انقلاب اسلامی و در سال اول پس از جنگ تحمیلی آغاز شد.</p>
                        </div>

                        <div className="w-full md:w-1/4 footer-links">
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

                        <div className="w-full md:w-1/4 footer-links">
                            <h4 className=" font-MorabbaB">منو</h4>
                            <ul>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="#hero">خانه</a></li>
                                <li className="flex items-center text-lg text-red-600" onClick={showChart}><FaChevronLeft /> <a className="text-base font-DanaM" href="#about">چارت سازمانی</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="#speakers">رزرو سینما</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.ikorc.ir/pr">کتابخانه</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.ikorc.ir/faq">قوانین سایت</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="https://www.ikorc.ir/faq">سیاست حفظ حریم خصوصی</a></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 footer-contact">
                            <h4 className="font-DanaB">ارتباط با ما</h4>
                            <p className="font-Dana">شهر مهاجران منطقه C</p>
                            <p className="font-DanaM">ایمیل : <span className="">ikorc1@gmail.com</span></p>
                            <p className="font-DanaM">تلفن : <span>38225656</span></p>
                            <div className=" w-[300px] md:mt-10">
                                <img src="./assets/images/1402.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="container">
                <div className="text-center mt-2 text-white font-DanaB text-sm">
                    &copy; تمامی حقوق این وبسایت متعلق به{" "}
                    <span className="text-red-500">{" "}
                        باشگاه خدمات اجتماعی{" "}
                    </span>
                    می باشد.
                </div>
            </div>
        </footer>
    )
}

export default Footer;