import "./News.scss";
import { useEffect, useState } from 'react';
import { useForm } from "../../../Hooks/useForm";
import Input from "../../../components/AdminCom/Form/Input";
import { minValidator } from "../../../validators/rules";
import { IoCloudUploadOutline } from "react-icons/io5";
import moment from 'jalali-moment'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import HashLoader from "react-spinners/HashLoader";
import Swal from "sweetalert2";
import axios from "axios"

const News = () => {

  const [khabars, setKhabars] = useState([]);
  // const [khabarCover, setKhabarCover] = useState(false);
  const [khabarDescription, setKhabarDescription] = useState('')
  // const [sizeFile, setSizeFile] = useState('')
  // const [showCover, setShowCover] = useState("")
  const [formState, onInputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      author: {
        value: "",
        isValid: false,
      },
      assortment: {
        value: "",
        isValid: false,
      }
    },
    false
  );

  const getAllNews = async () => {
    const khabarsRes = await fetch('http://localhost:3000/api/v1/news')
    const khabarsData = await khabarsRes.json()
    setKhabars(khabarsData.data.news);
    console.log(khabarsData);
  }

  useEffect(() => {
    getAllNews()
  }, [])

  const addNewKhabar = (e) => {
    e.preventDefault()
    Swal.fire({
      title: 'آیا از ثبت اطلاعات اطمینان دارید ؟',
      icon: "question",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // let formData = new FormData()
        // formData.append('title', formState.inputs.title.value)
        // formData.append('author', formState.inputs.author.value)
        // formData.append('assortment', formState.inputs.assortment.value)
        // formData.append('description', khabarDescription)
        // formData.append('cover', khabarCover)
        axios.post(`http://localhost:3000/api/v1/news`, {
          title: 'red',
          description: 'dost',
          author: "ali",
          assortment: "baby"
        })
          .then((response) => {
            // console.log(formData);
            console.log(response);
            // if (response.status == '201') {
            //   Swal.fire('محصول با موفقیت ثبت شد :))', '', 'success')
            //   actions.resetForm();

            // }
          }).catch(error => {
            Swal.fire(`دوباره تلاش کنید !!!`, '', 'error')
            console.log(error);
          })
      }
    })

  }

  // ------------show size files
  // const showSize = (fileData) => {
  //   const { name: fileName, size } = fileData[0]
  //   setSizeFile({ fileName, size })
  // }


  return (
    <div>
      {
        khabars.length ?
          (
            <div className="w-full container bg-indigo-950 rounded-md shadow-md mt-20">

              <div className="">
                <div className="p-3">
                  <h1 className="text-2xl font-MorabbaB text-green-400 inline-block border-b-2 border-b-green-400 pb-2">افزودن خبر</h1>
                </div>
                <form className="p-5">
                  <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

                    <div className="">
                      <div className="">
                        <label className="text-xl font-DanaB mb-5 text-white" style={{ display: "block" }}>
                          تیتر
                        </label>
                        <Input
                          element="input"
                          type="text"
                          id="title"
                          onInputHandler={onInputHandler}
                          validations={[minValidator(8)]}
                        />
                        <span className="error-message text-danger"></span>
                      </div>
                    </div>

                    <div className="">
                      <div className="">
                        <label className="text-xl font-DanaB mb-5 text-white" style={{ display: "block" }}>
                          نویسنده
                        </label>
                        <Input
                          element="input"
                          type="text"
                          id="author"
                          onInputHandler={onInputHandler}
                          validations={[minValidator(8)]}
                        />
                        <span className="error-message text-danger"></span>
                      </div>
                    </div>

                    <div className="">
                      <div className="">
                        <label className="text-xl font-DanaB mb-5 text-white" style={{ display: "block" }}>
                          دسته بندی
                        </label>
                        <Input
                          element="input"
                          type="text"
                          id="assortment"
                          onInputHandler={onInputHandler}
                          validations={[minValidator(8)]}
                        />
                        <span className="error-message text-danger"></span>
                      </div>
                    </div>

                    <div className="">
                      <div className="">
                        <label className="text-xl font-DanaB mb-5 text-white" style={{ display: "block" }}>
                          متن خبر
                        </label>
                        <CKEditor

                          editor={ClassicEditor}
                          data={khabarDescription}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setKhabarDescription(data)
                          }}
                        />

                        <span className="error-message text-danger"></span>
                      </div>
                    </div>

                    {/* <div className="border-2 border-green-100/40 border-dashed rounded-2xl">
                      <div className="mx-auto flex flex-col justify-center items-center h-full">
                        <label htmlFor="file" className="text-xl flex flex-col justify-center items-center font-DanaB mb-5  text-white text-center pt-4 w-full h-full" >
                          <span>عکس</span>
                          <IoCloudUploadOutline className="text-4xl text-green-400 " />
                        </label>
                        <div className="w-full h-full">
                          <div className="w-[200px] h-[150px] border-0 mx-auto mt-2">
                            <img src={showCover} className="w-full h-full border-0 outline-0" />
                          </div>

                          <input
                            type="file"
                            className='text-center mx-auto opacity-0 w-full h-full'
                            id="file"
                            accept="image/*"
                            onChange={event => {
                              setKhabarCover(event.target.files[0]);
                              showSize(event.target.files)
                              setShowCover(URL.createObjectURL(event.target.files[0]))
                            }}
                          />
                        </div>
                        {
                          sizeFile ? <p className='text-green-500 font-Dana'>{sizeFile.fileName} <span className="text-yellow-200">|</span> {(sizeFile.size / 1000).toFixed(2)}KB   </p> : <p className='text-rose-400 font-Dana'>عکسی انتخاب نشده است</p>
                        }
                        <span className="text-red-500 font-Dana h-10 pt-2 "></span>

                      </div>
                    </div> */}

                  </div>

                  <div className="mt-20 mb-10">
                    <button type="submit" onClick={addNewKhabar} disabled={!khabarDescription || !formState.isFormValid} className={`submit-btn text-white font-DanaB mx-auto flex justify-center items-center bg-green-500 w-40 h-10 rounded-xl text-2xl`}>ثبت خبـــــر</button>
                  </div>

                </form>

              </div>
              <div className="pb-10" >
                <div className="p-3">
                  <h1 className="text-2xl font-MorabbaB text-green-400 inline-block border-b-2 border-b-green-400 pb-2">لیست خبرها</h1>
                </div>
                <table className="w-[600px] mx-auto divide-y divide-gray-200">
                  <thead className="bg-slate-900">
                    <tr>
                      <th className=" py-3 text-sm font-Dana text-center  font-medium text-white">شناسه</th>
                      <th className=" py-3 text-sm font-Dana text-center  font-medium text-white">تیتر</th>
                      <th className=" py-3 text-sm font-Dana text-center  font-medium text-white">نویسنده</th>
                      <th className=" py-3 text-sm font-Dana text-center  font-medium text-white">تاریخ</th>
                      <th className=" py-3 text-sm font-Dana text-center  font-medium text-white">حذف</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                      khabars.map((khabar , index) => (
                        <tr className="text-center" key={khabar._id}>
                          <td className="px-6 py-4 whitespace-nowrap font-DanaB">{index + 1}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-DanaB">{khabar.title}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-DanaB">{khabar.author}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-DanaB">{moment(khabar.newsDate, 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')}</td>
                          <td className="px-6 py-4 whitespace-nowrap font-DanaB">
                            <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </table>
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

    </div>
  )
}

export default News;