import { atom } from "recoil";

export const recoilNumberState = atom<number>({
  key: "videoNum",
  default: 0,
});
