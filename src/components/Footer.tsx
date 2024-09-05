import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation(); // Translation hook
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        display: "flex", // Use flexbox for alignment
        justifyContent: "space-between", // Space out items
        alignItems: "center", // Center items vertically
        backgroundColor: "#f8f8f8",
        borderTop: "1px solid #e0e0e0",
        mt: "auto",
      }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ flex: 1, textAlign: "center" }}
      >
        © 2024 Paweł Kucmida {t("photography")}
      </Typography>
      <Box>
        <a
          href="https://www.instagram.com/pawel_kucmida__/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <InstagramIcon
            sx={{
              fontSize: "2rem",
              color: "black",
              opacity: 0.7, // Default opacity
              "&:hover": {
                opacity: 1, // Opacity on hover
                transition: "opacity 0.3s ease", // Smooth transition effect
              },
            }}
          />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
