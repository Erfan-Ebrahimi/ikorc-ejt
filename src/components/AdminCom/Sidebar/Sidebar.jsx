import { NavLink } from "react-router-dom";
import "./Sidebar.scss"
// import { GiNewspaper } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { useEffect, useState } from "react";
const Sidebar = () => {

  const [khabars , setKhabars] = useState([])

  const getAllNews = async () => {
    const khabarsRes = await fetch('http://localhost:3000/api/v1/news')
    const khabarsData = await khabarsRes.json()
    setKhabars(khabarsData.data.news);
  }

  useEffect(() => {
    getAllNews()
  }, [])

  return (

    <div className="w-[17%] h-full fixed bg-slate-800 shadow ">

        <div className="font-MorabbaM  flex-col ">
          <div className="w-full flex flex-col justify-center items-center border-b-2 mt-5 ">
            <img src="/assets/images/logoo.png" className="w-20" alt="logo" />
            <span className="text-white pb-3">باشگاه خدمات اجتماعی پالایشگاه</span>
          </div>
          <nav className="side mt-10 ">

            <li className="flex w-full justify-between px-1 text-gray-300 cursor-pointer items-center mb-6">
              <NavLink to='/adminPanel' end className={`flex items-center w-[100%] py-1.5 rounded-xl`}>
                <div className="flex w-3/4 items-center px-2">
                  <GoHome className="text-2xl ml-2" />
                  <span className="text-xl ml-2"> خانه</span>
                </div>

              </NavLink>
            </li>
            <li className="flex w-full justify-between px-1 text-gray-300 cursor-pointer items-center mb-6">
              <NavLink to='/adminPanel/actions' className={`flex items-center w-[100%] py-1.5 rounded-xl`}>
                <div className="flex w-3/4 items-center px-2">
                  <TbWorld className="text-2xl ml-2" />
                  <span className="text-xl ml-2">فعالیت ها</span>
                </div>
                <div className="px-2 bg-green-900 rounded-full text-gray-900 flex items-center justify-center mx-auto text-lg">
                  <span className="pt-1 text-white font-DanaM" >5</span>
                </div>
              </NavLink>
            </li>


            <li className="flex w-full justify-between px-1 text-gray-300 cursor-pointer items-center mb-6">
              <NavLink to='/adminPanel/news' className="flex items-center w-[100%] py-1.5 rounded-xl">
                <div className="flex w-3/4 items-center px-2">
                  <TbWorld className="text-2xl ml-2" />
                  <span className="text-xl ml-2"> اخبار</span>
                </div>
                <div className="px-2 bg-green-900 rounded-full text-gray-900 flex items-center justify-center mx-auto text-lg">
                  <span className="pt-1 text-white font-DanaM" >{khabars.length}</span>
                </div>
              </NavLink>
            </li>


          </nav>
        </div>

    </div>
  )
}

export default Sidebar;
