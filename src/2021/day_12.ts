import * as fs from 'fs';
export function day_12_1() {
    const file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_12.txt", { encoding: 'utf8' });
    const edgeList = file.split('\r\n').map(row => {
        return row.split('-');
    });
    const result: string[][] = [];
    let paths: string[][] = [];
    paths.push(['start']);
    while (paths.some(path => { return path[path.length-1] !== 'end'})) {
        let nextPaths: string[][] = [];
        paths.forEach(path => {
            return edgeList.filter(edge => { //find relevant edges
                //console.log(edge, (edge[0] === path[path.length-1] && !seen.includes(edge[1])) || (edge[1] === path[path.length-1] && !seen.includes(edge[0])));
                return (edge[0] === path[path.length-1] && !(path.includes(edge[1]) && edge[1] === edge[1].toLowerCase())) || 
                       (edge[1] === path[path.length-1] && !(path.includes(edge[0]) && edge[0] === edge[0].toLowerCase()));
            }).map(edge => { //get the new piece of the edge
                return edge[0] === path[path.length-1] ? edge[1] : edge[0];
            }).forEach(next => {
                if (next === 'end') {
                    result.push([...path, next]);
                } else {
                    nextPaths.push([...path, next]);
                }
            });
        });
        paths = nextPaths;
        //console.log(paths);
    }
    return result.length;
}

export function day_12_2() {
    const file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_12.txt", { encoding: 'utf8' });
    const edgeList = file.split('\r\n').map(row => {
        return row.split('-');
    });
    const result: string[][] = [];
    let paths: string[][] = [];
    paths.push(['start']);
    while (paths.some(path => { return path[path.length-1] !== 'end'})) {
        let nextPaths: string[][] = [];
        paths.forEach(path => {
            return edgeList.filter(edge => { //find relevant edges
                //console.log(edge, (edge[0] === path[path.length-1] && !(edge[1] === edge[1].toLowerCase() && path.filter(p => { return p === edge[1] }).length > 0)) || 
                //(edge[1] === path[path.length-1] && !(edge[1] === edge[0].toLowerCase() && path.filter(p => { return p === edge[0] }).length > 0)));
                let pathContainsDoubleLower = path.filter(node => {
                  return node === node.toLowerCase();
                }).length !== new Set(path.filter(node => {
                  return node === node.toLowerCase();
                })).size;
                //console.log(pathContainsDoubleLower);
                return (edge[0] === path[path.length-1] 
                        && !(edge[1] === edge[1].toLowerCase() 
                        && path.filter(p => p === edge[1]).length > (pathContainsDoubleLower ? 0 : 1)) && edge[1] !== 'start') || 
                (edge[1] === path[path.length-1] 
                        && !(edge[0] === edge[0].toLowerCase() 
                        && path.filter(p => p === edge[0]).length > (pathContainsDoubleLower ? 0 : 1)) && edge[0] !== 'start');
            }).map(edge => { //get the new piece of the edge
                return edge[0] === path[path.length-1] ? edge[1] : edge[0];
            }).forEach(next => {
                if (next === 'end') {
                    result.push([...path, next]);
                } else {
                    nextPaths.push([...path, next]);
                }
            });
        });
        paths = nextPaths;
        //console.log(paths);
    }
    //console.log(new Set(result.map(path => path.join(','))));
    return result.length;
}