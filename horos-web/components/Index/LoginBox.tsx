import { SetStateAction, Dispatch, useState } from "react";
import { Stage } from "../../interfaces/indexInterface";
import Router from "next/router";
import axios from "axios";

interface loginProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}

export default function LoginBox(props: loginProps) {
  const { setStage } = props;
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [uid, setUid] = useState(0); //고유 uid
  const router = Router;

  const moveToWorkspace = () => {
    router.push(`/workspace/${uid}`);
  };

  const loginHandler = () => {
    axios
      .post(
        "https://4d06-49-142-50-117.ngrok.io/accounts/login",
        {
          email: id,
          password1: pwd,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("jwt", res.data.access_token);
        moveToWorkspace();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <ul>
        <li>
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="pwd">Password</label>
          <input
            type="password"
            id="pwd"
            placeholder="비밀번호를 입력해주세요."
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </li>
      </ul>
      <ul className="policy">
        <li>
          <span>개인정보처리방침</span>
        </li>
        <li>
          <span>이용약관</span>
        </li>
      </ul>
      <ul>
        <li>
          <button onClick={loginHandler}>
            <span>Login</span>
          </button>
        </li>
        <li>
          <span
            className="register-link"
            onClick={() => setStage(Stage.Register)}
          >
            회원 가입
          </span>
        </li>
      </ul>
      <style jsx>{`
        .container {
          width: 40%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 15px;
        }
        ul {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          list-style-type: none;
          margin: 0px;
          padding: 0px;
          gap: 5px;
        }
        .policy {
          color: white;
          font-size: 14px;
          font-weight: 200;
        }
        .policy li span {
          cursor: pointer;
        }
        li {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
        }
        label {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }
        input {
          border: none;
          background-color: #ffffffa5;
          width: 100%;
          height: 35px;
          border-radius: 5px;
          padding: 0px 10px;
          font-family: "SUIT Variable", sans-serif;
          font-size: 16px;
          outline: none;
        }
        button {
          width: 100%;
          height: 40px;
          border-radius: 5px;
          background: linear-gradient(135deg, #a7d129ad, #ffc800bb);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s;
        }
        button:hover {
          transform: scale(1.02);
        }
        button:active {
          transform: scale(0.98);
        }
        button span {
          font-family: "SUIT Variable", sans-serif;
          color: white;
          font-size: 17px;
          font-weight: 800;
        }
        .register-link {
          width: 100%;
          color: white;
          font-size: 15px;
          font-weight: 400;
          text-align: center;
          opacity: 0.7;
          cursor: pointer;
          transition: all 0.25s;
        }
        .register-link:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
