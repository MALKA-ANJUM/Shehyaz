import "./Footer.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerWrapper">
      {/* <div className="footerBoxes">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="box d-flex align-items-center w-100">
                            <span></span>
                            <div className="info">
                                <h4>Best Prices & offers</h4>
                                <p>Orders $50 or more</p>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </div> */}

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Link to="/">
                <img src={Logo} alt="logo-img" className="logo-img" />
              </Link>

              <br />

              <p>Adrress: Xyz</p>
              <p>
                Call Us: +91 - XXXXXXXXXXX
                <p>Email: sale@Nest.com</p>
                <p>Hours: 10:00 -10:00</p>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
