//****************************************************************************
// This function determines user-agent. Currently this supports Netscape and
// MSIE only. However, this function can be enhanced later to support other
// browsers. In such case the function fsSignedData also can be updated so as
// to support new browsers. 
// Return value:
//	returns "ns" in case of netscape user-agent and "msie" in case of IE
//****************************************************************************
//PUBLIC 

function fsClientBrowser() {
    var browserVersion = parseInt(navigator.appVersion);
    var isIE = navigator.appName.indexOf("Microsoft") != -1;
    var isOpera = navigator.userAgent.indexOf("Opera") != -1;
    var isSafari = navigator.userAgent.indexOf("Safari") != -1;
    var isNetscape = navigator.appName.indexOf("Netscape") != -1;
    var isChrome = navigator.userAgent.indexOf("Chrome") != -1;
    /*
     * Don't mess with the order. Coz, IE is IE and depending on identification
     * here Chrome can be safari and safari and chrome can be NS.
     */
    if (isIE && browserVersion >= 4) {
        return "msie";
    } else if (isOpera) {
        return "Opera";
    } else if (isChrome) {
        return ("Chrome");
    } else if (isSafari) {
        return "Safari";
    } else if (isNetscape && browserVersion >= 4) {
        return "ns";
    }
}


var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) ||
            this.searchVersion(navigator.appVersion) ||
            "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function(data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            } else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function(dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]

};
BrowserDetect.init();

// This is a helper object for activities related to collapsible divs.
var hideSeekHelper = {
    SLIDE_MODE_RIGHT: "right",
    SLIDE_MODE_LEFT: "left",
    SLIDE_MODE_UP: "up",
    SLIDE_MODE_DOWN: "down",
    SLIDE_MODE_ATTRIB: "data-slideMode",
    DEFAULT_STATE_ATTRIB: "data-defaultState",
    RETAIN_STATE_ATTRIB: "data-retainCollapsible",
    ANIMATE_ATTRIB: "data-animate",
    COLLAPSE_CLICKED_OUTSIDE_ATTRIB: "data-collapseOnClickOutside",
    MAKE_OVERLAY_ATTRIB: "data-makeOverlay",
    RIGHT_ARROW_IMAGE: "right_arrow_double.png",
    LEFT_ARROW_IMAGE: "left_arrow_double.png",
    PLUS_IMAGE: "plus.gif",
    MINUS_IMAGE: "minus.gif",
    GROUPLET_SEPERATOR: ':',
    COLLAPSIBLE_SEPERATOR: '--:--',
    COLLAPSIBLE_IMG_ID_SUFFIX: ".collapsibleImage",
    invertSlidemode: function(mode) {
        switch (mode) {
            case this.SLIDE_MODE_RIGHT:
                return this.SLIDE_MODE_LEFT;
                break;
            case this.SLIDE_MODE_LEFT:
                return this.SLIDE_MODE_RIGHT;
                break;
            case this.SLIDE_MODE_UP:
                return this.SLIDE_MODE_DOWN;
                break;
            case this.SLIDE_MODE_DOWN:
                return this.SLIDE_MODE_UP;
                break;
            default:
                return this.SLIDE_MODE_UP;
                break;
        }
    },
    updateIndicatorImage: function(img, indicatedAction) {
        var imgName, imgAltText;
        switch (indicatedAction) {
            case this.SLIDE_MODE_RIGHT:
                imgName = hideSeekHelper.RIGHT_ARROW_IMAGE;
                imgAltText = imageAltRightArrow;
                break;
            case this.SLIDE_MODE_LEFT:
                imgName = hideSeekHelper.LEFT_ARROW_IMAGE;
                imgAltText = imageAltLeftArrow;
                break;
            case this.SLIDE_MODE_UP:
                imgName = hideSeekHelper.MINUS_IMAGE;
                imgAltText = imageAltMinus;
                break;
            case this.SLIDE_MODE_DOWN:
                imgName = hideSeekHelper.PLUS_IMAGE;
                imgAltText = imageAltPlus;
                break;
        }

        img.src = imagePath + "/" + imgName;
        img.alt = imgAltText;
    },
    sanitizeValue: function(value) {
        switch (value) {
            case "null":
                return null;
                break;
            case "false":
                return false;
                break;
            case "true":
                return true;
                break;
            default:
                return value;
                break;
        }
    }
}

/*******************************************************************************
 * This method is used to get the elementId appended with the groupletId.
 *
 ******************************************************************************/
function getGroupletSpecificId(elementId, groupletId) {
    if (groupletId != "null" && groupletId != null && groupletId != undefined) {
        if (elementId.indexOf(groupletId + hideSeekHelper.GROUPLET_SEPERATOR) == -1) {
            elementId = groupletId + hideSeekHelper.GROUPLET_SEPERATOR + elementId;
        }
    }
    return elementId;
}
/*******************************************************************************
 * This method is called at the page load if the page has collapsible content.
 * It collapses and expands the divs depending upon state mentioned in the
 * hidden variable.
 * 
 ******************************************************************************/
/* Third argument introduced for supporting search panel expand and collapse in second modal window scenario */
function initHideSeek(groupletId, isModalRequest, calIdentifier) {
    /**
     * slideMode - Added to support Sliding Panel with different modes - 
     * right (slide from left to right), left, up or down
     */
    var isCalReq = "false";
    if (feba && feba.features && feba.features.MODAL_VIEW_CONTAINER && feba.features.MODAL_VIEW_CONTAINER.options && feba.features.MODAL_VIEW_CONTAINER.options.isCalendar) {
        isCalReq = feba.features.MODAL_VIEW_CONTAINER.options.isCalendar;
    }
    var domMan = feba.domManipulator;

    /* Populating the collapsibleId based on the third argument value calIdentifier passed from Page.java
     * Ticket ID : 721135 START
     */
    var collapsibleId = null;


    if (isCalReq != null && isCalReq == "true") {
        collapsibleId = jQuery('#MODAL_VIEW_CONTAINER').find('#' + groupletId + "\\:" + "COLLAPSIBLE_IDS");
    } else {
        collapsibleId = domMan.getGroupletSpecificElement('COLLAPSIBLE_IDS', groupletId);
    }
    if (isModalRequest == true || isModalRequest == "true") {
        if (!groupletId) {
            collapsibleId = domMan.getGroupletSpecificElement('COLLAPSIBLE_IDS', 'MODAL_VIEW_CONTAINER');
        } else {
            collapsibleId = jQuery('#MODAL_VIEW_CONTAINER').find('#' + groupletId + "\\:" + "COLLAPSIBLE_IDS");
        }
    }
    /* Ticket ID : 721135 END */
    var allCollapsibleIdsList = domMan.getAttribute(collapsibleId, "value");

    if (!allCollapsibleIdsList) {
        return; // Return if no collapsible elements
    }

    var collapsibles = allCollapsibleIdsList.split(hideSeekHelper.COLLAPSIBLE_SEPERATOR);
    var collapsibleIdsList = collapsibles[0];

    // Get list of all collapsible element configs
    var diffCollapse = collapsibleIdsList.split("|"); //TODO Change the name

    for (var i = 0; i < diffCollapse.length; i++) {
        if (!diffCollapse[i]) {
            continue; // skip if collpsible element is falsy, mostly "".
        }

        var divIdArr = diffCollapse[i].split(","); // TODO Change name: collapsibleConfig
        var sourceDivId = divIdArr[0].replace("MODAL_VIEW_CONTAINER:", ""); // TODO change name sourceElement (isnt a div, but h)
        var targetDivId, targetDiv;
        if (divIdArr[1]) {
            targetDivId = divIdArr[1].replace(/MODAL_VIEW_CONTAINER:/g, "");
        }

        if (sourceDivId && targetDivId) {
            var state = divIdArr[2],
                sourceElement = domMan.getElementById(sourceDivId),
                anchor = domMan.getChildren(sourceElement, "a"),
                slideMode = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.SLIDE_MODE_ATTRIB)),
                defaultState = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.DEFAULT_STATE_ATTRIB)),
                retainCollapsible = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.RETAIN_STATE_ATTRIB)),
                animate = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.ANIMATE_ATTRIB)),
                collapseClickedOutside = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.COLLAPSE_CLICKED_OUTSIDE_ATTRIB)),
                makeOverlay = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.MAKE_OVERLAY_ATTRIB));

            //Handle RTL animations
            if ((slideMode === hideSeekHelper.SLIDE_MODE_LEFT || slideMode === hideSeekHelper.SLIDE_MODE_RIGHT) &&
                (anchor.css("direction") === "rtl")) {
                slideMode = hideSeekHelper.invertSlidemode(slideMode);
            }

            // add the data and use it directly, instead of passing values again..!
            domMan.addData(anchor, "collapsibleData", {
                slideMode: slideMode,
                retainCollapsible: retainCollapsible,
                animate: animate,
                collapseClickedOutside: collapseClickedOutside,
                makeOverlay: makeOverlay
            });

            if (defaultState && defaultState !== "null") {
                state = defaultState;
                saveCollapsibleState(true, collapsibleId, targetDivId, state);
            }

            // Checks if the targetDivId has some Business Exception, then change the state to 'E' 

            //Added addition check for identifying if the Click has happend inside the search panel and if it needs to closed.
            if (hasBusinessException(targetDivId) || !isSearchPanelCollapsed(sourceDivId, targetDivId)) {
                state = "E";
                //Added for ticket id 748840
                //saveCollapsibleState(true, collapsibleId, targetDivId, state);
            }

            if (targetDivId.indexOf("#") != -1) {
                targetDivId = targetDivId.substring(targetDivId.indexOf("#") + 1);
            }

            if (feba.domManipulator.isRTL()) {
                var searchDivId = targetDivId.substring(targetDivId.indexOf(":") + 1);
                targetDivId = groupletId + ":" + searchDivId; //targetDivId.replace(/\s+/, "").trim().substring(1);
                targetDiv = document.getElementById(targetDivId);
            } else {
                targetDiv = document.getElementById(targetDivId);
            }

            //targetDiv = document.getElementById(searchDivId);

            if (targetDiv != null) {
                if (state == "E") {
                    expandBlock(targetDiv, slideMode, animate, collapseClickedOutside, makeOverlay, anchor, true);
                } else {
                    collapseBlock(targetDiv, slideMode, animate, true);
                }

                //jQuery(targetDiv).parents(".stage3_searchpanel_detailsdiv, .stage3_searchpaneldiv").show();
                domMan.showElement(domMan.parents(targetDiv, ".stage3_searchpanel_detailsdiv, .stage3_searchpaneldiv"));
            }
        }
    }
    if (collapsibles.length > 1) { // TODO check! was 'temp'!
        var tableCollapsibleIdsList = collapsibles[1];
        diffCollapse = collapsibleIdsList.split("|"); // TODO Change the name

        for (var i = 0; i < diffCollapse.length; i++) {
            if (!diffCollapse[i]) {
                continue; // skip if collapsible element is falsy, mostly "".
            }

            var divIdArr = diffCollapse[i].split(","); // TODO Change name: collapsibleConfig
            var sourceDivId = divIdArr[0]; // TODO change name sourceElement (isnt a div, but h)
            var targetDivId = divIdArr[1];

            if (sourceDivId && targetDivId) {
                var state = divIdArr[2];

                if (document.getElementById(targetDivId) != null) {
                    var collapsibleImg = document.getElementById(targetDivId + hideSeekHelper.COLLAPSIBLE_IMG_ID_SUFFIX);
                    if (state == "E") {
                        document.getElementById(targetDivId).style.display = "";
                        collapsibleImg.src = imagePath + "/" + hideSeekHelper.MINUS_IMAGE;
                        collapsibleImg.alt = imageAltPlus;
                        collapsibleImg.title = imageTitleCollapse;
                    } else {
                        document.getElementById(targetDivId).style.display = "none";
                        collapsibleImg.src = imagePath + "/" + hideSeekHelper.PLUS_IMAGE;
                        collapsibleImg.alt = imageAltPlus;
                        collapsibleImg.title = imageTitleExpand;
                    }
                }
            }
        }
    }

    /*RWD fix for search panel getting cropped in Accounts > transaction history pages. The search panel comes in the middle
    of the page in txn history pages and fix has been made to open it upwards instead of downwards*/
    setTimeout(
        function() {
            var jspName = jQuery("[id='TransactionHistoryFG.REPORTTITLE']").val();
            var jspNameTemp = jQuery("[id='CCTXNHistoryFG.REPORTTITLE']").val();

            if ((jspNameTemp != 'undefined' && (jspNameTemp == 'CCTXNHistoryUX5' || jspNameTemp == 'AddonCCTXNHistoryUX5')) || (jspName != 'undefined' && (jspName == 'DpTransactionHistoryLst5TxnUX5' || jspName == 'LnTransactionHistoryLst5TxnUX5' ||
                    jspName == 'LnTransactionHistoryLstNTxnUX5' || jspName == 'LnTransactionHistoryTprUX5' || jspName == 'LnTransactionHistoryUX5' ||
                    jspName == 'OpTransactionHistoryLst5TxnUX5' || jspName == 'OpTransactionHistoryLstNTxnUX5' || jspName == 'OpTransactionHistoryTprUX5' ||
                    jspName == 'OpTransactionHistoryUX5' || jspName == 'TransactionHistoryUX5' || jspName == 'TransactionHistoryTprUX5'))) {
                var identifierCollapse = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.SubSection1";
                var collapseheight = jQuery('.collapsible-wrapper').height();
                var searchPnht = jQuery('.stage3_searchpanel_detailsdiv').height();
                var topPosition = -(collapseheight + searchPnht - 4) + "px";
                jQuery('div[id=\"' + identifierCollapse + '\"]').children('.collapsible-wrapper').css("top", topPosition);
                var searchPanel1 = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.Rowset2";
                var searchPanel2 = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.Rowset6";
                jQuery('div[id=\"' + searchPanel1 + '\"]').css('overflow', 'hidden');
                jQuery('div[id=\"' + searchPanel2 + '\"]').css('overflow', 'hidden');
                if (jQuery('div[id=\"' + searchPanel1 + '\"]').length > 0) {
                    if (jQuery('[id$="REPORTTITLE"]').val() == 'CCTXNHistoryUX5') {
                        jQuery('.collapsible-wrapper').css('top', '-337px');
                        jQuery('.collapsible-wrapper').css('max-height', '400px');
                    } else {
                        jQuery('.collapsible-wrapper').css('top', '-412px');
                        jQuery('.collapsible-wrapper').css('max-height', '400px');
                        jQuery('.collapsible-wrapper').css('overflow-y', 'scroll');
                    }
                }
                if (navigator.userAgent.search("Firefox") >= 0) {
                    var pickerIcon = jQuery(".picker-icon");
                    var pickerIcon2 = jQuery(".picker-icon_Hijiri");
                    if (typeof pickerIcon !== typeof undefined && pickerIcon.length > 0) {
                        jQuery("input.all-datepicker").css("margin-top", "11px");
                        var delay = 100;
                        setTimeout(function() {
                            jQuery("input.all-datepicker").css("margin-top", "12px");
                        }, delay);
                    }
                    if (typeof pickerIcon2 !== typeof undefined && pickerIcon2.length > 0) {
                        jQuery("input.hijiriDate").css("margin-top", "11px");
                        var delay = 100;
                        setTimeout(function() {
                            jQuery("input.hijiriDate").css("margin-top", "12px");
                        }, delay);
                    }
                }

            }
        }, 600);

}
/*******************************************************************************
 * This method is called on click of the collapsible header. It
 * collapses/expands the particular div and also changes the image from plus to
 * minus and vice versa.
 * 
 ******************************************************************************/
function expandCollapse(sourceId, targetDivId, variable, groupletId, isModalRequest, event) {
    if (groupletId == "null") {
        groupletId = null;
    }

    event = event || window.event;

    if (targetDivId.indexOf("#") != -1) {
        targetDivId = targetDivId.substring(targetDivId.indexOf("#") + 1);
    }
    var domMan = feba.domManipulator;
    var collapsibleId = domMan.getGroupletSpecificElement('COLLAPSIBLE_IDS', groupletId);
    if (isModalRequest == true || isModalRequest == "true") {
        if (!groupletId) {
            collapsibleId = domMan.getGroupletSpecificElement('COLLAPSIBLE_IDS', 'MODAL_VIEW_CONTAINER');
        } else {
            collapsibleId = jQuery('#MODAL_VIEW_CONTAINER').find('#' + groupletId + "\\:" + "COLLAPSIBLE_IDS");
        }
    }
    var collapsible = domMan.getAttribute(collapsibleId, "value");
    targetDivId = domMan.getAttribute(domMan.getGroupletSpecificElement(targetDivId, groupletId), "id");
    var unUsedValue;

    var collapsibles = collapsible.split(hideSeekHelper.COLLAPSIBLE_SEPERATOR);

    var state = "";
    if (variable == 'tableColapse') {
        collapsible = collapsibles[1];
        unUsedValue = collapsibles[0];
        state = collapsible.substring(collapsible.lastIndexOf(targetDivId + ",") + targetDivId.length + 1, collapsible.lastIndexOf(targetDivId + ",") + targetDivId.length + 2);
        if (state == "E") {

            document.getElementById(targetDivId).style.display = "none";
            document.getElementById(targetDivId + '.collapsibleImage').src = imagePath + "/plus.gif";
            document.getElementById(targetDivId + '.collapsibleImage').alt = imageAltPlus;
            document.getElementById(targetDivId + '.collapsibleImage').title = imageTitleExpand;
            collapsible = collapsible.replace(targetDivId + ',E', targetDivId + ',C');
            collapsibleId.value = unUsedValue + hideSeekHelper.COLLAPSIBLE_SEPERATOR + collapsible;
        } else {

            document.getElementById(targetDivId).style.display = "";
            document.getElementById(targetDivId + '.collapsibleImage').src = imagePath + "/minus.gif";
            document.getElementById(targetDivId + '.collapsibleImage').alt = imageAltMinus;
            document.getElementById(targetDivId + '.collapsibleImage').title = imageTitleCollapse;
            collapsible = collapsible.replace(targetDivId + ',C', targetDivId + ',E');
            collapsibleId.value = unUsedValue + hideSeekHelper.COLLAPSIBLE_SEPERATOR + collapsible;
        }
    } else {
        collapsible = collapsibles[0];

        var sourceElement = domMan.getElementById(sourceId),
            anchor = domMan.getChildren(sourceElement, "a"),
            collapsibleData = domMan.getData(anchor, "collapsibleData");
        state = feba.domManipulator.getChildren(document.getElementById(targetDivId), ":not(:header):visible").length ? "E" : "C";

        if (state == "E") {
            if (!(collapsibleData.animate)) {
                jQuery(anchor).removeClass('collapsipleMenu');
                jQuery(anchor).addClass('expandableMenu');
            }
            collapseBlock(document.getElementById(targetDivId), collapsibleData.slideMode, collapsibleData.animate);
            saveCollapsibleState(collapsibleData.retainCollapsible, collapsibleId, targetDivId, "C");
        } else {
            expandBlock(document.getElementById(targetDivId),
                collapsibleData.slideMode, collapsibleData.animate,
                collapsibleData.collapseClickedOutside, collapsibleData.makeOverlay, anchor);

            saveCollapsibleState(collapsibleData.retainCollapsible, collapsibleId, targetDivId, "E");
        }
    }
    /*Commented the below for ticket 739800*/
    /*if (state == "E") {
    	//added for changing the size of the modal dialog at runtime when sliding search is clicked
    	if(document.getElementById('MODAL_VIEW_CONTAINER') != null ){
    		feba.domManipulator.getElementById("modalDialog").attr('style',"width: auto;border-top:0px;min-height: 222.967px; height: auto;");
    	}	
    }else{
    	//added for changing the size of the modal dialog at runtime when sliding search is clicked
    	if(document.getElementById('MODAL_VIEW_CONTAINER') != null ){
    		feba.domManipulator.getElementById("modalDialog").attr('style',"width: auto;border-top:0px;min-height: 472.967px; height: auto;");
    	}
    }*/
    //Need to look into below code. Thought it wont be useful
    if (variable == 'tableColapse') {
        if (unUsedValue != undefined) {
            collapsible = unUsedValue + Collapsible_Seperator + collapsible;
        }
    } else {
        if (unUsedValue != undefined) {
            collapsible = collapsible + Collapsible_Seperator + unUsedValue;
        }
    }
    collapsible = feba.domManipulator.getAttribute(feba.domManipulator.getGroupletSpecificElement('COLLAPSIBLE_IDS', groupletId), "value");
    /*RWD fix for search panel getting cropped in Accounts > transaction history pages. The search panel comes in the middle
    of the page in txn history pages and fix has been made to open it upwards instead of downwards*/
    setTimeout(
        function() {
            var jspName = jQuery("[id='TransactionHistoryFG.REPORTTITLE']").val();
            var jspNameTemp = jQuery("[id='CCTXNHistoryFG.REPORTTITLE']").val();

            if ((jspNameTemp != 'undefined' && (jspNameTemp == 'CCTXNHistoryUX5' || jspNameTemp == 'AddonCCTXNHistoryUX5')) || (jspName != 'undefined' && (jspName == 'DpTransactionHistoryLst5TxnUX5' || jspName == 'LnTransactionHistoryLst5TxnUX5' ||
                    jspName == 'LnTransactionHistoryLstNTxnUX5' || jspName == 'LnTransactionHistoryTprUX5' || jspName == 'LnTransactionHistoryUX5' ||
                    jspName == 'OpTransactionHistoryLst5TxnUX5' || jspName == 'OpTransactionHistoryLstNTxnUX5' || jspName == 'OpTransactionHistoryTprUX5' ||
                    jspName == 'OpTransactionHistoryUX5' || jspName == 'TransactionHistoryUX5' || jspName == 'TransactionHistoryTprUX5'))) {
                var identifierCollapse = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.SubSection1";
                var collapseheight = jQuery('.collapsible-wrapper').height();
                var searchPnht = jQuery('.stage3_searchpanel_detailsdiv').height();
                var topPosition = -(collapseheight + searchPnht - 4) + "px";
                jQuery('div[id=\"' + identifierCollapse + '\"]').children('.collapsible-wrapper').css("top", topPosition);
                var searchPanel1 = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.Rowset2";
                var searchPanel2 = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.Rowset6";
                jQuery('div[id=\"' + searchPanel1 + '\"]').css('overflow', 'hidden');
                jQuery('div[id=\"' + searchPanel2 + '\"]').css('overflow', 'hidden');
                if (jQuery('div[id=\"' + searchPanel1 + '\"]').length > 0) {
                    if (jQuery('[id$="REPORTTITLE"]').val() == 'CCTXNHistoryUX5') {
                        jQuery('.collapsible-wrapper').css('top', '-337px');
                        jQuery('.collapsible-wrapper').css('max-height', '400px');
                    } else {
                        jQuery('.collapsible-wrapper').css('top', '-412px');
                        jQuery('.collapsible-wrapper').css('max-height', '400px');
                        jQuery('.collapsible-wrapper').css('overflow-y', 'scroll');
                    }
                }

                if (navigator.userAgent.search("Firefox") >= 0) {
                    var pickerIcon = jQuery(".picker-icon");
                    if (typeof pickerIcon !== typeof undefined && pickerIcon.length > 0) {
                        jQuery("input.all-datepicker").css("margin-top", "11px");
                        var delay = 100;
                        setTimeout(function() {
                            jQuery("input.all-datepicker").css("margin-top", "12px");
                        }, delay);
                    }
                }
            }

        }, 600);

    try {

        jQuery(".container-nxtGenmedium").find("#" + groupletId).niceScroll({
            horizrailenabled: false,
            'zindex': 1000
        });
        jQuery(".container-nxtGenmedium").find("#" + groupletId).niceScroll().resize({
            horizrailenabled: false
        });
        if (state && state == "E") {
            //jQuery("#"+groupletId).getNiceScroll().hide();
        }
    } catch (e) {
        console.log("Exception occured in expandCollapse for scroll enable" + e);
    }
    return false;
}

/*******************************************************************************
 * This method collapses all the elements in a div except the header element.
 ******************************************************************************/
function collapseBlock(targetDiv, slideMode, animate, forceNoAnimate) {

    var hideElements = feba.domManipulator.getChildren(targetDiv, ":not(:header)");
    var keepVisible = feba.domManipulator.getChildren(targetDiv, ":header");

    if (animate && !forceNoAnimate) {
        hideElements.stop().hide("slide", {
            direction: hideSeekHelper.invertSlidemode(slideMode)
        }, 500);
    } else {
        jQuery(hideElements).slideUp({
            duration: 350,
            easing: "easeOutQuart",
            queue: !1,
            complete: function() {
                jQuery(this).css("height", "")
            }
        });
        //hideElements.stop().hide();
    }

    // Fix for the jQuery UI hide-show issue that wraps elements in a div and
    // frequent clicks will lose the div, permanently hidden in the clutter
    feba.domManipulator.getChildren(targetDiv, ":not(:header)").find(".ui-effects-wrapper").children().unwrap();

    var collapsibleIndImage = document.getElementById(targetDiv.id + '.collapsibleImage');
    if (collapsibleIndImage) {
        hideSeekHelper.updateIndicatorImage(collapsibleIndImage, slideMode ? slideMode : hideSeekHelper.SLIDE_MODE_DOWN);
        collapsibleIndImage.title = imageTitleExpand;
    }
}
/*******************************************************************************
 * This method expands all the elements in a div except the header element.
 ******************************************************************************/
function expandBlock(targetDiv, slideMode, animate, collapseClickedOutside, makeOverlay, anchor, forceNoAnimate) {


    //var hideElements = feba.domManipulator.getChildren(targetDiv,":not(script[type=text/javascript]):not(:header)");
    var hideElements = feba.domManipulator.getChildren(targetDiv, ":not(:header)");
    var keepVisible = feba.domManipulator.getChildren(targetDiv, ":header");


    if (makeOverlay && !hideElements.is(".collapsible-wrapper")) {
        hideElements = hideElements.wrapAll("<div class='collapsible-wrapper'>").show().parent();
    }

    if (animate && !forceNoAnimate) {
        hideElements.stop().show("slide", {
            direction: hideSeekHelper.invertSlidemode(slideMode)
        }, 500, insideExpandBlock);
    } else {
        var collabpsibleAnchor = jQuery(anchor);
        if (collabpsibleAnchor != null && collabpsibleAnchor.hasClass("expandableMenu")) {
            jQuery(anchor).removeClass('expandableMenu');
            jQuery(anchor).addClass('collapsipleMenu');
        }
        var collapsibleContainerDiv = jQuery(anchor).parent().next();
        var collapsibleClass = collapsibleContainerDiv.attr('class');
        if (collapsibleContainerDiv != null && typeof collapsibleClass !== typeof undefined && collapsibleClass.match('collapsibleContainerDiv')) {
            jQuery(collapsibleContainerDiv).css('display', 'block');
        }
        jQuery(hideElements).slideDown({
            duration: 350,
            easing: "easeOutQuart",
            queue: !1,
            complete: function() {
                jQuery(this).css("height", "")
            }
        });

        //hideElements.stop().show();
        //setTimeout(insideExpandBlock, 0);
    }

    function insideExpandBlock() {
        // Fix for the jQuery UI hide-show issue that wraps elements in a div and
        // frequent clicks will lose the div, permanently hidden in the clutter
        feba.domManipulator.getChildren(targetDiv, ":not(:header)").find(".ui-effects-wrapper").children().unwrap();

        // To not retain the value in the closure call for hiding. 
        forceNoAnimate = undefined;

        var collapsibleIndImage = document.getElementById(targetDiv.id + '.collapsibleImage');
        if (collapsibleIndImage) {
            // No need to send default slide mode from here, by default the invert method sends slidemode UP!
            hideSeekHelper.updateIndicatorImage(collapsibleIndImage, hideSeekHelper.invertSlidemode(slideMode));
            collapsibleIndImage.title = imageTitleCollapse;
        }

        if (collapseClickedOutside) {
            feba.js.common.documentClickWatcher.register(anchor, {
                callBack: collapsibleDocClickHandler,
                anchor: anchor,
                targetDiv: targetDiv,
                slideMode: slideMode,
                animate: animate
            });
        }
    }
}

