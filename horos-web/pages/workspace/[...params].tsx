import Header from "../../components/WorkSpace/Header";
import WorkSpaceLayout from "../../components/WorkSpace/WorkSpaceLayout";
import { useState } from "react";

enum Menu {
  AllVideo = "내 동영상",
  Completed = "분석이 완료된 동영상",
  Waiting = "분석 중인 동영상",
}

export default function WorkSpace() {
  const [category, setCategory] = useState(Menu.AllVideo);

  return (
    <div className="container">
      <Header category={category} setCategory={setCategory} />
      <WorkSpaceLayout />
      <style jsx>{`
        .container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow-y: auto;
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 50px;
          padding: 50px 0px 0px 0px;
        }
      `}</style>
    </div>
  );
}
