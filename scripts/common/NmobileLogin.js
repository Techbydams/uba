var initializeRIACall = 'N';
var mobile_lgn_Status = 'N';


function mobileLoginInitiate(thisObj, modeType) {
    initializeRIACall = "Y";
    /*jQuery('#LoginHDisplay').block({
		message : jQuery('#messageContent'),
		centerY:0,
        centerX:false
	});*/
    var checkBoxTop = '';

    if (modeType == 'secondaryMode') {
        checkBoxTop = jQuery("#HREF_AuthenticationFG\\.USER_PRINCIPAL").offset().top;
    } else {
        checkBoxTop = jQuery("#AuthenticationFG\\.USER_PRINCIPAL").offset().top;
    }

    var buttonTop = jQuery(".mobile_login_button").offset().top;

    var overlayHeight = parseInt(buttonTop) - parseInt(checkBoxTop);
    var overlayLeftPos = jQuery("#LoginHDisplay\\.Rowset1").offset().left;
    var overlayWidth = jQuery("#LoginHDisplay\\.Rowset1").width();
    jQuery(".overlayMessageContentStyle").attr('style', 'display:block ; height:' + overlayHeight + 'px !important ; width:' + overlayWidth + 'px !important ; left:' + overlayLeftPos + 'px !important');
    //jQuery(".overlayMessageContentStyle").offset({ top : parseInt(checkBoxTop)+60});
    if (modeType == 'secondaryMode') {
        jQuery(".overlayMessageContentStyle").offset({
            top: parseInt(checkBoxTop) + 45
        });
    } else {
        jQuery(".overlayMessageContentStyle").offset({
            top: parseInt(checkBoxTop) + 60
        });
    }

    var checkboxSpan = jQuery("#AuthenticationFG\\.TARGET_CHECKBOX").siblings('span');
    jQuery(checkboxSpan).addClass("disablePointerEvents");
    //jQuery("#AuthenticationFG\\.TARGET_CHECKBOX").attr("disabled","disabled");
    //jQuery(".overlayMessageContentStyle").attr('style','height:'+overlayHeight+'px !important');
}

function displayErrorMessage(responeOBJ) {


    if (!responeOBJ.content[0][1] == "") {
        jQuery('[id="mlgnErrorDisplay"]').append(responeOBJ.content[0][1]);


        /*	jQuery('#MessageDisplay_TABLE').html(""); 
        	jQuery('[id="mlgnErrorDisplay"]').remove();
        	jQuery('[id="LoginHDisplay.Ra1"]').append('<div id="mlgnErrorDisplay">  </div>');
        	jQuery('[id="mlgnErrorDisplay"]').append(responeOBJ.content[0][1]);*/
        return false;
    }


}

function showDownloadRequestMessage() {
    jQuery('[id="mobRegErrorDisplay"]').remove();
    try {
        var selectedValue = jQuery('select[id="FormManagementFG.AUTH_MODE"]').val();
        jQuery('#MessageDisplay_TABLE').html("");
        jQuery('[id="mlgnErrorDisplay"]').remove();
        jQuery('[id="StepTracker_Stage311"]').append('<div id="mlgnErrorDisplay">  </div>');
        if (selectedValue == 'MLGN') {
            jQuery('p[id$="DataEntry_LeftContainer_Stage39.Rb2b"]').css("visibility", "hidden");


            return true;
        } else {
            jQuery('p[id$="DataEntry_LeftContainer_Stage39.Rb2b"]').css("visibility", "visible");
            return false;
        }

    } catch (e) {

    }

}

function canRiaRequestbeRaised(object) {

    return false;

}

function appendToLoginURL() {
    var url1 = jQuery('form[name="AuthenticationFG"]').attr('action');
    url1 = url1 + '&MOBILE_FLAG=0';
    jQuery('form[name="AuthenticationFG"]').get(0).setAttribute('action', url1);
}