// Save state of collapsible ids to the form field conditionally.
function saveCollapsibleState(saveState, collapsibleId, targetDivId, newState) {
    if (!saveState) {
        return;
    }

    var allCollapsibleIdsList = feba.domManipulator.getAttribute(collapsibleId, "value");
    feba.domManipulator.val(collapsibleId, allCollapsibleIdsList.replace(new RegExp(targetDivId + ",."), targetDivId + "," + newState));
}

// Handle click outsied of the collapsible div, if it is being watched for as per the collapsible config
function collapsibleDocClickHandler(config, event) {
    //	if (jQuery(config.targetDiv).has(event.target).length === 0 && !jQuery(event.target).is(".ui-widget li.ui-menu-item a")) {
    var domMan = feba.domManipulator;
    //isCalenderTarget and isModalWindowOpened is checked sothat serach panel should not collapsed in case if Modal Window is opened or Date Picker Calender is opened 
    var isCalenderTarget = false;
    var isModalWindowOpened = false;
    var isDropdownTarget = false;
    //check for IE9 and below is added. Fix for Ticket 712675 in 11011
    var isIe9AndBelow = false;
    var isIE = navigator.appName.indexOf("Microsoft") != -1;
    if (isIE != null && isIE == true) {
        var indexOfMSIE = window.navigator.userAgent.indexOf("MSIE ");
        var ua = window.navigator.userAgent;
        if (indexOfMSIE > 0) {
            if (parseInt(ua.substring(indexOfMSIE + 5, ua.indexOf(".", indexOfMSIE))) < 10) {
                isIe9AndBelow = true;
            }
        }
    }

    var configId = jQuery(config.targetDiv).attr("id");
    configId = configId.replace(':', '\\:');
    var newTargetDiv = jQuery("[id$='" + configId + "']");
    if (jQuery(newTargetDiv).length == 0) {
        return;
    }
    //className property is used for IE9 and below as classList property is not available. Fix for Ticket 712675 in 11011
    if (isIe9AndBelow) {
        if ((event.target.className != null && event.target.className.split(/[ ,]+/).length >= 2) && (event.target.className.split(/[ ,]+/)[1].indexOf("calendars") == 0)) {
            isCalenderTarget = true;
        } else if ((event.target.className != null && event.target.className.split(/[ ,]+/).length == 1) && (event.target.className.split(/[ ,]+/)[0].indexOf("calendars") == 0)) {
            isCalenderTarget = true;
        } else if (event.target.offsetParent != null && (event.target.offsetParent.className.indexOf("calendars-popup") == 0)) {
            isCalenderTarget = true;
        } /*Added for dropdown Event on search panel collapsing issue */
        else if (event.target.parentNode != null && typeof event.target.parentNode.classList[0] != typeof undefined && ((event.target.parentNode.classList[0].indexOf("autocomplete-values-list") == 0) || (event.target.parentNode.classList[0].indexOf("autocomplete-suggestions") == 0))) {
            isDropdownTarget = true;
        }
    } else {
        if ((event.target.classList != null && event.target.classList.length >= 2) && (event.target.classList[1].indexOf("calendars") == 0)) {
            isCalenderTarget = true;
        } else if ((event.target.classList != null && event.target.classList.length == 1) && (event.target.classList[0].indexOf("calendars") == 0)) {
            isCalenderTarget = true;
        } else if (event.target.offsetParent != null && (event.target.offsetParent.className.indexOf("calendars-popup") == 0)) {
            isCalenderTarget = true;
        } /*Added for dropdown Event on search panel collapsing issue */
        else if (event.target.parentNode != null && typeof event.target.parentNode.classList[0] != typeof undefined && event.target.parentNode.classList[0] != null && (event.target.parentNode.classList[0].indexOf("autocomplete-values-list") == 0)) {
            isDropdownTarget = true;
        } /*Added condition for handling the dropdown Auto complete Suggestion Click */
        else if (autoSuggetionEvent != "" && autoSuggetionEvent != null && typeof autoSuggetionEvent.classList != typeof undefined && typeof autoSuggetionEvent.classList[0] != typeof undefined && (autoSuggetionEvent.classList[0].indexOf("autocomplete-suggestion") == 0)) {
            isDropdownTarget = true;
            autoSuggetionEvent = "";
            event.target = autoSuggetionEventSearchPanelID;
        } /*Added condition for handling the dropdown No Record found Suggestion Click */
        else if (event.target != null && typeof event.target.classList != typeof undefined && event.target.classList != null &&
            typeof event.target.classList[0] != typeof undefined && event.target.classList[0] != null &&
            (event.target.classList[0].indexOf("autocomplete-suggestions") == 0)) {
            isDropdownTarget = true;
        }
    }
    if (document.getElementById('MODAL_VIEW_CONTAINER') != null) {
        isModalWindowOpened = true;
    }

    /*Added for Search panel collapse issue --Start */
    var collapsibleWrapper = jQuery('.collapsible-wrapper');
    var configID = jQuery(config.targetDiv).attr('id');
    configID = configID.replace(':', '\\:');
    var newTargetDiv = jQuery("[id$='" + configID + "']");
    /*Added for Search panel collapse issue --End */

    if (domMan.getMatchedElementCount(domMan.hasElementsMatching(config.targetDiv, event.target)) == 0 && domMan.getMatchedElementCount(domMan.hasElementsMatching(newTargetDiv, event.target)) == 0 &&
        !domMan.isMatching(event.target, ".ui-widget li.ui-menu-item a") && !isCalenderTarget && !isDropdownTarget && !isModalWindowOpened
        /*Fixed for ticket 771416 */
        && !domMan.isMatching(event.target, ".menu__link")) {
        feba.js.common.documentClickWatcher.deregister(config.anchor);
        collapseBlock(config.targetDiv, config.slideMode, config.animate);
        /*Added for Search panel collapse issue --Start */

        //jQuery("[id$='PageConfigurationMaster_ROAUX3W__1\\:SearchPanel_Stage3_Extended_midAligned19.SubSection1']");

        if (typeof collapsibleWrapper !== typeof undefined && jQuery(collapsibleWrapper).css('display') == 'block') {

            //jQuery(config.anchor).trigger('click');
            jQuery('.collapsible-wrapper').hide("slide", {
                direction: hideSeekHelper.invertSlidemode(config.slideMode)
            }, 500);
        }
        /*Added for Search panel collapse issue --End */
        //Fix for search panel not collapsed when click on outside search panel in modal window			
    } else if (!domMan.isMatching(event.target, ".ui-widget li.ui-menu-item a") && !isCalenderTarget && !isDropdownTarget && isModalWindowOpened) {
        var numOfSerchPanlInModal = jQuery('#MODAL_VIEW_CONTAINER').find(jQuery('.collapsible-wrapper'));
        for (m = 0; m < numOfSerchPanlInModal.length; m++) {
            var currTargetDiv = jQuery(numOfSerchPanlInModal[m]).parent().parent();
            var configanchor = jQuery('#MODAL_VIEW_CONTAINER').find(currTargetDiv.find(jQuery('a[data-collapseonclickoutside="true"]')));
            //handle search panel open click
            if (domMan.getMatchedElementCount(domMan.hasElementsMatching(currTargetDiv, event.target)) == 0) {
                var state = feba.domManipulator.getChildren(numOfSerchPanlInModal[m], ":not(:header):visible").length ? "E" : "C";
                if (state == "E") {
                    jQuery(configanchor).trigger('click');
                }
            }
        }
    } else if (domMan.getMatchedElementCount(domMan.hasElementsMatching(config.anchor, event.target))) {
        feba.js.common.documentClickWatcher.deregister(config.anchor);
    }
};

function getSectionBasedIds(collapsibleids, targetId) {
    var sectionId = targetId;
    var onlySections = false;
    if (targetId.indexOf(".") != -1) {
        sectionId = targetId.substring(0, targetId.indexOf("."));
        //alert(sectionId);
        onlySections = false;
    } else {
        onlySections = true;
    }
    var splitted = collapsibleids.split("|");
    if (splitted.length > 0) {
        for (var i = 0; i < splitted.length; i++) {
            if (onlySections == true) {}

        }
    }
}

function format() {
    var buttons = document.getElementById("BrdCrumbNImg").parentNode;
    buttons.removeChild(document.getElementById("BrdCrumbNImg"));
    var input = document.getElementsByTagName("a");
    var count = input.length;
    for (var i = 0; i < count; i++) {
        input[i].removeAttribute("href");
        input[i].setAttribute("class", "simpletext");
    }
    var rad_input = document.getElementsByTagName("input");
    var rad_count = rad_input.length;
    for (var j = 0; j < rad_count; j++) {
        if (document.getElementsByTagName("input")[j].getAttribute("type") == "radio" || document.getElementsByTagName("input")[j].getAttribute("type") == "RADIO") {
            document.getElementsByTagName("input")[j].style.display = "none";
        }
    }
}

function format(name, theFormattedDate) {

    var trial = feba.domManipulator.remove(feba.domManipulator.getElementById(name + ':' + "BrdCrumbNImg"));



}

function addDate(theFormattedDate, name) {


    var date = document.createTextNode(theFormattedDate);

    document.getElementById('' + name + ':' + 'PgHeading').appendChild(date);



}


function PrintPreView(divs, css, title, jsFile, nameSpace, portalName, theFormattedDate) {


    var tableName = divs.split("|");
    var total_document = "";
    var portalName1 = portalName;
    total_document = document.getElementById('PrintPreview' + '_' + portalName1).innerHTML + '<div class="clearboth"></div><BR>';
    var name = nameSpace;


    var disp_setting = "toolbar=no,location=no,directories=no,menubar=no,";
    disp_setting += "scrollbars=yes,width=640, height=660, left=200, top=25";

    var docprint = window.open("", "", disp_setting);
    docprint.document.open();
    docprint.document.write('<html><head><title>');
    docprint.document.write(title);
    docprint.document.write('</title>');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/corp/' + css + '">');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/corp/' + langID + '/' + css + '">');
    docprint.document.write('<script type=\'text/javaScript\' src=\'/corp/scripts/common/Ncommon.js\'></script>');
    docprint.document.write('<script type=\'text/javaScript\' src=\'/corp/scripts/common/NFEBAScripts.js?moduleId=,scriptsPath=/corp/scripts,isVdtMode=,nodePath=,ipAddress=,contextPath=\'></script>');
    docprint.document.write('</head>');
    docprint.document.write('<body style="background-color:#FFFFFF" onLoad = "format(\'' + name + '\',\'' + theFormattedDate + '\');addDate(\'' + theFormattedDate + '\',\'' + name + '\');window.print();">');
    //docprint.document.write('<body style="background-color:#FFFFFF" onLoad = "format()">');
    docprint.document.write(total_document);
    docprint.document.write('<BR>')
    docprint.document.write('<center><input type="button" class="formbtn_last" onclick="javascript:window.close();" value="Close"/></center>');

    var head = docprint.document.getElementsByTagName('head')[0];
    var script = docprint.document.createElement('script');
    script.type = 'text/javascript';
    script.src = jsFile;
    head.appendChild(script);
    docprint.document.write('</body></html>');
    docprint.document.close();
    docprint.focus();
}


/*******************************************************************************************
 * This function is called to bind the click event to clear button when the page is ready.
 *******************************************************************************************/
//jQuery(document).ready(function (){
feba.domManipulator.documentReady(function() {


    feba.js.adaptive.arcot.initArcotDNA();

    //Added for Correcting table heading borders in corporate application
    handleListingTableUI();

    feba.domManipulator.bind(LIB.__GET_ELEMENT_BY_ATTRIBUTE__("data-byPassValidations", "true"), "click", function() {

        // All input element with type as text are fetched.
        var inputElements = feba.domManipulator.getElement("input:text");
        var iLength = inputElements.length;

        if (inputElements.length > 0) {
            for (var i = 0; i < iLength; i++) {
                //On the basis of input element id fetched setting the values of fields as blank on click of clear button.
                feba.domManipulator.setAttribute(feba.domManipulator.getElementById(inputElements[i].id), "value", "");

            }
        }


    });

    //changes end  


});

/*******************************************************************************
 * This function checks if the given divId has Business Exception in it
 *  and returns the flag accordingly
 ******************************************************************************/
function hasBusinessException(targetDivId) {
    if (targetDivId != null && targetDivId.indexOf("#") != -1) {
        var temp = targetDivId.split("#");
        //targetDivId = temp[0];
        targetDivId = temp[temp.length - 1];
    }
    var busExErrorFlag = false;

    /*	check hidden input elements ID - ERROR_ROW_* 
    	It gets appended from Field.java in case of FIELD_MSG_DISPLAY_LOCATION as SIDE or 
    	ERR_HIGHLIGHT_LOCATION as ROW set in BankAway.properties
    */
    var errorElements = feba.domManipulator.find(feba.domManipulator.getElementById(targetDivId), 'input[id^="ERROR_ROW_"]');
    if ((errorElements != null) && (errorElements.length > 0)) {
        busExErrorFlag = true;
    }


    if (busExErrorFlag == false) {
        /*	Then check for error_highlight or error_highlight_right style 
        	which gets added to span from LabelForControl.java in case of 
        	ERR_HIGHLIGHT_LOCATION as LABEL
        */
        var errorHighlight = jQuery(targetDivId).find(".error_highlight");
        var errorHighlightRight = jQuery(targetDivId).find(".error_highlight_right");
        if (errorHighlight.length > 0 || errorHighlightRight.length > 0) {
            busExErrorFlag = true;
        }
    }
    return busExErrorFlag;
}

/** Added by Nikita for For additional details Link*/
function displayAdditional(groupletId) {
    var elementId1 = 'DataEntry_LeftContainer_Stage3_Collapsible8';
    var elementId2 = 'DataEntry_LeftContainer_Stage39.Re6';
    var elementId3 = 'Additional_Click';

    if (groupletId == null || groupletId == "" || groupletId == "undefined") {
        var grpId = "";
        var formgroupName = document.getElementById('FORMSGROUP_ID__').value;
    } else {
        var grpId = groupletId + ":";
        var formgroupName = document.getElementById(grpId + "GROUPLET_FORMSGROUP_ID__").value;
        elementId1 = grpId + elementId1;
        elementId2 = grpId + elementId2;
        elementId3 = grpId + elementId3;
    }
    var divElement = feba.domManipulator.getElementById(elementId1);
    var header = feba.domManipulator.getElementById(elementId2);
    //    var formgroupName = document.getElementById('FORMSGROUP_ID__').value;
    var clickVal = feba.domManipulator.getElementById(elementId3);
    var clickLink = document.getElementById(formgroupName + ".CLICKED_PAGE_NO").value;
    clickVal.click(function() {
        //When link is clicked set formfield as 'Y' indicating link has been clicked
        document.getElementById(formgroupName + ".CLICKED_PAGE_NO").value = "Y";
    })
    if (divElement.length == 0) {
        return;
    }
    /*else
	{   //When page is loaded show the section of Additional details as collapsed                        
		if(clickLink == "N")
      	{  
			divElement[0].style.display = "None";
	    }
	    //When link is clicked the Additional details section is expanded and Link is hidden
	    else
	    {
	   		header[0].style.display ="None";
   			divElement[0].style.display = "block";
	    }
 	}	*/
}
/*For additional details Link end*/

/** Added by Nikita for User Added Bank checkbox */
function useSavedAddress(groupletId) {
    if (groupletId == null || groupletId == "" || groupletId == "undefined") {
        var grpId = "";
        var formgroupName = document.getElementById('FORMSGROUP_ID__').value;
    } else {
        var grpId = groupletId + ":";
        var formgroupName = document.getElementById(grpId + "GROUPLET_FORMSGROUP_ID__").value;
    }
    var useSaved = true;

    if (null != document.getElementById(grpId + 'CounterPartyCRUDFG.USER_ADDED_BANK')) {
        useSaved = !(document.getElementById(grpId + 'CounterPartyCRUDFG.USER_ADDED_BANK').checked);
    }
    var isChecked = (document.getElementById(grpId + 'CounterPartyCRUDFG.USER_ADDED_BANK').checked);
    if (isChecked) {
        var countryElement = feba.domManipulator.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_COUNTRY');
        var networkElement = feba.domManipulator.getElementById(grpId + 'CounterPartyCRUDFG.NETWORK_ID');
        //If the user added bank checkbox is checked then enable fields and clear Network and bank Identifier
        //Clear all fields when checkbox is checked or unchecked
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_COUNTRY').value = "";
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_NAME').value = "";
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_OTHERBANK_BRANCH').value = "";
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_ADDRESS').value = "";
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_CITY').value = "";
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_ZIP').value = "";
        document.getElementById(grpId + 'CounterPartyCRUDFG.NETWORK_ID').value = "";
        document.getElementById(grpId + 'CounterPartyCRUDFG.BANK_IDENTIFIER').value = "";
        //Update the value of the dropdowns to default value
        jQuery(networkElement).febaCombobox("update");
        jQuery(countryElement).febaCombobox("update");
        feba.js.watermark.showWatermark();
        //Set fields as readOnly according to the selection of checkbox
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_NAME').readOnly = useSaved;
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_OTHERBANK_BRANCH').readOnly = useSaved;
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_ADDRESS').readOnly = useSaved;
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_CITY').readOnly = useSaved;
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_ZIP').readOnly = useSaved;
        //Disable dropdown for Country when box is unchecked
        document.getElementById(grpId + 'CounterPartyCRUDFG.BNF_BANK_COUNTRY').disabled = useSaved;
        if (useSaved) {
            jQuery(countryElement).febaCombobox("disable");
        } else {
            jQuery(countryElement).febaCombobox("enable");
        }
    } else {
        var networkId = jQuery('#' + groupletId).find('#CounterPartyCRUDFG\\.PREV_NETWORK_ID').attr('value');
        var networkElement = feba.domManipulator.getElementById(grpId + 'CounterPartyCRUDFG.NETWORK_ID');
        document.getElementById(grpId + 'CounterPartyCRUDFG.NETWORK_ID').value = networkId;
        jQuery(networkElement).febaCombobox("update");
    }
    return;
}
/** Added by Nikita for User Added Bank checkbox END*/

//Script to show Menu options on mouse over
function showLinks(parentID, ulID, divID) {
    //Get Parent Div Element
    var parentDiv = document.getElementById(parentID);
    //Get Inner Div Element
    var div = document.getElementById(divID);
    //Get UL element
    var showULId = document.getElementById(ulID);

    //Fetch left position of parent		
    var parent_left = parentDiv.offsetLeft;

    //Get Parent Height and assign div top position accordingly		
    var parent_Height = parentDiv.offsetHeight;
    div.style.top = parent_Height + 'px';

    //Fetch UL width
    if (showULId != null) {
        var width = showULId.style.width.replace('px', '');
    }
    if (parent_left > (width / 2)) {
        //Assign Div left position according to parent div and div width
        div.style.left = parent_left - (width / 2) + 'px';
    } else {
        div.style.left = '5px';
    }
    //Show UL Display		
    showULId.style.display = 'block';
}

//Script to show Menu options on mouse out
function hideLinks(ulID) {
    var showULId = document.getElementById(ulID);
    if (showULId != null) {
        showULId.style.display = 'none';
    }
}

function expandCollapseGroups(sourceId, targetDivId, variable, groupletId, isModalRequest, event) {
    if (groupletId == "null") {
        groupletId = null;
    }

    event = event || window.event;

    if (targetDivId.indexOf("#") != -1) {
        targetDivId = targetDivId.substring(targetDivId.indexOf("#") + 1);
    }

    var domMan = feba.domManipulator;

    var collapsibleId = domMan.getGroupletSpecificElement('COLLAPSIBLE_IDS', groupletId);
    if (isModalRequest == true || isModalRequest == "true") {
        collapsibleId = domMan.getGroupletSpecificElement('COLLAPSIBLE_IDS', 'MODAL_VIEW_CONTAINER');
    }
    var collapsible = domMan.getAttribute(collapsibleId, "value");
    targetDivId = domMan.getAttribute(domMan.getGroupletSpecificElement(targetDivId, groupletId), "id");
    var unUsedValue;

    var collapsibles = collapsible.split(hideSeekHelper.COLLAPSIBLE_SEPERATOR);
    if (variable == 'tableColapse') {
        collapsible = collapsibles[1];
        unUsedValue = collapsibles[0];
        var state = collapsible.substring(collapsible.lastIndexOf(targetDivId + ",") + targetDivId.length + 1, collapsible.lastIndexOf(targetDivId + ",") + targetDivId.length + 2);
        if (state == "0") {
            var firstrowid = targetDivId.split(":");
            firstrowid = firstrowid[1];
            var finaltargetfirstdivid = groupletId + "\:" + firstrowid;
            var sRegExInput = new RegExp(firstrowid, "g");
            collapsible = collapsible.replace(sRegExInput, finaltargetfirstdivid);
            state = collapsible.substring(collapsible.lastIndexOf(targetDivId + ",") + targetDivId.length + 1, collapsible.lastIndexOf(targetDivId + ",") + targetDivId.length + 2);
        }
        if (state == "E") {
            // Modified to resolve issue faced during Sanity of 11.0.8Base due to changes in HWListTable Start
            var elements = document.getElementsByClassName(targetDivId);
            for (var i = 0, length = elements.length; i < length; i++) {
                elements[i].style.display = 'none';
            }
            //document.getElementById(targetDivId).style.display = "none";
            // Modified to resolve issue faced during Sanity of 11.0.8Base due to changes in HWListTable End

            if (document.getElementById(targetDivId + '.collapsibleImage') != null) {
                document.getElementById(targetDivId + '.collapsibleImage').src = imagePath + "/icoToggleDown.png";
                document.getElementById(targetDivId + '.collapsibleImage').alt = imageAltPlus;
                document.getElementById(targetDivId + '.collapsibleImage').title = imageTitleExpand;
                collapsible = collapsible.replace(targetDivId + ',E', targetDivId + ',C');
                collapsibleId.value = unUsedValue + hideSeekHelper.COLLAPSIBLE_SEPERATOR + collapsible;
            } else {
                collapsible = collapsible.replace(targetDivId + ',E', targetDivId + ',C');
                collapsibleId.value = unUsedValue + hideSeekHelper.COLLAPSIBLE_SEPERATOR + collapsible;
            }

        } else {
            // Modified to resolve issue faced during Sanity of 11.0.8Base due to changes in HWListTable Start
            var elements = document.getElementsByClassName(targetDivId);
            for (var i = 0, length = elements.length; i < length; i++) {
                elements[i].style.display = '';
            }
            //document.getElementById(targetDivId).style.display = "";
            // Modified to resolve issue faced during Sanity of 11.0.8Base due to changes in HWListTable End

            if (document.getElementById(targetDivId + '.collapsibleImage') != null) {
                document.getElementById(targetDivId + '.collapsibleImage').src = imagePath + "/icoToggleDown.png";
                document.getElementById(targetDivId + '.collapsibleImage').alt = imageAltPlus;
                document.getElementById(targetDivId + '.collapsibleImage').title = imageTitleExpand;
                collapsible = collapsible.replace(targetDivId + ',C', targetDivId + ',E');
                collapsibleId.value = unUsedValue + hideSeekHelper.COLLAPSIBLE_SEPERATOR + collapsible;
            } else {
                collapsible = collapsible.replace(targetDivId + ',C', targetDivId + ',E');
                collapsibleId.value = unUsedValue + hideSeekHelper.COLLAPSIBLE_SEPERATOR + collapsible;
            }
        }
    } else {
        collapsible = collapsibles[0];

        var sourceElement = domMan.getElementById(sourceId),
            anchor = domMan.getChildren(sourceElement, "a"),
            collapsibleData = domMan.getData(anchor, "collapsibleData");

        state = feba.domManipulator.getChildren(document.getElementById(targetDivId), ":not(:header):visible").length ? "E" : "C";

        if (state == "E") {
            collapseBlock(document.getElementById(targetDivId), collapsibleData.slideMode, collapsibleData.animate);
            saveCollapsibleState(collapsibleData.retainCollapsible, collapsibleId, targetDivId, "C");
        } else {
            expandBlock(document.getElementById(targetDivId),
                collapsibleData.slideMode, collapsibleData.animate,
                collapsibleData.collapseClickedOutside, collapsibleData.makeOverlay, anchor);

            saveCollapsibleState(collapsibleData.retainCollapsible, collapsibleId, targetDivId, "E");
        }
    }

    /*RWD fix for search panel getting cropped in Accounts > transaction history pages. The search panel comes in the middle
    of the page in txn history pages and fix has been made to open it upwards instead of downwards*/
    setTimeout(
        function() {
            var jspName = jQuery("[id='TransactionHistoryFG.REPORTTITLE']").val();
            var jspNameTemp = jQuery("[id='CCTXNHistoryFG.REPORTTITLE']").val();

            if ((jspNameTemp != 'undefined' && (jspNameTemp == 'CCTXNHistoryUX5' || jspNameTemp == 'AddonCCTXNHistoryUX5')) || (jspName != 'undefined' && (jspName == 'DpTransactionHistoryLst5TxnUX5' || jspName == 'LnTransactionHistoryLst5TxnUX5' ||
                    jspName == 'LnTransactionHistoryLstNTxnUX5' || jspName == 'LnTransactionHistoryTprUX5' || jspName == 'LnTransactionHistoryUX5' ||
                    jspName == 'OpTransactionHistoryLst5TxnUX5' || jspName == 'OpTransactionHistoryLstNTxnUX5' || jspName == 'OpTransactionHistoryTprUX5' ||
                    jspName == 'OpTransactionHistoryUX5' || jspName == 'TransactionHistoryUX5' || jspName == 'TransactionHistoryTprUX5'))) {
                var identifierCollapse = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.SubSection1";
                var collapseheight = jQuery('.collapsible-wrapper').height();
                var searchPnht = jQuery('.stage3_searchpanel_detailsdiv').height();
                var topPosition = -(collapseheight + searchPnht - 4) + "px";
                jQuery('div[id=\"' + identifierCollapse + '\"]').children('.collapsible-wrapper').css("top", topPosition);
                var searchPanel1 = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.Rowset2";
                var searchPanel2 = groupletId + ":SearchPanel_Stage3_Extended_midAligned19.Rowset6";
                jQuery('div[id=\"' + searchPanel1 + '\"]').css('overflow', 'hidden');
                jQuery('div[id=\"' + searchPanel2 + '\"]').css('overflow', 'hidden');
                if (jQuery('div[id=\"' + searchPanel1 + '\"]').length > 0) {
                    if (jQuery('[id$="REPORTTITLE"]').val() == 'CCTXNHistoryUX5') {
                        jQuery('.collapsible-wrapper').css('top', '-337px');
                        jQuery('.collapsible-wrapper').css('max-height', '400px');
                    } else {
                        jQuery('.collapsible-wrapper').css('top', '-412px');
                        jQuery('.collapsible-wrapper').css('max-height', '400px');
                        jQuery('.collapsible-wrapper').css('overflow-y', 'scroll');
                    }
                }

                if (navigator.userAgent.search("Firefox") >= 0) {
                    var pickerIcon = jQuery(".picker-icon");
                    if (typeof pickerIcon !== typeof undefined && pickerIcon.length > 0) {
                        jQuery("input.all-datepicker").css("margin-top", "11px");
                        var delay = 100;
                        setTimeout(function() {
                            jQuery("input.all-datepicker").css("margin-top", "12px");
                        }, delay);
                    }
                }

            }


        }, 600);
    return false;
}


