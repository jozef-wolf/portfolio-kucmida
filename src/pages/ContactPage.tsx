import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactPage = () => {
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
          Kontakt
        </Typography>
        <Typography sx={{ fontSize: "1.25rem" }}>
          Jeśli potrzebujesz zdjęć lub dodatkowych informacji, proszę o kontakt.
        </Typography>
        <Typography sx={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Numer telefonu:{" "}
          <a
            href="tel:999999999"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            +48 999 999 999
          </a>
        </Typography>
        <Typography sx={{ fontSize: "1.25rem" }}>
          Adres e-mail:{" "}
          <a
            href="mailto:example@gmail.com"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontWeight: "bold",
            }}
          >
            example@gmail.com
          </a>
        </Typography>
        <Typography sx={{ fontSize: "1.25rem", marginTop: "1rem" }}>
          Odpowiem na wszystkie zapytania i postaram się jak najszybciej pomóc.
          Czekam na Twoją wiadomość!
        </Typography>
        <Typography sx={{ fontSize: "1.25rem", mt: 2 }}>
          <a
            href="https://www.instagram.com/pawel_kucmida__/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <InstagramIcon
              sx={{
                fontSize: "3rem",
                color: "black",
                opacity: 0.7, // Default opacity
                "&:hover": {
                  opacity: 1, // Opacity on hover
                  transition: "opacity 0.3s ease", // Smooth transition effect
                },
              }}
            />
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default ContactPage;
