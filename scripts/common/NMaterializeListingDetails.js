//Function will be called when user selects any option from combo box list
function postListingDetailRecord(obj) {
    var post = "POST";
    //get the selected combo box value
    var selectedValue = obj.options[obj.selectedIndex].value;
    var intIndexOfMatch = selectedValue.indexOf(" ");
    while (intIndexOfMatch != -1) {
        selectedValue = selectedValue.replace(" ", "%", selectedValue);
        intIndexOfMatch = selectedValue.indexOf(" ");
    }
    document.forms[0].method = post;
    document.forms[0].action = selectedValue;
    document.forms[0].submit()
}

//Script to show/hide Menu options on mouse out
function hidePullDownMenu(element) {
    //Check for Browser type
    var isIEBrowser = navigator.appName.indexOf("Microsoft") != -1;
    // Get the elementValue
    var elementVal = feba.domManipulator.find(feba.domManipulator.getElement(element), ".menuChoices>ul");

    // The below code added to avoid blinking of pull down menu in IE browser
    if (isIEBrowser) {
        //Get the event target, ie. the element the mouse moved onto
        var eventTarget = window.event;
        // In the layer, we're still not sure if the mouse left the layer or entered a link within the layer. 
        // Therefore we're going to check the relatedTarget/toElement of the event, ie. the element the mouse moved to.
        var relatedTarget = eventTarget.toElement;
        // check if the releatedTarget is of Type ('A','LI','UL')
        // If not 'A','LI','UL' then hide the pull down menu
        if (null != relatedTarget) {
            if (relatedTarget.nodeName != 'A' && relatedTarget.nodeName != 'LI' &&
                relatedTarget.nodeName != 'UL') {
                elementVal[0].style.visibility = 'hidden';
            }
        } else {
            elementVal[0].style.visibility = 'hidden';
        }
    } else {
        elementVal[0].style.visibility = 'hidden';
    }
}

//Script to show Menu options on mouse over
function showPullDownMenu(element, event, eventType) {
    // Get the elementValue
    var elementVal = feba.domManipulator.find(feba.domManipulator.getElement(element), ".menuChoices>ul");

    if ("onmouseout" == eventType) {
        //Show the pull down menu
        elementVal[0].style.visibility = 'visible';
    } else {
        //eventType is onClick		
        feba.domManipulator.closeActivePulldown(event);
        feba.domManipulator.stopPropagation(event);
        feba.domManipulator.stopImmediatePropagation(event);

        // Workaround to solve issues due to stopping bubbling above.
        feba.domManipulator.trigger(feba.domManipulator.getElement("body"), "click");

        //Show the pull down menu
        elementVal[0].style.visibility = 'visible';

        feba.activePulldown = element;
        feba.domManipulator.bind(feba.domManipulator.getElement(document), "click.pulldown", undefined, feba.domManipulator.closeActivePulldown);
    }
}
//function will close the active pulldown on Click of Menu Options
function closeActivePullDownOnClick(event) {
    //Close Active pulldown
    feba.domManipulator.closeActivePulldown(event);
}

