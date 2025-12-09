/*
 * Project          : Decorum
 * Module           : mega-menu
 * Source filename  : mega-menu.js
 * Description      : Mega menu related scripts.
 * Author           : Jaison, Ushalatha, Prasanth, Santhosh, Shruthi, Nikhil
 * Copyright        : Copyright (C) 2015, Infosys Limited
 *                    Written under contract by Robosoft Technologies Pvt. Ltd.
 */


(function($) {

    'use strict';

    /**
     * 
     * Initializing the mega menu
     */
    //alert('document::mega-menu ');
    // alert('Nmega-Menu:: elements:: '+document.getElementById('ml-menu'));





    var menuTop = 0;
    var fromMenu = "false";
    $(document).ready(function() {

        jQuery(".menuBarIcon").attr("style", "pointer-events:none;color:darkgrey");
        var menuEl = $("#ml-menu")[0],
            mlmenu = new MLMenu(menuEl, {
                backCtrl: false, // show back button
            });

        /**
         * To set appropriate margin for the menu items 
         * when menu items are clicked.
         */
        $(".menu__link").click(function() {

            //jQuery(".menuBarIcon").attr("style","pointer-events:none;color:darkgrey");
            fromMenu = "true";
            var hasdDtaSubmenu = $(this).attr("data-submenu");
            var numberOfBreadCrumbs = ($(".menu__breadcrumbs a").length) + 1;

            if (typeof hasdDtaSubmenu !== 'undefined' && hasdDtaSubmenu !== false) {
                $(".main-menu-btn-wrapper").parent().css("display", "block"); //show Main menu button from step 2

                var breadcrumbTop = jQuery(".menu__breadcrumbs").offset().top;
                if (numberOfBreadCrumbs === 2) {
                    menuTop = 30;
                } else if (numberOfBreadCrumbs === 3) {
                    //menuTop = 79;
                    //    menuTop = 55;
                    menuTop = parseInt(breadcrumbTop) - 7;
                } else if (numberOfBreadCrumbs === 4) {
                    //menuTop = 127;
                    //  menuTop = 103;
                    menuTop = parseInt(breadcrumbTop) + 41;
                } else if (numberOfBreadCrumbs === 5) {
                    //menuTop = 174;
                    //      menuTop = 150;      
                    //Fix done for RTC Defect: 205627 : Changes done to remove extra spacing for the sub menu. 
                    //menuTop = parseInt(breadcrumbTop)+102;
                    menuTop = parseInt(breadcrumbTop) + 89;
                    /*if(menuTop >174)
        			{
        			menuTop=150;
        			}*/
                }
                var marginTopValue = menuTop + "px";
                $(".menu__wrap").css("margin-top", marginTopValue);
                $("#ml-menu").scrollTop(0);
            } else {
                jQuery(".menuBarIcon").attr("style", "pointer-events:none;color:darkgrey");
            }

            /**
             * To add bottom border for the second breadcrumb, only when
             * total number of breadcrumbs is 4.
             */
            if (numberOfBreadCrumbs >= 4) {
                $(".menu__breadcrumbs a:nth-child(2)").addClass("second-breadcrumb");
                $(".menu__breadcrumbs a:nth-child(3)").addClass("third-breadcrumb");
                if ($(".second-breadcrumb") != 'undefined') {
                    $(".second-breadcrumb").attr('title', $(".second-breadcrumb").text());
                }
                if ($(".third-breadcrumb") != 'undefined') {
                    $(".third-breadcrumb").attr('title', $(".third-breadcrumb").text());
                }
            } else {
                $(".menu__breadcrumbs a:nth-child(2)").removeClass("second-breadcrumb");
            }

        });

        /**
         * To set appropriate margin for the menu items 
         * when breadcrumb items are clicked. 
         */
        $(".menu__breadcrumbs").click(function() {
            var breadcrumbCount = $(".menu__breadcrumbs a").length;
            var breadcrumbTop = jQuery(".menu__breadcrumbs").offset().top;
            $(".menu__breadcrumbs a:nth-child(2)").removeClass("second-breadcrumb");

            if (breadcrumbCount === 1) {
                /* **menuTop = 10;*/
                menuTop = -25;
            } else if (breadcrumbCount === 2) {
                //menuTop = 79;
                //   menuTop = 55;
                menuTop = parseInt(breadcrumbTop) - 7;
            } else if (breadcrumbCount === 3) {
                //                menuTop = 126;
                //		  menuTop = 102;
                menuTop = parseInt(breadcrumbTop) + 41;
            }
            var marginTopValue = menuTop + "px";
            $(".menu__wrap").css("margin-top", marginTopValue);
        });

        /**
         * 1. Adding log to the menu.
         * 2. As the breadcrum items are added dynamically by the plugin, 
         * the Main menu string and icon is added here.
         */
        //$("#ml-menu").prepend("<img class='logo' alt='logo' src='resources/images/menu_logo.png'>");
        /*$("#ml-menu").prepend("<img class='logo' alt='logo' src='"+imagePath+"/menu_logo.png'>");*/
        $(".container-menu").prepend("<span class='burgermenu_close'></span>");
        $("#ml-menu").prepend("<div class='burgermenu_heading'><span class='burgermenu_heading_sub'>UBA INTERNET BANKING</span></div>");
        $(".menu__breadcrumbs").find("a:first-child").html("<span class='main-menu-btn-wrapper'><span class='icon-menu'></span><span class='main-menu-string'> " + getMessage("MainMenu") + "</span></span>");
        $(".menu__breadcrumbs").find("a:first-child").addClass("main-menu-btn-link");
        if ($(".main-menu-string") != 'undefined') {
            $(".main-menu-string").attr('title', $(".main-menu-string").text());
        }

        /*
         * Hide menu button for step 1
         * 
         */
        $(".menu__breadcrumbs").find("a:first-child").click(function() {
            //Fix for call id: 816733 Starts
            var breadcrumbCount = $(".menu__breadcrumbs a").length;
            if (breadcrumbCount === 1) {
                $(".main-menu-btn-wrapper").parent().css("display", "none");
            }
            //Fix for call id: 816733 Ends            
        });

        function preSelectMenuItems() {
            var
                identifier = "decorum_",
                linksCount = 0,
                proceed = 0,
                dataMenu = '',
                parentMenuSelector = $("div.menu__wrap"),
                currentElement = $(".menu__wrap .menu__link.active");

            if ($('.menu__wrap .menu__link').hasClass('active')) {
                do {
                    fromMenu = "true";
                    currentElement.addClass(identifier + linksCount);
                    linksCount++;
                    dataMenu = currentElement.parents("ul.menu__level").attr("data-menu");
                    // console.log(dataMenu);
                    if (dataMenu == 'main' || typeof dataMenu == typeof undefined) {
                        proceed = 0;
                    } else {
                        currentElement = parentMenuSelector.find("li a[data-submenu='" + dataMenu + "']").first();
                        proceed = 1;
                    }
                } while (proceed);

                var i = linksCount - 1;
                /* if((i == 0) && ($("." + identifier + i).hasClass('more-item'))) {
                     $(".menu__wrap ul .icon-profile-dropdown").toggleClass("rotate");
                     $('.menu__wrap ul .more-item').slideToggle();
                 }*/

                /*Code to set the time out based on the browser*/
                var timeOut = '';
                // var ua = window.navigator.userAgent;
                //var msie = ua.indexOf("MSIE ");

                var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
                if (isIE11) {
                    timeOut = '2800';
                } else {
                    timeOut = '1500';
                }

                var loopObjects = function() {
                    setTimeout(function() {
                        jQuery(".menuBarIcon").attr("style", "pointer-events:none;color:darkgrey");
                        if ((i == 0) && ($("." + identifier + i).hasClass('more-item'))) {
                            $(".menu__wrap ul .icon-profile-dropdown").toggleClass("rotate");
                            $('.menu__wrap ul .more-item').slideToggle();
                            $('.menu__wrap ul .more-item').css('display', 'block');
                        }
                        if (i > 0) {
                            // console.log(i , $("." + identifier + i).html());
                            //Start-defect 216841-issue with safari browser in burger menu
                            if ((navigator.userAgent.indexOf('Safari') != -1) && (navigator.userAgent.indexOf('Chrome') == -1)) {
                                var obj = $("." + identifier + i)[0];
                                var evObj = document.createEvent('MouseEvents');
                                evObj.initMouseEvent('click', true, true, window);
                                obj.dispatchEvent(evObj);
                            } else {
                                $("." + identifier + i)[0].click();
                            }
                            //end-defect 216841-issue with safari browser in burger menu
                            i--;
                            loopObjects();
                        } else {
                            for (i = 0; i < linksCount; i++) {
                                $(".menu__link").removeClass(identifier + i);
                            }
                        }
                        if (i == linksCount) {
                            jQuery(".menuBarIcon").removeAttr("style");
                            console.log("Removed the style  >>>>>>" + i)
                        }
                    }, timeOut);
                };
                loopObjects();
            }
        }

        preSelectMenuItems();
        if (fromMenu == "false") {
            jQuery(".menuBarIcon").removeAttr("style");
        }

        /*
         * Mega Menu start
         */

        /*
            $("#menu-button").click(function (event) {
                $(this).attr("aria-expanded", "true");
                event.stopPropagation();
                $(".mask").css({
                    "display": "block",
                    "z-index": "4"
                });
                $('html').addClass('hide-vertical-scroll');
                $(".dashboard-menu-container").addClass("expanded");
            }); */

        /*
         * Mega Menu end
         */

        /*
         * Toggle Effect for more items in mega-menu
         */
        /*
        $('.more-item').hide();
        $('.show_button').click(function() {
            $(".icon-profile-dropdown").toggleClass("rotate");
            $('.more-item').slideToggle();
        });

        $('.dropdown-icon').click(function(event) {
            event.stopPropagation();
            $(".show_button").click();
        });
	*/
        /**
         * Menu start
         */

        /*
         * Collapse mega menu on pressing esc key
         */
        $(document).on('keyup', function(theEvent) {
            if (theEvent.which === 27) //esc key pressed
            {
                var isMegaMenuOpen = $(".dashboard-menu-container.expanded").length;
                if (isMegaMenuOpen) {
                    $(".mask").click();
                }
            }
        });


        /**
         * Menu end
         */
    });

})(jQuery);