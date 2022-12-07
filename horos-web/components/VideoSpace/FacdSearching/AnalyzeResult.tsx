import ReactPlayer from "react-player";
import { Index } from "../../../interfaces/videoIndexInterface";
import Image from "next/image";
import { calMoment } from "../../calMoment";
import { useState, useEffect } from "react";

interface analyzeProps {
  url: string;
  index: Index | undefined;
}

export default function AnalyzeResult(props: analyzeProps) {
  const { url, index } = props;
  const [timeStamp, setTimeStamp] = useState(0); //타임스탬프 인덱스
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (index) {
      setStart(index.continuous_time[timeStamp].start);
      setEnd(index.continuous_time[timeStamp].end);
    }
  }, [timeStamp]);

  useEffect(() => {
    setTimeStamp(0);
  }, [index]);

  return (
    <div className="container">
      <div className="picker">
        {index ? (
          index.continuous_time.map((time, ind) => (
            <div className="item">
              <div
                className={`face-wrapper ${
                  ind === timeStamp ? "selected" : ""
                }`}
                key={`${index.cluster}-${ind}`}
                onClick={() => setTimeStamp(ind)}
              >
                <Image
                  src={index.face}
                  layout="fill"
                  objectFit="cover"
                  alt={`${index.cluster}`}
                />
              </div>
              <span className={`timestamp ${ind === timeStamp ? "bold" : ""}`}>
                {calMoment(time.start)} - {calMoment(time.end)}
              </span>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <ReactPlayer url={`${url}#t=${start},${end}`} controls width="550px" />
      <style jsx>{`
        .container {
          height: 100%;
          display: flex;
          flex-direction: row;
          gap: 20px;
          align-items: center;
          justify-content: center;
        }
        .picker {
          width: 250px;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 10px;
          overflow-y: scroll;
          overflow-x: auto;
          padding-right: 10px;
        }
        .picker::-webkit-scrollbar {
          width: 5px;
          border-radius: 500px;
        }
        .picker::-webkit-scrollbar-thumb {
          background-color: #ffffff83;
        }
        .picker::-webkit-scrollbar-track {
          background-color: #00ff0000;
        }
        .item {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
        }
        .face-wrapper {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 100%;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          transition: all 0.25s;
        }
        .face-wrapper:hover {
          transform: scale(1.02);
        }
        .selected {
          border: 3px solid #ffc600;
        }
        .timestamp {
          color: white;
          font-weight: 200;
          font-size: 12px;
          transition: all 0.25s;
        }
        .bold {
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
