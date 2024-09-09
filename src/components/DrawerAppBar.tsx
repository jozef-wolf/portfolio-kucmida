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
import CenteredUnderlineLink from "./CenteredUnderlineLink";
import { useTranslation } from "react-i18next";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

interface Props {
  window?: () => Window;
}

const drawerWidth = 280;

const DrawerAppBar: React.FC<Props> = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [portfolioOpen, setPortfolioOpen] = React.useState(false);
  const { t } = useTranslation(); // Translation hook

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [portfolioMobileOpen, setPortfolioMobileOpen] = React.useState(false);

  const handlePortfolioClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent the event from propagating to parent elements
    setPortfolioMobileOpen((prev) => !prev);
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
        }}
      >
        <Link to="/" className="logo-mobile">
          <img src="/logoName.png" alt="logo" />
        </Link>
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <ListItem
          component="div" // Specify component type
          disablePadding
          sx={{
            position: "relative",
            textDecoration: "none",
            padding: "0.5rem 1rem", // Padding for spacing
            overflow: "hidden",
            margin: "0 1rem",
            fontFamily: "DIN W02 Light",
            fontSize: "1rem",
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Center content horizontally
            opacity: { sm: "1", lg: "0.7" },
            cursor: "pointer",
            "&:hover": {
              opacity: 1,
              transition: "opacity 0.3s ease",
            },
          }}
          onClick={handlePortfolioClick} // The onClick event now works with HTMLLIElement
        >
          <div style={{ flex: 1, textAlign: "center" }}>{t("portfolio")}</div>
          <div
            style={{ position: "absolute", right: "2.75rem", top: "0.825rem" }}
          >
            {!portfolioMobileOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </div>
        </ListItem>
        {portfolioMobileOpen && (
          <ListItem
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              opacity: 0.7,
              marginY: "1rem",
              boxShadow: "0px 0px 9px -1px #f3f3f3",
              background: "#f7f7f7",
              "&:hover": {
                opacity: 1,
                transition: "opacity 0.3s ease",
              },
            }}
          >
            <CenteredUnderlineLink to="/events">
              {t("portfolioEvents")}
            </CenteredUnderlineLink>
            <CenteredUnderlineLink to="/travel">
              {t("portfolioTravel")}
            </CenteredUnderlineLink>
            <CenteredUnderlineLink to="/family">
              {t("portfolioFamily")}
            </CenteredUnderlineLink>
            <CenteredUnderlineLink to="/others">
              {t("portfolioOthers")}
            </CenteredUnderlineLink>
            <CenteredUnderlineLink to="/video">
              {t("portfolioVideo")}
            </CenteredUnderlineLink>
          </ListItem>
        )}
        <ListItem
          disablePadding
          sx={{
            mb: 2,
            textAlign: "center",
            justifyContent: "center",
            opacity: 0.7,
            "&:hover": {
              opacity: 1,
              transition: "opacity 0.3s ease",
            },
          }}
        >
          <CenteredUnderlineLink to="/about-me">
            {t("aboutMe").toUpperCase()}
          </CenteredUnderlineLink>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            mb: 2,
            textAlign: "center",
            justifyContent: "center",
            opacity: 0.7,
            "&:hover": {
              opacity: 1,
              transition: "opacity 0.3s ease",
            },
          }}
        >
          <CenteredUnderlineLink to="/contact">
            {t("contact").toUpperCase()}
          </CenteredUnderlineLink>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            mb: 2,
            textAlign: "center",
            justifyContent: "center",
          }}
        ></ListItem>
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
          backgroundColor: "rgb(255, 255, 255)",
          height: { xs: "6rem", lg: "8rem" },
          boxShadow: "none",
          px: 2,
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
              textAlign: { md: "left" },
              marginLeft: { md: "1rem" },
              color: "black",
            }}
          >
            <Link to="/">
              <div className="logo">
                <img src="/logoName.png" alt="logo" />
              </div>
            </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block", md: "none", lg: "none" },
              textAlign: { md: "left" },
              marginLeft: { md: "1rem" },
              color: "black",
            }}
          >
            <Link to="/">
              <div className="logo">
                <img src="/logoMain.png" alt="Logo" />
              </div>
            </Link>
          </Typography>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <CenteredUnderlineLink to="/about-me">
              {t("aboutMe").toUpperCase()}
            </CenteredUnderlineLink>
            <ListItem
              disablePadding
              sx={{
                position: "relative",
                width: "auto",
                color: "black",
                textDecoration: "none",
                display: "inline-block",
                padding: "0.5rem 0",
                margin: "0 1rem", // Adjust margin to create space between links
                fontFamily: "DIN W02 Light",
                fontSize: "1rem",
                textAlign: "center",
                "&:hover .dropdown": {
                  display: "flex", // Show dropdown on hover
                },
              }}
              onMouseEnter={() => setPortfolioOpen(true)}
              onMouseLeave={() => setPortfolioOpen(false)}
            >
              <ListItem sx={{ height: "5rem", cursor: "pointer" }}>
                {t("portfolio").toUpperCase()}
              </ListItem>
              <Box
                className="dropdown"
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  zIndex: 10,
                  display: portfolioOpen ? "flex" : "none",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "none",
                  px: 2,
                  pb: 2,
                  transform: portfolioOpen
                    ? "translateY(0)"
                    : "translateY(-20px)",
                  opacity: portfolioOpen ? 1 : 0,
                  transition: "transform 0.5s ease, opacity 0.7s ease",
                }}
              >
                <CenteredUnderlineLink to="/events">
                  {t("portfolioEvents")}
                </CenteredUnderlineLink>
                <CenteredUnderlineLink to="/travel">
                  {t("portfolioTravel")}
                </CenteredUnderlineLink>
                <CenteredUnderlineLink to="/family">
                  {t("portfolioFamily")}
                </CenteredUnderlineLink>
                <CenteredUnderlineLink to="/others">
                  {t("portfolioOthers")}
                </CenteredUnderlineLink>
                <CenteredUnderlineLink to="/video">
                  {t("portfolioVideo")}
                </CenteredUnderlineLink>
              </Box>
            </ListItem>
            <CenteredUnderlineLink to="/contact">
              {t("contact").toUpperCase()}
            </CenteredUnderlineLink>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { md: "none" }, color: "black" }}
          >
            <MenuIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
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
