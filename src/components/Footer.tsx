import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "react-i18next";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

const Footer = () => {
  const { i18n } = useTranslation(); // Translation hook
  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <Box
      component="footer"
      sx={{
        p: 2,
        display: "flex", // Use flexbox for alignment
        justifyContent: "space-between", // Space out items
        alignItems: "center", // Center items vertically
        backgroundColor: "#ffffff",
        boxShadow: "0px 0px 9px -1px #eeeeee",
        mt: "auto",
      }}
    >
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          flex: 1,
          textAlign: "center",
          fontSize: { sm: "0.75rem", lg: "1rem" },
          fontFamily: "DIN W02 Light",
        }}
      >
        © 2024 Paweł Kucmida
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <a
          href="https://www.instagram.com/pawel_kucmida__/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", display: "flex" }}
        >
          <InstagramIcon
            sx={{
              fontSize: { sm: "1.5rem", lg: "2rem" },
              color: "black",
              opacity: 0.7, // Default opacity
              "&:hover": {
                opacity: 1, // Opacity on hover
                transition: "opacity 0.3s ease", // Smooth transition effect
              },
            }}
          />
        </a>
        <Select
          value={i18n.language}
          onChange={handleLanguageChange}
          sx={{ ml: 4, height: "2rem" }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="pl">Polski</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default Footer;
