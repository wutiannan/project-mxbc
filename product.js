window.addEventListener("load", function() {
    var banner = document.querySelector('.banner');
    var hanimate = document.querySelectorAll('.hanimate');
    var list_filtrate = document.querySelector('.list-filtrate');
    var lis = list_filtrate.querySelectorAll('li');
    var ice_img = document.querySelector('.ice-img');
    var uls = ice_img.querySelectorAll('ul');
    var kowns = document.querySelectorAll('.know');
    var button_more = document.querySelector('.button-more');
    var more_knowledge = document.querySelector('.more-knowledge');
    var vip_right = document.querySelector('.vip-right');
    var select = document.querySelector('.select');

    banner.addEventListener('mouseenter', function() {
        this.children[0].style.marginLeft = this.offsetWidth - this.children[0].offsetWidth + 'px';
    })
    banner.addEventListener('mouseleave', function() {
        this.children[0].style.marginLeft = 0 + 'px';
    })
    var index = 0;
    for (var i = 0; i < hanimate.length; i++) {
        // hanimate[i].setAttribute('index', i);
        hanimate[i].addEventListener('mouseenter', function() {
            this.children[2].style.transform = 'translateY(-200px)';
            // var index = this.getAttribute('index');
            // console.log(index);
        })
        hanimate[i].addEventListener('mouseleave', function() {
            this.children[2].style.transform = 'translateY(0)';
        })
    }
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            for (var i = 0; i < uls.length; i++) {
                uls[i].className = '';
            }
            uls[index].className = 'ice-current';
        })
    }
    for (var i = 0; i < kowns.length; i++) {
        kowns[i].addEventListener('mouseover', function() {
            this.style.backgroundColor = '#E40055';
            this.style.color = '#fff';
        })
        kowns[i].addEventListener('mouseout', function() {
            this.style.backgroundColor = '#fff';
            this.style.color = '#E40055';
        })
    }
    button_more.addEventListener('mouseover', function() {
        button_more.style.transform = 'scale(.7)';
    })
    button_more.addEventListener('mouseout', function() {
        button_more.style.transform = 'scale(1)';
    })
    var timer;
    button_more.addEventListener('click', function() {
        clearTimeout(timer);
        more_knowledge.style.display = 'block';
    })
    button_more.addEventListener('mouseleave', function() {
        timer = setTimeout(function() {
            more_knowledge.style.display = 'none';
        }, 3000);
    })

    for (var i = 0; i < select.children.length; i++) {
        select.children[i].setAttribute('index', i);
        select.children[i].addEventListener('click', function() {

            for (var i = 0; i < select.children.length; i++) {
                select.children[i].classList.remove('select-current');
            }
            this.classList.add('select-current');
            for (var i = 1; i <= select.children.length; i++) {
                vip_right.children[i].style.display = 'none';
            }
            var index = parseInt(this.getAttribute('index')) + 1;
            vip_right.children[index].style.display = 'block';
        })
    }
    // 1. 获取元素
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    // 2. 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null; // 清除定时器变量
    });
    focus.addEventListener('mouseleave', function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = setInterval(function() {
            arrow_r.click();
        }, 2000);
    });
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    var flag = true;
    arrow_r.addEventListener('click', function() {
        if (flag) {
            flag = false; // 关闭节流阀
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true; // 打开节流阀
            });
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });
    arrow_l.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }
    });

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function() {
        arrow_r.click();
    }, 2000);

});