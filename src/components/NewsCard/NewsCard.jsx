/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./NewsCard.scss"
import Swal from 'sweetalert2';



const NewsCard = ({ img, title, desc, date, author }) => {
  const showM = () => {
    Swal.fire({
      imageUrl: "./assets/images/moj-logo.png",
      imageHeight: 200,
      text: "*این سایت نمونه اولیه می باشد این قسمت توسعه داده نشده است*",
    });
  }
  return (
    <div className="flex flex-col w-[320px] mr-4 md:w-[380px] bg-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:scale-90 hover:bg-zinc-600 duration-300">
      <Link onClick={showM} to='' className="w-[380px]  overflow-hidden border border-emerald-600">
        <img className="w-[380px] h-[200px] grayscale-[50%]  hover:grayscale-[10%]" src={`./assets/images/news/${img}.jpg`} alt="new-img" />
      </Link>
      <div className="mt-2 text-white">
        <h3 className="font-DanaB text-sm text-yellow-100 text-center bg-teal-700 max-w-max mx-auto py-1 px-2 rounded-lg">{title}</h3>
        <h5 className="font-DanaM text-xs text-right px-2.5 mt-3  line-clamp-2 text-yellow-50 tracking-widest">{desc}</h5>
        <Link onClick={showM} to='/' className="block text-center text-zinc-100 font-Dana mt-5 px-1 py-0.5 rounded-md bg-teal-800">ادامــــه مطلـب</Link>
        <div className="flex justify-between px-5  font-Dana  pt-2">
          <h5 className="">{date}</h5>
          <h5 className="text-sm">{author}</h5>
        </div>
      </div>
    </div>
  )
}

export default NewsCard