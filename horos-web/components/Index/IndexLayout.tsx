import Objet from "./Objet";
import { useState } from "react";
import { Stage } from "../../interfaces/indexInterface";

export default function IndexLayout() {
  const [stage, setStage] = useState<Stage>();
  return (
    <div className="container">
      <Objet />
      <div className="content-box"></div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}
