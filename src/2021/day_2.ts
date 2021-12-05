
export function day_2_1(input: { arr: string[] }) {
  let x = 0;
  let y = 0;
  let dir = '';
  input.arr.forEach(comm => {
    dir = comm.split(' ')[0];
    switch (dir) {
      case 'forward':
        x += parseInt(comm.split(' ')[1]);
        break;
      case 'down':
        y += parseInt(comm.split(' ')[1]);
        break;
      case 'up':
        y -= parseInt(comm.split(' ')[1]);
        break;
      default:
        break;
    }
  });
  console.log(x, y, x * y);
  return x * y;
}

export function day_2_2(input: { arr: string[] }) {
  let x = 0;
  let y = 0;
  let aim = 0;
  let dir = '';
  input.arr.forEach(comm => {
    dir = comm.split(' ')[0];
    switch (dir) {
      case 'forward':
        x += parseInt(comm.split(' ')[1]);
        y += (aim * parseInt(comm.split(' ')[1]));
        break;
      case 'down':
        aim += parseInt(comm.split(' ')[1]);
        break;
      case 'up':
        aim -= parseInt(comm.split(' ')[1]);
        break;
      default:
        break;
    }
  });
  console.log(x, y, x * y);
  return x * y;
}