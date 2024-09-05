import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CenteredUnderlineLink from "./CenteredUnderlineLink"; // Import the updated component

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const DrawerAppBar: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        variant="h6"
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "6rem",
          paddingX: "0.1rem",
          opacity: 0.7, // Default opacity
          "&:hover": {
            opacity: 1, // Opacity on hover
            transition: "opacity 0.3s ease", // Smooth transition effect
          },
        }}
      >
        <CenteredUnderlineLink to="/" color="black">
          Paweł Kucmida Fotografia
        </CenteredUnderlineLink>
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <ListItem
          disablePadding
          sx={{
            mb: 2, // Margin bottom
            textAlign: "center", // Center text
            justifyContent: "center", // Center content horizontally
            opacity: 0.7, // Default opacity
            "&:hover": {
              opacity: 1, // Opacity on hover
              transition: "opacity 0.3s ease", // Smooth transition effect
            },
          }}
        >
          <CenteredUnderlineLink to="/gallery">
            Galeria
          </CenteredUnderlineLink>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            mb: 2, // Margin bottom
            textAlign: "center", // Center text
            justifyContent: "center", // Center content horizontally
            opacity: 0.7, // Default opacity
            "&:hover": {
              opacity: 1, // Opacity on hover
              transition: "opacity 0.3s ease", // Smooth transition effect
            },
          }}
        >
          <CenteredUnderlineLink to="/about-me">
            O mnie
          </CenteredUnderlineLink>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            mb: 2, // Margin bottom
            textAlign: "center", // Center text
            justifyContent: "center", // Center content horizontally
            opacity: 0.7, // Default opacity
            "&:hover": {
              opacity: 1, // Opacity on hover
              transition: "opacity 0.3s ease", // Smooth transition effect
            },
          }}
        >
          <CenteredUnderlineLink to="/contact">
            Kontakt
          </CenteredUnderlineLink>
        </ListItem>
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
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white
          height: "6rem", // Increase height
          backdropFilter: "blur(10px)", // Optional: adds a blur effect
          boxShadow: "none", // Optional: remove shadow
          px: 2, // Optional: add horizontal padding
        }}
      >
        <Toolbar
          sx={{
            height: "100%", // Ensure Toolbar takes full height of AppBar
            display: "flex",
            alignItems: "center", // Vertically center the content
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "black" }}
          >
            <MenuIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "block" },
              textAlign: { md: "left" },
              marginLeft: { md: "1rem" },
              color: "black",
              opacity: 0.7, // Default opacity
              "&:hover": {
                opacity: 1, // Opacity on hover
                transition: "opacity 0.3s ease", // Smooth transition effect
              },
            }}
          >
            <CenteredUnderlineLink to="/" color="black">
              Paweł Kucmida Fotografia
            </CenteredUnderlineLink>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            <CenteredUnderlineLink to="/about-me">
              O mnie
            </CenteredUnderlineLink>
            <CenteredUnderlineLink to="/gallery">
              Galeria
            </CenteredUnderlineLink>
            <CenteredUnderlineLink to="/contact">
              Kontakt
            </CenteredUnderlineLink>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            height: "10rem",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default DrawerAppBar;