// Handling for EBUX 3 pulldown: Handles display and closing of pulldown in click case.
function controlPullDownMenu(element, event, closeEventType) {
    var domMan = feba.domManipulator,
        element = domMan.parent(element), // Get the div with .hasPulldownMenu
        elementVal = domMan.find(domMan.getElement(element), ".menuChoices");
    //Added for nextgen4 details pulldown issue
    var elementForUiDisplay = element;

    // Added to scroll the pulldown contents to top when the user clicks on pulldown
    jQuery('.menuChoices').scrollTop(0);

    if (jQuery(element).hasClass('nextGenDetailsPagePulldownHolderCol')) {
        elementForUiDisplay = jQuery(element).children()[0];
    }
    if (jQuery('.dashboardSection').length > 0 && jQuery('.nextGenDetailsPagePulldownHolder').find(element).length > 0) {

        var groupletIdVar = "";
        var elementidentifierVar = jQuery(element).attr('id');
        if (elementidentifierVar && elementidentifierVar.indexOf(':') != -1) {
            var elementidentifierVar = elementidentifierVar.split(":");
            groupletId = elementidentifierVar[0];
        }
        elementForUiDisplay = jQuery('#' + groupletId).find('.hasNextGenPulldown');
    }
    if (jQuery('.dashboardSection').length > 0 && jQuery(elementForUiDisplay).hasClass('hasNextGenPulldown')) {
        var groupletId = "";
        var elementidentifier = jQuery(elementForUiDisplay).attr('id');
        if (elementidentifier && elementidentifier.indexOf(':') != -1) {
            var gropIdElement = elementidentifier.split(":");
            groupletId = gropIdElement[0];
        }
        jQuery('#' + groupletId).addClass('noOverflow');
        var leftVal = jQuery('#' + groupletId).parent().parent().offset().left;

        if (leftVal < 250) {
            jQuery(elementForUiDisplay).find('.menuChoices').addClass("menuDisplayLeft");
        } else {
            jQuery(elementForUiDisplay).find('.menuChoices').removeClass("menuDisplayLeft");
        }
    } else if (jQuery('.dashboardSection').length == 0 && jQuery(elementForUiDisplay).hasClass('hasNextGenPulldown')) {
        var groupletId1 = "";
        var elementidentifier = jQuery(elementForUiDisplay).attr('id');
        if (elementidentifier && elementidentifier.indexOf(':') != -1) {
            var gropIdElement1 = elementidentifier.split(":");
            groupletId1 = gropIdElement1[0];
        }
        if (viewport().width < 900 && viewport().width > 639) {

            var parElement = jQuery('#' + groupletId1).parent().parent().parent();

            if (jQuery(parElement).hasClass('container-nxtGenxtrasmall')) {
                var leftVal = jQuery('#' + groupletId1).parent().parent().offset().left;

                if (leftVal < 250) {
                    jQuery(elementForUiDisplay).find('.menuChoices').addClass("menuDisplayLeft");
                } else {
                    jQuery(elementForUiDisplay).find('.menuChoices').removeClass("menuDisplayLeft");
                }
                jQuery(parElement).css('position', 'inherit');
            }
        } else {
            jQuery(elementForUiDisplay).find('.menuChoices').removeClass("menuDisplayLeft");
        }
    }


    //Added the code for Showing the pulldown menu at top when the last pull down is clicked on Credit Card Widget.
    if (jQuery(elementVal[0]).attr("id") == "CorporateUserDashboardUX5_WCC__1:menuchoices2") {
        jQuery(elementVal[0]).css("top", "-65px");
        //resizeUX3scroll();
    }

    if (jQuery(elementVal[0]).attr("id") == "RetailUserDashboardUX5_WCC__1:menuchoices2") {
        jQuery(elementVal[0]).css("top", "-65px");
        //resizeUX3scroll();
    }
    if ((jQuery(elementVal[0]).attr("id") == "RetailUserDashboardUX5_WAC85__1:menuchoices4") || (jQuery(elementVal[0]).attr("id") == "RetailUserDashboardUX5_WAC85__1:menuchoices9") || (jQuery(elementVal[0]).attr("id") == "RetailUserDashboardUX5_WAC85__1:menuchoices14")) {
        jQuery(elementVal[0]).css("top", "-45px");

    }
    if ((jQuery(elementVal[0]).attr("id") == "CorporateUserDashboardUX5_WAC85__1:menuchoices4") || (jQuery(elementVal[0]).attr("id") == "CorporateUserDashboardUX5_WAC85__1:menuchoices9") || (jQuery(elementVal[0]).attr("id") == "CorporateUserDashboardUX5_WAC85__1:menuchoices14")) {
        jQuery(elementVal[0]).css("top", "-45px");

    }
    if ((jQuery(elementVal[0]).attr("id") == "PageConfigurationMaster_3CMANTW__1:menuchoices4") || (jQuery(elementVal[0]).attr("id") == "PageConfigurationMaster_3CMANTW__1:menuchoices9") || (jQuery(elementVal[0]).attr("id") == "PageConfigurationMaster_3CMANTW__1:menuchoices14")) {
        jQuery(elementVal[0]).css("top", "-45px");

    }
    domMan.showElement(elementVal);

    if (closeEventType === "onclick") {
        feba.js.common.documentClickWatcher.register(element, {
            callBack: function(config, e) {
                if (domMan.getMatchedElementCount(domMan.hasElementsMatching(element, e.target)) === 0) {
                    feba.js.common.documentClickWatcher.deregister(element);
                    feba.domManipulator.hideElement(feba.domManipulator.find(feba.domManipulator.getElement(element), ".menuChoices"));
                    var elementForUiDisplay = element;
                    if (jQuery(element).hasClass('nextGenDetailsPagePulldownHolderCol')) {
                        elementForUiDisplay = jQuery(element).children()[0];
                    }
                    if (jQuery(elementForUiDisplay).hasClass('hasNextGenPulldown')) {
                        if (viewport().width < 900 && viewport().width > 639) {
                            var groupletId1 = "";
                            var elementidentifier = jQuery(elementForUiDisplay).attr('id');
                            if (elementidentifier && elementidentifier.indexOf(':') != -1) {
                                var gropIdElement1 = elementidentifier.split(":");
                                groupletId1 = gropIdElement1[0];
                            }
                            var parElement = jQuery('#' + groupletId1).parent().parent().parent();

                            if (jQuery('.dashboardSection').length == 0 && jQuery(parElement).hasClass('container-nxtGenxtrasmall')) {
                                console.log(jQuery(parElement).attr('id'));
                                jQuery(parElement).css('position', 'relative');
                            }
                        }
                    }
                }
            }
        });
    }
};

