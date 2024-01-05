import { NavLink } from "react-router-dom";
import "./Sidebar.scss"
// import { GiNewspaper } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { GoHome } from "react-icons/go";
const Sidebar = () => {

  console.log(location.pathname.includes('news'));
  return (
    <div className="w-full h-full mr-1">

      <div className="flex h-[100%] fixed flex-no-wrap">
        <div className="w-64 font-MorabbaM absolute sm:relative bg-gray-600 shadow flex-col sm:flex">
          <div className="w-full flex flex-col justify-center items-center border-b-2 mt-5">
            <img src="/assets/images/logoo.png" className="w-20" alt="logo" />
            <span className="text-white pb-3">باشگاه خدمات اجتماعی پالایشگاه</span>
          </div>
          <nav className="side mt-10">

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
                <div className="px-2 bg-green-500 rounded-full text-gray-900 flex items-center justify-center mx-auto text-lg">
                  <span className="pt-1" >5</span>
                </div>
              </NavLink>
            </li>


            <li className="flex w-full justify-between px-1 text-gray-300 cursor-pointer items-center mb-6">
              <NavLink to='/adminPanel/news' className="flex items-center w-[100%] py-1.5 rounded-xl">
                <div className="flex w-3/4 items-center px-2">
                  <TbWorld className="text-2xl ml-2" />
                  <span className="text-xl ml-2"> اخبار</span>
                </div>
                <div className="px-2 bg-green-500 rounded-full text-gray-900 flex items-center justify-center mx-auto text-lg">
                  <span className="pt-1" >5</span>
                </div>
              </NavLink>
            </li>


          </nav>
        </div>

      </div>
    </div>
  )
}

export default Sidebar;
