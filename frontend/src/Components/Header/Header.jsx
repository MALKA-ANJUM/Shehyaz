import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import DrawerComp from "./DrawerComp";
import Logo from "../../assets/images/logo.png";
import "./Header.css";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <>
      <AppBar sx={{ background: "var(--secondary-color)" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Link to="/">
                <img src={Logo} alt="logo-img" className="logo-img" />
              </Link>
              <DrawerComp />
            </>
          ) : (
            <>
              <Link to="/">
                <img src={Logo} alt="logo-img" className="logo-img" />
              </Link>
             <div className="navbar mx-5">
             <Link to="/collections" className="mx-2">Collection</Link>
              <Link to="/new-launches" className="mx-2">New Launches</Link>
              <Link to="/sale" className="mx-2">Sale</Link>

             </div>
              <Box sx={{ marginLeft: "auto" }}>
                <ClickAwayListener onClickAway={() => setIsDropdownOpen(false)}>
                  <ul className="list list-inline headerTabs mb-0">
                    <li className="list list-inline-item fw-bold">
                      <span>
                        <ShoppingCartIcon></ShoppingCartIcon> Cart
                      </span>
                    </li>
                    <li className="list list-inline-item fw-bold">
                      <span>
                        <FavoriteBorderIcon></FavoriteBorderIcon> Wishlist
                      </span>
                    </li>
                    <li className="list list-inline-item fw-bold">
                      <span onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <PermIdentityIcon></PermIdentityIcon> Account
                      </span>
                      {isDropdownOpen !== false && (
                        <ul className="dropdownMenu pl-0">
                          <li>
                            <Button>My Profile</Button>
                          </li>
                          <li>
                            <Button>Logout</Button>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </ClickAwayListener>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
