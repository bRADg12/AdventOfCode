import * as utils from './utils/utils_fns';
import * as fs from 'fs';

function add(accumulator: number, a: number) {
  return accumulator + a;
}
export function day_4_1() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_4.txt", { encoding: 'utf8' });
  const bingoNums = file.split('\r\n\r\n')[0].split(',').map(e => {
    return parseInt(e);
  });
  const boards = file.split('\r\n\r\n');
  let winningBoard: number[][] = [];
  let winningSetSum = 0;
  let shortestWin: number = 0;

  let board: number[][];
  for (let i = 1; i < boards.length; i++) {
    // console.log(boards[i]);
    board = boards[i].split('\r\n').map(row => {
      return row.trim().split(' ').map(num => {
        return parseInt(num);
      }).filter(num => {
        return !isNaN(num);
      });
    });
    let bobsums: { sum: number, bestBing: number, lastCalled: number }[] = [];
    let currShort = 0;
    let currSum = 0;
    for (let j = 0; j < board.length; j++) {
      bobsums.push({
        bestBing: Math.max(
          bingoNums.indexOf(board[j][0]),
          bingoNums.indexOf(board[j][1]),
          bingoNums.indexOf(board[j][2]),
          bingoNums.indexOf(board[j][3]),
          bingoNums.indexOf(board[j][4]),
        ),
        sum: board[j][0] + board[j][1] + board[j][2] + board[j][3] + board[j][4],
        lastCalled: 0
      });
      bobsums.push({
        bestBing: Math.max(
          bingoNums.indexOf(board[0][j]),
          bingoNums.indexOf(board[1][j]),
          bingoNums.indexOf(board[2][j]),
          bingoNums.indexOf(board[3][j]),
          bingoNums.indexOf(board[4][j]),
        ),
        sum: board[0][j] + board[1][j] + board[2][j] + board[3][j] + board[4][j],
        lastCalled: 0
      });
    }
    currShort = bobsums.sort((a, b) => {
      return a.bestBing - b.bestBing;
    })[0].bestBing;
    currSum = bobsums.sort((a, b) => {
      return a.bestBing - b.bestBing;
    })[0].sum;
    if (currShort < shortestWin || shortestWin < 5) {
      shortestWin = currShort;
      winningSetSum = currSum;
      winningBoard = board;
    }
  }

  let finalCalc = 0;
  for (let i = 0; i < winningBoard.length; i++) {
    for (let j = 0; j < winningBoard[i].length; j++) {
      if (bingoNums.indexOf(winningBoard[i][j]) > shortestWin) {
        finalCalc += winningBoard[i][j];
      }
    }
  }
  finalCalc *= bingoNums[shortestWin];
  console.log(shortestWin, winningBoard, finalCalc);

  return finalCalc;
}

export function day_4_2() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_4.txt", { encoding: 'utf8' });
  const bingoNums = file.split('\r\n\r\n')[0].split(',').map(e => {
    return parseInt(e);
  });
  const boards = file.split('\r\n\r\n');
  let winningBoard: number[][] = [];
  let longestWin: number = 0;

  let board: number[][];
  for (let i = 1; i < boards.length; i++) {
    // console.log(boards[i]);
    board = boards[i].split('\r\n').map(row => {
      return row.trim().split(' ').map(num => {
        return parseInt(num);
      }).filter(num => {
        return !isNaN(num);
      });
    });
    let bobsums: { sum: number, bestBing: number, lastCalled: number }[] = [];
    let currLong = 0;
    let currSum = 0;
    for (let j = 0; j < board.length; j++) {
      bobsums.push({
        bestBing: Math.max(
          bingoNums.indexOf(board[j][0]),
          bingoNums.indexOf(board[j][1]),
          bingoNums.indexOf(board[j][2]),
          bingoNums.indexOf(board[j][3]),
          bingoNums.indexOf(board[j][4]),
        ),
        sum: board[j][0] + board[j][1] + board[j][2] + board[j][3] + board[j][4],
        lastCalled: 0
      });
      bobsums.push({
        bestBing: Math.max(
          bingoNums.indexOf(board[0][j]),
          bingoNums.indexOf(board[1][j]),
          bingoNums.indexOf(board[2][j]),
          bingoNums.indexOf(board[3][j]),
          bingoNums.indexOf(board[4][j]),
        ),
        sum: board[0][j] + board[1][j] + board[2][j] + board[3][j] + board[4][j],
        lastCalled: 0
      });
    }
    currLong = bobsums.sort((a, b) => {
      return a.bestBing - b.bestBing;
    })[0].bestBing;

    if (currLong > longestWin) {
      longestWin = currLong;
      winningBoard = board;
    }
  }

  let finalCalc = 0;
  for (let i = 0; i < winningBoard.length; i++) {
    for (let j = 0; j < winningBoard[i].length; j++) {
      if (bingoNums.indexOf(winningBoard[i][j]) > longestWin) {
        finalCalc += winningBoard[i][j];
      }
    }
  }
  finalCalc *= bingoNums[longestWin];
  console.log(longestWin, winningBoard, finalCalc);

  return finalCalc;
}