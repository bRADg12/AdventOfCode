import * as fs from 'fs';
import * as utils from './utils/utils_fns';

export function day_10_1() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_10.txt", { encoding: 'utf8' });
  let rows = file.split('\r\n');
  const illegalChars = [];
  const reflections = {
    '(': ')',
    '{': '}',
    '[': ']',
    '<': '>'
  };
  const score = {
    ')': 3,
    '}': 1197,
    ']': 57,
    '>': 25137
  };
  for (let i = 0; i < rows.length; i++) {
    console.log(rows[i]);
    let stack: ('(' | '{' | '[' | '<')[] = [];
    let illegalChar = '';
    for (let j = 0; j < rows[i].length; j++) {
      // check if curr char matches last added on stack
      // no-match -> add current char to stack
      // match -> stack.shift()
      if (!illegalChar) {
        if (stack.length > 0 && rows[i][j] === reflections[stack[0]]) {
          stack.shift();
        } else {
          switch (rows[i][j]) {
            case ')':
            case '}':
            case ']':
            case '>':
              // corrupted line
              console.log('corrupted expected: ', reflections[stack[0]], ' found: ', rows[i][j]);
              illegalChar = rows[i][j];
              break;
            default:
              stack.unshift(rows[i][j]);
              break;
          }
        }
      } else {
        stack.unshift(rows[i][j]);
      }
    }
    console.log(rows[i], illegalChar);
    illegalChars.push(score[illegalChar] || 0);
  }
  return utils.sum(illegalChars);
}
export function day_10_2() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_10.txt", { encoding: 'utf8' });
  let rows = file.split('\r\n');
  const scores = [];
  const reflections = {
    '(': ')',
    '{': '}',
    '[': ']',
    '<': '>'
  };
  const score = {
    ')': 1,
    '}': 3,
    ']': 2,
    '>': 4
  };
  for (let i = 0; i < rows.length; i++) {
    console.log(rows[i]);
    let stack: ('(' | '{' | '[' | '<')[] = [];
    let illegalChar = '';
    for (let j = 0; j < rows[i].length; j++) {
      // check if curr char matches last added on stack
      // no-match -> add current char to stack
      // match -> stack.shift()
      if (!illegalChar) {
        if (stack.length > 0 && rows[i][j] === reflections[stack[0]]) {
          stack.shift();
        } else {
          switch (rows[i][j]) {
            case ')':
            case '}':
            case ']':
            case '>':
              // corrupted line
              console.log('corrupted expected: ', reflections[stack[0]], ' found: ', rows[i][j]);
              illegalChar = rows[i][j];
              break;
            default:
              stack.unshift(rows[i][j]);
              break;
          }
        }
      } else {
        stack.unshift(rows[i][j]);
      }
    }
    if (!illegalChar) {
      let calc = 0;
      for (let j = 0; j < stack.length; j++) {
        calc *= 5;
        calc += score[reflections[stack[j]]];
      }
      scores.push(calc);
    }
  }
  return scores.sort((a, b) => { 
    return a - b;
  })[Math.floor(scores.length / 2)];
}