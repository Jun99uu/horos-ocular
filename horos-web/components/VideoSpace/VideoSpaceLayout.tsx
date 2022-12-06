import ReactPlayer from "react-player";
import { useState } from "react";

interface videoProps {
  url: string;
}

enum Stage {
  Indexing,
  Search,
  Speech,
}

export default function VideoSpaceLayout(props: videoProps) {
  const { url } = props;
  const [stage, setStage] = useState<Stage>(Stage.Indexing);

  return (
    <div className="container">
      <div className="upper-box">
        <div className="player-wrapper">
          <ReactPlayer url={url} controls width="100%" height="100%" />
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
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
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
      `}</style>
    </div>
  );
}
