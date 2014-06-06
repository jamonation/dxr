/* jshint devel:true, esnext: true */
/* globals jQuery: true, $ */

$(function() {
    'use strict';
    $('.note').hover(
        function() {
            // on mouse over
            var self = $(this);
            // make the container for all annotation icons on a line visible
            self.parent().css('z-index', 5);
            self.parent().find('.aset-title').css('visibility', 'hidden');
            self.next().css('visibility', 'visible');
        },
        function() {
            // on mouse out
            var self = $(this);
            //if div is not clicked, hide it, otherwise leave as is
            if (self.parent().hasClass('visible') === false) {
                self.parent().css('z-index', 0);
                self.next().css('visibility', 'hidden');
            }
        }
    );

    $('.note').click(function() {
        var self = $(this);
        //clear all other annotations first
        self.parent().find('.aset-title').removeClass('visible');
	    self.parent().find('.aset-title').css('visibility', 'hidden');
        //raise parent container annotation-set above code line numbers and code lines table
        //this ensures that code lines with multiple annotation icons are visible
        //without affecting the layout and flow of the adjacent code table
        self.parent().css('z-index', 5);
        self.parent().addClass('visible');
        //make the annotation div visible
        self.next().css('visibility', 'visible');
        self.next().addClass('visible');
    });

    $('.aset-title-close').click(function() {
        //hide a visible annotation message and put parent annotation-set under other elements again
        var self = $(this);
        self.parent().removeClass('visible');
        self.parent().css('visibility', 'hidden');
        self.parent().parent().css('z-index', 0);
        self.parent().parent().removeClass('visible');
    });

});
