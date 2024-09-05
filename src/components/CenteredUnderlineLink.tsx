import * as React from "react";
import Typography from "@mui/material/Typography";

interface CenteredUnderlineLinkProps {
  to: string;
  children: React.ReactNode;
}

const CenteredUnderlineLink: React.FC<CenteredUnderlineLinkProps> = ({ to, children, color = "black" }) => (
  <Typography
    component="a"
    href={to}
    sx={{
      textDecoration: "none",
      color: color,
      fontSize: "1.25rem",
      position: "relative",
      display: "inline-block",
      padding: "0.5rem 0",
      overflow: "hidden",
      margin: "0 1rem", // Adjust margin to create more space between links
      "&::after": {
        content: '""',
        position: "absolute",
        left: "50%",
        bottom: 0,
        width: "100%",
        height: "1px",
        backgroundColor: "#696969d9", // Use the same color as the link
        transform: "translateX(-50%) scaleX(0)",
        transition: "transform 0.3s ease",
      },
      "&:hover::after": {
        transform: "translateX(-50%) scaleX(1)",
      },
    }}
  >
    {children}
  </Typography>
);

export default CenteredUnderlineLink;
