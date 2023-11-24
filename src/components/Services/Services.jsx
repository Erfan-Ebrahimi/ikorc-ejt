/* eslint-disable react/no-unescaped-entities */
import "./Services.scss";
const Services = () => {
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <div className="row rt">
          <div className="col-lg-6 col-sm-12">
            <h2>درباره ی ما</h2>
            <p className="font-Dana text-white">باشگاه خدمات اجتماعی پالایشگاه امام خمینی شازند جهت رفاه کارکنان خدمات متنوعی از قبیل رزرو مهمانسرا ، برگزاری کلاس های آموزشی ،برگزاری مسابقات و ... را انجام می دهد</p>
            <a className="abr hvr-grow" href="about.html">read more</a>
          </div>
          <div className="col-lg-3 col-sm-12 ab-img">
            <a href="#about"><img loading="lazy" src="./assets/images/ab2.webp" alt="ab"/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services