jQuery(function() {
    /*
     * This method restrict backspace keys on any non-input element.
     */
    var rx = /INPUT|SELECT|TEXTAREA/i;

    jQuery(document).keydown(function(e) {
        if (e.which == 8) { // 8 == backspace
            if (!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly) {
                e.preventDefault();
            }
        }
    });
});
// Method forms html to be displayed in case of error in a widget.
function formWidgetErrorPage(textStatus, callBackStatement) {
    if (typeof window.formCustomWidgetErrorPage === "function") {
        return formCustomWidgetErrorPage(textStatus, callBackStatement);
    } else {
        return "<div style='margin: 0 auto; text-align: center; line-height: 20px;'><div style='color: red;'>" +
            getMessage(textStatus) +
            "</div><a class=\"bluelink\" href=\"javascript:" + callBackStatement + "\">" +
            getMessage("Refresh") + "</a><div>";
    }
}
//Script to show child options with defined height
function childDisplay(parentID, divID) {

    var parentID = document.getElementById(parentID);
    var divID = document.getElementById(divID);


    /* Fetch postition of parent element */
    //surej  var topPosition = parentID.offsetTop;
    //surej  var parentHeight = parentID.offsetHeight;
    //surej divID.style.top = topPosition + parentHeight +'px';

}

/* Script added for contol option in collapsible format */
function manageCollapsibleFunctionality(groupletId) {
    //jQuery(document).ready(function(){
    if (groupletId == 'NULL') {
        var collapsibleflg = jQuery("[id='collapsibleflg']").attr('value');
        var check = jQuery('#collapse').css('display');
        var collapsibleflg = jQuery("[id='collapsibleflg']").attr('value');
        var check = jQuery('#collapse').css('display');
        if (jQuery("#collapsableimg").hasClass("collapseMenu") && collapsibleflg == 'Y') {
            var check1 = jQuery('#collapse').css('display');
            jQuery("[id='collapse']").slideToggle();
            var check2 = jQuery('#collapse').css('display');
            jQuery('#collapsableimg').removeClass('collapseMenu');
            jQuery('#collapsableimg').addClass('collapseMenu');
        }
        jQuery("[id='collapsibleMenu']").click(function() {
            var check1 = jQuery('#collapse').css('display');
            jQuery("[id='collapse']").slideToggle();
            var check2 = jQuery('#collapse').css('display');
            if (jQuery("#collapsableimg").hasClass("collapseMenu")) {
                jQuery('#collapsableimg').removeClass('collapseMenu');
                jQuery('#collapsableimg').addClass('expandMenu');
            } else {
                jQuery('#collapsableimg').removeClass('expandMenu');
                jQuery('#collapsableimg').addClass('collapseMenu');
            }
            setTimeout(function() { //Aashish added for RWD bulk payment					
                handleRHSAlignment(groupletId);
                console.log("inside manage collap settimeout");
            }, 500);

            return false;
        });
        //});
    } else {
        var collapsibleflg = jQuery("[id='" + groupletId + ":collapsibleflg']").attr('value');
        var check = jQuery('#' + groupletId + '\\:collapse').css('display');
        var collapsibleflg = jQuery("[id='" + groupletId + ":collapsibleflg']").attr('value');
        var check = jQuery('#' + groupletId + '\\:collapse').css('display');
        if (jQuery("#" + groupletId + "\\:collapsableimg").hasClass("collapseMenu") && collapsibleflg == 'Y') {
            var check1 = jQuery('#' + groupletId + '\\:collapse').css('display');
            jQuery("[id='" + groupletId + "\\:collapse']").slideToggle();
            var check2 = jQuery('#' + groupletId + '\\:collapse').css('display');
            jQuery('#' + groupletId + '\\:collapsableimg').removeClass('collapseMenu');
            jQuery('#' + groupletId + '\\:collapsableimg').addClass('collapseMenu');
        }
        jQuery("[id='" + groupletId + "\\:collapsibleMenu']").click(function() {
            var check1 = jQuery('#' + groupletId + '\\:collapse').css('display');
            jQuery("[id='" + groupletId + "\\:collapse']").slideToggle();
            var check2 = jQuery('#' + groupletId + '\\:collapse').css('display');
            if (jQuery("#" + groupletId + "\\:collapsableimg").hasClass("collapseMenu")) {
                jQuery('#' + groupletId + '\\:collapsableimg').removeClass('collapseMenu');
                jQuery('#' + groupletId + '\\:collapsableimg').addClass('expandMenu');
            } else {
                jQuery('#' + groupletId + '\\:collapsableimg').removeClass('expandMenu');
                jQuery('#' + groupletId + '\\:collapsableimg').addClass('collapseMenu');
            }
            setTimeout(function() { //Aashish added for RWD bulk payment					
                handleRHSAlignment(groupletId);
                console.log("inside manage collap settimeout");
            }, 500);
            return false;
        });
    }
}

/*Start Added for latent issue fix. Function was getting referred and was only getting included in vdt mode*/
function setChangeValue(value) {
    ChangeValue = value;
}

function chgOptDropdown(comboId) {
    var url = document.getElementById(comboId).value;
    if (url.indexOf('.ppdl') > -1) {
        var my_array = url.split(".ppdl");
        var my_module = my_array[0].split("/");
        var htmlTarget = "../" + my_module[0] + "/" + "SampleFG." + my_module[1] + ".jsp.html";
        window.location = htmlTarget;
        document.forms["SampleFG"].method = "get";
        document.forms["SampleFG"].action = htmlTarget;
        return false;
    } else {
        var htmlTarget = "../" + url;
        window.location = htmlTarget;
        document.forms["SampleFG"].method = "get";
        document.forms["SampleFG"].action = htmlTarget;
        return false;
    }
}
/*Surej RWD added for Go to Login Page action. Image tag has been changed to button for 
 * implementing on hover effect of next gen styles. On click of "Go to Login Page" button, this 
 * javascript is called which reads the URL formed from image tag href attibute and submits the form START*/
function submitGoToLoginAction() {
    var loginUrl = jQuery("#HREF_LOAD").attr("href");
    document.forms[0].method = "POST";
    document.forms[0].action = loginUrl;
    document.forms[0].submit();
}
/*Surej RWD added for Go to Login Page action END*/
/*End Added for latent issue fix. Function was getting referred and was only getting included in vdt mode*/

/*Breadcrumb collapse expand condition -start*/
jQuery(document).ready(function() {
    /*jQuery("[id='bcumcollapse']").click(function() {*/
    /*newly modified for makign slide toggle happen only on specific icon click*/
    jQuery(".bcumcollapse_first,.bcumcollapse_close").click(function() {
        jQuery("[id='breadcrumbnew']").slideToggle();

        if (jQuery('.bcumcollapse_first').css('display') == 'block') {

            jQuery(".bcumcollapse_first").css("display", "none");
            jQuery(".bcumcollapse_second").css("display", "block");
            jQuery(".bcumcollapse_close").css("display", "block");
            jQuery(".bcumcollapse").css("width", "50px");
            jQuery(".bcumcollapse").css("background-size", "100% 100%");
        } else {
            jQuery(".bcumcollapse_second").css("display", "none");
            jQuery(".bcumcollapse_close").css("display", "none");
            jQuery(".bcumcollapse_first").css("display", "block");
            jQuery(".bcumcollapse").css("width", "30px");
            jQuery(".bcumcollapse").css("background-size", " ");
        }
        return false;
    });

});
/*Breadcrumb collapse expand condition -end*/
jQuery(document).ready(function() {
    /* Code moved to npageCustom for ticket id 756881  Commented out by Anil for Mails Module
    	jQuery(".leftcontainer_Icon").live('click', function(event) {
    	     event.preventDefault(); 
    	    jQuery(".leftcontainer").slideToggle();
    	    jQuery(".advance_wrapper").css("display", "none");
    	    return false;
    	});	
    	jQuery(".searchicons_mail").live('click', function(event) {
    	    event.preventDefault(); 
    	 	jQuery(".advance_wrapper").slideToggle();
    	 	jQuery(".leftcontainer").css("display", "none");
    	    return false;
    	});
    	*/
    if (jQuery("#PersonalDetailsFG\\.REPORTTITLE").val() == 'CorpPersonalSetHomePageUX5') {
        jQuery('#ReadOnly_LeftContainer_Stage35\\.R18d9\\.C2').css('padding-' + left + '', '203px');
        jQuery('#ReadOnly_LeftContainer_Stage35\\.R18d15\\.C2').css('padding-' + left + '', '203px');
    }

    if (jQuery("#UpdateChannelUserIdFG\\.REPORTTITLE").val() == 'ChannelUserIdLinkageListUX5') {
        jQuery('.stage3_listingpaneldiv').css('border-top', '1px solid #CCCCCC');
    }
    if (jQuery.browser.msie || jQuery.browser.safari) {
        if (viewport().width == 480 || viewport().width == 640) {
            //alert("Application screen resolution is:"+viewport().width);
        }
    }
    //Aashish
    if (jQuery("#AuthenticationFG\\.REPORTTITLE").val() == 'FBAGenerateOTPScreen') {
        if (jQuery.browser.safari) {
            jQuery('.loginPanelColumnDetailStyle5').css('width', '23%');
            jQuery('.loginPanelColumnDetailStyle5').css('margin-' + right + '', '10px');
            jQuery('.loginPanelColumnDetailStyle1').css('width', '23%');
            jQuery('.loginPanelColumnDetailStyle1').css('margin-' + right + '', '10px');
            jQuery('.loginPanel_Auth_Otp_HW_formbtn').css('width', '34.9%');
            jQuery('.loginPanel_Auth_Otp_HW_formbtn').css('margin-top', '0.8%');
        }
    }

    jQuery(window).resize(function() {
        if (jQuery('#FinanceOverviewFG\\.REPORTTITLE').val() == 'ExpenseIncomeAnalysisListViewUX5') {
            //		 if (jQuery('.footable-row-detail').css('display') == 'table-row;'){
            jQuery('.hwblacktxt').css('padding-top', '6px');
            jQuery('.hwgreentxt').css('padding-top', '6px');
            //		}
        }

        if (jQuery('#LogOutFG\\.REPORTTITLE').val() == 'LoggedOutScreenUX5') {
            var width = viewport().width;
            var widthValue = width - 158;
            jQuery(".logoutPanel").css("width", widthValue);
            if (viewport().width >= 1037) {
                jQuery(".logoutPanel").css("width", "863px");
            }
            if (viewport().width >= 514) {
                jQuery(".content-info").css("width", "324px");
            } else {
                jQuery(".content-info").css("width", "323px");
            }
            if (viewport().height == 1024) {
                jQuery(".width100percent_main_logoutbg").css("height", "833px");
            }
        }


        if (jQuery('#AuthenticationFG\\.REPORTTITLE').val() == 'PasswordChangeScreenUX5') {
            /* ** for force change password collapse 
            if(viewport().width>=480 && viewport().width<640) */
            if (viewport().width >= 320 && viewport().width < 640) {
                jQuery('.collapsibleContainerDiv').attr('style', 'padding-bottom:108px !important;');
                jQuery('.infoPanel_word').attr('style', '');
                jQuery('.redbgwithwidth').attr('style', 'width:90% !important');
            } else if (viewport().width >= 640 && viewport().width <= 900) {
                jQuery('.collapsibleContainerDiv').attr('style', 'padding-bottom:50px !important;');
                jQuery('.infoPanel_word').attr('style', '');
                jQuery("#MessageDisplay_TABLE").css("margin-" + left + "", "8px");
                jQuery('.redbgwithwidth').attr('style', 'width:90% !important');
            } else {
                jQuery('.collapsibleContainerDiv').attr('style', 'padding-bottom:48px !important;');
                jQuery('.infoPanel_word').attr('style', '');
                jQuery('.infoPanel_word').attr('style', 'width:73% !important; margin-' + left + ':13%');
            }


        }



        if (jQuery('#TranRequestManagerFG\\.REPORTTITLE').val() == 'AddEntryUX5') {
            setTimeout(
                function() {
                    var trs = jQuery(".tableoverflowwrapperhw").find("tbody>tr");
                    var ths = jQuery(".tableoverflowwrapperhw").find("thead>tr>th");

                    var td_input1 = jQuery(".footable-first-column").find("input[type='checkbox']");
                    var td_input = jQuery(trs.find("td>input[type='checkbox']"));
                    var th_span = jQuery(ths.find("span>span[title='']"));
                    var th_input = jQuery(th_span.closest('th'));
                    var td_footable = jQuery(".footableTablelistwhiterow").find("input[type='checkbox']");
                    jQuery(td_input).parent().css('display', 'none');
                    jQuery(td_input1).css('display', 'none');
                    jQuery(th_input).css('display', 'none');
                    jQuery(td_footable).css('display', 'none');
                }, 1500);

        }
        if (viewport().width > 900) {
            jQuery(".leftcontainer").attr('style', 'none');
            jQuery(".advance_wrapper").attr('style', 'none');
            if (jQuery("[id$='EveryNDaysCaption']").length > 0) {
                jQuery("[id$='EveryNDaysCaption']").prev().css('margin-' + right + '', ''); //Added for Every N days component
                jQuery("[id$='EveryNDaysCaption']").prev().css('margin-bottom', ''); //Added for Every N days component
            }
        }
        if (jQuery.browser.msie || jQuery.browser.safari) {
            if (viewport().width == 480 || viewport().width == 640) {
                //alert("Application screen resolution is:"+viewport().width);
            }
        }
        if (viewport().width < 730) {
            jQuery(".composemessagetxtarea .cleditorMain>div").css('height', '53px');
        } else {
            jQuery(".composemessagetxtarea .cleditorMain>div").css('height', '27px');
        }
        if (viewport().width > 480 && viewport().width < 900) { //Added for Every N days component
            if (jQuery("[id$='EveryNDaysCaption']").length > 0) {
                jQuery("[id$='EveryNDaysCaption']").prev().css('margin-' + right + '', '18px');
                jQuery("[id$='EveryNDaysCaption']").prev().css('margin-bottom', '4px');
            }
            if (jQuery("#PersonalizeLimitsFG\\.REPORTTITLE").val() == 'ViewApplicableTxnTypesUX5') {
                jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb1\\.C4"]').css('width', '');
            }
            if (jQuery("#FormManagementFG\\.REPORTTITLE").val() == 'PPLCyberReceiptUX5') {
                jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb1\\.C4"]').css('width', '');
                jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb2\\.C4"]').css('width', '');
                jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb3\\.C4"]').css('width', '');
            }
            if (jQuery("#FormManagementFG\\.REPORTTITLE").val() == 'CPL_PPLDetailsDisplayUX5') {
                jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb1\\.C4"]').css('width', '');
                jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb2\\.C4"]').css('width', '');
                jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb3\\.C4"]').css('width', '');
            }
        }
    });
    /*jQuery(".composemessagetxtarea").css("width","70%");*/
    jQuery(".cleditorMain").css("width", "100%");
    jQuery(".right_panel .cleditorMain>div").css('height', '53px');

});

jQuery(document).ajaxSend(function(event) {
    /*Added below code as part of pattern fixing for defects related to page Focus issue start*/
    if (event != null) {
        if (event.target != null) {
            getPageScroll(event);
            capturePaginationButtonEvent();
            captureFileUploadButtonClick();
            capturelinkClicks();
            storeTablePosition();
        }

    }

    /*Added below code as part of pattern fixing for defects related to page Focus issue end*/

});
/*Breadcrumb collapse expand condition -start*/
/*Message center draft  -start*/
jQuery(document).ajaxComplete(function(event) {
    jQuery(".accordianmenu").unbind();
    jQuery("#DRAFTS").click(function() {
        setTimeout(
            function() {
                jQuery('.droptxtdate').css('float', 'left');
                jQuery('.droptxtdate').css('margin-' + left + '', '10px');
            }, 1000);

        return false;
    });
    /*Added below code as part of pattern fixing for defects related to page Focus issue start*/
    var errTagContainer = jQuery('[id*="C1"]');
    var err_tag = jQuery(errTagContainer).find('[id*="MessageDisplay_TABLE"]');
    if (typeof undefined != typeof ajaxButtonEvent && ajaxButtonEvent != null) {
        if (isButtonComponentPartOfPagination(ajaxButtonEvent)) {
            processFocus(LISTING_TABLE_POS, err_tag, errTagContainer);
        } else {
            processFocus(0, err_tag, errTagContainer);
        }
    } else if (typeof undefined != typeof dropdownEvent && dropdownEvent != null) {
        if (isDropDownClickPartOfPagination(dropdownEvent)) {
            processFocus(LISTING_TABLE_POS, err_tag, errTagContainer);
        }
        /*else
        {
         processFocus(PAGE_SCROLL,err_tag,errTagContainer);
        }*/

    } else if (isClickOnLick == true) {
        setFocus(0, err_tag, errTagContainer);
    }

});



