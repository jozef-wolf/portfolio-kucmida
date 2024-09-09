import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const AboutMePage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Box
        component="main"
        sx={{
          pX: 3,
          pt: { xs: 3, xl: "10%" },
          mx: { xs: "5%", sm: "10%", md: "15%", lg: "20%" }, // Responsive margins
          maxWidth: "1200px", // Optional: Max width to ensure content doesn't stretch too wide
          margin: "auto", // Center content horizontally
        }}
      >
        <Toolbar />
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontFamily: "DIN W02 Light",
            fontSize: "2rem",
            paddingBottom: "4rem",
          }}
        >
          {t("aboutMe")}
        </Typography>
        <Typography sx={{ fontFamily: "DIN W02 Light", fontSize: "1.25rem" }}>
          {t("aboutMeDescription")}
        </Typography>
      </Box>
    </div>
  );
};

export default AboutMePage;
