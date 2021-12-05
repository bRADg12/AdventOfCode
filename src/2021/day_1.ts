
export function day_1_1(input: { arr: number[] }) {
  let ctr = 0;
  for (let i = 0; i < input.arr.length - 1; i++) {
    if (input.arr[i+1] > input.arr[i]) {
      ctr++;
    }
  }
  console.log(ctr);
  return ctr;
}

export function day_1_2(input: { arr: number[] }) {
  let ctr = 0;
  let prevSum = 0;
  let tempSum = 0;
  for (let i = 0; i < input.arr.length - 2; i++) {
    tempSum = input.arr[i] + input.arr[i+1] + input.arr[i+2];
    if (tempSum > prevSum) {
      ctr++;
    }
    prevSum = tempSum;
  }
  console.log(ctr)
  return ctr;
}