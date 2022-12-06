import Image from "next/image";
import { useState } from "react";

export default function TwoBubbleCarousel(props: { images: string[] }) {
  const [clickedImage, setClickedImage] = useState<string>("");
  const images: string[] = props.images;

  return (
    <div>
      <div className="image-array">
        {images.map((img, index) => (
          <div
            key={img}
            className={clickedImage === img ? "image_clicked" : "image"}
            onClick={() => {
              clickedImage !== img ? setClickedImage(img) : setClickedImage("");
            }}
          >
            <Image
              src={img}
              alt="img"
              objectFit="cover"
              layout="fill"
              style={{ overflow: "hidden" }}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        .image {
          width: 400px;
          height: 400px;
          position: relative;
          border-radius: 100%;
          overflow: hidden;
        }
        .image_clicked {
          width: 400px;
          height: 400px;
          position: relative;
          border-radius: 100%;
        }
        .image-array {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
