export const calMoment = (moment: number): string => {
  if (moment < 60) {
    return `${moment}초`;
  } else {
    const min = moment / 60;
    const sec = moment - 60 * min;
    return `${min}분 ${sec}초`;
  }
};
