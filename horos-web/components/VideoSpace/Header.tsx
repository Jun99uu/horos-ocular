import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Router from "next/router";

interface headerProps {
  title: string;
  date: string;
  completed: boolean;
  uid: number;
}

export default function Header(props: headerProps) {
  const { title, date, completed, uid } = props;
  const router = Router;

  return (
    <ul className="container">
      <li>
        <div className="title-box">
          <span className="title">{title}</span>
          <div className={completed ? "end" : "batch"}>
            <FontAwesomeIcon icon={completed ? faCircleCheck : faCircleXmark} />
            <span>{completed ? "분석 완료" : "분석 중"}</span>
          </div>
        </div>
        <span className="subtitle">{date}</span>
      </li>
      <li>
        <span className="link" onClick={() => router.push(`/workspace/${uid}`)}>
          <span className="icon">
            <FontAwesomeIcon icon={faPlay} />
          </span>
          내 워크스페이스로 돌아가기
        </span>
      </li>
      <style jsx>{`
        ul {
          width: 92%;
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 10px;
        }
        li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
          transition: all 0.25s;
        }
        .title-box {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          gap: 10px;
        }
        .title {
          font-size: 24px;
          font-weight: 900;
          color: white;
        }
        .subtitle {
          font-size: 18px;
          font-weight: 700;
          color: white;
        }
        .icon {
          font-size: 16px;
          transform: rotate(60deg);
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
        .link {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 5px;
          color: white;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>
    </ul>
  );
}