jQuery(document).ready(function() {
    var readyReporttitle = jQuery('[id$="REPORTTITLE"]');
    GLOBAL_REPORTTITLE = readyReporttitle;
    jQuery('html, body').animate({
        scrollTop: 0
    }, 'fast');
    jQuery(".headerSettingsBx").click(function(e) {
        jQuery("#settingsBx").slideToggle();
        jQuery('#profileBx').hide();
        if (jQuery('span#menuBoxId').hasClass("menuBxArrow")) {
            jQuery('.menuBxArrow').css('display', 'none');
            if (jQuery('#topbarNew').css('display') == 'block') {
                if (viewport().width < 640) {
                    jQuery("[id='topbarNew']").slideToggle();
                }
            }
        }
        /*RWD newly modified for Switch Relationship dropdown in header*/
        jQuery('input[id="DashboardAutoAlignFG.CUST_ID_SELECT_comboText"]').css('margin-' + left + '', '5px');
        jQuery('input[id="DashboardAutoAlignFG.DIV_ID_SELECT_comboText"]').css('margin-' + left + '', '5px');
        jQuery('input[id="DashboardAutoAlignFG.SELECTED_CTX_ID___comboText"]').css('margin-' + left + '', '5px');
        jQuery('input[id="DashboardAutoAlignFG.SELECTED_CTX_ID___comboText"]').css('width', '106px');
        /*RWD newly modified for Switch Relationship dropdown in header End*/

        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    jQuery(".newCaret").click(function(e) {
        jQuery("#settingsBx").slideToggle();
        /*RWD newly modified for Switch Relationship dropdown in header Start*/
        jQuery('input[id="DashboardAutoAlignFG.CUST_ID_SELECT_comboText"]').css('margin-' + left + '', '5px');
        jQuery('input[id="DashboardAutoAlignFG.DIV_ID_SELECT_comboText"]').css('margin' + left + '', '5px');
        jQuery('input[id="DashboardAutoAlignFG.SELECTED_CTX_ID___comboText"]').css('margin-' + left + '', '5px');
        jQuery('input[id="DashboardAutoAlignFG.SELECTED_CTX_ID___comboText"]').css('width', '106px');
        /*RWD newly modified for Switch Relationship dropdown in header End*/
        jQuery('#profileBx').hide();
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    jQuery(document).click(function(event) {
        if (!jQuery(event.target).closest('#settingsBx').length) {
            if (jQuery('#settingsBx').is(":visible")) {
                jQuery('#settingsBx').hide();
            }
        }

    });
    jQuery(".logoffLink").mousedown(function(e) {
        jQuery('#settingsBx').hide();
        jQuery('#profileBx').hide();
        jQuery('#mailsBox').hide();
        jQuery('#notifyBox').hide();
        jQuery("#themesBx").hide();
        if (jQuery('span#menuBoxId').hasClass("menuBxArrow")) {
            jQuery('.menuBxArrow').css('display', 'none');
            if (jQuery('#topbarNew').css('display') == 'block') {
                jQuery("[id='topbarNew']").slideToggle();
            }
        }
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    jQuery(".headerLogoutLink").mousedown(function(e) {
        jQuery('#settingsBx').hide();

        var profileElement = jQuery("#profileBx");
        if (typeof profileElement != typeof undefined && profileElement.length > 0) {
            if (jQuery('#profileBx').is(":visible")) {
                jQuery('.person-name').toggleClass("upArrow");
                jQuery('#profileBx').hide();
            }
        }

        jQuery('#mailsBox').hide();
        jQuery('#notifyBox').hide();
        jQuery("#themesBx").hide();
    });
    /*indrajit:Resetting the global variables on document load*/
    isPaginationClick = null;
    dropdownEvent = null;
    ajaxButtonEvent = null;
    isClickOnLick = null;
    PAGE_SCROLL = null;
    LISTING_TABLE_POS = null;
    widget_Elem_Dash = null;
    widget_listingTable = null;

});


jQuery(document).ready(function() {

    /* Start Fix for removing extra space coming above body in ie11 alone which was causing issue in mega menu hover.
     * In ie10, it is object and in ie11 its embed. There were multiple objects/embed tags which were of height 0 and
     * and occupying space. */
    for (i = 0; i < jQuery('object').length; i++) {
        var curr = jQuery('object')[i];
        var height = jQuery(curr).attr('height');
        if (height == "0") {
            jQuery(curr).css('display', 'none');
        }
    }

    for (i = 0; i < jQuery('embed').length; i++) {
        var curr = jQuery('embed')[i];
        var height = jQuery(curr).attr('height');
        if (height == "0") {
            jQuery(curr).css('display', 'none');
        }
    }
    /* End Fix for removing extra space coming above body in ie11 alone which was causing issue in mega menu hover*/

    /*Added by Surej for disabling enter key across application. Enabled only for login screen.*/
    /*Modified to fix enter button issue in mails 
	jQuery(document).keypress(function(event){
          var keycode = (event.keyCode ? event.keyCode : event.which);
          if(keycode == '13'){
	        if(!(jQuery('#AuthenticationFG\\.REPORTTITLE').val()=='AuthenticationScreenUX5') &&
	        		!(jQuery('#AuthenticationFG\\.REPORTTITLE').val()=='AuthenticationImagePhraseScreenUX5')&&
	        		!(jQuery('#MailFG\\.REPORTTITLE').val()=='MailComposeUX5')
	        ){
			console.log('Stopping enter/keypress in application from keypress() function in Ncommon.js');	      
			event.preventDefault();
			event.stopPropagation();
	        }
            }
	}); */


    if (!jQuery(".groupletContainer").is(':visible')) {
        jQuery(".masterGroupeltTitlehideElement").removeClass("masterGroupeltTitlehideElement");
    }

    jQuery(".menuSearchIconLink").click(function(e) {
        var autoCompDropdownVal = getMessage("menuSearchText");
        jQuery('#menuSearchBx .autocomplete-dropdown').prop('value', autoCompDropdownVal);
        jQuery('#menuLinkSearchBox').prop('value', '');
        jQuery('#menuSearchBx .autocomplete-dropdown').prop('style', 'color: #e0e1e2');
        increaseZIndexOfAutoCompleteDropdown();
        jQuery("#menuSearchBx").slideToggle();
        alignmentMenuSearch(e);
        jQuery('#settingsBx,#mailsBox,#notifyBox,#profileBx').hide();
        //phani for static search
        jQuery('#profileBx').attr("style", "display:block");
        jQuery('.profileBox_inner').attr("style", "overflow: visible");

        e.preventDefault();
        e.stopPropagation();
        var reportWidth = viewport().width;
        var menuSearchTextLeft = jQuery(".menuSearchIconLink").offset().left;
        if (reportWidth >= 480 && reportWidth <= 748) {
            jQuery(".menuSearchBx").offset({
                left: parseInt(menuSearchTextLeft) - 50
            });
            jQuery(".alertBxArrow").offset({
                left: parseInt(menuSearchTextLeft) + 10
            });
        } else if (reportWidth >= 320 && reportWidth <= 450) {
            //jQuery(".menuSearchBx").offset({ left : parseInt(menuSearchTextLeft)-110, top: 82});
            jQuery(".menuSearchBx").offset({
                left: parseInt(menuSearchTextLeft) - 110
            });
            //jQuery(".menuSearchBx").css("top","-530px");
        } else {
            //phani for static search
            //jQuery(".menuSearchBx").offset({ left : parseInt(menuSearchTextLeft)-80});
            //jQuery(".menuSearchBx").offset({ left : parseInt(menuSearchTextLeft)-330, top: 40});
            jQuery(".menuSearchBx").offset({
                left: parseInt(menuSearchTextLeft) - 330
            });
            //jQuery(".menuSearchBx").css("top","-438px");
            jQuery(".alertBxArrow").offset({
                left: parseInt(menuSearchTextLeft) + 10
            });
        }
        return false;
    });
    jQuery(document).ready(function() {
        if (jQuery('.menuSearchIconLink').length > 0) {
            if (!jQuery('#span_HREF_Notifications').hasClass("notifyIconLink_withMenuSearchIcon")) {
                jQuery('#span_HREF_Notifications').addClass("notifyIconLink_withMenuSearchIcon");
            }
            if (!jQuery('#span_HREF_Mails').hasClass("mailsIconLink_withMenuSearchIcon")) {
                jQuery('#span_HREF_Mails').addClass("mailsIconLink_withMenuSearchIcon");
            }
            if (!jQuery('#PROFILE_PHOTO').hasClass('profileIconLink_withMenuSearchIcon')) {
                jQuery('#PROFILE_PHOTO').addClass('profileIconLink_withMenuSearchIcon');
            }
            if (!jQuery('#name_header').hasClass('nameHeaderAndCaret_withMenuSearchIcon')) {
                jQuery('#name_header').addClass('nameHeaderAndCaret_withMenuSearchIcon');
            }
            if (!jQuery('#span_HREF_newCaret2').hasClass('nameHeaderAndCaret_withMenuSearchIcon')) {
                jQuery('#span_HREF_newCaret2').addClass('nameHeaderAndCaret_withMenuSearchIcon');
            }
        }
    });

    jQuery('#menuSearchBx .autocomplete-dropdown').blur(function(e) {
        if (this.value.length == 0) {
            this.value = getMessage("menuSearchText");
            this.style = 'color: #e0e1e2';
        }
        resetZIndexOfAutoCompleteDropdown();
    });
    jQuery('#menuSearchBx .autocomplete-dropdown').focus(function(e) {
        if (this.value === getMessage("menuSearchText")) {
            this.value = '';
            this.style = 'color: black';
        }
        increaseZIndexOfAutoCompleteDropdown();
    });
    jQuery('#menuSearchBx .autocomplete-dropdown').on('keydown', function(e) {
        if (event.keyCode == '13') {
            triggerMenuSearchAction();
        }
    });

    jQuery('#menuSearchBx .autocomplete-dropdown').on('input', function(e) {
        if (this.value == getMessage("menuSearchText")) {
            this.style = 'color: #e0e1e2';
        } else {
            this.style = 'color: black';
        }
        setMenuSearchBoxValue(this.value);
    });

    jQuery("#span_menuSearchIcon").click(function(e) {
        triggerMenuSearchAction();
    });

    /*phani - commented to disable profile box on click of user name.
	 * jQuery(".headertext_name").click(function(e) {
		jQuery('.person-name').toggleClass("upArrow");	  
	   	jQuery("#profileBx").slideToggle();
	   	alignment(e);
	   	var elem=document.getElementById("email");
	   	if(elem==null || typeof undefined== typeof elem)
	    {
	   	divFormMyProfileRMDetails(e);
	   	}
	   	jQuery('#settingsBx').hide();	   		   	
	   	jQuery('#mailsBox').hide();	
	   	jQuery('#notifyBox').hide(); 
	   	jQuery("#themesBx").hide();
	   	e.preventDefault();
    	e.stopPropagation();
	 return false;
	});*/
    jQuery(".applnThemes").click(function(e) {
        jQuery("#themesBx").slideToggle();
        var notifyIconLeftPos = jQuery(".notifyIconLink").offset().left;
        var notifyContainerRightPos = jQuery(".notifyBox").offset().left + jQuery(".notifyBox").width();
        var offset = notifyContainerRightPos - notifyIconLeftPos - 20;
        jQuery(".notifyArrow").css('right', offset);
        jQuery("#profileBx").hide();
        alignment(e);
        jQuery('#settingsBx').hide();
        jQuery('#mailsBox').hide();
        jQuery('#notifyBox').hide();
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    /* Added to support profile-dropdown click on user image in lower resolutions */
    jQuery(".profile-picture").click(function(e) {
        jQuery('.person-name').toggleClass("upArrow");
        jQuery("#profileBx").slideToggle();
        alignment(e);
        var elem = document.getElementById("email");
        if (elem == null || typeof undefined == typeof elem) {
            divFormMyProfileRMDetails(e);
        }
        jQuery('#settingsBx').hide();
        jQuery('#mailsBox').hide();
        jQuery('#notifyBox').hide();
        jQuery("#themesBx").hide();
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    jQuery(".personNameCaret").click(function(e) {
        jQuery('.person-name').toggleClass("upArrow");
        jQuery("#profileBx").slideToggle();
        alignment(e);
        var elem = document.getElementById("email");
        if (elem == null || typeof undefined == typeof elem) {
            divFormMyProfileRMDetails(e);
        }
        jQuery('#settingsBx').hide();
        jQuery('#mailsBox').hide();
        jQuery('#notifyBox').hide();
        jQuery("#themesBx").hide();
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    jQuery(".newCaret2").click(function(e) {
        jQuery("#profileBx").slideToggle();
        jQuery('#settingsBx').hide();
        jQuery('#mailsBox').hide();
        jQuery('#notifyBox').hide();
        jQuery("#themesBx").hide();
        e.preventDefault();
        e.stopPropagation();
        return false;
    });
    jQuery(".profilleIcon").click(function(e) {
        jQuery("#profileBx").slideToggle();
        jQuery('#settingsBx').hide();
        jQuery("#themesBx").hide();
        if (jQuery('span#menuBoxId').hasClass("menuBxArrow")) {
            jQuery('.menuBxArrow').css('display', 'none');
            if (jQuery('#topbarNew').css('display') == 'block') {
                jQuery("[id='topbarNew']").slideToggle();
            }
        }
        e.preventDefault();
        e.stopPropagation();
        return false;
    });

    jQuery(document).click(function(event) {
        var id = event.target.id;
        if (!jQuery(event.target).closest('.mailsIconLink').length) {
            if (jQuery('#mailsBox').is(":visible")) {
                if (!(jQuery(event.target).closest('div.messageTextBlackLink').length)) {
                    if (id = "" || !(id == 'CorporateUserDashboardUX5_WMAILUX5__0:errorDisplayCloseMessage')) {
                        jQuery('#mailsBox').hide();
                    }
                }
            }
        }
    });

    jQuery(document).click(function(event) {
        if (!jQuery(event.target).closest('.notifyIconLink').length) {
            if (jQuery('#notifyBox').is(":visible")) {
                jQuery('#notifyBox').hide();
            }
        }
    });

    jQuery(document).click(function(event) {
        if (!jQuery(event.target).closest('.themeChange').length) {
            if (jQuery('.themeChange').is(":visible")) {
                jQuery('.themeChange').hide();
            }
        }
    });

    jQuery(window).resize(function() {
        var userType;
        if (document.getElementById('userType')) {
            userType = document.getElementById('userType').value;
        } else if (document.getElementById('usertype')) {
            userType = document.getElementById('usertype').value;
        }

        //Start: Code changes for Ticket: 740325
        if (jQuery('.marqueeDiv').length === 1) {
            var chrSafBuffer = 0;
            /*Add buffer only in case of ie and FF*/
            if (!(jQuery.browser.chrome || jQuery.browser.safari || jQuery.browser.opera)) {
                chrSafBuffer = 2;
            }
            var top = parseInt(jQuery('.marqueeDiv').height()) + parseInt(jQuery('.sub').css('top')) + parseInt(chrSafBuffer) + 'px';

            if (viewport().width <= 639) {
                top = -25 + 'px';
                jQuery('.sub').css('top', top);
            } else {
                top = -5 + 'px';
            }
            jQuery('.sub').css('top', top);
        }
        //End: Code changes for Ticket: 740325


        if (viewport().width > 900) {
            jQuery(".stage3_listingpaneldiv_small").removeAttr('style');
            jQuery(".stage3_listingpaneldiv_Extended").removeAttr('style');
        }
        /*RWD modified for removing hover container getting opened in higher resoln when browser
         resized frm lower resoln to higher in opened state*/
        //if condition added for CRP menu issue. Ticket# 752813
        if (userType != "4") {
            if (viewport().width > 639) {
                var wrapperElements = feba.domManipulator.getElementStartingWith("wrapper_");
                for (i = 0; i < wrapperElements.length; i++) {
                    //For each wrapper element make the display as none
                    var wrapperElement = feba.domManipulator.getElement(wrapperElements[i]);
                    jQuery(wrapperElement).css({
                        "display": "none"
                    });
                }
            } else if (viewport().width < 640) {
                var wrapperElements = feba.domManipulator.getElementStartingWith("wrapper_");
                for (i = 0; i < wrapperElements.length; i++) {
                    //For each wrapper element make the display as none
                    var wrapperElement = feba.domManipulator.getElement(wrapperElements[i]);
                    jQuery(wrapperElement).css({
                        "display": "block"
                    });
                }
            }
        }
    });

    /*pfm bugdet end*/


});
/*below event will use to hide setting header division in RWD*/

/* Function to scroll the mega menu to the default selected menu option START*/
function menuScrollToSelected() {
    if (jQuery(".selected").length > 0) {
        var selectedLeftPos = jQuery(".selected").offset().left;
        //	var viewPortWidth = viewport().width;
        var viewPortWidth = jQuery('.wrapper').width();
        var viewPortOffset = jQuery('.wrapper').offset().left;
        viewPortWidth = viewPortWidth + viewPortOffset;
        var selectedElemWidth = jQuery(".selected").width();
        var selectedRightPos = selectedLeftPos + selectedElemWidth;
        var buffer = 70;
        if (selectedLeftPos > viewPortWidth || selectedRightPos + buffer > viewPortWidth) {
            jQuery(".nbs-flexisel-nav-right").trigger("click");
        } else {
            return;
        }
        setTimeout(menuScrollToSelected, 50);
    }
}

/* Function to scroll the mega menu to the default selected menu option for RTL START*/
function menuScrollToSelectedRTL() {
    if (jQuery(".selected").length > 0) {
        var selectedLeftPos = jQuery(".selected").offset().left;
        var viewPortOffset = jQuery('.wrapper').offset().left;
        var buffer = 70;
        if (selectedLeftPos < viewPortOffset + buffer) {
            jQuery(".nbs-flexisel-nav-right").trigger("click");
        } else {
            return;
        }
        setTimeout(menuScrollToSelectedRTL, 50);
    }
}

jQuery(document).ready(function() {

    if (jQuery("HTML").css("direction") == "rtl") {
        setTimeout(menuScrollToSelectedRTL, 50);
    } else {
        setTimeout(menuScrollToSelected, 50);
    }

    //fix max and min width of the drop down container of divisions	in header

    jQuery("[id$='SELECTED_DIV_ID___comboButton']").live('click', function(event) {
        console.log('Inside new test condition');
        if (jQuery('.ui-autocomplete :visible').length > 0) {
            jQuery(".ui-corner-all").css("max-width", "320px");
            /*	jQuery(".ui-corner-all").css("min-width","250px"); */
        }
    });
    jQuery("[id$='DIV_ID_SELECT_comboButton']").live('click', function(event) {
        console.log('Inside new test condition');
        if (jQuery('.ui-autocomplete :visible').length > 0) {
            jQuery(".ui-corner-all").css("max-width", "320px");
            /*	jQuery(".ui-corner-all").css("min-width","210px"); */
        }
    });

});

/* Function to scroll the mega menu to the default selected menu option END*/

jQuery(document).ready(function() {
    /*Start - Fix for megamenu container top position getting changed when user keeps mouse 
    on mega menu and scroll using mouse Surej*/
    var userType;
    if (document.getElementById('usertype')) {
        userType = document.getElementById('usertype').value;
    } else if (document.getElementById('userType')) {
        userType = document.getElementById('userType').value;
    }
    //Added to correct the position if marquee is shown to end user
    if (jQuery('.marqueeDiv').length === 1) {
        var chrSafBuffer = 0;
        /*Add buffer only in case of ie and FF*/
        if (!(jQuery.browser.chrome || jQuery.browser.safari || jQuery.browser.opera)) {
            chrSafBuffer = 2;
        }
        var top = parseInt(jQuery('.marqueeDiv').height()) + parseInt(jQuery('.sub').css('top')) + parseInt(chrSafBuffer) + 'px';
        jQuery('.sub').css('top', top);
    }

    var navigation = {
        settings: {
            topPos: 137,
        },
        scroll: function() {
            var scroll_top = jQuery(window).scrollTop(); // current vertical position from the top	
            // Added for CRP Mega menu
            if (userType != "null" && userType != null && userType != undefined && userType == '4') {
                navigation.settings.topPos = 36;
            }
            //if scroll top position is greater than toppos, then reset to initial topPosition	
            if (scroll_top > navigation.settings.topPos) {
                jQuery(".mega-menu ul li .sub-container").css("top", navigation.settings.topPos);
            } else {
                //if scroll top position is less than than top position, then decrement the scroll 
                //offset fromthe initial topPosition
                var offsetPosition = navigation.settings.topPos - scroll_top;
                jQuery(".mega-menu ul li .sub-container").css("top", offsetPosition);
            }
        }
    };
    //Invoke the scroll event	
    jQuery(window).scroll(function() {
        navigation.scroll();

        /* for header to stick to top bar
        jQuery('#wrapper1').addClass("sticky_header");
        jQuery('#wrapper1').removeClass("sticky_header");*/
        var vpWidth = viewport().width;
        if (vpWidth >= 320 && vpWidth <= 450) {
            if (jQuery(window).scrollTop() >= 50) {
                jQuery('#wrapper1').css({
                    'position': 'fixed',
                    'top': '-50px'
                });
                /* for dashboard rhs pulldown
                jQuery('.lhsWidgetsShowInResp').css("padding-top","160");*/
            } else {
                jQuery('#wrapper1').attr('style', '');
            }
        }
    });
    /*End - Fix for megamenu container top position getting changed when user keeps mouse 
	on mega menu and scroll using mouse Surej*/


    /*added for My profile visibility when clicked on dropdown values or when typing values in dropdowns to get suggestions start */
    jQuery(document).click(function(event) {
        var isDropdownTarget = false;
        if (jQuery('#profileBx').is(":visible")) {

            var profileElement = jQuery("#profileBx");
            if (typeof profileElement != typeof undefined && profileElement.length > 0) {
                var textTarget = event.target;
                var textTargetClassList = textTarget.classList;
                var textTargetClassListValue = textTarget.classList[0];
                var classList = event.target.parentNode.classList;
                var classListValue = event.target.parentNode.classList[0];
                if ((typeof classList != typeof undefined) && (classList != null) && (typeof classListValue != typeof undefined) && (classListValue != null)) {
                    if (event.target.parentNode != null && typeof event.target.parentNode.classList != typeof undefined && ((event.target.parentNode.classList[0].indexOf("autocomplete-values-list") == 0) || (event.target.parentNode.classList[0].indexOf("autocomplete-suggestions") == 0))) {
                        isDropdownTarget = true;
                    } else if ((typeof textTargetClassList != typeof undefined) && (textTargetClassList != null) && (typeof textTargetClassListValue != typeof undefined) && (textTargetClassListValue != null)) {

                        if (textTarget != null && typeof textTarget.classList != typeof undefined && (textTarget.classList[0].indexOf("autocomplete-dropdown") == 0)) {
                            isDropdownTarget = true;
                        }
                    }
                }
                if (jQuery('#profileBx').is(":visible") && (isDropdownTarget)) {
                    //jQuery('#profileBx').slideToggle();
                } else if (jQuery('#profileBx').is(":visible")) {

                    var target = event.target;
                    var myProfileElem = jQuery('#profileBx');
                    if (jQuery(myProfileElem).find(target).length) {
                        jQuery(myProfileElem).attr('style', 'display:block');
                    } else {
                        //jQuery('.person-name').toggleClass("upArrow");
                        if (!jQuery('#name_header').hasClass('upArrow')) {
                            jQuery('#name_header').addClass('upArrow');
                        }
                        //jQuery('.person-name').addClass("");
                        jQuery('#profileBx').hide();
                        /*phani for static search
 	   		jQuery('#menuSearchBx').hide();*/
                    }
                }
            }
        }
    });
    /*added for My profile visibility when clicked on dropdown or when typing values in dropdowns to get suggestions values end */

    jQuery(document).click(function(event) {
        /* for on change event to work*/
        if (jQuery('#menuSearchBx').css('display') == 'block') {
            jQuery('#profileBx').prop("style", "display:block; overflow: visible;");
        }
        var isDropdownTarget = false;
        if (jQuery('#menuSearchBx').is(":visible")) {

            var profileElement = jQuery("#menuSearchBx");
            if (typeof profileElement != typeof undefined && profileElement.length > 0) {
                var textTarget = event.target;
                var textTargetClassList = textTarget.classList;
                var textTargetClassListValue = textTarget.classList[0];
                var classList = event.target.parentNode.classList;
                var classListValue = event.target.parentNode.classList[0];
                if ((typeof classList != typeof undefined) && (classList != null) && (typeof classListValue != typeof undefined) && (classListValue != null)) {
                    if (event.target.parentNode != null && typeof event.target.parentNode.classList != typeof undefined && ((event.target.parentNode.classList[0].indexOf("autocomplete-values-list") == 0) || (event.target.parentNode.classList[0].indexOf("autocomplete-suggestions") == 0))) {
                        isDropdownTarget = true;
                    } else if ((typeof textTargetClassList != typeof undefined) && (textTargetClassList != null) && (typeof textTargetClassListValue != typeof undefined) && (textTargetClassListValue != null)) {

                        if (textTarget != null && typeof textTarget.classList != typeof undefined && (textTarget.classList[0].indexOf("autocomplete-dropdown") == 0)) {
                            isDropdownTarget = true;
                        }
                    }
                }
                if (jQuery('#menuSearchBx').is(":visible") && (isDropdownTarget)) {
                    //jQuery('#profileBx').slideToggle();
                } else if (jQuery('#menuSearchBx').is(":visible")) {
                    hideMenuSearchBx();
                    jQuery('#profileBx').prop("style", "display:none;");
                }
            }
        }
    });

    jQuery(".menuHome").click(function() {

        if (jQuery('span#menuBoxId').hasClass("menuBxArrow")) {
            if (jQuery('.menuBxArrow').css('display') == 'block') {
                jQuery('.menuBxArrow').css('display', 'none');
            } else {
                jQuery('.menuBxArrow').css('display', 'block');
            }
        } else {
            jQuery("span#menuBoxId").toggleClass("menuBxArrow");
            jQuery('.menuBxArrow').css('display', 'block');
        }
        //jQuery("span#menuBoxId").toggleClass("menuBxArrow");
        jQuery('#settingsBx').hide(); /*newly modified for Header vinay*/
        jQuery('#profileBx').hide(); /*newly modified for Header vinay*/
        jQuery('#mailsBox').hide();
        jQuery('#notifyBox').hide();
        jQuery("#themesBx").hide();
        jQuery("div#mega_menu").css('display', 'block');
        //jQuery("[id='topbarNew']").slideToggle("slow");

        if (jQuery('.customRakLeftWrapper').css('display') == 'block') {
            jQuery(".customRakLeftWrapper").css('display', 'none');
            jQuery(".stage3_menuIdTextlink").css('display', 'none');
            jQuery(".rightRoundCornerIWantTo").css('width', '0%');
            jQuery(".centerHeaderSubsecWidget").css('background', 'none');
            jQuery(".rightRoundCornerIWantTo").css('border', 'none');
            jQuery(".rakStyleContainerSmallbackUp").css('height', '0px');
            jQuery(".rakStyleContainerSmallbackUp").css('z-index', '3434');
        } else {
            jQuery(".customRakLeftWrapper").css('display', 'block');
            jQuery(".stage3_menuIdTextlink").css('display', 'block');
            jQuery(".rightRoundCornerIWantTo").css('width', '100%');
            jQuery(".centerHeaderSubsecWidget").css('background', '#FFFFFF');
            jQuery(".rightRoundCornerIWantTo").css('border', '1px solid #CCCCCC');
            jQuery(".rakStyleContainerSmallbackUp").css('height', '0px');
            jQuery(".rakStyleContainerSmallbackUp").css('z-index', '3434');
        }

        jQuery("[id='topbarNew']").toggle("slide");
        return false;
    });

    /*Breadcrumb collapse expand condition -end*/


    /*  Step1:  Find all elements starting with "parent_"
     *  Step2:  Loop through each of the elements and invoke the function for the current menu id
     */
    var parentElements = feba.domManipulator.getElementStartingWith("parent_");

    for (i = 0; i < parentElements.length; i++) {
        //For each parent element
        var parentElement = feba.domManipulator.getElement(parentElements[i]);
        var idAttribute = feba.domManipulator.getAttribute(parentElement, "id");
        //here 7 is the index after parent_. Used to extract only the menu id from id attribute
        var currentMenuId = idAttribute.substr(7, idAttribute.length);
        /* Dont invoke the effect if the parent doesnt contain any child elements*/
        if (jQuery("#div_" + currentMenuId).children().length > 0) {
            InvokeMegaMenuEffects(currentMenuId);
        }
    }
    /*  Step1:  Find all elements starting with "Slide_"
     *  Step2:  Loop through each of the elements and invoke the function for the current menu id
     */
    var slideElements = feba.domManipulator.getElementStartingWith("Slide_");
    for (i = 0; i < slideElements.length; i++) {
        //For each slide element
        var slideElement = feba.domManipulator.getElement(slideElements[i]);
        var idSlide = feba.domManipulator.getAttribute(slideElement, "id");
        //here 6 is the index after Slide_. Used to extract only the menu id from id attribute
        var currentSlideMenuId = idSlide.substr(6, idSlide.length);
        /* Dont invoke the effect if the parent doesnt contain any child elements*/
        if (jQuery("#div_" + currentSlideMenuId).children().length > 0) {
            InvokeSlideEffects(currentSlideMenuId);
        }
    }

});

/* This function invokes the mega menu effect for both retail and corporate at 640px and above*/
function InvokeMegaMenuEffects(currentMenuId) {
    var parentMenuID = "#parent_" + currentMenuId;
    var identifierMenuID = "#ID_" + currentMenuId;
    var divMenuID = "#div_" + currentMenuId;
    var listMenuID = "#IL_" + currentMenuId + "_10";
    var hyperLinkMenuID = "a#ID_IL_" + currentMenuId + "_10.mega-hdr-a";
    var wrapperMenuID = "#wrapper_" + currentMenuId;
    var subIDMenu = "a#ID_" + currentMenuId;
    var bufferLTR;
    var bufferRTL;
    var userType;
    if (document.getElementById('userType')) {
        userType = document.getElementById('userType').value;
    } else if (document.getElementById('usertype')) {
        userType = document.getElementById('usertype').value;
    }
    if (userType == "1") {
        //default buffer value
        bufferLTR = 50;
        bufferRTL = 50;
        /*If any menu in retail need fine tuning of buffer you can provide here*/
        if (currentMenuId == "FTRE") {
            bufferLTR = 0;
            bufferRTL = 0;
        }

    } else if (userType == "2") {
        //default buffer value
        bufferLTR = 30;
        bufferRTL = 50;

        /*If any menu in retail need fine tuning of buffer you can provide here*/
        if (currentMenuId == "INVM") {
            if (viewport().width > 1100) {
                bufferLTR = -70;
            } else {
                bufferLTR = -30;
            }
        } else if (currentMenuId == "CLIMG") {
            bufferLTR = -30;
        } else if (currentMenuId == "CTFN") {
            bufferLTR = -30;
            bufferRTL = 60;
        } else if (currentMenuId == "EIPP") {
            bufferLTR = -30;
            bufferRTL = -20;
        } else if (currentMenuId == "CADM") {
            if (viewport().width > 1100) {
                bufferLTR = -70;
            } else {
                bufferLTR = 30;
            }
            bufferRTL = -20;
        } else if (currentMenuId == "CGNS") {
            if (viewport().width > 1100) {
                bufferLTR = -70;
            } else {
                bufferLTR = 30;
            }
            bufferRTL = -150;
        }

    }

    jQuery(parentMenuID).mouseenter(function() {
        if (jQuery("HTML").css("direction") == "rtl") {
            megaMenuHoverDisplayRTL(parentMenuID, identifierMenuID, divMenuID, wrapperMenuID, bufferRTL);
        } else {
            megaMenuHoverDisplay(parentMenuID, identifierMenuID, divMenuID, wrapperMenuID, bufferLTR);
        }
        onMouseOverRWDEffects(parentMenuID, listMenuID, hyperLinkMenuID, wrapperMenuID);
    }).mouseleave(function() {
        onMouseLeaveRWDEffects(parentMenuID, listMenuID, hyperLinkMenuID);
    });
    listElementRWDEffect(listMenuID, hyperLinkMenuID);

    jQuery(subIDMenu).mouseenter(function() {
        megaMenuHoverDisplay(parentMenuID, identifierMenuID, divMenuID, wrapperMenuID, bufferLTR);
        onMouseOverRWDEffects(parentMenuID, listMenuID, hyperLinkMenuID, wrapperMenuID);
    });

}

/* This function invokes the mega menu effect for both retail and corporate below 640px */
function InvokeSlideEffects(currentMenuId) {
    var slideMenuId = "#Slide_" + currentMenuId;
    var listMenuId = "#IL_" + currentMenuId + "_10";
    var hyperLinkMenuId = "a#ID_" + currentMenuId;
    var divMenuId = "#div_" + currentMenuId;
    slideEffects(slideMenuId, listMenuId, hyperLinkMenuId, divMenuId);
}

/*Start Slide effects for RWD*/
function slideEffects(slideId, listId, hyperlinkId, divId) {
    var submenu = ".mega-menu div.mega-menu-list-wrapper ul li" + listId + ">ul.sub-menu";
    var submenu1 = ".mega-menu div.mega-menu-list-wrapper ul li" + listId + ">ul.sub-menu1";
    var divFullId = "div" + slideId;
    jQuery(slideId).click(function() {
        jQuery(submenu).css('display', 'block');
        jQuery(submenu1).css('display', 'block');
        jQuery(divFullId).toggleClass("SlideButtonDown");
        jQuery(hyperlinkId).toggleClass("hyperLinkHeadingClick");
        jQuery(divId).slideToggle();
        if (jQuery(slideId).hasClass("SlideButtonDown")) {
            jQuery(divId).css('display', 'block');
        }
        return false;
    });

    jQuery(hyperlinkId).click(function() {
        if (!(typeof isAdaptiveUI != 'undefined' && isAdaptiveUI == "true")) {
            if (viewport().width < 640 && viewport().width > 1) {
                jQuery(submenu).css('display', 'block');
                jQuery(submenu1).css('display', 'block');
                jQuery(divFullId).toggleClass("SlideButtonDown");
                jQuery(hyperlinkId).toggleClass("hyperLinkHeadingClick");
                jQuery(divId).slideToggle();
                if (jQuery(slideId).hasClass("SlideButtonDown")) {
                    jQuery(divId).css('display', 'block');
                }
                return false;
            }
        }
    });

    jQuery(window).resize(function() {
        if (!(typeof isAdaptiveUI != 'undefined' && isAdaptiveUI == "true")) {
            if (viewport().width < 640 && viewport().width > 1) {
                if (jQuery(slideId).hasClass("SlideButtonDown")) {
                    jQuery(submenu).css('display', 'block');
                    jQuery(submenu1).css('display', 'block');
                    jQuery(divId).css('display', 'block');
                }
            }
            if (jQuery(hyperlinkId).hasClass("hyperLinkHeadingClick")) {
                jQuery(submenu).css('display', 'block');
                jQuery(submenu1).css('display', 'block');
                jQuery(divId).css('display', 'block');
            }
        }
    });
}
/*End Slide effects for RWD*/

/* Start function for handling on mouse enter RWD effects*/
function onMouseOverRWDEffects(parentId, listId, hyperLinkId, wrapperId) {
    //alert('Inside onMouseOverRWDEffects');
    var parentFullId = ".mega-menu>div>div>ul>li" + parentId + ">div";
    var listFullSubmenuId = ".mega-menu div.mega-menu-list-wrapper ul li" + listId + ">ul.sub-menu";
    var listFullSubmenu1Id = ".mega-menu div.mega-menu-list-wrapper ul li" + listId + ">ul.sub-menu1";

    if (viewport().width > 639) {
        jQuery(parentFullId).css('display', 'block');
        jQuery(listFullSubmenuId).css('display', 'block');
        jQuery(listFullSubmenu1Id).css('display', 'block');
        jQuery(listId).css('background-color', '#EEEEEE');
        jQuery(wrapperId).css({
            "display": "block"
        });
    }
    jQuery('#settingsBx').hide(); /*newly modified for Header vinay*/
    jQuery('#profileBx').hide(); /*newly modified for Header vinay*/
    jQuery('#mailsBox').hide();
    jQuery('#notifyBox').hide();
    jQuery("#themesBx").hide();
}
/* End function for handling on mouse enter RWD effects*/


/*Start list Element RWDEffects*/
function listElementRWDEffect(listElementId, hyperlinkId) {
    var submenu = ".mega-menu div.mega-menu-list-wrapper ul li" + listElementId + ">ul.sub-menu";
    var submenu1 = ".mega-menu div.mega-menu-list-wrapper ul li" + listElementId + ">ul.sub-menu1";
    jQuery(listElementId).mouseenter(function() {
        if (viewport().width > 639) {
            jQuery(submenu).css('display', 'block');
            jQuery(submenu1).css('display', 'block');
            jQuery(listElementId).css('background-color', '#EEEEEE');
        }
    }).mouseleave(function() {
        if (viewport().width > 639) {
            jQuery(submenu).css('display', 'none');
            jQuery(submenu1).css('display', 'none');
            jQuery(listElementId).css('background-color', '#FFFFFF');
        }
    });
}
/*End list Element RWDEffects*/

/* Start function for handling on mouse leave RWD effects*/
function onMouseLeaveRWDEffects(parentId, listId, hyperLinkId) {
    var parentFullId = ".mega-menu>div>div>ul>li" + parentId + ">div";
    if (viewport().width > 639) {
        jQuery(parentFullId).css('display', 'none');
        jQuery(listId).css('background-color', '#EEEEEE');
    }
}
/* End function for handling on mouse leave RWD effects*/

/*mega menu hover positioning within window width-start*/
function megaMenuHoverDisplay(parentId, elementId, divId, wrapperMenuID, buffer) {
    var offset = jQuery(elementId).offset().left;
    var viewPortWidth = jQuery('.wrapper').width();
    var viewPortOffset = jQuery('.wrapper').offset().left;
    //var subContainerWidth = jQuery('.mega-menu ul li .sub-container.mega .sub').width();
    var subContainerWidth = jQuery(wrapperMenuID).width();
    var subEndPosition = offset + subContainerWidth;
    var overflowLength;
    var marginLeft;
    if (viewport().width > 1500) {
        buffer = buffer - 137;
    }

    if (subEndPosition > (viewPortWidth + viewPortOffset)) {
        overflowLength = viewPortWidth - subEndPosition;
        marginLeft = offset + overflowLength - buffer + viewPortOffset;
        jQuery(divId).css({
            "left": marginLeft
        });
    } else if (offset < viewPortOffset) {
        jQuery(divId).css({
            "left": viewPortOffset
        });
    } else {
        jQuery(divId).css({
            "left": offset
        });
    }
}
/*mega menu hover positioning within window width-end*/
/*mega menu hover positioning within window width RTL-start*/
function megaMenuHoverDisplayRTL(parentId, elementId, divId, wrapperMenuID, buffer) {
    //var offset = jQuery(elementId).offset().left;
    var offset = jQuery(elementId).offset().left;
    var viewPortWidth = jQuery('.wrapper').width();
    var viewPortOffset = jQuery('.wrapper').offset().left;
    //var subContainerWidth = jQuery('.mega-menu ul li .sub-container.mega .sub').width();
    var subContainerWidth = jQuery(wrapperMenuID).width();
    var subEndPosition = offset + subContainerWidth;
    var buff = parseInt(viewPortWidth) - parseInt(offset);
    var overflowLength;
    var marginRight;
    if (viewportWidth().width > 1500) {
        buffer = parseInt(buffer) - 137;
    }

    if (subEndPosition < viewPortOffset) {
        overflowLength = viewPortOffset - subEndPosition;
        marginLeft = offset + overflowLength + parseInt(buffer);
        jQuery(divId).css({
            "left": marginLeft
        });
    } else if (subEndPosition > (viewPortWidth + viewPortOffset)) {
        overflowLength = viewPortWidth - subEndPosition;
        if (offset > viewPortWidth) {
            marginLeft = viewPortWidth + overflowLength - buffer + buff;
            if (viewportWidth().width < 1300) {
                marginLeft = 0; //marginLeft-buff;
            }
        } else {
            marginLeft = offset + overflowLength - buffer;
            if (viewportWidth().width < 1300) {
                if (parseInt(marginLeft) > (parseInt(viewPortWidth) * .35)) {
                    marginLeft = 100; //buffer+20;
                } else {
                    marginLeft = 0;
                }
            }
        }
        jQuery(divId).css({
            "right": marginLeft
        });
    } else {
        jQuery(divId).css({
            "left": offset
        });
        jQuery(divId).css({
            "right": "-1"
        });

        //jQuery(divId).style.removeAttribute('right');
    }
}
/*mega menu hover positioning within window width RTL-end*/

function formWidgetErrorUX3Page(groupletId, textStatus, callBackStatement) {
    if (typeof window.formCustomWidgetErrorPage === "function") {
        return formCustomWidgetErrorPage(textStatus, callBackStatement);
    } else {

        var erroDisplayDiv = feba.domManipulator.getElement('#' + groupletId).find('.widgetErrorDisplayHw');
        if (erroDisplayDiv && erroDisplayDiv.length == 0) {
            erroDisplayDiv = feba.domManipulator.getElement('#ParentDiv_' + groupletId).find('.widgetErrorDisplayHw');
        }
        var currentWidgetWidth = feba.domManipulator.getElement(erroDisplayDiv).closest('.widget-body').width();

        if (currentWidgetWidth == null) {
            currentWidgetWidth = feba.domManipulator.getElement('#' + groupletId).closest('.widget-body').width();
        }
        var messageIdentifier = textStatus;
        var errorHtml = "";
        var bgColourwithwidth = "redbgwithwidth";
        var bgColour = "redbg";
        var bgTopLeft = "redtopleft";
        var bgTopRight = "redtopright";
        var bgBottomLeft = "redbottomleft";
        var bgBottomRight = "redbottomright";
        var parentTableClass = "widgetErrorDisplayHw";

        errorHtml = errorHtml + ("<div id=\"MessageDisplay_TABLE\" class=\" " + parentTableClass + "\" aria-live=\"assertive\" role=\"alert\">");
        /*Error message wrapper was coming on top of the next components below it when position was absolute*/
        /*errorHtml=errorHtml+("<div id=\"wrapperError\" class=\" positionabsolute\" >");*/
        errorHtml = errorHtml + ("<div id=\"wrapperError\" class=\"positionrelative\" >");
        errorHtml = errorHtml + ("<p class=\"errordisplaypulldown\" data-messagemode=\"single\" data-role=\"down\">");
        errorHtml = errorHtml + ("<span class=\"errordisplaywidgetright\">");
        errorHtml = errorHtml + ("<img id=\"" + "errorDisplayPullArrow" + "\" src=\"" + imagePath + "/db_icons_info_bar_arow_down.png\" onClick=\"toggleErrorMessage(this);\" alt=\"Click to view more\" title=\"Click to view more\" class=\"absmiddle arrowtoggle\"/>");
        errorHtml = errorHtml + ("<img src=\"" + imagePath + "/db_icons_info_bar_close.png\" onClick=\"closeErrorMessage(this);\" alt=\"" + getMessage("TitleForClose") + "\" title=\"" + getMessage("TitleForClose") + "\" class=\"absmiddle\"/>");
        errorHtml = errorHtml + ("</span>");
        errorHtml = errorHtml + ("</p>");
        errorHtml = errorHtml + ("<div  class=\"" + bgColourwithwidth + "\">");
        errorHtml = errorHtml + ("<div  class=\"" + bgColourwithwidth + "\">");
        errorHtml = errorHtml + ("<div class=\"errorDisplayDiv width100percent\">");
        errorHtml = errorHtml + ("<p  class=\"" + bgColourwithwidth + "\">");
        errorHtml = errorHtml + ("<span class=\"" + bgTopLeft + "\"><span></span></span>");
        errorHtml = errorHtml + ("<span class=\"" + bgColour + "\"><span></span></span>");
        errorHtml = errorHtml + ("<span class=\"" + bgTopRight + "\"> <span></span></span> </p>");
        errorHtml = errorHtml + ("</div>");
        errorHtml = errorHtml + ("<div id=\"calErrWrapper\" role = \"//alert\" class=\"errorContentWrapper " + bgColour + "\"><a id=\"errorlink1\" href=\"#\"><img class=\"absmiddle\" title=\"" + getMessage("NoWidgetsTitle") +
            "\" " + "alt=\"" + getMessage("NoWidgetsAlt") + "\" src=\"" + getMessage("NoWidgetsImageSrc") + "\"></a>");
        if (feba.domManipulator.isRTL()) {
            errorHtml = errorHtml + "<span dir=\"ltr\"> [100053] [CONTLS0004] </span>" + getMessage(messageIdentifier);
        } else {
            if (feba.domManipulator.getElementById('display_error_var').attr("value") == "A") {
                errorHtml = errorHtml + "<span dir=\"ltr\"><p style=\"display: inline\" > [CONTLS0004] </p> <p style=\"display: inline\" > [100053] </p> </span> <p style=\"display: inline\" >" + getMessage(messageIdentifier) + "  </p>";
            } else if (feba.domManipulator.getElementById('display_error_var').attr("value") == "E") {
                errorHtml = errorHtml + "<span dir=\"ltr\"><p style=\"display: none\" >[CONTLS0004] </p> <p style=\"display: inline\" > [100053] </p></span> <p style=\"display: inline\" >" + getMessage(messageIdentifier) + " </p>";
            } else if (feba.domManipulator.getElementById('display_error_var').attr("value") == "I") {
                errorHtml = errorHtml + "<span dir=\"ltr\"><p style=\"display: inline\" > [CONTLS0004] </p> <p style=\"display: none\" > [100053] </p></span> <p style=\"display: inline\" >" + getMessage(messageIdentifier) + "</p>";
            } else {
                errorHtml = errorHtml + "<span dir=\"ltr\"><p style=\"display: none\" > [CONTLS0004] </p> <p style=\"display: none\" > [100053] </p></span> <p style=\"display: inline\" >" + getMessage(messageIdentifier) + " </p>";
            }
        }
        errorHtml = errorHtml + ("</div>");
        errorHtml = errorHtml + ("<div class=\"width100percent\">");
        errorHtml = errorHtml + ("<p  class=\"" + bgColourwithwidth + "\">");
        errorHtml = errorHtml + ("<span class=\"" + bgBottomLeft + "\"> <span></span></span>");
        errorHtml = errorHtml + ("<span class=\"" + bgColour + "\"> <span></span></span>");
        errorHtml = errorHtml + ("<span class=\"" + bgBottomRight + "\"> <span></span></span> </p>");
        errorHtml = errorHtml + ("</div>");
        errorHtml = errorHtml + ("</div>");
        errorHtml = errorHtml + ("</div>");
        errorHtml = errorHtml + ("</div>");
        errorHtml = errorHtml + ("</div>");
        errorHtml = errorHtml + ("<div class=\"refreshWidgetLinkWrapper\">");
        //errorHtml=errorHtml+("<span class=\"refreshWidgetLinkSpanWrapper\" style=\"width:"+currentWidgetWidth+";\">");
        errorHtml = errorHtml + ("<span class=\"refreshWidgetLinkSpanWrapper\" >");

        errorHtml = errorHtml + ("<a class=\"bluelink\" href=\"javascript:" + callBackStatement + "\"><img class=\"refreshWidgetUX3Image\" src=\"" + imagePath + "/refreshUX3.png\"></img>" + getMessage("Refresh") + "</a>");
        errorHtml = errorHtml + ("</span>");
        errorHtml = errorHtml + ("</div>");

        return errorHtml;
    }
}

function handleWrappedSpans() {

    var len = jQuery('.groupletsection').find(jQuery('input[type="submit"]').parent('span:visible')).parent().length;
    for (i = 0; i < len; i++) {
        //if(i==4){
        var a = jQuery('.groupletsection').find(jQuery('input[type="submit"]').parent('span:visible')).parent()[i];
        var elemId = null;
        if (a && a != null) {
            elemId = a.id;
        }

        if (elemId && elemId != null && elemId != undefined) {

            var element = document.getElementById(elemId);
            var parentSpanWidth = jQuery(element).width();

            var childSpanLen = jQuery(a).find('>span:visible').length;
            var childSum = 0;
            for (j = 0; j < childSpanLen; j++) {
                var marginleft = 0;
                var marginright = 0;
                var paddingleft = 0;
                var paddingright = 0;
                marginleft = jQuery(jQuery(a).find('>span:visible')[j]).css("margin-" + left + "");
                marginright = jQuery(jQuery(a).find('>span:visible')[j]).css("margin-" + right + "");
                paddingleft = jQuery(jQuery(a).find('>span:visible')[j]).css("padding-" + left + "");
                paddingright = jQuery(jQuery(a).find('>span:visible')[j]).css("padding-" + right + "");
                var totalMargin = 0;
                var totalPadding = 0;
                totalMargin = parseInt(marginleft) + parseInt(marginright);
                totalPadding = parseInt(paddingleft) + parseInt(paddingright);
                childSum = childSum + parseInt(jQuery(jQuery(a).find('>span:visible')[j]).css("width")) + totalMargin + totalPadding;
            }

            if ((parentSpanWidth > 0) && (childSum > parentSpanWidth)) {
                var origMarginTop = jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top");
                jQuery(a).find(jQuery('input[type="submit"]')).parent().attr('data-marginTop', origMarginTop);
                if (jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginApplied") != "Y") {
                    if (parseInt(origMarginTop) == 0) {
                        jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top", "2px");
                        jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginApplied", "Y");
                    } else {
                        jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top", (parseInt(origMarginTop) + parseInt("2px")) + 'px');
                        jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginApplied", "Y");
                    }
                }
            } else {
                var fetchedMarginTop = jQuery(a).find(jQuery('input[type="submit"]')).parent().attr('data-marginTop');
                if (parseInt(fetchedMarginTop) == 0) {
                    jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top", "0px");
                    jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginApplied", "N");
                } else {
                    jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top", (parseInt(fetchedMarginTop) - parseInt("2px")) + 'px');
                    jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginApplied", "N");
                }
            }
        }
    }



}
/*Function added for handling button alignment issue in modal view's listing section*/
function handleModalWrappedSpans(groupletId) {

    if (groupletId == "null" || groupletId == null || groupletId == "" || groupletId == "undefined") {
        var parentDivId = "#\\:" + "ListingPanel_LeftContainer_Stage3_ModalView12";
    } else {
        var parentDivId = "#" + groupletId + "\\:" + "ListingPanel_LeftContainer_Stage3_ModalView12";
    }

    var len = jQuery("#MODAL_VIEW_CONTAINER").find(parentDivId).find(jQuery('input[type="submit"]').parent('span:visible')).parent().length;
    for (i = 0; i < len; i++) {
        var parentElement = jQuery("#MODAL_VIEW_CONTAINER").find(parentDivId).find(jQuery('input[type="submit"]').parent('span:visible')).parent()[i];
        var elemId = parentElement.id;
        if (elemId && elemId != null && elemId != undefined) {
            var marginTop = jQuery(parentElement).find(jQuery('input[type="submit"]')).css("margin-top");
            var paddingTop = jQuery(parentElement).find(jQuery('input[type="submit"]')).css("padding-top");
            /*If no margin or padding is present between listing table and buttons then only append margin*/
            if (marginTop != null && marginTop != undefined && marginTop == "0px" &&
                paddingTop != null && paddingTop != undefined && paddingTop == "0px") {
                jQuery(parentElement).find(jQuery('input[type="submit"]')).parent().css("margin-top", "7px");
            }
        }
    }

}
/*Function added for removing style attributes added dynamical to available balance*/
function removeStyleOfBalance(groupletId) {
    if (groupletId == null || groupletId == "null" || groupletId == undefined) {
        var element = feba.domManipulator.getElementById("AvailableBalance1");
    } else {
        var element = feba.domManipulator.getElementById(groupletId + "\\:AvailableBalance1");
    }
    jQuery(element).removeAttr('style');
}

function nextgenBackButtonHide(is_nextgen) {
    if (jQuery('#is_nextgen').length > 0 && jQuery('#is_nextgen').attr('value') == "Y") {
        jQuery('.modalWrapper').find('.HW_formbtn_search').addClass('hideElement')
    }

}
/*Function added for appending margin to buttons for correct alignment in lower resolution*/
function handleWrappedSpansRows() {

    var len = jQuery('.groupletsection').find(jQuery('input[type="submit"]').parent('span:visible')).parent().parent().length;
    for (i = 0; i < len; i++) {
        //if(i==4){
        var a = jQuery('.groupletsection').find(jQuery('input[type="submit"]').parent('span:visible')).parent().parent()[i];
        var elemId = a.id;
        if (elemId && elemId != null && elemId != undefined) {

            var element = document.getElementById(elemId);
            var parentSpanWidth = jQuery(element).width();

            console.log('elemId' + elemId);
            var childSpanLen = jQuery(a).children().find('>span:visible').length;
            var childSum = 0;
            for (j = 0; j < childSpanLen; j++) {
                var marginleft = 0;
                var marginright = 0;
                var paddingleft = 0;
                var paddingright = 0;
                marginleft = jQuery(jQuery(a).children().find('>span:visible')[j]).css("margin-" + left + "");
                marginright = jQuery(jQuery(a).children().find('>span:visible')[j]).css("margin-" + right + "");
                paddingleft = jQuery(jQuery(a).children().find('>span:visible')[j]).css("padding-" + left + "");
                paddingright = jQuery(jQuery(a).children().find('>span:visible')[j]).css("padding-" + right + "");
                var totalMargin = 0;
                var totalPadding = 0;
                totalMargin = parseInt(marginleft) + parseInt(marginright);
                totalPadding = parseInt(paddingleft) + parseInt(paddingright);
                /*dropdown will exist always along with label*/
                if (jQuery(jQuery(a).children().find('>span:visible')[j]).hasClass('ui-combobox') &&
                    jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginApplied") != "Y") {
                    childSum = childSum + 120;
                }
                childSum = childSum + parseInt(jQuery(jQuery(a).children().find('>span:visible')[j]).css("width")) + totalMargin + totalPadding;
                //check for every element if its overflowing and if yes, apply attr has-overflow
                if (parseInt(parentSpanWidth) - parseInt(childSum) < 0) {
                    jQuery(jQuery(a).children().find('>span:visible')[j]).attr('has-overflow', 'Y');
                } else {
                    jQuery(jQuery(a).children().find('>span:visible')[j]).attr('has-overflow', 'N');
                }
            }
            // Added check to indentify whether children are buttons and dropdowns
            var isAllChilrenButtons = false;
            var count = 0;
            for (j = 0; j < childSpanLen; j++) {
                if (jQuery(jQuery(jQuery(a).children().find('>span:visible')[j]).children()).is('input[type="submit"]')) {
                    count++;
                } else if (jQuery(jQuery(a).children().find('>span:visible')[j]).attr('class') === 'ui-combobox') {
                    count++;
                }
            }
            if (count === childSpanLen) {
                isAllChilrenButtons = true;
                console.log(count);
                console.log(childSpanLen);
                console.log(isAllChilrenButtons);
            }
            if (isAllChilrenButtons) {
                if ((parentSpanWidth > 0) && (childSum > parentSpanWidth)) {
                    var origMarginTop = jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top");
                    jQuery(a).find(jQuery('input[type="submit"]')).parent().attr('data-marginTopRow', origMarginTop);
                    if (jQuery(jQuery(a).find(jQuery('input[type="submit"]')).parent()).attr('marginApplied') != "Y") {
                        if (jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginAppliedRow") != "Y" || parseInt(origMarginTop) == 0) {
                            if (parseInt(origMarginTop) == 0) {
                                jQuery('span[has-overflow="Y"]').css("margin-top", "2px");
                                jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginAppliedRow", "Y");
                            } else {
                                jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top", (parseInt(origMarginTop) + parseInt("2px")) + 'px');
                                jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginAppliedRow", "Y");
                            }
                        }
                    } else {
                        var fetchedMarginTop = jQuery(a).find(jQuery('input[type="submit"]')).parent().attr('data-marginTopRow');
                        if (parseInt(fetchedMarginTop) == 0) {
                            jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top", "0px");
                            jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginAppliedRow", "N");
                        } else {
                            jQuery(a).find(jQuery('input[type="submit"]')).parent().css("margin-top", (parseInt(fetchedMarginTop) - parseInt("2px")) + 'px');
                            jQuery(a).find(jQuery('input[type="submit"]')).parent().attr("marginAppliedRow", "N");
                        }
                    }
                }
            }

        }
    }



}
//added for Donut Chart dropdown:Mahesh	
function getAccountChartByType(typAcct1) {
    //document.getElementById("PageConfigurationMaster_W102__1:GO_Event");

    //alert(document.getElementById("PageConfigurationMaster_W102__1:GO_Event").value);

    jQuery("#PageConfigurationMaster_W102__1\\:GO_Event").trigger("click");

    console.log("event fired");

}

function getAccountChartWidgetByType(typAcct1) {

    jQuery("#RetailUserDashboardUX3_W108__0\\:GO_Event").trigger("click");

}
//added for donut Chart pagination:Mahesh
function nextGenPaginate() {
    console.log("in nextGen Pagination function");
    var windowWidth = viewport().width;
    if (jQuery('.donutWrapperUl').find('li').length > 0) {
        if (parseInt(windowWidth) <= 899) {
            jQuery('.donutWrapperUl').jPaginate({
                items: 2,
                pagination_class: 'calendarPagination',
                cookies: false,
                next: '&nbsp;',
                previous: '&nbsp;',
                paginationWrapper: true,
                paginationWrapperClass: 'calendarPaginationWrapper',
                paginationLocation: 'nextGen'
            });
        } else {
            jQuery('.donutWrapperUl').jPaginate({
                items: 4,
                pagination_class: 'calendarPagination',
                cookies: false,
                next: '&nbsp;',
                previous: '&nbsp;',
                paginationWrapper: true,
                paginationWrapperClass: 'calendarPaginationWrapper',
                paginationLocation: 'nextGen'
            });
        }
    }
}
/*Function is used to make the dropdown display in ebux3 comboxbox style and to float label "download details as"
 * to left in case "Select" is chosen from dropdown and trying to download*/
function handleDownloadException(groupletDivId) {
    convertComboboxes();
    jQuery(".stage3_downloadnav .error_highlight").addClass("stage3_searchsimpletext_errDisplay");
    jQuery(".stage3_downloadnav_modalview .error_highlight").addClass("stage3_searchsimpletext_errDisplay");
    //added for download component in modal view
}
/*if file is not uploaded and clicked on continue, throws js exception and combobox if present on the screen does not paints correctly.*/
function handleMultipartException(groupletId) {
    convertComboboxes();
    handleRHSAlignment(groupletId);
}

function showSelectedDonutLegends(typAct, colorCode1, legendText1, balance1, colorCode2, legendText2, balance2, balance3, balance4, balance5, legendText3, colorCode3) {
    //alert("inside showSelectedDonutLegends fuction");

    var holderId = jQuery('.summaryLegendHolder').attr('id');
    jQuery('#' + holderId).attr('class', 'summaryLegendHolder ' + typAct + '_legendHolder'); //writing the selected class

    jQuery('.legendColorOne').css("background-color", colorCode1);
    jQuery('.textLegendOne').html(legendText1 + ":"); //innerHTML =legendText1;
    jQuery('.textBalance1Holder').html(balance1); //innerHTML = balance1;

    jQuery('.legendColorTwo').css("background-color", colorCode2);
    jQuery('.textLegendTwo').html(legendText2 + ":"); //innerHTML =legendText1;
    jQuery('.textBalance2Holder').html(balance2); //innerHTML = balance1;
    //jQuery('.textLegendSmall').html(legendText1);

    jQuery('.textLegendSmall').html("Available Balance");
    if (typAct == "OPR") {
        var oprBalColor = "";
        if (balance3.indexOf("-") == -1) {
            oprBalColor = "hwgreentxtcr";
        }
        jQuery('.textBalance3Holder').addClass(oprBalColor);
    } else {
        jQuery('.textBalance3Holder').removeClass("hwgreentxtcr");
    }
    jQuery('.textBalance3Holder').html(balance3); //innerHTML =balance3;
    if (balance5 && balance5 != "undefined") {
        jQuery('.textBalance3Holder').html(balance5); //innerHTML =balance3;
    }
    if (typAct == "CCD") {
        jQuery('.textLegendSmall').html("Total Amount Due");
        jQuery('.textBalance3Holder').html(balance5); //innerHTML =balance3;
    }
    if (typAct == "LON") {
        jQuery('.textLegendSmall').html("Principal");
        jQuery('.textBalance3Holder').html(balance5); //innerHTML =balance3;
    }
    if (typAct == "DEP") {
        jQuery('.textLegendSmall').html("Current Value");
        jQuery('.textBalance3Holder').html(balance5); //innerHTML =balance3;
    }
    if (legendText3 != "NA") {
        jQuery('.legendColorLeftThree').css("background-color", colorCode3);
        jQuery('.textLegendLeftThree').html(legendText3 + ":"); //innerHTML =legendText1;
        jQuery('.textBalanceLegendLeftThreeHolder').html(balance4); //innerHTML = balance1;
        jQuery('.legendDetailsHolderRowThree').show();
    } else {
        jQuery('.legendDetailsHolderRowThree').hide();
    }
}
/*For allowing the user to select/check the radio buttons on Approver Details component
 *Fix for ticket id: 734986
 */
function invokeRadioButtonClickApproverDetails() {
    jQuery('.css-labelradio').bind('click', function(event) {
        jQuery(this).siblings().trigger('click');
    });

}
//Script to Resize AuthenticationScreen
function fontResizeOnldForAuthScreen() {
    if (document.getElementById("Layer1") != null) document.getElementById("Layer1").style.fontSize = "1.09em";
    if (document.getElementById("outerTab") != null) document.getElementById("outerTab").style.fontSize = "1.09em";
}
/*Function for appending left border to column headings of listing table 
 *and making amount colunms right aligned.
 *It will append border to only those heading in which css class doesn't have border*/
function handleListingTableUI() {
    var userType;
    if (document.getElementById('usertype')) {
        userType = document.getElementById('usertype').value;
    } else if (document.getElementById('userType')) {
        userType = document.getElementById('userType').value;
    }
    if (userType == '2' || userType == '1') {
        for (t = 0; t < jQuery('table').length; t++) {
            var currTable = jQuery('table')[t];
            var amtCols = jQuery(currTable).find('[data-rightAlign="true"]');
            if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                amtCols = jQuery('#MODAL_VIEW_CONTAINER').find('table').find('[data-rightAlign="true"]');
            }
            var indexs = [];
            //Logic for making amount columns right aligned
            for (j = 0; j < amtCols.length; j++) {
                jQuery(jQuery(amtCols)[j]).addClass('amtRightAlign');
                jQuery(jQuery(amtCols)[j]).parent().addClass('amtRightAlign');
            }
            var rowElements = jQuery(jQuery(currTable).find('[data-rightAlign="true"]')[0]).parent().parent().children('td');
            if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                rowElements = jQuery('#MODAL_VIEW_CONTAINER').find('table').find('[data-rightAlign="true"]').parent().parent().children('td');
            }
            for (k = 0; k < rowElements.length; k++) {
                if (jQuery(jQuery(rowElements)[k]).find('[data-rightAlign="true"]').length > 0) {
                    indexs.push(k);
                }
            }
            //Logic for adding separator in table column heading if not present in style given in ppdl/dpdl
            var listSize = jQuery(currTable).find('th').length;
            if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                listSize = jQuery('#MODAL_VIEW_CONTAINER').find('table').find('th').length;
            }
            var list = jQuery(currTable).find('th');
            if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                list = jQuery('#MODAL_VIEW_CONTAINER').find('table').find('th');
            }
            var width;
            for (i = (listSize - 1); i > 0; i--) {
                if (jQuery("HTML").css("direction") == "rtl") {
                    width = parseInt(jQuery(list[i]).css('border-' + right + '-width'));
                } else {
                    width = parseInt(jQuery(list[i]).css('border-' + left + '-width'));
                }
                if (width != undefined && width != null && width === 0) {
                    jQuery(list[i]).addClass('tableColSep');
                }
                for (m = 0; m < indexs.length; m++) {
                    if (indexs[m] === i) {
                        jQuery(list[i]).addClass('HW_tableRightAlign');
                    }
                }
            }
            // Added for components overlapping footer when expand/collapse component present in page
            if (jQuery(jQuery('.container-xtralarge').children()).length > 0) {
                jQuery('.container-xtralarge').find('.widget-content').css('height', 'auto');
            }
        }
    }
}
// Added to clear the state value if country value is null
function onCountryChangeSR(cid, sid) {
    var cid = cid;
    var sid = sid;
    if (jQuery("[id='" + cid + "']").parent().parent().find("select").val() == "") {
        document.getElementById(sid).value = "";
    }
}

// Added functions for Tax Payment - START
function handlePaymentFormsViewList(groupletId) {
    console.log("inside on complete handlePaymentFormsAppQViewComplete");
    var id = groupletId + ":" + "PaymentFormsListFG.BENEFICIARY_ID";
    jQuery('[id="' + id + '"]').trigger('change');
}

function setSelectedVal(element) {
    var id = jQuery(element).attr('id');
    selectedIndexSC = document.getElementById(id).selectedIndex;
}

function completeDropdown3(grpId) {
    var elementId = grpId + ":" + "PaymentFormsListFG.SERVICE_CODE";
    try {
        jQuery("[id$='" + elementId + "'] option")[selectedIndexSC].selected = true;
        jQuery("[id$='" + elementId + "']").febaCombobox("update");

    } catch (e) {
        selectedIndexSC = 0;
    }
}

function categoryOnchange(element) {

    try {
        setTimeout(function() {
            jQuery("[id$='PaymentFormsListFG.BENEFICIARY_ID'] option")[0].selected = true;
            jQuery("[id$='PaymentFormsListFG.BENEFICIARY_ID']").febaCombobox("update");
        }, 500);
    } catch (e) {
        LOG.logMessages("Drop down update failed");
    }

}

function bnfIDOnchange(element) {

    //selectedIndexSC = 0;
    var id = jQuery(element).attr('id');
    selectedIndexBNF = document.getElementById(id).selectedIndex;

    if (bnfIDIndex != selectedIndexBNF) {
        selectedIndexSC = 0;
        try {
            setTimeout(function() {
                jQuery("[id$='PaymentFormsListFG.SERVICE_CODE'] option")[0].selected = true;
                jQuery("[id$='PaymentFormsListFG.SERVICE_CODE']").febaCombobox("update");
            }, 500);
        } catch (e) {
            LOG.logMessages("Drop down update failed");
        }
    }
}

function handleWidgetRemoveSuccess(removeGroupletSrc, containerRemoved) {
    /* Start - for adding and removing widget icons to widgetBar */


    if (widgetContentMap) {

        var elementStartsWith = (removeGroupletSrc).split("__");
        var elementList = feba.domManipulator.getElementStartingWith(elementStartsWith[0] + "__");

        if (elementList.length == 0) {

            var pageIdwithParent = (removeGroupletSrc).split("_");

            var iconId = "widgetBar_" + pageIdwithParent[2];
            var temp = "#" + iconId;
            //jQuery(temp).draggable("enable");

            feba.domManipulator.draggableEnableDisable(temp, "enable");
            /* Uncomment the following line if the widgeticons are removed from the widget Bar
            	when the widget is added to the page and the icons need to be appended when the widget is removed */
            /* jQuery('#widgetListParent').prepend(removedWidgetsMap.get(iconId)); */

        }
    }
    // The function call is done before and after reAlign because before reAlign, appropriate sizes
    // need to be assigned for reAlign() to work perfectly.
    var isAutoAlign = feba.domManipulator.getElementById('IS_AUTO_ALIGN').attr("value");
    if (isAutoAlign && isAutoAlign == "true") {
        console.log("Not auto align flow");
        handleRemoveWidth(containerRemoved);
        for (var i = 0; i < containerParametersObjectArray.length; i++) {
            reDistribute(containerParametersObjectArray[i]);
        }
        handleRemoveWidth(containerRemoved);
        saveConfiguration();
    } else {
        console.log("auto align flow");
    }
    if (feba.domManipulator.getElement(".widget-content").getNiceScroll() && feba.domManipulator.getElement(".widget-content").getNiceScroll().length > 0) {
        resizeUX3scroll();
    }

    jQuery(containerRemoved).prev('li').unblock();
    /* End */
}
// Added functions for Tax Payment - END
// Added by Devi_Sruthi for controlling the visibility of some fields in Schedules screen on click of Schedule Now radio button
// fix for firestone ticket 743994
function disableRangeOfRec(id, title) {
    if (id == 'CorpAdminFWFG.RECURRING_PATTERN_INDEX' && title == 'Schedule Now') {
        document.getElementById("LabelForControl30073944").style.visibility = 'hidden';
        document.getElementById("LabelForControl6479251").style.visibility = 'hidden';
        document.getElementById("CorpAdminFWFG.REPORT_START_DATE").style.visibility = 'hidden';
        document.getElementById("CorpAdminFWFG.REPORT_START_DATE_Calendar_IMG").style.visibility = 'hidden';
        var x = document.getElementsByTagName("input");
        for (var i = 0; i < x.length; i++) {
            var title = x[i].title;
            var n = title.search("End");
            if (n != -1) {
                x[i].style.visibility = 'hidden';
            }
        }
        document.getElementById("LabelForControl33513295").style.visibility = 'hidden';
        document.getElementById("LabelForControl6384321").style.visibility = 'hidden';
        document.getElementById("LabelForControl29857198").style.visibility = 'hidden';
        document.getElementById("CorpAdminFWFG.MAX_OCCURENCES").style.visibility = 'hidden';
        document.getElementById("LabelForControl19910583").style.visibility = 'hidden';
        document.getElementById("LabelForControl27019120").style.visibility = 'hidden';
        document.getElementById("CorpAdminFWFG.REPORT_END_DATE").style.visibility = 'hidden';
        document.getElementById("CorpAdminFWFG.REPORT_END_DATE_Calendar_IMG").style.visibility = 'hidden';
        document.getElementById("LabelForControl17291122").style.visibility = 'hidden';
        document.getElementById("LabelForControl33488111").style.visibility = 'hidden';
        document.getElementById("CorpAdminFWFG.START_TIME_HH").style.visibility = 'hidden';
        document.getElementById("LabelForControl7697501").style.visibility = 'hidden';
        document.getElementById("CorpAdminFWFG.START_TIME_MM").style.visibility = 'hidden';
    } else {
        document.getElementById("LabelForControl30073944").style.visibility = 'visible';
        document.getElementById("LabelForControl6479251").style.visibility = 'visible';
        document.getElementById("CorpAdminFWFG.REPORT_START_DATE").style.visibility = 'visible';
        document.getElementById("CorpAdminFWFG.REPORT_START_DATE_Calendar_IMG").style.visibility = 'visible';
        var x = document.getElementsByTagName("input");
        for (var i = 0; i < x.length; i++) {
            var title = x[i].title;
            var n = title.search("End");
            if (n != -1) {
                x[i].style.visibility = 'visible';
            }
        }
        document.getElementById("LabelForControl33513295").style.visibility = 'visible';
        document.getElementById("LabelForControl6384321").style.visibility = 'visible';
        document.getElementById("LabelForControl29857198").style.visibility = 'visible';
        document.getElementById("CorpAdminFWFG.MAX_OCCURENCES").style.visibility = 'visible';
        document.getElementById("LabelForControl19910583").style.visibility = 'visible';
        document.getElementById("LabelForControl27019120").style.visibility = 'visible';
        document.getElementById("CorpAdminFWFG.REPORT_END_DATE").style.visibility = 'visible';
        document.getElementById("CorpAdminFWFG.REPORT_END_DATE_Calendar_IMG").style.visibility = 'visible';
        document.getElementById("LabelForControl17291122").style.visibility = 'visible';
        document.getElementById("LabelForControl33488111").style.visibility = 'visible';
        document.getElementById("CorpAdminFWFG.START_TIME_HH").style.visibility = 'visible';
        document.getElementById("LabelForControl7697501").style.visibility = 'visible';
        document.getElementById("CorpAdminFWFG.START_TIME_MM").style.visibility = 'visible';
    }
}

function RHSaligninAccounts(groupletId) {
    var masterGroupeltId = "";
    masterGroupletId = jQuery(jQuery('.pageLeftContainer').find("[data-groupletid]")[0]).attr('data-groupletid');
    handleRHSAlignment(masterGroupletId);
}

function materializeCalendarPicker() {
    /* 
     * Show the datepicker on click of datepicker-icon 
     */

    /*Added Code for Adding the Active class to Datepicker Label for Horizontal Layout --Start */

    var layoutValue = jQuery('#isHorizontalLayout');
    if (typeof layoutValue !== typeof undefined) {
        isHorizontalLayout = jQuery(layoutValue).val();
    }

    if (typeof isHorizontalLayout != typeof undefined) {
        jQuery(".all-datepicker").each(function(index) {

            var input_value = jQuery(this).val().trim();
            var labelField = jQuery(this).siblings('label');

            if (input_value != '') {
                jQuery(labelField).addClass('active');
            }


        });
    }
    /*Added Code for Adding the Active class to Datepicker Label for Horizontal Layout --End */

    function validateDate(_this) {
        var picker = _this.siblings('input').pickadate('picker');
        var input_value = _this.siblings('input').val().trim();
        var picker_date_format = '';

        var error_found = 0;
        var splitInput;
        var dateSeparator;
        var centuryFormat = true;


        // Date validation - Start
        // **********
        // Summary
        // **********
        // Get the seperator character
        // There should be only 2 seperator character
        // Split the string by seperator and it should have 3 non empty values in array
        // Check the year contains only digit and its within the allowed range
        // Check the month contains only digit/string and its within the allowed range
        // Check the date contains only digit and its within the allowed range
        // **********

        if (input_value != "") {
            var seperator = '',
                regex_value, count, date_array = [];

            if (user_defined_format == 'dd/mm/yy' || user_defined_format == 'mm/dd/yyyy' || user_defined_format == 'dd/mm/yyyy' || user_defined_format == 'yyyy/mm/dd') {
                seperator = '/', regex_value = /\//igm;
            } else if (user_defined_format == 'dd,mm,yyyy' || user_defined_format == 'dd,mm,yy' || user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'mm,dd,yyyy') {
                seperator = ',', regex_value = /,/igm;
            } else if (user_defined_format == 'dd-mm-yy' || user_defined_format == 'mm-dd-yyyy' || user_defined_format == 'dd-mmm-yyyy' || user_defined_format == 'yyyy-mm-dd') {
                seperator = '-', regex_value = /-/igm;
            } else if (user_defined_format == "mmm dd yyyy") {
                seperator = ' ', regex_value = / /igm;
            }

            count = input_value.match(regex_value), count = (count) ? count.length : 0;
            console.log(count);

            if (count == 2) {
                date_array = input_value.toString().split(seperator);
                if (date_array[0] != '' && date_array[1] != '' && date_array[2] != '') {

                    // Check year is number
                    // Check year is in range 		
                    //if(((date_array[2].match(/^[0-9]+$/)) != null) && (((user_defined_format == 'dd/mm/yy' || user_defined_format == 'dd,mm,yy' || user_defined_format == 'dd-mm-yy') && (date_array[2] >= 0 && date_array[2] <= 99))  || ((user_defined_format == 'dd,mm,yyyy' || user_defined_format == 'mm/dd/yyyy' || user_defined_format == 'mm-dd-yyyy' || user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'dd-mmm-yyyy' || user_defined_format == 'dd/mm/yyyy' || user_defined_format == 'mm,dd,yyyy' || user_defined_format == 'mmm dd yyyy') && (date_array[2] >= 1975 && date_array[2] <= 2099)) || ((user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd') && (date_array[0] >= 1975 && date_array[0] <= 2099)))) {
                    if (((date_array[2].match(/^[0-9]+$/)) != null) && ((user_defined_format == 'dd/mm/yy' || user_defined_format == 'dd,mm,yy' || user_defined_format == 'dd-mm-yy' || user_defined_format == 'dd,mm,yyyy' || user_defined_format == 'mm/dd/yyyy' || user_defined_format == 'mm-dd-yyyy' || user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'dd-mmm-yyyy' || user_defined_format == 'dd/mm/yyyy' || user_defined_format == 'mm,dd,yyyy' || user_defined_format == 'mmm dd yyyy' || user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd'))) {
                        // Year is valid

                        // Check month is number / string
                        // Check month is in range 
                        var month_number;
                        var month_text = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        if (user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'dd-mmm-yyyy') {
                            date_array[1] = date_array[1].toLowerCase();
                            date_array[1] = date_array[1].charAt(0).toUpperCase() + date_array[1].slice(1);
                        } else if (user_defined_format == 'mmm dd yyyy') {
                            date_array[0] = date_array[0].toLowerCase();
                            date_array[0] = date_array[0].charAt(0).toUpperCase() + date_array[0].slice(1);
                        }

                        if (((user_defined_format == 'dd/mm/yy' || user_defined_format == 'dd,mm,yy' || user_defined_format == 'dd-mm-yy' || user_defined_format == 'dd,mm,yyyy' || user_defined_format == 'dd/mm/yyyy' || user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd') && ((date_array[1].match(/^[0-9]+$/)) != null) && (date_array[1] >= 1 && date_array[1] <= 12)) || ((user_defined_format == 'mm/dd/yyyy' || user_defined_format == 'mm-dd-yyyy' || user_defined_format == 'mm,dd,yyyy') && ((date_array[0].match(/^[0-9]+$/)) != null) && (date_array[0] >= 1 && date_array[0] <= 12)) || ((user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'dd-mmm-yyyy') && ((date_array[1].match(/^[a-zA-Z]+$/)) != null) && ((month_text.indexOf(date_array[1])) != -1)) || ((user_defined_format == 'mmm dd yyyy') && ((date_array[0].match(/^[a-zA-Z]+$/)) != null) && ((month_text.indexOf(date_array[0])) != -1))) {

                            if (user_defined_format == 'dd/mm/yy' || user_defined_format == 'dd,mm,yy' || user_defined_format == 'dd-mm-yy' || user_defined_format == 'dd,mm,yyyy' || user_defined_format == 'dd/mm/yyyy' || user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd') {
                                month_number = date_array[1];

                            } else if (user_defined_format == 'mm/dd/yyyy' || user_defined_format == 'mm-dd-yyyy' || user_defined_format == 'mm,dd,yyyy') {
                                month_number = date_array[0];

                            } else if (user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'dd-mmm-yyyy') {
                                input_value = date_array[0] + seperator + date_array[1] + seperator + date_array[2];
                                month_number = (month_text.indexOf(date_array[1])) + 1;
                            } else if (user_defined_format == 'mmm dd yyyy') {
                                input_value = date_array[0] + seperator + date_array[1] + seperator + date_array[2];
                                month_number = (month_text.indexOf(date_array[0])) + 1;
                            }
                            // Month is valid

                            // Check date is number
                            // Check date is in range 
                            if (((user_defined_format == 'dd/mm/yy' || user_defined_format == 'dd,mm,yyyy' || user_defined_format == 'dd,mm,yy' || user_defined_format == 'dd-mm-yy' || user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'dd-mmm-yyyy' || user_defined_format == 'dd/mm/yyyy') && ((date_array[0].match(/^[0-9]+$/)) != null)) || ((user_defined_format == 'mm/dd/yyyy' || user_defined_format == 'mm-dd-yyyy' || user_defined_format == 'mm,dd,yyyy' || user_defined_format == 'mmm dd yyyy') && ((date_array[1].match(/^[0-9]+$/)) != null)) || ((user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd') && ((date_array[2].match(/^[0-9]+$/)) != null))) {

                                var date_number;
                                if (user_defined_format == 'dd/mm/yy' || user_defined_format == 'dd,mm,yyyy' || user_defined_format == 'dd,mm,yy' || user_defined_format == 'dd-mm-yy' || user_defined_format == 'dd,mmm,yyyy' || user_defined_format == 'dd-mmm-yyyy' || user_defined_format == 'dd/mm/yyyy') {
                                    date_number = date_array[0];
                                } else if (user_defined_format == 'mm/dd/yyyy' || user_defined_format == 'mm-dd-yyyy' || user_defined_format == 'mm,dd,yyyy' || user_defined_format == 'mmm dd yyyy') {
                                    date_number = date_array[1];
                                } else if (user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd') {
                                    date_number = date_array[2];
                                }

                                if (!((date_number == "00") || (date_number.length <= 1))) {
                                    // Assume not leap year by default (note zero index for Jan)
                                    var days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                                    // If evenly divisible by 4 and not evenly divisible by 100,
                                    // or is evenly divisible by 400, then a leap year

                                    if (user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd') {
                                        if ((!(date_array[0] % 4) && date_array[0] % 100) || !(date_array[0] % 400)) {
                                            days_in_month[1] = 29;
                                        }
                                    } else {
                                        if ((!(date_array[2] % 4) && date_array[2] % 100) || !(date_array[2] % 400)) {
                                            days_in_month[1] = 29;
                                        }
                                    }

                                    if (date_number <= days_in_month[(month_number - 1)]) {
                                        // Date is valid
                                    } else {
                                        // Date is invalid
                                        error_found = 1;
                                    }
                                } else {
                                    // Date value is zero which is invalid	                                    
                                    error_found = 1;
                                }

                            } else {
                                // Date is not digit
                                error_found = 1;
                            }


                        } else {
                            // Month is invalid
                            error_found = 1;
                        }


                    } else {
                        // Year is invalid
                        error_found = 1;

                    }
                } else {
                    error_found = 1;
                }
            } else {
                error_found = 1;
            }
        }


        if (error_found == 1) {
            input_value = new Date();
        }

        // Date validation - End            


        if (input_value != "") {
            if (user_defined_format == "dd/mm/yy" || user_defined_format == "dd,mm,yy" || user_defined_format == "dd-mm-yy") {
                var yearString = Number(input_value.toString().slice(-2));

                if (user_defined_format == "dd/mm/yy") {
                    splitInput = input_value.toString().split('/');
                    dateSeparator = "/";
                } else if (user_defined_format == "dd,mm,yy") {
                    splitInput = input_value.toString().split(',');
                    dateSeparator = ",";
                } else if (user_defined_format == "dd-mm-yy") {
                    splitInput = input_value.toString().split('-');
                    dateSeparator = "-";
                }

                if ((yearString >= 75) & (yearString <= 99)) {
                    picker_date_format = user_defined_format;
                } else {
                    picker_date_format = user_defined_format + "yy";
                    input_value = splitInput[0] + dateSeparator + splitInput[1] + dateSeparator + "20" + splitInput[2];
                }
            } else if (user_defined_format == 'yyyy-mm-dd' || user_defined_format == 'yyyy/mm/dd') {
                if (user_defined_format == "yyyy-mm-dd") {
                    splitInput = input_value.toString().split('-');
                    dateSeparator = "-";
                } else if (user_defined_format == "yyyy/mm/dd") {
                    splitInput = input_value.toString().split('/');
                    dateSeparator = "/";
                }
                if (splitInput[0].length == 3) {
                    input_value = "0" + splitInput[0] + dateSeparator + splitInput[1] + dateSeparator + splitInput[2];
                } else if (splitInput[0].length == 2) {
                    input_value = "00" + splitInput[0] + dateSeparator + splitInput[1] + dateSeparator + splitInput[2];
                }
                if (splitInput[0].length == 1) {
                    input_value = "000" + splitInput[0] + dateSeparator + splitInput[1] + dateSeparator + splitInput[2];
                }

            } else {
                picker_date_format = user_defined_format;
            }

            picker.set('select', input_value, {
                format: picker_date_format,
            });
        }
    }
    if (!(/android/i.test(navigator.userAgent))) {
        jQuery('.all-datepicker').focus().blur();
    }
    jQuery('.picker-icon').on('click', function(e) {
        var _this = jQuery(this);
        validateDate(_this);

        var picker = _this.siblings('input').pickadate('picker');
        if (picker.get('open')) {
            picker.close();
        } else {
            picker.open();
        }
        e.stopImmediatePropagation();
    });


    jQuery(".picker").on("focusin", function(event) {
        var _this = jQuery(this);
        var picker = _this.siblings('input').pickadate('picker');
        if (!(picker.get('open'))) {
            validateDate(_this);
        }
    });
    jQuery('.picker-icon_Hijiri').on('click', function(e) {
        jQuery('html').css('overflow', 'hidden').css('padding-' + right + '', '10px');
        var pickerIcon = jQuery('.picker-icon_Hijiri').prev();
        var _this = jQuery(this);
        var err_found = validateHijiriDate(_this);
        if (typeof undefined != typeof err_found && err_found != 0) {
            jQuery.calendars.picker._updatetodayInput(e.target.previousSibling);
        }
        var calendarPopup = jQuery('.calendars-popup');
        jQuery.calendars.picker._showPlugin(e.target.previousSibling);
        /*setTimeout( function() {
				 jQuery('html').css('overflow','hidden').css( 'padding-'+right+'', '10px');
              
             }, 0);*/
        //e.stopImmediatePropagation();

    });

    jQuery('.tab-index-catcher-Hijiri').on('focusin', function(e) {
        var pickerIcon = jQuery('.picker-icon_Hijiri').prev();
        var _this = jQuery(this).siblings('input');
        var err_found = validateHijiriDate(jQuery(this).prev());
        if (typeof undefined != typeof err_found && err_found != 0) {
            jQuery.calendars.picker._updatetodayInput(_this[0]);
        }
        jQuery.calendars.picker._showPlugin(_this);
        setTimeout(function() {
            jQuery('html').css('overflow', 'hidden').css('padding-' + right + '', '10px');

        }, 1);

    });


}
jQuery('html').click(function(e) {
    var calendarPopup = jQuery('.calendars-popup');
    var clickedElem = e.target;
    var calendarDiv = jQuery(clickedElem).parents('.picker__wrap');
    if (typeof undefined != typeof calendarPopup && typeof undefined != typeof calendarDiv && calendarDiv.length == 0 && calendarPopup.length != 0 && e.target.className != 'picker-icon_Hijiri') {
        jQuery(calendarPopup).remove();
        jQuery('html').removeAttr('style');
    }
    var hijiriCalendarDiv = jQuery('.calendars-popup');
    if (typeof undefined != typeof hijiriCalendarDiv && hijiriCalendarDiv.length != 0) {
        e.stopImmediatePropagation();
    }
    //e.stopImmediatePropagation();

});




jQuery(document).ready(function() {
    jQuery(".toggle-menus").click(function(e) {
        //jQuery(".container-large").toggleClass("toggleContainerClass");
        jQuery(".container-xtrasmall").toggleClass("showElement");
    });
});
/* Modified by Anil for Mails Module */
function callPageChoiceIndex(groupletId, formsGroup, listing) {
    //jQuery("[id*='PAGE_CHOICE_INDEX_SELECT']").click();
    if (groupletId && groupletId != null && groupletId.length > 0 && typeof groupletId !== typeof undefined) {
        jQuery("#" + groupletId + "\\:" + formsGroup + "\\." + listing + '_PAGE_CHOICE_INDEX_SELECT').click();
    } else {
        jQuery("#" + formsGroup + "\\." + listing + '_PAGE_CHOICE_INDEX_SELECT').click();
    }
}
/* Anil Changes End */

function setOutformat(outformat, groupletId, formGroup) {
    //jQuery("[id*='OUTFORMAT']").val(outformat);

    jQuery("[id*='" + formGroup + ".OUTFORMAT']").val(outformat);

    // jQuery("#"+groupletId+"\\:"+'OUTFORMAT').val(outformat);
}

/* Dashboard Header Changes START - Arun_Mani */

jQuery(window).resize(function() {
    alignHeaderResp();
    /* Fix only for IE browser as js scripts are not executing on resize */
    /*Uncommented for TIcketID:778264,778263*/
    /*if(jQuery.browser.msie){
			jQuery(function () {
               jQuery(window).resize();
           });
		 }		*/
});

/*
 * Header expand and collapse in lower resolutions
 */
jQuery(document).ready(function() {

    /* Added to set the box-shadow style on focus of buttons while using tab key			
       This effect will be applied only for normal and reset buttons and not for flat or disabled buttons*/
    jQuery(window).on('keyup', function(event) {
        if (event.keyCode == '9') {
            getFocused(event);
        }
    });
    var selectedElement = '';

    function getFocused(e) {
        var targetElementParent = e.target.parentElement;
        if (selectedElement == '') {
            if ((jQuery(targetElementParent).hasClass("waves-effect") && jQuery(targetElementParent).hasClass("btn")) ||
                (jQuery(targetElementParent).hasClass("waves-effect") && jQuery(targetElementParent).hasClass("btn") &&
                    jQuery(targetElementParent).hasClass("reset-btn"))) {

                jQuery(targetElementParent).addClass('buttonFocus');
                selectedElement = targetElementParent;
            }
        } else {
            if (jQuery(selectedElement).hasClass("waves-effect")) {
                jQuery(selectedElement).removeClass('buttonFocus');
                selectedElement = '';
                if ((jQuery(targetElementParent).hasClass("waves-effect") && jQuery(targetElementParent).hasClass("btn")) ||
                    (jQuery(targetElementParent).hasClass("waves-effect") && jQuery(targetElementParent).hasClass("btn") &&
                        jQuery(targetElementParent).hasClass("reset-btn"))) {

                    jQuery(targetElementParent).addClass('buttonFocus');
                    selectedElement = targetElementParent;
                }
            }
        }
    }

    alignHeaderResp();
    jQuery(".expand-collapse-box").click(function(event) {
        var jspName = jQuery("[id='DashboardAutoAlignFG.REPORTTITLE']").val();
        var isDashboardScreen = false;
        if ((jspName != 'undefined' && jspName == 'RetailUserDashboardUX5') ||
            (jspName != 'undefined' && jspName == 'CorporateUserDashboardUX5')) {
            isDashboardScreen = true;
        }
        event.preventDefault();
        if (jQuery(this).hasClass("expanded")) {
            jQuery(this).removeClass("expanded");
            jQuery(".expand-icon").css('display', 'block');
            jQuery(".collapse-icon").css('display', 'none');
            jQuery(".headerouter_r").removeClass("headerouter_length");
            jQuery(".headerRowsetRight").removeClass("expand");
            jQuery(".headerRowsetRight").slideUp();
            jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + 'px');
            jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + 'px');
            if (jQuery("#wrapper1").children("div").hasClass("ticker-controls")) {
                jQuery(".lhsResp").css('top', '-65px');
                if (isDashboardScreen) {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '126px');
                    } else {
                        jQuery("#main").css('padding-top', '95px');
                    }
                    if (!jQuery(".ticker").hasClass('tickerShadow') && !jQuery(".ticker").hasClass('tickerNoShadow') ||
                        jQuery(".ticker").hasClass('tickerShadow') && !jQuery(".ticker").hasClass('tickerNoShadow')) {
                        jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
                        jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
                    }
                } else {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '146px');
                    } else {
                        jQuery("#main").css('padding-top', '115px');
                    }
                }
                if (jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle").length > 0) {
                    var mulClickErrMsg = jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle");
                    var msgHeight = mulClickErrMsg.find(jQuery('.errorContentWrapper')).outerHeight();
                    if (msgHeight > 34) {
                        msgHeight = 86 + (parseInt(msgHeight) - 34);
                        jQuery("#HREF_printPreview, #HREF_help").css('margin-top', msgHeight + 'px');
                    } else {
                        jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '86px');
                    }
                } else {
                    jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '21px');
                }
            } else {
                jQuery(".lhsResp").css('top', '-100px');
                if (isDashboardScreen) {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '86px');
                    } else {
                        jQuery("#main").css('padding-top', '55px');
                    }
                } else {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '116px');
                    } else {
                        jQuery("#main").css('padding-top', '85px');
                    }
                }
                if (jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle").length > 0) {
                    var mulClickErrMsg = jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle");
                    var msgHeight = mulClickErrMsg.find(jQuery('.errorContentWrapper')).outerHeight();
                    if (msgHeight > 34) {
                        msgHeight = 42 + (parseInt(msgHeight) - 34);
                        jQuery("#HREF_printPreview, #HREF_help").css('margin-top', msgHeight + 'px');
                    } else {
                        jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '42px');
                    }
                } else {
                    jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '-4px');
                }
            }
        } else {
            jQuery(this).addClass("expanded");
            jQuery(".headerRowsetRight").addClass("expand");
            jQuery(".expand-icon").css('display', 'none');
            jQuery(".collapse-icon").css('display', 'block');
            jQuery(".headerouter_r").addClass("headerouter_length");
            jQuery(".headerRowsetRight").slideDown();
            jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + 'px');
            jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + 'px');
            if (jQuery("#wrapper1").children("div").hasClass("ticker-controls")) {
                jQuery(".expand").css('top', '45%');
                jQuery(".lhsResp").css('top', '-25px');
                if (isDashboardScreen) {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '166px');
                    } else {
                        jQuery("#main").css('padding-top', '135px');
                    }
                    if (!jQuery(".ticker").hasClass('tickerShadow') && !jQuery(".ticker").hasClass('tickerNoShadow') ||
                        jQuery(".ticker").hasClass('tickerShadow') && !jQuery(".ticker").hasClass('tickerNoShadow')) {
                        jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
                        jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
                    }
                } else {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '186px');
                    } else {
                        jQuery("#main").css('padding-top', '155px');
                    }
                }
            } else {
                jQuery(".expand").css('top', '57%');
                jQuery(".lhsResp").css('top', '-60px');
                if (isDashboardScreen) {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '126px');
                    } else {
                        jQuery("#main").css('padding-top', '95px');
                    }
                } else {
                    if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                        jQuery("#main").css('padding-top', '151px');
                    } else {
                        jQuery("#main").css('padding-top', '120px');
                    }
                }
            }

            if (jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle").length > 0) {
                var mulClickErrMsg = jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle");
                var msgHeight = mulClickErrMsg.find(jQuery('.errorContentWrapper')).outerHeight();
                if (msgHeight > 34) {
                    msgHeight = 107 + (parseInt(msgHeight) - 34);
                    jQuery("#HREF_printPreview, #HREF_help").css('margin-top', msgHeight + 'px');
                } else {
                    jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '107px');
                }
            } else {
                jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '30px');
            }
            if (jQuery("#ticker-hide").children("span").hasClass("icon-arrow-right")) {
                jQuery(".expand").css('top', '57%');
            }
            if (jQuery("#ticker-hide").children("span").hasClass("icon-arrow-left")) {
                jQuery(".expand").css('top', '45%');
            }
        }
    });

    /* Ticker play/pause and hide */
    var $mq = jQuery(".ticker-text").marquee({
        direction: feba.domManipulator.isRTL() ? 'right' : 'left',
        duplicated: false,
        pauseOnHover: true,
        duration: 50000,
    });

    jQuery("#ticker-pause").keypress(function(theEvent) {
        if (theEvent.which === 13) {
            jQuery(this).click();
        }
    });

    jQuery("#ticker-pause").click(function() {
        if (jQuery(this).children("span").hasClass("icon-pause")) {
            $mq.marquee('pause');
            jQuery(this).children("span").removeClass("icon-pause").addClass("icon-play");
            jQuery(this).attr({
                "aria-label": getMessage("playTicker"),
                "title": getMessage("playTicker")
            })
        } else {
            $mq.marquee('resume');
            jQuery(this).children("span").removeClass("icon-play").addClass("icon-pause");
            jQuery(this).attr({
                "aria-label": getMessage("pauseTicker"),
                "title": getMessage("pauseTicker")
            })
        }
    });

    jQuery("#ticker-hide").keypress(function(theEvent) {
        if (theEvent.which === 13) {
            jQuery(this).click();
        }
    });

    jQuery("#ticker-hide").click(function() {
        if (jQuery(this).children("span").hasClass("icon-arrow-left")) {
            jQuery(".expand").css('top', '57%');
            jQuery(".ticker").css({
                position: "absolute",
                width: "5%"
            });
            if (feba.domManipulator.isRTL()) {
                jQuery(".ticker-controls").css({
                    left: "",
                    right: "5%"
                });
            } else {
                jQuery(".ticker-controls").css({
                    right: "",
                    left: "5%"
                });
            }
            /* Added by Arun_Mani for removing box shadow when ticker is hidden - START */
            if (jQuery(".ticker").hasClass('tickerNoShadow')) {
                jQuery(".ticker").removeClass("tickerShadow").addClass("tickerNoShadow");
            } else {
                jQuery(".ticker").addClass("tickerNoShadow");
            }
            /* Added by Arun_Mani for removing box shadow when ticker is hidden - END */
            jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + 'px');
            jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + 'px');
            jQuery(this).children("span").removeClass("icon-arrow-left").addClass("icon-arrow-right");
            jQuery(this).attr({
                "aria-label": getMessage("showTicker"),
                "title": getMessage("showTicker")
            });
        } else {
            jQuery(".expand").css('top', '45%');
            jQuery(".ticker").css({
                position: "",
                width: ""
            });
            /* Added by Arun_Mani for adding box shadow when ticker is shown - START */
            jQuery(".ticker").removeClass("tickerNoShadow").addClass("tickerShadow");
            /* Added by Arun_Mani for adding box shadow when ticker is shown - END */
            jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
            jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
            if (feba.domManipulator.isRTL()) {
                jQuery(".ticker-controls").css({
                    left: "0",
                    right: ""
                });
            } else {
                jQuery(".ticker-controls").css({
                    right: "0",
                    left: ""
                });
            }
            jQuery(this).children("span").removeClass("icon-arrow-right").addClass("icon-arrow-left");
            jQuery(this).attr({
                "aria-label": getMessage("hideTicker"),
                "title": getMessage("hideTicker")
            });
        }
    });
});

