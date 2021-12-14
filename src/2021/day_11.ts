import * as fs from 'fs';
import * as utils from './utils/utils_fns';

class Point {
  public x: number;
  public y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export function day_11_1() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_11.txt", { encoding: 'utf8' });
  const octos = file.split('\r\n').map(row => { return row.split('').map(oct => { return parseInt(oct); }) });
  let flashes = 0;
  const steps = 100;
  for (let step = 0; step < steps; step++) {
    let flashed: Point[] = [];
    for (let i = 0; i < octos.length; i++) {
      for (let j = 0; j < octos[i].length; j++) {
        octos[i][j]++;
      }
    }
    let moreFlashes = true;
    while (moreFlashes) {
      moreFlashes = false;
      for (let i = 0; i < octos.length; i++) {
        for (let j = 0; j < octos[i].length; j++) {
          if (octos[i][j] > 9 && !flashed.some(oct => { return oct.x === i && oct.y === j; })) {
            flashed.push(new Point(i, j))
            moreFlashes = true;
            if (i === 0 && j === 1) {
              console.log('here');
            }
            if (i > 0) {
              //top
              octos[i-1][j]++;
              if (j > 0) {
                //top left
                octos[i-1][j-1]++;
              }
              if (j < octos[i].length - 1) {
                //top right
                octos[i-1][j+1]++;
              }
            }
            if (j > 0) {
              //left
              octos[i][j-1]++;
            }
            if (j < octos[i].length - 1) {
              //right
              octos[i][j+1]++;
            }
            if (i < octos.length - 1) {
              //bottom
              octos[i+1][j]++;
              if (j > 0) {
                //bottom left
                octos[i+1][j-1]++;
              }
              if (j < octos[i].length - 1) {
                //bottom right
                octos[i+1][j+1]++;
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < octos.length; i++) {
      for (let j = 0; j < octos[i].length; j++) {
        if (octos[i][j] > 9) {
          flashes++;
          octos[i][j] = 0;
        }
      }
    }
  }
  return flashes;
}

export function day_11_2() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_11.txt", { encoding: 'utf8' });
  const octos = file.split('\r\n').map(row => { return row.split('').map(oct => { return parseInt(oct); }) });
  let flashes = 0;
  const steps = 1000;
  for (let step = 0; step < steps; step++) {
    let flashed: Point[] = [];
    for (let i = 0; i < octos.length; i++) {
      for (let j = 0; j < octos[i].length; j++) {
        octos[i][j]++;
      }
    }
    let moreFlashes = true;
    while (moreFlashes) {
      moreFlashes = false;
      for (let i = 0; i < octos.length; i++) {
        for (let j = 0; j < octos[i].length; j++) {
          if (octos[i][j] > 9 && !flashed.some(oct => { return oct.x === i && oct.y === j; })) {
            flashed.push(new Point(i, j))
            moreFlashes = true;
            if (i === 0 && j === 1) {
              console.log('here');
            }
            if (i > 0) {
              //top
              octos[i-1][j]++;
              if (j > 0) {
                //top left
                octos[i-1][j-1]++;
              }
              if (j < octos[i].length - 1) {
                //top right
                octos[i-1][j+1]++;
              }
            }
            if (j > 0) {
              //left
              octos[i][j-1]++;
            }
            if (j < octos[i].length - 1) {
              //right
              octos[i][j+1]++;
            }
            if (i < octos.length - 1) {
              //bottom
              octos[i+1][j]++;
              if (j > 0) {
                //bottom left
                octos[i+1][j-1]++;
              }
              if (j < octos[i].length - 1) {
                //bottom right
                octos[i+1][j+1]++;
              }
            }
          }
        }
      }
    }
    for (let i = 0; i < octos.length; i++) {
      for (let j = 0; j < octos[i].length; j++) {
        if (octos[i][j] > 9) {
          flashes++;
          octos[i][j] = 0;
        }
      }
    }
    if (flashed.length === 100) {
      return step + 1;
    }
  }
  return 0;
}