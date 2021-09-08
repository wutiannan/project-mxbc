var img = document.getElementById("img");
var list = document.getElementById("index").getElementsByTagName("li");
var index = 0; //这里定义index是变量，不是属性

function moveElement(ele, x_final, y_final, interval) {
  //ele为元素对象
  var x_pos = ele.offsetLeft;
  var y_pos = ele.offsetTop;
  var dist = 0;
  if (ele.movement) {
    //防止悬停
    clearTimeout(ele.movement);
  }
  if (x_pos == x_final && y_pos == y_final) {
    //先判断是否需要移动
    return;
  }
  dist = Math.ceil(Math.abs(x_final - x_pos) / 10); //分10次移动完成
  x_pos = x_pos < x_final ? x_pos + dist : x_pos - dist;
  dist = Math.ceil(Math.abs(y_final - y_pos) / 10); //分10次移动完成
  y_pos = y_pos < y_final ? y_pos + dist : y_pos - dist;

  ele.style.left = x_pos + "px";
  ele.style.top = y_pos + "px";

  ele.movement = setTimeout(function () {
    //分10次移动，自调用10次
    moveElement(ele, x_final, y_final, interval);
  }, interval);
}

//第一个轮播图
function moveIndex(list, num) {
  //移动小圆点
  for (var i = 0; i < list.length; i++) {
    if (list[i].className == "on") {
      //清除li的背景样式
      list[i].className = "";
    }
  }
  list[num].className = "on";
}

var nextMove = function () {
  //一直向右移动，最后一个之后返回
  index += 1;
  if (index >= list.length) {
    index = 0;
  }
  moveIndex(list, index);
  moveElement(img, -1350 * index, 0, 20);
};
var play = function () {
  timer = setInterval(function () {
    nextMove();
  }, 2500);
};
for (var i = 0; i < list.length; i++) {
  //鼠标覆盖上哪个小圆圈，图片就移动到哪个小圆圈，并停止
  list[i].index = i; //这里是设置index属性，和index变量没有任何联系
  list[i].onmouseover = function () {
    var clickIndex = parseInt(this.index);
    moveElement(img, -1350 * clickIndex, 0, 20);
    index = clickIndex;
    moveIndex(list, index);
    clearInterval(timer);
  };
  list[i].onmouseout = function () {
    //移开后继续轮播
    play();
  };
}

var arr = [
  "./img/rmcp1.jpg" ,
  "./img/rmcp2.jpg" ,
  "./img/rmcp3.jpg" ,
];

var pic = document.querySelector(".tuji");
var num = 0;
setInterval(function () {
  num++;
  pic.src = arr[num % 3];
}, 2000);
