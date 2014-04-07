/* jshint devel:true, esnext: true */
/* globals jQuery: true, $ */

$(function() {
    'use strict';
    $('.annotation-set').hover(
        function() {
            // on mouse over
            var self = $(this);
            $('.annotation-set').css('z-index', 0);
            self.css('z-index', 5);
        },
        function() {
            // on mouse out
            var self = $(this);
            //if div is not clicked, hide it, otherwise leave as is
            if (self.hasClass('visible') === false) {
                $(this).css('z-index', 0);
            }
        }
    );

    $('.note').click(function() {
        var self = $(this);
        //clear all other annotations first
        $('.aset-title').removeClass('visible');
        //make self visible
        self.parent().addClass('visible');
        //raise parent container annotation-set above code line numbers and code lines table
        //this ensures that code lines with multiple annotation icons are visible
        //without affecting the layout and flow of the adjacent code table
        self.parent().css('z-index', 5);
    });

    $('.aset-title-close').click(function() {
        //hide a visible annotation message and put parent annotation-set under other elements again
        var self = $(this);
        self.parent().parent().removeClass('visible');
        self.parent().parent().css('z-index', 0);
    });

});