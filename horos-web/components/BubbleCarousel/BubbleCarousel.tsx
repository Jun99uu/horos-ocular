import Image from "next/image";
import OneOrTwoTwoBubbleCarousel from "./OneOrTwoBubbleCarousel";
import ManyBubbleCarousel from "./ManyBubbleCarousel";
import React, { useEffect, useState } from "react";

export default function BubbleCarousel(): React.ReactElement {
  const [imageArr, setImageArr] = useState<string[]>([]);

  useEffect(() => {
    setImageArr([
      "https://i.pinimg.com/564x/b3/b0/e0/b3b0e05ecd6ac5427d4ca24446867869.jpg",
      "https://i.pinimg.com/564x/b3/b0/e0/b3b0e05ecd6ac5427d4ca24446867869.jpg",
      "https://i.pinimg.com/564x/b3/b0/e0/b3b0e05ecd6ac5427d4ca24446867869.jpg",
      "https://i.pinimg.com/564x/b3/b0/e0/b3b0e05ecd6ac5427d4ca24446867869.jpg",
    ]);
  }, []);
  return imageArr.length <= 2 ? (
    <OneOrTwoTwoBubbleCarousel images={imageArr} />
  ) : (
    <ManyBubbleCarousel images={imageArr} />
  );
}
