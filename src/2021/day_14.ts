import * as fs from 'fs';
import * as utils from './utils/utils_fns'
export function day_14_1() {
  const file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_14.txt", { encoding: 'utf8' });
  const template = file.split('\r\n\r\n')[0];
  const pairRules = file.split('\r\n\r\n')[1].split('\r\n').map(row => row.split(' -> '));
  let polymer = template;

  for (let step = 0; step < 10; step++) {
    let nextPoly = '' + polymer[0];
    for (let i = 0; i < polymer.length - 1; i++) {
      //console.log(polymer.substring(i, i+2));
      let insertion = pairRules.find(pair => pair[0] === polymer.substring(i, i+2))
      if (insertion) {
        nextPoly += insertion[1] + polymer[i+1];
      }
    }
    polymer = nextPoly;
  }
  //console.log(polymer);
  let counts = {};
  let allLets: string[] = [];
  polymer.split('').forEach(letter => {
    if (!allLets.includes(letter)) {
      allLets.push(letter);
    }
    counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
  });
  //console.log(counts);
  allLets.sort((a, b) => {
    return parseInt(counts[b]) - parseInt(counts[a]);
  });
  //console.log(allLets)
  return counts[allLets[0]] - counts[allLets[allLets.length-1]];
}

export function day_14_2() {
  const file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_14.txt", { encoding: 'utf8' });
  const template = file.split('\r\n\r\n')[0];
  const pairShort = {};
  const pairRules = file.split('\r\n\r\n')[1].split('\r\n').map(row => {
    pairShort[row.split(' -> ')[0]] = [row.split(' -> ')[0][0] + row.split(' -> ')[1], row.split(' -> ')[1] + row.split(' -> ')[0][1]];
    return row.split(' -> ');
  });
  let counts = {};
  let allLets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  allLets.forEach(letter => {
    counts[letter] = 0;
  });
  let polymer = template;
  let masterDict = {};
  for (let i = 0; i < polymer.length - 1; i++) {
    masterDict[polymer.substring(i, i+2)] = masterDict[polymer.substring(i, i+2)] ? masterDict[polymer.substring(i, i+2)] + 1 : 1;
  }
  
  for (let step = 0; step < 40; step++) {
    let newDict = {};
    for (const [key, value] of Object.entries(masterDict)) {
      pairShort[key].forEach(out => {
        newDict[out] = newDict[out] ? newDict[out] + value : value;
      });
      //newDict[key] = newDict[key] ? newDict[key] - value: 0;
    }
    masterDict = newDict;
  }
  //console.log(masterDict);
  for (const [key, value] of Object.entries(masterDict)) {
    counts[key[1]] += value;
  }

  console.log(counts);
  allLets = allLets.filter(letter => {
    return counts[letter] !== 0;
  }).sort((a, b) => {
    return parseInt(counts[b]) - parseInt(counts[a]);
  });
  return counts[allLets[0]] - counts[allLets[allLets.length-1]];
}
