import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";

interface CenteredUnderlineLinkProps {
  to: string;
  children: React.ReactNode;
  color?: string; // Optional color prop
}

const CenteredUnderlineLink: React.FC<CenteredUnderlineLinkProps> = ({
  to,
  children,
  color = "black",
}) => {
  const location = useLocation();
  const isActive = location.pathname === to; // Check if the link is active

  return (
    <Typography
      component={Link}
      to={to}
      sx={{
        textDecoration: "none",
        color: color,
        position: "relative",
        display: "inline-block",
        padding: "0.5rem 0",
        overflow: "hidden",
        margin: "0 1rem", // Adjust margin to create space between links
        fontFamily: "DIN W02 Light",
        fontSize: "1.5rem",
        "&::after": {
          content: '""',
          position: "absolute",
          left: "50%",
          bottom: 0,
          width: "100%",
          height: "1px",
          backgroundColor: color,
          transform: isActive
            ? "translateX(-50%) scaleX(1)" // Underline if active
            : "translateX(-50%) scaleX(0)", // No underline if not active
          transition: "transform 0.3s ease",
        },
        "&:hover::after": {
          transform: "translateX(-50%) scaleX(1)", // Show underline on hover
        },
      }}
    >
      {children}
    </Typography>
  );
};

export default CenteredUnderlineLink;
