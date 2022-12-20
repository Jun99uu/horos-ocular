import { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";
import AnalyzeResult from "./AnalyzeResult";
import { Index } from "../../../interfaces/videoIndexInterface";
import axios from "axios";
import { base_url } from "../../../res/baseurl";

enum Stage {
  Upload,
  Analysze,
}

interface faceSearchProps {
  vid: number;
  url: string;
}

export default function FaceSearchLayout(props: faceSearchProps) {
  const { url, vid } = props;
  const [stage, setStage] = useState(Stage.Upload);
  const [indexs, setIndexs] = useState<Index>();
  const [imgFile, setImgFile] = useState<File>();

  const getItems = () => {
    //통신으로 파일 보내고 -> 데이터 받아오기
    //임시 인덱스
    const tmpIndex: Index = {
      cluster: 0,
      continuous_time: [
        { start: 17.82, end: 24.2 },
        { start: 44.8, end: 47 },
        { start: 48, end: 49 },
        { start: 75, end: 77 },
        { start: 99, end: 101 },
        { start: 145.5, end: 145.5 },
        { start: 157, end: 158 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EC%84%A4%EC%95%84.png",
    };

    setIndexs(tmpIndex);

    // if (imgFile) {
    //   const multipartFile = new FormData();
    //   multipartFile.append("image", imgFile);
    //   axios
    //     .post(`${base_url}/horus/video/search?vid=${vid}`, multipartFile, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       setIndexs(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
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
