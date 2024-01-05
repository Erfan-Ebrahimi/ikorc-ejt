import { useFormik } from "formik";
import "./News.scss";
import Editor from "../../../components/AdminCom/Editor/Editor";
// import DataTable from '../../../components/AdminPanel/DataTable/DataTable';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';


const News = () => {

  const formik = useFormik({
    initialValues: {
      title: '',
      date: '',
      author: '',
      desc: '',
      cover: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className=" p-6 mx-auto bg-indigo-950 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <form onSubmit={formik.handleSubmit} >
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">

        <div >
          <label className=" text-xl font-DanaB mb-5 text-white" htmlFor="title">تیتر</label>
          <input
            className="block w-full  px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.errors.title ? <div className="text-red-500">{formik.errors.title}</div> : null}

        </div>
        <div>
          <label className="bg-red-500" htmlFor="date">تاریخ</label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            id="date"
            name="date"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.errors.date ? <div className="text-red-500">{formik.errors.date}</div> : null}
        </div>
        <div>
          <label className="bg-red-500" htmlFor="author">نویسنده</label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            id="author"
            name="author"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.author}
          />
          {formik.errors.author ? <div className="text-red-500">{formik.errors.author}</div> : null}

        </div>
        <div>
          <label className="bg-red-500" htmlFor="desc">متن</label>
          <Editor value={formik.values.desc} setValue={formik.handleChange} />
          {formik.errors.desc ? <div className="text-red-500">{formik.errors.desc}</div> : null}
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            عکس
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="cover" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                  <span className="">Upload a file</span>
                  <input
                    id="cover"
                    name="cover"
                    type="file"
                    className="sr-only"
                    onChange={formik.handleChange}
                    value={formik.values.cover}
                  />
                </label>
                {formik.errors.cover ? <div className="text-red-500">{formik.errors.cover}</div> : null}
                <p className="pl-1 text-white">or drag and drop</p>
              </div>
              <p className="text-xs text-white">PNG, JPG up to 10MB</p>
            </div>
          </div>
        </div>
      </div>


      <button type="submit" className="text-green-500">Submit</button>
    </form>

    </div>
  )
}

export default News