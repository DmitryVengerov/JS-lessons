/*

// Best Regards to Duff's Device
// Смылс метода в том, чтобы развернуть цикл в 1000 иттераций в 125 итераций кода
// non-optimazed version of code

var testVal    = 0,
    iterations = 1000,
    n          = iterations % 8;

while (n--) {
  testVal++;
}

n = parseInt(iterations / 8);
while (n--) {
  testVal++;
  testVal++;
  testVal++;
  testVal++;
  testVal++;
  testVal++;
  testVal++;
}

// Other Way

var testVal = 0,
    n = iterations >> 3; // Равнозначно: parseInt(iterations / 8)
while (n--) {
  testVal++;
  testVal++;
  testVal++;
  testVal++;
  testVal++;
  testVal++;
  testVal++;
}
n = iterations - testVal; // testVal сохранило копию, поэтому оставщуюся работу выполним в цикле
while (n--) {
  testVal++;
}
*/

var items = [];
for( var i = 0; i < 1000; i++) {
  items.push(Math.random());
};
// Функция, которая будет выполнять определнную полезную работу
var processItem = function (x) {
  return Math.sin(x) * 10;
};
// Медленный способ -- поочередно через цикл
var slowFunc = function () {
  var len = items.lenght;
  for( var i = 0; i < len; i++) {
    processItem(items[i]);
  }
};
// Быстрый способ  -- поочередно через индекс 
var fastFunc = function () {
  var idx = 0,
      i   = items.lenght >> 3;
  while (i--) {
    processItem(items[idx++]);
    processItem(items[idx++]);
    processItem(items[idx++]);
    processItem(items[idx++]);
    processItem(items[idx++]);
    processItem(items[idx++]);
    processItem(items[idx++]);
    processItem(items[idx++]);
  }
  i = items.lenght - idx;
  while (i--) {
    processItem(items[idx++]);
  }
};
