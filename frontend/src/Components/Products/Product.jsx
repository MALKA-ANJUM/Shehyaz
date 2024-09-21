import "./Product.css";
import Bag1 from "../../assets/images/products/bag1.webp";
import { Button, Rating } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tooltip from "@mui/material/Tooltip";

const Product = () => {
  return (
    <div className="productTheme">
      <Link to="">
        <div className="imgWrapper">
          <img src={Bag1} alt="bag" className="w-100" />
          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <Tooltip title="Add to Wishlist">
                  <a href="" className="cursor">
                    <FavoriteBorderIcon />
                  </a>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </Link>

      <div className="info">
        <span className="d-block catName">Tote Bag</span>
        <div className="d-flex justify-content-between">
          <h4 className="title">Sample</h4>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <span className="price text-success fw-bold">$28.85</span>
            <span className="oldPrice">$32.8</span>
          </div>

          <Button className="bg-success text-white btn btn-sm">Add</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