function alignHeaderResp() {
    // added for NLP samsung device fix
    var event = this.event;
    if (event != undefined && event.type == "resize" &&
        (jQuery('.nlpSearchTextBoxContainer') != undefined &&
            jQuery('.nlpSearchTextBoxContainer').hasClass('nlpSearchTextBoxContainerShow'))) {
        event.preventDefault();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
            event.stopImmediatePropogation();
        }
    }
    //changes end for NLP fix
    if (feba.domManipulator.isRTL()) {
        jQuery(".collapse-icon").css("margin-left", parseInt(viewport().width / 2) - parseInt(30));
        jQuery(".expand-icon").css("margin-left", parseInt(viewport().width / 2) - parseInt(30));
    } else {
        jQuery(".collapse-icon").css("margin-right", parseInt(viewport().width / 2) - parseInt(30));
        jQuery(".expand-icon").css("margin-right", parseInt(viewport().width / 2) - parseInt(30));
    }
    jQuery(".expand-collapse-box").removeClass("expanded");
    jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + 'px');
    jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + 'px');
    if (jQuery("#wrapper1").children("div").hasClass("ticker-controls")) {
        if (!jQuery(".ticker").hasClass('tickerShadow') && !jQuery(".ticker").hasClass('tickerNoShadow') ||
            jQuery(".ticker").hasClass('tickerShadow') && !jQuery(".ticker").hasClass('tickerNoShadow')) {
            jQuery(".timelineExpandIcon").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
            jQuery(".timelineExpand").css('top', jQuery("#headerouter").outerHeight() + jQuery(".ticker-controls").height() + 'px');
        }
        if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
            jQuery("#main").css('padding-top', '146px');
        } else {
            jQuery("#main").css('padding-top', '115px');
        }
        if (jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle").length > 0) {
            var mulClickErrMsg = jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle");
            var msgHeight = mulClickErrMsg.find(jQuery('.errorContentWrapper')).outerHeight();
            if (msgHeight > 34) {
                msgHeight = 86 + (parseInt(msgHeight) - 34);
                jQuery("#HREF_printPreview, #HREF_help").css('margin-top', msgHeight + 'px');
            } else {
                jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '86px');
            }
        } else {
            jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '21px');
        }
    } else {
        if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
            jQuery("#main").css('padding-top', '121px');
        } else {
            jQuery("#main").css('padding-top', '90px');
        }
        if (jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle").length > 0) {
            var mulClickErrMsg = jQuery("#BrdCrumbNImg").siblings("div.errorDisplayStyle");
            var msgHeight = mulClickErrMsg.find(jQuery('.errorContentWrapper')).outerHeight();
            if (msgHeight > 34) {
                msgHeight = 42 + (parseInt(msgHeight) - 34);
                jQuery("#HREF_printPreview, #HREF_help").css('margin-top', msgHeight + 'px');
            } else {
                jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '42px');
            }
        } else {
            jQuery("#HREF_printPreview, #HREF_help").css('margin-top', '-4px');
        }
    }
    var vpWidth = viewport().width;
    if (vpWidth > 749) {
        jQuery(".headerRowsetRight").show();
        if (jQuery(".headerRowsetRight").hasClass('expand')) {
            jQuery(".headerRowsetRight").removeClass("expand");
        }
        jQuery(".headerouter_r").removeClass("headerouter_length");
        jQuery(".expand-icon").css('display', 'none');
        jQuery(".collapse-icon").css('display', 'none');
    } else {
        if (!(jQuery(".headerRowsetRight").hasClass('expand'))) {
            jQuery(".headerRowsetRight").addClass("expand");
        }
        if (jQuery(".headerouter_r").hasClass('headerouter_length')) {
            jQuery(".headerouter_r").removeClass("headerouter_length");
        }
        jQuery(".headerRowsetRight").hide();
        jQuery(".expand-icon").css('display', 'block');
        jQuery(".collapse-icon").css('display', 'none');
    }
    /* for positioning pofile icon */
    if (vpWidth >= 320 && vpWidth <= 450) {
        if (jQuery('.headerWelcomeText').length) {
            var profile_left = jQuery(".headerWelcomeText").offset().left;
            jQuery(".headerWelcomeText img").css('left', -profile_left);
        }
    }
}

