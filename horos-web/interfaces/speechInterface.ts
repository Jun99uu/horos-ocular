export interface SpeechInfo {
  _id: string;
  data: Item;
}

export interface Item {
  items: Array<Alternative>;
}

export interface Alternative {
  alternatives: Array<AlternativeItem>;
  end_time: string; //끝나는 시간
  start_time: string; //시작 시간
  type: string;
}

export interface AlternativeItem {
  confidence: string; //유사도
  content: string; //텍스트
}
