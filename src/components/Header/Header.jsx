import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
    
    return (
        <>
            <header id="header" className="flex items-center justify-between absolute left-0 -top-[100px] right-0 z-[997]">
                <Navbar />
                <div className="">
                    <div id="logo" className="">
                        <Link to="/"><img className="p-0 m-0 w-[95px]" src="../assets/images/e3.gif" /></Link>
                        <Link to="/" className="logo-h1 text-sm m-0 font-bold tracking-[9px] uppercase pl-3 text-[#e31e24]">IKORC</Link>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;