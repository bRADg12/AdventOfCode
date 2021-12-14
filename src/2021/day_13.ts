import * as fs from 'fs';
import * as utils from './utils/utils_fns'
export function day_13_1() {
  const file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_13.txt", { encoding: 'utf8' });
  let points = file.split('\r\n\r\n')[0].split('\r\n').map(row => row.split(',').map(e => parseInt(e)));
  let folds =  file.split('\r\n\r\n')[1].split('\r\n');
  let max_num = Math.max(...points.map(row => Math.max(row[0], row[1])));
  const paper = Array.from(Array(max_num+1), _ => Array(max_num+1).fill(0));
  let firstFold = [];
  if (folds[0].includes("y=")) {
    firstFold = ['y', folds[0].split('y=')[1]];
    for (let p = 0; p < points.length; p++) {
      let pt = translatePoint('y', parseInt(firstFold[1]), points[p][0], points[p][1]);
      //console.log(points[p], pt);
      paper[pt[1]][pt[0]] = 1;
    }
  } else {
    firstFold = ['x', folds[0].split('x=')[1]];
    for (let p = 0; p < points.length; p++) {
      let pt = translatePoint('x', parseInt(firstFold[1]), points[p][0], points[p][1]);
      //console.log(points[p], pt);
      paper[pt[1]][pt[0]] = 1;
    }
  }
  //console.log(paper.map(row => row.join(',')));
  return utils.sum(paper.map(row => utils.sum(row)));
}

function translatePoint(direction: 'y' | 'x', fold: number, x: number, y: number): number[] {
  if (direction === 'y') {
    let dist = Math.abs(y - fold);
    if (y > fold) {
      return [x, Math.abs(2*dist - y)];
    } else {
      return [x, y];
    }
  } else {
    let dist = Math.abs(x - fold);
    if (x > fold) {
      return [Math.abs(2*dist - x), y];
    } else {
      return [x, y];
    }
  }
}

export function day_13_2() {
  const file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_13.txt", { encoding: 'utf8' });
  let points = file.split('\r\n\r\n')[0].split('\r\n').map(row => row.split(',').map(e => parseInt(e)));
  let folds =  file.split('\r\n\r\n')[1].split('\r\n');
  let max_num = Math.max(...points.map(row => Math.max(row[0], row[1])));
  const paper = Array.from(Array(max_num+1), _ => Array(max_num+1).fill('.'));
  for (let p = 0; p < points.length; p++) {
    paper[points[p][1]][points[p][0]] = '#';
  }
  let firstFold = [];
  for (let f = 0; f < folds.length; f++) {
    if (folds[f].includes("y=")) {
      firstFold = ['y', folds[f].split('y=')[1]];
      for (let i = 0; i < paper.length; i++) {
        for (let j = 0; j < paper[i].length; j++) {
          if (paper[j][i] === '#') {
            let pt = translatePoint('y', parseInt(firstFold[1]), i, j);
            paper[pt[1]][pt[0]] = '#';
            if (j > parseInt(firstFold[1])) {
              paper[j][i] = '.';
            }
          }
        }
      }

    } else {
      firstFold = ['x', folds[f].split('x=')[1]];
      for (let i = 0; i < paper.length; i++) {
        for (let j = 0; j < paper[i].length; j++) {
          if (paper[j][i] === '#') {
            let pt = translatePoint('x', parseInt(firstFold[1]), i, j);
            paper[pt[1]][pt[0]] = '#';
            if (i > parseInt(firstFold[1])) {
              paper[j][i] = '.';
            }
          }
        }
      }
    }
  }
  return paper.map(row => row.join('')).join('\n');
}