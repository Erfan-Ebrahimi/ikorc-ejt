import Address from "../../components/Address/Address";
import Footer from "../../components/Footer/Footer";
import Pictures from "../../components/Pictures/Pictures";
import Actions from "../../components/Actions/Actions";
import Landing from "../../components/Landing/Landing";
import News from "../../components/News/News";
import Services from "../../components/Services/Services";

import Swal from 'sweetalert2';
import { useEffect } from "react";


const Home = () => {

  useEffect(() => {
    Swal.fire({
      imageUrl: "./assets/images/moj-logo.png",
      imageHeight: 200,
      text: "این سایت نمونه اولیه می باشد برای مشاهده حتما از سیستم شخخی یا لب تاپ استفاده کنید",
    });
  }, [])
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