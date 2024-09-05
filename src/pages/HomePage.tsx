import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image1 = new Image();
    const image2 = new Image();
    const image3 = new Image();

    image1.src = '/image1.jpg';
    image2.src = '/image2.jpg';
    image3.src = '/image3.jpg';

    let imagesLoaded = 0;
    const onLoad = () => {
      imagesLoaded += 1;
      if (imagesLoaded === 3) setLoaded(true);
    };

    image1.onload = onLoad;
    image2.onload = onLoad;
    image3.onload = onLoad;
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        height: "100vh",
        // backgroundColor: "#000", // Optional: to see image borders more clearly
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Change direction based on screen size
          position: "relative",
        }}
      >
        <Box
          sx={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/image1.jpg"
            alt="Image 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/image2.jpg"
            alt="Image 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src="/image3.jpg"
            alt="Image 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "scaleX(1)" : "scaleX(0)",
              transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

