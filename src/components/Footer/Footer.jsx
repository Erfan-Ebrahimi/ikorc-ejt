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

    const showM = () => {
        Swal.fire({
          imageUrl: "./assets/images/ME.webp",
          imageHeight: 350,
          text: "__طراحی و کدنویسی : محمد ابراهیمی__",
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
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://farsi.khamenei.ir/">دفتر مقام معظم رهبری</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://www.president.ir/">دفتر ریاست جمهوری</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://www.mop.ir/">وزارت نفت</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://www.saamad.ir">سامانه سماد</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="http://www.niordc.ir/">شرکت ملی پالایش و پخش</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://www.put.ac.ir/">دانشگاه نفت</a></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 footer-links">
                            <h4 className=" font-MorabbaB">منو</h4>
                            <ul>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" href="#">خانه</a></li>
                                <li className="flex items-center text-lg text-red-600" onClick={showChart}><FaChevronLeft /> <a className="text-base font-DanaM" href="#">چارت سازمانی</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="#">رزرو سینما</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://www.ikorc.ir/">کتابخانه</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://www.ikorc.ir/">قوانین سایت</a></li>
                                <li className="flex items-center text-lg text-red-600"><FaChevronLeft /> <a className="text-base font-DanaM" target="_blank" rel="noreferrer" href="https://www.ikorc.ir/">سیاست حفظ حریم خصوصی</a></li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/4 footer-contact">
                            <h4 className="font-DanaB">ارتباط با ما</h4>
                            <p className="font-Dana">شهر مهاجران منطقه C</p>
                            <p className="font-DanaM">ایمیل : <span className="">ikorc1@gmail.com</span></p>
                            <p className="font-DanaM">تلفن : <span>38225656</span></p>
                            <div className="mx-auto md:w-[300px] md:mt-10">
                                <img src="./assets/images/1402.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div onClick={showM} className="md:container flex flex-col justify-center items-center">
            <div className="text-center cursor-pointer mt-2 pb-2 text-white font-DanaB text-xs md:text-xl">
                     تمامی حقوق این وبسایت متعلق به{" "}
                    <span className="text-red-500">{" "}
                        باشگاه خدمات اجتماعی{" "}
                    </span>
                    می باشد.&copy;
                </div>
                <div className="pt-2 pb-4 border-t-2 border-red-500/30">
                    <a href="#" className="flex items-center gap-x-5">
                        <p className="text- font-MorabbaM">طراحی و کد نویسی</p>
                        <a>
                            <img  src="./assets/images/ME.webp" className="w-6 rounded-" alt="" />
                        </a>
                    </a>
                </div>
                

            </div>
        </footer>
    )
}

export default Footer;