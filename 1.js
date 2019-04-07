var guding = document.getElementById('daohanglamqqq');
// var lastthreeo = document.getElementById('lastthreeo');


var qqpc = document.getElementById("qqpc")
console.log(qqpc);
var pcoff = document.getElementById("qqpcfirst")
console.log(pcoff);
var pcofs = document.getElementById("qqpcsecond")
console.log(pcofs);
var bodybeijing = document.getElementById('boddyq');
console.log(bodybeijing);
var lastthree = document.getElementById('qqpclastthree').getElementsByTagName('li')








window.onscroll = function () {
    var scrollTop = window.pageYOffset //用于FF
        ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    console.log(scrollTop);


    // if(screenTop < )


    if (scrollTop < 1300) {
        bodybeijing.background = 'img/bg1_1600.jpg';
    }
    if (scrollTop > 1300 && scrollTop < 2500) {
        bodybeijing.background = 'img/avds.jpg';
    }
    if (scrollTop > 2500) {
        bodybeijing.background = 'img/bg3_1600.jpg';
    }


    if (scrollTop < 800) {
        var daohang = document.getElementById("dhbb").getElementsByTagName("li")
        var xiao = document.getElementById("xiaoyuandian2").getElementsByTagName("li")
        daohang[0].className = "first";


        for (var i = 0; i < daohang.length; i++) {
            daohang[i].onmouseover = showlist;
            daohang[i].onmouseout = showback;
        }

        function showlist() {
            for (var i = 0; i < daohang.length; i++) {
                if (daohang[i] === this) {
                    daohang[i].className = "first";
                } else {
                    daohang[i].className = "";
                }
            }


        }

        function showback() {
            for (var i = 0; i < daohang.length; i++) {
                if (daohang[i] === this) {
                    daohang[0].className = "first";
                    daohang[1].className = "";
                    daohang[2].className = "";
                }
            }

        }
    }


    if (scrollTop > 800) {
        var daohang = document.getElementById("dhbb").getElementsByTagName("li")

        var xiao = document.getElementById("xiaoyuandian2").getElementsByTagName("li")

        daohang[0].className = "";
        daohang[1].className = "";
        daohang[2].className = "";
        guding.className = 'qqpc1';
    }


    if (scrollTop < 3700) {
        lastthree[0].className='qwertyuiop';
    }
    if (scrollTop > 3700) {
        lastthree[0].className='';
    }
    if (scrollTop < 3750) {
        lastthree[1].className='qwertyuiop';
    }
    if (scrollTop > 3750) {
        lastthree[1].className='';
    }
    if (scrollTop < 3800) {
        lastthree[2].className='qwertyuiop';
    }
    if (scrollTop > 3800) {
        lastthree[2].className='';
    }





}











var daohang = document.getElementById("dhbb").getElementsByTagName("li")
console.log(daohang);
var xiao = document.getElementById("xiaoyuandian2").getElementsByTagName("li")
console.log(xiao);


for (var i = 0; i < xiao.length; i++) {
    xiao[i].onmouseover = xiaoyuandain;
}

function xiaoyuandain() {
    for (var i = 0; i < xiao.length; i++) {
        if (xiao[0] === this) {
            qqpc.style.backgroundImage = "url('img/bbbb.png')";
            pcoff.className = "qqpcoffirst";
            pcofs.className = "qqpcofsecond acctive";
        }
        if (xiao[1] === this) {
            qqpc.style.backgroundImage = "url('img/aaa.jpg')";
            pcoff.className = "qqpcoffirst acctive";
            pcofs.className = "qqpcofsecond";
        }
    }
}