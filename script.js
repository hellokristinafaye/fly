$('#banner').mousemove(function (e) {
    var moveX = (e.pageX * -1 / 2) + 300;
    var moveY = (e.pageY * -1 / 3) + 120;
    $('#drone-box').css({
        'transform': 'translate3D('+moveX+'px,'+moveY+'px,0)'
    });
});