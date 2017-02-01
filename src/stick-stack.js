(function() {
    $.fn.stickStack = function(args) {
        var defaultOptions = {
            top: 0,
            margin: 0,
            zIndex: 10,
            $container: $(this)
        };
        var override = (typeof args === 'object') ? args : { el: args };
        var options = $.extend({}, defaultOptions, override);

        $(options.el).each(function() {

            var $el = $(this);
            var cachedCss = null;
            var $parent = $el.parent();

            $(window).scroll(function() {

                var parentOffset = $parent.offset();
                var containerTop = options.$container.scrollTop();
                var scrollMin = parentOffset.top - options.top;

                if (containerTop < scrollMin) {
                    $el.attr('style', '');
                    $el.siblings('.stickplaceholder').hide();
                    return;
                }

                if (cachedCss !== null) {
                    $el.attr('style', cachedCss);
                    $el.siblings('.stickplaceholder').show();
                    return;
                }

                var horizontalMargin = parseInt($el.css('margin-left')) + parseInt($el.css('margin-right'));

                var css = {
                    'top': options.top,
                    'position': 'fixed',
                    'margin': options.margin,
                    'z-index': options.zIndex,
                    'width': ($el.outerWidth() + horizontalMargin) + 'px'
                };

                $el.css(css);
                cachedCss = $el.attr('style');
                //We'll clone the current element and add it to its parent to occupy the same size
                //So making stick element fixed will not change the window scroll
                var $placeholder = $('<div class="stickplaceholder clearfix"></div>')
                    .css('height', $el.innerHeight() + 'px');

                $parent.prepend($placeholder);
            });
        });
    };
})();
