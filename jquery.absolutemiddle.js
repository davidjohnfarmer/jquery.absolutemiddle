/*! AbsoluteMiddle for JQuery v1.00 BETA
 * http://www.davidjohnfarmer.co.uk/jquery-plugins/absolutemiddle/
 * Do not remove any of this notice (you're welcome to use this code in commercial projects)
 * Copyright (c) 2016 David John Farmer www.davidjohnfarmer.co.uk 
 * Licensed under the MIT license */

(function ( $ ) {

    $.fn.absoluteMiddle = function(options) {
 
        // DEFAULT OPTIONS 
        var settings = $.extend({
            pixelmod: 0 
        }, options );

        var gettop = function(obj) {
        	var myheight = $(obj).outerHeight();
        	var parentheight = $(obj).parent().innerHeight();
        	var settop = (parentheight/2)-(myheight/2);

        	if (settings.pixelmod != 0) {
        		settop += settings.pixelmod; 
        	}

        	return settop;
        }


        return this.each(function(i,obj) {

        	var settop = gettop(obj);
        	$(obj).css('top',settop); 

			$(window).resize(function() {
                var settop = gettop(obj);
                $(obj).css('top',settop); 
            });
     
        });

    };

}( jQuery ));