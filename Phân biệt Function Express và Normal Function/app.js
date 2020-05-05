// Normal Funtion: function đã được node đưa vào scope nên có thể gọi ở bất kì đâu,kể cả trước khi chạy

function test() {
  console.log("aaaaa");
}
test();

//  Function Express: phải khai báo mới gọi dc hàm
// sayHello();
var sayHello = function () {
  console.log("Hello");
};
sayHello()

