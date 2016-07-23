$.fn.scrollFix = function() {
    "use strict";
    /*
     * jQuery plugin to fix an element at the top of the page as the
     * window scrolls past it. This borrows heavily from the bootstrap
     * v1 documentation page (and is probably superseeded by the affix
     * module.
     *
     * Assumes the following html structure:
     *   <div class="scroll-fix">
     *     <div>
     *       {content}
     */

    var $scrollFix = this; // element to fix in place

    // Ensure that ".scroll-fix" and ".scroll-fix div" are the same
    // height. This stops the page from jumping around when we fix
    // ".scroll-fix div" in place
    $scrollFix.height( $scrollFix.children('div').height() );

    $(window).on('scroll', processScroll);

    function processScroll() {
        var scrollTop = $(window).scrollTop(); // body position at top of window
        var elemTop = $scrollFix.offset().top; // position of elem from top of body
        var isFixed = $scrollFix.data('isFixed');

        if (scrollTop >= elemTop && !isFixed) {
            $scrollFix.data('isFixed', 1);
            $scrollFix.addClass('scroll-fix-fixed');
        } else if (scrollTop <= elemTop && isFixed) {
            $scrollFix.data('isFixed', 0);
            $scrollFix.removeClass('scroll-fix-fixed');
        }
    }

    return this;
};

$.fn.expand = function() {
    "use strict";
    /*
     * jQuery plugin to toggle the class of a span contained within a
     * link. Makes for nice effects in what would otherwise be
     * ridiculously long paragraphs.
     *
     * Assumes the following html structure:
     *   <span class="expand">
     *     This text is always shown
     *     <span>This text is toggled</span>
     *   </span>
     */
    this.click(function(event) {
        event.preventDefault();

        $(this)
            .toggleClass( "active" )
            .children( "span" ).toggle();
    });

    return this;
};

$( ".scroll-fix" ).each(function() {
    $(this).scrollFix();
});

$( ".expand" ).each(function() {
    $(this).expand();
});


// Google analytics
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
try {
    var pageTracker = _gat._getTracker("UA-11589692-2");
    pageTracker._trackPageview();
} catch(err) {}
