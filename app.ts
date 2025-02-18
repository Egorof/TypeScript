class Venichle {
  run: number;
}

function kmToMIles<T extends Venichle>(venicle: T): T {
  venicle.run = venicle.run / 0.62;
  return venicle
}

console.log(kmToMIles({run: 55}));

console.log('s')