/**
 * Created by lu_hb on 2017/11/10.
 */
(function () {
    var _jQuery = window.jQuery,
            _$ = window.$;

    var version = "0.0.1",
        jQuery = function(selector){
        console.log(document.querySelector(selector));
        };

    window.jQuery = window.$ = function (selector) {
        return new jQuery(selector);
    }
})();