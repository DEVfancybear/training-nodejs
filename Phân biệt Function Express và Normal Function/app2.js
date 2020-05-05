//  Function Express: phải khai báo mới gọi dc hàm
function callFnc(fnc) {
  fnc();
}
var sayHello = function () {
  console.log("Hello");
};

var sayHi = function () {
  console.log("say2");
};
callFnc(sayHello);
callFnc(sayHi);
