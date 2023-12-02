// import Address from "../../components/Address/Address";
// import ContactUs from "../../components/ContactUs/ContactUs";
// import Footer from "../../components/Footer/Footer";
import Pictures from "../../components/Pictures/Pictures";
import Actions from "../../components/Actions/Actions";
// import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Landing />
      <div className="">
        <Services />
        <News />
        <Actions/>
        {/* <Address /> */}
        <Pictures />
        {/* <ContactUs /> */}

      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home;