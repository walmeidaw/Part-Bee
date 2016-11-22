$.fn.slidefy = function(options) {
    var settings = $.extend({ speed: 1000, interval: 4000 }, options );

    $(this).each(function(index, root) {
        $(root).addClass('slidefy');
        var children = $(root).find('img');
        if($(children).length > 1){
            var item = $(children).first();
            $(item).animate({
                opacity: 0
            }, settings.speed, function() {
                $(item).appendTo(root);
                $(item).animate({
                    opacity: 1
                }, settings.interval, function(){
                    $(root).slidefy({
                        speed: settings.speed,
                        interval: settings.interval
                    });
                });
            });
        }
    });
};
