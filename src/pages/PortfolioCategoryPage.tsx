import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Define portfolioItem with Grid v2
interface portfolioItemProps {
  to: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
}

const PortfolioItem: React.FC<portfolioItemProps> = ({
  to,
  title,
  imgSrc,
  imgAlt,
}) => (
  <Grid item xs={12} sm={6} md={6} lg={6} sx={{ padding: 0 }}>
    <Link to={to} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.3s ease",
          },
          "&:hover img": {
            opacity: 0.3, // Reduce image opacity when hovering over the image or box
          },
          "&:hover h6": {
            opacity: 1, // Reduce image opacity when hovering over the image or box
          },
        }}
      >
        <img src={imgSrc} alt={imgAlt} className="category-image" />
        <Typography
          variant="h6"
          className="title"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "rgba(73, 67, 30)",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            opacity: 0.5, // Always visible (no need to hide)
            transition: "opacity 0.3s ease",
            fontFamily: "DIN W02 Light",
            fontSize: "4rem",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Link>
  </Grid>
);

const PortfolioCategoryPage: React.FC = () => {
  const { t } = useTranslation();

  const portfolioItems = [
    {
      to: "/portfolio/events",
      imgSrc: "/image1.jpg",
      imgAlt: "Events",
      title: t("portfolioEvents"),
    },
    {
      to: "/portfolio/travel",
      imgSrc: "/image2.jpg",
      imgAlt: "Travel",
      title: t("portfolioTravel"),
    },
    {
      to: "/portfolio/family",
      imgSrc: "/image3.jpg",
      imgAlt: "Family",
      title: t("portfolioFamily"),
    },
    {
      to: "/portfolio/others",
      imgSrc: "/image4.jpg",
      imgAlt: "Others",
      title: t("portfolioOthers"),
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 0, sm: 0, md: 0 }, // Remove padding to remove space around the container
        maxWidth: "1280px",
        mx: "auto", // Center the container horizontally
      }}
    >
      <Grid container spacing={0} columns={12}>
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={index}
            to={item.to}
            title={item.title}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioCategoryPage;
