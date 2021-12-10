import * as fs from 'fs';

export function day_10_1() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_10_test.txt", { encoding: 'utf8' });
  let rows = file.split('\r\n');
  const reflections = {
    '(': ')',
    '{': '}',
    '[': ']',
    '<': '>'
  }
  for (let i = 0; i < rows.length; i++) {
    console.log(rows[i]);
    let stack: '(' | '{' | '[' | '<'[] = [];
    for (let j = 0; j < rows[i].length; j++) {
      // check if curr char matches last added on stack
      // no-match -> add current char to stack
      // match -> stack.shift()
      if (stack.length > 0) {
        if (rows[i][j] === reflections[stack[0]]) {

        }
      }
      stack.push(rows[i][j]);
    }
  }
}

export function day_10_2() {

}