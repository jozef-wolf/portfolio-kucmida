import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Define GalleryItem with Grid v2
interface GalleryItemProps {
  to: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  to,
  title,
  imgSrc,
  imgAlt,
}) => (
  <Grid item xs={12} sm={6} md={6} lg={6}>
    <Link to={to} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          margin: 1, // Add margin to create space around each item
          "& img": {
            width: "100%",
            height: "auto",
            boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.5)",
            transition: "opacity 0.3s ease",
            "&:hover": {
              opacity: 0.7,
            },
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 1, color: "black" }}>
          {title}
        </Typography>
        <img src={imgSrc} alt={imgAlt} className="category-image" />
      </Box>
    </Link>
  </Grid>
);

const MainGalleryPage: React.FC = () => {
  const { t } = useTranslation();

  const galleryItems = [
    { to: "/gallery/events", imgSrc: "/image1.jpg", imgAlt: "Events", title: t("galleryEvents") },
    { to: "/gallery/travel", imgSrc: "/image2.jpg", imgAlt: "Travel", title: t("galleryTravel") },
    { to: "/gallery/family", imgSrc: "/image3.jpg", imgAlt: "Family", title: t("galleryFamily") },
    { to: "/gallery/others", imgSrc: "/image4.jpg", imgAlt: "Others", title: t("galleryOthers") },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 4, md: 14 },
        px: { sm: 8 },
        maxWidth: '1280px',
        mx: 'auto', // Center the container horizontally
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4, lg: 6 }} // Adjust spacing between grid items
        columns={12}
      >
        {galleryItems.map((item, index) => (
          <GalleryItem
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

export default MainGalleryPage;
