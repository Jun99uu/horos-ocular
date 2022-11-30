import { useState } from "react";
import Image from "next/image";
import icon from "../../res/file-icon.svg";
import hamburger from "../../res/hamburger.svg";

export default function Header() {
  const [nums, setNums] = useState(0);

  return (
    <ul className="container">
      <li>
        <span className="title">내 워크스페이스</span>
        <div className="subtitle-box">
          <span className="subtitle">내 동영상 {nums}개</span>
          <div className="icon-box">
            <Image src={icon} width={20} height={20} alt="icon" />
          </div>
        </div>
      </li>
      <li>
        <div className="hamburger-box">
          <Image src={hamburger} width={20} height={15.7} alt="hamburger" />
        </div>
      </li>
      <style jsx>{`
        ul {
          width: 92%;
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        }
        li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        .title {
          font-size: 24px;
          font-weight: 900;
          color: white;
        }
        .subtitle-box {
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
          justify-content: flex-start;
        }
        .subtitle {
          font-size: 18px;
          font-weight: 700;
          color: white;
        }
        .icon-box {
          width: 27.5px;
          height: 25px;
          border-radius: 5px;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
          opacity: 0.7;
        }
        .hamburger-box {
          cursor: pointer;
        }
        .icon-box:hover {
          opacity: 1;
        }
      `}</style>
    </ul>
  );
}
