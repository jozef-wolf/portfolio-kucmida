import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// Define the type for the gallery item props
interface GalleryItemProps {
  to: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
}

// GalleryItem Component
const GalleryItem: React.FC<GalleryItemProps> = ({ to, title, imgSrc, imgAlt }) => (
  <Grid item xs={12} sm={6} md={6} lg={6}>
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          '& img': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <img src={imgSrc} alt={imgAlt} />
      </Box>
    </Link>
  </Grid>
);

// MainGalleryPage Component
const MainGalleryPage: React.FC = () => {
  const galleryItems = [
    { to: "/gallery/events", title: "Events", imgSrc: "/image1.jpg", imgAlt: "Events" },
    { to: "/gallery/travel", title: "Travel", imgSrc: "/image2.jpg", imgAlt: "Travel" },
    { to: "/gallery/family", title: "Family", imgSrc: "/image3.jpg", imgAlt: "Family" },
    { to: "/gallery/others", title: "Others", imgSrc: "/image4.jpg", imgAlt: "Others" }
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        columns={12}
        sx={{
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)', // 1 column on mobile
            sm: 'repeat(1, 1fr)', // 1 column on tablet
            md: 'repeat(2, 1fr)', // 2 columns on desktop
            lg: 'repeat(2, 1fr)', // 2 columns on large screens
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
