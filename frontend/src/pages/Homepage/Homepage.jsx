import CatSlider from "../../Components/CatSlider/CatSlider.jsx";
import Product from "../../Components/Products/Product.jsx";
import Banner from "./Banner/Banner";
import "./Homepage.css";
import TopProducts from "./TopProducts/TopProducts.jsx";
import Footer from "../../Components/Footer/Footer.jsx";


const Homepage = () => {
  return (
    <div className="homePage">
      <Banner />
      <CatSlider />

      <div className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <h2 className="hd mb-0">Popular Products</h2>
            <ul className="list list-inline filterTab">
              <li className="list-inline-item">
                <a href="" className="cursor">
                  All
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Tote bag
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Crossbody bag
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Shoulder bag
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Backpack
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Hobo bag
                </a>
              </li>
              <li className="list-inline-item">
                <a href="" className="cursor">
                  Clutch bag
                </a>
              </li>
            </ul>
          </div>

          <div className="row productRow">
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </div>

      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
            <div className="col">
              <TopProducts />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
};

export default Homepage;
