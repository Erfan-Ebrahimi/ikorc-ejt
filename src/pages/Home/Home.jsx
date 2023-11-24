import Address from "../../components/Address/Address";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Landing />
      <Services/>
      <News/>
      <Address/>
      <Gallery/>
      <ContactUs/>
      <Footer/>
    </>
  )
}

export default Home;