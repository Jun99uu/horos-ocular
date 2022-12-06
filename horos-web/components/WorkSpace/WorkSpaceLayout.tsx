import { useState, useEffect } from "react";
import NoItem from "./NoItem";
import { Video } from "../../interfaces/workspaceInterface";
import VideoItem from "./VideoItem";
import { useRecoilState } from "recoil";
import { recoilNumberState } from "../../states/recoilNumberState";

enum Menu {
  AllVideo = "내 동영상",
  Completed = "분석이 완료된 동영상",
  Waiting = "분석 중인 동영상",
}

interface layoutProps {
  category: Menu;
}

export default function WorkSpaceLayout(props: layoutProps) {
  const { category } = props;
  const [items, setItems] = useState<Array<Video>>([]);
  const [filteredItems, setFilteredItems] = useState<Array<Video>>([]);
  const [vNum, setVNums] = useRecoilState(recoilNumberState);

  const getItems = () => {
    //통신구문으로 받아오기
    const tmp1: Video = {
      id: 0,
      name: "western.mp4",
      url: "https://horosocular.s3.ap-northeast-1.amazonaws.com/bibi.mp4",
      date: "2022-12-05",
      complete: 0,
    };
    const tmp2: Video = {
      id: 1,
      name: "western.mp4",
      url: "https://horosocular.s3.ap-northeast-1.amazonaws.com/bibi.mp4",
      date: "2022-12-05",
      complete: 0,
    };
    const tmp3: Video = {
      id: 2,
      name: "western.mp4",
      url: "https://horosocular.s3.ap-northeast-1.amazonaws.com/bibi.mp4",
      date: "2022-12-05",
      complete: 1,
    };
    const tmp4: Video = {
      id: 3,
      name: "western.mp4",
      url: "https://horusocular.s3.ap-northeast-2.amazonaws.com/email@email.com/video/western.mp4",
      date: "2022-12-05",
      complete: 1,
    };
    const tmp5: Video = {
      id: 4,
      name: "western.mp4",
      url: "https://horusocular.s3.ap-northeast-2.amazonaws.com/email@email.com/video/western.mp4",
      date: "2022-12-05",
      complete: 1,
    };
    const tmpItems = [tmp1, tmp2, tmp3, tmp4, tmp5];
    setItems(tmpItems);
    setVNums(tmpItems.length);
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    switch (category) {
      case Menu.AllVideo:
        setFilteredItems(items);
        break;
      case Menu.Completed:
        setFilteredItems(items.filter((item) => item.complete === 1));
        break;
      case Menu.Waiting:
        setFilteredItems(items.filter((item) => item.complete === 0));
        break;
      default:
        break;
    }
  }, [items, category]);

  return (
    <div className="container">
      {filteredItems.length > 0 ? (
        <div className="video-layout">
          {filteredItems.map((item, index) => (
            <VideoItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <NoItem />
      )}
      <style jsx>{`
        .container {
          width: 100%;
          padding-bottom: 60px;
        }
        .video-layout {
          padding: 0px 50px 50px 50px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 60px;
        }

        @media screen and (max-width: 900px) {
          .video-layout {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (max-width: 550px) {
          .video-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
