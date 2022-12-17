import { Alternative } from "../../../interfaces/speechInterface";
import { useState } from "react";
import { getStt } from "./searchBySpeech";
import LoadingSpinner from "../../LoadingSpinner";
import ResultBox from "./ResultBox";

interface sttProps {
  url: string;
}

export default function SpeechSearchLayout(props: sttProps) {
  const { url } = props;
  const [token, setToken] = useState("");
  const [result, setResult] = useState<Array<Alternative>>();
  const [loading, setLoading] = useState(false);

  const onSearchButtonHandler = () => {
    getStt(setResult, token, setLoading);
  };

  return (
    <div className="container">
      {loading ? <LoadingSpinner /> : <></>}
      <div className="search-box">
        <input
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="이 곳에 단어를 입력해주세요."
        />
        <button className="search-btn" onClick={() => onSearchButtonHandler()}>
          검색
        </button>
      </div>
      <div className="result-box">
        {result && result.length > 0 ? (
          <ResultBox url={url} token={token} items={result} />
        ) : (
          <></>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-bottom: 100px;
        }
        .search-box {
          width: 70%;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 50px;
        }
        input[type="text"] {
          width: 80%;
          height: 45px;
          padding: 0px 20px;
          background: none;
          border: none;
          border-bottom: 2px solid #dee2e6;
          outline: none;
          color: white;
          font-size: 18px;
        }
        input[type="text"]::placeholder {
          color: #ffffff79;
        }
        .search-btn {
          width: 100px;
          height: 45px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #a7d129;
          color: black;
          font-size: 15px;
          font-weight: 900;
          border-radius: 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
