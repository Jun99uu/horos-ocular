import Objet from "./Objet";
import { useState } from "react";
import { Stage } from "../../interfaces/indexInterface";
import TitleBox from "./TitleBox";
import LoginBox from "./LoginBox";
import RegisterBox from "./RegisterBox";

export default function IndexLayout() {
  const [stage, setStage] = useState<Stage>(Stage.Login);
  return (
    <div className="container">
      <Objet />
      <div className="content-layout">
        <TitleBox />
        {stage === Stage.Login ? (
          <LoginBox setStage={setStage} />
        ) : stage === Stage.Register ? (
          <RegisterBox />
        ) : (
          <></>
        )}
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          position: relative;
        }
        .content-layout {
          width: 60vw;
          height: 100vh;
          position: absolute;
          top: 0px;
          right: 0px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 20px;
          margin-left: 30vw;
        }
      `}</style>
    </div>
  );
}
