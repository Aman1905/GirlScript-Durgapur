$(document).ready(function() {
    preloaderFadeOutTime = 3000;
    function hidePreloader() {
    var preloader = $('#spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});


let menuBar = document.getElementById('menuBar');
let menus = document.getElementById('menu');
let menuCloses = document.getElementById('menuClose');

function menu (){
    menus.style.right= '0';
    menuCloses.style.display= 'inherit';
}
function menuClose(){
    menus.style.right="-280px";
    menuCloses.style.display= 'none';
}

window.onscroll = function()
{
    if(pageYOffset >= 90)
    {
        document.getElementById('goToTop').style.visibility="visible";
    }else
    {
        document.getElementById('goToTop').style.visibility="hidden";
    }
};

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $(".image").css({
        width: (20 + scroll/10) + "%"
    })
});
