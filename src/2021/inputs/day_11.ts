({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.day_11_1 = day_11_1;
exports.day_11_2 = day_11_2;

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

}

function day_11_1() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_11_test.txt", {
    encoding: 'utf8'
  });
  const octos = file.split('\r\n').map(row => {
    return row.split('').map(oct => {
      return parseInt(oct);
    });
  });
  let flashes = 0;
  const steps = 100;

  for (let step = 0; step < steps; step++) {
    let neighbors = [];
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
          if (octos[i][j] > 9 && !flashed.some(oct => {
            return oct.x === i && oct.y === j;
          })) {
            flashed.push(new Point(i, j));
            moreFlashes = true;

            if (i > 0) {
              //top
              neighbors.push(new Point(i - 1, j));
              octos[i - 1][j]++;

              if (j > 0) {
                //left
                neighbors.push(new Point(i, j - 1));
                octos[i][j - 1]++; //top left

                neighbors.push(new Point(i - 1, j - 1));
                octos[i - 1][j - 1]++;
              }

              if (j < octos[i].length - 1) {
                //right
                neighbors.push(new Point(i, j + 1));
                octos[i][j + 1]++; //top right

                neighbors.push(new Point(i - 1, j + 1));
                octos[i - 1][j + 1]++;
              }
            }

            if (i < octos.length - 1) {
              //bottom
              neighbors.push(new Point(i + 1, j));
              octos[i + 1][j]++;

              if (j > 0) {
                //bottom left
                neighbors.push(new Point(i + 1, j - 1));
                octos[i + 1][j - 1]++;
              }

              if (j < octos[i].length - 1) {
                //bottom right
                neighbors.push(new Point(i + 1, j + 1));
                octos[i + 1][j + 1]++;
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

    console.log(step, flashes); 
    // while (neighbors.length > 0) {
    //   let curr = neighbors.shift()!;
    //   if (octos[curr.x][curr.y] + 1 > 9) {
    //   }
    // }
  }
  return flashes;
}

function day_11_2() {
  let file = fs.readFileSync("C:\\Users\\bradg\\source\\repos\\AdventOfCode\\src\\2021\\inputs\\day_10.txt", {
    encoding: 'utf8'
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRheV8xMS50cyJdLCJuYW1lcyI6WyJQb2ludCIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJkYXlfMTFfMSIsImZpbGUiLCJmcyIsInJlYWRGaWxlU3luYyIsImVuY29kaW5nIiwib2N0b3MiLCJzcGxpdCIsIm1hcCIsInJvdyIsIm9jdCIsInBhcnNlSW50IiwiZmxhc2hlcyIsInN0ZXBzIiwic3RlcCIsIm5laWdoYm9ycyIsImZsYXNoZWQiLCJpIiwibGVuZ3RoIiwiaiIsIm1vcmVGbGFzaGVzIiwic29tZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZGF5XzExXzIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7OztBQUdBLE1BQU1BLEtBQU4sQ0FBWTtBQUdWQyxFQUFBQSxXQUFXLENBQUNDLENBQUQsRUFBWUMsQ0FBWixFQUF1QjtBQUNoQyxTQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDRDs7QUFOUzs7QUFTTCxTQUFTQyxRQUFULEdBQW9CO0FBQ3pCLE1BQUlDLElBQUksR0FBR0MsRUFBRSxDQUFDQyxZQUFILENBQWdCLG1GQUFoQixFQUFxRztBQUFFQyxJQUFBQSxRQUFRLEVBQUU7QUFBWixHQUFyRyxDQUFYO0FBQ0EsUUFBTUMsS0FBSyxHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CQyxHQUFuQixDQUF1QkMsR0FBRyxJQUFJO0FBQUUsV0FBT0EsR0FBRyxDQUFDRixLQUFKLENBQVUsRUFBVixFQUFjQyxHQUFkLENBQWtCRSxHQUFHLElBQUk7QUFBRSxhQUFPQyxRQUFRLENBQUNELEdBQUQsQ0FBZjtBQUF1QixLQUFsRCxDQUFQO0FBQTRELEdBQTVGLENBQWQ7QUFDQSxNQUFJRSxPQUFPLEdBQUcsQ0FBZDtBQUNBLFFBQU1DLEtBQUssR0FBRyxHQUFkOztBQUNBLE9BQUssSUFBSUMsSUFBSSxHQUFHLENBQWhCLEVBQW1CQSxJQUFJLEdBQUdELEtBQTFCLEVBQWlDQyxJQUFJ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QUN4QyxZQUFJYixLQUFLLENBQUNXLENBQUQsQ0FBTCxDQUFTRSxDQUFULElBQWMsQ0FBbEIsRUFBcUI7QUFDbkJQLFVBQUFBLE9BQU87QUFDUE4sVUFBQUEsS0FBSyxDQUFDVyxDQUFELENBQUwsQ0FBU0UsQ0FBVCxJQUFjLENBQWQ7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0RJLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixJQUFaLEVBQWtCRixPQUFsQixFQWhFdUMsQ0FpRXZDO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDRDtBQUNGOztBQUVNLFNBQVNhLFFBQVQsR0FBb0I7QUFDekIsTUFBSXZCLElBQUksR0FBR0MsRUFBRSxDQUFDQyxZQUFILENBQWdCLDhFQUFoQixFQUFnRztBQUFFQyxJQUFBQSxRQUFRLEVBQUU7QUFBWixHQUFoRyxDQUFYO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vdXRpbHMvdXRpbHNfZm5zJztcclxuXHJcbmNsYXNzIFBvaW50IHtcclxuICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgIHRoaXMueCA9IHg7XHJcbiAgICB0aGlzLnkgPSB5O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRheV8xMV8xKCkge1xyXG4gIGxldCBmaWxlID0gZnMucmVhZEZpbGVTeW5jKFwiQzpcXFxcVXNlcnNcXFxcYnJhZGdcXFxcc291cmNlXFxcXHJlcG9zXFxcXEFkdmVudE9mQ29kZVxcXFxzcmNcXFxcMjAyMVxcXFxpbnB1dHNcXFxcZGF5XzExX3Rlc3QudHh0XCIsIHsgZW5jb2Rpbmc6ICd1dGY4JyB9KTtcclxuICBjb25zdCBvY3RvcyA9IGZpbGUuc3BsaXQoJ1xcclxcbicpLm1hcChyb3cgPT4geyByZXR1cm4gcm93LnNwbGl0KCcnKS5tYXAob2N0ID0+IHsgcmV0dXJuIHBhcnNlSW50KG9jdCk7IH0pIH0pO1xyXG4gIGxldCBmbGFzaGVzID0gMDtcclxuICBjb25zdCBzdGVwcyA9IDEwMDtcclxuICBmb3IgKGxldCBzdGVwID0gMDsgc3RlcCA8IHN0ZXBzOyBzdGVwKyspIHtcclxuICAgIGxldCBuZWlnaGJvcnM6IFBvaW50W10gPSBbXTtcclxuICAgIGxldCBmbGFzaGVkOiBQb2ludFtdID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9jdG9zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb2N0b3NbaV0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICBvY3Rvc1tpXVtqXSsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbW9yZUZsYXNoZXMgPSB0cnVlO1xyXG4gICAgd2hpbGUgKG1vcmVGbGFzaGVzKSB7XHJcbiAgICAgIG1vcmVGbGFzaGVzID0gZmFsc2U7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2N0b3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG9jdG9zW2ldLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICBpZiAob2N0b3NbaV1bal0gPiA5ICYmICFmbGFzaGVkLnNvbWUob2N0ID0+IHsgcmV0dXJuIG9jdC54ID09PSBpICYmIG9jdC55ID09PSBqOyB9KSkge1xyXG4gICAgICAgICAgICBmbGFzaGVkLnB1c2gobmV3IFBvaW50KGksIGopKVxyXG4gICAgICAgICAgICBtb3JlRmxhc2hlcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xyXG4gICAgICAgICAgICAgIC8vdG9wXHJcbiAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobmV3IFBvaW50KGktMSwgaikpO1xyXG4gICAgICAgICAgICAgIG9jdG9zW2ktMV1bal0rKztcclxuICAgICAgICAgICAgICBpZiAoaiA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vbGVmdFxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobmV3IFBvaW50KGksIGotMSkpO1xyXG4gICAgICAgICAgICAgICAgb2N0b3NbaV1bai0xXSsrO1xyXG4gICAgICAgICAgICAgICAgLy90b3AgbGVmdFxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobmV3IFBvaW50KGktMSwgai0xKSk7XHJcbiAgICAgICAgICAgICAgICBvY3Rvc1tpLTFdW2otMV0rKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGogPCBvY3Rvc1tpXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL3JpZ2h0XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChuZXcgUG9pbnQoaSwgaisxKSk7XHJcbiAgICAgICAgICAgICAgICBvY3Rvc1tpXVtqKzFdKys7XHJcbiAgICAgICAgICAgICAgICAvL3RvcCByaWdodFxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobmV3IFBvaW50KGktMSwgaisxKSk7XHJcbiAgICAgICAgICAgICAgICBvY3Rvc1tpLTFdW2orMV0rKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPCBvY3Rvcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgLy9ib3R0b21cclxuICAgICAgICAgICAgICBuZWlnaGJvcnMucHVzaChuZXcgUG9pbnQoaSsxLCBqKSk7XHJcbiAgICAgICAgICAgICAgb2N0b3NbaSsxXVtqXSsrO1xyXG4gICAgICAgICAgICAgIGlmIChqID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy9ib3R0b20gbGVmdFxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobmV3IFBvaW50KGkrMSwgai0xKSk7XHJcbiAgICAgICAgICAgICAgICBvY3Rvc1tpKzFdW2otMV0rKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaWYgKGogPCBvY3Rvc1tpXS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvL2JvdHRvbSByaWdodFxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3JzLnB1c2gobmV3IFBvaW50KGkrMSwgaisxKSk7XHJcbiAgICAgICAgICAgICAgICBvY3Rvc1tpKzFdW2orMV0rKztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2N0b3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBvY3Rvc1tpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIGlmIChvY3Rvc1tpXVtqXSA+IDkpIHtcclxuICAgICAgICAgIGZsYXNoZXMrKztcclxuICAgICAgICAgIG9jdG9zW2ldW2pdID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHN0ZXAsIGZsYXNoZXMpO1xyXG4gICAgLy8gd2hpbGUgKG5laWdoYm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgIGxldCBjdXJyID0gbmVpZ2hib3JzLnNoaWZ0KCkhO1xyXG4gICAgLy8gICBpZiAob2N0b3NbY3Vyci54XVtjdXJyLnldICsgMSA+IDkpIHtcclxuXHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXlfMTFfMigpIHtcclxuICBsZXQgZmlsZSA9IGZzLnJlYWRGaWxlU3luYyhcIkM6XFxcXFVzZXJzXFxcXGJyYWRnXFxcXHNvdXJjZVxcXFxyZXBvc1xcXFxBZHZlbnRPZkNvZGVcXFxcc3JjXFxcXDIwMjFcXFxcaW5wdXRzXFxcXGRheV8xMC50eHRcIiwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xyXG59Il19
}});