import { GetServerSideProps } from "next";
import VideoSpaceLayout from "../../../components/VideoSpace/VideoSpaceLayout";
import Header from "../../../components/VideoSpace/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { base_url } from "../../../res/baseurl";

interface serversideProps {
  uid: string;
  vid: string;
}

interface Video {
  vname: string;
  url: string;
  complete: number;
}

const tmpVideo:Video = {
  vname:"unnatural",
  url:"https://horosocular.s3.ap-northeast-1.amazonaws.com/unnatural.mp4",
  complete:1
}

export default function VideoSpace(props: serversideProps) {
  const { uid, vid } = props;

  const [obj, setObj] = useState<Video>(tmpVideo);

  // const getInfo = () => {
  //   axios
  //     .get(`${base_url}/horus/video/info?vid=${vid}`, {
  //       headers: {
  //         "Content-type": "application/json",
  //         Accept: "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //       },
  //     })
  //     .then((res) => {
  //       setObj(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getInfo();
  // }, []);

  return (
    <div className="container">
      {obj ? (
        <>
          <Header
            title={obj.vname}
            date={""}
            completed={obj.complete === 0 ? false : true}
            uid={Number(uid)}
          />
          <VideoSpaceLayout url={obj.url} vid={Number(vid)} />
        </>
      ) : (
        <></>
      )}
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
        uid: uid,
        vid: vid,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
