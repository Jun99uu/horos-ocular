export const calMoment = (moment: number): string => {
  if (moment < 60) {
    return `${moment}초`;
  } else {
    const min = (moment / 60).toFixed(0);
    const sec = moment - 60 * Number(min);
    return `${min}분 ${sec}초`;
  }
};
