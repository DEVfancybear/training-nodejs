//khai báo hàm time, đắt giá trị
var time = 0;
// timer sẽ thực hiện 1 hàm
var timer = setInterval(function () {
  //cứ mỗi lần thực hiện thì time sẽ cộng thêm 2
  time += 2;
  console.log(time + "loop"); // in ra được 8
  if (time > 7) {
    //clear interval, loại bỏ vòng lặp
    clearInterval(timer);
  }
});


