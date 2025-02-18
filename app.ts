function logMiddleWare<T>(data: T): T {
  console.log(data);
  return data;
}


const res = logMiddleWare<number>(10);

function splitHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
};


splitHalf<number>([1, 2, 1, 1]);