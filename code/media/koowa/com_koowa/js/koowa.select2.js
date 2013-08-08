/*
 ---

 description: Custom configuration of Select2 tuned for Nooku Framework

 authors:
 - Stian Didriksen

 requires:
 - Select2

 license: @TODO

 ...
 */

(function ($) {
    "use strict";

    $.fn.koowaSelect2 = function (options) {

        var settings = $.extend({
            width: "resolve"
        }, options );

        this.each(function() {

            var element = $(this);

            //Workaround for Select2 refusing to ajaxify select elements
            if (element.get(0).tagName.toLowerCase() === "select") {

            }

            element.select2(settings);
        });
        return this;
    };

})(jQuery);