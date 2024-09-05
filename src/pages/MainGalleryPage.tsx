import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
          "& img": {
            width: "100%",
            height: "auto",
            boxShadow: "8px 8px 20px rgba(0, 0, 0, 0.5)", // Add shadow directly here
            transition: "opacity 0.3s ease", // Smooth transition for hover
            "&:hover": {
              opacity: 0.7, // Change opacity on hover
            }, // Optional: rounded corners
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
  const galleryItems = [
    {
      to: "/gallery/events",
      imgSrc: "/image1.jpg",
      imgAlt: "Events",
      title: "Eventy",
    },
    {
      to: "/gallery/travel",
      imgSrc: "/image2.jpg",
      imgAlt: "Travel",
      title: "Architektura",
    },
    {
      to: "/gallery/family",
      imgSrc: "/image3.jpg",
      imgAlt: "Family",
      title: "Portrety",
    },
    {
      to: "/gallery/others",
      imgSrc: "/image4.jpg",
      imgAlt: "Others",
      title: "Reportaż",
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: { xs: 2, sm: 4, md: 14 }, // Padding on left and right for smaller and larger screens
        px: { sm: 8 },
        maxWidth: '1280px' // Extra padding on left and right for larger screens
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4, lg: 6 }} // Adjust spacing for different screen sizes
        columns={12}
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)", // 1 column for extra-small screens
            sm: "repeat(2, 1fr)", // 2 columns for small screens (600px and up)
            md: "repeat(2, 1fr)", // 2 columns for medium screens (900px and up)
            lg: "repeat(2, 1fr)", // 2 columns for large screens (1200px and up)
          },
        }}
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
