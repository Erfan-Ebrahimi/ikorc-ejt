/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./NewsCard.scss"
import moment from 'jalali-moment'
import dumPurify from 'dompurify'




const NewsCard = ({ _id,cover, title, description, newsDate, author }) => {

  console.log("cover =>>>>" , cover);
  return (
    <div className="flex flex-col w-[320px] mr-4 md:w-[380px] bg-zinc-800 rounded-2xl overflow-hidden cursor-pointer hover:scale-90 hover:bg-zinc-600 duration-300">
      <Link to={`/newsList/${_id}`} className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-[200px]">
        <img className="w-full h-full" src={cover} alt="new-img" />
      </Link>
      <div className="px-6 pt-3 pb-2 text-white text-center">
        <h3 className="block mb-2 text-2xl font-MorabbaM  text-gray-100">{title}</h3>
        <h5 className="font-DanaM font-[300] text-xs  px-2.5 mt-3 line-clamp-2 text-yellow-100 pt-2 border-g" dangerouslySetInnerHTML={{ __html: dumPurify.sanitize(description) }}></h5>
        <Link to={`/newsList/${_id}`} className="block text-center text-zinc-100 font-DanaB mt-5 px-1 py-0.5 rounded-md bg-teal-800">ادامــــه مطلـب</Link>
        <div className="flex justify-between px-5  font-Dana  pt-2">
          <h5 className="font-Dana">{moment(newsDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</h5>
          <h5 className="text-sm">{author}</h5>
        </div>
      </div>
    </div>
  )
}

export default NewsCard