// Handling for EBUX 3 pulldown: Handles closing of pulldown 
function closePulldownMenu(element, closeEventType) {
    var domMan = feba.domManipulator,
        element = domMan.parents(element, ".hasPulldownMenu");

    if (closeEventType === "onclick") {
        feba.js.common.documentClickWatcher.deregister(element);
    }
    domMan.hideElement(domMan.find(domMan.getElement(element), ".menuChoices"));
};

//added new pulldown


jQuery(document).on('click', '#more9', function(e) {

    e.preventDefault();
    e.stopPropagation();
    jQuery(this).closest('tr').addClass('bg-grey').siblings().removeClass('bg-grey');
});


jQuery(document).on('click', '#more9', function(e) {

    var tst = jQuery(this).next();
    if (tst.find('.table-4').is(":hidden")) {

        jQuery.when(hideExtraMenu()).then();
        //hideExtraMenu();
        //jQuery('.table-4').hide();
        //jQuery('.table tr').removeClass('bg-grey');
    }

    e.stopPropagation();
    //jQuery(this).next('.table-4').slideToggle();

    if (tst.find('.table-4').width() > 250) {
        hideExtraMenu();
    } else {
        tst.find('.table-4').slideToggle();
        jQuery('.hide-list-1, .hide-list').removeClass('hide');
    }
    //$(this).parents('tr').addClass('selected').siblings().removeClass();
});

jQuery(document).on('click', '#view_more_action9', function(e) {
    e.preventDefault();
    e.stopPropagation();
});


