/* eslint-disable react/prop-types */
import "./ActionCard.scss";
import { Link } from "react-router-dom";

const ActionCard = ({img , title , desc , date}) => {
  return (
    <div className="flex w-[500px]  bg-zinc-800 justify-between rounded-2xl overflow-hidden cursor-pointer hover:scale-110 hover:bg-zinc-600 duration-300">
      <Link to='' className="w-1/2 h-30  overflow-hidden ">
        <img className="w-full h-[170px] grayscale-[50%] hover:grayscale-[10%]" src={`./assets/images/actions/${img}.jpg`} alt="new-img" />
      </Link>
      <div className="my-2 w-1/2 h-30  flex flex-col justify-between text-white">
        <h3 className="font-DanaB text-sm text-yellow-100 text-center bg-teal-700 max-w-max mx-auto py-1 px-2 rounded-lg">{title}</h3>
        <h5 className="font-DanaM h-[60px] text-xs text-center px-2.5 mt-3 tracking-wide  text-white">{desc}</h5>
        <div className="flex justify-between items-center px-5  font-Dana pt-2">
          <h5 className="text-sm">{date}</h5>
          <Link className="text-xs bg-teal-700 text-center rounded-lg mb-1 tracking-wider py-1 px-1 md:px-2 text-white ">ادامه مطلب</Link>
        </div>
      </div>
    </div>
  )
}

export default ActionCard;