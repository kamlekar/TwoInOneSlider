var twoInOneSlider = (function () {
    var one, two, separator,
    init = function (main) {
        one = main.children[0];
        two = main.children[1];
        separator = document.createElement('div');
        separator.className = 'separator';
        main.appendChild(separator);
        separator.onmousedown = down;
    },
    down = function (e) {
        main.onmousemove = move;
        document.onmouseup = up;
    },
    move = function (e) {
        var width = e.pageX - e.currentTarget.offsetLeft;
        one.style.width = width + "px";
        two.style.left = width + "px";
        separator.style.left = width + "px";
    },
    up = function (e) {
        main.onmousemove = null;
        document.onmouseup = null;
    }
    return {
        init: init
    };
})();
var main = document.querySelector('.main');
twoInOneSlider.init(main);
