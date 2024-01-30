import { useEffect, useState } from "react";
import "./KhabarDetails.scss";
import { useParams } from "react-router-dom"
import dumPurify from 'dompurify'
import moment from 'jalali-moment'
import HashLoader from "react-spinners/HashLoader";






const KhabarDetails = () => {

  const [khabarDetails, setKhabarDetails] = useState([])
  const [khabarDate, setKhabarDate] = useState('')
  const { id: khabarID } = useParams()


  const getKhabarDetails = async () => {
    const khabarRes = await fetch(`http://localhost:3000/api/v1/news/${khabarID}`)
    const khabarData = await khabarRes.json()
    setKhabarDetails(khabarData.data);
    setKhabarDate(khabarData.data.newsDate)
  }
  useEffect(() => {
    getKhabarDetails()
    
  }, [])

  return (
    <>
      {
        khabarDate.length ?
          (
            <div className="text-white p-10 container mx-auto flex flex-col justify-center items-center">
              <div className="w-1/2 md:w-full mx-auto flex justify-center rounded-lg overflow-hidden ">
                <img src={khabarDetails.cover} alt="" className="rounded-lg border-2 border-blue-400" />
              </div>
              <div className="">
                <h1 className="text-center max-w-max flex justify-center items-center mx-auto px-4 py-2 rounded-lg my-10 text-white font-MorabbaM text-4xl bg-teal-700">{khabarDetails.title}</h1>
                <div className=" font-[300] px-2.5 mt-3 font-DanaM  pt-4 border-g khabar-desc" dangerouslySetInnerHTML={{ __html: dumPurify.sanitize(khabarDetails.description) }}></div>

                <div className="flex justify-between mt-10 px-1 text-sm font-DanaM">
                  <span>تاریخ : {moment(khabarDate.slice(0, 10), 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</span>
                  <span>نویسنده : {khabarDetails.author}</span>
                </div>
              </div>
            </div>

          )
          :
          (
            <div className='flex flex-col justify-center items-center w-full h-[100vh]'>
              <p className='flex items-center text-white mb-10 text-5xl text-yellow-1 text-centerfont-bold tracking-wider font-MorabbaB'>در حال بارگذاری</p>
              <HashLoader
                color="#b6a740"
                size={80}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          )

      }

    </>
  )
}

export default KhabarDetails