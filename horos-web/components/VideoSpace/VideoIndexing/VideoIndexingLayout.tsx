import { Index } from "../../../interfaces/videoIndexInterface";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

interface bubbleProps {
  url: string;
  items: Array<Index>;
}

export default function VideoIndexingLayout(props: bubbleProps) {
  const { url, items } = props;
  const [ind, setInd] = useState<number>(); //군집 인덱스
  const [timeStamp, setTimeStamp] = useState(0); //타임스탬프 인덱스
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const calMoment = (moment: number) => {
    if (moment < 60) {
      return `${moment}초`;
    } else {
      const min = moment / 60;
      const sec = moment - 60 * min;
      return `${min}분 ${sec}초`;
    }
  };

  useEffect(() => {
    if (ind) {
      setStart(items[ind].continuous_time[timeStamp].start);
      setEnd(items[ind].continuous_time[timeStamp].end);
    }
  }, [timeStamp]);

  useEffect(() => {
    setTimeStamp(0);
    if (ind) {
      setStart(items[ind].continuous_time[0].start);
      setEnd(items[ind].continuous_time[0].end);
    }
  }, [ind]);

  return (
    <div className="container">
      <div className="upper-box">
        {items.map((item, index) => (
          <div className="item-inner" key={item.cluster}>
            <div
              className={`img-box ${ind === index ? "selected" : "non"}`}
              onClick={() => setInd(index)}
            >
              <Image
                src={item.face}
                alt={`${item.cluster}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bubble-layout">
        {typeof ind !== "undefined" ? (
          <>
            <ReactPlayer
              url={`${url}#t=${start},${end}`}
              controls
              width="40%"
            />
            <ul className="bubble-box">
              {items[ind].continuous_time.map((time, index) => (
                <li
                  key={`${index}-${time.start}-${time.end}`}
                  className={`bubble ${timeStamp === index ? "cur-play" : ""}`}
                  onClick={() => setTimeStamp(index)}
                >
                  {timeStamp === index ? (
                    <span className="music-icon">
                      <FontAwesomeIcon icon={faMusic} />
                    </span>
                  ) : (
                    <></>
                  )}
                  <span className="timestamp">
                    {calMoment(time.start)} - {calMoment(time.end)}
                  </span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <span className="no-index">인덱스를 선택해주세요!</span>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: 50px;
        }
        .upper-box {
          width: 100%;
          display: flex;
          flex-wrap: nowrap;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          justify-content: flex-start;
          overflow-x: scroll;
          overflow-y: auto;
          padding: 30px 50px;
          scroll-behavior: smooth;
        }
        .upper-box::-webkit-scrollbar {
          height: 2px;
          border-radius: 500px;
        }
        .upper-box::-webkit-scrollbar-thumb {
          background-color: #ffffff83;
        }
        .upper-box::-webkit-scrollbar-track {
          background-color: #00ff0000;
        }
        .img-box {
          height: 180px;
          width: 180px;
          position: relative;
          border-radius: 100%;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.25s;
        }
        .selected {
          border: 3px solid white;
          transform: scale(1.02);
        }
        .img-box:hover {
          transform: scale(1.02);
        }
        .bubble-layout {
          width: 90%;
          margin: 20px 0px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .no-index {
          font-size: 24px;
          font-weight: 700;
          color: white;
          text-align: center;
        }
        .bubble-box {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          color: white;
          width: 30%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
        }
        .bubble {
          width: 100%;
          height: 45px;
          border: 1px solid white;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.15s;
        }
        .bubble:hover {
          background-color: white;
          color: #242424;
        }
        .cur-play {
          background-color: white;
          color: #242424;
          font-weight: 800;
        }
        .music-icon {
          width: 24px;
          height: 24px;
          border-radius: 100%;
          background-color: #a7d129;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }
        .timestamp {
          transition: all 0.15s;
        }
      `}</style>
    </div>
  );
}
