import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Banner.css";
import Banner1 from "../../../assets/images/banner/banner-1.jpg";
import Banner2 from "../../../assets/images/banner/banner-2.jpg";
import Banner3 from "../../../assets/images/banner/banner-3.jpg";


const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };
  return (
    <section className="homeSlider">
      <Slider {...settings} >
        <div className="item">
          <img src={Banner1} alt="banner-3" className="w-100" />
        </div>
        <div className="item">
          <img src={Banner2} alt="banner-3" className="w-100" />
        </div>
        <div className="item">
          <img src={Banner3} alt="banner-3" className="w-100" />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
