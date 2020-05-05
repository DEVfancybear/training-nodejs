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
// modules.exports.(tên muốn exports) = name của function express
module.exports.demtest = dem;
module.exports.tinhtest = tinh;
module.exports.chaotest = chao;
