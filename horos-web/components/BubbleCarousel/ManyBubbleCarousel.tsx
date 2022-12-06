import Image from "next/image";
import { useState } from "react";

export default function ManyBubbleCarousel(props: { images: string[] }) {
  const [clickedImage, setClickedImage] = useState<string>("");

  let images = props.images;
  const images1: string[] = [];
  const images2: string[] = [];
  if (images.length > 2) {
    for (let i = 0; i < Math.floor(images.length / 2); i++) {
      images1.push(images[i]);
    }

    for (let i = Math.floor(images.length / 2); i < images.length; i++) {
      images2.push(images[i]);
    }
  }

  return (
    <div>
      <div className="image_array">
        {images1.map((img, index) => (
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
      <div className="image_array">
        {images2.map((img, index) => (
          <div
            key={img}
            className={clickedImage === img ? "image_clicked" : "image"}
            onClick={() => {
              clickedImage !== img ? setClickedImage(img) : setClickedImage("");
            }}
          >
            <Image src={img} alt="img" objectFit="cover" layout="fill" />
          </div>
        ))}
      </div>
      <style jsx>{`
        .image_array {
          display: flex;
          /* float: left; */
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .image {
          height: 200px;
          aspect-ratio: 1 / 1;
          position: relative;
          border-radius: 100%;
          overflow: hidden;
          transition: all 0.25s;
        }
        .image_clicked {
          height: 400px;
          aspect-ratio: 1 / 1;
          position: relative;
          border-radius: 100%;
          transition: all 0.25s;
        }
      `}</style>
    </div>
  );
}