jQuery(document).on('click', '#view_more_action9', function(e) {
    //alert('This onclick function forks!');
    e.stopPropagation();
    jQuery('.extra_menu').removeClass('hide');

    var x = '';
    if (jQuery(window).width() <= 640) {
        x = jQuery(window).width() - (jQuery(window).width() * .31);
    } else {
        x = jQuery(window).width() - (jQuery(window).width() * .48);
    }
    var sHtml = '';
    jQuery(this).closest('.table-4').animate({
        width: x
    }).addClass('active').removeClass('z-depth-1');
    //	jQuery('#table-4').animate({width: x}).addClass('active').removeClass('z-depth-1');

    if (navigator.userAgent.indexOf('MSIE') !== -1 ||
        navigator.appVersion.indexOf('Trident/') > 0) {
        if (BrowserDetect.version == 10 && jQuery(window).width() <= 640) {
            jQuery(this).closest('.table-4').addClass('active_ie10');
        }
    }
    /* Added for last column action pulldown to show upwards */

    if (document.getElementById("PageConfigurationMaster_WA101__1:AccountSummaryFG.ENABLE_TAB_LAND") != null) {
        tabName = document.getElementById("PageConfigurationMaster_WA101__1:AccountSummaryFG.ENABLE_TAB_LAND").value;
    }

    if (tabName == 'OPRSAV' || tabName == savTab) {

        var rowCount = jQuery('#HWListTable10072682 >tbody>tr').length;
        var vpWidth = viewport().width;

        if (parseInt(vpWidth) >= 639 && parseInt(vpWidth) <= 749) {
            if (rowCount == 5) {
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                /* For IE10 browser*/
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            } else if (rowCount > 5 && rowCount <= 9) {
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 2).find('#table-4.active').addClass('active_top');
                /* For IE10 browser*/
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            } else if (rowCount >= 10 && rowCount <= 15) {
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 2).find('#table-4.active').addClass('active_top');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 3).find('#table-4.active').addClass('active_top');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 4).find('#table-4.active').addClass('active_top');
                /* For IE10 browser*/
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 3).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            }
        } else if (parseInt(vpWidth) >= 750) {
            if (rowCount >= 5 && rowCount <= 9) {
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active').addClass('active_top');
            } else if (rowCount >= 10 && rowCount <= 15) {
                jQuery("#HWListTable10072682 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                jQuery("#HWListTable10072682 tr td:last-child").eq(jQuery('#HWListTable10072682 tr td:last-child').length - 2).find('#table-4.active').addClass('active_top');
            }
        }
    }
    if (tabName == 'OPRCUR' || tabName == currTab) {
        var rowCount = jQuery('#HWListTable10072992 >tbody>tr').length;
        var vpWidth = viewport().width;
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        if (userTypeValue == 2) {
            if (parseInt(vpWidth) >= 639 && parseInt(vpWidth) <= 749) {
                if (rowCount == 5) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount > 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active').addClass('active_top');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active').addClass('active_top');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 3).find('#table-4.active').addClass('active_top');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 4).find('#table-4.active').addClass('active_top');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 3).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                }
            } else if (parseInt(vpWidth) >= 750) {
                if (rowCount >= 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_top');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active').addClass('active_top');
                }
            }
        } else if (userTypeValue == 1) {
            if (parseInt(vpWidth) >= 639 && parseInt(vpWidth) <= 749) {
                if (rowCount == 5) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount > 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active').addClass('active_deposit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active').addClass('active_deposit');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 3).find('#table-4.active').addClass('active_deposit');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 4).find('#table-4.active').addClass('active_deposit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 3).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                }
            } else if (parseInt(vpWidth) >= 750) {
                if (rowCount >= 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072992 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                    jQuery("#HWListTable10072992 tr td:last-child").eq(jQuery('#HWListTable10072992 tr td:last-child').length - 2).find('#table-4.active').addClass('active_deposit');
                }
            }
        }
    }
    if (tabName == 'CRD' || tabName == crdTab) {
        var rowCount = jQuery('#HWListTable10072892 >tbody>tr').length;
        var vpWidth = viewport().width;

        if (parseInt(vpWidth) >= 639 && parseInt(vpWidth) <= 749) {
            if (rowCount == 10) {
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active').addClass('active_creditCard');
                /* For IE10 browser*/
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            } else if (rowCount > 10 && rowCount <= 18) {
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active').addClass('active_creditCard');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 4).find('#table-4.active').addClass('active_creditCard');
                /* For IE10 browser*/
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            } else if (rowCount >= 20 && rowCount <= 30) {
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active').addClass('active_creditCard');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 4).find('#table-4.active').addClass('active_creditCard');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 6).find('#table-4.active').addClass('active_creditCard');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 8).find('#table-4.active').addClass('active_creditCard');
                /* For IE10 browser*/
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 6).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 8).find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            }
        } else if (parseInt(vpWidth) >= 750) {
            if (rowCount >= 10 && rowCount <= 18) {
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active').addClass('active_creditCard');
            } else if (rowCount >= 20 && rowCount <= 30) {
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 2).find('#table-4.active').addClass('active_creditCard');
                jQuery("#HWListTable10072892 tr td:last-child").eq(jQuery('#HWListTable10072892 tr td:last-child').length - 4).find('#table-4.active').addClass('active_creditCard');
            }
        }
    }

    if (tabName == 'INV' || tabName == depTab) {

        var rowCount = jQuery('#HWListTable10072692 >tbody>tr').length;
        var vpWidth = viewport().width;

        if (parseInt(vpWidth) >= 639 && parseInt(vpWidth) <= 749) {
            if (rowCount == 5) {
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                /* For IE10 browser*/
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            } else if (rowCount > 5 && rowCount <= 9) {
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 2).find('#table-4.active').addClass('active_deposit');
                /* For IE10 browser*/
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            } else if (rowCount >= 10 && rowCount <= 15) {
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 2).find('#table-4.active').addClass('active_deposit');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 3).find('#table-4.active').addClass('active_deposit');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 4).find('#table-4.active').addClass('active_deposit');
                /* For IE10 browser*/
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 3).find('#table-4.active_ie10').addClass('active_iesavings');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                /* For IE10 browser*/
            }
        } else if (parseInt(vpWidth) >= 750) {
            if (rowCount >= 5 && rowCount <= 9) {
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
            } else if (rowCount >= 10 && rowCount <= 15) {
                jQuery("#HWListTable10072692 tr:last td:last-child").find('#table-4.active').addClass('active_deposit');
                jQuery("#HWListTable10072692 tr td:last-child").eq(jQuery('#HWListTable10072692 tr td:last-child').length - 2).find('#table-4.active').addClass('active_deposit');
            }
        }

    }
    if (tabName == 'OPRODA' || tabName == odaTab) {
        var rowCount = jQuery('#HWListTable10072792 >tbody>tr').length;
        var vpWidth = viewport().width;
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        if (userTypeValue == 2) {

            if (parseInt(vpWidth) >= 639 && parseInt(vpWidth) <= 749) {

                if (rowCount == 5) {
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount > 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 2).find('#table-4.active').addClass('active_cashcredit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 2).find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 3).find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 4).find('#table-4.active').addClass('active_cashcredit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 3).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                }
            } else if (parseInt(vpWidth) >= 750) {
                if (rowCount >= 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072792 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072792 tr td:last-child").eq(jQuery('#HWListTable10072792 tr td:last-child').length - 2).find('#table-4.active').addClass('active_cashcredit');
                }
            }
        }
    }
    if (tabName == 'OPRCCA' || tabName == ccaTab) {
        var rowCount = jQuery('#HWListTable10072882 >tbody>tr').length;
        var vpWidth = viewport().width;
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        if (userTypeValue == 2) {

            if (parseInt(vpWidth) >= 639 && parseInt(vpWidth) <= 749) {

                if (rowCount == 5) {
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount > 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 2).find('#table-4.active').addClass('active_cashcredit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 2).find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 3).find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 4).find('#table-4.active').addClass('active_cashcredit');
                    /* For IE10 browser*/
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 2).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 3).find('#table-4.active_ie10').addClass('active_iesavings');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 4).find('#table-4.active_ie10').addClass('active_iesavings');
                    /* For IE10 browser*/
                }
            } else if (parseInt(vpWidth) >= 750) {
                if (rowCount >= 5 && rowCount <= 9) {
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                } else if (rowCount >= 10 && rowCount <= 15) {
                    jQuery("#HWListTable10072882 tr:last td:last-child").find('#table-4.active').addClass('active_cashcredit');
                    jQuery("#HWListTable10072882 tr td:last-child").eq(jQuery('#HWListTable10072882 tr td:last-child').length - 2).find('#table-4.active').addClass('active_cashcredit');
                }
            }
        }

    }


    /* Added for last column action pulldown to show upwards */
    jQuery(this).parent().addClass('hide');
    jQuery('.close_menu').removeClass('hide');
    jQuery('.tabular-data').removeClass('hide');
    jQuery('.hide-list').addClass('hide');

});


