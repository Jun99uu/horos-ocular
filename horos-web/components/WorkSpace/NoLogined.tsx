import Image from "next/image";
import empty from "../../res/empty.svg";
import Router from "next/router";

export default function NoLogined() {
  const router = Router;

  return (
    <div className="container">
      <div className="img-box">
        <Image src={empty} width={283} height={236} alt="empty" />
      </div>
      <span>{"잘못된 접근입니다.\n먼저 로그인을 해주세요."}</span>
      <button onClick={() => router.push("/")}>메인 화면으로</button>
      <style jsx>{`
        .container {
          width: 100%;
          height: 100%;
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
          text-align: center;
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
