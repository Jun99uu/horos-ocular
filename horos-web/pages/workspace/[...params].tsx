import Header from "../../components/WorkSpace/Header";
import WorkSpaceLayout from "../../components/WorkSpace/WorkSpaceLayout";

export default function WorkSpace() {
  return (
    <div className="container">
      <Header />
      <WorkSpaceLayout />
      <style jsx>{`
        .container {
          width: 100%;
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
