import Header from "../../components/WorkSpace/Header";
import WorkSpaceLayout from "../../components/WorkSpace/WorkSpaceLayout";
import { useState, useEffect } from "react";
import axios from "axios";
import NoLogined from "../../components/WorkSpace/NoLogined";
import { base_url } from "../../res/baseurl";

enum Menu {
  AllVideo = "내 동영상",
  Completed = "분석이 완료된 동영상",
  Waiting = "분석 중인 동영상",
}

export default function WorkSpace() {
  const [category, setCategory] = useState(Menu.AllVideo);
  const [jwt, setJwt] = useState("");
  const [isLogined, setIsLogined] = useState(false);
  const [name, setName] = useState("");

  const getJwt = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setJwt(jwt);
    }
  };

  const getName = () => {
    axios
      .get(`${base_url}/accounts/info`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((res) => {
        setName(res.data.user_name);
        setIsLogined(true);
      })
      .catch((error) => {
        console.log(error);
        alert("잘못된 접근입니다.");
      });
  };

  useEffect(() => {
    getJwt();
  }, []);

  useEffect(() => {
    if (jwt !== "") getName();
  }, [jwt]);

  return (
    <div className="container">
      {!isLogined ? (
        <>
          <Header
            category={category}
            setCategory={setCategory}
            name={`임시아이디`}
          />
          <WorkSpaceLayout category={category} />
        </>
      ) : (
        <>
          <NoLogined />
        </>
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
