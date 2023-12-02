import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "./Pictures.scss";


const photos = [
    { src: "./assets/images/gallery/1.jpg", width: 700, height: 400, },
    { src: "./assets/images/gallery/5.webp", width: 400, height: 300 },
    { src: "./assets/images/gallery/20.jpg", width: 500, height: 300 },
    { src: "./assets/images/gallery/4.webp", width: 500, height: 300 },
    { src: "./assets/images/gallery/4.jpg", width: 500, height: 400 },
    { src: "./assets/images/gallery/3.webp", width: 400, height: 200 },
    { src: "./assets/images/gallery/3.jpg", width: 700, height: 400 },
    { src: "./assets/images/gallery/15.jpg", width: 700, height: 400 },
    { src: "./assets/images/gallery/14.jpg", width: 700, height: 400 },
    { src: "./assets/images/gallery/2.webp", width: 400, height: 300 },
    { src: "./assets/images/gallery/13.jpg", width: 800, height: 400 },
    { src: "./assets/images/gallery/12.jpg", width: 500, height: 300 },
    { src: "./assets/images/gallery/9.jpg", width: 600, height: 500 },
    { src: "./assets/images/gallery/10.jpg", width: 700, height: 400 },
    { src: "./assets/images/gallery/1.webp", width: 900, height: 700 },
    { src: "./assets/images/gallery/6.webp", width: 400, height: 200 },
    { src: "./assets/images/gallery/5.JPG", width: 700, height: 400 },
    { src: "./assets/images/gallery/6.JPG", width: 400, height: 300 },
];

const Pictures = () => {

    const [index, setIndex] = useState(-1);


    return (
        <section id="gallery" className="container mb-20">
            <h2 className="title-header w-1/4 mx-auto mb-[60px] pb-5 text-4xl text-center text-transparent  bg-clip-text bg-gradient-to-t from-rose-400 to-sky-600 font-MorabbaB">گالــــــــری</h2>

            <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            <div className="flex flex-col justify-center items-center mt-5">
                <img className="w-20 !rounded-none !scale-100" src="./assets/images/ph2.png" alt="" />
                <span className="text-red-200 font-MorabbaB mt-1 text-l">حسین محمد شاهی</span>
            </div>
        </section>
    )
}

export default Pictures