/* Dashboard Header Changes END */

/* Added for RHS collapsible feature starts */

jQuery(document).ready(function() {
    expandRHSWidgets();
    collpaseRHSWidgets();
    handleTimelineUI();

    jQuery('#grey_out_RHSWidgets').click(function(e) {
        if (feba.domManipulator.isRTL()) {
            jQuery(".rhsResp").hide("slide", {
                direction: 'left'
            }, 500);
        } else {
            jQuery(".rhsResp").hide("slide", {
                direction: 'right'
            }, 500);
        }
        jQuery(".qp-ui-mask-modal_rhsWidget").removeClass("qp-ui-mask-visible");
    });
    jQuery('#grey_out_TimelineWidget').click(function(e) {
        if (feba.domManipulator.isRTL()) {
            jQuery(".timelineExpand").hide("slide", {
                direction: 'left'
            }, 500);
        } else {
            jQuery(".timelineExpand").hide("slide", {
                direction: 'right'
            }, 500);
        }
        jQuery(".timelineExpandIcon").css('display', 'block');
        jQuery(".qp-ui-mask-modal_timelineWidget").removeClass("qp-ui-mask-visible");
        jQuery("html").removeClass("hide-vertical-scroll");
    });
});

jQuery(window).resize(function() {
    var vpWidth = viewport().width;
    if (vpWidth > 900) {
        jQuery(".rhsCollpaseRightIcon").css('display', 'none');
        jQuery(".rhsResp").css('display', 'block');
        if (jQuery(".rhsResp").hasClass("rhsWidgetsShowInResp")) {
            jQuery(".rhsResp").removeClass("rhsWidgetsShowInResp");
            jQuery(".qp-ui-mask-modal_rhsWidget").removeClass("qp-ui-mask-visible");
        }
    } else {
        jQuery(".rhsCollpaseRightIcon").css('display', 'block');
        /* for rhs widget on resize not to close
			jQuery(".rhsResp").css('display','none');*/
        if (jQuery(".qp-ui-mask-modal_rhsWidget").hasClass("qp-ui-mask-visible")) {
            jQuery(".qp-ui-mask-modal_rhsWidget").removeClass("qp-ui-mask-visible");
        }
    }
});

