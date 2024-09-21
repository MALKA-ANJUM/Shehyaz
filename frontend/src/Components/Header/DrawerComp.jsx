import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
const pages = [
  "Products",
  "Services",
  "AboutUs",
  "ContactUs",
  "Login",
  "Logout",
];
import "./Header.css";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <div className="drawer">
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              key={index}
              className="menu"
            >
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#fff", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuOpenIcon />
      </IconButton>
    </div>
  );
};

export default DrawerComp;
