var bannerarr = [
    "./img/Compress_1.jpg",
    "./img/Compress_2.jpg",
    "./img/Compress_3.jpg",
    "./img/Compress_4.jpg"
]
var bannerinfo = document.getElementsByClassName("info");
bannerinfo[0].style.display = "block";

var bannerimg = document.querySelector("#bannerimg")

var num = 0
setInterval(function(){
    bannerimg.src = bannerarr[num % 4];

    bannerinfo[num % 4].style.display = "block";
    bannerinfo[(num+1) % 4].style.display = "none";
    bannerinfo[(num+2) % 4].style.display = "none";
    bannerinfo[(num+3) % 4].style.display = "none";
    num++;
},4000)

var btns = document.querySelectorAll(".button")
for(var i = 0;i < btns.length;i++){
    btns[i].onclick = function(){
        bannerimg.src = bannerarr[i];

    }
}
