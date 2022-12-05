import { useState, ComponentProps, DOMAttributes, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

type EventHandlers<T> = Omit<
  DOMAttributes<T>,
  "children" | "dangerouslySetInnerHTML"
>;

export type Event<
  TElement extends keyof JSX.IntrinsicElements,
  TEventHandler extends keyof EventHandlers<TElement>
> = ComponentProps<TElement>[TEventHandler];

enum Stage {
  User,
  Youtube,
}

export default function UploadModal() {
  const [file, setFile] = useState<File>();
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [curFile, setCurFile] = useState("");
  const [attachment, setAttachment] = useState("");
  const [stage, setStage] = useState(Stage.User);
  const [vName, setVName] = useState<string>();
  const [vSize, setVSize] = useState<number>();
  const [vCanUpload, setVCanUpload] = useState(false);

  const handleOnChange: Event<"input", "onChange"> = (e) => {
    if (window.FileReader) {
      const {
        currentTarget: { files, value },
      } = e;
      if (files !== null) {
        const theFile = files![0];
        const reader = new FileReader();
        setCurFile(value);
        setVName(theFile.name);
        setVSize(Number((theFile.size / 1024 ** 2).toFixed(2)));
        reader.onloadend = (finishedEvent: any) => {
          const {
            target: { result },
          } = finishedEvent;
          setAttachment(result);
          setFile(theFile);
        };
        reader.readAsDataURL(theFile);
      }
    }
  };

  useEffect(() => {
    if (vSize) {
      vSize > 10 ? setVCanUpload(false) : setVCanUpload(true);
    }
  }, [vSize]);

  useEffect(() => {
    if (stage === Stage.Youtube) {
      setCurFile("");
      setAttachment("");
      setVName("");
      setVSize(0);
      setVCanUpload(false);
    } else {
      setYoutubeUrl("");
    }
  }, [stage]);

  return (
    <div className="container">
      <ul className="type-box">
        <li
          className={stage === Stage.User ? "selected" : "non"}
          onClick={() => setStage(Stage.User)}
        >
          영상 직접 업로드
        </li>
        <li
          className={stage === Stage.Youtube ? "selected" : "non"}
          onClick={() => setStage(Stage.Youtube)}
        >
          Youtube 영상 업로드
        </li>
      </ul>
      <div className="content-box">
        {stage === Stage.User ? (
          <div className="user-video-box">
            <video src={attachment} controls className="user-video" />
            <div className="video-info-box">
              {vName && vSize && vName !== "" && vSize !== 0 ? (
                <>
                  <span>{vName}</span>
                  <span>{vSize}mb</span>
                  <span>
                    {vCanUpload ? (
                      <span className="can-upload">
                        <FontAwesomeIcon icon={faCircleCheck} />
                        업로드가 가능한 동영상입니다.
                      </span>
                    ) : (
                      <span className="cannot-upload">
                        <FontAwesomeIcon icon={faCircleXmark} />
                        업로드가 불가능한 동영상입니다.
                      </span>
                    )}
                  </span>
                </>
              ) : (
                <></>
              )}
              <div className="btn-box">
                <label htmlFor="file" className="vanilla-label">
                  업로드
                </label>
                <input
                  name="file"
                  type="file"
                  id="file"
                  accept="video/*"
                  onChange={handleOnChange}
                  value={curFile}
                />
                {vCanUpload ? (
                  <button className="save-btn">저장</button>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="youtube-box">
            <ReactPlayer url={youtubeUrl} controls />
            <div className="youtube-info-box">
              <label htmlFor="youtube-input" className="youtube-label">
                유튜브 링크 업로드
              </label>
              <input
                id="youtube-input"
                type="text"
                placeholder="유튜브 링크를 입력해주세요."
                value={youtubeUrl}
                onChange={(e) => setYoutubeUrl(e.target.value)}
              />
              <button className="youtube-btn">저장하기</button>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 40px;
          gap: 40px;
        }
        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
          justify-content: center;
        }
        li {
          cursor: pointer;
          padding: 15px 20px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 700;
          transition: all 0.25s;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .selected {
          background-color: #a7d129;
          color: #242424;
          border: 2px solid #a7d129;
        }
        .non {
          color: #242424;
          border: 2px solid #242424;
        }
        .non:hover {
          color: #a7d129;
          border: 2px solid #a7d129;
        }
        .content-box {
          width: 100%;
        }
        .user-video-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-evenly;
        }
        .video-info-box {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 10px;
        }
        .btn-box {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 15px;
        }
        input[type="file"] {
          /* 파일 필드 숨기기 */
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }
        .vanilla-label,
        .save-btn,
        .youtube-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5px 20px;
          border-radius: 5px;
          border: 2px solid #242424;
          background-color: #00ff0000;
          color: #242424;
          font-weight: bold;
          font-size: 1rem;
          box-shadow: 0 5px 18px 0px rgba(50, 50, 93, 0.111),
            0 3px 10px -3px rgba(0, 0, 0, 0.137),
            0 -1px 8px -1px rgba(0, 0, 0, 0.025);
          transition: 0.25s;
          cursor: pointer;
        }
        .vanilla-label:hover,
        .save-btn:hover,
        .youtube-btn:hover {
          background-color: #a7d129;
          color: #242424;
          border: 2px solid #a7d129;
        }
        .user-video {
          width: 50%;
        }
        span {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
        }
        .can-upload {
          color: #29873e;
        }
        .cannot-upload {
          color: #e20202;
        }
        .youtube-box {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 30px;
        }
        .youtube-info-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 5px;
        }
        input[type="text"] {
          width: 400px;
          height: 35px;
          border: none;
          outline: none;
          background-color: #ededed;
          color: #242424;
          border-radius: 10px;
          padding: 0px 10px;
        }
        .youtube-label {
          color: #242424;
          font-size: 14px;
          font-weight: 700;
          text-align: start;
        }
        .youtube-btn {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}
