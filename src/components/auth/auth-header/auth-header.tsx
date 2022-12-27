import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "/src/assets/images/logo/logo.png";
import { useState } from "react";
import { HEADINGS } from "../../../common/constant/headings";
import { NAVBAR } from "../../../common/constant/navbar";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const AuthHeader = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState: boolean) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="flex align-center justify-center">
        <Image src={logoImage} alt="logo" width={40} height={40} priority />
        <h2
          className="font-general-sans primary-text-color fs-32"
          style={{ marginLeft: "0.5rem" }}
        >
          {HEADINGS.appTitle}
        </h2>
      </div>
      <Divider />
      <List>
        {NAVBAR.map((item: string) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          "&.MuiAppBar-root": {
            md: {
              background: "linear-gradient(to right, #ffff 50%, #0caf60 50%)",
              boxShadow: "none",
            },
            xs: {
              background: "initial",
              boxShadow: "none",
            },
          },
        }}
      >
        <Toolbar
          sx={{
            "&.MuiToolbar-root": {
              padding: 0,
            },
            margin: "auto 6.25rem",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            className="flex align-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "block" } }}
          >
            <Image src={logoImage} alt="logo" width={40} height={40} priority />
            <h2
              className="font-general-sans primary-text-color fs-32"
              style={{ marginLeft: "0.5rem" }}
            >
              {HEADINGS.appTitle}
            </h2>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {NAVBAR.map((item: string) => (
              <Button
                key={item}
                sx={{ color: "#fff", marginLeft: "2.5rem" }}
                className="fs-16 fw-500 lh-24 font-general-sans letter-0_2 text-capitalize cursor-pointer white-color"
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default AuthHeader;
