import { GetServerSideProps } from "next";
import VideoSpaceLayout from "../../../components/VideoSpace/VideoSpaceLayout";
import Header from "../../../components/VideoSpace/Header";
import { Video } from "./../../../interfaces/workspaceInterface";

interface serverSideProps {
  params: number;
  title: string;
  date: string;
  completed: boolean;
  url: string;
}

export default function VideoSpace(props: serverSideProps) {
  const { params, title, date, completed, url } = props;
  return (
    <div className="container">
      <Header title={title} date={date} completed={completed} uid={params} />
      <VideoSpaceLayout url={url} />
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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { uid, vid } = query;
    return {
      props: {
        params: Number(uid),
        title: "bibi.mp4",
        date: "2022.12.06",
        completed: true,
        url: "https://horosocular.s3.ap-northeast-1.amazonaws.com/bibi.mp4",
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
