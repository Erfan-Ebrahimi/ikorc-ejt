import axios from "axios"
import { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard/NewsCard";



const NewsList = () => {

    const [allNews, setAllNews] = useState()

    useEffect(() => {
        getAllNews()
    }, [])
    const getAllNews = async () => {
        const newsData = await axios.get('http://localhost:3000/api/v1/news')
        setAllNews(newsData.data.data.news.docs);
        console.log(newsData.data.data.news.docs);
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 container mx-auto my-32">
            {
                allNews?.map((khabar) => (
                    <NewsCard key={khabar._id} {...khabar} />
                ))
            }
        </div>
    )
}

export default NewsList;