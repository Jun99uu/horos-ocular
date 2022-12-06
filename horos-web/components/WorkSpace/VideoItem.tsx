import { Video } from "../../interfaces/workspaceInterface";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

interface itemProps {
  item: Video;
}

export default function VideoItem(props: itemProps) {
  const { item } = props;
  const [completed, setCompleted] = useState(false);
  const router = Router;
  const path = location.pathname;

  useEffect(() => {
    setCompleted(item.complete === 0 ? false : true);
  }, []);

  return (
    <div className="container">
      <ReactPlayer url={item.url} controls width="100%" height="100%" />
      <div
        className="info-box"
        onClick={() => router.push(`${path}/${item.id}`)}
      >
        <div className={completed ? "end" : "batch"}>
          <FontAwesomeIcon icon={completed ? faCircleCheck : faCircleXmark} />
          <span>{completed ? "분석 완료" : "분석 중"}</span>
        </div>
        <span className="title">{item.name}</span>
        <span className="date">{item.date}</span>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          height: 240px;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: rgba(183, 183, 183, 0.02) 0px 1px 3px 0px,
            rgba(226, 226, 226, 0.15) 0px 0px 0px 1px;
        }
        .info-box {
          width: 100%;
          height: 120px;
          position: absolute;
          bottom: 0px;
          left: 0px;
          background: linear-gradient(to top, #000000, #00ff0000);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          padding: 20px;
          gap: 5px;
          cursor: pointer;
        }
        .end,
        .batch {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 700;
          color: black;
          padding: 5px 10px;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
          cursor: default;
        }
        .end {
          background-color: #ffc600;
        }
        .batch {
          background-color: #a7d129;
        }
        .title {
          color: white;
          font-weight: 500;
          font-size: 18px;
        }
        .date {
          font-size: 12px;
          font-weight: 200;
          color: white;
        }
      `}</style>
    </div>
  );
}
