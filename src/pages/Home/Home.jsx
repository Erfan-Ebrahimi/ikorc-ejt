import Address from "../../components/Address/Address";
import Footer from "../../components/Footer/Footer";
import Pictures from "../../components/Pictures/Pictures";
import Actions from "../../components/Actions/Actions";
import Landing from "../../components/Landing/Landing";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";
import Shahid from "../../components/Shahid/Shahid";


const Home = () => {


  return (
    <div className="">
      <Landing />
      <div className="">
        <News />
        <Actions />
        <Services />
        <Pictures />
        <Shahid />
        <Address />
      </div>
      <Footer />
    </div>
  )
}

export default Home;