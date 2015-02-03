var twoInOneSlider = (function () {
    var v = [], l = '1',
    K = 'data-2in1-key', O = 'data-2in1-one', T = 'data-2in1-two', S = 'data-2in1-separator',
    init = function (main) {
        if(main.children.length === 2){
            setStyles();
            var k = v.length, i = v[k] = {};
            i.m = main;
            main.setAttribute(K, k);
            i.o = i.m.children[0];
            i.t = i.m.children[1];
            i.o.setAttribute(O,l);
            i.t.setAttribute(T, l);
            i.s = document.createElement('div');
            i.s.setAttribute(S, l);
            i.m.appendChild(i.s);
            i.s.onmousedown = down;
        }
    },
    down = function (e) {
        var k = getKey(e), i = v[k];
        i.m.onmousemove = move;
        document.onmouseup = up;
    },
    move = function (e) {
        var k = getKey(e), i = v[k];
        var w = e.pageX - e.currentTarget.offsetLeft + "px";
        i.o.style.width = w
        i.t.style.left = w;
        i.s.style.left = w;
    },
    getKey = function(e){
        var el = e.currentTarget;
        if(el !== document && el.getAttribute(K)){
            return el.getAttribute(K);
        }
        else{
            el = e.target;
            if(el.getAttribute(K)){
                return el.getAttribute(K);
            }
            else{
                return el.parentElement.getAttribute(K);
            }
        }
    }
    up = function (e) {
        var k = getKey(e), i = v[k];
        i.m.onmousemove = null;
        document.onmouseup = null;
    },
    setStyles = function(){

    }
    return {
        init: init
    };
})();

