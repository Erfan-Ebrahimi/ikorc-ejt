
const Navbar = () => {
    return (
        <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
                <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                <li><a className="nav-link scrollto" href="#venue">Address</a></li>
                <li><a className="nav-link scrollto" href="#speakers">UNITS</a></li>
                <li><a className="nav-link scrollto" href="#about">About</a></li>
                <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
    )
}

export default Navbar;