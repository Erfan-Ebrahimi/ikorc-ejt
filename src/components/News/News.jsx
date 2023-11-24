import NewsCard from "../NewsCard/NewsCard"

const News = () => {
  return (
    <>
    <h1 className="text-4xl text-center">اخبار</h1>
    <div className="flex justify-between">
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
      <NewsCard/>
    </div>
    
    </>
  )
}

export default News