import { Link } from "react-router-dom";
import "./Navbar.scss";
import Switcher from "../Switcher/Switcher"
import Swal from 'sweetalert2';

const Navbar = () => {

    const showChart = () => {
        Swal.fire({
            imageUrl: "./assets/images/chart.png",
            imageHeight: 400,
            confirmButtonText: "بستن"
        });
    }
    return (
        <nav className="navbar pt-10 w-[80%] mx-auto " >
            <ul className="nav-ul  flex items-center gap-x-10 text-center border-x-2 border-rose-600/50 justify-center child:h-full w-[50%] fixed top-3 left-0 right-0 h-14 mx-auto bg-black/50 rounded-2xl backdrop-blur-[5px] !z-10">
                <li className="relative h-full"><Link className="nav-link h-full flex items-center justify-between text-white tracking-wider whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB hover:text-rose-500 " to="#hero">خانه</Link></li>
                <li className="relative h-full"><Link className="nav-link h-full flex items-center justify-between text-white tracking-wider whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB hover:text-rose-500 " to="#about">خدمات</Link></li>
                <li className="relative h-full"><Link className="nav-link h-full flex items-center justify-between text-white tracking-wider whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB hover:text-rose-500 " to="#speakers">اخبار</Link></li>
                <li className="relative h-full"><Link className="nav-link h-full flex items-center justify-between text-white tracking-wider whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB hover:text-rose-500 " to="#gallery">گالری</Link></li>
                <li className="relative h-full" onClick={showChart}><Link className="nav-link h-full flex items-center justify-between text-white tracking-wider whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB hover:text-rose-500 " to="#venue">چارت سازمانی</Link></li>
                <li className="relative h-full"><Link className="nav-link h-full flex items-center justify-between text-white tracking-wider whitespace-nowrap transition-all duration-300 relative px-1 py-1 font-DanaB hover:text-rose-500 " to="/adminPanel">پنل ادمین</Link></li>
                <Switcher />
            </ul>
        </nav>
    )
}

export default Navbar;