import ReactPlayer from "react-player";
import { Alternative } from "../../../interfaces/speechInterface";
import { useState, useEffect } from "react";

interface boxProps {
  url: string;
  token: string;
  items: Array<Alternative>;
}

export default function ResultBox(props: boxProps) {
  const { url, token, items } = props;
  const [start, setStart] = useState(items[0].start_time);
  const [end, setEnd] = useState(items[0].end_time);

  console.log(items);

  return (
    <div className="container">
      <div className="token-box">
        <span>{token}의 검색 결과입니다.</span>
      </div>
      <div className="contnet-box">
        <ReactPlayer url={`${url}#t=${start},${end}`} controls width="550px" />
        <div className="lyrics-box"></div>
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
      `}</style>
    </div>
  );
}
