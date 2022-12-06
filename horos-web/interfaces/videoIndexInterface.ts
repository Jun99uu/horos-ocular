export interface Time {
  end: number;
  start: number;
}

export interface Index {
  cluster: number;
  continuous_time: Array<Time>;
  face: string;
}