jQuery('.close_menu').on('click', function() {
    hideExtraMenu();
});

/****** Timline *********/
/*jQuery(".button-collapse").sideNav({
	menuWidth: 300, // Default is 240
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }); */

var items = document.querySelectorAll(".timeline li");

// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
        }
    }
}

// listen for events
window.addEventListener("load", callbackFunc);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);




function hideExtraMenu() {
    jQuery('#table-4').slideUp(function() {
        jQuery('.view_more').parent().removeClass('hide');
        //jQuery('#table-4').removeClass('active').css('width','220px').addClass('z-depth-1');

        jQuery("[id='table-4']").removeClass('active');
        jQuery("[id='table-4']").removeClass('active_ie10');
        jQuery("[id='table-4']").removeClass('active_iesavings');
        jQuery("[id='table-4']").removeClass('active_top');
        jQuery("[id='table-4']").removeClass('active_deposit');
        jQuery("[id='table-4']").removeClass('active_creditCard');
        jQuery("[id='table-4']").removeClass('active_cashcredit');
        jQuery("[id='table-4']").css({
            "width": "220px"
        });
        jQuery("[id='table-4']").addClass('z-depth-1');

        jQuery('.extra_menu').addClass('hide');
        jQuery('.close_menu').addClass('hide');
        jQuery('.tabular-data').addClass('hide');
        jQuery('.tabular-data tbody').empty();
        jQuery('#overlay').removeClass('active');
        jQuery('.table-4').hide();
        jQuery('.table tr').removeClass('bg-grey');

    });
}


