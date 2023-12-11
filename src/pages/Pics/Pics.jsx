import "./Pics.scss";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images } from "./imgs";
import { Link } from "react-router-dom";

const slides = images.map(({ orginal, width, height }) => ({
    src: orginal,
    width,
    height,
}));


const Pics = () => {
    const [index, setIndex] = useState(-1);

    const handleClick = (index) => setIndex(index);
    return (
        <>
            <div className="pics container mt-10">
                <div className="container mx-auto w-1/2 text-center mb-14">
                    <h2 className="text-2xl md:text-5xl font-MorabbaM text-zink-700 text-transparent  bg-clip-text bg-gradient-to-t from-rose-100 to-sky-600 dark:text-white">گالـــــری</h2>
                    <span className="inline-block text-lg md:text-3xl font-Morabba mt-0.5 md:mt-1.5 border-b border-red-500 pb-4 text-white">گــــزارش تصـــویری</span>
                </div>
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                    rowHeight={240}
                    margin={8}
                />
            </div>
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            />
            <div className="my-10">
                <Link to="/" className="w-[100px] block text-center mx-auto md:w-[150px] bg-red-100 text-rose-700 py-1 md:py-1.5 text-sm md:text-2xl md:px-1 font-DanaB rounded-xl hover:text-white hover:bg-rose-700 transition-all duration-300">برگشت</Link>

            </div>
        </>
    )
}

export default Pics;