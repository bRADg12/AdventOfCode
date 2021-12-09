import * as fs from 'fs';

export function day_8_1() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_8.txt", { encoding: 'utf8' });
  let arr = file.split('\r\n');
  let outputs = arr.map(line => {
    return line.split(' | ')[1];
  })
  let ctr = 0;
  for (let i = 0; i < outputs.length; i++) {
    let currOut = outputs[i].split(' ');
    for (let j = 0; j < currOut.length; j++) {
      switch (currOut[j].length) {
        case 2:
          ctr++;
          break;
        case 3:
          ctr++;
          break;
        case 4:
          ctr++;
          break;
        case 7:
          ctr++;
          break;
        default:
          break;
      }
    }
  }
  return ctr;
}

export function day_8_2() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_8.txt", { encoding: 'utf8' });
  let arr = file.split('\r\n');
  const allLetters = 'abcdefg';
  let outputs = arr.map(line => {
    return line.split(' | ')[1];
  });
  let inputs = arr.map(line => {
    return line.split(' | ')[0];
  });
  let sum = 0;
  for (let i = 0; i < outputs.length; i++) {
    let currIn = inputs[i].split(' ').sort((a, b) => {
      return a.length - b.length;
    });
    let currOut = outputs[i].split(' ');
    let mapping = {
      a: [''],
      b: [''],
      c: [''],
      d: [''],
      e: [''],
      f: [''],
      g: ['']
    };
    for (let j = 0; j < currIn.length; j++) {
      switch (currIn[j].length) {
        case 2:
          mapping.c = currIn[j].split('');
          mapping.f = currIn[j].split('');
          break;
        case 3:
          mapping.a = currIn[j].split('').filter(ele => {
            return !mapping.c.includes(ele);
          });
          break;
        case 4:
          mapping.b = mapping.d = currIn[j].split('').filter(ele => {
            return !mapping.c.includes(ele);
          });
          break;
        case 6:
          // case 6 or 9 or 0
          if (mapping.c.every(e => { return currIn[j].split('').includes(e) }) && mapping.f.every(e => { return currIn[j].split('').includes(e) })) {
            if (mapping.b.every(e => { return currIn[j].split('').includes(e) }) && mapping.d.every(e => { return currIn[j].split('').includes(e) })) {
              // case 9
              mapping.e = allLetters.split('').filter(e => {
              return !currIn[j].split('').includes(e);
            });
            } else {
              // case 0
              mapping.d = allLetters.split('').filter(e => {
                return !currIn[j].split('').includes(e);
              });
              mapping.b = mapping.b.filter(e => {
                return e  !== mapping.d[0];
              });
            }
            
          } else {
            // case 6
            mapping.c = allLetters.split('').filter(e => {
              return !currIn[j].split('').includes(e);
            });
            mapping.f = mapping.f.filter(e => {
              return e  !== mapping.c[0];
            });
          }
          break;
        default:
          break;
      }
      mapping.g = allLetters.split('').filter(e => {
        return !mapping.a.includes(e) &&
        !mapping.b.includes(e) &&
        !mapping.c.includes(e) &&
        !mapping.d.includes(e) &&
        !mapping.e.includes(e) &&
        !mapping.f.includes(e);
      });
    }
    console.log(mapping);
    let currNum = '';
    // apply mapping to output
    for (let j = 0; j < currOut.length; j++) {
      let mappedOut = currOut[j].split('').map(e => {
        return findElementInMapping(e, mapping);
      });
      if ('abcefg'.split('').every(e => { return mappedOut.includes(e) }) && 'abcefg'.length === mappedOut.length) {
        // case 0
        currNum += '0';
      } else if ('cf'.split('').every(e => { return mappedOut.includes(e) }) && 'cf'.length === mappedOut.length) {
        // case 1
        currNum += '1';
      } else if ('acdeg'.split('').every(e => { return mappedOut.includes(e) }) && 'acdeg'.length === mappedOut.length) {
        // case 2
        currNum += '2';
      } else if ('acdfg'.split('').every(e => { return mappedOut.includes(e) }) && 'acdfg'.length === mappedOut.length) {
        // case 3
        currNum += '3';
      } else if ('bcdf'.split('').every(e => { return mappedOut.includes(e) }) && 'bcdf'.length === mappedOut.length) {
        // case 4
        currNum += '4';
      } else if ('abdfg'.split('').every(e => { return mappedOut.includes(e) }) && 'abdfg'.length === mappedOut.length) {
        // case 5
        currNum += '5';
      } else if ('abdefg'.split('').every(e => { return mappedOut.includes(e) }) && 'abdefg'.length === mappedOut.length) {
        // case 6
        currNum += '6';
      } else if ('acf'.split('').every(e => { return mappedOut.includes(e) }) && 'acf'.length === mappedOut.length) {
        // case 7
        currNum += '7';
      } else if ('abcdefg'.split('').every(e => { return mappedOut.includes(e) }) && 'abcdefg'.length === mappedOut.length) {
        // case 8
        currNum += '8';
      } else if ('abcdfg'.split('').every(e => { return mappedOut.includes(e) }) && 'abcdfg'.length === mappedOut.length) {
        // case 9
        currNum += '9';
      }
    }
    sum += parseInt(currNum);
  }
  return sum;
}

function findElementInMapping(element: string, mapping: { a: string[], b: string[], c: string[], d: string[], e: string[], f: string[], g: string[]}): string {
  if (mapping.a[0] === element) {
    return 'a';
  }
  if (mapping.b[0] === element) {
    return 'b';
  }
  if (mapping.c[0] === element) {
    return 'c';
  }
  if (mapping.d[0] === element) {
    return 'd';
  }
  if (mapping.e[0] === element) {
    return 'e';
  }
  if (mapping.f[0] === element) {
    return 'f';
  }
  if (mapping.g[0] === element) {
    return 'g';
  } else return "";
}