const setDir = (dir) => {
  switch (dir) {
    case 'N':
      return [-1, 0];
    case 'S':
      return [1, 0];
    case 'W':
      return [0, -1];
    case 'E':
      return [0, 1];
    default:
      break;
  }
};

function solution(park, routes) {
  const parkMap = park.map((val) => val.split(''));

  let X = 0,
    Y = 0;

  parkMap.forEach((val, idx) => {
    if (val.includes('S')) {
      X = idx;
      val.forEach((el, idx) => {
        if (el === 'S') Y = idx;
      });
    }
  });

  routes.forEach((route) => {
    const [dir, dist] = route.split(' ');
    const movePos = setDir(dir);

    let tmpX = X;
    let tmpY = Y;
    let flag = true;

    for (let i = 0; i < dist; i++) {
      tmpX += movePos[0];
      tmpY += movePos[1];

      if (
        tmpX < 0 ||
        tmpX > parkMap.length - 1 ||
        tmpY < 0 ||
        tmpY > parkMap[0].length - 1 ||
        parkMap[tmpX][tmpY] === 'X'
      ) {
        flag = false;
        break;
      }
    }
    if (flag) {
      X += movePos[0] * Number(dist);
      Y += movePos[1] * Number(dist);
    }
  });

  return [X, Y];
}

console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
