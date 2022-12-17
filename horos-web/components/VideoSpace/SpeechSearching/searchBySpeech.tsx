import { Dispatch, SetStateAction } from "react";
import { SpeechInfo, Alternative } from "../../../interfaces/speechInterface";
import axios from "axios";

const tmpItem: SpeechInfo = {
  _id: "id",
  data: {
    items: [
      {
        alternatives: [{ confidence: "0.9894", content: "사랑" }],
        end_time: "5.0",
        start_time: "2",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "말입니다." }],
        end_time: "6",
        start_time: "5",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "대중" }],
        end_time: "7",
        start_time: "6",
        type: "pronunciation",
      },
      {
        alternatives: [{ confidence: "0.9894", content: "없습니다." }],
        end_time: "9",
        start_time: "8",
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
  setLoading: Dispatch<SetStateAction<boolean>>
) => {
  setLoading(true);

  //콜백으로 전문 받아오기 -> 검색 순으로 진행. 검색 함수 search()
  setResult(search(tmpItem.data.items, token));

  setLoading(false); //통신성공시 로딩 끝!
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
