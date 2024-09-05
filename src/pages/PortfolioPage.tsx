import { useParams, useNavigate } from "react-router-dom";
import ResponsiveGallery from "react-responsive-gallery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

// Define an interface for the image item
interface MediaItem {
  src: string;
  alt: string;
  orderS: number;
  orderM: number;
  orderL: number;
  mediaClassName?: string;
}

const galleries: Record<string, MediaItem[]> = {
  events: [
    { src: "/image1.jpg", alt: "Event 1", orderS: 1, orderM: 1, orderL: 1 },
    { src: "/image2.jpg", alt: "Event 2", orderS: 2, orderM: 2, orderL: 2 },
    { src: "/image3.jpg", alt: "Event 3", orderS: 3, orderM: 3, orderL: 3 },
    { src: "/image4.jpg", alt: "Event 4", orderS: 4, orderM: 4, orderL: 4 },
    { src: "/image5.jpg", alt: "Event 5", orderS: 5, orderM: 5, orderL: 5 },
    { src: "/image6.jpg", alt: "Travel 6", orderS: 6, orderM: 6, orderL: 6 },
    { src: "/image7.jpg", alt: "Travel 7", orderS: 7, orderM: 7, orderL: 7 },
    { src: "/image8.jpg", alt: "Travel 8", orderS: 8, orderM: 8, orderL: 8 },
    { src: "/image9.jpg", alt: "Travel 9", orderS: 9, orderM: 9, orderL: 9 },
    {
      src: "/image10.jpg",
      alt: "Travel 10",
      orderS: 10,
      orderM: 10,
      orderL: 10,
    },
    {
      src: "/image11.jpg",
      alt: "Family 11",
      orderS: 11,
      orderM: 11,
      orderL: 11,
    },
    {
      src: "/image12.jpg",
      alt: "Family 12",
      orderS: 12,
      orderM: 12,
      orderL: 12,
    },
  ],
  travel: [
    { src: "/image1.jpg", alt: "Event 1", orderS: 1, orderM: 1, orderL: 1 },
    { src: "/image2.jpg", alt: "Event 2", orderS: 2, orderM: 2, orderL: 2 },
    { src: "/image3.jpg", alt: "Event 3", orderS: 3, orderM: 3, orderL: 3 },
    { src: "/image4.jpg", alt: "Event 4", orderS: 4, orderM: 4, orderL: 4 },
    { src: "/image5.jpg", alt: "Event 5", orderS: 5, orderM: 5, orderL: 5 },
    { src: "/image6.jpg", alt: "Travel 6", orderS: 6, orderM: 6, orderL: 6 },
    { src: "/image7.jpg", alt: "Travel 7", orderS: 7, orderM: 7, orderL: 7 },
    { src: "/image8.jpg", alt: "Travel 8", orderS: 8, orderM: 8, orderL: 8 },
    { src: "/image9.jpg", alt: "Travel 9", orderS: 9, orderM: 9, orderL: 9 },
    {
      src: "/image10.jpg",
      alt: "Travel 10",
      orderS: 10,
      orderM: 10,
      orderL: 10,
    },
    {
      src: "/image11.jpg",
      alt: "Family 11",
      orderS: 11,
      orderM: 11,
      orderL: 11,
    },
    {
      src: "/image12.jpg",
      alt: "Family 12",
      orderS: 12,
      orderM: 12,
      orderL: 12,
    },
  ],
  family: [
    { src: "/image1.jpg", alt: "Event 1", orderS: 1, orderM: 1, orderL: 1 },
    { src: "/image2.jpg", alt: "Event 2", orderS: 2, orderM: 2, orderL: 2 },
    { src: "/image3.jpg", alt: "Event 3", orderS: 3, orderM: 3, orderL: 3 },
    { src: "/image4.jpg", alt: "Event 4", orderS: 4, orderM: 4, orderL: 4 },
    { src: "/image5.jpg", alt: "Event 5", orderS: 5, orderM: 5, orderL: 5 },
    { src: "/image6.jpg", alt: "Travel 6", orderS: 6, orderM: 6, orderL: 6 },
    { src: "/image7.jpg", alt: "Travel 7", orderS: 7, orderM: 7, orderL: 7 },
    { src: "/image8.jpg", alt: "Travel 8", orderS: 8, orderM: 8, orderL: 8 },
    { src: "/image9.jpg", alt: "Travel 9", orderS: 9, orderM: 9, orderL: 9 },
    {
      src: "/image10.jpg",
      alt: "Travel 10",
      orderS: 10,
      orderM: 10,
      orderL: 10,
    },
    {
      src: "/image11.jpg",
      alt: "Family 11",
      orderS: 11,
      orderM: 11,
      orderL: 11,
    },
    {
      src: "/image12.jpg",
      alt: "Family 12",
      orderS: 12,
      orderM: 12,
      orderL: 12,
    },
  ],
  others: [
    { src: "/image1.jpg", alt: "Event 1", orderS: 1, orderM: 1, orderL: 1 },
    { src: "/image2.jpg", alt: "Event 2", orderS: 2, orderM: 2, orderL: 2 },
    { src: "/image3.jpg", alt: "Event 3", orderS: 3, orderM: 3, orderL: 3 },
    { src: "/image4.jpg", alt: "Event 4", orderS: 4, orderM: 4, orderL: 4 },
    { src: "/image5.jpg", alt: "Event 5", orderS: 5, orderM: 5, orderL: 5 },
    { src: "/image6.jpg", alt: "Travel 6", orderS: 6, orderM: 6, orderL: 6 },
    { src: "/image7.jpg", alt: "Travel 7", orderS: 7, orderM: 7, orderL: 7 },
    { src: "/image8.jpg", alt: "Travel 8", orderS: 8, orderM: 8, orderL: 8 },
    { src: "/image9.jpg", alt: "Travel 9", orderS: 9, orderM: 9, orderL: 9 },
    {
      src: "/image10.jpg",
      alt: "Travel 10",
      orderS: 10,
      orderM: 10,
      orderL: 10,
    },
    {
      src: "/image11.jpg",
      alt: "Family 11",
      orderS: 11,
      orderM: 11,
      orderL: 11,
    },
    {
      src: "/image12.jpg",
      alt: "Family 12",
      orderS: 12,
      orderM: 12,
      orderL: 12,
    },
  ],
};

export default function PortfolioPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation(); // Translation hook

  if (!category || !galleries[category]) {
    return <div>{t("categoryNotFound")}</div>;
  }

  const media = galleries[category];
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box className="Portfolio-page" sx={{ p: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          mb: 2,
          mt: 4, // margin-bottom for spacing below the header
          width: "100%", // Ensure the container spans the full width
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 0,
            display: "flex",
            alignItems: "center",
            height: "100%",
            px: 2, // padding on the left
          }}
        >
          <button onClick={handleBack} className="back-button">
            <ArrowBackIosIcon sx={{ fontSize: 40, fontWeight: "lighter" }} />
          </button>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            flexGrow: 1,
            mx: "auto",
          }}
        >
          <h2 style={{ margin: 0, fontWeight: "lighter",fontFamily: "DIN W02 Light", fontSize: "2rem" }}>
            {t(
              `portfolio${category.charAt(0).toUpperCase() + category.slice(1)}`
            )}
          </h2>
        </Box>
      </Box>
      <ResponsiveGallery
        useLightBox
        numOfMediaPerRow={{
          xs: 1,
          s: 1,
          m: 1,
          l: 2,
          xl: 2,
          xxl: 3,
        }}
        media={media}
      />
    </Box>
  );
}
