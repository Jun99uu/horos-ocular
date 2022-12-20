import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import VideoIndexingLayout from "./VideoIndexing/VideoIndexingLayout";
import { Index } from "../../interfaces/videoIndexInterface";
import FaceSearchLayout from "./FacdSearching/FaceSearchingLayout";
import SpeechSearchLayout from "./SpeechSearching/SpeechSearchLayout";
import axios from "axios";

interface videoProps {
  vid: number;
  url: string;
}

enum Stage {
  Indexing,
  Search,
  Speech,
}

const titles = [
  "Video Indexing",
  "Video Search by face",
  "Video Search by speech",
];
const subtitles = [
  "영상에 등장하는 인물들의 인덱스예요.",
  "검색하고 싶은 인물의 이미지를 입력해주세요.",
  "검색하고싶은 음성이나 텍스트를 입력해주세요.",
];

export default function VideoSpaceLayout(props: videoProps) {
  const { url, vid } = props;
  const [stage, setStage] = useState<Stage>(Stage.Indexing);
  const [indexs, setIndexs] = useState<Array<Index>>([]);
  const [domLoaded, setDomLoaded] = useState(false);

  const getIndexs = () => {
    const tmp1: Index = {
      cluster: 0,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EC%9D%80%EC%84%9C.png",
    };

    const tmp2: Index = {
      cluster: 1,
      continuous_time: [
        { start: 2, end: 4.5 },
        { start: 6, end: 8.5 },
        { start: 7, end: 9.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EC%97%B0%EC%A0%95.png",
    };

    const tmp3: Index = {
      cluster: 2,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EC%97%AC%EB%A6%84.png",
    };

    const tmp4: Index = {
      cluster: 2,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EC%97%91%EC%8B%9C.png",
    };

    const tmp5: Index = {
      cluster: 2,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EC%88%98%EB%B9%88.png",
    };

    const tmp6: Index = {
      cluster: 2,
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

    const tmp7: Index = {
      cluster: 2,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EB%B3%B4%EB%82%98.png",
    };

    const tmp8: Index = {
      cluster: 2,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EB%AD%90%EC%A7%80.png",
    };

    const tmp9: Index = {
      cluster: 2,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EB%A3%A8%EB%8B%A4.png",
    };

    const tmp10: Index = {
      cluster: 2,
      continuous_time: [
        { start: 0, end: 1.5 },
        { start: 2, end: 3.5 },
        { start: 4, end: 5.5 },
      ],
      face: "https://horosocular.s3.ap-northeast-1.amazonaws.com/%EB%8B%A4%EC%9B%90.png",
    };

    const tmps = [tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];

    setIndexs(tmps);

    // axios
    //   .get(`https://4a33-112-133-126-250.ngrok.io/horus/video/index?vid=${vid}`, {
    //     headers: {
    //       "Content-type": "application/json",
    //       Accept: "application/json",
    //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    //     },
    //   })
    //   .then((res) => {
    //     setIndexs(res.data.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {
    setDomLoaded(true);
    getIndexs();
  }, []);

  return (
    <div className="container">
      <div className="upper-box">
        <div className="player-wrapper">
          {domLoaded ? (
            <ReactPlayer url={url} controls width="100%" height="100%" />
          ) : (
            <></>
          )}
        </div>
        <ul className="menu-list">
          <li className="menu-title">원하는 분석 기능을 클릭해주세요!</li>
          <li
            className={stage === Stage.Indexing ? "selected" : "non"}
            onClick={() => setStage(Stage.Indexing)}
          >
            <span className="title">Video Indexing</span>
            <span className="subtitle">{`영상에서 등장하는 모든 인물을 볼 수 있어요.\n인물들이 등퇴장한 시간을 알 수 있어요.`}</span>
          </li>
          <li
            className={stage === Stage.Search ? "selected" : "non"}
            onClick={() => setStage(Stage.Search)}
          >
            <span className="title">Video Search by face</span>
            <span className="subtitle">{`특정 인물의 얼굴 이미지를 업로드 해주세요.\n해당 인물의 등장 여부 및 등장 시점을 알려드려요.`}</span>
          </li>
          <li
            className={stage === Stage.Speech ? "selected" : "non"}
            onClick={() => setStage(Stage.Speech)}
          >
            <span className="title">Video Search by speech</span>
            <span className="subtitle">{`음성 혹은 텍스트를 업로드해주세요.\n해당 음성 혹은 텍스트의 등장 시점을 알려드려요.`}</span>
          </li>
        </ul>
      </div>
      <div className="bottom-box">
        <div className="bottom-title-box">
          <span className="bottom-title">{titles[stage]}</span>
          <span className="bottom-subtitle">{subtitles[stage]}</span>
        </div>
        <div className="bottom-content-box">
          {stage === Stage.Indexing ? (
            <VideoIndexingLayout items={indexs} url={url} />
          ) : stage === Stage.Search ? (
            <FaceSearchLayout url={url} vid={vid} />
          ) : stage === Stage.Speech ? (
            <SpeechSearchLayout url={url} vid={vid} />
          ) : (
            <></>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 100px;
          padding-bottom: 100px;
        }
        .upper-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 50px;
          white-space: pre-line;
          color: white;
        }
        .player-wrapper {
          width: 650px;
          height: 350px;
          position: relative;
        }
        .menu-list {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }
        .menu-title {
          font-size: 24px;
          font-weight: 700;
        }
        .menu-list li:not(.menu-title) {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          transition: all 0.25s;
          cursor: pointer;
        }
        .title {
          font-size: 16px;
          font-weight: 700;
        }
        .subtitle {
          font-size: 14px;
          font-weight: 300;
        }
        .selected {
          border-left: 3px solid white;
          padding-left: 20px;
        }
        .bottom-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 30px;
        }
        .bottom-title-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          white-space: pre-line;
          color: white;
        }
        .bottom-title {
          font-size: 24px;
          font-weight: 700;
        }
        .bottom-subtitle {
          font-size: 16px;
          font-weight: 300;
        }
        .bottom-content-box {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
