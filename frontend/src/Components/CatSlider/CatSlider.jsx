import "./CatSlider.css";
import Slider from "react-slick";
import Product1 from "../../assets/images/products/product-1.jpg";
import Product2 from "../../assets/images/products/product-2.jpg";
import Product3 from "../../assets/images/products/product-3.jpg";
import Product4 from "../../assets/images/products/product-4.jpg";
import Product5 from "../../assets/images/products/product-5.jpg";
import Product7 from "../../assets/images/products/product-7.jpg";
import Product8 from "../../assets/images/products/product-8.avif";
import Product9 from "../../assets/images/products/product-9.jpg";
import Product10 from "../../assets/images/products/product-10.jpg";
import Product11 from "../../assets/images/products/product-11.jpg";
import Product12 from "../../assets/images/products/product-12.avif";
import Product13 from "../../assets/images/products/product-13.jpg";

const CatSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };
  return (
    <div className="catSlider">
      <div className="container-fluid">
        <h2 className="hd">Featured Categories</h2>
       
        <Slider {...settings} className="cat-slider-main">
          <div className="item">
            <div className="info">
              <img src={Product1} alt="product-1" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product2} alt="product-2" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product3} alt="product-3" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product4} alt="product-4" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product5} alt="product-5" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product7} alt="product-7" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product8} alt="product-8" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product9} alt="product-9" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product10} alt="product-10" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product11} alt="product-11" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product12} alt="product-12" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
          <div className="item">
            <div className="info">
              <img src={Product13} alt="product-13" />
              <h5>Name</h5>
              <p>Price</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CatSlider;
