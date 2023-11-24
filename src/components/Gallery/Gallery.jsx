import "./Gallery.scss"

const Gallery = () => {
    return (
        <section id="gallery">

            <div className="container" data-aos="fade-up">
                <div className="section-header" >
                    <h2>Gallery</h2>
                    <p>Check <span >IKORC</span> gallery from the recent events</p>
                </div>
            </div>

            <div className="gallery-slider swiper">
                <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide"><a href="assets/img/gallery/2.webp" className="gallery-lightbox"><img loading="lazy" src="./assets/images/gallery/2.webp" className="img-fluid ert" alt=""/></a></div>
                    <div className="swiper-slide"><a href="assets/img/gallery/4.webp" className="gallery-lightbox"><img loading="lazy" src="./assets/images/gallery/4.webp" className="img-fluid ert" alt=""/></a></div>
                    <div className="swiper-slide"><a href="assets/img/gallery/5.webp" className="gallery-lightbox"><img loading="lazy" src="./assets/images/gallery/5.webp" className="img-fluid ert" alt=""/></a></div>
                    <div className="swiper-slide"><a href="assets/img/gallery/6.webp" className="gallery-lightbox"><img loading="lazy" src="./assets/images/gallery/6.webp" className="img-fluid ert" alt=""/></a></div>
                    <div className="swiper-slide"><a href="assets/img/gallery/7.webp" className="gallery-lightbox"><img loading="lazy" src="./assets/images/gallery/7.webp" className="img-fluid ert" alt=""/></a></div>
                    <div className="swiper-slide"><a href="assets/img/gallery/9.webp" className="gallery-lightbox"><img loading="lazy" src="./assets/images/gallery/9.webp" className="img-fluid ert" alt=""/></a></div>
                    <div className="swiper-slide"><a href="assets/img/gallery/10.webp" className="gallery-lightbox"><img loading="lazy" src="assets/images/gallery/10.webp" className="img-fluid ert" alt=""/></a></div>
                    <div className="swiper-slide"><a href="assets/img/gallery/11.webp" className="gallery-lightbox"><img loading="lazy" src="assets/images/gallery/11.webp" className="img-fluid ert" alt=""/></a></div>

                </div>
                <div className="swiper-pagination"></div>
            </div>

        </section>
    )
}

export default Gallery