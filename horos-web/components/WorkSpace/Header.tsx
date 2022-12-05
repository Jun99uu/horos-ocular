import { SetStateAction, useState, Dispatch } from "react";
import Image from "next/image";
import icon from "../../res/file-icon.svg";
import hamburger from "../../res/hamburger.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../BasicModal";
import UploadModal from "./UploadModal";

enum Menu {
  AllVideo = "내 동영상",
  Completed = "분석이 완료된 동영상",
  Waiting = "분석 중인 동영상",
}

interface headerProps {
  category: Menu;
  setCategory: Dispatch<SetStateAction<Menu>>;
}

export default function Header(props: headerProps) {
  const { category, setCategory } = props;
  const [nums, setNums] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ul className="container">
      <li>
        <span className="title">내 워크스페이스</span>
        <div className="subtitle-box">
          <span className="subtitle">
            {category} {nums}개
          </span>
          <div className="icon-box" onClick={() => setModalOpen(true)}>
            <Image src={icon} width={20} height={20} alt="icon" />
          </div>
        </div>
      </li>
      <li>
        <div
          className="hamburger-box"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <Image src={hamburger} width={20} height={15.7} alt="hamburger" />
        </div>
      </li>
      <div className="menu-box">
        <span className="menu-play-btn">
          <FontAwesomeIcon
            icon={faPlay}
            onClick={() => setMenuOpen((prev) => !prev)}
          />
        </span>
        <span className="menu-title">{`Horos Ocular\n워크스페이스`}</span>
        <ul className="menu-list">
          <li
            className={category === Menu.AllVideo ? "selected" : "non"}
            onClick={() => setCategory(Menu.AllVideo)}
          >
            <span className="menu-dot">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <span>내 동영상</span>
          </li>
          <li
            className={category === Menu.Completed ? "selected" : "non"}
            onClick={() => setCategory(Menu.Completed)}
          >
            <span className="menu-dot">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <span>분석이 완료된 동영상</span>
          </li>
          <li
            className={category === Menu.Waiting ? "selected" : "non"}
            onClick={() => setCategory(Menu.Waiting)}
          >
            <span className="menu-dot">
              <FontAwesomeIcon icon={faPlay} />
            </span>
            <span>분석 중인 동영상</span>
          </li>
        </ul>
      </div>
      <BasicModal
        open={modalOpen}
        close={() => setModalOpen(false)}
        header={"동영상 업로드"}
      >
        <UploadModal />
      </BasicModal>
      <style jsx>{`
        ul:not(.menu-list) {
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
          transition: all 0.25s;
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
        .menu-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 10px;
          padding: 20px 30px;
          background-color: white;
          border-radius: 30px 0px 0px 30px;
          position: absolute;
          top: 20px;
          right: ${menuOpen ? "0px" : "-500px"};
          transition: all 0.5s;
          white-space: pre-line;
        }
        .menu-play-btn {
          cursor: pointer;
        }
        .menu-title {
          font-size: 20px;
          font-weight: 900;
          color: #242424;
        }
        .menu-list {
          list-style-type: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          margin-top: 10px;
        }

        .menu-list li {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          cursor: pointer;
        }
        .menu-dot {
          transform: rotate(30deg);
          font-size: 14px;
          margin-top: 7px;
          color: #ffc600;
        }

        .non .menu-dot {
          color: #ffc600;
        }

        .selected .menu-dot {
          color: #a7d129;
        }

        .selected span {
          font-weight: 600;
        }
      `}</style>
    </ul>
  );
}
