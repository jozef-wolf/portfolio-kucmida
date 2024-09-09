import { useParams } from "react-router-dom";
import ResponsiveGallery from "react-responsive-gallery";
import { Box, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";

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
  video: [
    {
      src: "https://player.vimeo.com/video/97662290",
      alt: "Video 1",
      orderS: 1,
      orderM: 1,
      orderL: 1,
      mediaClassName: "video-item",
    },
    {
      src: "https://player.vimeo.com/video/97662290",
      alt: "Video 2",
      orderS: 2,
      orderM: 2,
      orderL: 2,
      mediaClassName: "video-item",
    },
    {
      src: "https://player.vimeo.com/video/97662290",
      alt: "Video 3",
      orderS: 3,
      orderM: 3,
      orderL: 3,
      mediaClassName: "video-item",
    },
    {
      src: "https://player.vimeo.com/video/97662290",
      alt: "Video 4",
      orderS: 4,
      orderM: 4,
      orderL: 4,
      mediaClassName: "video-item",
    },
  ],
};

export default function PortfolioPage() {
  const { category } = useParams<{ category: string }>();
  const { t } = useTranslation(); // Translation hook

  const [loadingVideos, setLoadingVideos] = useState<boolean[]>([]); // Track loading state for each video

  useEffect(() => {
    if (category === "video") {
      setLoadingVideos(new Array(galleries[category].length).fill(true)); // Initialize all videos as loading
    }
  }, [category]);

  if (!category || !galleries[category]) {
    return <div>{t("categoryNotFound")}</div>;
  }

  const media = galleries[category];

  const handleVideoLoad = (index: number) => {
    setLoadingVideos((prev) => {
      const updatedLoadingVideos = [...prev];
      updatedLoadingVideos[index] = false; // Mark this video as loaded
      return updatedLoadingVideos;
    });
  };

  return (
    <Box
      className="Portfolio-page"
      sx={{
        p: 2,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100vw",
        maxWidth: "1280px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          mb: 2,
          mt: 4,
          width: "100%",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            flexGrow: 1,
            mx: "auto",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontWeight: "lighter",
              fontFamily: "DIN W02 Light",
              fontSize: "2rem",
            }}
          >
            {t(
              `portfolio${category.charAt(0).toUpperCase() + category.slice(1)}`
            )}
          </h2>
        </Box>
      </Box>
      {category === "video" ? (
        <Grid container spacing={2} sx={{ maxWidth: "1280px" }}>
          {media.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "0",
                  paddingTop: { sm: "100%", lg: "52%" }, // 16:9 aspect ratio
                  overflow: "hidden",
                  gap: "1rem",
                  "& iframe": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  },
                }}
              >
                {loadingVideos[index] && <Loader />}
                <iframe
                  src={item.src}
                  title={item.alt}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => handleVideoLoad(index)}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <ResponsiveGallery
          useLightBox
          numOfMediaPerRow={{
            xs: 1,
            s: 1,
            m: 1,
            l: 3,
            xl: 3,
            xxl: 3,
          }}
          media={media}
        />
      )}
    </Box>
  );
}