function initiateMobileLogin(val, responeOBJ) {




    try {
        if (!responeOBJ.content[0][1] == "") {


            /*jQuery('#LoginHDisplay').unblock({
				message : jQuery('#messageContent'),
				centerY:0,
		        centerX:false
			});*/
            jQuery(".overlayMessageContentStyle").removeAttr("style");
            var checkboxSpan = jQuery("#AuthenticationFG\\.TARGET_CHECKBOX").siblings('span');
            jQuery(checkboxSpan).removeClass("disablePointerEvents");
            //jQuery("#AuthenticationFG\\.TARGET_CHECKBOX").removeAttr("disabled");

            jQuery('#MessageDisplay_TABLE').html("");
            jQuery('[id="mlgnErrorDisplay"]').remove();
            jQuery('[id="LoginHDisplay.Ra1"]').append('<div id="mlgnErrorDisplay">  </div>');
            jQuery('[id="mlgnErrorDisplay"]').append(responeOBJ.content[0][1]);

            //jQuery('#MessageDisplay_TABLE').append(responeOBJ.content[0][1]);
            initializeRIACall = "N";
            return false;
        }
    } catch (e) {}








    if (mobile_lgn_Status != "" && mobile_lgn_Status == 'N') {


        jQuery("span[id=" + val + "]").trigger("click");

    }


}

function confirmMLGN(groupletID, val, tobeCalled, responeOBJ) {


    if (!responeOBJ.content[0][1] == "") {


        /*jQuery('#LoginHDisplay').unblock({
			message : jQuery('#messageContent'),
			centerY:0,
	        centerX:false
		});*/
        jQuery(".overlayMessageContentStyle").removeAttr("style");
        var checkboxSpan = jQuery("#AuthenticationFG\\.TARGET_CHECKBOX").siblings('span');
        jQuery(checkboxSpan).removeClass("disablePointerEvents");
        //jQuery("#AuthenticationFG\\.TARGET_CHECKBOX").removeAttr("disabled");
        jQuery('#MessageDisplay_TABLE').html("");
        jQuery('[id="mlgnErrorDisplay"]').remove();
        jQuery('[id="LoginHDisplay.Ra1"]').append('<div id="mlgnErrorDisplay">  </div>');
        jQuery('[id="mlgnErrorDisplay"]').append(responeOBJ.content[0][1]);
        return false;
    }








    var delay = 3000;

    var statusCode = jQuery("span[id='STATUS_MOBILELOGIN']").text();

    setTimeout(function() {
        if (statusCode != "" && statusCode != null && statusCode == "N") {
            jQuery("span[id=" + tobeCalled + "]").trigger("click");

        } else if (statusCode == "Y") {

            /*jQuery('#LoginHDisplay').block({
					message : jQuery('#confirmMessageContent'),
					centerY:0,
			        centerX:false
				});*/

            //jQuery(".overlayMessageContentStyle").removeAttr("style");
            //jQuery(".overlayConfirmMessageStyle").attr("style","display:block");
            //jQuery("#authenticateText").attr("text",jQuery("#awaitingText").attr("text"));
            jQuery("#authenticateText").text(jQuery("#awaitingText").text());
            //jQuery(".overlayTextStyle").attr('style','margin-left:24%');

            try {
                jQuery('input[id="AuthenticationFG.ACCESS_CODE"]').attr("value", "dummy");
            } catch (e) {}
            if (groupletID != null && groupletID != "") {
                jQuery('input[id="' + groupletID + ":" + "SUBMIT_TRANSACTION" + '"]').trigger("click");
            } else {
                var url1 = jQuery('form[name="AuthenticationFG"]').attr('action');
                url1 = url1 + '&MOBILE_FLAG=0';
                jQuery('form[name="AuthenticationFG"]').get(0).setAttribute('action', url1);
                jQuery('#VALIDATE_MOBILELOGIN_COMPLETION').trigger('click');

            }
        }
    }, delay);



    //}


}