/**
 * Created by lu_hb on 2017/11/10.
 */
(function () {
    var _jQuery = window.jQuery,
            _$ = window.$;//把之前的jQuery保存起来，需要noConflict时把这两个变量吐出去。

    var version = "0.0.1",
        jQuery = function(selector){
            return new jQuery.fn.init(selector);
        };

    jQuery.prototype = {
        init: function (selector) {
          if(!selector){

          }else{
              var elem = document.querySelector(selector);
              if(elem){
                  this[0] = elem;
                  this.length = 1;
              }
          }
            return this;
        },
        setBackground:function (background) {
            this[0].style.background = background;
            return this;
        },
        version:version,
        name:function () {
            console.log(this);
        },

    }

    jQuery.noConflict = function(deep) {
        if(window.$ === $){
            window.$ = _$;
        }

        if(deep && window.jQuery === jQuery){
            window.jQuery === _jQuery;
        }

        return jQuery;
    }

    jQuery.fn = jQuery.prototype;

    jQuery.fn.init.prototype = jQuery.prototype;


    jQuery.extend = jQuery.fn.extend = function () {
        console.log(this)
    }

    window.jQuery = window.$ = jQuery;
})();