function handleTimelineUI() {
    expandTimelineWidget();
    collapseTimelineWidget();
    jQuery(".timelineExpand").scroll(function() {
        if (jQuery(this).scrollTop() > 0) {
            jQuery("#scroll-top").fadeIn("slow");
        } else {
            jQuery("#scroll-top").fadeOut("slow");
        }
    });
}

function expandTimelineWidget() {
    jQuery(".timelineExpandIcon").click(function(e) {
        jQuery("html").addClass("hide-vertical-scroll");
        jQuery(".timelineExpandIcon").css('display', 'none');
        if (feba.domManipulator.isRTL()) {
            jQuery(".timelineExpand").show("slide", {
                direction: 'left'
            }, 500);
        } else {
            jQuery(".timelineExpand").show("slide", {
                direction: 'right'
            }, 500);
        }
        jQuery(".qp-ui-mask-modal_timelineWidget").addClass("qp-ui-mask-visible");
        jQuery(window).scrollTop(0);
    });
}

function collapseTimelineWidget() {
    jQuery(".timelineCollpaseIcon").click(function(e) {
        jQuery(".timelineExpandIcon").css('display', 'block');
        jQuery("html").removeClass("hide-vertical-scroll");
        if (feba.domManipulator.isRTL()) {
            jQuery(".timelineExpand").hide("slide", {
                direction: 'left'
            }, 500);
        } else {
            jQuery(".timelineExpand").hide("slide", {
                direction: 'right'
            }, 500);
        }
        jQuery(".qp-ui-mask-modal_timelineWidget").removeClass("qp-ui-mask-visible");
    });

}

function handleGoToTopTimeline() {
    jQuery(".timelineExpand").animate({
        scrollTop: "0"
    }, 500);
}

function collapseActivitiesByDate(id) {
    jQuery("#" + id).parents('li').siblings().slideToggle();
}

function expandRHSWidgets() {
    jQuery(".rhsExpandIcon").click(function(e) {
        jQuery(".rhsResp").addClass("rhsWidgetsShowInResp");
        jQuery(".rhsCollpaseRightIcon").css('display', 'block');
        if (feba.domManipulator.isRTL()) {
            jQuery(".rhsResp").show("slide", {
                direction: 'left'
            }, 500);
        } else {
            jQuery(".rhsResp").show("slide", {
                direction: 'right'
            }, 500);
        }
        jQuery(".qp-ui-mask-modal_rhsWidget").addClass("qp-ui-mask-visible");
        jQuery(window).scrollTop(0);
    });
}

function collpaseRHSWidgets() {
    jQuery(".rhsCollpaseRightIcon").click(function(e) {
        if (feba.domManipulator.isRTL()) {
            jQuery(".rhsResp").hide("slide", {
                direction: 'left'
            }, 500);
        } else {
            jQuery(".rhsResp").hide("slide", {
                direction: 'right'
            }, 500);
        }
        jQuery(".qp-ui-mask-modal_rhsWidget").removeClass("qp-ui-mask-visible");
    });

}
/* Added for RHS collapsible feature ends */

/* In Print preview mode all collapse section in listing table should be expanded */
function expandRowDetailInPrintMode() {
    if (jQuery('.footable-row-detail').css('display') == 'none' ||
        jQuery('.footable-row-detail').css('display') == undefined) {
        jQuery('td.footable-last-column').trigger("click");
    }
}

/* Added to open the print preview window always in maximized size */
function openPrintPreviewWindow(element) {
    var windowWidth = screen.availWidth;
    var windowHeight = screen.availHeight;
    window.open(element.href, '', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,fullscreen=yes,width=' + windowWidth + ',height=' + windowHeight + ',left=0,top=0,resizable=1');
}
/* Common function for handling link delink functionality Starts*/
function invokeNavSelectedTab() {
    jQuery(".delinkedValTable").attr('style', 'display :none');
    /*Modified for lumi*/
    //jQuery(".linkedValTable").attr('style', 'display :block;border:none');
    jQuery(".linkedValTable").attr('style', 'display :block');
    jQuery(".navigationLeftButtons_resp").attr('style', 'display :block');
    jQuery(".navigationRightButtons_resp").attr('style', 'display :none');

    jQuery("[title='LINKED']").removeClass('navSelectedTab_Inactive');
    jQuery("[title='LINKED']").addClass('navSelectedTab');
    jQuery("[title='DELINKED']").removeClass('navAllTab_Active');
    jQuery("[title='DELINKED']").addClass('navAllTab');

    /*Fix for responsvie look and feel */
    jQuery(window).resize(function() {
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) > 639) {
            jQuery(".linkedValTable").attr('style', 'display :block;width:44%;');
            jQuery(".delinkedValTable").attr('style', 'display :block;width:44%;');

        } else if (parseInt(vpWidth) <= 639) {
            jQuery(".delinkedValTable").attr('style', 'display :none');
            jQuery(".linkedValTable").attr('style', 'display :block;width:99.85%;');

        }
    });

}

function invokeNavAllTab() {
    jQuery(".linkedValTable").attr('style', 'display :none');
    /*Modified for lumi*/
    //jQuery(".delinkedValTable").attr('style', 'display :block; width:97%;border:none;padding-right: 0.5%;');
    jQuery(".delinkedValTable").attr('style', 'display :block; width:99.85%;');
    jQuery(".navigationLeftButtons_resp").attr('style', 'display :none');
    jQuery(".navigationRightButtons_resp").attr('style', 'display :block');

    jQuery("[title='DELINKED']").removeClass('navAllTab');
    jQuery("[title='DELINKED']").addClass('navAllTab_Active');
    jQuery("[title='LINKED']").removeClass('navSelectedTab');
    jQuery("[title='LINKED']").addClass('navSelectedTab_Inactive');

    /*Fix for responsvie look and feel */
    jQuery(window).resize(function() {

        var vpWidth = viewport().width;

        if (parseInt(vpWidth) > 639) {
            jQuery(".linkedValTable").attr('style', 'display :block;width:44%;');
            jQuery(".delinkedValTable").attr('style', 'display :block;width:44%;');
        } else if (parseInt(vpWidth) <= 639) {

            jQuery(".delinkedValTable").attr('style', 'display :block; width:99.85%;');
            jQuery(".linkedValTable").attr('style', 'display :none');
        }

    });

}


/* Added for LHS collapsible feature starts */

jQuery(document).ready(function() {
    expandLHSWidgets();
    collpaseLHSWidgets();

    jQuery('#grey_out_LHSWidgets').click(function(e) {
        if (feba.domManipulator.isRTL()) {
            jQuery(".lhsResp").hide("slide", {
                direction: 'right'
            }, 500);
        } else {
            jQuery(".lhsResp").hide("slide", {
                direction: 'left'
            }, 500);
        }
        jQuery(".qp-ui-mask-modal_lhsWidget").removeClass("qp-ui-mask-visible");
    });
});

jQuery(window).resize(function() {
    var vpWidth = viewport().width;
    if (vpWidth > 1023) {
        jQuery(".lhsCollpaseRightIcon").css('display', 'none');
        jQuery(".lhsResp").css('display', 'block');
        if (jQuery(".lhsResp").hasClass("lhsWidgetsShowInResp")) {
            jQuery(".lhsResp").removeClass("lhsWidgetsShowInResp");
            jQuery(".qp-ui-mask-modal_lhsWidget").removeClass("qp-ui-mask-visible");
        }
    } else {
        jQuery(".lhsCollpaseRightIcon").css('display', 'block');
        /* for lhs widget on resize not to close 
			jQuery(".lhsResp").css('display','none'); */
        if (jQuery(".qp-ui-mask-modal_lhsWidget").hasClass("qp-ui-mask-visible")) {
            jQuery(".qp-ui-mask-modal_lhsWidget").removeClass("qp-ui-mask-visible");
        }
    }
});


function expandLHSWidgets() {
    jQuery(".lhsExpandIcon").click(function(e) {

        /* for disabling scroll of the widget */
        jQuery('.widget-content').addClass('overflow_hidden');

        jQuery(".lhsResp").addClass("lhsWidgetsShowInResp");
        if (jQuery(".expand-collapse-box").hasClass("expanded")) {
            if (jQuery("#wrapper1").children("div").hasClass("ticker-controls")) {
                jQuery(".lhsResp").css('top', '-25px');
            } else {
                jQuery(".lhsResp").css('top', '-60px');
            }
        } else {
            if (jQuery("#wrapper1").children("div").hasClass("ticker-controls")) {
                jQuery(".lhsResp").css('top', '-65px');
            } else {
                jQuery(".lhsResp").css('top', '-100px');
            }
        }
        jQuery(".lhsCollpaseRightIcon").css('display', 'block');
        if (feba.domManipulator.isRTL()) {
            jQuery(".lhsResp").show("slide", {
                direction: 'right'
            }, 500);
        } else {
            /* ** for pulldown to rhs 
            jQuery(".lhsResp").show("slide",{direction:'left'},500); */
            jQuery(".lhsResp").show("slide", {
                direction: 'right'
            }, 500);

        }
        jQuery(".qp-ui-mask-modal_lhsWidget").addClass("qp-ui-mask-visible");
        jQuery(window).scrollTop(0);

    });
}

function collpaseLHSWidgets() {
    jQuery(".lhsCollpaseRightIcon").click(function(e) {

        /* for enabling scroll of the widget */
        jQuery('.widget-content').removeClass('overflow_hidden');

        if (feba.domManipulator.isRTL()) {
            jQuery(".lhsResp").hide("slide", {
                direction: 'right'
            }, 500);
        } else {
            /* ** for pulldown to rhs 
            jQuery(".lhsResp").hide("slide",{direction:'left'},500); */
            jQuery(".lhsResp").hide("slide", {
                direction: 'right'
            }, 500);
        }
        jQuery(".qp-ui-mask-modal_lhsWidget").removeClass("qp-ui-mask-visible");
    });

}
/* Added for LHS collapsible feature ends */

/* Added for Dashboard Layout starts */
jQuery(document).ready(function() {
    alignDashboardContents();
});
jQuery(window).resize(function() {
    alignDashboardContents();
});

function alignDashboardContents() {
    var jspName = jQuery("[id='DashboardAutoAlignFG.REPORTTITLE']").val();
    if ((jspName != 'undefined' && jspName == 'RetailUserDashboardUX5') ||
        (jspName != 'undefined' && jspName == 'CorporateUserDashboardUX5')) {
        //jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style','position:relative;top:35px');
        //jQuery("#MessageDisplay_TABLE.errorDisplayStyle .errorCodeWrapper").attr('style','position:relative;top:6px');
        jQuery('#lastLoginTimeUX5').text(jQuery('#lastLogin').text().split('(')[0]);
        jQuery('#lastLoginChannelUX5').text(jQuery('#lastLogin').text().slice(jQuery('#lastLogin').text().indexOf('(')));
        jQuery("#main").css('min-height', '1400px');
        jQuery("#main").css('padding', '0px');
        if (feba.domManipulator.isRTL()) {
            jQuery('#main').css('float', 'left');
        } else {
            jQuery('#main').css('float', 'right');
        }

        /* Added to hide the loading effect of Welcome widget in dashboard screen */
        setTimeout(
            function() {
                jQuery('.container-xtrasmall_ux5').css('display', 'block');
            }, 100);

        var vpWidth = viewport().width;
        if (vpWidth >= 1024) {
            jQuery('#main').css('width', '100%');
            jQuery(".lhsResp").css('top', '35px');
            if (jQuery("#wrapper1").children("div").hasClass("ticker-controls")) {
                if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                    jQuery("#main").css('padding-top', '131px');
                } else {
                    jQuery("#main").css('padding-top', '100px');
                }
            } else {
                if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                    jQuery("#main").css('padding-top', '96px');
                } else {
                    jQuery("#main").css('padding-top', '65px');
                }
            }
        } else {
            if (jQuery("#wrapper1").children("div").hasClass("ticker-controls")) {
                if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                    jQuery("#main").css('padding-top', '126px');
                } else {
                    jQuery("#main").css('padding-top', '95px');
                }
            } else {
                if (jQuery("#timelineImageExpand").hasClass("showTimeline")) {
                    jQuery("#main").css('padding-top', '91px');
                } else {
                    jQuery("#main").css('padding-top', '60px');
                }
            }

            if (vpWidth >= 800 && vpWidth < 1024) {
                jQuery('#main').css('width', '94.5%');
            } else if (vpWidth >= 740 && vpWidth < 800) {
                jQuery('#main').css('width', '94%');
            } else if (vpWidth >= 640 && vpWidth < 740) {
                jQuery('#main').css('width', '93%');
            } else if (vpWidth >= 480 && vpWidth < 640) {
                jQuery('#main').css('width', '90%');

            }
        }
    }
}

/* Added for Dashboard Layout ends */

function triggerMenuSearchAction() {
    jQuery("#menuLinkSearchBox").prop('value', '');
    var autoCompDropdownVal = jQuery('#menuSearchBx .autocomplete-dropdown').val();
    jQuery("#menuLinkSearchBox option").map(function() {
        if (jQuery(this).text() === autoCompDropdownVal) {
            jQuery(this).prop('selected', true);
            jQuery("#menuLinkSearchButton").click();
        }
    });
}

function hideMenuSearchBx() {
    var menuSearchBoxCurrentVal = jQuery('#menuSearchBx .autocomplete-dropdown').val();
    if (menuSearchBoxCurrentVal !== getMessage("menuSearchText") && menuSearchBoxCurrentVal !== menuSearchBoxVal) {
        menuSearchBoxVal = menuSearchBoxCurrentVal;
        triggerMenuSearchAction();
    } else {
        jQuery('#menuSearchBx').hide();
        resetZIndexOfAutoCompleteDropdown();
    }
}

var menuSearchBoxVal = '';

function setMenuSearchBoxValue(val) {
    menuSearchBoxVal = jQuery('#menuSearchBx .autocomplete-dropdown').val();
}

function modifyZIndexOfAutoCompleteDropdown(zindexval) {
    jQuery('.autocomplete-suggestions').css('z-index', zindexval);
    jQuery('.autocomplete-values-list').css('z-index', zindexval);
}

function increaseZIndexOfAutoCompleteDropdown() {
    modifyZIndexOfAutoCompleteDropdown(55000);
}

function resetZIndexOfAutoCompleteDropdown() {
    modifyZIndexOfAutoCompleteDropdown(3000);
}

function alignmentMenuSearch(e) {
    var ProfileIconLeftPos = jQuery(".menuSearchIconLink").offset().left;
    var ProfileContainerRightPos = jQuery(".menuSearchBox_inner").offset().left + jQuery(".menuSearchBox_inner").width();
    var offset = ProfileContainerRightPos - ProfileIconLeftPos;
    var buffer = 25;
    var rightValue = offset - buffer;
    jQuery(".alertBxMenuSearch").css('right', offset - buffer);

}

/* added by indrajit for My Profile alignment start*/
function alignment(e) {
    /* Modified by sravan to allign the profilebox and alert arrow wrt profile name */
    /*phani for header profile
    	 * var textWidth = jQuery(".maxlength").width();
        jQuery(".profileBx").css("left",15+textWidth);*/
    jQuery(".profileBx").css("right", '5%');
    /* to align user profile overlay center in mobile resolution*/
    var vpWidth = viewport().width;
    if (vpWidth >= 320 && vpWidth <= 450) {
        jQuery(".profileBx").css("right", '0').css("left", '0').css("margin-right", 'auto').css("margin-left", 'auto');
    }
    var ProfileIconLeftPos = jQuery(".profile-picture").offset().left;
    var ProfileContainerRightPos = jQuery(".profileBox_inner").offset().left + jQuery(".profileBox_inner").width();
    /*var offset = ProfileContainerRightPos - ProfileIconLeftPos;*/
    var textWidth = jQuery(".maxlength").width();
    var offset = ProfileContainerRightPos - textWidth;
    var buffer = 65;
    var rightValue = offset - buffer;
    jQuery(".alertBxNew").css('right', offset - buffer);

    var salutation = jQuery("#salutation").text();
    var externalappname = jQuery("#externalAppUserName").text();
    var firstname = jQuery("#firstName").text();
    var lastname = jQuery("#lastName").text();
    var corpname = jQuery("#corpName_MyProfile").text();
    var nickName = '';
    if (jQuery("#nickName_MyProfile").html() != null && jQuery("#nickName_MyProfile").html() != undefined) {
        nickName = jQuery("#nickName_MyProfile").html();
    }
    jQuery("#name").text('');
    jQuery("#name").append(salutation + " " + externalappname + " " + nickName + " " + firstname + " " + lastname + " " + corpname);
    var title = jQuery("#name").text();
    jQuery("#name").attr("title", title);

    jQuery("#channelInfo").removeAttr("class");
    jQuery("#channelInfo").attr("class", "lastlogtext_grey");

}
/* added by indrajit for My Profile alignment end*/

