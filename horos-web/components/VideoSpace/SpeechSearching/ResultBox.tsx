import ReactPlayer from "react-player";
import { Alternative } from "../../../interfaces/speechInterface";
import { useState, useEffect } from "react";

interface boxProps {
  url: string;
  items: Array<Alternative>;
}

export default function ResultBox(props: boxProps) {
  const { url, items } = props;
  const [start, setStart] = useState(items[0].start_time);
  const [end, setEnd] = useState(items[0].end_time);
  const [curInd, setCurInd] = useState(0);

  const setCurIndex = (start_time: string, end_time: string, ind: number) => {
    setStart(start_time);
    setEnd(end_time);
    setCurInd(ind);
  };

  return (
    <div className="container">
      <div className="token-box">
        <span>{items[0].alternatives[0].content}의 검색 결과입니다.</span>
      </div>
      <div className="content-box">
        <ReactPlayer url={`${url}#t=${start},${end}`} controls width="550px" />
        <div className="lyrics-box">
          {items.map((item, index) => (
            <div
              className={`index-btn ${
                curInd === index ? "selected" : "non-selected"
              }`}
              key={item.start_time}
              onClick={() => setCurIndex(item.start_time, item.end_time, index)}
            >
              <span>
                {item.start_time} - {item.end_time}초
              </span>
              <span>|</span>
              <span>{Number(item.alternatives[0].confidence) * 100}%</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          margin: 100px 0px;
          gap: 50px;
        }
        .content-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 50px;
        }
        .index-btn {
          width: 200px;
          height: 50px;
          border: 2px solid white;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          font-size: 14px;
          transition: all 0.25s;
        }
        .non-selected:hover {
          background-color: white;
          color: #242424;
        }
        .selected {
          font-weight: 900;
          color: #242424;
          background-color: white;
        }
        .lyrics-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
      `}</style>
    </div>
  );
}
