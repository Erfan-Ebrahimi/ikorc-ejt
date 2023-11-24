import "./Navbar.scss";


const Navbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><a className="nav-link scrollto font-MorabbaM text-xl active" href="#hero">خانه</a></li>
                <li><a className="nav-link scrollto font-MorabbaM text-xl" href="#about">درباره ما</a></li>
                <li><a className="nav-link scrollto font-MorabbaM text-xl" href="#speakers">اخبار</a></li>
                <li><a className="nav-link scrollto font-MorabbaM text-xl" href="#venue">آدرس</a></li>
                <li><a className="nav-link scrollto font-MorabbaM text-xl" href="#contact">تماس با ما</a></li>
                <li><a className="nav-link scrollto font-MorabbaM text-xl" href="#gallery">گالری</a></li>
                <li><a className="nav-link scrollto font-MorabbaM text-xl" href="#gallery">خدمات</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    )
}

export default Navbar;