(function () {
    $.fn.stickStack = function (args) {
        var $window = $(window);
        var defaultOptions = {
            top: 0,
            margin: 0,
            zIndex: 10,
            containerSelector: null
        };
        var override = (typeof args === 'object') ? args : {el: args};
        var options = $.extend({}, defaultOptions, override);

        $(options.el).each(function () {

            var $el = $(this);
            var cachedCss = null;
            var $placeholder = null;
            var $parent = options.containerSelector == null ? $el.parent() : $el.closest(options.containerSelector);

            var applyStickStack = function () {
                var parentOffset = $parent.offset();
                var scrollTop = $window.scrollTop();
                var scrollMin = parentOffset.top - options.top;
                var scrollMax = scrollMin + $parent.outerHeight() - $el.outerHeight();

                if (scrollTop < scrollMin || scrollTop > scrollMax) {
                    $el.attr('style', '');
                    if($placeholder) {
                        $placeholder.hide();    
                    }
                    return;
                }

                if (cachedCss !== null) {
                    $el.attr('style', cachedCss);
                    $placeholder.css('height', $el.innerHeight());
                    $placeholder.show();
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
                var $placeholderDiv = $('<div class="stickplaceholder clearfix"></div>')
                    .css('height', $el.innerHeight() + 'px');

                $parent.prepend($placeholderDiv);
                $placeholder = $('.stickplaceholder', $parent);
            };

            $window.scroll(applyStickStack);
            applyStickStack();
        });
    };
})();
