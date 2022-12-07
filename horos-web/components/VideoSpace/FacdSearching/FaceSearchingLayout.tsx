import { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import AnalyzeResult from "./AnalyzeResult";
import { Index } from "../../../interfaces/videoIndexInterface";

enum Stage {
  Upload,
  Analysze,
}

interface faceSearchProps {
  url: string;
}

export default function FaceSearchLayout(props: faceSearchProps) {
  const { url } = props;
  const [stage, setStage] = useState(Stage.Upload);
  const [indexs, setIndexs] = useState<Index>();
  const [imgFile, setImgFile] = useState<File>();

  const getItems = () => {
    //통신으로 파일 보내고 -> 데이터 받아오기
    //임시 인덱스
    const tmpIndex: Index = {
      cluster: 0,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://i.pinimg.com/564x/e1/bd/3a/e1bd3a590cc5467158e22ff39dfaf5b1.jpg",
    };

    setIndexs(tmpIndex);
  };

  useEffect(() => {
    //imgFile로 검사하기
    getItems();
  }, [stage]);

  return (
    <div className="container">
      <ImageUpload setStage={setStage} setImgFile={setImgFile} />
      {stage === Stage.Analysze ? (
        <>
          <span className="line" />
          <AnalyzeResult url={url} index={indexs} />
        </>
      ) : (
        <></>
      )}
      <style jsx>{`
        .container {
          width: 100%;
          height: 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 50px;
        }
        .line {
          width: 2px;
          height: 100px;
          border-radius: 500px;
          background-color: white;
        }
      `}</style>
    </div>
  );
}
