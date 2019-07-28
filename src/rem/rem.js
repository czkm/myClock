const remchange = (function (c, d) {
  var e = document.documentElement || document.body,
    a = "orientationchange" in window ? "orientationchange" : "resize",
    b = function () {
      var f = e.clientWidth;
      e.style.fontSize = (f >= 750) ? "1px"   : 1 * (f / 750) + "px"
    };
  b();
  c.addEventListener(a, b, false)
})(window);
export default remchange