jQuery('html').click(
    function(e) {
        if (e.target.id !== "more9" && e.target.id !== "view_more_action9") {
            hideExtraMenu();
            //jQuery('.table-4').hide();
            //jQuery('.table tr').removeClass('bg-grey');
            jQuery('#HWListTable10072682 tr').removeClass('bg-grey');
            jQuery('#HWListTable10072992 tr').removeClass('bg-grey');
            jQuery('#HWListTable10072892 tr').removeClass('bg-grey');
            jQuery('#HWListTable10072692 tr').removeClass('bg-grey');
            jQuery('#HWListTable10073992 tr').removeClass('bg-grey');
            jQuery('#HWListTable10072792 tr').removeClass('bg-grey');
            jQuery('#HWListTable10072882 tr').removeClass('bg-grey');
        }
    }
);
jQuery(document).on('click', '#selectIcon', function(e) {

    // jQuery(".tab_content").fadeOut('fast').fadeIn('fast');
    jQuery(".tabs-wrap .tabs-div").removeClass("active");
    jQuery(this).addClass("active");
    var value = jQuery(this).data('value');
    if (value == "A") {

        jQuery(".tab_content").hide();
        // jQuery(".tab_content").toggle("slow");

    } else {
        // jQuery(".tab_content").toggle("slow");
        jQuery(".tab_content").show();
    }

    //alert('value '+value);
    jQuery('input[name="ImportACHDataFG.PROCESS_MODE"]').val(value);
});
// end