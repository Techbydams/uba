/*
	jQuery autoComplete v1.0.7
    Copyright (c) 2014 Simon Steinberger / Pixabay
    GitHub: https://github.com/Pixabay/jQuery-autoComplete
	License: http://www.opensource.org/licenses/mit-license.php
*/

(function($) {
    $.fn.autoComplete = function(options) {

        var errorMessageString = 'No Results Found';
        var o = $.extend({}, $.fn.autoComplete.defaults, options);

        // public methods
        if (typeof options == 'string') {
            this.each(function() {
                var that = $(this);
                if (options == 'destroy') {
                    $(window).off('resize.autocomplete', that.updateSC);
                    that.off('blur.autocomplete focus.autocomplete keydown.autocomplete keyup.autocomplete');
                    if (that.data('autocomplete'))
                        that.attr('autocomplete', that.data('autocomplete'));
                    else
                        that.removeAttr('autocomplete');
                    $(that.data('sc')).remove();
                    that.removeData('sc').removeData('autocomplete');
                }
            });
            return this;
        }

        return this.each(function() {
            var that = $(this);
            var myProfDropdownName = that.siblings('div').find('select').attr('name');
            if (typeof myProfDropdownName == typeof undefined) {
                myProfDropdownName = that.siblings('select').attr('name');
            }

            // sc = 'suggestions container'
            that.sc = $('<div class="autocomplete-suggestions ' + o.menuClass + '"></div>');

            if (myProfDropdownName != 'undefined' &&
                (myProfDropdownName == 'PageMasterFG.SELECTED_CUST_ID__' || myProfDropdownName == 'PageMasterFG.SELECTED_CTX_ID__' ||
                    myProfDropdownName == 'PageMasterFG.SELECTED_DIV_ID__' || myProfDropdownName == 'DashboardFG.DIV_ID_SELECT' ||
                    myProfDropdownName == 'DashboardFG.CUST_ID_SELECT' || myProfDropdownName == 'PageMasterFG.DIV_ID_SELECT' ||
                    myProfDropdownName == 'DashboardAutoAlignFG.DIV_ID_SELECT' || myProfDropdownName == 'DashboardAutoAlignFG.CUST_ID_SELECT' ||
                    myProfDropdownName == 'DashboardAutoAlignFG.SELECTED_CTX_ID__' || myProfDropdownName == 'DashboardFG.SELECTED_CTX_ID__')) {
                that.sc.css('z-index', '6001');
            }

            that.data('sc', that.sc).data('autocomplete', that.attr('autocomplete'));
            that.attr('autocomplete', 'off');
            that.cache = {};
            that.last_val = '';

            that.updateSC = function(resize, next) {
                that.sc.css({
                    top: that.offset().top + that.outerHeight(),
                    left: that.offset().left,
                    width: that.outerWidth()
                });


                if (!resize) {
                    that.sc.show();
                    /* To hide Type to search in drop down value */
                    jQuery(that.sc).children().each(function() {
                        var html_org = jQuery(this).text();
                        /* for bill payments 
                        if(html_org == 'Type to search'){
                        	jQuery(this).hide();
                        } */
                        if (html_org == 'Type to search' || html_org == 'Select' || html_org == 'Tapez pour rechercher') {
                            jQuery(this).hide();
                        }
                    });
                    if (!that.sc.maxHeight) that.sc.maxHeight = parseInt(that.sc.css('max-height'));
                    if (!that.sc.suggestionHeight) that.sc.suggestionHeight = $('.autocomplete-suggestion', that.sc).first().outerHeight();
                    if (that.sc.suggestionHeight)
                        if (!next) that.sc.scrollTop(0);
                        else {
                            var scrTop = that.sc.scrollTop(),
                                selTop = next.offset().top - that.sc.offset().top;
                            if (selTop + that.sc.suggestionHeight - that.sc.maxHeight > 0)
                                that.sc.scrollTop(selTop + that.sc.suggestionHeight + scrTop - that.sc.maxHeight);
                            else if (selTop < 0)
                                that.sc.scrollTop(selTop + scrTop);
                        }
                }
            }
            $(window).on('resize.autocomplete', that.updateSC);

            that.sc.appendTo('body');

            that.sc.on('mouseleave', '.autocomplete-suggestion', function() {
                $('.autocomplete-suggestion.selected').removeClass('selected');
            });

            that.sc.on('mouseenter', '.autocomplete-suggestion', function() {
                $('.autocomplete-suggestion.selected').removeClass('selected');
                $(this).addClass('selected');
            });

            that.sc.on('mousedown', '.autocomplete-suggestion', function(event) {
                var item = $(this),
                    v = item.data('val');

                /* for multiple transaction - to stop dropdown value resetting on click of out side*/
                that.attr('data-lastVal', v);


                /*Added a Global Variable to store the Event when the Suggestion in dropdown is clicked */
                autoSuggetionEvent = item.context;
                autoSuggetionEventSearchPanelID = that.context;
                if ((v || item.hasClass('autocomplete-suggestion')) && v != errorMessageString) { // else outside click
                    that.val(v);
                    o.onSelect(event, v, item);
                    that.sc.hide();
                } else if (v != errorMessageString) { /*Added condition to hide the No record found text */
                    that.sc.hide();
                }

                return false;
            });

            that.on('blur.autocomplete', function() {
                try {
                    over_sb = $('.autocomplete-suggestions:hover').length;
                } catch (e) {
                    over_sb = 0;
                } // IE7 fix :hover
                if (!over_sb) {
                    that.last_val = that.val();
                    if (!that.last_val) {
                        that.val($(this).attr('data-lastVal'));
                    } else {
                        /* for  removing unwanted data entered in combo box*/
                        var flag = 0;
                        jQuery(that.sc).children().each(function() {
                            var html_org = jQuery(this).text();
                            if (html_org == that.last_val) {
                                flag = 1;
                                return false;
                            }
                        });

                        if (flag == 0) {
                            that.val($(this).attr('data-lastVal'));
                        }
                    }
                    that.sc.hide();
                    setTimeout(function() {
                        that.sc.hide();
                    }, 350); // hide suggestions on fast input
                } else if (!that.is(':focus')) {
                    if (jQuery(that.sc).text() == 'No Results Found') {
                        that.val($(this).attr('data-lastVal'));
                        that.sc.hide();
                    } else {
                        setTimeout(function() {
                            that.focus();
                        }, 20);
                    }
                }
            });

            if (!o.minChars) that.on('focus.autocomplete', function() {

                $(this).attr('data-lastVal', this.value);
                this.value = "";
                that.last_val = '\n';
                that.trigger('keyup.autocomplete');
            });

            function suggest(data) {
                var val = that.val();
                that.cache[val] = data;
                if (data.length && val.length >= o.minChars) {
                    var s = '';
                    for (var i = 0; i < data.length; i++) s += o.renderItem(data[i], val);
                    that.sc.html(s);
                    that.updateSC(0);
                } else {
                    var errorMessage = '<div class="autocomplete-suggestion errorDropdownResults" data-val="' + errorMessageString + '">' + errorMessageString + '</div>';
                    that.sc.html(errorMessage);
                    that.sc.show();
                    /*that.sc.hide();*/
                }


            }

            that.on('keydown.autocomplete', function(e) {
                // down (40), up (38)
                if ((e.which == 40 || e.which == 38) && that.sc.html()) {
                    var next, sel = $('.autocomplete-suggestion.selected', that.sc);
                    if (!sel.length) {
                        next = (e.which == 40) ? $('.autocomplete-suggestion', that.sc).first() : $('.autocomplete-suggestion', that.sc).last();
                        that.val(next.addClass('selected').data('val'));
                    } else {
                        next = (e.which == 40) ? sel.next('.autocomplete-suggestion') : sel.prev('.autocomplete-suggestion');
                        if (next.length) {
                            sel.removeClass('selected');
                            that.val(next.addClass('selected').data('val'));
                        } else {
                            sel.removeClass('selected');
                            that.val(that.last_val);
                            next = 0;
                        }
                    }
                    that.updateSC(0, next);
                    return false;
                }
                // esc
                else if (e.which == 27) that.val(that.last_val).sc.hide();
                // enter or tab
                else if (e.which == 13 || e.which == 9) {
                    var sel = $('.autocomplete-suggestion.selected', that.sc);
                    if (sel.length && that.sc.is(':visible') && sel != 'No Results Found') {
                        o.onSelect(e, sel.data('val'), sel);
                        setTimeout(function() {
                            that.sc.hide();
                        }, 20);
                    }
                }
            });

            that.on('keyup.autocomplete', function(e) {
                if (!~$.inArray(e.which, [13, 27, 35, 36, 37, 38, 39, 40])) {
                    var val = that.val();
                    if (val.length >= o.minChars) {
                        if (val != that.last_val) {
                            that.last_val = val;
                            clearTimeout(that.timer);
                            if (o.cache) {
                                if (val in that.cache) {
                                    suggest(that.cache[val]);
                                    return;
                                }
                                // no requests if previous suggestions were empty
                                for (var i = 1; i < val.length - o.minChars; i++) {
                                    var part = val.slice(0, val.length - i);
                                    if (part in that.cache && !that.cache[part].length) {
                                        suggest([]);
                                        return;
                                    }
                                }
                            }
                            that.timer = setTimeout(function() {
                                o.source(val, suggest)
                            }, o.delay);
                        }
                    } else {
                        that.last_val = val;
                        that.sc.hide();
                    }
                }
            });
            /*mouse event on dropdown
            that.on('mouseup.autocomplete', function(e){
            	var current_val = jQuery(this)[0].value;
            	jQuery(this)[0].value = '';
            	jQuery(this).keyup();
            	jQuery(this)[0].value = current_val;
            	jQuery(this).select();
            	console.log("mouse event");
            });*/
        });
    }

    $.fn.autoComplete.defaults = {
        source: 0,
        minChars: 3,
        delay: 150,
        cache: 1,
        menuClass: '',
        renderItem: function(item, search) {
            // escape special characters
            search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
            return '<div class="autocomplete-suggestion" data-val="' + item + '">' + item.replace(re, "<b>$1</b>") + '</div>';
        },
        onSelect: function(e, term, item) {}
    };
}(jQuery));