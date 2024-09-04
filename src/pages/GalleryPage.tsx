import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ResponsiveGallery from "react-responsive-gallery";

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
    // Add more event images as needed
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
    // Add more event images as needed
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
    // Add more event images as needed
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
    // Add more event images as needed
  ],
};

export default function GalleryPage() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  if (!category || !galleries[category]) {
    return <div>Category not found</div>;
  }

  const media = galleries[category];
  const handleBack = () => {
    navigate(-1); // Go back one step in the history
  };
  return (
    <div className="gallery-page">
      <button onClick={handleBack} className="back-button">
        Back
      </button>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
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
    </div>
  );
}