function selectCounterpartyBank1(groupletId) {
    console.log("44Inside method selectBankDetails with groupId " + groupletId);
    //if(groupletId ==null || groupletId =="" || groupletId =="undefined" || groupletId =="Home Bank"){
    var bankTypeElement = document.getElementById(groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER");
    console.log("Bank Elements List: " + bankTypeElement);
    var bankType = bankTypeElement.options[bankTypeElement.selectedIndex].value;
    console.log("Bank Type: " + bankType);
    if (bankType == "HBK") {
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSection3']").hide();
        jQuery("[id$='Caption12353786']").hide();
        //jQuery("[id$='BankDetails']").addclass("hideElement");  PageConfigurationMaster_RMNCPW__1:DataEntry_LeftContainer_Stage39.SubSection3
        //jQuery("[id$='Caption12353786']").addclass("hideElement");   		
    } else {
        //jQuery("[id$='BankDetails']").show();
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSection3']").show();
        jQuery("[id$='Caption12353786']").show();
        //jQuery("[id$='BankDetails']").removeclass("hideElement");
        //jQuery("[id$='Caption12353786']").removeclass("hideElement");   		
    }
}

function printfunction() {

    //Fix to not display print and close buttons on print

    jQuery('.waves-effect').addClass('hideElement');
    window.print();
    window.close();
}

function mailsprintfunction() {

    //Fix to not display print and close buttons on print

    jQuery('.printwrapper .waves-effect').addClass('hideElement');
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        //alert('firefox');
        window.print();
        window.close();
    } else {
        //alert('not firefox');
        document.execCommand('print', false, null);
        window.close();
    }
}

function populateBankDetails(groupletId) {
    console.log('Inside click event of POPULATE_HOME_BANK_DETAILS ' + groupletId + ':POPULATE_HOME_BANK_DETAILS');
    document.getElementById(groupletId + ":POPULATE_HOME_BANK_DETAILS").click(); //PageConfigurationMaster_RMNCPW__1:POPULATE_HOME_BANK_DETAILS
}

function defaultAvailableBankName(groupletId) {

    var availableWith = document.getElementsByName("FormManagementFG.PAYMENT_AVAILABLE_WITH")[0].value;
    var availableWithBankNameTemp = document.getElementById("FormManagementFG.AVAILABLE_BANK_NAME_TEMP");
    if ((availableWith == 'OTBNK' || availableWith == 'ANYBNK' || availableWith == 'CNBNK') && (availableWithBankNameTemp == '' || availableWithBankNameTemp == null)) {
        jQuery("[id*='.AVAILABLE_BANK_NAME']").val("");
    }

}

function divFormMyProfileRMDetails(e) {
    var rmDetails = jQuery('.headertext_name_v');
    var dummyDetails = rmDetails;
    //var emailDiv="<div id='email' style='margin-left:5px;word-break:break-all;display:inline-block'></div>";
    var emailDiv = "<div id='email' style='margin-" + left + ":5px;word-break:break-all;display:inline-block'></div>";
    //var mobileNoDiv="<div id='mobile' style='margin-left:5px;word-break:break-all;display:inline-block'></div>";
    var mobileNoDiv = "<div id='mobile' style='margin-" + left + ":5px;word-break:break-all;display:inline-block'></div>";
    //var TelephoneDiv="<div id='telephone' style='margin-left:5px;word-break:break-all;display:inline-block'></div>";
    var TelephoneDiv = "<div id='telephone' style='margin-" + left + ":5px;word-break:break-all;display:inline-block'></div>";
    jQuery(rmDetails[1]).replaceWith(emailDiv);
    jQuery(rmDetails[2]).replaceWith(mobileNoDiv);
    jQuery(rmDetails[3]).replaceWith(TelephoneDiv);
    jQuery('#email').append(dummyDetails[1]);
    jQuery('#mobile').append(dummyDetails[2]);
    jQuery('#telephone').append(dummyDetails[3]);
}
/*Added for ie profile picture alignment issue start*/
jQuery(document).ready(function() {
    var isIE = navigator.userAgent.indexOf("MSIE");
    if (isIE == -1) {
        if (viewport().width >= 480 && viewport().width <= 485) {
            jQuery('#PROFILE_PHOTO').css('margin' + right + '' + ':0px !important');
        }
    }
});



/* Method to checked if the button clicked is with in the Search Panel. 
 * If the button  clicked is within search panel and its not search button the it will return true else false.
 */
function isSearchPanelCollapsed(sourceDivId, targetDivId) {
    var buttonID = '';
    if (searchPanelButtonEvent.length > 0) {
        buttonID = jQuery("[id='" + searchPanelButtonEvent[searchPanelButtonEvent.length - 1] + "']");
    }
    var buttonVal = jQuery(buttonID).val();

    var parentID = targetDivId.substring(0, targetDivId.indexOf("#"));
    var isSearchPanelButtonVal = isButtonPartOfCurrentSearchPanel(buttonID, parentID);
    var isSearchPanelCollapsed = false;

    if (typeof buttonVal != typeof undefined && isSearchPanelButtonVal) {
        if (jQuery(buttonID).parent().hasClass("searchPanelButtonStyle") == true ||
            jQuery(buttonID).hasClass("searchPanelButtonStyle") == true) {
            isSearchPanelCollapsed = true;
        } else {
            isSearchPanelCollapsed = false;
        }
    } else {
        isSearchPanelCollapsed = true;
    }
    //searchPanelButtonEvent = "";
    if (isSearchPanelCollapsed == false) {
        searchPanelButtonEvent = searchPanelButtonEvent.slice(0, -1);
        var domMan = feba.domManipulator;
        var sourceElement = domMan.getElementById(sourceDivId),
            anchor = domMan.getChildren(sourceElement, "a"),
            slideMode = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.SLIDE_MODE_ATTRIB)),
            animate = hideSeekHelper.sanitizeValue(domMan.getAttribute(anchor, hideSeekHelper.ANIMATE_ATTRIB));

        if (targetDivId.indexOf("#") != -1) {
            targetDivId = targetDivId.substring(targetDivId.indexOf("#") + 1);
        }

        var targetDiv = document.getElementById(targetDivId);

        feba.js.common.documentClickWatcher.register(anchor, {
            callBack: collapsibleDocClickHandler,
            anchor: anchor,
            targetDiv: targetDiv,
            slideMode: slideMode,
            animate: animate
        });
    }
    return isSearchPanelCollapsed;
}



/*
 *  Method to checked if the button clicked is with in the Search Panel. 
 *  This method will be called during the first click of the button.
 * 
 */
function isSearchPanelButton(buttonID) {
    var isButtonFromSearchPanel = false;
    var searchPanelDiv = jQuery(buttonID).parents(".collapsibleContainerDiv");
    if (searchPanelDiv != null && typeof searchPanelDiv != typeof undefined && searchPanelDiv.length != 0) {
        isButtonFromSearchPanel = true;
    }

    return isButtonFromSearchPanel;
}


/*
 *  Method to checked if the button clicked is with in the Search Panel.
 *   This method will be called when page is loaded from the overlay page.
 * 
 */
function isButtonPartOfCurrentSearchPanel(buttonID, parentID) {
    var isButtonPartOfCurrentSearchPanel = false;
    //var searchPanelDiv = jQuery(buttonID).parents(".collapsibleContainerDiv");  
    var searchPanelDiv = jQuery(buttonID).parents("[id='" + parentID + "']");
    if (searchPanelDiv != null && typeof searchPanelDiv != typeof undefined && searchPanelDiv.length != 0) {
        isButtonPartOfCurrentSearchPanel = true;
    }

    return isButtonPartOfCurrentSearchPanel;
}
/*Added for ie profile picture alignment issue end*/

/*******************************************************************************
 * These methods are called when ajax request is fired when clicked on button/links/dropdowns.
 * check ajaxSend method where these functions are called.
 * 1.getPageScroll()-->it will get the current scroll position of window just at the time of ajax calls.
 * 2.capturePaginationButtonEvent()-->This will capture button event when clicked on next/previous button of pagination and store in global button
 * event.
 * 3.capturelinkClicks()-->captures link event trigger and stores in global variable.
 * 4.storeTablePosition()--->gets the position of listing table while firing ajax request
 ******************************************************************************/
/*****************************  START **************************************************************************/
function getPageScroll(event) {
    jQuery('body').css('height', 'auto');
    if (jQuery.browser.chrome) {
        PAGE_SCROLL = document.body.scrollTop;
    } else {
        PAGE_SCROLL = document.documentElement.scrollTop;
    }
}

/*This part is added to capture pagination button click event*/
function capturePaginationButtonEvent() {
    if (PaginationButtonEvent != null) {
        var id = PaginationButtonEvent.target.getAttribute('id');
        if (typeof undefined != typeof id && id != null) {
            var isPaginationNextButton = id.search('GOTO_NEXT__');
            var isPaginationPrevButton = id.search('GOTO_PREV__');
            if (isPaginationNextButton > -1 || isPaginationPrevButton > -1) {
                ajaxButtonEvent = PaginationButtonEvent;
                dropdownEvent = null;
                isClickOnLick = null;
            }

        }

        /*Getting widget element for dashboard*/
        if (isDashBoard()) {
            var clickedElem = jQuery("[id='" + id + "']");
            var widgetElem = jQuery(clickedElem).parents('[class*="widget-body"]').children();
            widget_Elem_Dash = widgetElem;
        }

    }
}

function captureFileUploadButtonClick() {
    if (PaginationButtonEvent != null) {
        var target = PaginationButtonEvent.target;
        var prodcutTypeParent = jQuery(target).parents('.productTypeList');
        if (typeof undefined != typeof prodcutTypeParent && prodcutTypeParent != null && prodcutTypeParent.length != 0) {
            ajaxButtonEvent = PaginationButtonEvent;
            dropdownEvent = null;
            isClickOnLick = null;
        }
    }
}

function capturelinkClicks() {
    /*This part will capture click event for links*/
    if (typeof undefined != typeof linkEvent && linkEvent != null) {
        if (linkEvent.target.nodeName == 'A') {
            isClickOnLick = true;
            ajaxButtonEvent = null;
            PaginationButtonEvent = null;
            dropdownEvent = null;
        } else {
            isClickOnLick = false;
        }

    }
}

//*Added this condition to store the table position based on elements clicked
function storeTablePosition() {
    if (ajaxButtonEvent != null) {
        var clickedElement = null;
        clickedElement = getClickedElement(ajaxButtonEvent);
        var buttonPartOfPagination = jQuery(clickedElement).parents('.pagination-wrapper');
        if (typeof undefined != typeof buttonPartOfPagination && buttonPartOfPagination != null & buttonPartOfPagination.length != 0) {
            LISTING_TABLE_POS = getListingTablePosition(buttonPartOfPagination);
        }
    }

    if (dropdownEvent != null) {
        var autoCompleteInput = dropdownEvent;
        var paginationDivDropDown = jQuery(autoCompleteInput).parents('.pagination-wrapper');
        if (typeof undefined != typeof paginationDivDropDown && paginationDivDropDown != null & paginationDivDropDown.length != 0) {
            LISTING_TABLE_POS = getListingTablePosition(paginationDivDropDown);
        }
    }

}

/*This function will do the calculation and return the position.
 */
function getListingTablePosition(element) {
    var listingTable = jQuery(element).parent().find('table');
    widget_listingTable = listingTable;
    var tableId = jQuery(listingTable).attr('id');
    var pos = jQuery("[id='" + tableId + "']").find('thead:first').position().top;
    return pos;
}

/**********************************************************************END*************************************************/

/******************************* Below methods are called when ajax request is completed.check ajaxComplete Method above where these functios are called*************************************/

/********************************************************************* START*********************************************/
/*This function is called when page is refreshed on Button click to check if buuton is part of pagination
 * It will also find the widget element if its a dashboard widget and store it in global variable which will be processed at 
 * a later stage*/
function isButtonComponentPartOfPagination(event) {
    if (typeof event != typeof undefined && event != null) {
        if (event.target != null) {
            var clickedElement = null;
            clickedElement = getClickedElement(event);
            var buttonPartOfPagination = jQuery(clickedElement).parents('[class*="pagination-wrapper"]');
            if (buttonPartOfPagination.length != 0) {
                return true;
            } else if (buttonPartOfPagination.length == 0) {
                return false;
            }
        }
    }
}


/*This function is called when dropdown click or autocomplete suggestion is clicked which in turn is refreshing the page.
 * It will check whether the dropdown click was part of pagination or not and returns true or false .It will also find the widget element 
 * if its a dashboard widget and store it in global variable which will be processed at 
 * a later stage.
 */
function isDropDownClickPartOfPagination(event) {

    if (event != null) {
        var elemId = event.attr('id');
        var isPaginationDropDown = elemId.search('PAGE_CHOICE_INDEX');

        /*setting widget element for dashboard*/
        if (isDashBoard()) {
            var elem = jQuery("[id='" + elemId + "']");
            widget_Elem_Dash = jQuery(elem).parents('[class*="widget-body"]').children();
        }

        if (isPaginationDropDown > -1) {
            return true;
        } else {
            return false;
        }

    }

}


/*This function will check whether the page we are in is dashboard or not
 * 
 */
function isDashBoard() {
    var jspName = jQuery("[id='DashboardAutoAlignFG.REPORTTITLE']").val();
    var isDashboardScreen = false;
    if ((jspName != 'undefined' && jspName == 'RetailUserDashboardUX5') ||
        (jspName != 'undefined' && jspName == 'CorporateUserDashboardUX5')) {
        isDashboardScreen = true;
        return isDashboardScreen;
    }

}

function getClickedElement(event) {
    if (event != null) {
        if (event.target != null) {
            var clickedElememt;
            if (event.target.nodeName == "#document") {
                clickedElement = event.currentTarget.activeElement;
            } else {
                clickedElement = event.target;
            }
            return clickedElement;
        }
    }
}

/*This function will process focus based on conditions,where it will pass the the values to respective function 
 * where actual focus will be set.
 */
function processFocus(Scrollposition, err_tag, errTagContainer) {

    if (isDashBoard()) {
        setDashBoardSpecificFocus();
    } else {
        setFocus(Scrollposition, err_tag, errTagContainer);
    }

}


/*This function will be called from ajaxComplete function after page refreshes and will shift focus based on logic for Dashboard widgets
 * 
 */
function setDashBoardSpecificFocus() {
    var widgets = jQuery('[class*="widget-body"]');
    var widgetChildrens = jQuery(widgets).children();
    var widgetChildrenLength = widgetChildrens.length;
    var counter = 0;
    for (; counter < widgetChildrenLength; counter = counter + 2) {
        var widgetContent = jQuery(widgetChildrens)[counter];
        var errorElement = jQuery(widgetContent).find("[id*='MessageDisplay_TABLE']");
        if (typeof undefined != typeof errorElement && errorElement.length != 0) {
            jQuery(widgetContent).scrollTop(0);
        }
    }

    if (typeof undefined != typeof widget_listingTable && widget_listingTable != null && widget_listingTable.length != 0) {
        setWidgetFocus();
    } else {
        setWidgetFocus();
    }

}


function setWidgetFocus() {
    var widgetPos = jQuery(widget_Elem_Dash[0]).position().top;
    jQuery('html,body').scrollTop(widgetPos);
    jQuery(widget_Elem_Dash).scrollTop(0);
}

/*This function will be called from ajaxComplete function after page refreshes and will shift focus based on logic for
 * normal pages.
 */
function setFocus(scrollVal, err_tag, errTagContainer) {
    if (typeof err_tag != typeof undefined && typeof undefined != typeof errTagContainer && err_tag.length != 0 && errTagContainer.length != 0) {
        var pos = jQuery(err_tag).position().top;
        jQuery('html,body').scrollTop(pos);
    } else {
        jQuery('html,body').scrollTop(scrollVal);
    }
}

/************************************************************END*******************************************************************/





function validateHijiriDate(_this) {
    var picker = _this.siblings('input').pickadate('picker');
    var input_value = _this.siblings('input').val().trim();
    var picker_date_format = '';

    var error_found = 0;
    var splitInput;
    var dateSeparator;
    var centuryFormat = true;


    // Date validation - Start
    // **********
    // Summary
    // **********
    // Get the seperator character
    // There should be only 2 seperator character
    // Split the string by seperator and it should have 3 non empty values in array
    // Check the year contains only digit and its within the allowed range
    // Check the month contains only digit/string and its within the allowed range
    // Check the date contains only digit and its within the allowed range
    // **********



    if (input_value != "") {
        var seperator = '',
            regex_value, count, date_array = [];

        if (hijiri_user_format == 'dd/mm/yyyy' || hijiri_user_format == 'mm/dd/yyyy') {
            seperator = '/', regex_value = /\//igm;
        }

        count = input_value.match(regex_value), count = (count) ? count.length : 0;
        console.log(count);

        if (count == 2) {
            date_array = input_value.toString().split(seperator);
            if (date_array[0] != '' && date_array[1] != '' && date_array[2] != '') {

                // Check year is number
                // Check year is in range 		
                //if(((date_array[2].match(/^[0-9]+$/)) != null) && (((hijiri_user_format == 'dd/mm/yy' || hijiri_user_format == 'dd,mm,yy' || hijiri_user_format == 'dd-mm-yy') && (date_array[2] >= 0 && date_array[2] <= 99))  || ((hijiri_user_format == 'dd,mm,yyyy' || hijiri_user_format == 'mm/dd/yyyy' || hijiri_user_format == 'mm-dd-yyyy' || hijiri_user_format == 'dd,mmm,yyyy' || hijiri_user_format == 'dd-mmm-yyyy' || hijiri_user_format == 'dd/mm/yyyy' || hijiri_user_format == 'mm,dd,yyyy' || hijiri_user_format == 'mmm dd yyyy') && (date_array[2] >= 1975 && date_array[2] <= 2099)) || ((hijiri_user_format == 'yyyy-mm-dd' || hijiri_user_format == 'yyyy/mm/dd') && (date_array[0] >= 1975 && date_array[0] <= 2099)))) {
                if (((date_array[2].match(/^[0-9]+$/)) != null) && ((hijiri_user_format == 'dd/mm/yy' || hijiri_user_format == 'dd,mm,yy' || hijiri_user_format == 'dd-mm-yy' || hijiri_user_format == 'dd,mm,yyyy' || hijiri_user_format == 'mm/dd/yyyy' || hijiri_user_format == 'mm-dd-yyyy' || hijiri_user_format == 'dd,mmm,yyyy' || hijiri_user_format == 'dd-mmm-yyyy' || hijiri_user_format == 'dd/mm/yyyy' || hijiri_user_format == 'mm,dd,yyyy' || hijiri_user_format == 'mmm dd yyyy' || hijiri_user_format == 'yyyy-mm-dd' || hijiri_user_format == 'yyyy/mm/dd'))) {
                    // Year is valid

                    // Check month is number / string
                    // Check month is in range 
                    var month_number;
                    var month_text = ['Muh', 'Saf', 'Rab1', 'Rab2', 'Jum1', 'Jum2', 'Raj', 'Sha\'', 'Ram', 'Shaw', 'DhuQ', 'DhuH'];
                    if (hijiri_user_format == 'dd,mmm,yyyy' || hijiri_user_format == 'dd-mmm-yyyy') {
                        date_array[1] = date_array[1].toLowerCase();
                        date_array[1] = date_array[1].charAt(0).toUpperCase() + date_array[1].slice(1);
                    } else if (hijiri_user_format == 'mmm dd yyyy') {
                        date_array[0] = date_array[0].toLowerCase();
                        date_array[0] = date_array[0].charAt(0).toUpperCase() + date_array[0].slice(1);
                    }

                    if (((hijiri_user_format == 'dd/mm/yy' || hijiri_user_format == 'dd,mm,yy' || hijiri_user_format == 'dd-mm-yy' || hijiri_user_format == 'dd,mm,yyyy' || hijiri_user_format == 'dd/mm/yyyy' || hijiri_user_format == 'yyyy-mm-dd' || hijiri_user_format == 'yyyy/mm/dd') && ((date_array[1].match(/^[0-9]+$/)) != null) && (date_array[1] >= 1 && date_array[1] <= 12)) || ((hijiri_user_format == 'mm/dd/yyyy' || hijiri_user_format == 'mm-dd-yyyy' || hijiri_user_format == 'mm,dd,yyyy') && ((date_array[0].match(/^[0-9]+$/)) != null) && (date_array[0] >= 1 && date_array[0] <= 12)) || ((hijiri_user_format == 'dd,mmm,yyyy' || hijiri_user_format == 'dd-mmm-yyyy') && ((date_array[1].match(/^[a-zA-Z]+$/)) != null) && ((month_text.indexOf(date_array[1])) != -1)) || ((hijiri_user_format == 'mmm dd yyyy') && ((date_array[0].match(/^[a-zA-Z]+$/)) != null) && ((month_text.indexOf(date_array[0])) != -1))) {

                        if (hijiri_user_format == 'dd/mm/yy' || hijiri_user_format == 'dd,mm,yy' || hijiri_user_format == 'dd-mm-yy' || hijiri_user_format == 'dd,mm,yyyy' || hijiri_user_format == 'dd/mm/yyyy' || hijiri_user_format == 'yyyy-mm-dd' || hijiri_user_format == 'yyyy/mm/dd') {
                            month_number = date_array[1];

                        } else if (hijiri_user_format == 'mm/dd/yyyy' || hijiri_user_format == 'mm-dd-yyyy' || hijiri_user_format == 'mm,dd,yyyy') {
                            month_number = date_array[0];

                        } else if (hijiri_user_format == 'dd,mmm,yyyy' || hijiri_user_format == 'dd-mmm-yyyy') {
                            input_value = date_array[0] + seperator + date_array[1] + seperator + date_array[2];
                            month_number = (month_text.indexOf(date_array[1])) + 1;
                        } else if (hijiri_user_format == 'mmm dd yyyy') {
                            input_value = date_array[0] + seperator + date_array[1] + seperator + date_array[2];
                            month_number = (month_text.indexOf(date_array[0])) + 1;
                        }
                        // Month is valid

                        // Check date is number
                        // Check date is in range 
                        if (((hijiri_user_format == 'dd/mm/yy' || hijiri_user_format == 'dd,mm,yyyy' || hijiri_user_format == 'dd,mm,yy' || hijiri_user_format == 'dd-mm-yy' || hijiri_user_format == 'dd,mmm,yyyy' || hijiri_user_format == 'dd-mmm-yyyy' || hijiri_user_format == 'dd/mm/yyyy') && ((date_array[0].match(/^[0-9]+$/)) != null)) || ((hijiri_user_format == 'mm/dd/yyyy' || hijiri_user_format == 'mm-dd-yyyy' || hijiri_user_format == 'mm,dd,yyyy' || hijiri_user_format == 'mmm dd yyyy') && ((date_array[1].match(/^[0-9]+$/)) != null)) || ((hijiri_user_format == 'yyyy-mm-dd' || hijiri_user_format == 'yyyy/mm/dd') && ((date_array[2].match(/^[0-9]+$/)) != null))) {

                            var date_number;
                            if (hijiri_user_format == 'dd/mm/yy' || hijiri_user_format == 'dd,mm,yyyy' || hijiri_user_format == 'dd,mm,yy' || hijiri_user_format == 'dd-mm-yy' || hijiri_user_format == 'dd,mmm,yyyy' || hijiri_user_format == 'dd-mmm-yyyy' || hijiri_user_format == 'dd/mm/yyyy') {
                                date_number = date_array[0];
                            } else if (hijiri_user_format == 'mm/dd/yyyy' || hijiri_user_format == 'mm-dd-yyyy' || hijiri_user_format == 'mm,dd,yyyy' || hijiri_user_format == 'mmm dd yyyy') {
                                date_number = date_array[1];
                            } else if (hijiri_user_format == 'yyyy-mm-dd' || hijiri_user_format == 'yyyy/mm/dd') {
                                date_number = date_array[2];
                            }

                            if (!((date_number == "00") || (date_number.length <= 1))) {
                                // Assume not leap year by default (note zero index for Jan)
                                var days_in_month = [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29];

                                // If evenly divisible by 4 and not evenly divisible by 100,
                                // or is evenly divisible by 400, then a leap year

                                if (hijiri_user_format == 'yyyy-mm-dd' || hijiri_user_format == 'yyyy/mm/dd') {
                                    if ((!(date_array[0] % 4) && date_array[0] % 100) || !(date_array[0] % 400)) {
                                        days_in_month[1] = 29;
                                    }
                                } else {
                                    if ((!(date_array[2] % 4) && date_array[2] % 100) || !(date_array[2] % 400)) {
                                        days_in_month[1] = 29;
                                    }
                                }

                                if (date_number <= days_in_month[(month_number - 1)]) {
                                    // Date is valid
                                } else {
                                    // Date is invalid
                                    error_found = 1;
                                }
                            } else {
                                // Date value is zero which is invalid	                                    
                                error_found = 1;
                            }

                        } else {
                            // Date is not digit
                            error_found = 1;
                        }


                    } else {
                        // Month is invalid
                        error_found = 1;
                    }


                } else {
                    // Year is invalid
                    error_found = 1;

                }
            } else {
                error_found = 1;
            }
        } else {
            error_found = 1;
        }
    }


    if (error_found == 1) {
        input_value = new Date();
    }


    return error_found;
}


//added as a part for developer Buddy feature

function callDevbuddyApplication(user) {
    window.open('DeveloperBuddy/indexDevBuddy.html#' + user, '_blank');
};

/* jQuery(window).load(function(){

		console.log("****************breadcrumb-block called ***************");
		var txt = jQuery("#ID_DASHAT").attr('href');
		console.log("*******************txt************************** "+txt);
		jQuery(".breadcrumb-content").prepend("<a " +"href="+txt+ "  title='Home' class='breadcrumb'><img src='L001/corporate/images/home.jpg' height='16' width='20' class='breadcrumbHome'></a>");
		jQuery(".breadcrumb-content").prepend("<a 'title='Accounts' class='breadcrumb breadcrumbHome' href='Finacle?bwayparam=G9vQd%2B4R4%2BBEMqvBVSvvA5ScEMhXO9OnU3Ezvedyxa0BHwQf7I6DZcMVUC17MgHIt3IrQxER5useeqWitjiwH0meQAQ0Vv90MmWvNXS%2B%2BBuRNRH3A9rVIZYvOQIspvs8%0D%0A5PsXN9BezSe98y4EJp5aEyrrUeENEOjOUwwxzKyJqHW%2BSKFa0hvE%2BHURo%2F6juKCqDipQZp5WBtetdZO9ukHifOltmmCW68M0qddJ9W7%2Bmb0%3D'></a>");
		
	});*/