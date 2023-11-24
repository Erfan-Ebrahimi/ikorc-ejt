import "./Header.scss";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <>
            <header id="header" className="flex  items-center justify-between ">
                <Navbar />
                <div className="container-fluid container-xxl d-flex align-items-center">

                    <div id="logo" className="me-auto hvr-shrink">
                        <a href="index.html" className="scrollto"><img src="../assets/images/e3.gif" /></a>
                        <h1><a href="index.html" className=""><span>IKORC</span></a></h1>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header;