import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const AboutMePage = () => {
  return (
    <div>
      <Box
        component="main"
        sx={{
          p: 3, // Padding
          mx: { xs: "5%", sm: "10%", md: "15%", lg: "20%" }, // Responsive margins
          maxWidth: "1200px", // Optional: Max width to ensure content doesn't stretch too wide
          margin: "auto", // Center content horizontally
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          O mnie
        </Typography>
        <Typography sx={{ fontSize: "1.25rem" }}>
          Lorem Ipsum: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet, ligula non blandit scelerisque, erat orci
          convallis tortor, vel malesuada erat ipsum ac lectus. Sed feugiat,
          nulla a pellentesque euismod, nisi ante vehicula lorem, eget
          sollicitudin nisl eros vel metus. Duis efficitur libero vitae est
          scelerisque, ac commodo ipsum consectetur. Proin non vulputate sem.
          Mauris viverra orci vitae sem dictum, sed commodo ipsum dignissim. In
          tristique ex et metus bibendum, vel tincidunt nisi tristique.
          Suspendisse vel fermentum tortor. Curabitur nec lectus nec eros
          ultricies auctor. Nulla facilisi. Vivamus fringilla, erat a aliquam
          faucibus, magna nunc varius lorem, vel aliquam quam ante nec velit.
   
        </Typography>
      </Box>
    </div>
  );
};

export default AboutMePage;
