import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = '/image1.jpg';
    image.onload = () => setLoaded(true);
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
        width: "100vw", // Full viewport width
        height: "100vh", // Full viewport height
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <img
          src="/image1.jpg"
          alt="HomePage"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(-100%)",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

export default HomePage;
