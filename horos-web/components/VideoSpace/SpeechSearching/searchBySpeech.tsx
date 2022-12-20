import { Dispatch, SetStateAction } from "react";
import { SpeechInfo, Alternative } from "../../../interfaces/speechInterface";
import axios from "axios";
import { base_url } from "../../../res/baseurl";
import { dummyData } from "../../../res/dummyStt";

const tmpItem: SpeechInfo = {
  _id: "id",
  data: {
    items: [
      {
        alternatives: [
          { confidence: "0.9894", content: "아무리 고민을 해봐도 난" },
        ],
        end_time: "123",
        start_time: "119",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9742", content: "숨쉬는 법을 잊은듯" }],
        end_time: "99.5",
        start_time: "97",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9951", content: "숨쉬는 법을 잊은듯" }],
        end_time: "45.3",
        start_time: "43",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "숨쉬는 법을 잊은듯" }],
        end_time: "146.3",
        start_time: "144.3",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "내" }],
        end_time: "10",
        start_time: "9",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "품조각을" }],
        end_time: "12",
        start_time: "10",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "도려내" }],
        end_time: "13",
        start_time: "12",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "당신의" }],
        end_time: "15",
        start_time: "13",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "배를" }],
        end_time: "17",
        start_time: "15",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "채워도" }],
        end_time: "19",
        start_time: "17",
        type: "pronunciation",
      },
    ],
  },
};

export const getStt = (
  setResult: Dispatch<SetStateAction<Array<Alternative> | undefined>>,
  token: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  vid: number
) => {
  setLoading(true);

  // axios
  //   .get(`${base_url}/horus/video/stt?vid=${vid}`, {
  //     headers: {
  //       "Content-type": "application/json",
  //       Accept: "application/json",
  //       Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  //     },
  //   })
  //   .then((res) => {
  //     setResult(search(res.data.data.items, token));
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  try {
    setResult(search(tmpItem.data.items, token));
    setLoading(false);
  } catch {
    console.log("Err");
  }

  //콜백으로 전문 받아오기 -> 검색 순으로 진행. 검색 함수 search()
  // setResult(search(tmpItem.data.items, token));

  // setLoading(false); //통신성공시 로딩 끝!
};

const search = (fullSubtitle: Array<Alternative>, token: string) => {
  let resObj: Array<Alternative> = [];
  fullSubtitle.forEach((sub, fIndex) => {
    sub.alternatives.forEach((al, aIndex) => {
      if (al.content === token) {
        resObj.push(fullSubtitle[fIndex]);
      }
    });
  });
  return resObj;
};
