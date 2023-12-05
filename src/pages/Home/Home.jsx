import Address from "../../components/Address/Address";
import Footer from "../../components/Footer/Footer";
import Pictures from "../../components/Pictures/Pictures";
import Actions from "../../components/Actions/Actions";
import Landing from "../../components/Landing/Landing";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      <Landing />
      <div className="">
        <Services />
        <News />
        <Actions />
        <Pictures />
        <Address />
      </div>
      <Footer />
    </div>
  )
}

export default Home;