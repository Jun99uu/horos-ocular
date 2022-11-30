import Image from "next/image";
import OneOrTwoTwoBubbleCarousel from "./OneOrTwoBubbleCarousel";
import ManyBubbleCarousel from "./ManyBubbleCarousel";
import React, { useEffect, useState } from "react";

export default function BubbleCarousel(): React.ReactElement {
  const [imageArr, setImageArr] = useState<string[]>([]);

  useEffect(() => {
    setImageArr([
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F375%2F2012%2F12%2F20%2F10000325297_59_20121220093632.jpg&type=sc960_832",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20141006_225%2Fwkdgkdld_14125618764680TwXu_JPEG%2F%25C4%25B8%25C3%25B3.JPG3265588.JPG&type=sc960_832",
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140927_70%2F7lovei_14118111015890FGf6_JPEG%2Fr-8.jpg&type=sc960_832",
    ]);
  }, []);
  return imageArr.length <= 2 ? (
    <OneOrTwoTwoBubbleCarousel images={imageArr} />
  ) : (
    <ManyBubbleCarousel images={imageArr} />
  );
}
