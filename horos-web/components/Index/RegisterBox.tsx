import { Dispatch, SetStateAction, useState } from "react";
import { Stage } from "../../interfaces/indexInterface";
import axios from "axios";

interface registerProps {
  setStage: Dispatch<SetStateAction<Stage>>;
}

export default function RegisterBox(props: registerProps) {
  const { setStage } = props;
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdc, setPwdc] = useState("");
  const [pwde, setPwde] = useState(false);
  const [name, setName] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [use, setUse] = useState(false);

  const passwordCheck = () => {
    if (pwd === pwdc) setPwde(true);
    else setPwde(false);
  };

  const allPassCheck = () => {
    if (
      id !== "" &&
      pwd !== "" &&
      pwdc !== "" &&
      name !== "" &&
      pwde &&
      privacy &&
      use
    ) {
      //회원가입 진행
      axios
        .post(
          "https://4d06-49-142-50-117.ngrok.io/accounts/signup",
          {
            email: id,
            password1: pwd,
            password2: pwdc,
            name: name,
          },
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          alert("회원가입이 완료되었습니다.");
          setStage(Stage.Login);
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      alert("모든 정보를 올바르게 입력해주세요.");
    }
  };

  return (
    <div className="container">
      <ul>
        <li>
          <label htmlFor="id" className="label-bold">
            ID
          </label>
          <input
            type="text"
            id="id"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="pwd" className="label-bold">
            Password
          </label>
          <input
            type="password"
            id="pwd"
            placeholder="비밀번호를 입력해주세요."
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="pwdc" className="label-bold">
            Password Check
          </label>
          <input
            type="password"
            id="pwdc"
            placeholder="비밀번호를 입력해주세요."
            value={pwdc}
            onChange={(e) => setPwdc(e.target.value)}
          />
        </li>
        <li>
          <label htmlFor="name" className="label-bold">
            ID
          </label>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력해주세요."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </li>
      </ul>
      <ul className="privacy-policy">
        <li>
          <input
            type="checkbox"
            id="private-policy"
            checked={privacy}
            onChange={(e) => setPrivacy(e.target.checked)}
          />
          <label htmlFor="private-policy" className="label-light">
            개인정보 처리방침을 확인하였으며, 이에 동의합니다.
          </label>
        </li>
        <li>
          <input
            type="checkbox"
            id="use-policy"
            checked={use}
            onChange={(e) => setUse(e.target.checked)}
          />
          <label htmlFor="use-policy" className="label-light">
            이용약관을 확인하였으며, 이에 동의합니다.
          </label>
        </li>
      </ul>
      <ul className="policy">
        <li>
          <button>
            <span>Sign Up</span>
          </button>
        </li>
        <li>
          <span className="register-link" onClick={() => setStage(Stage.Login)}>
            돌아가기
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
        ul:not(.privacy-policy) {
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
        ul:not(.privacy-policy) li {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 3px;
        }
        .label-bold {
          color: white;
          font-size: 14px;
          font-weight: 700;
        }
        input[type="text"],
        input[type="password"] {
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
        .privacy-policy {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          list-style-type: none;
          padding: 0px;
          margin: 0px;
        }
        .privacy-policy li {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          gap: 5px;
        }
        .privacy-policy li input {
          accent-color: #a7d129;
        }
        .label-light {
          color: white;
          font-size: 14px;
          font-weight: 200;
        }
      `}</style>
    </div>
  );
}
