import {
  useState,
  useEffect,
  ComponentProps,
  DOMAttributes,
  Dispatch,
  SetStateAction,
} from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faUser } from "@fortawesome/free-solid-svg-icons";

type EventHandlers<T> = Omit<
  DOMAttributes<T>,
  "children" | "dangerouslySetInnerHTML"
>;

export type Event<
  TElement extends keyof JSX.IntrinsicElements,
  TEventHandler extends keyof EventHandlers<TElement>
> = ComponentProps<TElement>[TEventHandler];

enum Stage {
  Upload,
  Analysze,
}

interface uploadProps {
  setStage: Dispatch<SetStateAction<Stage>>;
  setImgFile: Dispatch<SetStateAction<File | undefined>>;
}

export default function ImageUpload(props: uploadProps) {
  const { setStage, setImgFile } = props;
  const [profile, setProfile] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleOnChange: Event<"input", "onChange"> = (e) => {
    if (window.FileReader) {
      const {
        currentTarget: { files, value },
      } = e;
      if (files !== null) {
        const theFile = files![0];
        const reader = new FileReader();
        setProfile(value);
        reader.onloadend = (finishedEvent: any) => {
          const {
            target: { result },
          } = finishedEvent;
          setAttachment(result);
          setImgFile(theFile);
          setStage(Stage.Analysze);
        };
        if (theFile && theFile.type.match("image.*")) {
          reader.readAsDataURL(theFile);
        }
      }
    }
  };

  return (
    <div className="img-box">
      {attachment !== "" ? (
        <Image
          src={attachment}
          layout="fill"
          objectFit="cover"
          alt="upload-img"
        />
      ) : (
        <div className="no-img">
          <FontAwesomeIcon icon={faUser} />
        </div>
      )}
      <div className="hover-box">
        <label htmlFor="file" className="vanilla-label">
          <FontAwesomeIcon icon={faFolderPlus} />
        </label>
        <input
          name="file"
          type="file"
          id="file"
          accept="image/*"
          onChange={handleOnChange}
          value={profile}
        />
      </div>
      <style jsx>{`
        .img-box {
          display: flex;
          justify-content: center;
          align-items: center;
          object-fit: cover;
          overflow: hidden;
          width: 200px;
          height: 200px;
          border-radius: 100%;
          box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
            0 8px 16px -8px rgba(0, 0, 0, 0.3),
            0 -6px 16px -6px rgba(0, 0, 0, 0.025);
          position: relative;
          transition: all 0.15s;
        }
        .no-img {
          background-color: #cacaca;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 48px;
          color: #242424;
          cursor: pointer;
        }
        .attachment {
          object-fit: cover;
        }
        .hover-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(4.5px);
          -webkit-backdrop-filter: blur(4.5px);
          border: 2px solid rgba(255, 255, 255, 0.18);
          position: absolute;
          top: 0px;
          left: 0px;
          opacity: 0;
          transition: opacity 0.25s linear;
        }
        .img-box:hover .hover-box {
          opacity: 1;
        }
        input[type="file"] {
          /* 파일 필드 숨기기 */
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .hover-box label {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          border-radius: 5px;
          color: #ffc600;
          font-weight: bold;
          font-size: 60px;
          transition: 0.25s;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
