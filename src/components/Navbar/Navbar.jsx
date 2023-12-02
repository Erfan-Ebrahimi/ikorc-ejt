import { Link } from "react-router-dom";
import "./Navbar.scss";


const Navbar = () => {

    return (
        <nav className="navbar" >
            <ul className="flex gap-x-5 mr-5 rounded-lg  ">
                <li className="relative"><Link className="nav-link flex items-center justify-between text-[#ee1251ca] whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB text-lg" to="#hero">خانه</Link></li>
                <li className="relative"><Link className="nav-link flex items-center justify-between text-[#ee1251ca] whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB text-lg" to="#about">خدمات</Link></li>
                <li className="relative"><Link className="nav-link flex items-center justify-between text-[#ee1251ca] whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB text-lg" to="#speakers">اخبار</Link></li>
                <li className="relative"><Link className="nav-link flex items-center justify-between text-[#ee1251ca] whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB text-lg" to="#gallery">گالری</Link></li>
                <li className="relative"><Link className="nav-link flex items-center justify-between text-[#ee1251ca] whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB text-lg" to="#venue">آدرس</Link></li>
                <li className="relative"><Link className="nav-link flex items-center justify-between text-[#ee1251ca] whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB text-lg" to="#contact">تماس با ما</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    )
}

export default Navbar;