import Image from "next/image";
import empty from "../../res/empty.svg";

export default function NoItem() {
  return (
    <div className="container">
      <div className="img-box">
        <Image src={empty} width={283} height={236} alt="empty" />
      </div>
      <span>
        {"업로드된 데이터를 찾지 못했어요.\n먼저 데이터를 업로드해주세요!"}
      </span>
      <button>동영상 업로드</button>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }
        .img-box {
          width: 295px;
          height: 295px;
          border-radius: 100%;
          background: linear-gradient(135deg, #2c2f20, #a7d129);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        span {
          color: white;
          font-weight: 600;
          white-space: pre-line;
        }
        button {
          color: white;
          font-family: "SUIT Variable", sans-serif;
          border: 2px solid white;
          border-radius: 10px;
          background: none;
          font-weight: 800;
          padding: 10px 20px;
          cursor: pointer;
          transition: all 0.25s;
        }
        button:hover {
          background: white;
          background-color: white;
          color: #151515;
        }
      `}</style>
    </div>
  );
}
