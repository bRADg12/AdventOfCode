export function binaryStringToInt(str: string): number {
  let num = 0;
  let ctr = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    num += parseInt(str[i]) * (2 ** ctr);
    ctr++;
  }
  return num;
}

export function matchFirstX(str1: string, str2: string, x: number): boolean {
  let flag = true;
  for (let i = 0; i <= x; i++) {
    if (str1[i] !== str2[i]) {
      flag = false;
    }
  }
  return flag;
}