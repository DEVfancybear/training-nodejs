//Function Express
var dem = function (arrMang) {
  return "There are " + arrMang.length + " element in Arr";
};

var tinh = function (a, b) {
  return `Sim is ${a + b}`;
};

var chao = function () {
  console.log("Hello = chao");
};

module.exports = {
  demtest: dem,
  tinhtest: tinh,
  chaotest: chao,
};
