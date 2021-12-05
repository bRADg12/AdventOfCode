import * as utils from './utils/utils_fns';
export function day_3_1(input: { arr: string[] }) {
  let gamma = "";
  let epsilon = "";
  let ctr;
  for (let j = 0; j < input.arr[0].length; j++) {
    ctr = 0;
    for (let i = 0; i < input.arr.length; i++) {
      if (input.arr[i][j] === "1") {
        ctr++;
      }
    }
    if (ctr > (input.arr.length / 2)) {
      gamma += "1";
      epsilon += "0";
    } else {
      gamma += "0";
      epsilon += "1";
    }
  }
  // console.log(gamma, epsilon);
  // console.log(utils.binaryStringToInt(gamma), utils.binaryStringToInt(epsilon));
  return utils.binaryStringToInt(gamma) * utils.binaryStringToInt(epsilon);
}

export function day_3_2(input: { arr: string[] }) {
  let oxy: string[] = JSON.parse(JSON.stringify(input.arr));
  let oxyPattern = "";
  let co2: string[] = JSON.parse(JSON.stringify(input.arr));
  let co2Pattern = "";
  let ctr = 0;
  for (let j = 0; j < oxy[0].length && oxy.length > 1; j++) {
    ctr = 0;
    for (let i = 0; i < oxy.length; i++) {
      if (oxy[i][j] === "1") {
        ctr++;
      }
    }
    if (ctr >= (oxy.length / 2)) {
      oxyPattern += "1";
      oxy = oxy.filter((e: string) => {
        return utils.matchFirstX(e, oxyPattern, oxyPattern.length-1);
      });
    } else {
      oxyPattern += "0";
      oxy = oxy.filter((e: string) => {
        return utils.matchFirstX(e, oxyPattern, oxyPattern.length-1);
      });
    }
  }
  for (let j = 0; j < co2[0].length && co2.length > 1; j++) {
    ctr = 0;
    for (let i = 0; i < co2.length; i++) {
      if (co2[i][j] === "1") {
        ctr++;
      }
    }
    if (ctr >= (co2.length / 2)) {
      co2Pattern += "0";
      co2 = co2.filter((e: string) => {
        return utils.matchFirstX(e, co2Pattern, co2Pattern.length-1);
      });
    } else {
      co2Pattern += "1";
      co2 = co2.filter((e: string) => {
        return utils.matchFirstX(e, co2Pattern, co2Pattern.length-1);
      });
    }
  }

  console.log(utils.binaryStringToInt(oxy[0]), utils.binaryStringToInt(co2[0]));
  return utils.binaryStringToInt(oxy[0]) * utils.binaryStringToInt(co2[0]);
}