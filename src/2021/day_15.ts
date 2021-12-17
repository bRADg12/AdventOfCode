import * as fs from 'fs';
import * as utils from './utils/utils_fns';

export function day_15_1() {
    const file = fs.readFileSync("C:\\Users\\bgues\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_15.txt", { encoding: 'utf8' });
    const grid = file.split('\r\n').map(row => row.split('').map(e => parseInt(e)));
    const distances = Array.from(Array(grid.length), _ => Array(grid[0].length).fill(Number.MAX_SAFE_INTEGER));
    distances[0][0] = 0;
    const sptSet = new Set();
    const q = utils.range(0, (grid.length**2)-1);

    let x = (a: number) => { return Math.floor(a / grid.length) };
    let y = (a: number) => { return a % grid.length; };
    //console.log(q);
    while (q.length > 0) {
        let curr = q.sort((a, b) => {
            return distances[x(a)][y(a)] - distances[x(b)][y(b)];
        }).shift()!;
        let i = x(curr);
        let j = y(curr);
        if (i < grid.length-1) {
            //bottom
            distances[i+1][j] = (distances[i][j] + grid[i+1][j]) < distances[i+1][j] ? 
            distances[i][j] + grid[i+1][j] : distances[i+1][j];
        }
        if (j < grid.length-1) {
            //top
            distances[i][j+1] = (distances[i][j] + grid[i][j+1]) < distances[i][j+1] ? 
            distances[i][j] + grid[i][j+1] : distances[i][j+1];
        }
        if (i > 0) {
            //right
            distances[i-1][j] = (distances[i][j] + grid[i-1][j]) < distances[i-1][j] ? 
            distances[i][j] + grid[i-1][j] : distances[i-1][j];
        }
        if (j > 0) {
            //left
            distances[i][j-1] = (distances[i][j] + grid[i][j-1]) < distances[i][j-1] ? 
            distances[i][j] + grid[i][j-1] : distances[i][j-1];
        }
    }
    return distances[grid.length-1][grid.length-1];
}

export function day_15_2() {
    const file = fs.readFileSync("C:\\Users\\bgues\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_15.txt", { encoding: 'utf8' });
    const grid = file.split('\r\n').map(row => row.split('').map(e => parseInt(e)));
    const distances = Array.from(Array(grid.length*5), _ => Array(grid.length*5).fill(Number.MAX_SAFE_INTEGER));
    distances[0][0] = 0;
    const sptSet = new Set();
    const q = utils.range(0, ((grid.length*5)**2)-1); // size 2500

    let x = (a: number) => { return Math.floor(a / (grid.length*5)) };
    let y = (a: number) => { return a % (grid.length*5); };
    //console.log(q.length, distances);
    while (q.length > 0) {
        let curr = q.sort((a, b) => {
            return distances[x(a)][y(a)] - distances[x(b)][y(b)];
        }).shift()!; //1999
        let i = x(curr); //39
        let j = y(curr); //49
        let gridI; //9
        let gridJ; //9

        let mFactor = Math.floor(i / grid.length)  +  Math.floor(j / grid.length); // (3, 4) = 7
        // console.log(i, j, gridI, gridJ);
        if (i < distances.length-1 && q.includes(curr+grid.length)) {
            //bottom
            gridI = (i + 1) % grid.length;
            gridJ = j % grid.length;
            let alt = ((grid[gridI][gridJ] + mFactor) % 10) === 0 ? 1 : ((grid[gridI][gridJ] + mFactor) % 10);
            distances[i+1][j] = (distances[i][j] + alt) < distances[i+1][j] ? 
            distances[i][j] + alt : distances[i+1][j];
        }
        if (j < distances.length-1 && q.includes(curr+1)) {
            //top
            gridI = i % grid.length;
            gridJ = (j + 1) % grid.length;
            let alt = ((grid[gridI][gridJ] + mFactor) % 10) === 0 ? 1 : ((grid[gridI][gridJ] + mFactor) % 10);
            distances[i][j+1] = (distances[i][j] + alt) < distances[i][j+1] ? 
            distances[i][j] + alt : distances[i][j+1];
        }
        if (i > 0 && q.includes(curr-grid.length)) {
            //right
            gridI = (i - 1) % grid.length;
            gridJ = j % grid.length;
            let alt = ((grid[gridI][gridJ] + mFactor) % 10) === 0 ? 1 : ((grid[gridI][gridJ] + mFactor) % 10);
            distances[i-1][j] = (distances[i][j] + alt) < distances[i-1][j] ? 
            distances[i][j] + alt : distances[i-1][j];
        }
        if (j > 0 && q.includes(curr-1)) {
            //left
            gridI = i % grid.length;
            gridJ = (j - 1) % grid.length;
            let alt = ((grid[gridI][gridJ] + mFactor) % 10) === 0 ? 1 : ((grid[gridI][gridJ] + mFactor) % 10);
            distances[i][j-1] = (distances[i][j] + alt) < distances[i][j-1] ? 
            distances[i][j] + alt : distances[i][j-1];
        }
    }
    //console.log(distances);
    return distances[distances.length-1][distances.length-1];
}