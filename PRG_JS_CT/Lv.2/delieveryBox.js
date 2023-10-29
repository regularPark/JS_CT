function solution(order) {
  const truck = [];
  let num = 1;
  const belt = Array.from({ length: order.length }, () => num++);

  const subBelt = [];

  let i = 0;
  while (true) {
    if (order[i] === belt[0]) {
      truck.push(belt.shift());
      i++;
    } else if (subBelt.length > 0 && subBelt[subBelt.length - 1] === order[i]) {
      truck.push(subBelt.pop());
      i++;
    } else if (
      order[i] !== belt[0] &&
      subBelt[subBelt.length - 1] !== order[i]
    ) {
      subBelt.push(belt.shift());
    }

    if (belt.length === 0) {
      if (subBelt[subBelt.length - 1] !== order[i]) break;
      else if (subBelt[subBelt.length - 1] === order[i]) {
        truck.push(subBelt.pop());
        i++;
      }
    }

    console.log(subBelt, 'subBelt');
  }

  console.log(truck, 'truck');

  return truck.length;
}

solution([5, 4, 3, 2, 1], 5);
