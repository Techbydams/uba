/**
 * NmaterializePageCustom.js
 * The Container and Controller Object for all JavaScript objects
 * It loads all other script files.It is loaded from FEBAScripts.js
 * It contains objects to parse the Ajax response
 *
 * Created on Aug 16, 2011
 * COPYRIGHT NOTICE:
 * Copyright (c) 2004 Infosys Technologies Limited, Electronic City,
 * Hosur Road, Bangalore - 560 100, India.
 * All Rights Reserved.
 *
 * This software is the confidential and proprietary information of
 * Infosys Technologies Ltd. ("Confidential Information"). You shall
 * not disclose such Confidential Information and shall use it only
 * in accordance with the terms of the license agreement you entered
 * into with Infosys.
 */

feba.js.custom = {
    //Format for page specific custom functions is viewId_onload
    //Framework will automatically invoke the desired function for that page
    CustomReportCriteriaUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }


        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    CustomNIBSOtherBankRegDetailsUX5_onload: function(groupletId) {
        //alert("PG before load");


        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomOtherBankAccountDisplayFields";

            script.src = "scripts/custom/CustomOtherBankAccountDisplayFields.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/custom/CustomOtherBankAccountDisplayFields.js");
        }

        feba.domManipulator.loadScript("scripts/custom/CustomOtherBankAccountDisplayFields.js");
    },

    ViewReport_onload: function(groupletId) {

        jQuery("table[style='width: 780px; border-collapse: collapse; empty-cells: show']").css({
            'table-layout': 'fixed',
            'width': '1050px'
        });
        jQuery("table[style='border-collapse: collapse; empty-cells: show; table-layout: fixed; width: 1050px;'] tr").css("word-wrap", "break-word");

    },

    PortLookup_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":PortLookupFG.SELECTED_INDEX']").css({
            'visibility': 'visible',
            'position': 'initial'
        });

    },

    PortLookupUX5_onload: function(groupletId) {
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'border-' + left + ':none !important');
        jQuery(".ui-dialog .pagination-wrapper").attr('style', 'border:none !important');

    },

    EntryandApprovalLimits_onload: function(groupletId) {
        jQuery(".ui-dialog .stage3_inputpanel_leftcontainer").attr('style', 'border: 1px solid #D4D4D4 !important');

    },

    LnPreClosureSimulationDetails_onload: function() {

        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery('.stage3_steptracker_mandatory').css('color', '#505050');

    },
    CreateCorporateDivisionUX5_onload: function(groupletId) {
        jQuery('.stage3_steptracker_mandatory').attr('style', 'padding-top:20px !important;color: #000000 !important;');


    },

    RetailMPCreateUserChannelLinkage_onload: function(groupletId) {
        jQuery('.stage3_steptracker_mandatory').attr('style', 'padding-top:20px !important;color: #000000 !important;');

    },
    CorpMPCreateUserChannelLinkage_onload: function(groupletId) {

        jQuery('.stage3_steptracker_mandatory').attr('style', 'padding-top:20px !important;color: #000000 !important;');

    },

    CustomReportCriteria_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

    },
    CollectionChargeReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }


        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    PaymentRequestReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    ChargeReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    DebtorsPositionReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    DailyReleaseReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    DormantUserReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    OffShorePaymentRequestReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    FailedInvalidLoginAttemptsReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    RegisteredUserReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    ActivityReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    UserPasswordReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    MenuProfileUserReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    GeneralAuditReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    RequestTypeReport_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "CustomReportsOrdering";

            script.src = "scripts/module/reports/CustomReportsOrdering.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/CustomReportsOrdering.js");
        }

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBAReports";

            script.src = "scripts/module/reports/NFEBAReports.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/reports/NFEBAReports.js");
        }
    },
    DeviceMobiToken_onload: function() {
        jQuery('.formbtn_text2').addClass('formbtn_text2_fontOverride');
    },
    SMSMobiToken_onload: function() {
        jQuery('.formbtn_text2').addClass('formbtn_text2_fontOverride');
    },

    SelectTemplateTxnTypeUX5_onload: function() {
        var id = jQuery("[id$='TemplateMaintenanceFG.TRANSACTION_TYPE']").attr('id');
        document.getElementById(id).focus();
    },
    SMSOTP_onload: function() {
        jQuery('.formbtn_text2').addClass('formbtn_text2_fontOverride');
    },
    MobileMPIN_onload: function() {
        jQuery('.formbtn_text2').addClass('formbtn_text2_fontOverride');
    },
    SMSPassword_onload: function() {
        jQuery('.formbtn_text2').addClass('formbtn_text2_fontOverride');
    },
    SetSMSPassword_onload: function() {
        jQuery("[id$='Set_SMS_Transaction_Password']").removeClass('simpletext');
        jQuery("[id$='Set_SMS_Transaction_Password']").addClass('searchsimpletext searchsimpletextwithleftpadding');
    },

    SetPasswordUX5_onload: function(groupletId) {
        jQuery("[id$='Set_Signon_Password']").removeClass('simpletext');
        //jQuery("[id$='Set_Signon_Password']").addClass('searchsimpletext searchsimpletextwithleftpadding');

        jQuery("[id$='Set_Transaction_Password']").removeClass('simpletext');
        //jQuery("[id$='Set_Transaction_Password']").addClass('searchsimpletext searchsimpletextwithleftpadding');
        var isIE = navigator.appName.indexOf("Microsoft") != -1 || navigator.appVersion.indexOf('Trident/') > 0;
        if (!isIE && isIE != null) {
            jQuery("[id='" + groupletId + "\\:DataEntry_LeftContainer_Stage39\\.Ra4\\.C3']").css("margin-" + left + "", "45.7%");
        }
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');


        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra2.C2']").addClass('name_wrap');

        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra3.C2']").addClass('name_wrap');


    },

    OtherContactInformationDetails_onload: function() {
        jQuery('.stage3_addressdetailsrow').addClass('stage3_addressdetailsrowmargin-top');
    },

    UCDDetailsDisplayUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ConfirmationDet_SubSection']").removeClass('stage3_leftrightmainpanel_myprofile');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ConfirmationDet_SubSection']").addClass('stage3_leftrightmainpanel_myprofilelastrow');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ExtraDet_SubSection']").removeClass('stage3_leftrightmainpanel_myprofile');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ExtraDet_SubSection']").addClass('stage3_leftrightmainpanel_myprofilelastrow');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ExtraDetOne_SubSection']").removeClass('stage3_leftrightmainpanel_myprofile');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ExtraDetOne_SubSection']").addClass('stage3_leftrightmainpanel_myprofilelastrow');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ExtraDetTwo_SubSection']").removeClass('stage3_leftrightmainpanel_myprofile');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ExtraDetTwo_SubSection']").addClass('stage3_leftrightmainpanel_myprofilelastrow');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.Ra1']").attr('style', 'margin-bottom:10px');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.Rc6']").attr('style', 'margin-bottom:10px');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.Rd6']").attr('style', 'margin-bottom:10px');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.Re6']").attr('style', 'margin-bottom:10px');
        jQuery(".h3Srtitle").attr("style", "padding" + left + ":15px !important;height:auto;border:none");
        if (viewport().width >= 480 && viewport().width <= 639) {
            jQuery('.ui-dialog-title').attr('style', 'width:75% !important;margin-' + left + ': 10px !important');
        }

    },


    // Fix for ticket ID 739518
    SetLoginTimeRestrictions_onload: function() {
        setTimeout(function() {
            jQuery("select").febaCombobox("destroy");
            convertComboboxes();
        }, 1000);
    },
    updatedEntryDetails_onload: function() {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".stage3_listingpaneldiv").attr('style', 'margin-top : -1px !important');
        jQuery(".stage3_leftrightmainpanel").attr('style', 'padding-bottom:0px !important');
        setTimeout(function() {
            jQuery('.collapsiblelink').each(function(index) {
                var collapsibleContainerDiv = jQuery(this).parent().next();
                var collapsibleClass = collapsibleContainerDiv.attr('class');
                if (collapsibleContainerDiv != null && typeof collapsibleClass !== typeof undefined && collapsibleClass.match('collapsibleContainerDiv')) {
                    jQuery(collapsibleContainerDiv).removeClass('collapsible-body');
                }
            });

        }, 0);

    },

    ImportACHDataUploadUX5_onload: function() {
        feba.domManipulator.getElement(document).scrollTop(0);
        var value = jQuery('input[name="ImportACHDataFG.PROCESS_MODE"]').val();
        if (value == "A") {

            jQuery(".tab_content").hide();


        } else {

            jQuery(".tab_content").show();
        }

        jQuery(".tabs-wrap .tabs-div").removeClass("active");
        jQuery('*[data-value="' + value + '"]').addClass("active");

        jQuery(".file-path").attr('tabindex', '-1');
    },

    BGPartiesUX5_onload: function(groupletId) {
        materializeTabEffects();
    },
    BGGuaranteeDetailsUX5_onload: function(groupletId) {
        materializeTabEffects();
    },
    BGPaymentTermsUX5_onload: function(groupletId) {
        materializeTabEffects();
    },
    ImportLCGeneralDetailsUX5_onload: function(groupletId) {
        materializeTabEffects();
        /*SWIFT 2021 Changes - start */
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
        /*SWIFT 2021 Changes - end */
    },
    ImportLCPartiesUX5_onload: function(groupletId) {
        materializeTabEffects();
        /*SWIFT 2021 Changes - start */
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
        /*SWIFT 2021 Changes - end */
    },
    ImportLCPaymentTermsUX5_onload: function(groupletId) {
        materializeTabEffects();
        /*SWIFT 2021 Changes - start */
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
        /*SWIFT 2021 Changes - end */
    },
    ImportLCShipmentDetailsUX5_onload: function(groupletId) {
        materializeTabEffects();
        /*SWIFT 2021 Changes - start */
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
        /*SWIFT 2021 Changes - end */
    },
    ImportLCAdditionalDetailsUX5_onload: function(groupletId) {
        materializeTabEffects();
        /*SWIFT 2021 Changes - start */
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
        /*SWIFT 2021 Changes - end */
    },
    ImportLCAmendmentDetailsUX5_onload: function(groupletId) {

        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
    },
    ImportLCAmendPreviewConfirmationUX5_onload: function(groupletId) {

        jQuery('.span-checkbox').addClass('checkboxalignment');
        jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'border-top:0px !important');
        if (viewport().width >= 480 && viewport().width <= 639) {
            jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'width:99.77% !important');
        }

        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
    },
    ImportLCAmendSubmitCyberReceiptUX5_onload: function(groupletId) {

        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
    },
    /*SWIFT 2021 Changes - start */
    ImportLCPreviewConfirmationDetailsUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
    },
    ImportLCCyberReceiptUX5_onload: function(groupletId) {

        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
        jQuery('.span-checkbox').addClass('checkboxalignment');
    },
    LCDetailsUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'HandleLCType';

            script.src = "scripts/module/tfin/HandleLCType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/HandleLCType.js");
        }
    },
    /*SWIFT 2021 Changes - end */
    PaymentFormsViewAllRequest_onload: function() {
        var id = jQuery("[id$='PaymentFormsListFG.BENEFICIARY_ID']").attr('id');
        //var id1 = jQuery("[id$='PaymentFormsListFG.CATEGORY_ID']").attr('id');
        bnfIDIndex = document.getElementById(id).selectedIndex;
        //catIDIndex = document.getElementById(id1).selectedIndex;
    },

    PaymentFormsViewApprovalQueue_onload: function() {
        var id = jQuery("[id$='PaymentFormsListFG.BENEFICIARY_ID']").attr('id');
        //var id1 = jQuery("[id$='PaymentFormsListFG.CATEGORY_ID']").attr('id');
        bnfIDIndex = document.getElementById(id).selectedIndex;
        //catIDIndex = document.getElementById(id1).selectedIndex;
    },

    PaymentFormsViewIncompleteRequests_onload: function() {
        var id = jQuery("[id$='PaymentFormsListFG.BENEFICIARY_ID']").attr('id');
        //var id1 = jQuery("[id$='PaymentFormsListFG.CATEGORY_ID']").attr('id');
        bnfIDIndex = document.getElementById(id).selectedIndex;
        //catIDIndex = document.getElementById(id1).selectedIndex;
    },

    LoggedOutScreenUX5_onload: function() {

        /*setTimeout(function() {

				(function(t,e,s,o){
					var n,c,l;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],l=e.createElement(s),l.type="text/javascript",l.async=!0,l.id=o,l.src=["https:"===location.protocol?"https://":"http://","widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8CHtEBO74mudxUVP80WvBA6FuydQy8tWJCSmM9DbjmT.js"].join(""),c.parentNode.insertBefore(l,c))})(window,document,"script","smcx-sdk");

			}, 500);*/


        /**	setTimeout(function(){
        		jQuery('.redirecting_main').attr("style","display:block");
        	}, 1000);
        	setTimeout(function(){**/
        /* window.location.replace("https://www.surveymonkey.com/r/INTERNET_BANKING_REALTIME"); */
        /*window.location.replace("https://www.surveymonkey.com/r/TKF279F");*/
        /**	window.location.replace("https://www.branch360.co/apps/capture/uba-survey");
        }, 2000);  **/

        var width = viewport().width;
        var widthValue = width - 158;

        jQuery(".logoutPanel").css("width", widthValue);
        if (viewport().width >= 1037) {
            jQuery(".logoutPanel").css("width", "880px");
        }
        if (viewport().width >= 514) {
            jQuery(".content-info").css("width", "324px");
        } else {
            jQuery(".content-info").css("width", "323px");
        }
        if (viewport().height == 1024) {
            jQuery(".width100percent_main_logoutbg").css("height", "833px");
        }

        /* **jQuery('body').css("position","fixed");*/
        jQuery("#footer").css("bottom", "0");
        jQuery("#footer").css("position", "fixed");
        jQuery("#footer").css("width", "100%");
        jQuery('.width100percent_main_logoutbg').attr('style', 'background:none!important');
    },
    LogOutConfirmationScreenUX5_onload: function() {
        jQuery("#LOAD_DASHBOARD").css("margin-" + left + "", "-10px");
        jQuery("#LOAD_DASHBOARD").css("margin-top", "0px");
        jQuery("#LOAD_DASHBOARD").css("margin" + right + "", "-10px");

        jQuery("#TAM_LOG_OUT").css("margin-" + left + "", "-10px");
        jQuery("#TAM_LOG_OUT").css("margin-top", "0px");
        jQuery("#TAM_LOG_OUT").css("margin" + right + "", "-10px");


        jQuery("#LOG_OUT").css("margin-" + left + "", "-10px");
        jQuery("#LOG_OUT").css("margin-top", "0px");
        jQuery("#LOG_OUT").css("margin" + right + "", "-10px");
        if (viewport().width >= 480 && viewport().width <= 639) {
            jQuery("#Image29938311").css("margin-top", "-10px");
        } else {
            jQuery("#Image29938311").css("margin-top", "-3px");
        }

        var p2_tag = document.getElementById("Authorization.Re3");
        var p3_tag = document.getElementById("Authorization.Re4");
        jQuery(p2_tag).css("border-bottom", "1px solid #ccc");
        jQuery(p3_tag).css("float", right);
        jQuery(p3_tag).css("margin-top", "6px");
        jQuery(p3_tag).css("margin-bottom", "-20px");
        /*added below to Fix the Ticket  784300*/
        jQuery("#LOAD_DASHBOARD").on("dragstart", function() {
            return false;
        });
        jQuery("#LOG_OUT").on("dragstart", function() {
            return false;
        });
    },
    /* Added by 463143 for Transaction module start*/
    ViewApplicableNetworksCorp_onload: function() {
        jQuery(".stage3_listingpaneldiv").attr('style', 'border-top:1px solid #CCCCCC');
    },
    ViewApplicableNetworksRetail_onload: function() {
        jQuery(".stage3_listingpaneldiv").attr('style', 'border-top:1px solid #CCCCCC');
    },
    CreditCardLookUpCorp_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #d4d4d4 !important');
        var viewWidth = viewport().width;
        if (viewWidth >= 641) {
            jQuery(".searchsimpletext").attr('style', 'float:none');
        }
    },
    CreditCardLookUpRetail_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #d4d4d4 !important');
        var viewWidth = viewport().width;
        if (viewWidth >= 641) {
            jQuery(".searchsimpletext").attr('style', 'float:none');
        }
    },
    UnRegisteredPayeeLookupCorp_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #d4d4d4 !important');
    },
    UnRegisteredPayeeLookupRetail_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #d4d4d4 !important');
    },
    RetailFindBankDetailsList_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #d4d4d4 !important');
        jQuery(".tableoverflowwrapperhw .bluelink").attr('style', 'padding-' + right + ':12px !important');
    },
    CorporateFindBankDetailsList_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #d4d4d4 !important');
        jQuery(".tableoverflowwrapperhw .bluelink").attr('style', 'padding-' + right + ':12px !important');
    },

    CCDetailsCorp_onload: function(groupletId) {
        jQuery(".width100percent_withmargin").attr('style', 'margin-top:0px !important');
        jQuery(".stage3_leftrightmainpanel_NoSeparator").attr('style', 'padding-bottom:0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C1']").attr('style', 'margin-top:10px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C3']").attr('style', 'float:none !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C1']").attr('style', 'margin-' + right + ': -153px !important;margin-top: 10px');
        jQuery("[id='PageConfigurationMaster_WA101__1:AccountNumber']").attr('style', 'margin-' + right + ': 155px !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C2']").attr('style', 'margin-' + right + ': -70px !important');
    },
    CCDetailsRetail_onload: function(groupletId) {
        jQuery(".width100percent_withmargin").attr('style', 'margin-top:0px !important');
        jQuery(".stage3_leftrightmainpanel_NoSeparator").attr('style', 'padding-bottom:0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C1']").attr('style', 'margin-top:10px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C3']").attr('style', 'float:none !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C1']").attr('style', 'margin-' + right + ': -153px !important;margin-top: 10px');
        jQuery("[id='PageConfigurationMaster_WA101__1:AccountNumber']").attr('style', 'margin-' + right + ': 155px !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:ReadOnly_LeftContainer_Stage3_ModalView7.Rf1.C2']").attr('style', 'margin-' + right + ': -70px !important');
    },
    RejectPreviewDetailsCorp_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    RejectCompleteConfirmPreviewDetailsCorp_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    RejectSelectedConfirmPreviewDetailsCorp_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    RejectCompleteDetailsCorp_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    RejectPreviewDetailsRetail_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    RejectCompleteConfirmPreviewDetailsRetail_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    RejectSelectedConfirmPreviewDetailsRetail_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    RejectCompleteDetailsRetail_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    InitiatePaymentConfirmationCorp_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
        var leftRightPanel = jQuery('.stage3_leftrightmainpanel');
        if ((parseInt(viewWidth) > 900)) {
            jQuery(leftRightPanel[0]).attr('style', 'background:none !important');
        } else {
            jQuery(leftRightPanel[0]).attr('style', '');
        }
        jQuery(window).resize(function() {
            var vpWidth2 = viewport().width;
            if ((parseInt(vpWidth) > 900)) {
                jQuery(leftRightPanel[0]).attr('style', 'background:none !important');
            } else {
                jQuery(leftRightPanel[0]).attr('style', '');
            }
        });
    },
    InitiatePaymentConfirmationRetail_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
        var leftRightPanel = jQuery('.stage3_leftrightmainpanel');
        if ((parseInt(viewWidth) > 900)) {
            jQuery(leftRightPanel[0]).attr('style', 'background:none !important');
        } else {
            jQuery(leftRightPanel[0]).attr('style', '');
        }
        jQuery(window).resize(function() {
            var vpWidth2 = viewport().width;
            if ((parseInt(vpWidth) > 900)) {
                jQuery(leftRightPanel[0]).attr('style', 'background:none !important');
            } else {
                jQuery(leftRightPanel[0]).attr('style', '');
            }
        });
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35']").attr('style', 'border-top:1px solid #E0E0E0');
    },
    InitiatePaymentSummaryCorp_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    InitiatePaymentSummaryRetail_onload: function() {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left');
        }
    },
    /* Added by 463143 for Transaction module end*/
    UserAccountAccessUX5_onload: function(groupletId) {

        jQuery('.stage3_listingdetails').addClass('listingdetailborders'); //border issue
        jQuery('.stage3_inputpanel_leftcontainer').addClass('leftcontainerborder'); //double border
        jQuery('.span-checkbox').css('margin-bottom', '24px');

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 725) {
            jQuery("#" + groupletId + "\\:ReadOnly_LeftContainer_Stage320\\.Re6c\\.C5").find(".span-checkbox").addClass('marginleft');
        }

        jQuery(window).resize(function() {

            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 725) {
                jQuery("#" + groupletId + "\\:ReadOnly_LeftContainer_Stage320\\.Re6c\\.C5").find(".span-checkbox").addClass('marginleft');
            } else {
                jQuery("#" + groupletId + "\\:ReadOnly_LeftContainer_Stage320\\.Re6c\\.C5").find(".span-checkbox").removeClass('marginleft');
            }
        });

    },
    /* added for group account summary start */
    AcctGrpSummaryCorpUX5_onload: function(groupletId) {
        var topTabElement = jQuery('.pfm_stage3_tabmenupanel_tab');
        var childPTag = jQuery(topTabElement).children().find('p');
        jQuery(topTabElement).addClass('tabBorderWidth');

        jQuery(childPTag).css('width', '50%');
        var nullClassElement = document.getElementsByTagName('h3');
        var tableCaptionElement = nullClassElement[1];
        var childTableCaption = jQuery(tableCaptionElement).children();
        jQuery(tableCaptionElement).removeClass();
        jQuery(tableCaptionElement).addClass('notopborder listingcol');
        jQuery(childTableCaption).removeClass();
        jQuery(childTableCaption).addClass('left gradientbgtwolinetxt');
        var innerHeadingRow = jQuery('.HW_head_outerdiv');
        var tableElement = document.getElementsByTagName('table');
        jQuery(tableElement).addClass('tablePadding');
        jQuery(".amtRight").each(function(index) {
            jQuery(this).next().remove();
        });

        jQuery(".HW_grouptabletextwithpadding").each(function(index) {
            jQuery(this).next().remove();
        });

        for (i = 2; i <= innerHeadingRow.length; i = i + 2) {
            jQuery(innerHeadingRow[i]).css('border-bottom', '1px solid #ccc');
        }
        jQuery('.labelColumn_combo').css('width', '126px');
        jQuery('.HW_tableheadingnobrdr_accgrp').remove();

        var allTbodyElements = document.getElementsByTagName('tbody');
        jQuery(allTbodyElements).css('display', 'none');
        var outerTbody = jQuery('[id="group"]');
        jQuery(outerTbody).css('display', 'table-row-group');
        var domMan = feba.domManipulator;
        var collapsibleId = domMan.getGroupletSpecificElement('COLLAPSIBLE_IDS', groupletId);
        var collapsible = domMan.getAttribute(collapsibleId, "value");
        var listingPartCollapsible = collapsible.split('--:--');
        var unUsedpart = listingPartCollapsible[0];
        var usedPart = listingPartCollapsible[1];
        var ValuewithoutSeparator = usedPart.split('|');
        for (var k = 0; length = ValuewithoutSeparator.length, k < length - 1; k++) {
            var state = ValuewithoutSeparator[k].substring(ValuewithoutSeparator[k].lastIndexOf(',') + 1);
            var restValue = ValuewithoutSeparator[k].substring(0, ValuewithoutSeparator[k].lastIndexOf(',') + 1);
            if (state == 'E') {
                state = 'C';
            }
            var newValue = restValue + state + '|';
            ValuewithoutSeparator[k] = ValuewithoutSeparator[k].replace(ValuewithoutSeparator[k], newValue);
        }
        var finalValue = "";
        for (var t = 0; length = ValuewithoutSeparator.length, t < length - 1; t++) {


            finalValue = finalValue + ValuewithoutSeparator[t];
        }
        collapsibleId.value = unUsedpart + '--:--' + finalValue;
        jQuery('.amtRight').css('font-size', '14px');
        jQuery('.stage3_grpsummaryaccountsrow').css('background-color', 'white');

    },
    /* added for group account summary end*/
    OtherContactInformationDetails_onload: function() {

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) > 640) {
            jQuery('.stage3_previewconfirm_label_column').addClass('aligndateformatlabel');
            jQuery('.stage3_previewconfirm_singledetails_column').addClass('aligndateformatvalue');
        }

        jQuery(window).resize(function() {

            vpWidth = viewport().width;
            if (parseInt(vpWidth) > 640) {
                jQuery('.stage3_previewconfirm_label_column').addClass('aligndateformatlabel');
                jQuery('.stage3_previewconfirm_singledetails_column').addClass('aligndateformatvalue');
            } else {
                jQuery('.stage3_addressdetailsrow').addClass('addressalignuserdetails');
                jQuery('.stage3_previewconfirm_label_column').removeClass('aligndateformatlabel');
                jQuery('.stage3_previewconfirm_singledetails_column').removeClass('aligndateformatvalue');
            }
        });

    },
    UserAccountLookUpUX5_onload: function() {
        jQuery(".stage3_detailspanel").addClass('searchpanelrightborder');
    },
    UserAccountLookUpMultiUX5_onload: function() {
        jQuery(".stage3_detailspanel").addClass('searchpanelrightborder');
    },
    AccountAccessConfirmationUX5_onload: function(groupletId) {

        jQuery('.stage3_listingpaneldiv').addClass('listingdetailborders'); //border issue
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage320.OtherDetHeader']").addClass('h3new');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra2']").addClass('listingpadding');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra2.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra2.C2']").addClass('border_bottom_clear_imp');

    },


    CustomerIdConfirmation_onload: function() {
        jQuery('.tableoverflowwrapper').addClass('confirmTableStyle');
    },

    DeleteNonFinWorkflow_onload: function() {
        jQuery(".stage3_listingdetails").attr('style', 'width:99.85% !important');
        jQuery('.stage3_detailspanel').addClass('hideElement');
        jQuery('.stage3_searchpaneldiv').addClass('hideElement');
    },

    DDDeactivateCorpPrintPreferences_onload: function(groupletId) {
        var fgName = "";

        var elementId = 'REMARKS';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            elementId = groupletId + ":" + "FormManagementFG.REMARKS";
        }
        showAndHideRemarksEbanking(groupletId);

    },


    IMDeactivateCorpPrintPreferences_onload: function(groupletId) {
        var fgName = "";

        var elementId = 'REMARKS';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            elementId = groupletId + ":" + "FormManagementFG.REMARKS";
        }
        showAndHideRemarksEbanking(groupletId);

    },


    DeactivateCorpPrintPreferencesForDemandDraft_onload: function() {
            jQuery(document).ready(function() {
                showAndHideRemarks();
            });
        }


        ,



    DeactivateCorpPrintPreferences_onload: function() {
            jQuery(document).ready(function() {
                showAndHideRemarks();
            });
        }


        ,


    NewPayment_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    //newly added for logout overlay left margin for RWD -vinay
    LogOutConfirmationScreen_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NLogOutplugins.js");
    },
    DashboardConsolidatedSummaryWidgetsUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var convert = 'CONVERT';
            convert = groupletId + ":" + convert;
            var script = document.createElement('script');

            script.id = groupletId + "\^convertCurrency";

            script.src = "scripts/convertCurrency.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/convertCurrency.js");
        }
        //var
        jQuery("[id='" + convert + "']").parent().prev().find('select').bind('change', function(event) {
            var target = event.target;
            if (jQuery("[id='" + convert + "']").parent().prev().find(target).length > 0) {
                currentGroupletId = groupletId;
                convertCurrency();
            }
        });
        jQuery(".listrowwrapper .listwhiterow:last-child").attr('style', 'border-bottom:1px solid #d4d4d4 !important');
        jQuery(".center-container .widget-medium .positionrelative").attr('style', 'width:100% !important');

        /*Added for Border issue in screen overlay from Insta Widget--Start*/
        jQuery("section_fourlinbrd").addClass('consolidatedSummaryTable');
        jQuery("multiTableHeading").css('width', '100.1%');
        /*Added for Border issue in screen overlay from Insta Widget--End*/
    },
    AccountBalancesSummaryUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "convertCurrency";

            script.src = "scripts/convertCurrency.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/convertCurrency.js");
        }
        jQuery(".tableHeaderNoSortHW").attr('style', 'margin-' + left + ': -3px');
        jQuery(".tableheader_nosort").attr('style', 'padding-' + right + ': 20px');
        jQuery(".tableoverflowwrapperhw").attr('style', 'overflow: hidden');
        jQuery('.footable-last-column').css('text-align', 'center');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 600) {
            jQuery('.footable-first-column').addClass('paddingrightpulldown');
            jQuery('.footable-last-column').addClass('paddingrightpulldown');
            jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
            jQuery('.dropdown-button').addClass('paddingleftpulldown');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 600) {
                jQuery('.footable-first-column').addClass('paddingrightpulldown');
                jQuery('.footable-last-column').addClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
                jQuery('.dropdown-button').addClass('paddingleftpulldown');
            } else {
                jQuery('.footable-first-column').removeClass('paddingrightpulldown');
                jQuery('.footable-last-column').removeClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').removeClass('paddingrightpulldown');
                jQuery('.dropdown-button').removeClass('paddingleftpulldown');
            }
        });
    },
    SRRetailQueryList_onload: function(groupletId) {
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 600) {
            jQuery('.dropdown-button').addClass('paddingleftpulldown');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 600) {
                jQuery('.dropdown-button').addClass('paddingleftpulldown');
            } else {
                jQuery('.dropdown-button').removeClass('paddingleftpulldown');
            }
        });
    },
    DashboardCompleteSummaryWidgetsUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "toggleMenu";
            script.src = "scripts/toggleMenu.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/toggleMenu.js");
        }
        jQuery('#' + groupletId).find("[id='" + groupletId + ":Liabilities']").bind('click', function(event) {
            var liabiilityID = groupletId + ':Liabilities';
            currentGroupletId = groupletId;
            toggleMenu(liabiilityID);
        });
        jQuery('#' + groupletId).find("[id='" + groupletId + ":Assets']").bind('click', function(event) {
            var assetID = groupletId + ':Assets';
            currentGroupletId = groupletId;
            toggleMenu(assetID);
        });
    },
    CorporateApprovalQueueUX5_onload: function(groupletId) {
        var viewWidth = viewport().width;
        if (viewWidth >= 480 && viewWidth <= 501) {
            jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1.C3']").attr('style', 'margin-' + left + ':30% !important');
        }
        jQuery(window).resize(function() {
            viewWidth = viewport().width;
            if ((parseInt(viewWidth) <= 501 && parseInt(viewWidth) >= 480)) {
                jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1.C3']").attr('style', 'margin-' + left + ':30% !important');
            }
        });
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
        jQuery(".widget .menuChoices ul li a").css("padding", "10px 25px");
    },
    SendForRepairPreviewDetailsUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery(".tableoverflowwrapperhw .bluelink").attr('style', 'padding-' + right + ':7px !important');

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    AddEntryUX5_onload: function(groupletId) {
        var viewWidth = viewport().width;
        if (viewWidth <= 641) {
            jQuery(".more.dropdown-button").attr('style', 'padding-' + left + ':0px');
        }
        jQuery(".more.dropdown-button").css('bottom', '3px');
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage3_CollapsibleByDefault2.Rowset1']").css('padding-bottom', '0px');
        jQuery('.tableoverflowwrapperhw').css('overflow-y', 'hidden');
        jQuery(".searchsimpletext_stage3").removeClass("searchsimpletext_stage3").addClass("searchsimpletext");
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='" + groupletId + ":NavPanel_DataEntry_1']").css('border-' + left + '', '1px solid #D4D4D4');
            var script = document.createElement('script');

            var expandAddnDet = feba.domManipulator.getGroupletSpecificElementValue("IS_ADDN_DETAILS_EXPAND");
            if (expandAddnDet == "Y") {
                jQuery(feba.domManipulator.getGroupletSpecificElement("additionalDetails", groupletId)).trigger('click');
            }
            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        }
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39']").attr('style', 'border-top:1px solid #E0E0E0');
    },
    RetailApprovalQueueUX5_onload: function(groupletId) {
        var viewWidth = viewport().width;
        if (viewWidth >= 480 && viewWidth <= 501) {
            jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1a.C3']").attr('style', 'margin-' + left + ':34% !important');
        }
        jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1a']").removeClass('stage3_downloadnav_nobottom');
        jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1a']").addClass('stage3_downloadnav');
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    UserIdChangeConfirmationUX5_onload: function() {
        jQuery("[id='" + groupletId + ":Caption33438726']").css('width', '85%');
        jQuery("[id='PageConfigurationMaster_CSSETW__1:Authorization.Re4']").addClass(right);
    },
    ACOCyberReceiptUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailAccOpenReqDC_onload: function(groupletId) {

        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 496 && parseInt(vpWidth) >= 480)) {

            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:75px');
        } else {
            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:84px');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 496 && parseInt(vpWidth) >= 480)) {
                jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:75px');
            } else {
                jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:84px');
            }
        });

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');


            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },

    TFINUploadAttachmentUX5_onload: function(groupletId) {
        if (feba.domManipulator.isRTL()) {
            jQuery(".file-field").attr('style', 'right: 105px');
        } else {
            jQuery(".file-field").attr('style', 'left: 105px');
        }

    },

    AverageQuarterlyBalanceUX5_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra11c']").css("margin-top", "20px");
        jQuery(".stage3_inputpanel_column").css("margin-" + left + "", "-44px");
        jQuery(".HW_tabletextwithpadding").css("padding-" + left + "", "22px");

    },

    ProjectedAverageQuarterlyBalanceUX5_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra11c']").css("margin-top", "20px");
        jQuery(".stage3_inputpanel_column").css("margin-" + left + "", "-44px");
        jQuery(".HW_tabletextwithpadding").css("padding-" + left + "", "22px");
    },
    AverageMonthlyBalanceUX5_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra1']").css("margin-top", "20px");
        jQuery(".stage3_inputpanel_column").css("margin-" + left + "", "-44px");
        jQuery(".HW_tabletextwithpadding").css("padding-" + left + "", "22px");

    },
    ViewLnClosedAccountsListUX5_onload: function(groupletId) {
        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        jQuery(".tableoverflowwrapperhw").css("width", "99.78%");
        jQuery(".listgreyrowtxtleftline").css("text-align", left);
        jQuery(".labeltextstyle1").attr('style', 'margin-' + left + ':1px !important');
    },

    ViewOpClosedAccountsListUX5_onload: function(groupletId) {

        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        jQuery(".tableoverflowwrapperhw").css("width", "99.78%");
        jQuery(".listgreyrowtxtleftline").css("text-align", left);
        jQuery(".labeltextstyle1").attr('style', 'margin-' + left + ':1px !important');

        var width = viewport().width;
        if (width <= 520) {
            jQuery('.ui-dialog-title').attr('style', 'padding-' + right + ':10px !important');
        }
    },
    ViewDpClosedAccountsListUX5_onload: function(groupletId) {

        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        jQuery(".tableoverflowwrapperhw").css("width", "99.78%");
        jQuery(".listgreyrowtxtleftline").css("text-align", left);
        jQuery(".labeltextstyle1").attr('style', 'margin-' + left + ':1px !important');
    },
    SecurityDetailsUX5_onload: function(groupletId) {
        jQuery(".notopborder.listingcol").attr('style', 'border-bottom:none !important');
    },

    FindAddressUX5_onload: function(groupletId) {
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #D4D4D4 !important');
    },
    OpFFDLinksUX5_onload: function(groupletId) {

        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        jQuery(".tableoverflowwrapperhw").css("width", "99.78%");

    },

    DpNomineeSummaryUX5_onload: function(groupletId) {

        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
    },
    OpNomineeSummaryUX5_onload: function(groupletId) {

        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        jQuery(".tableoverflowwrapperhw").css("width", "99.78%");

    },
    LnDisbScheduleUX5_onload: function(groupletId) {

        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        jQuery(".waves-effect").css("margin", "0px 0px 0px 0px");

    },
    LienInquiryListUX5_onload: function(groupletId) {

        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        jQuery(".tableoverflowwrapperhw").css("width", "99.78%");

    },

    MultipleChequeImage_onload: function(groupletId) {
        var var1 = jQuery(".span-checkbox").css("height", "13px");
        var1.css("top", "0px");

    },

    ChequeStatus_onload: function(groupletId) {
        var var1 = jQuery(".span-checkbox").css("height", "13px");
        var1.css("top", "0px");
    },
    CCLDetailsDisplayUX5_onload: function(groupletId) {

        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },

    DLCDetailsDisplayUX5_onload: function(groupletId) {

        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    CSRDetailsDisplayUX5_onload: function(groupletId) {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },

    BDCDetailsDisplayUX5_onload: function(groupletId) {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    LCRDetailsDisplayUX5_onload: function(groupletId) {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    NCADetailsDisplayUX5_onload: function(groupletId) {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    ACADetailsDisplayUX5_onload: function(groupletId) {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },

    AccountNickNameLookUpUX5_onload: function(groupletId) {
        jQuery(".tableoverflowwrapperhw").attr('style', 'border-' + right + ':1px solid #D4D4D4;width:99.80%');
        var windowWidth = viewport().width;
        if (parseInt(windowWidth) >= 480 && parseInt(windowWidth) <= 640) {
            jQuery(".tableoverflowwrapperhw").attr('style', 'border-' + right + ':1px solid #D4D4D4;width:99.50%');
        }
        if (parseInt(windowWidth) >= 700 && parseInt(windowWidth) <= 900) {
            jQuery(".tableoverflowwrapperhw").attr('style', 'border-' + right + ':1px solid #D4D4D4;width:99.70%');
        }

        //jQuery(".searchsimpletext").css("float","none");
        //jQuery(".HW_textwithpadding").css("padding-"+right+"","0px");
    },
    ConsolidatedDayEndStatementUX5_onload: function(groupletId) {

        jQuery(".stage3_detailspanel").css("width", "98.78%");
        jQuery(".stage3_header_withheight").css("height", "27px");
        jQuery(".stage3_header_withheight").css("width", "100%");

        jQuery("[id='" + groupletId + ":Details_TopLeftContainer_Stage33.SubSectHeader3']").css("border-top", "none");

        //jQuery("[id='"+groupletId+":Details_TopLeftContainer_Stage33.SubSection3']").css("width","98%");


        var windowWidth = viewport().width;
        if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 720) {
            jQuery("[id='" + groupletId + ":ACCOUNT_LOOK_UP']").parent().css('margin-' + left + '', '47%');

        }

        if (parseInt(windowWidth) <= 540) {

            jQuery("[id='" + groupletId + ":Details_TopLeftContainer_Stage33.SubSection3']").css("width", "97%");
        }
        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
            if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 720) {
                jQuery("[id='" + groupletId + ":ACCOUNT_LOOK_UP']").parent().css("margin-" + left + "", "47%");

            } else {
                jQuery("[id='" + groupletId + ":ACCOUNT_LOOK_UP']").parent().css("margin-" + left + "", "0%");
            }
        });

    },

    ACADataCaptureUX5_onload: function(groupletId) {

        var windowWidth = viewport().width;
        if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 720) {
            jQuery("[id='" + groupletId + ":PostalAddressFinderFG.LOOK_UP__']").parent().css("margin-" + left + "", "47%");

        }
        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
            if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 720) {
                jQuery("[id='" + groupletId + ":PostalAddressFinderFG.LOOK_UP__']").parent().css('margin-' + left + '', '47%');

            } else {
                jQuery("[id='" + groupletId + ":PostalAddressFinderFG.LOOK_UP__']").parent().css('margin-' + left + '', '0%');
            }
        });

    },

    DCRDetailsDisplayUX5_onload: function(groupletId) {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },

    NAPDataCaptureUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":NavigationPanel_Stage311']").css("border-" + left + "", "none");
        jQuery("[id='" + groupletId + ":NavigationPanel_Stage311']").css("border-" + right + "", "none");
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },

    BGPaymentTermsUX5_onload: function(groupletId) {

        var windowWidth = viewport().width;

        if (parseInt(windowWidth) >= 480 && parseInt(windowWidth) <= 539) {
            jQuery("[id='" + groupletId + ":days']").css("padding-" + left + "", "50%");
            jQuery("[id='" + groupletId + ":daysCE']").css("padding-" + left + "", "50%");
        } else if (parseInt(windowWidth) >= 540 && parseInt(windowWidth) <= 680) {
            jQuery("[id='" + groupletId + ":days']").css("padding-" + left + "", "49%");
            jQuery("[id='" + groupletId + ":daysCE']").css("padding-" + left + "", "49%");
        }


        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
            //alert("windowwidth>>"+parseInt(windowWidth));
            if (parseInt(windowWidth) >= 480 && parseInt(windowWidth) <= 539) {
                jQuery("[id='" + groupletId + ":days']").css("padding-" + left + "", "50%");
                jQuery("[id='" + groupletId + ":daysCE']").css("padding-" + left + "", "50%");
            } else if (parseInt(windowWidth) >= 540 && parseInt(windowWidth) <= 680) {
                jQuery("[id='" + groupletId + ":days']").css("padding-" + left + "", "49%");
                jQuery("[id='" + groupletId + ":daysCE']").css("padding-" + left + "", "49%");
            } else {
                jQuery("[id='" + groupletId + ":days']").css("padding-" + left + "", "0%");
                jQuery("[id='" + groupletId + ":daysCE']").css("padding-" + left + "", "0%");
            }

        });

    },
    TemplateDetailsUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    ViewTransactionDetailsUX5_onload: function(groupletId) {
        //jQuery(".tableoverflowwrapperhw").attr('style', 'border-'+right+': 1px solid #D4D4D4 !important;');
        jQuery(".tableoverflowwrapperhw").addClass('rightBorder');
    },
    ViewTransactionEntryDetailsUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":DownloadPanel_Stage34']").attr('style', 'display:none');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ExtraDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
    },

    ViewSinglTransactionDetailsUX5_onload: function(groupletId) {
        jQuery(".tableoverflowwrapperhw").addClass('rightBorder');
    },
    BillLodgeShipmentDetails_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":InputFormWithTab.Re1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Re1']").addClass('formrow_tfin');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Ri1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Ri1']").addClass('formrow_tfin');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Rm1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Rm1']").addClass('formrow_tfin');
    },

    CollectionGeneralDetails_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":InputFormWithTab.Rm1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Rm1']").addClass('formrow_tfin');
    },

    CollectionParties_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":InputFormWithTab.Re1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Re1']").addClass('formrow_tfin');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Ri1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputFormWithTab.Ri1']").addClass('formrow_tfin');
    },
    SRCorporateAccOpenReqDC_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 496 && parseInt(vpWidth) >= 480)) {

            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:75px');
        } else {
            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:84px');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 496 && parseInt(vpWidth) >= 480)) {
                jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:75px');
            } else {
                jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:84px');
            }
        });
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateDelinkCreditCard_onload: function(groupletId) {
        //jQuery("[id='"+groupletId+":DataEntry_LeftContainer_Stage39.Rhh1b']").attr('style','border-bottom-style:none;height:0px');
    },
    MaintainCPLinkageUX5_onload: function() {
        /*Fix for ticket-735387
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");*/

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allItemsselected) != "undefined") {
                if (allItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });
        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },
    CPLinkageConfirmUX5_onload: function() {
        jQuery(".HW_tableheadingnobrdr").attr('style', 'padding-' + left + ':6px !important');
    },

    MaintainBillerLinkageUX5_onload: function() {
        /*Fix for ticket-735734
            jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");*/

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allBillerselected) != "undefined") {
                if (allBillerselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allBillerselected = 'Y';
            invokeNavAllTab();
            return false;
        });
        jQuery(".navSelectedTab").click(function(e) {
            allBillerselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            if (!jQuery(this).siblings().attr('checked')) {
                jQuery(this).siblings().attr('checked', true);
            } else {
                jQuery(this).siblings().attr('checked', false);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        });

    },
    FavoriteActivities_onload: function() {
        jQuery(".tableoverflowwrapperhw").attr('style', 'margin-bottom : -1px !important');
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 640) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');

            if (typeof(favActAllItemsselected) != "undefined") {

                if (favActAllItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
            jQuery(".navAllTab").attr('style', 'padding-top : 0px !important');
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em;height: 24px');
        }

        jQuery(".navAllTab").click(function(e) {
            favActAllItemsselected = 'Y';
            invokeNavAllTab();
            return false;

        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            favActAllItemsselected = 'N';
            invokeNavSelectedTab();
            return false;

        });
        /* issue related to checking during group creation for the 2nd and subsequent time */
        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            if (!jQuery(this).siblings().attr('checked')) {
                jQuery(this).siblings().attr('checked', true);
            } else {
                jQuery(this).siblings().attr('checked', false);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        });
    },
    ViewRelationshipScreen_onload: function() {
        if (viewport().width >= 480 && viewport().width <= 640) {
            jQuery(".HW_textwithpadding_center").attr('style', 'padding-' + left + ' :0px');
        }
        /* issue related to checking during group creation for the 2nd and subsequent time */
        jQuery('.css-labelradio_UX5').die('click');
        jQuery('.css-labelradio_UX5').unbind('click');
        jQuery('.css-labelradio_UX5').bind('click', function(event) {
            if (!jQuery(this).siblings().attr('checked')) {
                jQuery(this).siblings().attr('checked', true);
            } else {
                jQuery(this).siblings().attr('checked', false);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        });

    },

    FavoriteAccounts_onload: function(groupletId) {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");
        jQuery(".bottom_padding").addClass("respbuttonalign");
        jQuery("[id='" + groupletId + ":NavPanel']").addClass('section downloadPanelBorder');
        jQuery("[id='" + groupletId + ":NavPanel22']").addClass('section downloadPanelBorder');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(favAccAllItemsselected) != "undefined") {

                if (favAccAllItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }


        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em;height: 24px');
        }

        jQuery(".navAllTab").click(function(e) {
            favAccAllItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */

        jQuery(".navSelectedTab").click(function(e) {
            favAccAllItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },
    FavoriteAccountsUX5_onload: function(groupletId) {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");
        jQuery("[id='" + groupletId + ":NavPanel']").addClass('section downloadPanelBorder');
        jQuery("[id='" + groupletId + ":NavPanel22']").addClass('section downloadPanelBorder');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');

            if (typeof(favAccAllItemsselected) != "undefined") {

                if (favAccAllItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            favAccAllItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */

        jQuery(".navSelectedTab").click(function(e) {
            favAccAllItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },

    AcctGroupMaintAddList_onload: function() {
        /* jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink"); */

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allItemsselected) != "undefined") {
                if (allItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em;height: 24px');
        }

        jQuery(".navAllTab").click(function(e) {
            allItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });

        /* issue related to checking during group creation for the 2nd and subsequent time */
        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            jQuery(this).prev('input[type="checkbox"]').click();
            event.preventDefault();
            event.stopImmediatePropagation();
        });
    },
    CorpUserReportLinkDelinkListUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allMenuItemsselected) != "undefined") {
                if (allMenuItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }

        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            jQuery(".gradientbgtwolinetxt").attr('style', 'width:100% !important');
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allMenuItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },
    CorpUserMenuOptionsLinkDeLinkUX5_onload: function() {
        //  jQuery(".delinkedValTable .tableoverflowwrapperhw").attr('style', 'border-bottom:0px !important');
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allMenuItemsselected) != "undefined") {
                if (allMenuItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }

        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allMenuItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },


    IMMarkAsDamagedLinkDeLinkUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allItemsselected) != "undefined") {
                if (allItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allItemsselected = 'Y';
            jQuery(".linkedValTable").attr('style', 'display :none');
            jQuery(".delinkedValTable").attr('style', 'display :block; width:97%;border:none;padding-' + right + ': 0.5%;');
            jQuery(".navigationLeftButtons_resp").attr('style', 'display :none');
            jQuery(".navigationRightButtons_resp").attr('style', 'display :block');

            jQuery("[title='All Items']").removeClass('navAllTab');
            jQuery("[title='All Items']").addClass('navAllTab_Active');
            jQuery("[title='Selected Items']").removeClass('navSelectedTab');
            jQuery("[title='Selected Items']").addClass('navSelectedTab_Inactive');


            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allItemsselected = 'N';
            jQuery(".delinkedValTable").attr('style', 'display :none');
            jQuery(".linkedValTable").attr('style', 'display :block;border:none');
            jQuery(".navigationLeftButtons_resp").attr('style', 'display :block');
            jQuery(".navigationRightButtons_resp").attr('style', 'display :none');

            jQuery("[title='Selected Items']").removeClass('navSelectedTab_Inactive');
            jQuery("[title='Selected Items']").addClass('navSelectedTab');
            jQuery("[title='All Items']").removeClass('navAllTab_Active');
            jQuery("[title='All Items']").addClass('navAllTab');

            /*Manage categories second table was getting footable only on resize at lower resoln*/

            return false;
        });

        /* issue related to checking during group creation for the 2nd and subsequent time */
        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            if (!jQuery(this).siblings().attr('checked')) {
                jQuery(this).siblings().attr('checked', true);
            } else {
                jQuery(this).siblings().attr('checked', false);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        });

        jQuery(window).resize(function() {

            var viewWidth = viewport().width;
            if (parseInt(viewWidth) > 639) {
                jQuery(".linkedValTable").attr('style', 'display :block');
                jQuery(".delinkedValTable").attr('style', 'display :block');
            } else {
                jQuery(".delinkedValTable").attr('style', 'display :none');
                jQuery(".linkedValTable").attr('style', 'display :block;');
                jQuery(".navigationLeftButtons_resp").attr('style', 'display :block');
                jQuery(".navigationRightButtons_resp").attr('style', 'display :none');

                jQuery("[title='Selected Items']").removeClass('navSelectedTab_Inactive');
                jQuery("[title='Selected Items']").addClass('navSelectedTab');
                jQuery("[title='All Items']").removeClass('navAllTab_Active');
                jQuery("[title='All Items']").addClass('navAllTab');

            }
        });

    },


    UserAccountAccessAuthorizeUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");
        jQuery('.stage3_listingdetails').addClass('listingdetailborders');

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top:11px');
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allUserAccesSelected) != "undefined") {
                if (allUserAccesSelected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allUserAccesSelected = 'Y';
            invokeNavAllTab();
            return false;
        });

        jQuery(window).resize(function() {

            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top:11px');
            }
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allUserAccesSelected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },

    UserAccountAccessTransactUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");
        jQuery('.stage3_listingdetails').addClass('listingdetailborders');

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top:11px');
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allUserAccesTranSelected) != "undefined") {
                if (allUserAccesTranSelected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allUserAccesTranSelected = 'Y';
            invokeNavAllTab();
            return false;
        });

        jQuery(window).resize(function() {

            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top:11px');
            }
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allUserAccesTranSelected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },


    RoleMaintenanceAddListUX5_onload: function() {

        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allRolesSelected) != "undefined") {
                if (allRolesSelected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allRolesSelected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allRolesSelected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },
    RuleListUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='" + groupletId + ":NavPanel12']").removeClass('width79percent_navigationpanel');
        }
    },
    ApproverListUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='" + groupletId + ":TabMenuPanel_WithoutWidget_Stage37']").removeClass('stage3_tabmenupanel_widoutwidget_topmargin');
            jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1.C9']").css('margin-' + right + '', '0px');
            //jQuery('.stage3_tabmenupanel_widoutwidget_topmargin').css('border-bottom','none');
        }
    },
    FindCorporateUser_onload: function(groupletId) {
        jQuery("table td .searchsimpletext_wrapnew").attr('style', 'color:inherit !important');
    },
    FindBankUser_onload: function(groupletId) {
        jQuery("table td .searchsimpletext_wrapnew").attr('style', 'color:inherit !important');
    },
    RoleMaintenanceEditListUX5_onload: function() {

        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra4.C2']").css('overflow', 'auto');
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra4.C2']").css('word-break', 'break-word');

        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allRolesEditSelected) != "undefined") {
                if (allRolesEditSelected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allRolesEditSelected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allRolesEditSelected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },
    SchemeIdLookupListUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");
        jQuery(".collapsible-body p").attr('style', 'padding: 8px 31px !important');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allMenuItemsselected) != "undefined") {
                if (allMenuItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);
                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            jQuery(".slider").attr('style', 'left:50% !important');
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            jQuery(".slider").attr('style', 'left:0px !important');
            allMenuItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
        jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top: 0px !important');
        var vpWidth2 = viewport().width;
        if (parseInt(vpWidth2) <= 900) {
            jQuery(".linkedValTable").attr('style', 'overflow: auto  !important');
            jQuery(".delinkedValTable").attr('style', 'overflow: auto !important');
        }
    },

    SplashPage_onload: function() {
        jQuery('#nTitle').css('display', 'none');
        jQuery('.ui-widget-overlay').css('max-height', '1200px');

    },
    UserRoleMaintenance_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allUserRolesSelected) != "undefined") {
                if (allUserRolesSelected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);
                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allUserRolesSelected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allUserRolesSelected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },
    AcctGroupMaintAddListUX5_onload: function() {
        /* jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink"); */

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allAcctsSelected) != "undefined") {
                if (allAcctsSelected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);
                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em;height: 24px');
        }

        jQuery(".navAllTab").click(function(e) {
            allAcctsSelected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allAcctsSelected = 'N';
            invokeNavSelectedTab();
            return false;
        });

        /* issue related to checking during group creation for the 2nd and subsequent time */
        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            if (!jQuery(this).siblings().attr('checked')) {
                jQuery(this).siblings().attr('checked', true);
            } else {
                jQuery(this).siblings().attr('checked', false);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        });

    },

    FinRuleAccountLookupListUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");
        jQuery(".delinkedValTable").attr('style', 'border-bottom: 1px solid #CCCCCC !important');
        jQuery(".linkedValTable").attr('style', 'border-bottom: 1px solid #CCCCCC !important');

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allMenuItemsselected) != "undefined") {
                if (allMenuItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);
                }
            }
        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            jQuery(".slider").attr('style', 'left:50% !important');
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            jQuery(".slider").attr('style', 'left:0px !important');
            allMenuItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });

        jQuery(".stage3_listingpaneldiv").attr('style', 'border-top: 1px solid #CCCCCC !important');
        jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top: 0px !important');
        jQuery(".tableoverflowwrapperhw").attr('style', 'border-' + left + ': 0px !important');
        jQuery(".ui-dialog .pagination-wrapper").attr('style', 'border: 0px !important');
        jQuery(".ui-dialog h3.listingcol").attr('style', 'border-bottom: 0px !important');
    },
    CustomerIDListUX5_onload: function(groupletId) {
        jQuery('.stage3_detailspanel').attr('style', 'margin-bottom:0px !important');
    },
    CustomerIdConfirmationUX5_onload: function(groupletId) {
        jQuery("table th").attr('style', 'padding: 17px 2px !important');
        jQuery(".singleTableHeading").attr('style', 'border-bottom: 0px !important');
        jQuery(".rightlisttable").css("border-bottom", "none");
        jQuery(".leftlisttable").css("border-bottom", "none");
        jQuery(".querytextleft_width100percent_withtextalignleft").css("border-top", "1px solid #D4D4D4");
        jQuery(".HW_head_outerdiv").css("border-bottom", "1px solid #CCCCCC");
    },

    CustomerIdLinkDeLinkUX5_onload: function(groupletId) {
        jQuery("[id='PageConfigurationMaster_UCACCMW__1:ListingPanel_LeftContainer_Stage3_DetailsPanel18']").removeClass("stage3_listingdetails").addClass("stage3_listingpaneldiv");
        jQuery("[id='PageConfigurationMaster_AMMUADW__1:ListingPanel_LeftContainer_Stage3_DetailsPanel18']").removeClass("stage3_listingdetails").addClass("stage3_listingpaneldiv");
        jQuery(".delinkedValTable .tableoverflowwrapperhw").attr('style', 'margin-bottom:-1px !important');

        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allMenuItemsselected) != "undefined") {
                if (allMenuItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }

        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allMenuItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },

    DivisionInternalAcctLinkageListUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allMenuItemsselected) != "undefined") {
                if (allMenuItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }

        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allMenuItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },

    CorporateDivision_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },

    DSBDetailsDisplayUX5_onload: function() {
        setTimeout(function() {
            jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.Re4.C1']").attr('style', 'display:none');
        }, 50);
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },

    DSBRequestConfirmationUX5_onload: function() {
        feba.domManipulator.getElement(document).scrollTop(0);
    },

    DivCorpApprovalViewDetails_onload: function() {
        jQuery(".singleTableHeading").attr('style', 'border-top: 0px !important');
        jQuery(".rightlisttable").attr('style', 'border-' + right + ': 1px solid #CCCCCC !important;border-bottom: 0px !important;');
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },

    DivisionInternalAcctLinkageConfirmationUX5_onload: function() {
        jQuery(".singleTableHeading").attr('style', 'border-bottom: none !important');
        jQuery(".HW_tableheadingnobrdr").attr('style', 'padding-' + right + ': 5px !important');
        jQuery(".rightlisttable").css("border-bottom", "none");
        jQuery(".leftlisttable").css("border-bottom", "none");
        jQuery(".querytextleft_width100percent_withtextalignleft").css("border-top", "1px solid #D4D4D4");
        jQuery(".HW_head_outerdiv").css("border-bottom", "1px solid #CCCCCC");
    },

    DivisionCorpUserLinkageConfirmationUX5_onload: function() {
        jQuery(".singleTableHeading").attr('style', 'border-bottom: none !important');
        jQuery(".rightlisttable").css("border-bottom", "none");
        jQuery(".leftlisttable").css("border-bottom", "none");
        jQuery(".querytextleft_width100percent_withtextalignleft").css("border-top", "1px solid #D4D4D4");
        jQuery(".HW_head_outerdiv").css("border-bottom", "1px solid #CCCCCC");
    },



    DivisionCorpUserLinkageListUX5_onload: function() {
        jQuery(".widformbtn_pagi_go_new").removeClass("widformbtn_pagi_go_new").addClass("widformbtn_pagi_go_linkdelink");

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px 6px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.69em;margin-' + right + ':9px;margin-' + left + ':2px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px 6px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.69em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.69em');
            if (typeof(allMenuItemsselected) != "undefined") {
                if (allMenuItemsselected == 'Y') {
                    setTimeout(function() {
                        jQuery(".navAllTab").trigger('click');
                    }, 200);

                }
            }

        } else {
            jQuery(".widgetFooterleft_new").attr('style', 'padding:0px');
            jQuery(".transactiontxt_new").attr('style', 'font-size:0.62em;margin-' + right + ':0px');
            jQuery(".widgetFooterRight_new").attr('style', 'padding:0px');
            jQuery(".widgetpaginationtxt1_new").attr('style', 'font-size:0.62em');
            jQuery(".widpaginationtxtbx_new").attr('style', 'font-size:0.62em');
        }

        jQuery(".navAllTab").click(function(e) {
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });

        /* Link Delink tabs selection */
        jQuery(".navSelectedTab").click(function(e) {
            allMenuItemsselected = 'N';
            invokeNavSelectedTab();
            return false;
        });
    },
    NewPaymentUX5_onload: function(groupletId) {

        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 640 && parseInt(vpWidth) >= 480)) {
            if (feba.domManipulator.isRTL()) {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':8px;margin-bottom:4px');
            } else {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':8px;margin-bottom:4px');
            }
        } else {
            if (feba.domManipulator.isRTL()) {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':52px;margin-bottom:4px');
            } else {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':52px;margin-bottom:4px');
            }
        }
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage3_Collapsible8.Rowset1']").css('padding-bottom', '0px');
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 640 && parseInt(vpWidth) >= 480)) {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':8px;margin-bottom:4px');
                } else {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':8px;margin-bottom:4px');
                }
            } else {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':52px;margin-bottom:4px');
                } else {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':52px;margin-bottom:4px');
                }
            }
        });


        feba.js.common.displayWarning = "N";
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");

        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var fgName = "";

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        /*Aashish added*/
        jQuery(document).delegate(elementId, "change", function() {
            commonCall(fgName);
        });

        /* RWD fix for transaction purpose dropdown width*/
        jQuery("#ui-id-15").css("width", "45%");

        /*		jQuery([id="+elementId+"]).change(function(){
        				commonCall(fgName);
        			});*/
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });

        feba.js.transaction.bindCounterpartyChanges(groupletId);

        /* Start: Added for IMPS Enhancements*/
        var txnType = feba.domManipulator.getElementById("transactionType");
        if (null != txnType && jQuery(txnType).attr('value') == 'IPS') {
            /* Disabling the date checkbox */
            jQuery('#' + groupletId + "\\:" + 'TranRequestManagerFG\\.TXN_DATE').attr("disabled", "disabled");
            /* Unbind the Calendar click for IMPS */
            setTimeout(function() {
                jQuery('.picker-icon').unbind('click');
                jQuery('.picker-icon').die('click');
            }, 2000);
        }
        /* End: Added for IMPS Enhancements*/
    },
    NewOutwardRemittanceUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");

        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var fgName = "";

        //fix for defect:779939
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        /*Aashish added*/
        jQuery(document).delegate(elementId, "change", function() {
            commonCall(fgName);
        });

        /* RWD fix for transaction purpose dropdown width*/
        jQuery("#ui-id-15").css("width", "45%");

        /*		jQuery([id="+elementId+"]).change(function(){
        				commonCall(fgName);
        			});
        */
        feba.js.transaction.bindCounterpartyChanges(groupletId);

        //Added click event to personal payee as part of fix for defect:779939
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });

    },
    CounterPartyListUX5_onload: function(groupletId) {
        jQuery(".stage3_tabmenupanel_widoutwidget_topmargin").css("border-bottom", "none");
        jQuery(".stage3_detailspanel").css("border-top", "1px solid #CCC");
    },
    CounterPartyRegistrationUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NTxnssMaxAmtLimit';

            script.src = "scripts/module/txnss/NTxnssMaxAmtLimit.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            /* Added below code to fix collapsible issue during on-load of Add Counter party screen  */
            displayAdditional(groupletId);
        } else {
            feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
        }
    },
    counterpartyconfirmation_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ConfirmationDet_SubSectionTop']").removeClass("stage3_leftrightmainpanel").addClass("stage3_leftrightmainpanel_NoSeparator");
        jQuery(".stage3_leftrightmainpanel_NoSeparator").attr('style', 'padding-bottom:0px !important');
    },

    DBTermDepositCalc_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    NewFundsTransfer_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            if (jQuery('.nextGenUX4').find('#' + groupletId).length > 0) {
                jQuery('#' + groupletId + '\\:DownloadPanel_Stage34\\.Ra1').css('display', 'none');
            }
        }

    },
    ApproveSingleEntryPreviewDetailsMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/transaction/ApproveSingleEntryPreviewDetailsMB.js");
    },
    ApproveSingleEntryPreviewDetailsUX5_onload: function() {
        if (jQuery('div .width100percent').hasClass('querytextleft_withleftBorder_Auth')) {
            jQuery('div .width100percent').removeClass('querytextleft_withleftBorder_Auth');
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.SubSection1']").addClass('querytextleft_withleftBorder_Auth');
            jQuery('div .width79percent').css('width', '99.85%');
        } else {
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.SubSection1']").addClass('querytextleft_withleftBorder_Auth');
            jQuery('div .width79percent').css('width', '99.85%');
        }

    },

    RecallPreviewDetailsForSingleEntryUX5_onload: function() {
        if (jQuery('div .width100percent').hasClass('querytextleft_withleftBorder_Auth')) {
            jQuery('div .width100percent').removeClass('querytextleft_withleftBorder_Auth');
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.SubSection1']").addClass('querytextleft_withleftBorder_Auth');
            jQuery('div .width79percent').css('width', '99.85%');
        } else {
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.SubSection1']").addClass('querytextleft_withleftBorder_Auth');
            jQuery('div .width79percent').css('width', '99.85%');
        }

    },
    RepairCompCfmPreviewDetailsForSingleEntryUX5_onload: function() {
        if (jQuery('div .width100percent').hasClass('querytextleft_withleftBorder_Auth')) {
            jQuery('div .width100percent').removeClass('querytextleft_withleftBorder_Auth');
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.SubSection2']").addClass('querytextleft_withleftBorder_Auth');
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.Re5.C1']").removeClass('querytextleft_width100percent_withtextalignleft');

        }
    },
    RejectCompleteConfirmPreviewDetailsForSingleEntryUX5_onload: function(groupletId) {
        if (jQuery('div .width100percent').hasClass('querytextleft_withleftBorder_Auth')) {
            jQuery('div .width100percent').removeClass('querytextleft_withleftBorder_Auth');
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.SubSection2']").addClass('querytextleft_withleftBorder_Auth');
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.Re7.C1']").removeClass('querytextleft_width100percent_withtextalignleft');
            jQuery('div .width79percent').css('width', '99.85%');

        } else {
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.SubSection2']").addClass('querytextleft_withleftBorder_Auth');
            jQuery("[id='" + groupletId + "\\:InputForm_Authorization_Stage317.Re7.C1']").removeClass('querytextleft_width100percent_withtextalignleft');
            jQuery('div .width79percent').css('width', '99.85%');
        }
    },
    CounterPartyConfirmationDetailsMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/txnss/CounterPartyConfirmationDetailsMB.js");
    },
    ApprovalBillerRegistrationConfirmationDetailsMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/txnss/ApprovalBillerRegistrationConfirmationDetailsMB.js");
    },
    NewFundsTransferUX5_onload: function(groupletId) {

        /* Fixed for ipad issues*/
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 640 && parseInt(vpWidth) >= 480)) {
            if (feba.domManipulator.isRTL()) {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':8px;margin-bottom:4px');
            } else {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':8px;margin-bottom:4px');
            }
        } else {
            if (feba.domManipulator.isRTL()) {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':52px;margin-bottom:4px');
            } else {
                jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':52px;margin-bottom:4px');
            }
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 640 && parseInt(vpWidth) >= 480)) {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':8px;margin-bottom:4px');
                } else {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':8px;margin-bottom:4px');
                }
            } else {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + left + ':52px;margin-bottom:4px');
                } else {
                    jQuery(".labelColumn_combo_small").attr('style', 'margin-' + right + ':52px;margin-bottom:4px');
                }
            }
        });


        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");

        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        var fgName = "";
        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        // Added code for placing pinnable icon in correct position
        if (jQuery("#" + groupletId).find(".forPinButton").length > 0) {
            var vpWidth = viewport().width;
            if (parseInt(vpWidth) < 529) {
                var pinnableEle = jQuery(".forPinButton");
                var insertBeforeEle = jQuery(".width79percent_navigationpanel").find(".right").children().children(":first");
                if (pinnableEle.length > 0) {
                    jQuery("<div id='pinnableContent' class='pinnableContent' isTabletViewDetach='N' isDesktopViewDetach='N'></div>").insertBefore(insertBeforeEle);
                    jQuery("#pinnableContent").wrapInner(pinnableEle);
                }
            } else {
                var pinnableEle = jQuery(".forPinButton");
                var insertBeforeEle = jQuery(".width79percent_navigationpanel").find(".right");
                if (pinnableEle.length > 0) {
                    jQuery("<div id='pinnableContent' class='pinnableContent' isTabletViewDetach='N' isDesktopViewDetach='N'></div>").insertBefore(insertBeforeEle);
                    jQuery("#pinnableContent").wrapInner(pinnableEle);
                }
            }
            jQuery(window).resize(function() {
                var vpWidth1 = viewport().width;
                if (parseInt(vpWidth1) < 529) {
                    var pinnableEle;
                    var insertBeforeEle = jQuery(".width79percent_navigationpanel").find(".right").children().children(":first");
                    if (jQuery("#pinnableContent").length > 0 &&
                        (jQuery("#pinnableContent").attr("isTabletViewDetach") === 'N' || jQuery("#pinnableContent").attr("isDesktopViewDetach") === 'Y')) {
                        pinnableEle = jQuery("#pinnableContent").detach();
                        pinnableEle.insertBefore(insertBeforeEle);
                        jQuery("#pinnableContent").attr("isTabletViewDetach", "Y");
                        jQuery("#pinnableContent").attr("isDesktopViewDetach", "N");
                    }
                } else {
                    var pinnableEle;
                    var insertBeforeEle = jQuery(".width79percent_navigationpanel").find(".right");
                    if (jQuery("#pinnableContent").length > 0 &&
                        (jQuery("#pinnableContent").attr("isDesktopViewDetach") === 'N' || jQuery("#pinnableContent").attr("isTabletViewDetach") === 'Y')) {
                        pinnableEle = jQuery("#pinnableContent").detach();
                        pinnableEle.insertBefore(insertBeforeEle);
                        jQuery("#pinnableContent").attr("isTabletViewDetach", "N");
                        jQuery("#pinnableContent").attr("isDesktopViewDetach", "Y");
                    }
                }
            });
        }

        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },

    NewFundTransferToOwnAccount_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },

    ChannelUserIdLinkageListUX5_onload: function(groupletId) {

        var script = document.createElement('script');
        script.id = 'id1' + "NFEBAInlineEdit";
        script.src = "scripts/NFEBAInlineEditUX5.js?groupletId=" + groupletId + ";";
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        /*Commented the Code for Border Issue for Lumi */
        //jQuery('.stage3_listingpaneldiv').css('border-top','1px solid #CCCCCC');

        jQuery('.stage3_tabmenupanel').css('border-bottom', 'none');
        jQuery('.stage3_inputpanel_leftcontainer').css('border-bottom', 'none');
        jQuery(".HW_formbtn").addClass('registerButtonMargin');
        jQuery("HW_formbtn:hover").addClass('registerButtonMargin');

    },
    CorpChannelUserIdLinkageList_onload: function(groupletId) {

        var script = document.createElement('script');
        script.id = 'id1' + "NFEBAInlineEdit";
        script.src = "scripts/NFEBAInlineEditUX5.js?groupletId=" + groupletId + ";";
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        /*Commented the Code for Border Issue for Lumi */
        /*jQuery('.stage3_listingpaneldiv').css('border-top','1px solid #CCCCCC');*/

        jQuery('.stage3_tabmenupanel').css('border-bottom', 'none');
        jQuery('.stage3_inputpanel_leftcontainer').css('border-bottom', 'none');
        jQuery(".HW_formbtn").addClass('registerButtonMargin');
        jQuery("HW_formbtn:hover").addClass('registerButtonMargin');

    },
    RetChannelUserIdLinkageList_onload: function(groupletId) {

        var script = document.createElement('script');
        script.id = 'id1' + "NFEBAInlineEdit";
        script.src = "scripts/NFEBAInlineEditUX5.js?groupletId=" + groupletId + ";";
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        /*Commented the Code for Border Issue for Lumi */
        /*jQuery('.stage3_listingpaneldiv').css('border-top','1px solid #CCCCCC');*/

        jQuery('.stage3_tabmenupanel').css('border-bottom', 'none');
        jQuery('.stage3_inputpanel_leftcontainer').css('border-bottom', 'none');
        jQuery(".HW_formbtn").addClass('registerButtonMargin');
        jQuery("HW_formbtn:hover").addClass('registerButtonMargin');

        /* Commented for Lumi Enhancement */
        //jQuery('#PageConfigurationMaster_RSSETW__1\\:DataEntry_LeftContainer_Stage39\\.Rb1\\.C1').css('margin-top','9px');

    },
    InitiateBillPaymentUX5_onload: function(groupletId) { //Added by Salma for SADAD Payments
        feba.domManipulator.loadScript("scripts/module/transaction/ManageBills.js");
        jQuery('table').find('.labelColumn').addClass('tableTextBox');
    },

    CorpUserMenuOptionsListUX5_onload: function(groupletId) {
        jQuery(".ui-dialog .pagination-wrapper").attr('style', 'border:0px ;border-top: 0px solid #D4D4D4 !important');
        jQuery(".stage3_listingdetails").attr('style', 'width:99.8% !important ;border-top:0px !important ;border-bottom:0px !important');
    },

    BillerListingUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/transaction/materializeManageBills.js");
        checkMultiSelect('BPSubscriptionsListFG', groupletId);
        jQuery(".stage3_downloadnav_nobottom").attr('style', 'border-' + left + ':none !important');

    },
    BillerListUX5_onload: function(groupletId) {
        //jQuery(".stage3_detailspanel").attr('style','border-top:1px solid #CCCCCC !important');
        //jQuery('.tableoverflowwrapperhw').css('border-'+right+'','1px solid #D4D4D4');
        //jQuery('.tableoverflowwrapperhw').css('border-'+left+'','none');
        //jQuery(".ui-dialog .pagination-wrapper").css('border','none');
        jQuery('#MODAL_VIEW_CONTAINER').find('.pageLeftContainer').addClass('pageLeftContainer1');
        jQuery('#MODAL_VIEW_CONTAINER').find('.pageLeftContainer').removeClass('pageLeftContainer');
        jQuery('#MODAL_VIEW_CONTAINER').find('.tableoverflowwrapperhw').addClass('noleftborder');
        jQuery('#MODAL_VIEW_CONTAINER').find('.pagination-wrapper').addClass('noborderpgnt');
    },
    BillsListingUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/transaction/materializeManageBills.js");
        checkMultiSelect('BPPresentedBillsFG', groupletId);
        jQuery(".stage3_downloadnav_nobottom").attr('style', 'border-' + left + ':none !important');

    },
    ViewBillsApprovalQueueRetailUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/transaction/ManageBills.js");
        checkMultiSelect('BillPayEnquiryFG', groupletId);

    },
    ViewBillsApprovalQueueUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/transaction/ManageBills.js");
        checkMultiSelect('BillPayEnquiryFG', groupletId);
    },
    /*Surej RWD added for delete button placement in overlay START*/
    ConfirmDeleteCategoryUX5_onload: function() {
        var floatDirection = left;
        if (feba.domManipulator.isRTL()) {
            floatDirection = "right";
        }


        jQuery("#CategoryListUX5_STATIC_ACT\\:NavPanel\\.Rowset1").css("float", floatDirection);
    },
    BudgetDeleteUX5_onload: function() {
        var floatDirection = left;
        if (feba.domManipulator.isRTL()) {
            floatDirection = "right";
        }



        jQuery("#PageConfigurationMaster_PFMBUDW__1\\:NavPanel\\.Rowset1").css("float", floatDirection);
    },
    CashTransactionDeleteUX5_onload: function() {
        var floatDirection = left;
        if (feba.domManipulator.isRTL()) {
            floatDirection = "right";
        }

        jQuery("#NavPanel\\.Rowset1").css("float", floatDirection);
    },
    BulkTxnErrorDisplayUX5_onload: function() {
        jQuery(".ui-dialog .errorCodeWrapper").attr('style', 'top:1px !important');
    },
    //defect 797667
    PPFAccountNicknameMaintenanceListMultiUX5_onload: function(groupletId) {
        jQuery('.width79percent_navigationpanel').attr('style', 'display: none;');
    },
    /*Surej RWD added for delete button placement in overlay END*/
    BulkTransactionConfirmationSummaryUX5_onload: function() { //Aashish added for RWD bulk payment
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".searchsimpletext_breakword").attr('style', 'font-size:14px !important;color: inherit;padding-top: 1px !important');
        jQuery(".step-tracker .step-tracker-line").attr('style', 'margin-top :44px');
        jQuery('.stage3_tabmenupanel').css('border-bottom', 'none');
        jQuery(".searchsimpletext_sideheading").attr('style', 'margin-' + left + ' : -5px !important');
        jQuery("h3").attr('style', 'border-top-width : 0px !important');
    },

    InitiateBulkTransactionConfirmationUX5_onload: function() { //Aashish added for RWD bulk payment
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".searchsimpletext_breakword").attr('style', 'font-size:14px !important;color: inherit;padding-top: 1px !important');
        jQuery(".step-tracker .step-tracker-line").attr('style', 'margin-top :44px');
        feba.domManipulator.loadScript("scripts/module/transaction/BulkPaymentRemarks.js");
        //	jQuery(window).off('resize');

        jQuery(".querytextleft_withleftBorder_Auth .querytextleft").attr('style', 'margin-left: 14%; text-align: right; margin-right: 1%;');
        jQuery(".querytextleft_withleftBorder_Auth .queryitalictextwithoutwidth_custom").attr('style', 'width: 100%; text-align: center; display: block; margin-left: 0px');

        //Uba: for authentication sections
        var fgName = feba.domManipulator.getFGNameFromPage();
        var fgName1 = document.getElementById("FORMSGROUP_ID__").value;
        var radioName = "__AUTH_TYPE__";
        var radioElement = jQuery('#__AUTH_TYPE__');
        visibleField(radioElement, "N");

    },
    InitiateBulkTransactionUX5_onload: function(groupletId) {
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) >= 480 && parseInt(vpWidth) <= 639) {
            jQuery(".tableoverflowwrapperhw").attr('style', 'overflow:auto !important');
            jQuery(".labelCol_text_remarks").attr('style', 'border :none;margin-' + left + ' :6px');
            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'margin-' + left + ' :-5px !important');
            jQuery(".renderTextBoxAsLabel_new").attr('style', 'margin-' + right + ' :5px !important');
        }
        if (parseInt(vpWidth) >= 640 && parseInt(vpWidth) <= 900) {
            jQuery(".labelCol_text_remarks").attr('style', 'border :none;margin-' + left + ' :6px');
            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'margin-' + left + ' :-5px !important');
            jQuery(".renderTextBoxAsLabel_new").attr('style', 'margin-' + right + ' :5px !important');
        }
        if (parseInt(vpWidth) > 900) {
            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'padding-' + right + ' :0px !important; width: 68px !important');
            jQuery(".labelCol_text_remarks").attr('style', 'border :none');
        }
        jQuery(".toppadding").attr('style', 'margin-' + right + ' :-16px');
        jQuery(".step-tracker .step-tracker-line").attr('style', 'margin-top :44px');
        jQuery(".HW_tabletextwithpadding").attr('style', 'padding-' + left + ' :12px');
        jQuery(".HW_tableheadingnobrdr").attr('style', 'padding-' + left + ' :0px; padding-' + right + ' :0px');
        jQuery(".labelColumn_combo_small_cr").attr('style', 'margin-' + left + ' :-7px');
        jQuery(".width100percent_downloadIcons").attr('style', 'padding-bottom :0px');
        jQuery(".stage3_downloadnav").attr('style', 'padding-bottom :0px');
        jQuery("[id='PageConfigurationMaster_3BLKTXW__1:NavPanel']").attr('style', 'border-' + left + ' :1px solid #E0E0E0');
        jQuery("[id='PageConfigurationMaster_3CBLTXW__1:NavPanel']").attr('style', 'border-' + left + ' :1px solid #E0E0E0');
        setTimeout(function() {
            jQuery("#" + groupletId + "\\:MessageDisplay_TABLE").addClass("marginTopZero");
            feba.domManipulator.getElement(document).scrollTop(0);
        }, 1000);
    },
    NewPaymentToPersonalPayee_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    /*Aashish added for RWD Start*/
    BuyCarUX5_onload: function(groupletId) {

        var script = document.createElement('script');
        script.id = 'id1' + "InitiateFrequencyTypeCheck";
        script.src = "scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js?groupletId=" + groupletId + ";";
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        //		feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
    },
    CustomGoalUX5_onload: function(groupletId) {
        var script = document.createElement('script');
        script.id = 'id1' + "InitiateFrequencyTypeCheck";
        script.src = "scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js?groupletId=" + groupletId + ";";
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        //		feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
    },
    BuyHouseUX5_onload: function(groupletId) {
        var script = document.createElement('script');
        script.id = 'id1' + "InitiateFrequencyTypeCheck";
        script.src = "scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js?groupletId=" + groupletId + ";";
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        //		feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
    },
    PlanForRetirementUX5_onload: function(groupletId) {
        var script = document.createElement('script');
        script.id = 'id1' + "InitiateFrequencyTypeCheck";
        script.src = "scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js?groupletId=" + groupletId + ";";
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName('head')[0].appendChild(script);
        }

        //		feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
    },
    /*Aashish added for RWD End*/
    NewPaymentToAdhocPayee_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        var fgName = "";
        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    NewFundTransferToThirdParty_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var fgName = "";
        var elementId = '\\.MULTI_SELECT_VAL';
        var addPayeeToList = 'TranRequestManagerFG\\.SAVE_PAYEE_TO_LIST';
        //alert("groupletId _onload==="+groupletId );
        //alert("ppp");		


        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            addPayeeToList = groupletId + "\\:" + addPayeeToList;
        } else {
            fgName = feba.js.transaction.getFgName();
        }

        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });

        feba.domManipulator.bind(feba.domManipulator.getElementById(addPayeeToList), "change", function() {
            showPayeeAuthSpecificFlds();
        });

        showPayeeAuthSpecificFlds();
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    OtherBankNIBPayment_onload: function(groupletId) {


        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var fgName = "";
        var elementId = '\\.MULTI_SELECT_VAL';
        var addPayeeToList = 'TranRequestManagerFG\\.SAVE_PAYEE_TO_LIST';
        //alert("groupletId _onload==="+groupletId );		


        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            addPayeeToList = groupletId + "\\:" + addPayeeToList;
        } else {
            fgName = feba.js.transaction.getFgName();
        }

        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });

        feba.domManipulator.bind(feba.domManipulator.getElementById(addPayeeToList), "change", function() {
            showPayeeAuthSpecificFlds();
        });

        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    CreditCardPayment_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }

        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    InitiateBillPayment_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }

        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });

    },
    LoanAccountPayment_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }


        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    PaymentToAdhocBiller_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });

    },

    FundTransferOtherBankAccount_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    PaymentToUnregisteredPayee_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },


    TemplatesListUX5_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    InitiateFromTemplate_onload: function() {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".notopborder.listingcol").attr('style', 'width:97.8% !important');
        jQuery(".more.dropdown-button").attr('style', 'padding-' + left + ':0px !important');
    },
    ManageTemplate_onload: function() {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    CHKDataCapture: function() {
        if (feba.domManipulator.getElement(".widget-content").getNiceScroll() && feba.domManipulator.getElement(".widget-content").getNiceScroll().length > 0) {
            resizeUX3scroll();
        }
    },
    EBPrintingJobs_onload: function(groupletId) {
        setTimeout(function() {
            if (feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0] && feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0].value == "true") {
                jQuery(feba.domManipulator.getGroupletSpecificElement("DOWNLOADPDF", groupletId)).trigger('click');
            } else if (feba.domManipulator.getElementById("SHOWWARNINGMSG")[0] && feba.domManipulator.getElementById("SHOWWARNINGMSG")[0].value == "true") {
                var retVal = confirm(feba.domManipulator.getElementById("CORPWARNINGMSG")[0].value);
                if (retVal == true) {
                    feba.domManipulator.getElementById("PRINT_CONFIRM")[0].click();
                    return true;
                } else {
                    return false;
                }
            }
        }, 1000);
    },

    EBPendingCheques_onload: function(groupletId) {
        setTimeout(function() {
            if (feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0] && feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0].value == "true") {
                jQuery(feba.domManipulator.getGroupletSpecificElement("DOWNLOADPDF", groupletId)).trigger('click');
            } else if (feba.domManipulator.getElementById("SHOWWARNINGMSG")[0] && feba.domManipulator.getElementById("SHOWWARNINGMSG")[0].value == "true") {
                var retVal = confirm(feba.domManipulator.getElementById("CORPWARNINGMSG")[0].value);
                if (retVal == true) {
                    feba.domManipulator.getElementById("PRINT_CONFIRM")[0].click();
                    return true;
                } else {
                    return false;
                }
            }
        }, 1000);
    },

    EBPendingCL_onload: function(groupletId) {
        setTimeout(function() {
            if (feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0] && feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0].value == "true") {
                jQuery(feba.domManipulator.getGroupletSpecificElement("DOWNLOADPDF", groupletId)).trigger('click');
            } else if (feba.domManipulator.getElementById("SHOWWARNINGMSG")[0] && feba.domManipulator.getElementById("SHOWWARNINGMSG")[0].value == "true") {
                var retVal = confirm(feba.domManipulator.getElementById("CORPWARNINGMSG")[0].value);
                if (retVal == true) {
                    feba.domManipulator.getElementById("PRINT_CONFIRM")[0].click();
                    return true;
                } else {
                    return false;
                }
            }
        }, 1000);
    },
    EBPendingWTC_onload: function(groupletId) {
        setTimeout(function() {
            if (feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0] && feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0].value == "true") {
                jQuery(feba.domManipulator.getGroupletSpecificElement("DOWNLOADPDF", groupletId)).trigger('click');
            } else if (feba.domManipulator.getElementById("SHOWWARNINGMSG")[0] && feba.domManipulator.getElementById("SHOWWARNINGMSG")[0].value == "true") {
                var retVal = confirm(feba.domManipulator.getElementById("CORPWARNINGMSG")[0].value);
                if (retVal == true) {
                    feba.domManipulator.getElementById("PRINT_CONFIRM")[0].click();
                    return true;
                } else {
                    return false;
                }
            }
        }, 1000);
    },

    EBCompletedJobs_onload: function(groupletId) {
        setTimeout(function() {
            if (feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0] && feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0].value == "true") {
                jQuery(feba.domManipulator.getGroupletSpecificElement("DOWNLOADPDF", groupletId)).trigger('click');
            } else if (feba.domManipulator.getElementById("SHOWWARNINGMSG")[0] && feba.domManipulator.getElementById("SHOWWARNINGMSG")[0].value == "true") {
                var retVal = confirm(feba.domManipulator.getElementById("CORPWARNINGMSG")[0].value);
                if (retVal == true) {
                    feba.domManipulator.getElementById("PRINT_CONFIRM")[0].click();
                    return true;
                } else {
                    return false;
                }
            }
        }, 1000);
    },

    EBBConfirmPrints_onload: function(groupletId) {
        setTimeout(function() {
            if (feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0] && feba.domManipulator.getElementById("DOWNLOADREQUIRE")[0].value == "true") {
                jQuery(feba.domManipulator.getGroupletSpecificElement("DOWNLOADPDF", groupletId)).trigger('click');
            } else if (feba.domManipulator.getElementById("SHOWWARNINGMSG")[0] && feba.domManipulator.getElementById("SHOWWARNINGMSG")[0].value == "true") {
                var retVal = confirm(feba.domManipulator.getElementById("CORPWARNINGMSG")[0].value);
                if (retVal == true) {
                    feba.domManipulator.getElementById("PRINT_CONFIRM")[0].click();
                    return true;
                } else {
                    return false;
                }
            }
        }, 1000);
    },

    PrintingJobs_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    PendingCheques_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    DDPrintingJobs_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    PendingCL_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    DDPendingCL_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    PendingWTC_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    CompletedJobs_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    DDCompletedJobs_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    CQConfirmPrints_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    CRPDDConfirmPrints_onload: function() {
        feba.domManipulator.documentReady(onLoadPrintingJobsPage());
    },
    CRPViewApprovalList_onload: function() {
        feba.domManipulator.documentReady(onLoadCRPViewApprovalListPage());
    },
    CRPViewInvoices_onload: function() {
        feba.domManipulator.documentReady(onLoadCRPViewInvoicesPage);
    },
    PayYourBill_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });

    },
    NewCollection_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    NewCollectionUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
    },
    NewLoanRedraw_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    NewLoanRedrawUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
    },
    InitiateSingleEntryPaymentSummary_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    oldInitiateSingleEntryPaymentSummaryUX5_onload: function() {
        alert("In summary Onload======");
        //var txnType = jQuery("[id$='PageConfigurationMaster_OTADW__1:TranRequestManagerFG.TXN_TYPE']").attr('value');
        var txnstatus = jQuery("[id$='TranRequestManagerFG.TXN_STATUS']").attr('value');
        //var payeeType = document.getElementsByName("PageConfigurationMaster_OTADW__1:TranRequestManagerFG.SAVE_PAYEE_TO_LIST");
        alert("txnstatus ==" + txnstatus);
        alert("payeeType==" + payeeType);
        alert(" payeeType[0].checked==" + payeeType[0].checked);
        var errorMessage = jQuery("[id$='PageConfigurationMaster_OTADW__1:errorlink1']").attr('title');
        //alert(errorMessage);
        if (errorMessage.includes("The transaction with reference ID is processed successfully.")) {
            alert("In If====");
            document.getElementById('ReadOnly_LeftContainer_Stage351').classList.add('AvailableBalance_text');
        } else {
            alert("In else====");
            document.getElementById('ReadOnly_LeftContainer_Stage351').classList.remove('AvailableBalance_text');
        }



    },

    InitiateSingleEntryPaymentSummmmaryUX5_onload: function() {
        alert("In summaryyyyyy111 Onload======");

        var txnType = document.getElementById("transactionType").value;
        var txnStatus = document.getElementById("tranStatus").value;
        var savePayee = document.getElementById("savePayee").value;
        var cpType = document.getElementById("cpType").value;


        //alert("In summaryyyyyy Onload=txnType====="+txnType);
        alert("In summaryyyyyy Onload=txnStatus=====" + txnStatus);
        alert("In summaryyyyyy Onload=savePayee=====" + savePayee + "aaaaa");
        alert("In summaryyyyyy Onload=cpType=====" + cpType);

        if (txnStatus == "SUC" && cpType == 'H' && savePayee != "") {
            alert("in if===");
            document.getElementById('ReadOnly_LeftContainer_Stage351').classList.add('AvailableBalance_text');
        } else {
            alert("in else===");
            document.getElementById('ReadOnly_LeftContainer_Stage351').classList.add('AvailableBalance_text');
        }
        if (txnStatus == "SUC" && cpType != 'H') {
            document.getElementById('ReadOnly_LeftContainer_Stage351').classList.add('AvailableBalance_text');
        }




    },

    ModifyTransaction_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    PersonalizationLimitInqDetailsUX5_onload: function(groupletId) {
        jQuery('.stage3_listingdetails').addClass('listingdetailborders');
        setTimeout(function() {
            if (viewport().width >= 480 && viewport().width <= 639) {
                jQuery('.ui-dialog-title').attr('style', 'margin-' + left + ':5px !important;');
            }
        }, 10);
    },
    ModifyTransactionUX5_onload: function(groupletId) {
        var var1 = jQuery("[id$='PageConfigurationMaster_3CSTXNW__1\\:DataEntry_LeftContainer_Stage39']");
        jQuery(var1).attr('style', 'border-top:1px solid #CCC !important');
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';

        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39']").attr('style', 'border-top:1px solid #E0E0E0');


        jQuery('input[type=checkbox]').click(function(event) { // code goes here

            if (document.getElementById(groupletId + ":TranRequestManagerFG.MODIFY_SINGLE_REC_INSTANCES_DATE").checked) {
                jQuery('#PageConfigurationMaster_3VRTXNW__1').find("input[type=text]:visible:not([id='" + groupletId + ":TranRequestManagerFG.TXN_DATE'],[id='" + groupletId + ":TranRequestManagerFG.ENTRY_AMT'],[id='" + groupletId + ":TranRequestManagerFG.ENT_REMARKS'])").attr('disabled', true);
                jQuery('#PageConfigurationMaster_3VRTXNW__1').find(".icon-dropdown").addClass("disablePointerEvents");


            } else {
                jQuery('#PageConfigurationMaster_3VRTXNW__1').find("input[type=text]:visible:not([id='" + groupletId + ":TranRequestManagerFG.TXN_DATE'],[id='" + groupletId + ":TranRequestManagerFG.ENTRY_AMT'],[id='" + groupletId + ":TranRequestManagerFG.ENT_REMARKS'])").attr('disabled', false);
                jQuery('#PageConfigurationMaster_3VRTXNW__1').find(".icon-dropdown").removeClass("disablePointerEvents");

            }
        });

    },
    CreateTemplateUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery("[id=" + elementId + "]").change(function() {
            commonCall(fgName);

        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    CopyTemplateUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery("[id=" + elementId + "]").change(function() {
            commonCall(fgName);

        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    ModifyTemplateUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }


        commonCall(fgName);
        jQuery("[id=" + elementId + "]").change(function() {
            commonCall(fgName);

        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    SaveAsTemplateUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }

        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },

    NewPeerToPeerPayment_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    NewPeerToPeerPaymentUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var fgName = "";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }

        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
    },
    NewPeerToPeerCollection_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    NewPeerToPeerCollectionUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        var fgName = "";
        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }


        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
    },
    CopyTransaction_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    CopyTransactionUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        var fgName = "";
        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        var personalPayeeElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_P';
        var paymentBillerElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_S';
        var empElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_E';
        var debtorElement = 'TranRequestManagerFG\\.DESTINATION_DETAILS_STRING_D';
        var cpDetailsElement = 'FETCH_PERSONAL_PAYEE_DETAILS';
        var billerDetailsElement = 'FETCH_PMT_BILLER_DETAILS';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
            personalPayeeElement = groupletId + "\\:" + personalPayeeElement;
            cpDetailsElement = groupletId + ":" + cpDetailsElement;
            paymentBillerElement = groupletId + "\\:" + paymentBillerElement;
            empElement = groupletId + "\\:" + empElement;
            debtorElement = groupletId + "\\:" + debtorElement;
            billerDetailsElement = groupletId + ":" + billerDetailsElement;
        } else {
            fgName = feba.js.transaction.getFgName();
        }


        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(personalPayeeElement), "change", function() {
            if (feba.domManipulator.getElementById(personalPayeeElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(paymentBillerElement), "change", function() {
            if (feba.domManipulator.getElementById(paymentBillerElement).val() != "") {
                document.getElementById(billerDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(empElement), "change", function() {
            if (feba.domManipulator.getElementById(empElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.domManipulator.bind(feba.domManipulator.getElementById(debtorElement), "change", function() {
            if (feba.domManipulator.getElementById(debtorElement).val() != "") {
                document.getElementById(cpDetailsElement).click();
            }
        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },
    AcceptTransaction_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    DeclineTransaction_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    ScheduledTransactionCorp_onload: function() {
        feba.domManipulator.loadScript("scripts/module/transaction/ScheduledTxnsFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.scheduledTxnsFEBACalendar);
    },
    ScheduledTransactionRet_onload: function() {
        feba.domManipulator.loadScript("scripts/module/transaction/ScheduledTxnsFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.scheduledTxnsFEBACalendar);
    },
    OpMiniStatementUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_ellipse").ellipsis({
            width: 56
        });
        jQuery(".ui-dialog h3.listingcol").attr('style', 'border-bottom:0px !important');
    },
    AccountLinksPreviewConfirmationDetails_onload: function() {
        var var1 = jQuery("[id$='PageConfigurationMaster_UCADMPW__1\\:ReadOnly_LeftContainer_Stage320\\.OtherDetHeader']");
        jQuery(var1).attr('style', 'border-top:none !important');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
    },
    AcctGrpMaintConfirmation_onload: function() {
        jQuery(".stage3_inputpanel_leftcontainer_nobottommargin").attr('style', 'border-bottom:0px !important');
        jQuery(".pagination-wrapper").attr('style', 'border-top:1px solid #CCCCCC !important');
    },
    AcctGrpMaintEditConfirmation_onload: function() {
        jQuery(".tablesimpletext").attr('style', 'padding-' + left + ':0px !important');
        jQuery(".pagination-wrapper").attr('style', 'border-top:1px solid #CCCCCC !important');
    },
    ImportLCAmendPreviewConfirmationUX5_onload: function() {
        jQuery('.span-checkbox').addClass('checkboxalignment');
        jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'border-top:0px !important');
        if (viewport().width >= 480 && viewport().width <= 639) {
            jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'width:99.77% !important');
        }
    },
    TransferLCPreviewConfirmationDetailsUX5_onload: function() {
        jQuery(".stage3_listingdetails").attr('style', 'border:none; float:none!important');
        if (viewport().width >= 480 && viewport().width <= 639) {
            jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'width:99.77% !important');
        }
    },
    GuaranteeAmendPreviewConfirmationUX5_onload: function() {
        if (viewport().width >= 480 && viewport().width <= 639) {
            jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'width:99.77% !important');
        }
    },
    CrpAdmApprovalListUX5_onload: function() {
        jQuery(".more.dropdown-button").attr('style', 'padding-' + left + ': 5px !important');
        jQuery(".HW_tabletextwithpadding").attr('style', 'vertical-align:initial !important');
    },

    CrpAdmRecallListUX5_onload: function() {
        jQuery(".HW_tabletextwithpadding").attr('style', 'vertical-align:initial !important');
    },

    TransactionLimitDetailsUX5_onload: function(groupletId) {

        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'border-' + left + ':0px solid #CCCCCC !important');
        jQuery(".ui-dialog .pagination-wrapper").attr('style', 'border:0px solid #CCCCCC !important');
        jQuery(".tablesimpletext").attr('style', 'font-size:16px !important');
        jQuery(".stage3_listingdetails").attr('style', 'border:1px solid #CCCCCC !important;width:99.85%; margin-top: 6px !important');
        jQuery("[id='" + groupletId + "\\:LimitDetailsFor2FA']").css('padding-' + left + '', '11px');
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
        jQuery(".stage3_leftrightmainpanel").attr('style', 'padding-top: 1px');
        jQuery(".simpletextlonglabel").attr('style', 'padding-' + left + ': 17px !important');
    },

    SetPasswordViewDetails_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },


    TransactionLimitInquiryCorpUX5_onload: function() {
        jQuery(".querytextboxnumber").attr('style', 'background:none;width:97px  !important');
        jQuery(".labelcolnumber_ebux").attr('style', 'background:none  !important');
        // jQuery(".HW_tabletextwithpadding").attr('style', 'vertical-align:initial !important');
    },

    FindOwnAccounts_onload: function() {

        jQuery(".tableoverflowwrapperhw .bluelink").attr('style', 'padding-' + right + ':10px !important');
    },

    TranReqPayee_onload: function() {

        jQuery(".tableoverflowwrapperhw .bluelink").attr('style', 'padding-' + right + ':10px !important');
    },
    //Added for CTBC menu
    SRRMAppointReqRet_onload: function(groupletId) {
        jQuery(".simpletextright").css('padding-top', '12px');
        jQuery('.simpletextright_RM_Request').css('padding-top', '12px');
        var hoursElem = document.getElementById("PageConfigurationMaster_RNWUX5W__1:RMA_HOUR1");
        if (jQuery("[id='" + groupletId + ":RMA_HOUR2']").hasClass('error_highlight')) {
            jQuery("[id='" + groupletId + ":RMA_HOUR2']").removeClass('error_highlight');
            jQuery("[id='" + groupletId + ":RMA_HOUR2']").addClass('error_highlight_right');
            jQuery('.error_highlight_right').attr('style', 'padding-top:12px !important');
        }
        if (jQuery(hoursElem).hasClass('error_highlight')) {
            jQuery(hoursElem).removeClass('error_highlight');
            jQuery(hoursElem).addClass('error_highlight_right');
            jQuery('.error_highlight_right').attr('style', 'padding-top:12px !important');
        }
        if (jQuery(hoursElem).hasClass('error_highlight_right')) {
            jQuery('.error_highlight_right').attr('style', 'padding-top:12px !important');
        }
        if (viewport().width > 480 && viewport().width <= 640) {
            jQuery("[id='" + groupletId + ":RMA_HOUR2']").removeClass('simpletextrightcompositefield');
        }
        if (viewport().width == 480) {
            if (jQuery("[id='" + groupletId + ":RMA_HOUR2']").hasClass('error_highlight_right')) {
                jQuery("[id='" + groupletId + ":RMA_HOUR2']").attr('style', 'padding-' + left + ' :46% !important');
            }
        }
    },

    CreateNewUser_onload: function(groupletId) {
        jQuery('.h3collapsetopborder_myprofilefirstrow').css('background-color', 'white');

        jQuery('.h3collapsetopborder_myprofile').css('background-color', 'white');
        jQuery('.h3collapsetopborder_myprofile').css('border-top', '1px solid #CCCCCC');

        jQuery(".simpletextright").css('padding-top', '12px');

        jQuery("[id='" + groupletId + "\\:CorpAdminFWFG.SCHEME_ID_DISPLAY']").addClass('remarksboxux3 textareaalignment');
        jQuery("[id='" + groupletId + "\\:CorpAdminFWFG.USER_TXN_TYPES']").addClass('remarksboxux3 textareaalignment');
        jQuery("[id='" + groupletId + "\\:CorpAdminFWFG.USER_TXN_TYPES_DESC']").addClass('remarksboxux3 textareaalignment');


        if (jQuery("[id='" + groupletId + ":DndEndTime']").hasClass('error_highlight')) {

            jQuery("[id='" + groupletId + ":DndEndTime']").removeClass('error_highlight');
            jQuery("[id='" + groupletId + ":DndEndTime']").addClass('error_highlight_right simpletextrightcompositefield');
            jQuery("[id='" + groupletId + ":DndEndTime']").attr('style', 'color:#F44336 !important');
        }
    },

    CopyUserDetails_onload: function(groupletId) {
        jQuery('.h3collapsetopborder_myprofilefirstrow').css('background-color', 'white');

        jQuery('.h3collapsetopborder_myprofile').css('background-color', 'white');
        jQuery('.h3collapsetopborder_myprofile').css('border-top', '1px solid #CCCCCC');

        jQuery(".simpletextright").css('padding-top', '12px');

        jQuery("[id='" + groupletId + "\\:CorpAdminFWFG.SCHEME_ID_DISPLAY']").addClass('remarksboxux3 textareaalignment');
        jQuery("[id='" + groupletId + "\\:CorpAdminFWFG.USER_TXN_TYPES']").addClass('remarksboxux3 textareaalignment');

        if (jQuery("[id='" + groupletId + ":DndEndTime']").hasClass('error_highlight')) {

            jQuery("[id='" + groupletId + ":DndEndTime']").removeClass('error_highlight');
            jQuery("[id='" + groupletId + ":DndEndTime']").addClass('error_highlight_right simpletextrightcompositefield');
            jQuery("[id='" + groupletId + ":DndEndTime']").attr('style', 'color:#F44336 !important');
        }

    },

    FinancialTxnTypesListUX5_onload: function(groupletId) {
        jQuery(".collapsible-body p").attr('style', 'padding: 8px 31px !important');
    },

    EditDeleteUserUX5_onload: function(groupletId) {
        jQuery('.h3collapsetopborder_myprofilefirstrow').css('background-color', 'white');

        jQuery('.h3collapsetopborder_myprofile').css('background-color', 'white');
        jQuery('.h3collapsetopborder_myprofile').css('border-top', '1px solid #CCCCCC');

        jQuery(".simpletextright").css('padding-top', '12px');

        jQuery("[id='" + groupletId + "\\:CorpAdminFWFG.SCHEME_ID_DISPLAY']").addClass('remarksboxux3 textareaalignment');
        jQuery("[id='" + groupletId + "\\:CorpAdminFWFG.USER_TXN_TYPES']").addClass('remarksboxux3 textareaalignment');

        if (jQuery("[id='" + groupletId + ":DndEndTime']").hasClass('error_highlight')) {

            jQuery("[id='" + groupletId + ":DndEndTime']").removeClass('error_highlight');
            jQuery("[id='" + groupletId + ":DndEndTime']").addClass('error_highlight_right simpletextrightcompositefield');
            jQuery("[id='" + groupletId + ":DndEndTime']").attr('style', 'color:#F44336 !important');
        }

    },
    CreateNewUserViewDetails_onload: function() {

        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },

    EditDeleteUserViewDetails_onload: function() {

        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },


    CrpAccMaintViewDetails_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },
    UsrIdLookUpListCorpRetUX5_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'width:100% !important');
        jQuery(".listtopbigbg").attr('style', 'background-color:white;background: none !important');
    },
    UsrLookUpListUX5_onload: function() {
        jQuery(".ui-dialog-content .stage3_tabmenupanel").attr('style', 'border-bottom:0px !important');
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #D4D4D4 !important');
    },
    FinRuleDetailsUX5_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },
    StoppedInstancesListUX5_onload: function(groupletId) {
        jQuery(".tableoverflowwrapperhw").addClass('rightBorder');
    },
    InstancesUX5_onload: function(groupletId) {
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'overflow-y:hidden !important');
        //jQuery(".tableoverflowwrapperhw").addClass('rightBorder');
        jQuery('.pageLeftContainer').attr('style', 'border:1px solid #E4E4E4 !important');
        var nullClassElement = document.getElementsByTagName('h3');
        var tableCaptionElement = nullClassElement[2];
        var childTableCaption = jQuery(tableCaptionElement).children();
        jQuery(childTableCaption).attr('style', 'padding-' + left + ':0px !important');
    },
    NonFinWorkflowViewDetailsUX5_onload: function() {
        jQuery(".singleTableHeading").attr('style', 'border-top:0px !important ;border-bottom:0px !important');
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
        jQuery(".rightlisttable").attr('style', 'border-' + right + ':1px solid #CCCCCC !important');
        jQuery(".HW_tabletextwithpadding").attr('style', 'font-size:16px;font-weight:500 !important');
    },
    RoleMaintAppViewDetails_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
        jQuery(".HW_tabletextwithpadding").attr('style', 'font-size:16px;font-weight:500 !important');
        jQuery(".singleTableHeading").attr('style', 'border-top:0px !important ;border-bottom:0px !important');
        jQuery(".rightlisttable").attr('style', 'border-' + right + ':1px solid #CCCCCC !important');
    },
    ReportsViewDetails_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
        jQuery(".singleTableHeading").attr('style', 'border-top:0px !important ;border-bottom:0px !important');
        jQuery(".rightlisttable").attr('style', 'border-' + right + ':1px solid #CCCCCC !important');
        jQuery(".HW_tabletextwithpadding").attr('style', 'font-size:16px;font-weight:500 !important');
    },
    CustIdLinksViewDetails_onload: function() {
        jQuery(".rightlisttable").attr('style', 'border-' + right + ':1px solid #CCCCCC !important');
        jQuery(".singleTableHeading").attr('style', 'border-top:0px !important ;border-bottom:0px !important');
        jQuery(".HW_tabletextwithpadding").attr('style', 'font-size:16px;font-weight:500; vertical-align:initial !important');
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'border-' + left + ':0px solid #D4D4D4 !important');

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 700) {
            jQuery(".HW_tabletextwithpadding").attr('style', 'padding-' + left + ':2px !important');

        }

    },

    DivAccApprovalViewDetails_onload: function() {
        jQuery(".HW_tabletextwithpadding").attr('style', 'font-size:16px;font-weight:500 !important');
        jQuery(".tableoverflowwrapper").attr('style', 'border:0px !important');
        jQuery("table tbody td").attr('style', 'border-bottom: 1px solid #E0E1E2;border-top: 1px solid #E0E1E2 !important');
        jQuery(".rightlisttable").attr('style', 'border-' + right + ':1px solid #CCCCCC;border-bottom:1px solid #CCCCCC !important');
        jQuery(".leftlisttable").attr('style', 'border-bottom:1px solid #CCCCCC !important');
        jQuery(".singleTableHeading").attr('style', 'border-top:0px !important ;border-bottom:0px !important');
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
        jQuery(".HW_textwithpadding").attr('style', 'border-bottom:0px  !important');
    },

    AccountLinksViewDetails_onload: function() {
        jQuery(".HW_tabletextwithpadding").attr('style', 'font-size:16px;font-weight:500 !important');
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
        jQuery(".rightlisttable").attr('style', 'border-' + right + ':1px solid #CCCCCC !important');
        jQuery(".singleTableHeading").attr('style', 'border-top:0px !important ;border-bottom:0px !important');
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'border-bottom:0px solid #D4D4D4 !important');
    },

    UserChannelLinkageConfirmUX5_onload: function(groupletId) {
        jQuery('.stage3_inputpanel_leftcontainer').attr('style', 'width:98.85% !important');
    },

    UserChannelLinkageMaintConf_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },

    EnableDisableUserViewDetails_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },


    CorpUserReportLinkDelinkConfirmationUX5_onload: function(groupletId) {
        jQuery(".rightlisttable").attr('style', 'border-bottom: 0px; !important');
        jQuery(".rightlisttable").css("border-bottom", "none");
        jQuery(".leftlisttable").css("border-bottom", "none");
        jQuery(".querytextleft_width100percent_withtextalignleft").css("border-top", "1px solid #D4D4D4");
        jQuery(".HW_head_outerdiv").css("border-bottom", "1px solid #CCCCCC");


    },

    CorpUserMenuOptionsLinkDelinkConfirmationUX5_onload: function(groupletId) {
        jQuery(".rightlisttable").attr('style', 'border-bottom: 0px; !important');

    },

    UserChannelLinkageListUX5_onload: function(groupletId) {
        jQuery(".footable-first-column").attr('style', 'padding-top:0px !important');
        //   jQuery(".abc").attr('style', 'padding-top:0px !important');
        jQuery(".simpletext_wrap").attr('style', 'word-break: normal !important');
    },

    /*Aashish added for RWD*/
    ClearingInstrumentListUX5_onload: function() {
        jQuery(".stage3_searchpaneldiv").css('margin-top', '-39px');
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_ellipse").ellipsis({
            width: 56
        });
    },

    InstrumentCollectionRequestPage_onload: function(groupletId) {

        if (jQuery('#' + groupletId + '\\:MessageDisplay_TABLE').text().length > 0) {
            if (jQuery('#' + groupletId + '\\:MessageDisplay_TABLE').text().indexOf('101185') != -1) {
                jQuery('#' + groupletId + '\\:mbvucountryyfg').css("color", 'red');

            }
        }

    },

    MyCategoriesListUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".queryitalictextwithspace_remarks").ellipsis({
            width: 125
        });
        var vpWidth = viewport().width;
        //console.log(vpWidth);
        if (parseInt(vpWidth) <= 667) {
            jQuery('.stage3_rightwithmargin').find('input[type=submit]').parent().css('margin-top', '2px');
        } else {
            jQuery('.stage3_rightwithmargin').find('input[type=submit]').parent().css('margin-top', '0px');
        }
        jQuery(window).resize(function() {
            var vpWidth = viewport().width;
            //console.log(vpWidth);
            if (parseInt(vpWidth) <= 667) {
                jQuery('.stage3_rightwithmargin').find('input[type=submit]').parent().css('margin-top', '2px');
            } else {
                jQuery('.stage3_rightwithmargin').find('input[type=submit]').parent().css('margin-top', '0px');
            }
        });
    },
    DpTransactionHistoryLst5TxnUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery(".ui-dialog .multiTableHeading").attr('style', 'border-' + right + ' :1px solid #D4D4D4 !important');
        jQuery(".stage3_searchsimpletext").attr('style', 'padding-top: 11px !important');
    },
    DpTransactionHistoryUX4_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 110
        });
    },
    LnTransactionHistoryUX4_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 140
        });
    },
    LnTransactionHistoryLst5TxnUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery(".ui-dialog .multiTableHeading").attr('style', 'border-' + right + ' :1px solid #D4D4D4 !important');
        jQuery(".stage3_searchsimpletext").attr('style', 'padding-top: 11px !important');
    },
    LnTransactionHistoryLstNTxnUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
    },

    LnTransactionHistoryLstNTxnUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
    },

    LnTransactionHistoryLstNTxnRetail_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
    },
    LnTransactionHistoryLstNTxnCorp_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
    },

    LnTransactionHistoryTprRetail_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');

    },

    LnTransactionHistoryTprCorp_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');

    },

    AccountSummaryNullViewUX4_onload: function(groupletId) {

        feba.domManipulator.fadeOut(jQuery('#' + groupletId).parents('.widget'), 4000);
    },
    LnTransactionHistoryUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("#PageConfigurationMaster_RLAUX3W__1\\:numberOfPaymentsMadeRCaption").css("padding-" + left + "", "4px");
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
    },

    LnTransactionHistryRetail_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("#PageConfigurationMaster_RLAUX3W__1\\:numberOfPaymentsMadeRCaption").css("padding-" + left + "", "4px");
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
    },


    LnTransactionHistryCorp_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("#PageConfigurationMaster_RLAUX3W__1\\:numberOfPaymentsMadeRCaption").css("padding-" + left + "", "4px");
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');

    },


    RoleUserMappingListUX5_onload: function(groupletId) {

        jQuery(".stage3_listingdetails").attr('style', 'width:99.85% !important');
        jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'border-top:none !important;');
        jQuery("[id='" + groupletId + ":ListingPanel_LeftContainer_Stage3_DetailsPanel18']").attr('style', 'border-top:none !important');

        var vpWidth = viewport().width;
        if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');
        }


    },
    BankUserPreviewConf_onload: function(groupletId) {

        jQuery(".stage3_listingdetails").attr('style', 'width:99.85% !important');
        jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'border-top:none !important;');

        // jQuery(".querytextleft_width100percent_withtextalignleft").css("border-top","1px solid #D4D4D4");
        //jQuery(".HW_head_outerdiv").css("border-bottom", "1px solid #CCCCCC");

        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');

    },

    DivCorpApprovalPreviewConfirmationDetails_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
    },

    ReportsPreviewConfirmationDetails_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
    },
    CustIdLinksPreviewConfirmationDetails_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
    },

    RoleMaintAppPreviewConfirmationDetails_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
    },

    NonFinWorkflowAppRejConfirmUX5_onload: function(groupletId) {

        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
    },
    LCLookupUX5_onload: function(groupletId) {

        jQuery("[id='" + groupletId + "\\:SearchPanel_Stage34\\.Rb12\\.C2']").attr('style', 'width: 190px !important');
    },


    CorpUserMenuOptionsLinkDeLink_onload: function(groupletId) {
        jQuery(".stage3_inputpanel_leftcontainer_nobottommargin").attr('style', 'border-top: 0px !important');
        jQuery(".singleTableHeading").attr('style', 'border-top: 0px !important ;border-bottom: 0px !important');
        jQuery(".rightlisttable").attr('style', 'border-' + right + ': 1px solid #ccc !important');
    },
    NonFinWorkflow_onload: function(groupletId) {
        jQuery(".stage3_inputpanel_leftcontainer").attr('style', 'border-top:none !important;');
        var vpWidth = viewport().width;
        if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');
        }
    },
    EntryApprovalLimitListUX5_onload: function(groupletId) {
        var vpWidth = viewport().width;
        if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');
        }
    },

    LimitSchemeListUX5_onload: function(groupletId) {
        var vpWidth = viewport().width;
        if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');
        }
    },

    FinWorkflowMaintenance_onload: function(groupletId) {
        var vpWidth = viewport().width;
        if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');
        }
    },

    ApplicableRuleListUX5_onload: function(groupletId) {
        jQuery(".stage3_listingdetails").attr('style', 'border-top:none !important;');
        jQuery(".stage3_listingdetails").attr('style', 'width:99.85% !important');

    },
    OpTransactionHistoryLst5TxnUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery(".ui-dialog .multiTableHeading").attr('style', 'border-' + right + ' :1px solid #D4D4D4 !important');
        jQuery(".stage3_searchsimpletext").attr('style', 'padding-top: 11px !important');
    },
    OpTransactionHistoryLstNTxnUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
    },
    OpTransactionHistoryLstNTxnRetail_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },

    OpTransactionHistoryLstNTxnCorp_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },




    OpTransactionHistoryTprUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
    },
    OpTransactionHistoryTprRetail_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },
    OpTransactionHistoryTprCorp_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },




    OpTransactionHistoryUX5_onload: function(groupletId) {
        console.log("coming here----------");
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery("[id='ascrail2000']").attr("style", "display:none");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
    },
    OpTransactionHistryRetail_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }

        });
        console.log("coming here----------");
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery("[id='ascrail2000']").attr("style", "display:none");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },
    OpTransactionHistryCorp_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        console.log("coming here----------");
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery("[id='ascrail2000']").attr("style", "display:none");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C5']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Rib10.C6']").attr('style', 'margin-' + right + ':0px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },
    TransactionHistoryTprUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
    },

    TransactionHistoryTprRetUX5_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:span_maturitylnk']").attr('style', 'padding-top: 12px !important;margin-' + right + ': -35px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },

    TransactionHistoryTprCorpUX5_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:span_maturitylnk']").attr('style', 'padding-top: 12px !important;margin-' + right + ': -35px !important');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },
    TransactionHistoryUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
        jQuery("[id$='Caption25017315']").css('margin-' + left + '', '5px');
    },

    TransactionHistoryRetUX5_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
        jQuery("[id$='Caption25017315']").css('margin-' + left + '', '5px');
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:span_maturitylnk']").attr('style', 'padding-top: 12px !important;margin-' + right + ': -20px !important');

        var obj = jQuery("[id$='PageConfigurationMaster_RDAUX3W__1:maturitylnk']");
        if (obj != null && obj != "undefined")
            obj.css('padding-top', '15px');
        obj = jQuery("[id$='PageConfigurationMaster_RDAUX3W__1:ReadOnly_LeftContainer_Stage35.Rib10.C5']")
        if (obj != null && obj != "undefined")
            obj.css('margin-' + right + '', '0px');
        obj = jQuery("[id$='PageConfigurationMaster_RDAUX3W__1:ReadOnly_LeftContainer_Stage35.Rib10.C6']")
        if (obj != null && obj != "undefined")
            obj.css('margin-' + right + '', '0px');
        obj = jQuery("[id$='PageConfigurationMaster_RDAUX3W__1:ReadOnly_LeftContainer_Stage35.Rib10.C5']")
        if (obj != null && obj != "undefined")
            obj.find('.waves-effect').css('margin', '0px 0px 0px 0px');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },

    TransactionHistoryCorpUX5_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".stage3_searchpanelcolumn").attr('style', 'width:50%');
            }
        });
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }

        }
        jQuery("[id$='Caption25017315']").css('margin-' + left + '', '5px');
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage319.Ra1.C2']").find('.autocomplete-dropdown').attr('style', 'padding-' + right + ':0px;border-' + right + ':0px solid transparent !important');
        jQuery("[id='PageConfigurationMaster_WA101__1:span_maturitylnk']").attr('style', 'padding-top: 12px !important;margin-' + right + ': -20px !important');

        var obj = jQuery("[id$='PageConfigurationMaster_CDAUX3W__1:maturitylnk']");
        if (obj != null && obj != "undefined")
            obj.css('padding-top', '15px');
        obj = jQuery("[id$='PageConfigurationMaster_CDAUX3W__1:ReadOnly_LeftContainer_Stage35.Rib10.C5']")
        if (obj != null && obj != "undefined")
            obj.css('margin-' + right + '', '0px');
        obj = jQuery("[id$='PageConfigurationMaster_CDAUX3W__1:ReadOnly_LeftContainer_Stage35.Rib10.C6']")
        if (obj != null && obj != "undefined")
            obj.css('margin-' + right + '', '0px');
        obj = jQuery("[id$='PageConfigurationMaster_CDAUX3W__1:ReadOnly_LeftContainer_Stage35.Rib10.C5']")
        if (obj != null && obj != "undefined")
            obj.find('.waves-effect').css('margin', '0px 0px 0px 0px');
        jQuery("[id='" + groupletId + ":chooseStatementCaption']").attr('style', 'padding-' + right + ':4px !important');
    },




    CCTXNHistoryUX5_onload: function(groupletId) {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'fast');
        var grpId = "";
        if (groupletId && groupletId != null && groupletId != "null") {
            grpId = groupletId;
            var nextgenCont = jQuery('.nextGenUX4');
            for (i = 0; i < nextgenCont.length; i++) {
                var currCont = nextgenCont[i];
                var currContId = jQuery(currCont).attr('id');
                if (jQuery('#' + currContId).find('#' + groupletId).length > 0) {
                    jQuery('#' + currContId).find('.stage3_tabmenupanel').css('border-' + left + '', 'none');
                    break;
                }

            }
            jQuery(".simpletextright").css("padding-top", "16px");
            jQuery(".simpletextright").css("padding-" + left + "", "11px");

        }
    },
    FileHistoryListUX5_onload: function(groupletId) {
        jQuery(".simpletxt_breakword").attr('style', 'font-size : 14px !important; color: black !important');
    },
    MobileRechargePreferenceListUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".simpletext_breakword").attr('style', 'font-size : 14px !important; color : black !important');
        jQuery(".dropdown-button.more").attr('style', 'line-height: 14px !important');
        setTimeout(function() {
            jQuery(".hasPulldownMenu").attr('style', 'margin-top: -11px !important');

        }, 500);
    },
    MobileRechargePreferenceUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".searchsimpletext").attr('style', 'padding-top : 14px !important; color : black !important ; padding-' + left + ' : 4px !important');
        jQuery('.stage3_steptracker_mandatory').css('color', '#505050');

    },
    MobileRechargePreferenceConfUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    CCPastStatementUX5_onload: function(groupletId) {
        jQuery(".searchsimpletext").attr('style', 'padding-top:14px');
        jQuery(".simpletextright").css("padding-top", "16px");
        jQuery(".simpletextright").css("padding-" + left + "", "11px");
    },
    DpPreClosureSimulationDetails_onload: function() {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery('.stage3_steptracker_mandatory').css('color', '#505050');
    },
    CCTXNHistoryLastNTxnUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 70
        });
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'border-' + right + ' :1px solid #D4D4D4 !important');
    },

    StandardTextLookupUX5_onload: function() {
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'border-' + left + ' :0px solid #D4D4D4 !important');
        jQuery(".width100percent_downloadIcons").attr('style', 'padding-bottom: 0px !important');
        jQuery(".ui-dialog .pageLeftContainer .stage3_detailspanel").attr('style', 'border-top:1px solid #d4d4d4 !important');
    },

    /*Aashish added for RWD*/
    CCUnbilledStatementUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ExtraDetThree_SubSection']").removeClass("stage3_leftrightmainpanel_NoSeparator").addClass("stage3_leftrightmainpanel");
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_ellipse").ellipsis({
            width: 56
        });
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33\\.Ra1\\.C5").addClass('stage3_rightwithmargin');
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33\\.Ra1\\.C6").removeClass('stage3_rightwithmargin').addClass('stage3_rightwithoutmargin');
    },
    /*Added for Alerts Subscription*/
    AlrtSubCorpListUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_ellipse").ellipsis({
            width: 90
        });
        jQuery(".searchsimpletext_ellipse").css('cursor', 'default');

    },
    AlrtSubSelfLinkedListUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_ellipse").ellipsis({
            width: 90
        });
        jQuery(".searchsimpletext_ellipse").css('cursor', 'default');
    },
    AlrtSubSelfListUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_ellipse").ellipsis({
            width: 90
        });
        jQuery(".searchsimpletext_ellipse").css('cursor', 'default');
    },
    AlertPrefrenceSetUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NmaterializeDynamicShowAlertFields";

            script.src = "scripts/NmaterializeDynamicShowAlertFields.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NmaterializeDynamicShowAlertFields.js");
        }
        jQuery('.span-checkbox').css('margin-bottom', '6px');
        jQuery('.labelColumn_combo_download').css('width', '64px');
        jQuery(".labelColumn_combo_brdr_download").attr('style', 'width:68px');
        jQuery('.labelColumn_combo').css('width', '90px');
        jQuery(".labelColumn_combo_brdr").attr('style', 'width:100px;padding-' + right + ':7px');
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra1.C2']").attr('style', 'overflow:auto !important');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 580 && parseInt(vpWidth) >= 480) {
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra6.C5']").find(".span-checkbox").css('margin-' + left + '', '46%');
        }
        jQuery(window).resize(function() {

            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 580) {
                jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra6.C5']").find(".span-checkbox").css('margin-' + left + '', '46%');
            }
        });
    },
    OpTransactionHistory_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/AcctTxnHistoryFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.acctTxnHistoryFEBACalendar);
    },
    OpTransactionHistoryLstNTxn_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/AcctTxnHistoryFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.acctTxnHistoryFEBACalendar);
    },
    OpTransactionHistoryTpr_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/AcctTxnHistoryFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.acctTxnHistoryFEBACalendar);
    },
    OpAccountSummary_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/AccountSummaryPulldownMenu.js");
        feba.domManipulator.documentReady(feba.useCase.accountSummaryPulldownMenu);
    },
    DirectDebitMandatesListUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {
            jQuery("[id='" + groupletId + ":SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        } else {
            jQuery("[id='SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        }
    },
    DirectDebitMandatesList_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {
            jQuery("[id='" + groupletId + ":SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        } else {
            jQuery("[id='SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        }
    },
    ViewClosedDirectDebitMandates_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {
            jQuery("[id='" + groupletId + ":SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        } else {
            jQuery("[id='SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        }
    },
    ViewClosedDirectDebitMandatesListUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {
            jQuery("[id='" + groupletId + ":SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        } else {
            jQuery("[id='SearchPanel_Stage34']").click(function() {
                jQuery('.collapsible-wrapper').css('overflow-x', 'visible');
            });
        }
    },
    ViewSweepingStructures_onload: function() {
        feba.domManipulator.loadScript("scripts/module/lqmg/LMSweepStructFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.lmSweepStructFEBACalendar);
    },
    ImportLCPaymentTerms_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'BankNameLookup';

            script.src = "scripts/module/tfin/BankNameLookup.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/tfin/BankNameLookup.js");
        }

    },
    OBRefreshBalTransactions_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/NOBCopyTextBoxValue.js");
    },
    SweepingStructureModifyChild_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'LQMG';

            script.src = "scripts/module/lqmg/LQMG.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/lqmg/LQMG.js");
        }

    },
    SweepingStructureCreateChild_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = 'LQMG';

            script.src = "scripts/module/lqmg/LQMG.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/lqmg/LQMG.js");
        }
    },
    LinkMenuId_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");
    },
    AddCounterparty_onload: function(groupletId) {
        //Fix for ticket id: 772930
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 490 && parseInt(vpWidth) >= 480)) {
            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:80px');
        } else {
            jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:84px');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 490 && parseInt(vpWidth) >= 480)) {
                jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:80px');
            } else {
                jQuery(".labelColumn_text_brdr_toosmall").attr('style', 'width:84px');
            }
        });
        displayAdditional(groupletId);
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
        feba.domManipulator.getElement(document).scrollTop(0);
        selectCounterpartyBank(groupletId); //Added for use case: Home bank not mandatory
        jQuery("[id='" + groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER']").bind('change', function() {
            populateBankDetails(groupletId);
            selectCounterpartyBank(groupletId);
        });
    },
    AddCounterParty_onload: function(groupletId) {
        if (jQuery('#MODAL_VIEW_CONTAINER').length == 0) {
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7']").attr('style', 'width:99.7% !important;margin-top:0px');
        }
        /*Added as fix for tkt 730402*/
        if (jQuery('.ui-dialog .pageLeftContainer').length > 1) {
            jQuery('.ui-dialog .pageLeftContainer').attr("style", "border-top:none!important");
        }
        jQuery("#" + groupletId + "\\:PRINT_MANDATE").removeClass('nextGen_HwButton');
        jQuery("#" + groupletId + "\\:PRINT_MANDATE").parent().removeClass('nextGen_HwButton');

    },
    ModifyCounterparty_onload: function(groupletId) {
        displayAdditional(groupletId);
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
        feba.domManipulator.getElement(document).scrollTop(0);
        var cpBankTypeElement = document.getElementById(groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER");
        if (cpBankTypeElement != null) {
            selectCounterpartyBank(groupletId); //Added for use case: Home bank not mandatory
            jQuery("[id='" + groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER']").bind('change', function() {
                populateBankDetails(groupletId, event);
                selectCounterpartyBank(groupletId);
            });
        }
    },
    CopyCounterparty_onload: function(groupletId) {
        displayAdditional(groupletId);
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
        feba.domManipulator.getElement(document).scrollTop(0);
        var cpBankTypeElement = document.getElementById(groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER");
        if (cpBankTypeElement != null) {
            selectCounterpartyBank(groupletId); //Added for use case: Home bank not mandatory
            jQuery("[id='" + groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER']").bind('change', function() {
                populateBankDetails(groupletId, event);
                selectCounterpartyBank(groupletId);
            });
        }
    },
    BillerRegistrationUX5_onload: function(groupletId) {
        displayAdditional(groupletId);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "materializeAutoPayAccount";
            script.src = "scripts/module/transaction/materializeAutoPayAccount.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/transaction/materializeAutoPayAccount.js");
        }
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/materializeNTxnssMaxAmtLimit.js");
    },
    AdhocBillerDetailsEntryUX5_onload: function(groupletId) {
        //displayAdditional(groupletId);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "materializeAutoPayAccount";

            script.src = "scripts/module/transaction/materializeAutoPayAccount.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/transaction/materializeAutoPayAccount.js");
        }
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");

        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage40']").addClass('noborder');
        jQuery("[id='" + groupletId + ":DownloadPanel_Stage315']").addClass('noborder');

    },
    UFInformation_onload: function(groupletId) {
        jQuery(".masterGroupeltTitlehideElement").removeClass("masterGroupeltTitlehideElement");
    },
    ManageBillerEditUX5_onload: function(groupletId) {
        displayAdditional(groupletId);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "materializeAutoPayAccount";

            script.src = "scripts/module/transaction/materializeAutoPayAccount.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/transaction/materializeAutoPayAccount.js");
        }
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/materializeNTxnssMaxAmtLimit.js");
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage3_Collapsible8']").removeClass("stage3_inputpanel_leftcontainer");
    },
    MailViewUX5_onload: function() {
        /* Added by Anil for Mail Module START */
        /***
         * jQuery('.flagtxt').attr('style','margin-top:10px !important');*/
        jQuery('.flagtxt').attr('style', 'margin-top:16px !important');
        jQuery('.deletetxt').attr('style', 'width:102px;margin-top:10px;');
        jQuery('.labelcolumnsmall').attr('style', 'width:145px;margin-top:0px !important;');
        jQuery('.errorCodeWrapper').attr('style', 'width:80%;');
        //jQuery('.rightpanel_text_mails').attr('style','margin-top: 9px');
        jQuery('.removelinkstyle').attr('style', 'margin-top: 6px !important');
        feba.domManipulator.getElementStartingWith('MailsHomePageUX5_STATIC_MailView').bind('click', function() {
            adjustDivHeight();
        });
        convertComboboxes();
        adjustDivHeight();
        jQuery('.mailview_textarea').removeAttr('maxlength');
        if (jQuery('.centercontainer').find('.error_highlight').length > 0) {
            var floatDirection = left;
            if (feba.domManipulator.isRTL()) {
                floatDirection = "right";
                jQuery('.centercontainer').find('.error_highlight').attr('style', 'margin-' + left + ': 40px;');
                jQuery('.centercontainer').find('.error_highlight').css('float', floatDirection);
            } else {
                jQuery('.error_highlight').attr('style', 'float:left;width:65px;margin-top:9px;'); /*Aashish changed from 78px*/
                jQuery('#LabelForControl15598565').attr('style', 'float:left;width:65px;padding-' + right + ':6px;');
            }
        }

        //      jQuery('#LabelForControl15598565').attr('style','float:left;width:65px;padding-'+right+':6px;');
        /*Aashish added for RWD*/
        jQuery('#MailsHomePageUX5_STATIC_MailListNew').css('height', 'auto');

        /*Surej RWD specific fix for ie in mails delete link position
        if(jQuery.browser.msie){
        	jQuery(".deletelinkstyle").css("margin-top","3px");
        } */
        if (navigator.userAgent.search("Chrome") >= 0) {
            /*phani for view messages
             jQuery('.deletelinkstyle').attr('style','margin-top:7px !important;');   */
            jQuery('.deletelinkstyle').attr('style', 'margin-top:14px !important;');
        }
        if (navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0) {
            /* Microsoft Internet Explorer detected in. */
            /*jQuery('.deletelinkstyle').attr('style','margin-top:9px !important;');*/
            jQuery('.deletelinkstyle').attr('style', 'margin-top:17px !important;');
        }
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            // Do Firefox-related activities
            /*jQuery('.deletelinkstyle').attr('style','margin-top:9px !important;');*/
            jQuery('.deletelinkstyle').attr('style', 'margin-top:17px !important;');
        }
    },
    MailTemplateModalViewUX5_onload: function() {
        /*phani for message template
        jQuery('.mailcontainerbackground').attr('style','border-top: 1px solid #E8E8E8;');
        jQuery('.compose_txt').attr('style','margin-top: 6px;');*/
        jQuery('.mailcontainerbackground').attr('style', 'border: 1px solid #EFEFEF; margin-top: 20px');
        jQuery('.compose_txt').attr('style', 'margin-top: 11px;');
        if (langID && langID == '005') {
            setTimeout(function() {
                jQuery('.ui-dialog-title').text('Alternate lang text');
            }, 200);
            jQuery('.compose_pbtn').css('width', '16%');
        }
    },
    MailCorpCompose_onload: function() {
        // Added by Anil for removing border in Compose Message screen
        jQuery('.composesubject').attr('style', 'border:none;padding-bottom:15px;');
        jQuery('.labelColumn_combo_brdr_small').attr('style', 'margin-' + left + ':2px;');
        jQuery('.composeMsgTemplates').attr('style', 'padding-' + right + ':12px;');
        /*for red color
			jQuery('.stage3_steptracker_mandatory').attr('style','padding-top:20px !important;color: #000000 !important;'); */
        jQuery('.stage3_steptracker_mandatory').attr('style', 'padding-top:58px !important;');

        jQuery('#HREF_printPreview, #HREF_help').addClass('helpAlignMessageCenter');
        jQuery('.composetxtboxsubject').attr('style', 'margin-' + left + ':5px;border-bottom:1px solid #E9E9E9 !important;');
        jQuery('.pfm_whitetabhover_bold_tab').attr('style', 'background: #FFFFFF;padding-bottom:12px;');
        //jQuery('.tabbar_compose').attr('style','margin-bottom:-1px;');
        jQuery('.errorDisplayStyle').attr('style', 'width:101%;');
        // changes end
        jQuery('#LabelForControl20780199').attr('style', 'margin-' + left + ':4px;');
        //jQuery('.composemsgtxtarea').removeAttr('maxlength');
        var label = document.getElementById('MailCompose_Stage313.Ra4.C2');
        if (label.children[0].className == "simpletext") {
            var removelabel = document.getElementById('MailCompose_Stage313.Ra5.C2');
            removelabel.style.marginLeft = "-7px";
            var rowlabel = document.getElementById('MailCompose_Stage313.Ra4');
            rowlabel.style.display = "none";
        } else {
            var removelabel = document.getElementById('MailCompose_Stage313.Ra5.C2');
            removelabel.style.marginLeft = "95px";
            var addcolor = document.getElementById('linkAttach');
            if (addcolor.disabled) {
                addcolor.style.color = "grey"
            }
        }
        if (feba.domManipulator.isRTL()) {
            jQuery('.mailcontainer').css('width', '98%');
        }
        jQuery(".materialize-textarea").removeClass("materialize-textarea");
        jQuery(".composemsgtxtarea").addClass('composeMessageEditor');
    },
    MailRetailCompose_onload: function() {
        // Added by Anil for removing border in Compose Message screen
        jQuery('.composesubject').attr('style', 'border:none');
        jQuery('.labelColumn_combo_brdr_small').attr('style', 'margin-' + left + ':2px;');
        jQuery('.composeMsgTemplates').attr('style', 'padding-' + right + ':12px;');
        /*** fo red color
        jQuery('.stage3_steptracker_mandatory').attr('style','padding-top:20px !important;color: #000000 !important;'); */
        jQuery('.stage3_steptracker_mandatory').attr('style', 'padding-top:58px !important;');
        if (viewport().width <= 639) {
            jQuery('.stage3_steptracker_mandatory').attr('style', 'padding-top:0px !important;');
        }
        jQuery('#HREF_printPreview, #HREF_help').addClass('helpAlignMessageCenter');
        jQuery('.composetxtboxsubject').attr('style', 'margin-' + left + ':5px;border-bottom:1px solid #E9E9E9 !important;');
        jQuery('.pfm_whitetabhover_bold_tab').attr('style', 'background: #FFFFFF;padding-bottom:12px;');
        //jQuery('.tabbar_compose').attr('style','margin-bottom:-1px;');
        jQuery('.errorDisplayStyle').attr('style', 'width:101%;');
        jQuery('.link_attach').attr('style', 'float: none !important;');
        // changes end
        var label = document.getElementById('MailCompose_Stage313.Ra4.C2');
        //jQuery('.composemsgtxtarea').removeAttr('maxlength');
        if (label.children[0].className == "simpletext") {
            var removelabel = document.getElementById('MailCompose_Stage313.Ra5.C2');
            removelabel.style.marginLeft = "-7px";
            var rowlabel = document.getElementById('MailCompose_Stage313.Ra4');
            rowlabel.style.display = "none";
        } else {
            var removelabel = document.getElementById('MailCompose_Stage313.Ra5.C2');
            removelabel.style.marginLeft = "95px";
            /*Aashish added for RWD for mail attachment issue start*/
            removelabel.style.width = "95px";
            var removelabel1 = document.getElementById('MailCompose_Stage313.Ra5.C3');
            removelabel1.style.width = "95px";
            /*Aashish added for RWD for mail attachment issue end*/
            var addcolor = document.getElementById('linkAttach');
            if (addcolor.disabled) {
                addcolor.style.color = "grey"
            }
        }
        jQuery(".materialize-textarea").removeClass("materialize-textarea");
        jQuery(".composemsgtxtarea").addClass('composeMessageEditor');
    },
    // Added by Anil for Mails Module
    MailsHomeCorp_onload: function(groupletId) {
        jQuery('.pfm_whitetabhover_bold_tab').attr('style', 'background: #FFFFFF;padding-bottom:13px;');
    },
    MailsHomeRet_onload: function(groupletId) {
        jQuery('.pfm_whitetabhover_bold_tab').attr('style', 'background: #FFFFFF;padding-bottom:13px;');
    },
    // Added by Anil for Add recipient hyper link Mails Module
    CorporateUsersListUX5_onload: function(groupletId) {
        jQuery('.querytextboxmedium_small').attr('style', 'position:absolute !important;');
        jQuery('.querytextboxmedium_search').attr('style', 'width:100% !important;');
        jQuery('.ui-dialog .pagination-wrapper').attr('style', 'border-top:none !important;');
        jQuery('.singleTableHeading').attr('style', 'border-' + right + ':1px solid #D4D4D4 !important;border-' + left + ':1px solid #D4D4D4 !important;border-top:none !important;');
        jQuery('.stage3_searchpanelrow').attr('style', 'margin-top:8px !important;');
        //Fix for ticket id: 781362
        if (viewport().width >= 480 && viewport().width <= 640) {
            if (groupletId && groupletId != "null" && groupletId.length > 0 && groupletId != "undefined") {
                jQuery("[id='" + groupletId + "\\:AdvanceSearch_Stage39.SubSection1']").attr('style', 'border:1px solid #D4D4D4 !important;border-bottom:1px solid #D4D4D4 !important;width: 99.55%;');
            } else {
                jQuery("[id='AdvanceSearch_Stage39.SubSection1']").attr('style', 'border:1px solid #D4D4D4 !important;border-bottom:1px solid #D4D4D4 !important;width: 99.55%;');
            }
        } else {
            if (groupletId && groupletId != "null" && groupletId.length > 0 && groupletId != "undefined") {
                jQuery("[id='" + groupletId + "\\:AdvanceSearch_Stage39.SubSection1']").attr('style', 'border:1px solid #D4D4D4 !important;border-bottom:1px solid #D4D4D4 !important;width: 99.75%;');
            } else {
                jQuery("[id='AdvanceSearch_Stage39.SubSection1']").attr('style', 'border:1px solid #D4D4D4 !important;border-bottom:1px solid #D4D4D4 !important;width: 99.75%;');
            }
        }

        /*added for defect: 772941*/
        jQuery(".search_mails").bind("click", function(e) {

            //Check if user click is ON or WITH IN the search mails div element. If so prevent propogating further to the body click event
            if (jQuery(".search_mails").find(e.target).length > 0 || e.target.className == "search_mails") {
                if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                    if (jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display") == "none") {
                        jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display", "block");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("src", getImagePath() + "/left_arrow_double.png");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("title", getMessage("Collapse"));
                    } else if (jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display") == "block") {
                        jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display", "none");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("src", getImagePath() + "/right_arrow_double.png");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("title", getMessage("Expand"));
                    }
                }
                //jQuery( document ).undelegate(".search_mails", "click");
                //jQuery( document ).undelegate("body", "click");
                e.preventDefault();
                e.stopImmediatePropagation();

            }
            jQuery("body").bind("click", function(e) {
                if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                    if (jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").find(e.target).length > 0 || e.target.className == "advance_wrapper" ||
                        (jQuery('.search_mails').find(".advance_wrapper").find(e.target).length > 0 || e.target.className == "search_mails")) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    } else {
                        if (jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display") == "block") {
                            jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("src", getImagePath() + "/right_arrow_double.png");
                            jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("title", getMessage("Expand"));
                            jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display", "none");
                        }
                    }
                }

            });
        });
    },

    ROUsersListUX5_onload: function(groupletId) {
        /*jQuery('.singleTableHeading').attr('style','border-'+right+':1px solid #D4D4D4 !important;border-'+left+':1px solid #D4D4D4 !important;');
        jQuery('.querytextboxmedium_small').attr('style','position:absolute !important;');*/
    },
    StandardTextDetailsUX5_onload: function(groupletId) {
        jQuery('.ui-dialog .stage3_inputpanel_leftcontainer').attr('style', 'border-bottom:1px solid #D4D4D4 !important;');
    },

    PasswordAlertsUX5_onload: function(groupletId) {
        if (jQuery("[id='" + groupletId + ":WidgetForm.RWi3']") != null) {
            jQuery("[id='" + groupletId + ":WidgetForm.RWi3']").addClass('borderTopAdded');
        }

    },
    DashboardMailComposeUX5_onload: function() {
        var floatDirection = right;
        if (feba.domManipulator.isRTL()) {
            floatDirection = "left";
        }
        jQuery(".current_tab_widget").css("float", floatDirection);
        jQuery(".verticalspacing").css("padding-" + right + "", "0px");
        //Added for scroll issue in rich text editor
        jQuery("iframe").css("width", "100%");
        jQuery("iframe").css("height", "98px");
        convertComboboxes();
    },
    MailsListUX5_onload: function() {
        // Added by Anil for RWD issue UX5 Mails Module
        jQuery('.heading_txtmod').attr('style', 'width:33%;');
        jQuery("table td.icon_logo").css("padding", "4px");
        jQuery('.labelcolumnsmall').attr('style', 'width:145px;');
        /*FOR search overlay
		jQuery('.labelColumn_combo_brdr_toosmall').attr('style','width:130px;');
		*/
        jQuery('.labelColumn_combo_brdr_toosmall').attr('style', 'width:155px;');
        //Anil Changes End
        /* Added by 463143 for message center responsive screen start*/
        //jQuery("#main").removeClass('container');
        jQuery('#main').addClass('container-messageCenter');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 900) {
            jQuery('.advance_search_link').attr('style', 'display:none !important');
            jQuery('.db_accwid_pluss').attr('style', 'display:none !important');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 900) {
                jQuery('.advance_search_link').attr('style', 'display:none !important');
                jQuery('.db_accwid_pluss').attr('style', 'display:none !important');
            } else {
                jQuery('.advance_search_link').attr('style', 'display:block !important');
                jQuery('.db_accwid_pluss').attr('style', 'display:block !important');
            }
        });
        /* Added by 463143 for message center responsive screen end*/
        //mails subject ellipsis
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".heading_txtmod a").ellipsis({
            width: 100
        });
        convertComboboxes();
        adjustDivHeight();
        if (viewport().width < 640) {
            var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
            jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
            jQuery('#C1').append(teest);
            jQuery('#C1').addClass('positionrelativemsg');
            jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition margintop');
            jQuery('.centercontainer').removeClass('positionrelativemsg');
            if (feba.domManipulator.isRTL()) {
                jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + right + '', '30px');
            } else {
                jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
            }
        } else {
            var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
            jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
            jQuery('#C1').append(teest);

            jQuery('#C1').removeClass('positionrelativemsg');
            jQuery('.centercontainer').addClass('positionrelativemsg');
            jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition margintop');
            if (feba.domManipulator.isRTL()) {
                jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + right + '', '30px');
            } else {
                jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
            }
        }

        jQuery(window).resize(function() {
            if (viewport().width < 640) {
                var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
                jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
                jQuery('#C1').append(teest);
                jQuery('#C1').addClass('positionrelativemsg');
                jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition');
                jQuery('.centercontainer').removeClass('positionrelativemsg');
                if (feba.domManipulator.isRTL()) {
                    jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + right + '', '30px');
                } else {
                    jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
                }
            } else {
                var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
                jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
                jQuery('#C1').append(teest);
                jQuery('#C1').removeClass('positionrelativemsg');
                jQuery('.centercontainer').addClass('positionrelativemsg');
                jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition');
                if (feba.domManipulator.isRTL()) {
                    jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + right + '', '30px');
                } else {
                    jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
                }
            }

        });
        /* Modified by anil for Mails Module Collapsible issue start */
        /*Surej rewirtten code for search panel collapse and open START*/
        /** On click of search mails container, search panel should open up. If clicked again, the opened search panel
         * should collapse. The lens image icon should change the color from black to blue in opened state.
         * If user clicks on anywhere outside, the opened search panel should collapse. Propogation should be stopped
         * if user clicks on search panel, as there is another function below for handling "body" click. Both click events should not
         * execute together. */
        //jQuery(".searchicons_mail").unbind('click');
        //jQuery(".searchicons_mail").die('click');
        jQuery(".leftcontainer_Icon").bind('click', function(event) {
            event.preventDefault();
            jQuery(".leftcontainer").slideToggle();
            jQuery(".advance_wrapper").css("display", "none");
            return false;
        });
        //jQuery(".leftcontainer_Icon").unbind('click');
        //jQuery(".leftcontainer_Icon").die('click');
        jQuery(".searchicons_mail").bind('click', function(event) {
            if (navigator.userAgent.search("Firefox") >= 0) {
                var pickerIcon = jQuery(".picker-icon");
                if (typeof pickerIcon !== typeof undefined && pickerIcon.length > 0) {
                    jQuery("input.all-datepicker").css("margin-top", "11px");
                    var delay = 1000;
                    setTimeout(function() {
                        jQuery("input.all-datepicker").css("margin-top", "12px");
                    }, delay);
                }
            }
            console.log("inside the search icon click function");
            event.preventDefault();
            jQuery(".advance_wrapper").slideToggle();
            jQuery(".leftcontainer").css("display", "none");
            return false;
        });
        jQuery(".search_mails").unbind("click");
        jQuery(".search_mails").die("click");
        jQuery("body").unbind("click");
        jQuery("body").die("click");
        jQuery(".search_mails").bind("click", function(e) {
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
            console.log("Inside click Function");
            //Check if user click is ON or WITH IN the search mails div element. If so prevent propogating further to the body click event
            if (jQuery(".search_mails").find(e.target).length > 0 || e.target.className == "search_mails") {
                if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                    if (jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display") == "none") {
                        jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display", "block");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("src", getImagePath() + "/left_arrow_double.png");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("title", getMessage("Collapse"));
                    } else if (jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display") == "block") {
                        jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display", "none");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("src", getImagePath() + "/right_arrow_double.png");
                        jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("title", getMessage("Expand"));
                    }
                } else {
                    console.log("Inside click Function1");
                    if (jQuery(".advance_wrapper").css("display") == "none") {
                        jQuery(".advance_wrapper").css("display", "block");
                        jQuery(".db_accwid_pluss").attr("src", getImagePath() + "/left_arrow_double.png");
                        jQuery(".db_accwid_pluss").attr("title", getMessage("Collapse"));
                    } else if (jQuery(".advance_wrapper").css("display") == "block") {
                        jQuery(".advance_wrapper").css("display", "none");
                        jQuery(".db_accwid_pluss").attr("src", getImagePath() + "/right_arrow_double.png");
                        jQuery(".db_accwid_pluss").attr("title", getMessage("Expand"));
                    }
                }
                //jQuery( document ).undelegate(".search_mails", "click");
                //jQuery( document ).undelegate("body", "click");
                //e.preventDefault();
                //e.stopImmediatePropagation();

            }
            jQuery("body").bind("click", function(e) {
                //check if user is clicking on Search panel container. If yes, stop propogation and the state should remain same.
                console.log("Inside nHWMailsFunc");
                var isCalendarTarget = false;
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
                if (isIe9AndBelow) {
                    if ((e.target.className != null && e.target.className.split(/[ ,]+/).length >= 2) && (e.target.className.split(/[ ,]+/)[1].indexOf("calendars") == 0)) {
                        isCalendarTarget = true;
                    } else if ((e.target.className != null && e.target.className.split(/[ ,]+/).length == 1) && (e.target.className.split(/[ ,]+/)[0].indexOf("calendars") == 0)) {
                        isCalendarTarget = true;
                    } else if (e.target.offsetParent != null && (e.target.offsetParent.className.indexOf("calendars-popup") == 0)) {
                        isCalendarTarget = true;
                    }
                } else {
                    if ((e.target.classList != null && e.target.classList.length >= 2) && (e.target.classList[1].indexOf("calendars") == 0)) {
                        isCalendarTarget = true;
                    } else if ((e.target.classList != null && e.target.classList.length == 1) && (e.target.classList[0].indexOf("calendars") == 0)) {
                        isCalendarTarget = true;
                    } else if (e.target.offsetParent != null && (e.target.offsetParent.className.indexOf("calendars-popup") == 0)) {
                        isCalendarTarget = true;
                    }
                }
                if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
                    if (isCalendarTarget == true || jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").find(e.target).length > 0 || e.target.className == "advance_wrapper" ||
                        (jQuery('.search_mails').find(".advance_wrapper").find(e.target).length > 0 || e.target.className == "search_mails")) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    } else {
                        if (jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display") == "block") {
                            jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("src", getImagePath() + "/right_arrow_double.png");
                            jQuery('#MODAL_VIEW_CONTAINER').find(".db_accwid_pluss").attr("title", getMessage("Expand"));
                            jQuery('#MODAL_VIEW_CONTAINER').find(".advance_wrapper").css("display", "none");
                        }
                    }
                } else {
                    if (isCalendarTarget == true || jQuery(".advance_wrapper").find(e.target).length > 0 || e.target.className == "advance_wrapper" ||
                        (jQuery(".search_mails").find(e.target).length > 0 || e.target.className == "search_mails")) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    } else {
                        if (jQuery(".advance_wrapper").css("display") == "block") {
                            jQuery(".db_accwid_pluss").attr("src", getImagePath() + "/right_arrow_double.png");
                            jQuery(".db_accwid_pluss").attr("title", getMessage("Expand"));
                            jQuery(".advance_wrapper").css("display", "none");
                        }
                    }
                }

                /* for serach overlay*/
                if (jQuery(e.target).attr('class') == 'close_search') {
                    console.log("clicked on search close in view mail page");
                    jQuery('.advance_search_link').click();
                } else if (jQuery(e.target).attr('class') == 'open_advance_search') {
                    console.log("clicked on search close");
                    jQuery('.advance_search_fields').css("display", "block");
                    jQuery('.close_advance_search').css("display", "block");
                    jQuery('.open_advance_search').css("display", "none");
                } else if (jQuery(e.target).attr('class') == 'close_advance_search') {
                    console.log("clicked on search close");
                    jQuery('.advance_search_fields').css("display", "none");
                    jQuery('.close_advance_search').css("display", "none");
                    jQuery('.open_advance_search').css("display", "block");
                }
            });
        }); /* Anil Changes End */
    },
    EmptyMailViewUX5_onload: function() {
        //adjustEmptyDivHeight();//function not defined anywhere..giving error on page load
        if (viewport().width < 640) {
            var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
            jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
            jQuery('#C1').append(teest);
            jQuery('#C1').addClass('positionrelativemsg');
            jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition margintop');
            jQuery('.centercontainer').removeClass('positionrelativemsg');
            jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
        } else {
            var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
            jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
            jQuery('#C1').append(teest);

            jQuery('#C1').removeClass('positionrelativemsg');
            jQuery('.centercontainer').addClass('positionrelativemsg');
            jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition margintop');
            jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
        }

        jQuery(window).resize(function() {
            if (viewport().width < 640) {
                var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
                jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
                jQuery('#C1').append(teest);
                jQuery('#C1').addClass('positionrelativemsg');
                jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition');
                jQuery('.centercontainer').removeClass('positionrelativemsg');
                jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
            } else {
                var teest = jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').detach();
                jQuery('#C1').find('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').remove();
                jQuery('#C1').append(teest);
                jQuery('#C1').removeClass('positionrelativemsg');
                jQuery('.centercontainer').addClass('positionrelativemsg');
                jQuery('#MailsHomeCorp_STATIC_MailListNew_pinnableWrapper').addClass('positionabsolutemsg bottomposition');
                jQuery('#MailsHomeCorp_STATIC_MailListNew\\:Messagetype_Container_Stage35\\.Ra1').css('margin-' + left + '', '30px');
            }

        });
    },
    QuickLinkWidgetUX5_onload: function() {
        if (jQuery(".container-xtrasmall").find(".errorContentWrapper").length > 0) {
            jQuery(".stage3_rtpanelquicklinkrow_new").css("margin-top", "7px");
        }
        convertComboboxes();
    },
    ViewDocumentsUX5_onload: function() {
        convertComboboxes();
    },
    CashTransactionUpdateUX5_onload: function() {
        populateTransactionType();
        populateWarning();
    },
    CBDTNonTDSInitiatePayment_onload: function(groupletId) {
        jQuery("[id$='PAYER_REFERENCE_NO_TYPE']").parent().hide();
        jQuery("[id$='STATE']").parent().hide();
    },
    CBECExciseDutyPaymentScreen_onload: function(groupletId) {

        jQuery("[id$='STATE']").parent().hide();

    },
    ImportLCCyberReceiptUX5_onload: function() {
        jQuery('.span-checkbox').addClass('checkboxalignment');
    },
    MyPersonalDetailsDataCapture_onload: function(groupletId) {
        jQuery("[id='PageConfigurationMaster_RPSTUXW__1:DataEntry_LeftContainer_Stage39.Rb1.C1']").attr('style', 'padding-' + left + ': 12px !important;');
        jQuery('.searchsimpletextbold2').attr('style', 'padding-bottom: 15px !important;');
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSectHeader5']").attr('style', 'border-top:none');
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSectHeader4']").attr('style', 'border-top:none');
    },
    MyPersonalDetailsRequestConfirmation_onload: function(groupletId) {
        jQuery('.stage3_leftrightmainpanel').attr('style', 'padding-bottom: 4px !important;');
        jQuery('.searchsimpletextbold2').attr('style', 'padding-bottom: 15px !important;');
        jQuery("[id='PageConfigurationMaster_RPSTUXW__1:FormManagementFG.SALUTATION']").attr('style', 'padding-' + left + ': 12px !important;');
    },
    MCDPersonalDetailsCyberReceiptUX5_onload: function(groupletId) {
        jQuery('.stage3_leftrightmainpanel').attr('style', 'padding-bottom: 4px !important;');
    },
    UCDPersonalDetailsCyberReceiptUX5_onload: function(groupletId) {
        jQuery('.searchsimpletextbold2').attr('style', 'padding-bottom: 15px !important;');
        jQuery("[id='PageConfigurationMaster_RPSTUXW__1:FormManagementFG.SALUTATION']").attr('style', 'padding-' + left + ': 12px !important;');
    },
    MCDDetailsDisplayUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ConfirmationDet_SubSection']").removeClass('stage3_leftrightmainpanel_myprofile');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.ConfirmationDet_SubSection']").addClass('stage3_leftrightmainpanel_myprofilelastrow');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.Ra1']").attr('style', 'margin-bottom:10px');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_SubSectionCollapseStage35.Rf5']").attr('style', 'margin-bottom:10px');
        if (viewport().width >= 480 && viewport().width <= 639) {
            jQuery('.ui-dialog-title').attr('style', 'width:75% !important;margin-' + left + ': 10px !important');
        }

    },
    SCRDetailsDisplayUX5_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    RMADetailsDisplayUX5_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
        jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.Re7.C2']").removeClass('querytextright').addClass('querytextleft_width100percent_withtextalignleft');
        setTimeout(function() {
            jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.Re7.C1']").attr('style', 'display:none');
        }, 50);
    },
    ODRDetailsDisplayUX5_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    ACODetailsDisplayUX5_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    SRCorporateBillPayEnrollment_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    SRRetailBillPayEnrollment_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    ApplyDebitCardCorp_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    ApplyDebitCardRetail_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    CHKDetailsDisplayUX5_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    USCDetailsDisplayUX5_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    FDODetailsDisplayUX5_onload: function() {
        jQuery('.querytextleft_width100percent_withtextalignleft').addClass('servicereqoverlaytopborderissue');
        serviceReqBorderIssue();
        jQuery(window).resize(function() {
            serviceReqBorderIssue();
        });
    },
    CorpSnapShotUX5_onload: function(groupletId) {
        jQuery("[id='ParentDiv_CorpSnapShotUX5_UCSSHTW__1']").attr('style', 'display: none;');
        jQuery("[id$='CorpSnapShotUX5_STATIC_WD1_Menu']").parent().hide();
        jQuery("[id$='CorpSnapShotUX5_STATIC_WD2_Menu']").parent().hide();
        jQuery("[id$='CorpSnapShotUX5_STATIC_WD3_Menu']").parent().hide();
        jQuery("[id$='CorpSnapShotUX5_STATIC_WD4_Menu']").parent().hide();
        jQuery("[id$='CorpSnapShotUX5_STATIC_WD5_Menu']").parent().hide();
        setTimeout(
            function() {
                jQuery('.ui-sortable').sortable("disable");
            }, 150);
        jQuery('#HREF_help').attr('style', 'display: inline;');
    },

    UserDetailsListUX5_onload: function(groupletId) {
        //jQuery('.pageLeftContainer').addClass('corpsnapshotheader');
        jQuery(".widget-head .h2Widget").addClass('newheadingstylecorpsnap');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD2_Title']").addClass('newheadingstylecorpsnapshot');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD2_Menu_MenuItems']").children().hide();
        jQuery(".redbgwithwidth").attr('style', 'background-color: #FFFFFF;');

        var vpWidth = viewport().width;
        if (navigator.userAgent.search("Chrome") >= 0 && parseInt(vpWidth) >= 641) {
            jQuery(".newheadingstylecorpsnapshot").attr('style', 'width:98.1%;');
        }
        if (parseInt(vpWidth) <= 490) {
            jQuery('.stage3_listingpaneldiv').removeClass('stage3_listingpaneldiv').addClass('stage3_listingpaneldivcorpsnap');
            jQuery(".pageLeftContainer").attr('style', 'width: 99.8% !important');

        } else if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');

        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 490) {
                jQuery('.stage3_listingpaneldiv').removeClass('stage3_listingpaneldiv').addClass('stage3_listingpaneldivcorpsnap');
            } else {
                jQuery('.stage3_listingpaneldiv').removeClass('stage3_listingpaneldivcorpsnap');
            }
        });
    },

    TxnLimitsListUX5_onload: function(groupletId) {
        //jQuery('.pageLeftContainer').addClass('corpsnapshotheader');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD1_Title']").addClass('newheadingstylecorpsnapshot');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD1_Menu_MenuItems']").children().hide();
        jQuery(".redbgwithwidth").attr('style', 'background-color: #FFFFFF;');

        var vpWidth = viewport().width;
        if (navigator.userAgent.search("Chrome") >= 0 && parseInt(vpWidth) >= 641) {
            jQuery(".newheadingstylecorpsnapshot").attr('style', 'width:98.1%;');
        }
        if (viewport().width <= 490) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.8% !important');
        } else if (parseInt(vpWidth) >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.8% !important');
        }
    },

    RoleDefinitionListUX5_onload: function(groupletId) {
        //jQuery('.pageLeftContainer').addClass('corpsnapshotheader');
        var vpWidth = viewport().width;
        jQuery("[id='CorpSnapShotUX5_STATIC_WD3_Title']").addClass('newheadingstylecorpsnapshot');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD3_Menu_MenuItems']").children().hide();
        jQuery(".redbgwithwidth").attr('style', 'background-color: #FFFFFF;');

        if (navigator.userAgent.search("Chrome") >= 0 && parseInt(vpWidth) >= 641) {
            jQuery(".newheadingstylecorpsnapshot").attr('style', 'width:98.1%;');
        }


        if (parseInt(vpWidth) >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.8% !important');
        }
    },

    NonFinancialWorkflowInqListUX5_onload: function(groupletId) {
        //jQuery('.pageLeftContainer').addClass('corpsnapshotheader');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD4_Title']").addClass('newheadingstylecorpsnapshot');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD4_Menu_MenuItems']").children().hide();
        jQuery(".redbgwithwidth").attr('style', 'background-color: #FFFFFF;');
        var vpWidth = viewport().width;

        if (navigator.userAgent.search("Chrome") >= 0 && parseInt(vpWidth) >= 641) {
            jQuery(".newheadingstylecorpsnapshot").attr('style', 'width:98.1%;');
        }
        if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');
        }
    },

    FinancialWorkflowListUX5_onload: function(groupletId) {
        //jQuery('.pageLeftContainer').addClass('corpsnapshotheader');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD5_Title']").addClass('newheadingstylecorpsnapshot');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD5_Menu_MenuItems']").children().hide();
        jQuery(".redbgwithwidth").attr('style', 'background-color: #FFFFFF;');
        var vpWidth = viewport().width;
        if (navigator.userAgent.search("Chrome") >= 0 && parseInt(vpWidth) >= 641) {
            jQuery(".newheadingstylecorpsnapshot").attr('style', 'width:98.1%;');
        }
        if (viewport().width >= 641) {
            jQuery(".pageLeftContainer").attr('style', 'width: 99.9% !important');
        }
    },
    FinWorkflowDetailsUX5_onload: function(groupletId) {
        jQuery("[id='CorpSnapShotUX5_STATIC_WD5:NavigationPanel_Stage37']").css('border-bottom', '1px solid #D4D4D4');
        jQuery("[id='CorpSnapShotUX5_STATIC_WD5:NavigationPanel_Stage37']").css('background-color', '#FFFFFF');
    },
    FinRuleAddUX5_onload: function(groupletId) {
        jQuery('.HW_formbtn_grey').addClass('HW_formbtn');
        jQuery("[id='" + groupletId + "\\:FinRuleCRUDFG.ACCOUNT_NUMBER']").addClass('remarksboxux3 textareaalignment');
        if (jQuery("[id='" + groupletId + ":ToAmount']").hasClass('error_highlight')) {
            var id = jQuery("[id='" + groupletId + ":ToAmount']").attr('id');
            jQuery("[id='" + groupletId + "\\:ToAmount']").css('float', left);
            jQuery("[id='" + groupletId + "\\:ToAmount']").addClass('searchsimpletextresponsive');
        }
    },
    FinRuleCopyUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Ra6.C2']").attr('style', 'overflow:auto !important');
    },
    FinRuleViewDetailUX5_onload: function() {
        jQuery(".ui-dialog .pageLeftContainer").attr('style', 'border-top:0px !important');
    },
    ChildTransactionsListUX5_onload: function() {
        jQuery("[id='" + groupletId + ":ListingPanel_LeftContainer_Stage3_ModalView12.Ra4.C1']").attr('style', 'border: 1px solid #E0E0E0;');
    },
    UserAccessListUX5_onload: function(groupletId) {
        /*jQuery('.hasPulldownMenu').css('font-size','1em');
        jQuery('.menuChoices_4').addClass('crpPulldown');*/

        jQuery(".stage3_detailspanel").addClass('searchpanelrightborder');

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 600) {
            jQuery('.footable-first-column').addClass('paddingrightpulldown');
            jQuery('.footable-last-column').addClass('paddingrightpulldown');
            jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 600) {
                jQuery('.footable-first-column').addClass('paddingrightpulldown');
                jQuery('.footable-last-column').addClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
            } else {
                jQuery('.footable-first-column').removeClass('paddingrightpulldown');
                jQuery('.footable-last-column').removeClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').removeClass('paddingrightpulldown');
            }
        });

    },

    OpAccountSummaryUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NmaterializedynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NmaterializedynamicFetch.js");
        }
        jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra2']").addClass('stage3_downloadnav');

        var isIE = /*@cc_on!@*/ false || !!document.documentMode;
        if (isIE) {

            jQuery('.searchsimpletext_wrapnew').removeClass('name_wrap');
            //jQuery('.searchsimpletext_wrapnew').attr('style','word-break:normal');
            jQuery('.searchsimpletext_wrapnew').addClass('name_IEwrap');
            jQuery('.name_IEwrap').attr('style', 'word-break:normal;max-width:107px !important');

        }

        jQuery('.HW_textwithpadding').attr('style', 'padding-' + left + ':6px !important');
        if (feba.domManipulator.isRTL()) {
            var var1 = jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra2']").css("width", "275px");
            var1.css('float', right);
        } else {
            var var1 = jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra2']").css("width", "285px");
            var1.css('float', right);
        }
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 501 && parseInt(vpWidth) >= 480)) {
            jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1.C3']").attr('style', 'margin-' + left + ':33% !important');
        }
        if (parseInt(vpWidth) <= 600) {
            jQuery('.footable-first-column').addClass('paddingrightpulldown');
            jQuery('.footable-last-column').addClass('paddingrightpulldown');
            jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
            jQuery('.dropdown-button').addClass('paddingleftpulldown');
        }
        if ((parseInt(vpWidth) <= 742 && parseInt(vpWidth) >= 480)) {
            jQuery('.hwgreentxt').attr('style', 'padding-' + right + ': 5px !important');
            jQuery('.hwblacktxt').attr('style', 'padding-' + right + ': 5px !important');
            jQuery('.HW_tablecolcenter').attr('style', 'padding-' + right + ': 5px !important');

        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 742 && parseInt(vpWidth) >= 480)) {
                jQuery('.hwgreentxt').attr('style', 'padding-' + right + ': 5px !important');
                jQuery('.hwblacktxt').attr('style', 'padding-' + right + ': 5px !important');
                jQuery('.HW_tablecolcenter').attr('style', 'padding-' + right + ': 5px !important');
            }
            if ((parseInt(vpWidth) <= 501 && parseInt(vpWidth) >= 480)) {
                jQuery("[id='" + groupletId + ":DownloadPanel_Stage315.Ra1.C3']").attr('style', 'margin-' + left + ':33% !important');
            }
            if (parseInt(vpWidth) <= 600) {
                jQuery('.footable-first-column').addClass('paddingrightpulldown');
                jQuery('.footable-last-column').addClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
                jQuery('.dropdown-button').addClass('paddingleftpulldown');
            } else {
                jQuery('.footable-first-column').removeClass('paddingrightpulldown');
                jQuery('.footable-last-column').removeClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').removeClass('paddingrightpulldown');
                jQuery('.dropdown-button').removeClass('paddingleftpulldown');
            }
        });
    },

    DpAccountSummaryUX5_onload: function() {
        var var1 = jQuery(".stage3_downloadnav").css("width", "285px");
        var1.css('float', right);
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 600) {
            jQuery('.footable-first-column').addClass('paddingrightpulldown');
            jQuery('.footable-last-column').addClass('paddingrightpulldown');
            jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
            jQuery('.dropdown-button').addClass('paddingleftpulldown');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 600) {
                jQuery('.footable-first-column').addClass('paddingrightpulldown');
                jQuery('.footable-last-column').addClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
                jQuery('.dropdown-button').addClass('paddingleftpulldown');
            } else {
                jQuery('.footable-first-column').removeClass('paddingrightpulldown');
                jQuery('.footable-last-column').removeClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').removeClass('paddingrightpulldown');
                jQuery('.dropdown-button').removeClass('paddingleftpulldown');
            }
        });
    },

    LnAccountSummaryUX5_onload: function() {
        var var1 = jQuery(".stage3_downloadnav").css("width", "252px");
        var1.css('float', right);
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 600) {
            jQuery('.footable-first-column').addClass('paddingrightpulldown');
            jQuery('.footable-last-column').addClass('paddingrightpulldown');
            jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
            jQuery('.dropdown-button').addClass('paddingleftpulldown');
            jQuery(".stage3_downloadnav").css('float', 'none');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 600) {
                jQuery('.footable-first-column').addClass('paddingrightpulldown');
                jQuery('.footable-last-column').addClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').addClass('paddingrightpulldown');
                jQuery('.dropdown-button').addClass('paddingleftpulldown');
                jQuery(".stage3_downloadnav").css('float', 'none');
            } else {
                jQuery('.footable-first-column').removeClass('paddingrightpulldown');
                jQuery('.footable-last-column').removeClass('paddingrightpulldown');
                jQuery('.HW_textwithpadding').removeClass('paddingrightpulldown');
                jQuery('.dropdown-button').removeClass('paddingleftpulldown');
                jQuery(".stage3_downloadnav").css('float', right);
            }
        });
    },

    StateCodesListUX5_onload: function() {
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 750) {
            jQuery('.tableoverflowwrapperhw').css('overflow-y', 'hidden');
        } else {
            jQuery('.tableoverflowwrapperhw').css('overflow-y', 'auto');

        }
        jQuery('.ui-dialog .pageLeftContainer .stage3_detailspanel').attr('style', 'border-top:1px solid #d4d4d4 !important');
    },

    CityCodesListUX5_onload: function() {
        jQuery('.ui-dialog .pageLeftContainer .stage3_detailspanel').attr('style', 'border-top:1px solid #d4d4d4 !important');
    },
    BranchCodeDetailsUX5_onload: function() {
        jQuery('.stage3_detailspanel').attr('style', 'margin-bottom:0px !important');
    },
    TemplateListUX5_onload: function() {
        jQuery('.tableoverflowwrapperhw').css('overflow-y', 'hidden');
    },
    ContextualLinksWidget_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery('.stage3_menuIdTextlink li a').css('overflow', 'hidden');
        var targetDivId = "";

        if (groupletId || groupletId != null || groupletId != "null") {
            targetDivId = "ParentDiv_" + groupletId;
        }

        if (jQuery('#' + targetDivId).parent().hasClass('container-nxtGenxtrasmall')) {

            jQuery('.stage3_menuIdTextlink li a').ellipsis({
                width: 226
            });
            convertComboboxes();

            jQuery(window).resize(function() {
                var vpWidth = viewport().width;
                //console.log(vpWidth);
                if (parseInt(vpWidth) <= 900) {
                    jQuery('.stage3_menuIdTextlink li a').ellipsis({
                        width: 226
                    });
                } else {
                    jQuery('.stage3_menuIdTextlink li a').ellipsis({
                        width: 226
                    });
                }

            });
        } else {
            jQuery('.stage3_menuIdTextlink li a').ellipsis({
                width: 193
            });
            convertComboboxes();
            jQuery(window).resize(function() {
                var vpWidth = viewport().width;
                //console.log(vpWidth);
                if (parseInt(vpWidth) <= 900) {
                    //console.log("inside first if for width less than 732");
                    jQuery('.stage3_menuIdTextlink li a').ellipsis({
                        width: 226
                    });
                } else {

                    jQuery('.stage3_menuIdTextlink li a').ellipsis({
                        width: 186
                    });
                }



            });
        }
    },
    FundTheGoal_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js");
        feba.domManipulator.loadScript("scripts/module/transaction/InitiateCounterpartyTypeCheck.js");
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        var fgName = "";
        feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
        var elementId = 'TranRequestManagerFG\\.MULTI_SELECT_VAL';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            fgName = groupletId + Constants.GROUPLET_ELEMENT_SEPERATOR + feba.js.transaction.getGroupletFgName(groupletId);
            elementId = groupletId + "\\:" + elementId;
        } else {
            fgName = feba.js.transaction.getFgName();
        }
        commonCall(fgName);
        jQuery([id = "+elementId+"]).change(function() {
            commonCall(fgName);

        });
        feba.js.transaction.bindCounterpartyChanges(groupletId);
    },

    DashboardMailViewInboxUX5_onload: function() {

        var spanComposeLink = jQuery("#widgetBar_WMAILUX5_holderDiv .view-all-link a.composeLinkStyle").parent();
        if (jQuery(".mailsBox .alertHeader").children().hasClass("view-all-link")) {
            jQuery(".mailsBox .alertHeader .view-all-link").remove();
        }
        spanComposeLink.insertAfter(jQuery(".mailsBox .alertHeader h5"));
        jQuery("[id*=':WidgetForm.Re1']").hide();
        jQuery("span.view-all-link a.composeLinkStyle").attr('style', 'position:relative;top:-50px;padding-' + right + ': 5px;');
        jQuery(".mailsBox .dynamicDataContentHolderDiv .widget-small").attr('style', 'position:relative;top:-45px;');

        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 639) {
            jQuery(".ellipsis").ellipsis({
                width: 480
            });
        } else {
            jQuery(".ellipsis").ellipsis({
                width: 280
            });
        }

        jQuery(window).resize(function() {
            var vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".ellipsis").ellipsis({
                    width: 480
                });
            } else {
                jQuery(".ellipsis").ellipsis({
                    width: 280
                });
            }


        });
    },

    LnAccountSummaryWidgetViewAllUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog .pagination-wrapper").attr('style', 'border:none !important');
            /* Added by Upendra Start */
            jQuery(".ui-widget-content").addClass('ui-widget-content-alignment');
            /*var vpWidth = viewport().width;
            if((parseInt(vpWidth)<=699 && parseInt(vpWidth)>=480))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':30px !important');
                                                }
                        else if((parseInt(vpWidth)<=1200 && parseInt(vpWidth)>=700))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':60px !important');
                                                }
                                                else
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':90px !important');
                                                }
                                                jQuery(window).resize(function()
                                                {
            vpWidth = viewport().width;
           if((parseInt(vpWidth)<=699 && parseInt(vpWidth)>=480))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':30px !important');
                                                }
                        else if((parseInt(vpWidth)<=1200 && parseInt(vpWidth)>=700))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':60px !important');
                                                }
                                                else
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':90px !important');
                                                }
                                                });*/
            /* Added by Upendra End */
        }, 0);
    },
    ImportACHDataConfirmationUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        feba.domManipulator.loadScript("scripts/module/transaction/ACHPreviewConfirmationTabUX5.js");
        feba.js.common.displayWarning = "N";
        var id = "";
        var tabName = "";
        var grpId = "";
        var fgName = "";
        if (groupletId == null || groupletId == "" || groupletId == "undefined") {
            grpId = "";
            fgName = document.getElementById('FORMSGROUP_ID__').value;
        } else {
            grpId = groupletId + ":";
            fgName = document.getElementById(grpId + "GROUPLET_FORMSGROUP_ID__").value;
        }

        if (document.getElementById(grpId + fgName + ".ENABLE_TAB") != null) {
            tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB").value;
        } else {
            grpId = groupletId + ":";

            if (jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']") != null && jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1] != null) {
                fgName = jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1].value;
                tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB").value;
            }
        }
        setRecordtabchange(tabName, groupletId, fgName);
        jQuery(".pagination-wrapper").attr('style', 'border-top : 1px solid #D4D4D4 !important');
        jQuery(".tablesimpletextright").attr('style', 'font-size : 14px !important ; padding-top : 0px !important');
        jQuery(".stage3_detailspanel").attr('style', 'padding-bottom:0px !important;margin-bottom:-2px !important');
        jQuery(".row").attr('style', 'margin-bottom:0px !important');
        jQuery(".stage3_moredetailsright").attr('style', 'float : none !important ; border : 1px solid #e0e0e0 !important ; border-' + left + ' : none !important ; margin-bottom : -1px !important');
        jQuery(".stage3_leftrightmainpanel").attr('style', 'padding-bottom:0px !important');
        jQuery("a.collapsiblelink span.collapsible-header").attr('style', ' padding-' + left + ' : 0px !important');
        var isIE = /*@cc_on!@*/ false || !!document.documentMode;
        if (isIE) {
            jQuery(".icon-added-large").attr('style', 'padding:0px 6px !important');
            jQuery(".icon-deleted-large").attr('style', 'padding:0px 6px !important');
            jQuery(".icon-updated-large").attr('style', 'padding:0px 6px !important');
        }
        setTimeout(function() {
            jQuery('.collapsiblelink').each(function(index) {
                var collapsibleContainerDiv = jQuery(this).parent().next();
                var collapsibleClass = collapsibleContainerDiv.attr('class');
                if (collapsibleContainerDiv != null && typeof collapsibleClass !== typeof undefined && collapsibleClass.match('collapsibleContainerDiv')) {
                    jQuery(collapsibleContainerDiv).removeClass('collapsible-body');
                }
            });

        }, 0);
        materializeTabEffects();
        var processMode = document.getElementById(grpId + fgName + ".PROCESS_MODE_SELECTION").value;
        var addedListSize = document.getElementById(grpId + fgName + ".TOTAL_NO_OF_RECORDS_ADDED").value;
        var updatedListSize = document.getElementById(grpId + fgName + ".TOTAL_NO_OF_RECORDS_UPDATED").value;
        var deletedListSize = document.getElementById(grpId + fgName + ".TOTAL_NO_OF_RECORDS_DELETED").value;
        if (processMode == 'A') {
            jQuery(".stage3_rightwithmargin").attr('style', 'margin-' + right + ' : 7px !important');
        } else if (processMode == 'U' && (updatedListSize == '0' || updatedListSize == "")) {
            jQuery(".stage3_rightwithmargin").attr('style', 'margin-' + right + ' : 7px !important');
        } else if (processMode == 'U') {
            jQuery(".stage3_rightwithmargin").attr('style', 'margin-' + right + ' : 11px !important');
        } else if (processMode == 'I') {
            jQuery(".stage3_rightwithmargin").attr('style', 'margin-' + right + ' : 11px !important');
        } else if (processMode == 'D' && (deletedListSize == 0 || deletedListSize == "")) {
            jQuery(".stage3_rightwithmargin").attr('style', 'margin-' + right + ' : 7px !important');
        } else {
            jQuery(".stage3_rightwithmargin").attr('style', 'margin-' + right + ' : 24px !important');
        }

    },

    DpAccountSummaryWidgetViewAllUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog .pagination-wrapper").attr('style', 'border:none !important');
            /* Added by Upendra Start */
            jQuery(".ui-widget-content").addClass('ui-widget-content-alignment');
            /*var vpWidth = viewport().width;
            if((parseInt(vpWidth)<=699 && parseInt(vpWidth)>=480))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':30px !important');
                                                }
                        else if((parseInt(vpWidth)<=1200 && parseInt(vpWidth)>=700))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':60px !important');
                                                }
                                                else
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':90px !important');
                                                }
                                                jQuery(window).resize(function()
                                                {
            vpWidth = viewport().width;
           if((parseInt(vpWidth)<=699 && parseInt(vpWidth)>=480))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':30px !important');
                                                }
                        else if((parseInt(vpWidth)<=1200 && parseInt(vpWidth)>=700))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':60px !important');
                                                }
                                                else
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':90px !important');
                                                }
                                                });*/
            /* Added by Upendra End */
        }, 0);
    },
    OpAccountsSummaryWidgetViewAllUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog .pagination-wrapper").attr('style', 'border:none !important');
            /* Added by Upendra Start */
            jQuery(".ui-widget-content").addClass('ui-widget-content-alignment');
            /*var vpWidth = viewport().width;
            if((parseInt(vpWidth)<=699 && parseInt(vpWidth)>=480))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':30px !important');
                                                }
                        else if((parseInt(vpWidth)<=1200 && parseInt(vpWidth)>=700))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':60px !important');
                                                }
                                                else
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':90px !important');
                                                }
                                                jQuery(window).resize(function()
                                                {
            vpWidth = viewport().width;
           if((parseInt(vpWidth)<=699 && parseInt(vpWidth)>=480))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':30px !important');
                                                }
                        else if((parseInt(vpWidth)<=1200 && parseInt(vpWidth)>=700))
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':60px !important');
                                                }
                                                else
                                                {
                                                jQuery(".more.dropdown-button").attr('style', 'padding-'+left+':90px !important');
                                                }
                                                });*/
            /* Added by Upendra End */
        }, 0);
    },
    LnAccountDetailsWidgetUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
        }, 0);
    },

    DpAccountDetailsWidgetUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
        }, 0);
    },
    OpAccountDetailsWidgetUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
        }, 0);
    },
    CCDetailsWidgetUX5_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
            jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
        }, 0);
    },

    CalendarWidgetUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            if (jQuery('#MODAL_VIEW_CONTAINER').find('#paintCalendar').length > 0) {
                jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
                var textsubheading = getMessage("MyPaymentSubHeadingLevel2");
                var overlaySubHeading = jQuery("<span class='ui-dialog-subheading-level1'>" + textsubheading + "</span>");
                jQuery(overlaySubHeading).appendTo(jQuery(".ui-dialog-titlebar"));
            }

        }, 0);

        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");

        /* Browser specifixc fix for safari as calendar widget is getting distorted
         * at lower resolution range */
        var vpWidth = viewport().width;
        if (jQuery.browser.safari && vpWidth < 640) {
            jQuery(".febacal-container-div .feba-cal-container-table-wrapper").css("width", "281px");
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (jQuery.browser.safari && vpWidth < 640) {
                jQuery(".febacal-container-div .feba-cal-container-table-wrapper").css("width", "281px");
            } else {
                jQuery(".febacal-container-div .feba-cal-container-table-wrapper").removeAttr("style");
            }
        });
        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
    },

    DashboradMyPaymentsUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/ria/visualeffects/NmaterializeFEBACalendar.js");
    },

    DashBoardMailViewUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".ellipsis").ellipsis({
            width: 250
        });
        handleAttachmentsOnLoad(".rowwithheight", groupletId);
    },
    DashboardMailAttachmentUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/ria/visualeffects/jquery.filestyle.js");
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery("input[type=file]").filestyle({
            image: imagePath + "/db_icons_browse_attach.png",
            imageheight: 12,
            imagewidth: 12,
            width: 140
        });
        jQuery(".ellipsis").ellipsis({
            width: 120
        });

    },

    MailAttachmentUX5_onload: function() {
        jQuery('.formbtn_last').css('padding-top', '4px');
        jQuery('.errorCodeWrapper').css('width', '80%');
        jQuery('.HW_formbtn_UX5').css('margin-top', '6px');
        jQuery('#HREF_printPreview, #HREF_help').addClass('helpAlignMessageCenter');
        if (navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0) {
            /* Microsoft Internet Explorer detected in. */
            jQuery('.width79percent_navigationpanel').attr('style', 'border-' + left + ':none !important;');
        }
    },
    MailAttachmentListUX5_onload: function() {
        jQuery('.stage3_listingdetails').addClass('listingdetailborders');
        jQuery('.errorCodeWrapper').css('width', '80%');
        if (navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0) {
            /* Microsoft Internet Explorer detected in. */
            jQuery('.width79percent_navigationpanel').attr('style', 'border-' + left + ':none !important;');
        }
    },
    RetailUserDashboard_onload: function() {

        //This function is for WidgetBar of Dashboard
        //'maxLinkedWidgetsLimit' is defined in PageMarguetag.java
        if (!console) console = {
            log: function() {}
        };

        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");

        if (document.createStyleSheet) {
            document.createStyleSheet("L001/consumer/theme/jcarousel_styles.css");
        } else {
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L001/consumer/theme/jcarousel_styles.css" type="text/css" />');
        }
        if ("undefined" !== typeof(maxLinkedWidgetsLimit)) {
            setTimeout(function() {
                feba.domManipulator.getElementById("widgetListParent").jcarousel({
                    heightWhenHidden: 58,
                    loadHidden: false,
                    vertical: true,
                    size: maxLinkedWidgetsLimit,
                    scroll: 1,
                    itemFallbackDimension: 300,
                    initCallback: function() {
                        jQuery(".jcarousel-item a img").css({
                            'visibility': 'visible'
                        });
                    }
                });
            }, 0);
        }

        /* Widget Bar drag in drag out start*/
        var widgetBarOpenCloseFlag = 1;
        setTimeout(function() {
            feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
        }, 0);
        feba.domManipulator.getElementById("widgetBar_pullbtn").click(function() {
            if (widgetBarOpenCloseFlag == 2) {
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_close');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_open');
                widgetBarOpenCloseFlag = 1;
                feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
                feba.domManipulator.getElement('.jcarousel-skin-tango').addClass('hideElement');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("ExpandWidgetBar"));

                return;
            }
            if (widgetBarOpenCloseFlag == 1) {
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_close');
                widgetBarOpenCloseFlag = 2;
                feba.domManipulator.getElement('.jcarousel-skin-tango').show();
                feba.domManipulator.getElement('.hideElement').removeClass('hideElement');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn_reverse.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("CollapseWidgetBar"));
                jQuery('.jcarousel-prev').attr('title', getMessage("ScrollUp"));
                jQuery('.jcarousel-next').attr('title', getMessage("ScrollDown"));
                return;
            }

        });

        feba.domManipulator.loadScript("scripts/module/user/WidgetAlignmentParametersForDashboard.js");
        initDashboardParams();
        feba.domManipulator.loadScript("scripts/module/user/WidgetAlignmentFunctionsForDashboard.js");
        for (var i = 0; i < containerParametersObjectArray.length; i++) {
            reDistribute(containerParametersObjectArray[i]);
        }
        /* End */

        //associate function on browser resize
        jQuery(window).resize(function() {
            //Print current window width for testing
            var viewPortWidth = jQuery('.container').width();
            //Modify current total width to current width
            containerTotalRowWidthMap.get('febaContainer').totalRowWidth = viewPortWidth;
            //Trigger autoalign function
            for (var i = 0; i < containerParametersObjectArray.length; i++) {
                reDistribute(containerParametersObjectArray[i]);
            }
        });

    },
    RetailUserDashboardUX5_onload: function() {


        alignDashboardContents();

        jQuery("[id='PgHeading']").addClass('hideElement');
        /*Warning Message resize for the Ticket id 779543 */
        var reportWidth = viewport().width;
        if (reportWidth >= 640) {
            /*phani commented for dashboard error message widgth
             *jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style','position:relative;top:35px;margin-'+left+':9px;width:98.5%');*/
            jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;margin-' + left + ':11px;width:98.3%');
            /* for success message*/
            jQuery("#MessageDisplay_TABLE.errorMsgPositionAlign").attr('style', 'left:10px;width:98.3% !important');
        } else {
            jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;width:98.5%');
            if (reportWidth >= 320 && reportWidth <= 450) {
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:50px;width:100%;padding-bottom:35px');
            }
        }
        jQuery(window).resize(function() {
            reportWidth = viewport().width;
            if (reportWidth >= 640) {
                /*phani commented for dashboard error message widgth
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style','position:relative;top:35px;margin-'+left+':9px;width:98.5%');*/
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;margin-' + left + ':11px;width:98.3%');
                /* for success message*/
                jQuery("#MessageDisplay_TABLE.errorMsgPositionAlign").attr('style', 'left:10px;width:98.3% !important');
            } else {
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;width:98.5%');
                if (reportWidth >= 320 && reportWidth <= 450) {
                    jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:50px;width:100%;padding-bottom:35px');
                }
            }
        });
        /* End */
        jQuery("#MessageDisplay_TABLE.errorDisplayStyle .errorCodeWrapper").attr('style', 'position:relative;top:6px');



        jQuery(".groupletButtons-menu").removeAttr('title');
        if (!console) console = {
            log: function() {}
        };
        //This function is for WidgetBar of Dashboard
        //'maxLinkedWidgetsLimit' is defined in PageMarguetag.java
        feba.domManipulator.documentReady(addsUX3scroll);
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/materializePageMaintenanceFunctions.js");

        if (document.createStyleSheet) {
            document.createStyleSheet("L001/consumer/theme/jcarousel_styles.css");
        } else {
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L001/consumer/theme/jcarousel_styles.css" type="text/css" />');
        }
        if ("undefined" !== typeof(maxLinkedWidgetsLimit)) {
            setTimeout(function() {
                feba.domManipulator.getElementById("widgetListParent").jcarousel({
                    heightWhenHidden: 58,
                    loadHidden: false,
                    vertical: true,
                    size: maxLinkedWidgetsLimit,
                    scroll: 1,
                    itemFallbackDimension: 300,
                    initCallback: function() {
                        jQuery(".jcarousel-item a img").css({
                            'visibility': 'visible'
                        });
                    }
                });

            }, 0);
        }


        /* Widget Bar drag in drag out start*/
        var widgetBarOpenCloseFlag = 1;
        setTimeout(function() {
            feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
        }, 0);
        feba.domManipulator.getElementById("widgetBar_pullbtn").click(function() {
            if (widgetBarOpenCloseFlag == 2) {
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_close');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_open');
                widgetBarOpenCloseFlag = 1;
                feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
                feba.domManipulator.getElement('.jcarousel-skin-tango').addClass('hideElement');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("ExpandWidgetBar"));

                return;
            }
            if (widgetBarOpenCloseFlag == 1) {
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_close');
                widgetBarOpenCloseFlag = 2;
                feba.domManipulator.getElement('.jcarousel-skin-tango').show();
                feba.domManipulator.getElement('.hideElement').removeClass('hideElement');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn_reverse.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("CollapseWidgetBar"));
                jQuery('.jcarousel-prev').attr('title', getMessage("ScrollUp"));
                jQuery('.jcarousel-next').attr('title', getMessage("ScrollDown"));
                return;
            }

        });
        setTimeout(function() {
            if (jQuery("#widLibWrapper") != undefined && jQuery("#widLibWrapper") != "") {
                if (jQuery("#widLibWrapper").length > 0) {
                    jQuery("#widLibWrapper").addClass("errorMsgPositionAlign");
                }
            }
        }, 1000);

        feba.domManipulator.loadScript("scripts/module/user/materializeWidgetAlignmentParametersForDashboard.js");
        var totalRowWidth = "754";
        initDashboardParams(totalRowWidth);
        feba.domManipulator.loadScript("scripts/module/user/materializeWidgetAlignmentFunctionsForDashboard.js");
        for (var i = 0; i < containerParametersObjectArray.length; i++) {
            reDistribute(containerParametersObjectArray[i]);
        }
        viewPortOneExecuted = "N";
        viewPortTwoExecuted = "N";
        viewPortThreeExecuted = "N";
        viewPortFourExecuted = "N";

        /* End */
        //associate function on browser resize
        jQuery(window).resize(function() {
            if (true) {
                return;
            }
            //Print current window width for testing
            var viewPortWidth = jQuery('.container').width();
            //Modify current total width to current width
            //containerTotalRowWidthMap.get('febaContainer').totalRowWidth=viewport().width;
            containerTotalRowWidthMap.get('febaContainer').totalRowWidth = viewPortWidth;
            //Trigger autoalign function
            /**RAVIRAJ START**/

            var windowWidth = viewport().width; /*Query(window).width();*/
            if (parseInt(windowWidth) < 900 && parseInt(windowWidth) > 639) {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length == 1) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currContainer).css('width', '100%');
                        if (jQuery(currChild).hasClass('widget-small')) {
                            jQuery(currChild).css('width', '48%');
                        } else {
                            jQuery(currChild).css('width', '100%');

                        }

                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    } else if (currContainerChildren.length == 2) {
                        /* var currChild=jQuery(currContainer).children('.widget')[0];
                                                 	jQuery(currContainer).css('width','100%');
	                                                if(jQuery(currChild).hasClass('widget-small')){
	                                                 	jQuery(currChild).css('width','48%');
	                                                 }else{
	                                                 	jQuery(currChild).css('width','100%');
	                                                 }
                                                 	currChild=jQuery(currContainer).children('.widget')[1];
	                                                 if(jQuery(currChild).hasClass('widget-small')){
	                                                 	jQuery(currChild).css('width','48%');
	                                                 } */
                        var currChildSmall = jQuery(currContainer).children('.widget-small');
                        if (currChildSmall.length == 2) {
                            var currChildSmall = jQuery(currContainer).children('.widget-small')[0];
                            jQuery(currChildSmall).css('width', '48%');
                            currChildSmall = jQuery(currContainer).children('.widget-small')[1];
                            jQuery(currChildSmall).css('width', '48%');
                        } else {
                            var currMediumChild = jQuery(currContainer).children('.widget-medium');
                            jQuery(currMediumChild).css('width', '63%');
                            var currSmallChild = jQuery(currContainer).children('.widget-small');
                            jQuery(currSmallChild).css('width', '32%');
                        }
                        jQuery(containersOnPage[i]).css('width', '100%');
                    }
                }
            } else if (parseInt(windowWidth) < 640 && parseInt(windowWidth) > 479) {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length == 1) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currChild).css('width', '100%');
                        jQuery(currContainer).css('width', '100%');
                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    } else if (currContainerChildren.length == 2) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currChild).css('width', '100%');
                        jQuery(currContainer).css('width', '100%');
                        currChild = jQuery(currContainer).children('.widget')[1];
                        jQuery(currChild).css('width', '100%');
                    }
                }
            } else if (parseInt(windowWidth) > 1000) {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length > 0) {
                        var children = jQuery(currContainer).children('.widget');
                        for (w = 0; w < children.length; w++) {
                            var currChildElementWidget = children[w];

                            jQuery(currChildElementWidget).attr('style', '');
                        }

                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    }

                }
            } else {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length == 1) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currChild).css('width', '100%');
                        jQuery(currContainer).css('width', '100%');
                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    } else if (currContainerChildren.length == 2) {
                        var currChildSmall = jQuery(currContainer).children('.widget-small');
                        if (currChildSmall.length == 2) {
                            var currChildSmall = jQuery(currContainer).children('.widget-small')[0];
                            jQuery(currChildSmall).css('width', '48%');
                            currChildSmall = jQuery(currContainer).children('.widget-small')[1];
                            jQuery(currChildSmall).css('width', '48%');
                        } else {
                            var currMediumChild = jQuery(currContainer).children('.widget-medium');
                            jQuery(currMediumChild).css('width', '63%');
                            var currSmallChild = jQuery(currContainer).children('.widget-small');
                            jQuery(currSmallChild).css('width', '32%');
                            jQuery(containersOnPage[i]).css('width', '100%');
                        }


                    }
                }

            }


            /**RAVIRAJ END**/
            var triggerRed = "Y";
            currViewPort = parseInt(viewport().width);
            if (currViewPort > 900 && viewPortOneExecuted == "N") {
                viewPortTwoExecuted = "N";
                viewPortOneExecuted = "Y";
                viewPortThreeExecuted = "N";
                viewPortFourExecuted = "N";
                for (var i = 0; i < containerParametersObjectArray.length; i++) {
                    reDistribute(containerParametersObjectArray[i]);
                }
            } else if (currViewPort < 900 && currViewPort > 639 && viewPortTwoExecuted == "N") {
                viewPortTwoExecuted = "Y";
                viewPortOneExecuted = "N";
                viewPortThreeExecuted = "N";
                viewPortFourExecuted = "N";
                for (var i = 0; i < containerParametersObjectArray.length; i++) {
                    reDistribute(containerParametersObjectArray[i]);
                }
            } else if (currViewPort < 640 && currViewPort > 479 && viewPortThreeExecuted == "N") {
                viewPortTwoExecuted = "N";
                viewPortOneExecuted = "N";
                viewPortThreeExecuted = "Y";
                viewPortFourExecuted = "N";
                for (var i = 0; i < containerParametersObjectArray.length; i++) {
                    reDistribute(containerParametersObjectArray[i]);
                }
            }

        });
        /*fix for ticket:780021*/
        /* commented - main menu link is overlayed by other menus
        if((jQuery.browser.safari) && (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) && navigator.userAgent.match(/like Mac OS X/i)){
        	jQuery('.main-menu-string').css('margin-top','5px');
        	jQuery('.main-menu-string').css('position','absolute');

        	jQuery('.menu__level').niceScroll().resize({horizrailenabled:false});

        }*/

    },
    CashflowUX5_onload: function(groupletId) {
        var response = feba.domManipulator.getGroupletSpecificElement("cashflow", groupletId).innerHTML;
        feba.domManipulator.loadScript("scripts/analytics/lib/d3/d3.js");
        feba.domManipulator.loadScript("scripts/analytics/lib/nv.d3/nv.d3.js");
        feba.domManipulator.loadScript("scripts/analytics/fvm.js");
        feba.domManipulator.loadScript("scripts/analytics/fvmlib.js");

        if (document.createStyleSheet) {
            document.createStyleSheet("scripts/analytics/lib/bootstrap-3.3.5/css/bootstrap.css");
            document.createStyleSheet("scripts/analytics/lib/nv.d3/nv.d3.css");
            document.createStyleSheet("scripts/analytics/fvm.css");
        } else {
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/bootstrap-3.3.5/css/bootstrap.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/nv.d3/nv.d3.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/fvm.css" type="text/css" />');
        }
        var responseJson = JSON.parse(response);
        displayVisual(responseJson, "CASHFLOW", groupletId);
    },
    PeerAnalysisUX5_onload: function(groupletId) {
        var response = feba.domManipulator.getGroupletSpecificElement("peerAnalysis", groupletId).innerHTML;
        feba.domManipulator.loadScript("scripts/analytics/lib/d3/d3.js");
        feba.domManipulator.loadScript("scripts/analytics/lib/nv.d3/nv.d3.js");
        feba.domManipulator.loadScript("scripts/analytics/fvm.js");
        feba.domManipulator.loadScript("scripts/analytics/fvmlib.js");

        if (document.createStyleSheet) {
            document.createStyleSheet("scripts/analytics/lib/bootstrap-3.3.5/css/bootstrap.css");
            document.createStyleSheet("scripts/analytics/lib/nv.d3/nv.d3.css");
            document.createStyleSheet("scripts/analytics/fvm.css");
        } else {
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/bootstrap-3.3.5/css/bootstrap.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/nv.d3/nv.d3.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/fvm.css" type="text/css" />');

        }
        response = JSON.parse(response);
        var peerAnalysisResponse = response.PeerAnalysis;
        displayVisual(peerAnalysisResponse, "PEERS", groupletId);

    },
    SpendAnalyticsUX5_onload: function(groupletId) {
        var response = feba.domManipulator.getGroupletSpecificElement("spendAnalysis", groupletId).innerHTML;
        feba.domManipulator.loadScript("scripts/analytics/lib/d3/d3.js");
        feba.domManipulator.loadScript("scripts/analytics/lib/nv.d3/nv.d3.js");
        feba.domManipulator.loadScript("scripts/analytics/fvm.js");
        feba.domManipulator.loadScript("scripts/analytics/fvmlib.js");
        feba.domManipulator.loadScript("scripts/analytics/lib/jquery/dataTables/js/jquery.dataTables.min.js");
        feba.domManipulator.loadScript("scripts/analytics/lib/jquery/dataTables/js/dataTables.jqueryui.min.js");
        feba.domManipulator.loadScript("scripts/analytics/lib/jquery/dataTables/js/dataTables.bootstrap.min.js");
        if (document.createStyleSheet) {
            document.createStyleSheet("scripts/analytics/lib/bootstrap-3.3.5/css/bootstrap.css");
            document.createStyleSheet("scripts/analytics/lib/nv.d3/nv.d3.css");
            document.createStyleSheet("scripts/analytics/lib/jquery/dataTables/css/dataTables.jqueryui.min.css");
            document.createStyleSheet("scripts/analytics/lib/jquery/dataTables/css/jquery.dataTables.min.css");
            document.createStyleSheet("scripts/analytics/fvm.css");
        } else {
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/bootstrap-3.3.5/css/bootstrap.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/nv.d3/nv.d3.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/jquery/dataTables/css/dataTables.jqueryui.min.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/lib/jquery/dataTables/css/jquery.dataTables.min.css" type="text/css" />');
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="scripts/analytics/fvm.css" type="text/css" />');
        }
        displayVisual(response, "SPENDANALYTICS", "spendAnalysisWidgetDiv");
    },
    CorporateUserDashboardUX5_onload: function() {


        alignDashboardContents();

        jQuery("[id='PgHeading']").addClass('hideElement');
        /*Warning Message resize for the Ticket id 779543 */
        var reportWidth = viewport().width;
        if (reportWidth >= 640) {
            /*phani commented for dashboard error message widgth
             * jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style','position:relative;top:35px;margin-'+left+':9px;width:98.5%');*/
            jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;margin-' + left + ':11px;width:98.3%');
        } else {
            jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;width:98.5%');
            if (reportWidth >= 320 && reportWidth <= 450) {
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:50px;width:100%;padding-bottom:35px');
            }
        }
        jQuery(window).resize(function() {
            reportWidth = viewport().width;
            if (reportWidth >= 640) {
                /*phani commented for dashboard error message widgth
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style','position:relative;top:35px;margin-'+left+':9px;width:98.5%');*/
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;margin-' + left + ':11px;width:98.3%');
            } else {
                jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:35px;width:98.5%');
                if (reportWidth >= 320 && reportWidth <= 450) {
                    jQuery("#MessageDisplay_TABLE.errorDisplayStyle").attr('style', 'position:relative;top:50px;width:100%;padding-bottom:35px');
                }
            }
        });
        /* End */
        jQuery("#MessageDisplay_TABLE.errorDisplayStyle .errorCodeWrapper").attr('style', 'position:relative;top:6px');





        jQuery(".groupletButtons-menu").removeAttr('title');
        if (!console) console = {
            log: function() {}
        };
        feba.domManipulator.documentReady(addsUX3scroll);
        //This function is for WidgetBar of Dashboard
        //'maxLinkedWidgetsLimit' is defined in PageMarguetag.java

        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/materializePageMaintenanceFunctions.js");

        if (document.createStyleSheet) {
            document.createStyleSheet("L001/consumer/theme/jcarousel_styles.css");
        } else {
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L001/consumer/theme/jcarousel_styles.css" type="text/css" />');
        }
        if ("undefined" !== typeof(maxLinkedWidgetsLimit)) {
            setTimeout(function() {
                feba.domManipulator.getElementById("widgetListParent").jcarousel({
                    heightWhenHidden: 58,
                    loadHidden: false,
                    vertical: true,
                    size: maxLinkedWidgetsLimit,
                    scroll: 1,
                    itemFallbackDimension: 300,
                    initCallback: function() {
                        jQuery(".jcarousel-item a img").css({
                            'visibility': 'visible'
                        });
                    }
                });

            }, 0);
        }

        /* Widget Bar drag in drag out start*/
        var widgetBarOpenCloseFlag = 1;
        setTimeout(function() {
            feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
        }, 0);
        feba.domManipulator.getElementById("widgetBar_pullbtn").click(function() {
            if (widgetBarOpenCloseFlag == 2) {
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_close');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_open');
                widgetBarOpenCloseFlag = 1;
                feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
                feba.domManipulator.getElement('.jcarousel-skin-tango').addClass('hideElement');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("ExpandWidgetBar"));
                return;
            }
            if (widgetBarOpenCloseFlag == 1) {
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_close');
                widgetBarOpenCloseFlag = 2;
                feba.domManipulator.getElement('.jcarousel-skin-tango').show();
                feba.domManipulator.getElement('.hideElement').removeClass('hideElement');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn_reverse.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("CollapseWidgetBar"));
                jQuery('.jcarousel-prev').attr('title', getMessage("ScrollUp"));
                jQuery('.jcarousel-next').attr('title', getMessage("ScrollDown"));
                return;
            }

        });
        setTimeout(function() {
            if (jQuery("#widLibWrapper") != undefined && jQuery("#widLibWrapper") != "") {
                if (jQuery("#widLibWrapper").length > 0) {
                    jQuery("#widLibWrapper").addClass("errorMsgPositionAlign");
                }
            }
        }, 1000);

        feba.domManipulator.loadScript("scripts/module/user/materializeWidgetAlignmentParametersForDashboard.js");
        var totalRowWidth = "754";
        initDashboardParams(totalRowWidth);
        feba.domManipulator.loadScript("scripts/module/user/materializeWidgetAlignmentFunctionsForDashboard.js");
        for (var i = 0; i < containerParametersObjectArray.length; i++) {
            reDistribute(containerParametersObjectArray[i]);
        }
        /* End */
        viewPortOneExecuted = "N";
        viewPortTwoExecuted = "N";
        viewPortThreeExecuted = "N";
        viewPortFourExecuted = "N";
        //associate function on browser resize
        jQuery(window).resize(function() {

            if (true) {
                return;
            }

            //Print current window width for testing
            var viewPortWidth = jQuery('.container').width();
            //Modify current total width to current width
            //containerTotalRowWidthMap.get('febaContainer').totalRowWidth=viewport().width;
            containerTotalRowWidthMap.get('febaContainer').totalRowWidth = viewPortWidth;
            //Trigger autoalign function
            /**RAVIRAJ START**/

            var windowWidth = viewport().width; /*Query(window).width();*/
            if (parseInt(windowWidth) < 900 && parseInt(windowWidth) > 639) {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length == 1) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currContainer).css('width', '100%');
                        if (jQuery(currChild).hasClass('widget-small')) {
                            jQuery(currChild).css('width', '48%');
                        } else {
                            jQuery(currChild).css('width', '100%');

                        }

                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    } else if (currContainerChildren.length == 2) {
                        /* var currChild=jQuery(currContainer).children('.widget')[0];
                                                 	jQuery(currContainer).css('width','100%');
	                                                if(jQuery(currChild).hasClass('widget-small')){
	                                                 	jQuery(currChild).css('width','48%');
	                                                 }else{
	                                                 	jQuery(currChild).css('width','100%');
	                                                 }
                                                 	currChild=jQuery(currContainer).children('.widget')[1];
	                                                 if(jQuery(currChild).hasClass('widget-small')){
	                                                 	jQuery(currChild).css('width','48%');
	                                                 } */
                        var currChildSmall = jQuery(currContainer).children('.widget-small');
                        if (currChildSmall.length == 2) {
                            var currChildSmall = jQuery(currContainer).children('.widget-small')[0];
                            jQuery(currChildSmall).css('width', '48%');
                            currChildSmall = jQuery(currContainer).children('.widget-small')[1];
                            jQuery(currChildSmall).css('width', '48%');
                        } else {
                            var currMediumChild = jQuery(currContainer).children('.widget-medium');
                            jQuery(currMediumChild).css('width', '63%');
                            var currSmallChild = jQuery(currContainer).children('.widget-small');
                            jQuery(currSmallChild).css('width', '32%');
                            jQuery(containersOnPage[i]).css('width', '100%');
                        }
                    }
                }
            } else if (parseInt(windowWidth) < 640 && parseInt(windowWidth) > 479) {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length == 1) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currChild).css('width', '100%');
                        jQuery(currContainer).css('width', '100%');
                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    } else if (currContainerChildren.length == 2) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currChild).css('width', '100%');
                        jQuery(currContainer).css('width', '100%');
                        currChild = jQuery(currContainer).children('.widget')[1];
                        jQuery(currChild).css('width', '100%');
                    }
                }
            } else if (parseInt(windowWidth) > 1000) {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length > 0) {
                        var children = jQuery(currContainer).children('.widget');
                        for (w = 0; w < children.length; w++) {
                            var currChildElementWidget = children[w];

                            jQuery(currChildElementWidget).attr('style', '');
                        }

                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    }

                }
            } else {
                var containersOnPage = jQuery('.febaContainer');
                for (i = 0; i < containersOnPage.length; i++) {
                    var currContainer = containersOnPage[i];
                    var currContainerChildren = jQuery(currContainer).children('.widget');
                    if (currContainerChildren.length == 1) {
                        var currChild = jQuery(currContainer).children('.widget')[0];
                        jQuery(currChild).css('width', '100%');
                        jQuery(currContainer).css('width', '100%');
                        //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
                    } else if (currContainerChildren.length == 2) {
                        var currChildSmall = jQuery(currContainer).children('.widget-small');
                        if (currChildSmall.length == 2) {
                            var currChildSmall = jQuery(currContainer).children('.widget-small')[0];
                            jQuery(currChildSmall).css('width', '48%');
                            currChildSmall = jQuery(currContainer).children('.widget-small')[1];
                            jQuery(currChildSmall).css('width', '48%');
                        } else {
                            var currMediumChild = jQuery(currContainer).children('.widget-medium');
                            jQuery(currMediumChild).css('width', '63%');
                            var currSmallChild = jQuery(currContainer).children('.widget-small');
                            jQuery(currSmallChild).css('width', '32%');
                            jQuery(containersOnPage[i]).css('width', '100%');
                        }


                    }
                }

            }


            /**RAVIRAJ END**/
            var triggerRed = "Y";
            currViewPort = parseInt(viewport().width);
            if (currViewPort > 900 && viewPortOneExecuted == "N") {
                viewPortTwoExecuted = "N";
                viewPortOneExecuted = "Y";
                viewPortThreeExecuted = "N";
                viewPortFourExecuted = "N";
                for (var i = 0; i < containerParametersObjectArray.length; i++) {
                    reDistribute(containerParametersObjectArray[i]);
                }
            } else if (currViewPort < 900 && currViewPort > 639 && viewPortTwoExecuted == "N") {
                viewPortTwoExecuted = "Y";
                viewPortOneExecuted = "N";
                viewPortThreeExecuted = "N";
                viewPortFourExecuted = "N";
                for (var i = 0; i < containerParametersObjectArray.length; i++) {
                    reDistribute(containerParametersObjectArray[i]);
                }
            } else if (currViewPort < 640 && currViewPort > 479 && viewPortThreeExecuted == "N") {
                viewPortTwoExecuted = "N";
                viewPortOneExecuted = "N";
                viewPortThreeExecuted = "Y";
                viewPortFourExecuted = "N";
                for (var i = 0; i < containerParametersObjectArray.length; i++) {
                    reDistribute(containerParametersObjectArray[i]);
                }
            }

        });

        /*fix for ticket:780021*/
        /* commented - main menu link is overlayed by other menus
        if((jQuery.browser.safari) && (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) && navigator.userAgent.match(/like Mac OS X/i)){
        	jQuery('.main-menu-string').css('margin-top','5px');
        	jQuery('.main-menu-string').css('position','absolute');

        	jQuery('.menu__level').niceScroll().resize({horizrailenabled:false});

        }*/
    },
    CorporateUserDashboard_onload: function() {

        //This function is for WidgetBar of Dashboard
        //'maxLinkedWidgetsLimit' is defined in PageMarguetag.java
        if (!console) console = {
            log: function() {}
        };
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/materializePageMaintenanceFunctions.js");

        if (document.createStyleSheet) {
            document.createStyleSheet("L001/consumer/theme/jcarousel_styles.css");
        } else {
            feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L001/consumer/theme/jcarousel_styles.css" type="text/css" />');
        }
        if ("undefined" !== typeof(maxLinkedWidgetsLimit)) {
            setTimeout(function() {
                feba.domManipulator.getElementById("widgetListParent").jcarousel({
                    heightWhenHidden: 58,
                    loadHidden: false,
                    vertical: true,
                    size: maxLinkedWidgetsLimit,
                    scroll: 1,
                    itemFallbackDimension: 300,
                    initCallback: function() {
                        jQuery(".jcarousel-item a img").css({
                            'visibility': 'visible'
                        });
                    }
                });

            }, 0);
        }

        /* Widget Bar drag in drag out start*/
        var widgetBarOpenCloseFlag = 1;
        setTimeout(function() {
            feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
        }, 0);
        feba.domManipulator.getElementById("widgetBar_pullbtn").click(function() {
            if (widgetBarOpenCloseFlag == 2) {
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_close');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_open');
                widgetBarOpenCloseFlag = 1;
                feba.domManipulator.getElement('.jcarousel-skin-tango').hide();
                feba.domManipulator.getElement('.jcarousel-skin-tango').addClass('hideElement');

                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("ExpandWidgetBar"));

                return;
            }
            if (widgetBarOpenCloseFlag == 1) {
                feba.domManipulator.getElementById('widgetBar_outer').removeClass('widgetBar_outer_close');
                feba.domManipulator.getElementById('widgetBar_outer').addClass('widgetBar_outer_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').addClass('widgetBar_pullbtn_open');
                feba.domManipulator.getElementById('widgetBar_pullbtn').removeClass('widgetBar_pullbtn_close');
                widgetBarOpenCloseFlag = 2;
                feba.domManipulator.getElement('.jcarousel-skin-tango').show();
                feba.domManipulator.getElement('.hideElement').removeClass('hideElement');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('src', imagePath + '/widgetBar_btn_reverse.png');
                feba.domManipulator.getElement('.widgetBar_btn_span').attr('title', getMessage("CollapseWidgetBar"));
                jQuery('.jcarousel-prev').attr('title', getMessage("ScrollUp"));
                jQuery('.jcarousel-next').attr('title', getMessage("ScrollDown"));
                return;
            }

        });
        feba.domManipulator.loadScript("scripts/module/user/WidgetAlignmentParametersForDashboard.js");
        initDashboardParams();
        feba.domManipulator.loadScript("scripts/module/user/WidgetAlignmentFunctionsForDashboard.js");
        for (var i = 0; i < containerParametersObjectArray.length; i++) {
            reDistribute(containerParametersObjectArray[i]);
        }

        /* End */

    },
    WelcomeGreetingWidgetUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            //jQuery("[id='channelInfo']").removeClass('lastlogtext_grey');
            //jQuery("[id='channelInfo']").addClass('lastlogtext_grey_new');
            //jQuery("[id='"+groupletId+":PgHeading.Re1.C3']").css('margin-'+left+'','-77px');
            jQuery(".lastlogtext_grey").addClass('lastlogtext_grey_new');
            jQuery(".lastlogtext_grey").removeClass('lastlogtext_grey');
            jQuery(".bluelink_footer").css('padding-' + right + '', '0px');
            var greetingMsg = jQuery(".simpletext_wishMsg").text();
            if (greetingMsg.length >= 24) {
                jQuery(".simpletext_wishMsg").addClass('welcomeMsg');
            }

        }
    },

    FTTradeBookDetailsUX5_onload: function(groupletId) {
        jQuery(".ui-dialog .tableoverflowwrapperhw").attr('style', 'border-' + left + ' :0px solid #D4D4D4 !important');
        jQuery("[id='PageConfigurationMaster_FXTBK5W__1:ListingPanel_LeftContainer_Stage3_DetailsPanel18']").attr('style', 'width :99.85% !important; border-top:0px solid #E0E1E2 !important');
    },

    TranShortCutsUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery(".notifyBox .querytextleft_widget").css('padding-' + left + '', '20px');
            jQuery(".notifyBox .querytextright_widget").css('padding-' + right + '', '5px');
            jQuery(".notifyBox .querytextleft_widget").css('padding-top', '15px');
            jQuery(".notifyBox .querytextright_widget").css('padding-top', '10px');
            jQuery(".notifyBox .querytextright_widget").css('font-weight', 'bold');


            jQuery(".notifyBox .querytextleft_widget").css('padding-' + left + '', '20px');
            jQuery(".notifyBox .querytextright_widget").css('padding-' + right + '', '5px');
            jQuery(".notifyBox .querytextleft_widget").css('padding-top', '15px');
            jQuery(".notifyBox .querytextright_widget").css('padding-top', '10px');
            jQuery(".notifyBox .querytextright_widget").css('font-weight', 'bold');

            jQuery(".bluelink").css('float', left);
            jQuery('.addattachment').find('a.bluelink').removeAttr('style');
            jQuery(".notifyBox .searchsimpletext").addClass('notificationCount');
            jQuery(".notifyBox .dynamicDataContentHolderDiv .widget-small").attr('style', 'position:relative;top:2px;');
            //jQuery("[id='ParentDiv_CorporateUserDashboardUX5_W7__0']").css('top','0px');
            jQuery(".notifyBox .errorContentWrapper").css('max-height', '32px');
            jQuery(".notifyBox .errorContentWrapper").css('padding-' + left + '', '4px');
            var totalCount = 0;
            var countList = jQuery(".notificationCount");
            for (i = 0; i < countList.size(); i++) {
                var tempElement = countList[i];
                var count = jQuery(tempElement).text();
                totalCount = parseInt(totalCount) + parseInt(count);
            }
            if (feba.domManipulator.getElementById("LOGINMSG")[0].value == "true") {
                totalCount++;
            }
            if (feba.domManipulator.getElementById("TRANSMSG")[0].value == "true") {
                totalCount++;
            }
            /* STARTS Code for displaying the notification messages count*/
            if (jQuery("#notifyCount") != 'undefined') {
                jQuery("#notifyCount").text(totalCount);
                if (jQuery("#notifyCount").text() != '') {
                    jQuery(".unreadCountDash").css('visibility', 'visible');
                }
                if (jQuery("#notifyCount").text() == '0') {
                    jQuery(".unreadCountDash").css('visibility', 'hidden');
                }
            }
            /* ENDS Code for displaying the notification messages count*/
        }
    },
    /*Commented by Parvathy for PFM - START
     FinanceOverviewHomePageUX5_onload: function(groupletId){
    	 	var elementId = 'CATEGORY_WISE_LIST';
    	 	if(groupletId && groupletId!=null && groupletId.length>0 && groupletId!="undefined"){
    	 		elementId = groupletId+":"+elementId;
    	 	}
    		document.getElementById(elementId).disabled=true;
    		document.getElementById(elementId).className = "formbtn_search";
    		document.getElementById(elementId).parentNode.className ="HW_formbtn_financeovervw_grey";

    }, END*/
    /*Surej RWD for pfm module - START*/
    CategorywiseOverviewListUX5_onload: function(groupletId) {
        //jQuery("#PageConfigurationMaster_PFMMFOW__1\\:Details_TopLeftContainer_Stage33").css("border","1px solid #d3d3d3");
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33").css("border", "1px solid #d3d3d3");
    },
    ExpenseIncomeAnalysisListViewUX5_onload: function(groupletId) {
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33").css("border", "1px solid #d3d3d3");
    },
    BudgetAnalysisListViewUX5_onload: function(groupletId) {
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33").css("border", "1px solid #d3d3d3");
        jQuery(".listgreyrowtxtleftline_withpadding_grey.footable-visible.footable-first-column").css("padding-" + left + "", "3px");
    },
    BudgetMaintenanceExpenseAddUX5_onload: function(groupletId) {
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb4\\.C1").
        removeClass("stage3_blank_padding");
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb5\\.C1").
        removeClass("stage3_blank_padding");
        jQuery(".stage3_alertpanelheader_column").css("padding-" + left + "", "4px");
    },
    BudgetMaintenanceExpenseEditUX5_onload: function(groupletId) {
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb4\\.C1").
        removeClass("stage3_blank_padding");
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb5\\.C1").
        removeClass("stage3_blank_padding");
        jQuery(".stage3_alertpanelheader_column").css("padding-" + left + "", "4px");
    },
    BudgetMaintenanceIncomeAddUX5_onload: function(groupletId) {
        jQuery(".labelCol_text_brdr_number").css("width", "31px");
        jQuery(".labelcoltxtnumber").css("width", "28px");
        jQuery(".stage3_alertpanelheader_column").css("padding-" + left + "", "4px");
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb3").
        removeClass("stage3_inputpanel_alerts_PFM").addClass("stage3_inputpanel_alerts_IncomePFM");
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb6").
        removeClass("stage3_inputpanel_alerts_PFM").addClass("stage3_inputpanel_alerts_IncomePFM1");
    },
    BudgetMaintenanceIncomeEditUX5_onload: function(groupletId) {
        jQuery(".labelCol_text_brdr_number").css("width", "31px");
        jQuery(".labelcoltxtnumber").css("width", "28px");
        jQuery(".stage3_alertpanelheader_column").css("padding-" + left + "", "4px");
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb3").
        removeClass("stage3_inputpanel_alerts_PFM").addClass("stage3_inputpanel_alerts_IncomePFM");
        jQuery("#" + groupletId + "\\:DataEntry_LeftContainer_Stage3_ModalView2\\.Rb6").
        removeClass("stage3_inputpanel_alerts_PFM").addClass("stage3_inputpanel_alerts_IncomePFM1");
    },
    BudgetDetailsUX5_onload: function(groupletId) {
        /*For making the details value bold in budgets details */
        jQuery(".stage3_detailsrow").children(".searchsimpletext").css("font-family", "OpenSans-Semibold");
        jQuery(".stage3_rightdetailsnowidth").children(".simpletext").css("font-family", "OpenSans-Semibold");
        jQuery(".stage3_rightdetailsnowidth").children(".searchsimpletext1").css("font-family", "OpenSans-Semibold");
        jQuery(".stage3_detailsrow").children(".stage3_searchsimpletext_bold").css("font-family", "OpenSans-Semibold");
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33\\.Rd3\\.C6").children(
            ".searchsimpletext").css("font-family", "OpenSans-Semibold");
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33\\.Rd2\\.C4")
            .children(".stage3_searchsimpletext_bold").css("font-family", "OpenSans-Semibold");
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33\\.Rd4\\.C5")
            .children(".simpletext").css("font-family", "OpenSans-Semibold");
        jQuery("#" + groupletId + "\\:Details_TopLeftContainer_Stage33\\.Rd4\\.C5")
            .children(".simpletext").css("margin-" + left + "", "5px");
    },
    /*Surej RWD for pfm module - END*/
    BudgetHomepageListUX5_onload: function() {
        /*	incomeButtonDisable();\\commented as function definitions not present
        	expenseButtonDisable();*/
        jQuery(".tabNavItemIncome").click(function(e) {
            jQuery(".stage3_listingpaneldiv_Extended").attr('style', 'display :none');
            jQuery(".stage3_listingpaneldiv_small").attr('style', 'display :block');

            jQuery("[title='Income']").removeClass('tabNavItemIncome');
            jQuery("[title='Income']").addClass('tabNavItemIncome_Active');
            jQuery("[title='Expense']").removeClass('tabNavItemExpense');
            jQuery("[title='Expense']").addClass('tabNavItemExpense_Inactive');
            /*Manage categories second table was getting footable only on resize at lower resoln*/
            jQuery(function() {
                jQuery(window).resize();
            });
            return false;
        });

        /*pfm*/
        jQuery(".tabNavItemExpense").click(function(e) {
            jQuery(".stage3_listingpaneldiv_small").attr('style', 'display :none');
            jQuery(".stage3_listingpaneldiv_Extended").attr('style', 'display :block');

            jQuery("[title='Expense']").removeClass('tabNavItemExpense_Inactive');
            jQuery("[title='Expense']").addClass('tabNavItemExpense');
            jQuery("[title='Income']").removeClass('tabNavItemIncome_Active');
            jQuery("[title='Income']").addClass('tabNavItemIncome');
            /*Manage categories second table was getting footable only on resize at lower resoln*/
            jQuery(function() {
                jQuery(window).resize();
            });
            return false;
        });
    },
    /* GoalLinkAccounts_onload: function(){
    		document.getElementById("reqNewBtn").disabled=true;
    		document.getElementById("reqNewBtn").className = "formbtn_finaceovervw";
    		document.getElementById("reqNewBtn").parentNode.className ="HW_formbtn_lnkaccnt";
    		document.getElementById("GoalAccountLinkFG.GEN_ACCOUNT_ID").disabled = true;

    },
    */

    ASBAPreferences_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/ipo/nASBAFunctions.js");
        feba.domManipulator.documentReady(feba.js.ipo.ASBAPreferences, groupletId);
    },
    IPOSubscription_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "nIpoFunctions";

            script.src = "scripts/module/ipo/nIpoFunctions.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/ipo/nIpoFunctions.js");
        }
        //feba.domManipulator.documentReady(feba.js.ipo.IPOBidType, groupletId);
        IPOBidType1(groupletId);

    },
    IPORevision_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "nIpoFunctions";

            script.src = "scripts/module/ipo/nIpoFunctions.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/ipo/nIpoFunctions.js");
        }
        //feba.domManipulator.documentReady(feba.js.ipo.IPOBidType, groupletId);
        IPOBidType1(groupletId);

    },

    SRRetailRDOpening_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "nRDFunctions";

            script.src = "scripts/module/servicerequest/nRDFunctions.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/nRDFunctions.js");
        }
        feba.domManipulator.documentReady(feba.useCase.openRD);
    },

    RDBDataCapture_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "nRDFunctions";

            script.src = "scripts/module/servicerequest/nRDFunctions.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/nRDFunctions.js");
        }
        feba.domManipulator.documentReady(feba.useCase.closeRD);
    },

    AddEmployee_onload: function(groupletId) {
        displayAdditional(groupletId);
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
        selectCounterpartyBank(groupletId); //Added for use case: Home bank not mandatory
        jQuery("[id='" + groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER']").bind('change', function() {
            populateBankDetails(groupletId, event);
            selectCounterpartyBank(groupletId);
        });
    },

    CopyEmployee_onload: function(groupletId) {
        displayAdditional(groupletId);
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
        selectCounterpartyBank(groupletId); //Added for use case: Home bank not mandatory
        jQuery("[id='" + groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER']").bind('change', function() {
            populateBankDetails(groupletId, event);
            selectCounterpartyBank(groupletId);
        });
    },

    ModifyEmployee_onload: function(groupletId) {
        displayAdditional(groupletId);
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
        selectCounterpartyBank(groupletId); //Added for use case: Home bank not mandatory
        jQuery("[id='" + groupletId + ":CounterPartyCRUDFG.BNF_BANK_TYPE_IDENTIFIER']").bind('change', function() {
            populateBankDetails(groupletId, event);
            selectCounterpartyBank(groupletId);
        });
    },
    BillerRegistration_onload: function() {
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
    },
    ManageBillerEdit_onload: function() {
        feba.domManipulator.loadScript("scripts/module/txnss/NTxnssMaxAmtLimit.js");
    },
    AuthenticationScreenUX5_onload: function() {

        /*added for making checkbox clickable without resize  in login page -Start*/
        //jQuery(".loginPanelColumnDetailStyle1:first").css("width","30%");

        /*jQuery( window ).resize(function(){
			var windowWidth = viewport().width;
            if(parseInt(windowWidth)>= 480 && parseInt(windowWidth)<= 899){
            	jQuery('#LoginHDisplay\\.Ra11\\.C1').css('width','30%');
            }
		});*/
        /*added for making checkbox clickable without resize  in login page -end*/
        //Added for hidding disclaimer for federated login
        hideFederatedSiteDisclaimer();
        //Added for remember user id
        fetchUserIdsFromCookie();
        //Start: Added for New Login Screen UX5
        /*var messageDisplayTable=feba.domManipulator.getElementById("MessageDisplay_TABLE");
        if(messageDisplayTable.length != 0){
        	var errorMsg = jQuery('.errorContentWrapper').text();
        	var message='<div id="MessageDisplay_TABLE" class="section_login"><div class="width100percent"><p class="redbgwithwidth_login"><span class="redtopleft"><span></span></span><span class="redbg_login"><span></span></span><span class="redtopright"> <span></span></span> </p></div><div role="alert" class="redbg_login"> <a href="#" id="errorlink1"><img src="L001/consumer/images/error-icon.gif" alt="You have 1 Error Message" title="You have 1 Error Message" class="absmiddle"></a>'
        				+ '<span dir="ltr">'+ errorMsg + '</div><div class="width100percent"><p class="redbgwithwidth_login"><span class="redbottomleft"> <span></span></span><span class="redbg_login"> <span></span></span><span class="redbottomright"> <span></span></span> </p></div></div>';
        	feba.domManipulator.replaceWith(messageDisplayTable,message);
        }*/
        //End: Added for New Login Screen UX5
        /*Fix for a latent issue. attachEvent is obselete function and is giving error in console during login page itself.
         * Using the latest addEventListener corresponding to the old attachEvent */
        //window.attachEvent('onload', fontResizeOnldForAuthScreen);
        window.addEventListener('onload', fontResizeOnldForAuthScreen, true);

        if (jQuery.browser.safari) {
            jQuery(".loginPanelFBButtonStyle").addClass('loginPanelFBButtonStyle_Safari');
            jQuery(".loginPanelFBButtonStyle").removeClass('loginPanelFBButtonStyle');
        }
        setTimeout(function() {
            jQuery('.loginPanellabellinkStyle1').addClass('loginPanelColumnDetailStyle');
            jQuery('.loginPanellabellinkStyle1').removeClass('loginPanellabellinkStyle1');

        }, 100);


    },
    AuthenticationScreenRetail_onload: function() {

        /*added for making checkbox clickable without resize  in login page -Start*/
        //jQuery(".loginPanelColumnDetailStyle1:first").css("width","30%");

        /*jQuery( window ).resize(function(){
			var windowWidth = viewport().width;
            if(parseInt(windowWidth)>= 480 && parseInt(windowWidth)<= 899){
            	jQuery('#LoginHDisplay\\.Ra11\\.C1').css('width','30%');
            }
		});*/
        /*added for making checkbox clickable without resize  in login page -end*/
        //Added for hidding disclaimer for federated login
        hideFederatedSiteDisclaimer();
        handleWrappedSpansRows();
        //Added for remember user id
        fetchUserIdsFromCookie();
        //Start: Added for New Login Screen UX5
        /*var messageDisplayTable=feba.domManipulator.getElementById("MessageDisplay_TABLE");
        if(messageDisplayTable.length != 0){
        	var errorMsg = jQuery('.errorContentWrapper').text();
        	var message='<div id="MessageDisplay_TABLE" class="section_login"><div class="width100percent"><p class="redbgwithwidth_login"><span class="redtopleft"><span></span></span><span class="redbg_login"><span></span></span><span class="redtopright"> <span></span></span> </p></div><div role="alert" class="redbg_login"> <a href="#" id="errorlink1"><img src="L001/consumer/images/error-icon.gif" alt="You have 1 Error Message" title="You have 1 Error Message" class="absmiddle"></a>'
        				+ '<span dir="ltr">'+ errorMsg + '</div><div class="width100percent"><p class="redbgwithwidth_login"><span class="redbottomleft"> <span></span></span><span class="redbg_login"> <span></span></span><span class="redbottomright"> <span></span></span> </p></div></div>';
        	feba.domManipulator.replaceWith(messageDisplayTable,message);
        }*/
        //End: Added for New Login Screen UX5
        /*Fix for a latent issue. attachEvent is obselete function and is giving error in console during login page itself.
         * Using the latest addEventListener corresponding to the old attachEvent */
        //window.attachEvent('onload', fontResizeOnldForAuthScreen);
        window.addEventListener('onload', fontResizeOnldForAuthScreen, true);

        if (jQuery.browser.safari) {
            jQuery(".loginPanelFBButtonStyle").addClass('loginPanelFBButtonStyle_Safari');
            jQuery(".loginPanelFBButtonStyle").removeClass('loginPanelFBButtonStyle');
        }
        setTimeout(function() {
            jQuery('.loginPanellabellinkStyle1').addClass('loginPanelColumnDetailStyle');
            jQuery('.loginPanellabellinkStyle1').removeClass('loginPanellabellinkStyle1');

        }, 100);
    },
    AuthenticationScreenCorp_onload: function() {
        /*added for making checkbox clickable without resize  in login page -Start*/
        //jQuery(".loginPanelColumnDetailStyle1:first").css("width","30%");

        /*jQuery( window ).resize(function(){
			var windowWidth = viewport().width;
            if(parseInt(windowWidth)>= 480 && parseInt(windowWidth)<= 899){
            	jQuery('#LoginHDisplay\\.Ra11\\.C1').css('width','30%');
            }
		});*/
        /*added for making checkbox clickable without resize  in login page -end*/
        //Added for hidding disclaimer for federated login
        hideFederatedSiteDisclaimer();
        handleWrappedSpansRows();
        //Added for remember user id
        fetchUserIdsFromCookie();
        //Start: Added for New Login Screen UX5
        /*var messageDisplayTable=feba.domManipulator.getElementById("MessageDisplay_TABLE");
        if(messageDisplayTable.length != 0){
        	var errorMsg = jQuery('.errorContentWrapper').text();
        	var message='<div id="MessageDisplay_TABLE" class="section_login"><div class="width100percent"><p class="redbgwithwidth_login"><span class="redtopleft"><span></span></span><span class="redbg_login"><span></span></span><span class="redtopright"> <span></span></span> </p></div><div role="alert" class="redbg_login"> <a href="#" id="errorlink1"><img src="L001/consumer/images/error-icon.gif" alt="You have 1 Error Message" title="You have 1 Error Message" class="absmiddle"></a>'
        				+ '<span dir="ltr">'+ errorMsg + '</div><div class="width100percent"><p class="redbgwithwidth_login"><span class="redbottomleft"> <span></span></span><span class="redbg_login"> <span></span></span><span class="redbottomright"> <span></span></span> </p></div></div>';
        	feba.domManipulator.replaceWith(messageDisplayTable,message);
        }*/
        //End: Added for New Login Screen UX5
        /*Fix for a latent issue. attachEvent is obselete function and is giving error in console during login page itself.
         * Using the latest addEventListener corresponding to the old attachEvent */
        //window.attachEvent('onload', fontResizeOnldForAuthScreen);
        window.addEventListener('onload', fontResizeOnldForAuthScreen, true);

        if (jQuery.browser.safari) {
            jQuery(".loginPanelFBButtonStyle").addClass('loginPanelFBButtonStyle_Safari');
            jQuery(".loginPanelFBButtonStyle").removeClass('loginPanelFBButtonStyle');
        }
        setTimeout(function() {
            jQuery('.loginPanellabellinkStyle1').addClass('loginPanelColumnDetailStyle');
            jQuery('.loginPanellabellinkStyle1').removeClass('loginPanellabellinkStyle1');
        }, 100);
        var isFallback = document.getElementById("IS_FALLBACK_FLOW").value;

        if (isFallback == "true") {
            jQuery("#AuthenticationFG\\.SELECTED_AUTH_MODE").parent().siblings('input[type="text"]').attr('style', 'border-bottom-color:red !important');
        }
    },
    FBARMAuthenticationScreen_onload: function() {
        writeCookie('bankId');
    },
    LockboxImage_onload: function() {
        jQuery('#imageList IMG').click(function() {
            jQuery('.imageHighlight').attr('class', 'imageStyle');
            var elem = jQuery(this);
            elem.attr('class', 'imageHighlight');
            var src = elem.attr('src');
            var img = '<img src=\"' + elem.attr('src') + '\" class=\"displayImageStyle\"" />';
            jQuery('#displayDiv').html(img);
        });

    },
    InitiateMobileRechargePayment_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/transaction/NTopUpListPopulator.js");
        feba.domManipulator.documentReady(feba.js.transaction.topUpListPopulator, groupletId);
    },
    InitiateMobileRechargePaymentUX5_onload: function(groupletId) {


        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            feba.domManipulator.getElement(document).scrollTop(0);
            jQuery(".lookup_buttonlarge").attr('style', 'margin-' + left + ': 46% !important');
            jQuery(".labelColumn_combo_download").attr('style', 'padding-top : 2px !important');
            jQuery(".searchsimpletext_Recharge").attr('style', 'font-size : 14px !important; padding-top : 13px !important');
            if (viewport().width == 640) {
                jQuery(".waves-effect").attr('style', 'margin-' + left + ' : 269px !important');
            }
            var script = document.createElement('script');

            script.id = 'NTopUpListPopulator';

            script.src = "scripts/module/transaction/NTopUpListPopulator.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/module/transaction/NTopUpListPopulator.js");
        }

    },
    InitiateMobileRechargePaymentConfirmationUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);

    },
    InitiateMobileRechargePaymentSummaryUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);

    },
    InitiateMobileRechargePaymentMB_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/transaction/NTopUpListPopulator.js");
        feba.domManipulator.documentReady(feba.js.transaction.topUpListPopulator, groupletId);
    },
    CorpSnapShot_onload: function() {
        feba.js.common.configurable_Widget_Present = "N";
    },
    TopupRechargeDetailsListUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".searchsimpletext_Recharge").attr('style', 'font-size : 14px !important; padding-top : 13px !important');
    },

    /** Added for MultiSelect
	RetailApprovalQueueUX5_onload: function(groupletId){
		feba.domManipulator.loadScript("scripts/module/transaction/MultiSelect.js");
		var elementId1 = 'ApprovalQueueListFG.COUNTER_PARTY_TYPE';
		var elementId2 = 'ApprovalQueueListFG\\.MULTI_SELECT_VAL';
		var elementId3 = 'ApprovalQueueListFG.COUNTER_PARTY_NICKNAME';
		var fgName = "ApprovalQueueListFG";
		if(groupletId && groupletId!=null && groupletId.length>0 && groupletId!="undefined"){
			elementId1 = groupletId+"\\:"+elementId1;
			elementId2 = groupletId+"\\:"+elementId2;
			elementId3 = groupletId+"\\:"+elementId3;
    	}
		jQuery([id="+elementId1+"]).change(function(){
				document.getElementById(elementId3).value="";
			});

		commonCall(fgName);
		jQuery([id="+elementId2+"]).change(function(){
				commonCall(fgName);

			});
	},*/
    ViewBondDetailsUX5_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    ViewBondOrderDetailsUX5_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    BuyOTCBondDataCaptureUX5_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    BuyOTCBondCyberReceiptUX5_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    BuyOTCBondDetailsDisplayUX5_onload: function() {
        feba.js.common.displayWarning = "N";
    },
    FetchBondDetailsUX5_onload: function() {
        feba.js.common.displayWarning = "N";
    },



    WidgetsLibrary_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");
        // This function is for clearing the check boxes on the widget Library page

        feba.domManipulator.getElementEndingWith('CLEAR_ALL_CHECKBOXES').bind('click', function() {
            var checkBoxElements = feba.domManipulator.getElement(':checkbox');
            // function call to hide search panel
            hideSearchPanel(this);
            //feba.domManipulator.getElementEndingWith('CLEAR_ALL_CHECKBOXES').parent().parent().hide();
            //Get the checkbox elements size
            var checkBoxLen = checkBoxElements.length;

            //Iterate through the checkboxes and add event listener for click event
            for (var index = 0; index < checkBoxLen; index++) {

                feba.domManipulator.getElement(checkBoxElements[index]).removeAttr('checked');

                feba.domManipulator.getElement(checkBoxElements[index]).checked = false;

            }

        });

    },
    CcAccountSummaryWidgetViewAllUX5_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
        jQuery(".pagination-wrapper").attr('style', 'border-bottom:0px !important;border-' + left + ':0px !important;border-' + right + ':0px !important');
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
            jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');

        }, 0);
        jQuery(".listgreyrowtxtwithoutline_new").attr('style', 'padding-bottom:22px');
    },
    CcAccountsPromoScreen_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
            jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');

        }, 0);
    },

    DashboardCustomerIdSummaryWidgetsUX5_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
        jQuery(".HW_tabletextwithpadding ").attr('style', 'padding-' + left + ':20px !important');
        jQuery(".stage3_listingdetails_padding").attr('style', 'padding-' + left + ':20px;padding-bottom: 5px');
        jQuery(".mwidlistwhiterow2_new ").attr('style', 'height:46px !important');
        jQuery(".mwidlistwhiterow_new ").attr('style', 'height:46px !important');
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
            jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');

        }, 0);
    },


    //Start: Added for combo box styling for quick pay widget UX5
    QuickPayWidgetStatusUX5_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass(function(index, classes) {
            var matches = classes.match(/\ui-dialog-heading\S+/ig);
            return (matches) ? matches.join(' ') : '';
        });
        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            if (jQuery('#MODAL_VIEW_CONTAINER').find('.quickPayStatus').length > 0) {
                //jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            }

        }, 0);
        var quickPayTxnStatusHtml = jQuery(".quickPayTxnStatus").html().replace("&nbsp;", "");
        jQuery(".quickPayTxnStatus").html(quickPayTxnStatusHtml);
        /*Surej RWD for fixing vertical alignment of amount field*/
        var cpDivTag = jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").find(".simpletext").text();
        if (cpDivTag == null || cpDivTag.trim().length == 0 || cpDivTag == "undefined" || cpDivTag == "null") {
            jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").css("height", "0px");
        }
        convertComboboxes();
        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        //jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
        var windowWidth = viewport().width;
        if (parseInt(windowWidth) == 640) {
            jQuery(uiDialogDiv[1]).attr('style', 'margin-top:2px;width:15px;float:' + right + ';display:block');
        } else {
            jQuery(uiDialogDiv[1]).attr('style', 'width:15px;float:' + right + ';display:block');
        }
        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
            if (parseInt(windowWidth) == 640) {
                jQuery(uiDialogDiv[1]).attr('style', 'margin-top:2px;width:15px;float:' + right + ';display:block');
            } else {
                jQuery(uiDialogDiv[1]).attr('style', 'width:15px;float:' + right + ';display:block');
            }
        });
        jQuery(".ui-dialog .ui-dialog-title").attr('style', 'display: none');
    },


    //Start: Added for combo box styling for quick pay widget UX5

    MakeTransferWidgetUX5_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass(function(index, classes) {
            var matches = classes.match(/\ui-dialog-heading\S+/ig);
            return (matches) ? matches.join(' ') : '';
        });

        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            if (jQuery('#MODAL_VIEW_CONTAINER').find('.maktransfer').length > 0) {
                jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
                var textsubheading = getMessage("MakeTransferSubHeadingLevel2");
                if (textsubheading != undefined) {
                    var overlaySubHeading = jQuery("<span class='ui-dialog-subheading-level1'>" + textsubheading + "</span>");
                    jQuery(overlaySubHeading).appendTo(jQuery(".ui-dialog-titlebar"));
                }
                var textsubheadingl2 = getMessage("QuickPaySubHeadingLevel3");
                if (textsubheadingl2 != undefined) {
                    var textsubheadingl2 = jQuery("<span class='ui-dialog-subheading-level2 mandatory-info'>" + textsubheadingl2 + "</span>");
                    jQuery(textsubheadingl2).appendTo(jQuery(".ui-dialog-titlebar"));
                }
            }

        }, 0);
        /*Surej RWD for fixing vertical alignment of amount field*/
        var cpDivTag = jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").find(".simpletext").text();
        if (cpDivTag == null || cpDivTag.trim().length == 0 || cpDivTag == "undefined" || cpDivTag == "null") {
            jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").css("height", "0px");
        }
        convertComboboxes();
        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
        jQuery(".containerStyle").attr("tabindex", "0");
        /*Start: Added for Ticket ID - 94140 (Channel's Ticket ID) - Overlay is hiding in IE*/
        var parentOverlay = jQuery(".ui-dialog")[1];
        if (typeof parentOverlay != undefined && parentOverlay != null && jQuery(".overlayTitleHeight").length == 0) {
            var modifiedTop = parseInt(jQuery(parentOverlay).css("top")) + 50;
            modifiedTop = modifiedTop + "px";
            jQuery(parentOverlay).css("top", modifiedTop);
        }
        /*End: Added for Ticket ID - 94140 (Channel's Ticket ID) - Overlay is hiding in IE*/
    },

    //Start: Added for combo box styling for quick pay widget UX5
    QuickPayWidgetUX5_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass(function(index, classes) {
            var matches = classes.match(/\ui-dialog-heading\S+/ig);
            return (matches) ? matches.join(' ') : '';
        });
        adjustSingleCurrencyAmountField();
        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            if (jQuery('#MODAL_VIEW_CONTAINER').find('.quickPayment').length > 0) {
                //jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
                var textsubheading = getMessage("QuickPaySubHeadingLevel1");
                if (textsubheading != undefined) {
                    var overlaySubHeading = jQuery("<span class='ui-dialog-subheading-level1'>" + textsubheading + "</span>");
                    jQuery(overlaySubHeading).appendTo(jQuery(".ui-dialog-titlebar"));
                }
                var textsubheadingl2 = getMessage("QuickPaySubHeadingLevel3");
                if (textsubheadingl2 != undefined) {
                    var textsubheadingl2 = jQuery("<span class='ui-dialog-subheading-level2 mandatory-info'>" + textsubheadingl2 + "</span>");
                    jQuery(textsubheadingl2).appendTo(jQuery(".ui-dialog-titlebar"));
                }
            }
            if (jQuery(".quickPayrightColumnStyle.errorHighlightdestP").length > 0) {
                jQuery(".errorHighlightdestP span.error_highlight").each(function() {
                    span_classes = jQuery(this).attr("class");
                    span_value = jQuery(this).html();
                    span_newLabel = jQuery("<label></label>").html(span_value);
                    if (span_classes.length > 0) {
                        jQuery(span_newLabel).attr("class", "error_highlight_horizontal active");
                    }
                    jQuery(this).replaceWith(span_newLabel);
                });
            }
        }, 0);
        /*Surej RWD for fixing vertical alignment of amount field*/
        var cpDivTag = jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").find(".simpletext").text();
        if (cpDivTag == null || cpDivTag.trim().length == 0 || cpDivTag == "undefined" || cpDivTag == "null") {
            jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").css("height", "0px");
        }
        convertComboboxes();
        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        //jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
        /*added for removing focus from modal view elements on click of ticker/menu button start*/
        jQuery(".containerStyle").attr("tabindex", "0");
        /*added for removing focus from modal view elements on click of ticker/menu button end*/
        /* Added for Ticket - 92518 (Channel's Ticket ID) --start */
        var parentOverlay = jQuery(".ui-dialog")[1];
        if (typeof parentOverlay != undefined && parentOverlay != null && jQuery(".overlayTitleHeight").length == 0) {
            var modifiedTop = parseInt(jQuery(parentOverlay).css("top")) + 50;
            modifiedTop = modifiedTop + "px";
            jQuery(parentOverlay).css("top", modifiedTop);
        }
        /* Added for Ticket - 92518(Channel's Ticket ID) --End */
        jQuery(".ui-dialog .ui-dialog-title").attr('style', 'display: block');
        jQuery(uiDialogDiv[1]).attr('style', 'width:15px;float:' + right + ';display:block'); /*Added for defect 194662*/

        /*Added for Showing the Overlay Title in Middle -Start*/
        setTimeout(function() {
            var titleBar = jQuery(".ui-dialog-titlebar")[1];
            var subHeading1 = jQuery('.ui-dialog-subheading-level1')[1];
            var subHeading2 = jQuery(".ui-dialog-subheading-level2")[1];
            if (titleBar != null && typeof titleBar != typeof undefined && subHeading1 != null && typeof subHeading1 != typeof undefined &&
                subHeading2 != null && typeof subHeading2 != typeof undefined) {
                var titleBarWidth = jQuery(titleBar).width();
                var subHeadingWidth1 = jQuery(subHeading1).width();
                var subHeadingWidth2 = jQuery(subHeading2).width();
                var marginleftPx1 = (titleBarWidth / 2 - subHeadingWidth1 / 2) + "px";
                var marginleftPx2 = (titleBarWidth / 2 - subHeadingWidth2 / 2) + "px";
                jQuery(".ui-dialog-subheading-level1").css('margin-' + left + '', marginleftPx1);
                jQuery(".ui-dialog-subheading-level2").css('margin-' + left + '', marginleftPx2);
            }
        }, 100);
        /*Added for Showing the Overlay Title in Middle -End*/


    },
    QuickRechargeWidgetUX5_onload: function(groupletId) {
        jQuery(".ui-dialog-title").removeClass(function(index, classes) {
            var matches = classes.match(/\ui-dialog-heading\S+/ig);
            return (matches) ? matches.join(' ') : '';
        });
        adjustSingleCurrencyAmountField();
        //To disable the autocomplete feature for Favorites dropdown alone
        if (jQuery("[id*='" + groupletId + "\\:F4']").length > 0) {
            var favDropdown = jQuery("[id*='" + groupletId + "\\:F4']");
            var inputFav = jQuery(favDropdown).children(".autocomplete-dropdown");
            inputFav.addClass("disablePointerEvents");
            inputFav.addClass("blackText");
            inputFav.prop('readonly', true);
            inputFav.attr('disabled', true);
        }
        /*code for cicle to be disabled*/
        var servProv = jQuery("[id*='FormManagementFG.SERVICE_PROVIDER_DETAILS']").val();

        if (servProv == "") {
            disableDropdown("F13", "FormManagementFG.CIRCLE");
            disableDropdown("F14", "FormManagementFG.RECHARGE_MODE");
        } else {
            enableDropdown("F13", "FormManagementFG.CIRCLE");
            enableDropdown("F14", "FormManagementFG.RECHARGE_MODE");
        }
        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            if (jQuery('#MODAL_VIEW_CONTAINER').find('.quickPayment').length > 0) {
                //jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
                var textsubheadingl2 = getMessage("QuickPaySubHeadingLevel3");
                if (textsubheadingl2 != undefined) {
                    var textsubheadingl2 = jQuery("<span class='ui-dialog-subheading-level2 mandatory-info'>" + textsubheadingl2 + "</span>");
                    jQuery(textsubheadingl2).appendTo(jQuery(".ui-dialog-titlebar"));
                }
            }

        }, 0);
        var cpDivTag = jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").find(".simpletext").text();
        if (cpDivTag == null || cpDivTag.trim().length == 0 || cpDivTag == "undefined" || cpDivTag == "null") {
            jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").css("height", "0px");
        }
        convertComboboxes();

        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        jQuery(".containerStyle").attr("tabindex", "0");

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NTopUpListPopulatorUX5';

            script.src = "scripts/module/transaction/NTopUpListPopulatorUX5.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }

            feba.domManipulator.documentReady(feba.js.transaction.topUpListPopulator, groupletId);
        } else {

            feba.domManipulator.loadScript("scripts/module/transaction/NTopUpListPopulatorUX5.js");
        }

        /*Start: Added for Ticket ID - 94140 (Channel's Ticket ID) - Overlay is hiding in IE*/
        var parentOverlay = jQuery(".ui-dialog")[1];
        var ticker = jQuery('.ticker');
        if (ticker.length != 0) {
            var tickerTop = jQuery(ticker).position().top;
            var tickerHeight = jQuery(ticker).height();
            var actualTickerPos = tickerTop + tickerHeight;
            var uidialogTop = jQuery(parentOverlay).position().top;
            if (typeof parentOverlay != undefined && parentOverlay != null && jQuery(".overlayTitleHeight").length == 0) {
                if (uidialogTop <= actualTickerPos) {
                    var modifiedTop = parseInt(jQuery(parentOverlay).css("top")) + (actualTickerPos - uidialogTop);
                    modifiedTop = modifiedTop + "px";
                    jQuery(parentOverlay).css("top", modifiedTop);
                }

            }
        }
        /*End: Added for Ticket ID - 94140 (Channel's Ticket ID) - Overlay is hiding in IE*/
        jQuery(".ui-dialog .ui-dialog-title").attr('style', 'display: block');

        /*Added for Showing the Overlay Title in Middle -Start*/
        setTimeout(function() {
            var titleBar = jQuery(".ui-dialog-titlebar")[1];
            var subHeading = jQuery('.ui-dialog-subheading-level2')[1];
            if (titleBar != null && typeof titleBar != typeof undefined && subHeading != null && typeof subHeading != typeof undefined) {
                var titleBarWidth = jQuery(titleBar).width();
                var subHeadingWidth = jQuery(subHeading).width();
                var marginleftPx = (titleBarWidth / 2 - subHeadingWidth / 2) + "px";
                feba.domManipulator.getElement(".ui-dialog-subheading-level2").css('margin-' + left + '', marginleftPx);
            }
        }, 100);
        /*Added for Showing the Overlay Title in Middle -End*/
    },
    QuickRechargeWidgetStatusUX5_onload: function(groupletId) {

        jQuery(".ui-dialog-title").removeClass(function(index, classes) {
            var matches = classes.match(/\ui-dialog-heading\S+/ig);
            return (matches) ? matches.join(' ') : '';
        });
        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            if (jQuery('#MODAL_VIEW_CONTAINER').find('.quickPayStatus').length > 0) {
                //jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            }

        }, 0);
        var quickPayTxnStatusHtml = jQuery(".quickPayTxnStatus").html().replace("&nbsp;", "");
        jQuery(".quickPayTxnStatus").html(quickPayTxnStatusHtml);
        /*Surej RWD for fixing vertical alignment of amount field*/
        var cpDivTag = jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").find(".simpletext").text();
        if (cpDivTag == null || cpDivTag.trim().length == 0 || cpDivTag == "undefined" || cpDivTag == "null") {
            jQuery("#RetailUserDashboardUX5_W83__1\\:WidgetForm\\.Rag2").css("height", "0px");
        }
        convertComboboxes();
        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        //jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
        jQuery(".ui-dialog .ui-dialog-title").attr('style', 'display: none');


        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        //jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
        var windowWidth = viewport().width;
        if (parseInt(windowWidth) == 640) {
            jQuery(uiDialogDiv[1]).attr('style', 'margin-top:2px;width:15px;float:right;display:block');
        } else {
            jQuery(uiDialogDiv[1]).attr('style', 'width:15px;float:right;display:block');
        }
        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
            if (parseInt(windowWidth) == 640) {
                jQuery(uiDialogDiv[1]).attr('style', 'margin-top:2px;width:15px;float:right;display:block');
            } else {
                jQuery(uiDialogDiv[1]).attr('style', 'width:15px;float:right;display:block');
            }
        });
        jQuery(".ui-dialog .ui-dialog-title").attr('style', 'display: none');

    },
    QuickRechargeWidgetConfirmationUX5_onload: function(groupletId) {
        jQuery(".searchsimpletextCMS_nofloat").addClass('searchsimpletextCMS');
        jQuery(".searchsimpletextCMS").attr('style', 'float:none ;padding-' + right + ':0px ;padding-top:8px !important');
        jQuery(".span-checkbox").addClass('span-checkbox2');
        jQuery(".ui-dialog-title").removeClass(function(index, classes) {
            var matches = classes.match(/\ui-dialog-heading\S+/ig);
            return (matches) ? matches.join(' ') : '';
        });
        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            /*jQuery('.subheading').remove();*/
            if (jQuery('#MODAL_VIEW_CONTAINER').find('.quickPayConfirm').length > 0) {
                //jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');

                var auth2bPresent = jQuery("[id*='Authorization2b']").length;
                if (auth2bPresent > 0) {
                    jQuery(".quickPayConfirmNew .workflow").addClass('hideElementFromUI');
                    jQuery(".quickPayConfirmNew span.queryitalictext").removeClass("queryitalictext").addClass("searchsimpletext_sideheading_auth");
                }
            }

        }, 0);
        jQuery("[id='" + groupletId + ":WidgetForm1\\.Rag5\\.C1']").attr('style', 'text-align:center;width:96% !important');
        jQuery("[id='" + groupletId + ":WidgetForm1\\.Rag5\\.C2']").attr('style', 'text-align:center;width:96% !important');
        setTimeout(function() {
            jQuery("[id='" + groupletId + ":Authorization2a.Re7.C1']").attr('style', 'display:none');
        }, 50);
        jQuery(".authenticationRowStyle").attr('style', 'margin-top: 5px');
    },
    InitiatePaymentConfirmationUX5_onload: function() {
        jQuery(".searchsimpletextCMS_nofloat").addClass('searchsimpletextCMS');
        jQuery(".searchsimpletextCMS").attr('style', 'float:none ;padding-' + right + ':0px ;padding-top:8px !important');
        jQuery(".span-checkbox").addClass('span-checkbox2');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ConfirmationDet_SubSectionTop']").removeClass("stage3_leftrightmainpanel").addClass("stage3_leftrightmainpanel_NoSeparator");
        jQuery(".stage3_leftrightmainpanel_NoSeparator").attr('style', 'padding-bottom:0px !important');
        /* fix for ticket 774179 */
        setTimeout(function() {
            jQuery(".hasPulldownMenu").attr('style', 'margin-top: -11px !important');
        }, 500);

    },
    /* fix for ticket 774179 */
    InitiatePaymentSummaryUX5_onload: function() {
        setTimeout(function() {
            jQuery(".hasPulldownMenu").attr('style', 'margin-top: -11px !important');
        }, 500);

    },
    DeleteTransactionConfirmForSingleEntryUX5_onload: function() {
        jQuery(".searchsimpletextCMS_nofloat").addClass('searchsimpletextCMS');
        jQuery(".searchsimpletextCMS").attr('style', 'float:none ;padding-' + right + ':0px ;padding-top:8px !important');
        jQuery(".span-checkbox").addClass('span-checkbox2');
    },
    InitiateSingleEntryPaymentConfirmationUX5_onload: function() {
        jQuery(".searchsimpletextCMS_nofloat").addClass('searchsimpletextCMS');
        jQuery(".searchsimpletextCMS").attr('style', 'float:none ;padding-' + right + ':0px ;padding-top:8px !important');
        //Fix for ticket 780780
        if (jQuery(".searchsimpletextCMS_nofloat").hasClass('searchsimpletextCMS')) {
            jQuery(".span-checkbox").addClass('span-checkbox2');
        }
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ConfirmationDet_SubSectionTop']").removeClass("stage3_leftrightmainpanel").addClass("stage3_leftrightmainpanel_NoSeparator");
        jQuery(".stage3_leftrightmainpanel_NoSeparator").attr('style', 'padding-bottom:0px !important');
        var var1 = jQuery("[id$='PageConfigurationMaster_3CSTXNW__1\\:ReadOnly_LeftContainer_Stage35\\.ReadOnlySectHeader']");
        jQuery(var1).attr('style', 'border-top:1px solid #CCC !important');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) >= 480 && parseInt(vpWidth) <= 664) {
            var var2 = jQuery("[id$='PageConfigurationMaster_3CSTXNW__1\\:ReadOnly_LeftContainer_Stage35\\.ReadOnlySectHeader']");
            jQuery(var2).attr('style', 'border-top:1px solid #CCC ;width:99.2% !important');
        }

        var var3 = jQuery("[id$='PageConfigurationMaster_3CSTXNW__1\\:ReadOnly_LeftContainer_Stage3_Collapsible8\\.ReadOnlySectHeader']");
        jQuery(var3).attr('style', 'border-top:none ;border-bottom:none  !important');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35']").attr('style', 'border-top:1px solid #E0E0E0');
    },

    CorporateAuditDetailsUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35']").attr('style', 'border-bottom:1px solid #E0E0E0 !important');
    },
    RetailAuditDetailsUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35']").attr('style', 'border-bottom:1px solid #E0E0E0 !important');
    },
    StopPreviewDetailsForSingleEntryUX5_onload: function() {
        var var1 = jQuery("[id$='PageConfigurationMaster_3CSTXNW__1\\:ReadOnly_LeftContainer_Stage35\\.ReadOnlySectHeader']");
        jQuery(var1).attr('style', 'border-top:1px solid #CCC !important');

        var vpWidth = viewport().width;
        if (parseInt(vpWidth) >= 480 && parseInt(vpWidth) <= 664) {
            var var2 = jQuery("[id$='PageConfigurationMaster_3CSTXNW__1\\:ReadOnly_LeftContainer_Stage35\\.ReadOnlySectHeader']");
            jQuery(var2).attr('style', 'border-top:1px solid #CCC ;width:99.2% !important');
        }
        var var3 = jQuery("[id$='PageConfigurationMaster_3CSTXNW__1\\:ReadOnly_LeftContainer_Stage3_Collapsible8\\.ReadOnlySectHeader']");
        jQuery(var3).attr('style', 'border-top:none ;border-bottom:none  !important');

        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_Collapsible8.ReadOnlySectHeader']").addClass('ui-helper-hidden');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ReadOnlySectHeader']").attr('style', 'border-top:1px solid #E0E0E0');
    },

    //Start: This function added to close the information bar from QuickPay widget confirmation page UX5
    QuickPayWidgetConfirmationUX5_onload: function() {
        jQuery(".searchsimpletextCMS_nofloat").addClass('searchsimpletextCMS');
        jQuery(".searchsimpletextCMS").attr('style', 'float:none ;padding-' + right + ':0px ;padding-top:8px !important');
        jQuery(".span-checkbox").addClass('span-checkbox2');
        jQuery(".span-checkbox").parent().css("padding-" + left + "", "10px");
        if (jQuery('.span-checkbox').siblings('a.bluelink_bold').length > 0) {
            jQuery(".span-checkbox").removeClass('span-checkbox2');
        }
        jQuery(".ui-dialog-title").removeClass(function(index, classes) {
            var matches = classes.match(/\ui-dialog-heading\S+/ig);
            return (matches) ? matches.join(' ') : '';
        });
        setTimeout(function() {
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
            jQuery('.ui-dialog-subheading-level1').remove();
            jQuery('.ui-dialog-subheading-level2').remove();
            /*jQuery('.subheading').remove();*/
            if (jQuery('#MODAL_VIEW_CONTAINER').find('.quickPayConfirm').length > 0) {
                //jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
                var textsubheadingl2 = getMessage("QuickPaySubHeadingLevel3");
                if (textsubheadingl2 != undefined) {
                    var textsubheadingl2 = jQuery("<span class='ui-dialog-subheading-level2 mandatory-info'>" + textsubheadingl2 + "</span>");
                    jQuery(textsubheadingl2).appendTo(jQuery(".ui-dialog-titlebar"));
                }
                var auth2bPresent = jQuery("[id*='Authorization2b']").length;
                if (auth2bPresent > 0) {
                    jQuery(".quickPayConfirmNew .workflow").addClass('hideElementFromUI');
                    jQuery(".quickPayConfirmNew span.queryitalictext").removeClass("queryitalictext").addClass("searchsimpletext_sideheading_auth");
                }
            }

        }, 0);
        setTimeout(function() {
            jQuery("[id='" + groupletId + ":Authorization1.Re5.C1']").attr('style', 'display:none');
        }, 50);
        //closeImageId
        jQuery('.closeStyleQuickPay').bind('click', function() {

            var pElement = feba.domManipulator.getElement(this.parentElement);
            var pElementDiv = pElement.parent();
            //replace the existing parent div class with empty div
            pElementDiv.parent().replaceWith('<div class="emptyDivQuickPay"></div>');
        });
        var x = document.getElementsByClassName('authenticationRowStyle');
        var noofrowstyles = jQuery('.authenticationRowStyle').length;
        for (i = 1; i <= noofrowstyles; i++) {
            if (i == noofrowstyles) {

                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 480 && parseInt(windowWidth) <= 668) {
                    jQuery(x[i - 1]).attr('style', 'margin-top:5px');
                } else {
                    jQuery(x[i - 1]).attr('margin-top', '0px');
                }
            }
        }
        jQuery(window).resize(function() {
            var windowWidth2 = viewport().width;
            for (i = 1; i <= noofrowstyles; i++) {
                if (i == noofrowstyles) {
                    if (parseInt(windowWidth2) >= 480 && parseInt(windowWidth2) <= 668) {
                        jQuery(x[i - 1]).attr('margin-top', '5px');
                    } else {
                        jQuery(x[i - 1]).attr('margin-top', '0px');
                    }
                }
            }
        });
        // Added for ticket 738012
        jQuery('.querytextquickpaywidgetmessage').siblings().addClass('querytextquickpaywidgetmessage');
        jQuery(window).resize(function() {
            jQuery('.querytextquickpaywidgetmessage').siblings().addClass('querytextquickpaywidgetmessage');
        });
        var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
        //jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');
        jQuery(uiDialogDiv[1]).attr('style', 'width:15px;float:' + right + ';display:block');

        /*Added for Showing the Overlay Title in Middle -Start*/
        setTimeout(function() {
            var titleBar = jQuery(".ui-dialog-titlebar")[1];
            var subHeading2 = jQuery(".ui-dialog-subheading-level2")[1];
            if (titleBar != null && typeof titleBar != typeof undefined &&
                subHeading2 != null && typeof subHeading2 != typeof undefined) {
                var titleBarWidth = jQuery(titleBar).width();
                var subHeadingWidth2 = jQuery(subHeading2).width();
                var marginleftPx2 = (titleBarWidth / 2 - subHeadingWidth2 / 2) + "px";
                jQuery(".ui-dialog-subheading-level2").css('margin-' + left + '', marginleftPx2);
            }
        }, 100);
        /*Added for Showing the Overlay Title in Middle -End*/

    },
    //End: This function added to close the information bar from QuickPay widget confirmation page UX5
    //End: Added for combo box styling for quick pay widget UX5
    CategorywiseOverviewChartViewUX5_onload: function() {
        jQuery("#nextButton, #prevButton").click(function() {
            /*for chrome chart is painted in embed tag*/
            jQuery('embed[name=finanzTool]').attr('width', '95.12765957446809%');

            /*for ie chart is painted in object tag*/
            jQuery('object[name=finanzTool]').attr('width', '95.12765957446809%');

            /*for firefox chart is painted in img tag*/
            setTimeout(function() {
                jQuery("img[usemap$='chartSamplerMap']").attr('width', '95.12765957446809%');
            }, 140);
        });
    },
    BudgetAnalysisChartViewUX5_onload: function() {
        jQuery("#nextButton, #prevButton").click(function() {
            /*for chrome chart is painted in embed tag*/
            jQuery('embed[name=finanzTool]').attr('width', '95.12765957446809%');

            /*for ie chart is painted in object tag*/
            jQuery('object[name=finanzTool]').attr('width', '95.12765957446809%');

            /*for firefox chart is painted in img tag*/
            setTimeout(function() {
                jQuery("img[usemap$='chartSamplerMap']").attr('width', '95.12765957446809%');
            }, 140);
        });
        jQuery(".stage3_downloadnav").removeClass("stage3_downloadnav");
    },
    ExpenseIncomeAnalysisChartViewUX5_onload: function() {
        jQuery(".stage3_downloadnav").removeClass("stage3_downloadnav");
    },

    // Start: Added for error message on new login screen
    PasswordAuthenticationScreenUX5_onload: function() {
        /* Commented For Ticket - 735719*/
        /*		var messageDisplayTable=feba.domManipulator.getElementById("MessageDisplay_TABLE");
        		if(messageDisplayTable.length != 0){
        			var errorMsg = jQuery('.errorContentWrapper').text();
        			var message='<div id="MessageDisplay_TABLE" class="section_login"><div class="width100percent"><p class="redbgwithwidth_login"><span class="redtopleft"><span></span></span><span class="redbg_login"><span></span></span><span class="redtopright"> <span></span></span> </p></div><div role="alert" class="redbg_login"> <a href="#" id="errorlink1"><img src="L001/consumer/images/error-icon.gif" alt="You have 1 Error Message" title="You have 1 Error Message" class="absmiddle"></a>'
        						+ '<span dir="ltr">'+ errorMsg + '</div><div class="width100percent"><p class="redbgwithwidth_login"><span class="redbottomleft"> <span></span></span><span class="redbg_login"> <span></span></span><span class="redbottomright"> <span></span></span> </p></div></div>';
        			feba.domManipulator.replaceWith(messageDisplayTable,message);
        		}*/
    },
    AuthenticationImagePhraseScreenUX5_onload: function() {
        /*var messageDisplayTable=feba.domManipulator.getElementById("MessageDisplay_TABLE");
        if(messageDisplayTable.length != 0){
        	var errorMsg = jQuery('.errorContentWrapper').text();
        	var message='<div id="MessageDisplay_TABLE" class="section_login"><div class="width100percent"><p class="redbgwithwidth_login"><span class="redtopleft"><span></span></span><span class="redbg_login"><span></span></span><span class="redtopright"> <span></span></span> </p></div><div role="alert" class="redbg_login"> <a href="#" id="errorlink1"><img src="L001/consumer/images/error-icon.gif" alt="You have 1 Error Message" title="You have 1 Error Message" class="absmiddle"></a>'
        				+ '<span dir="ltr">'+ errorMsg + '</div><div class="width100percent"><p class="redbgwithwidth_login"><span class="redbottomleft"> <span></span></span><span class="redbg_login"> <span></span></span><span class="redbottomright"> <span></span></span> </p></div></div>';
        	feba.domManipulator.replaceWith(messageDisplayTable,message);
        }*/
        setTimeout(function() {
            jQuery('.loginPanellabellinkStyle1').addClass('loginPanelColumnDetailStyle');
            jQuery('.loginPanellabellinkStyle1').removeClass('loginPanellabellinkStyle1');
        }, 100);
        jQuery(".login_phrase").attr('style', 'word-wrap : break-word !important');
        var isFallback = document.getElementById("IS_FALLBACK_FLOW").value;
        if (isFallback == "true") {
            jQuery("#AuthenticationFG\\.SELECTED_AUTH_MODE").parent().siblings('input[type="text"]').attr('style', 'border-bottom-color:red !important');
        }
    },
    GenerateOTPScreen_onload: function() {
        var messageDisplayTable = feba.domManipulator.getElementById("MessageDisplay_TABLE");
        if (messageDisplayTable.length != 0) {
            var errorMsg = jQuery('.errorContentWrapper').text();
            var message = '<div id="MessageDisplay_TABLE" class="section_login"><div class="width100percent"><p class="redbgwithwidth_login"><span class="redtopleft"><span></span></span><span class="redbg_login"><span></span></span><span class="redtopright"> <span></span></span> </p></div><div role="alert" class="redbg_login"> <a href="#" id="errorlink1"><img src="L001/consumer/images/error-icon.gif" alt="You have 1 Error Message" title="You have 1 Error Message" class="absmiddle"></a>' +
                '<span dir="ltr">' + errorMsg + '</div><div class="width100percent"><p class="redbgwithwidth_login"><span class="redbottomleft"> <span></span></span><span class="redbg_login"> <span></span></span><span class="redbottomright"> <span></span></span> </p></div></div>';
            feba.domManipulator.replaceWith(messageDisplayTable, message);
        }
    },
    // End: Added for error message on new login screen

    //Start: Added for federated identity management
    EAUserRegistrationListingUX5_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/user/NFBScript.js");
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFBScript";

            script.src = "scripts/module/user/NFBScript.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/user/NFBScript.js");
        }
    },
    //End: Added for federated identity management
    //Added for corp online registration
    CorpOnlineRegPreviewConfirmationUX5_onload: function() {
        jQuery('.step_trackerwidth').css('width', '940px');
        //disable the account id if it is not empty
        if (document.getElementById('CorpOnlineRegistrationFG.ACC_NUM').value != "") {
            jQuery('input[id$="ACC_NUM"]').attr("disabled", true);
        }

    },

    PersonalSettingsRetail_onload: function(groupletId) {
        jQuery("[id$='ReadOnly_LeftContainer_Stage35\\.R18d1\\.C1']").css('width', 'auto');
        //Added for 151999 ticket fix
        var src = jQuery("[id='" + groupletId + ":PROFILE_PHOTO']").attr('src');
        jQuery('.profile-picture').attr('src', src);
    },

    PersonalSettings_onload: function(groupletId) {
        jQuery("[id$='ReadOnly_LeftContainer_Stage35\\.R18d1\\.C1']").css('width', 'auto');
        //Added for 151999 ticket fix
        var src = jQuery("[id='" + groupletId + ":PROFILE_PHOTO']").attr('src');
        jQuery('.profile-picture').attr('src', src);
    },

    CreateMenuOptions_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "NAdaptiveModeControl";

            script.src = "scripts/module/applicationmaintenance/NAdaptiveModeControl.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/applicationmaintenance/NAdaptiveModeControl.js");
        }

    },
    ModifyMenuOptions_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "NAdaptiveModeControl";

            script.src = "scripts/module/applicationmaintenance/NAdaptiveModeControl.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/applicationmaintenance/NAdaptiveModeControl.js");
        }
    },

    PageMaintenanceCreateSubscribers_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/GroupletCommunication.js");
    },
    PageMaintenanceIGCConfig_onload: function() {

        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/GroupletCommunication.js");
    },

    BuyOTCBondDataCaptureUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/module/bonds/NFetchBondDetails.js");
    },
    BondDealListUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NBondNameLookupDetails";
            script.src = "scripts/module/bonds/NBondNameLookupDetails.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
        }
    },
    BondOrderListUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NBondNameLookupDetails";
            script.src = "scripts/module/bonds/NBondNameLookupDetails.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
        }
    },
    BondHoldingsListUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NBondNameLookupDetails";
            script.src = "scripts/module/bonds/NBondNameLookupDetails.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
        }
    },
    BackDatedHoldingsListUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NBondNameLookupDetails";
            script.src = "scripts/module/bonds/NBondNameLookupDetails.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
        }
    },

    BondNameLookupUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NBondNameLookupDetails";
            script.src = "scripts/module/bonds/NBondNameLookupDetails.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
        }
    },
    BondNameSearchUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NBondNameLookupDetails";
            script.src = "scripts/module/bonds/NBondNameLookupDetails.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
        }
    },
    ViewBondPricesUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NBondNameLookupDetails";
            script.src = "scripts/module/bonds/NBondNameLookupDetails.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
        }
    },
    ConfirmPrints_onload: function() {
        feba.domManipulator.loadScript("scripts/module/instrumentprinting/NconfirmPrints.js");
    },
    CorpCancelJobPreviewConfirmation_onload: function() {
        jQuery('#C1').find(".stage3_inputpanel_column").removeClass("stage3_inputpanel_column").addClass("querytextleft");
        jQuery('#C2').find(".querytextright_stage3").removeClass("querytextright_stage3").addClass("querytextright");
        jQuery('.querytextboxmedium').css('width', '80%');
    },
    EBConfirmPrints_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NconfirmPrints";

            script.src = "scripts/module/instrumentprinting/NconfirmPrints.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/instrumentprinting/NconfirmPrints.js");
        }
    },
    DDConfirmPrints_onload: function() {
        feba.domManipulator.loadScript("scripts/module/instrumentprinting/NconfirmPrints.js");
    },
    //fix for the tkt 709560
    MailCompose_onload: function() {
        document.execCommand("AutoUrlDetect", false, false);
        jQuery('.composetxtboxmatter').removeAttr('maxlength');
    },
    MailRMReply_onload: function() {
        jQuery('.composetxtboxmatter').removeAttr('maxlength');
    },
    MailRMForward_onload: function() {
        jQuery('.composetxtboxmatter').removeAttr('maxlength');
        setTimeout(function() {
            jQuery('#MailFG\\.MAIL_VIEW_SUBJECT').css('width', '99.6%');
            //jQuery('#MailFG\\.MAIL_VIEW_SUBJECT').css('width','100%');
        }, 100);
    },
    PageMaintenanceLandingPage_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");
    },
    PageMaintenaceUpdateConfigurationContainer_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");
    },
    PageMaintenaceUpdateConfiguration_onload: function() {

        jQuery('.jcarousel-list-horizontal').css(left, '-600px');
        var mediumContainer = jQuery('.previewContainer-mediumShow-Head').length;
        var smallContainer = jQuery('.previewContainer-smallShow-Head').length;
        var largeContainer = jQuery('.previewContainer-largeShow-Head').length;
        var xSmall = jQuery('.previewContainer-xtrasmallShow-Head').length;
        if (mediumContainer && mediumContainer == 1 && (smallContainer && smallContainer < 3)) {
            jQuery('.previewContainer-mediumShow-Head').css('margin-bottom', '250px');
        }
        if (mediumContainer && mediumContainer == 2 && (xSmall && xSmall == 3)) {
            var currMediumContainer = jQuery('.previewContainer-mediumShow-Head')[1];
            jQuery(currMediumContainer).css('margin-bottom', '145px');

        }
        var tempContainerHeight = 0;
        if (largeContainer == 1 && xSmall > 2) {
            for (j = 0; j < xSmall; j++) {
                var currxSmall = jQuery('.previewContainer-xtrasmallShow-Head')[j];
                if (j == (xSmall - 1)) {
                    tempContainerHeight = tempContainerHeight + parseInt(jQuery(currxSmall).css('height')) + parseInt(jQuery(currxSmall).css('margin-bottom'));
                } else {
                    tempContainerHeight = tempContainerHeight + parseInt(jQuery(currxSmall).css('height')) + parseInt(jQuery(currxSmall).css('margin-bottom')) +
                        parseInt(jQuery(currxSmall).css('padding-bottom'));

                }
            }
            jQuery('.previewContainer-largeShow-Head').css('min-height', tempContainerHeight + 'px');

        }
        setTimeout(function() {
            feba.domManipulator.styleComboboxes((jQuery('select[id^="PageMaintenaceUpdateConfigurationContainer_STATIC_TemplateList:PageMaintenanceFG.CONTAINER"]')), {
                literals: {
                    noItemFound: getMessage("comboBoxNoItemFoundMsg"),
                    showAll: getMessage("comboBoxShowAllButton")
                }

            });
        }, 500)
    },
    PageConfigurationMaster_onload: function() {
        var containersOnPage = jQuery('.groupletContainer');
        for (i = 0; i < containersOnPage.length; i++) {
            var currContainer = containersOnPage[i];
            var currContainerChildren = jQuery(currContainer).children('.widget');
            if (currContainerChildren && currContainerChildren.length == 0) {
                jQuery(currContainer).addClass('hideElement');
                //jQuery(currContainer).css('width','0');
                //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
            }
        }
        var wrapperDivs = jQuery('.groupletWrapperDiv');
        for (i = 0; i < wrapperDivs.length; i++) {
            var currWrapperDiv = wrapperDivs[i];
            var currContainerChildren = jQuery(currWrapperDiv).find('.widget');
            if (currContainerChildren && currContainerChildren.length > 0) {
                jQuery(currWrapperDiv).removeClass('hideElement');
                //jQuery(currContainer).css('width','0');
                //console.log("Assigned width 0"+jQuery(currContainer).attr('id'));
            }
        }


        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");
    },
    PageMaintenanceTemplateDetails_onload: function(groupletId) {
        console.log('inside PageMaintenanceTemplateDetails_onload');
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");
        setTimeout(function() {
            var currHeight = jQuery('#' + 'PageMaintenanceHomePage_TemplateDetails').css('height');
            var ht = parseInt(currHeight);
            jQuery('#' + groupletId).css('height', ((ht + 100) + 'px'));
            console.log("assigned height auto in template details");
        }, 1000);
        var mediumContainer = jQuery('.previewContainer-mediumShow-Head').length;
        var smallContainer = jQuery('.previewContainer-smallShow-Head').length;
        var largeContainer = jQuery('.previewContainer-largeShow-Head').length;
        var xSmall = jQuery('.previewContainer-xtrasmallShow-Head').length;


        if (mediumContainer && mediumContainer == 1 && (smallContainer && smallContainer < 3)) {
            jQuery('.previewContainer-mediumShow-Head').css('margin-bottom', '250px');
        }
        if (mediumContainer && mediumContainer == 2 && (xSmall && xSmall == 3)) {
            var currMediumContainer = jQuery('.previewContainer-mediumShow-Head')[1];
            jQuery(currMediumContainer).css('margin-bottom', '145px');

        }
        var tempContainerHeight = 0;
        if (largeContainer == 1 && xSmall > 2) {
            for (j = 0; j < xSmall; j++) {
                var currxSmall = jQuery('.previewContainer-xtrasmallShow-Head')[j];
                if (j == (xSmall - 1)) {
                    tempContainerHeight = tempContainerHeight + parseInt(jQuery(currxSmall).css('height')) + parseInt(jQuery(currxSmall).css('margin-bottom'));
                } else {
                    tempContainerHeight = tempContainerHeight + parseInt(jQuery(currxSmall).css('height')) + parseInt(jQuery(currxSmall).css('margin-bottom')) +
                        parseInt(jQuery(currxSmall).css('padding-bottom'));

                }
            }
            jQuery('.previewContainer-largeShow-Head').css('min-height', tempContainerHeight + 'px');

        }
        setTimeout(function() {
            feba.domManipulator.styleComboboxes((jQuery('select[id^="PageMaintenanceHomePage_STATIC_TemplateDetails:PageMaintenanceFG.CONTAINER"]')), {
                literals: {
                    noItemFound: getMessage("comboBoxNoItemFoundMsg"),
                    showAll: getMessage("comboBoxShowAllButton")
                }

            });
        }, 500)
    },
    PageMaintainanceConfirmAuthorization_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/PageMaintenanceFunctions.js");
    },


    PageMaintenanceCreateSubscribers_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/GroupletCommunication.js");
    },
    PageMaintenanceIGCConfig_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/GroupletCommunication.js");
        convertComboboxes();
    },
    PageMaintenanceIGCConfigForUpdate_onload: function() {
        feba.domManipulator.loadScript("scripts/module/applicationmaintenance/GroupletCommunication.js");
        convertComboboxes();
    },
    PageMaintenanceLandingPage_onload: function() {
        if (document.createStyleSheet) {
            document.createStyleSheet("L001/consumer/theme/jcarousel_styles.css");
        } else {
            jQuery('head').append('<link rel="stylesheet" href="L001/consumer/theme/jcarousel_styles.css" type="text/css" />');
        }
    },
    PageMaintenaceTemplateList_onload: function(groupletId) {
        //jQuery('.jcarousel-list-horizontal').css(left,'-600px');
        setTimeout(function() {
            jQuery('#' + groupletId).css('height', '300px');
            console.log("assigned height auto in template list");
        }, 1000);
    },
    BondHoldingsListUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/module/bonds/NBondNameLookupDetails.js");
    },
    PageMaintenanceConfirmationScreen_onload: function() {
        feba.js.common.displayWarning = "N";
    },

    PageMaintenaceUpdateConfigurationContainer_onload: function() {
        if (document.createStyleSheet) {
            document.createStyleSheet("L001/consumer/theme/jcarousel_styles.css");
        } else {
            jQuery('head').append('<link rel="stylesheet" href="L001/consumer/theme/jcarousel_styles.css" type="text/css" />');
        }
    },

    /**Function moved from NCxpsCallFunctionsResponse.js
     * Added for Two factor Authentication -- Start-- **/
    TFADataCaptureUX5_onload: function(groupletId) {
        var elementId = 'FormManagementFG.AUTH_MODE';
        var elementId1 = 'FormManagementFG.TERMSANDCOND';
        var innerElementId = 'DataEntry_LeftContainer_Stage39.Rb2b';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            elementId = groupletId + ":" + elementId;
            innerElementId = groupletId + ":" + innerElementId;
            elementId1 = groupletId + ":" + elementId1;
        }
        var value = document.getElementById(elementId).value;

        if (value == Constants.DIGITAL_MOBITOKEN) {
            jQuery("[id='" + innerElementId + "']").hide();
        }
        if (value == Constants.DEVICE_BASED_MOBITOKEN || value == Constants.SMS_BASED_MOBITOKEN || value == "") {
            jQuery("[id='" + innerElementId + "']").show();
        }
        jQuery("[id='" + elementId1 + "']").parent().removeAttr("class");
        jQuery("[id='" + elementId1 + "']").parent().addClass('stage3_additionaldetailslink_nextgen');
        feba.domManipulator.bind(feba.domManipulator.getElementById(elementId), "change", function() {
            var value = document.getElementById(elementId).value;

            if (value == Constants.DIGITAL_MOBITOKEN) {
                jQuery("[id='" + innerElementId + "']").hide();
            }
            if (value == Constants.DEVICE_BASED_MOBITOKEN || value == Constants.SMS_BASED_MOBITOKEN || value == "") {
                jQuery("[id='" + innerElementId + "']").show();
            }


        });
        /** Added for Two factor Authentication-- End-- **/
    },
    SRTwoFactorAuthModeReqRetDC_onload: function(groupletId) {
        var elementId = 'FormManagementFG.AUTH_MODE';
        var elementId1 = 'FormManagementFG.TERMSANDCOND';
        var innerElementId = 'DataEntry_LeftContainer_Stage39.Rb2b';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            elementId = groupletId + ":" + elementId;
            innerElementId = groupletId + ":" + innerElementId;
            elementId1 = groupletId + ":" + elementId1;
        }
        jQuery("[id='" + elementId1 + "']").parent().removeAttr("class");
        jQuery("[id='" + elementId1 + "']").parent().addClass('stage3_additionaldetailslink_nextgen');
        feba.domManipulator.bind(feba.domManipulator.getElementById(elementId), "change", function() {
            var value = document.getElementById(elementId).value;

            if (value == Constants.DIGITAL_MOBITOKEN) {
                jQuery("[id='" + innerElementId + "']").hide();
            }
            if (value == Constants.DEVICE_BASED_MOBITOKEN || value == Constants.SMS_BASED_MOBITOKEN || value == "") {
                jQuery("[id='" + innerElementId + "']").show();
            }


        });
        /** Added for Two factor Authentication-- End-- **/
    },
    SRTwoFactorAuthModeReqRetDC_onload: function(groupletId) {
        var elementId = 'FormManagementFG.AUTH_MODE';
        var elementId1 = 'FormManagementFG.TERMSANDCOND';
        var innerElementId = 'DataEntry_LeftContainer_Stage39.Rb2b';
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            elementId = groupletId + ":" + elementId;
            innerElementId = groupletId + ":" + innerElementId;
            elementId1 = groupletId + ":" + elementId1;
        }
        jQuery("[id='" + elementId1 + "']").parent().removeAttr("class");
        jQuery("[id='" + elementId1 + "']").parent().addClass('stage3_additionaldetailslink_nextgen');
        feba.domManipulator.bind(feba.domManipulator.getElementById(elementId), "change", function() {
            var value = document.getElementById(elementId).value;

            if (value == Constants.DIGITAL_MOBITOKEN) {
                jQuery("[id='" + innerElementId + "']").hide();
            }
            if (value == Constants.DEVICE_BASED_MOBITOKEN || value == Constants.SMS_BASED_MOBITOKEN || value == "") {
                jQuery("[id='" + innerElementId + "']").show();
            }


        });
        /** Added for Two factor Authentication-- End-- **/
    },
    DCLDataCaptureUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },

    RASDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    RASCorp_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    RASRetail_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    DCLDataCaptureUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    ODSDataCaptureUX5_onload: function(groupletId) {

        var tickIcons = jQuery('.css-labelcheckbox');
        for (i = 0; i < tickIcons.length; i++) {
            console.log('test');
            var currElem = tickIcons[i];
            var checkBocElem = jQuery(currElem).siblings();
            var elemeId = jQuery(checkBocElem).attr('id');
            var elemeVal = document.getElementById(elemeId);
            jQuery(currElem).attr('onClick', "passOverdraftStatusValuetonclick('" + elemeId + "','" + groupletId + "');");
        }

    },
    ODSRequestConfirmationUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery('.css-labelcheckbox').die('click');
            jQuery('.css-labelcheckbox').unbind('click');
        }, 1000);
    },
    ODSDetailsDisplayUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery('.css-labelcheckbox').die('click');
            jQuery('.css-labelcheckbox').unbind('click');
        }, 2000);
    },
    ODSCyberReceiptUX5_onload: function(groupletId) {
        setTimeout(function() {
            jQuery('.css-labelcheckbox').die('click');
            jQuery('.css-labelcheckbox').unbind('click');
        }, 1000);
    },
    SRRetailStopCheque_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    SRCorporateStopCheque_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    DCLRetail_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    DCLCorp_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },

    CDCDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";
            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    CancelDebitCardRetail_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            //Fix for Defect 203218 : to Enable check box for  Apply for Replacement Card
            jQuery("[id='" + groupletId + ":FormManagementFG.APPLYCARD']").css({
                'visibility': 'visible',
                'position': 'initial'
            });

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    CancelDebitCardCorp_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            //Fix for Defect 203218 : to Enable check box for  Apply for Replacement Card
            jQuery("[id='" + groupletId + ":FormManagementFG.APPLYCARD']").css({
                'visibility': 'visible',
                'position': 'initial'
            });

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },

    RDBDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },
    FDODataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },
    SRRetailFDOpeningDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },
    SRCorporateFDOpeningDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },
    AADDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NmaterializedynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NmaterializedynamicFetch.js");
        }

    },
    ApplyDebitCardCorpDC_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NmaterializedynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NmaterializedynamicFetch.js");
        }

        var var1 = jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rsp4\\.C2']");
        var var2 = jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rsp5\\.C2']");
        if (var1.hasClass('img')) {
            var1.css('padding-' + left + '', '46%');
        }
        if (var2.hasClass('img')) {
            var2.css('padding-' + left + '', '46%');
        }
    },
    ApplyDebitCardRetailDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NmaterializedynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NmaterializedynamicFetch.js");
        }
        var var1 = jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rsp4\\.C2']");
        var var2 = jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rsp5\\.C2']");
        if (var1.hasClass('img')) {
            var1.css('padding-' + left + '', '46%');
        }
        if (var2.hasClass('img')) {
            var2.css('padding-' + left + '', '46%');
        }

    },
    ADSDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ADSRetail_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ADSCorp_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ADSRequestConfirmationUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ADSDetailsDisplayUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    ADSCyberReceiptUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ADSRetail_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ADSCorp_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    RDODataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },
    SRRetailGiftCardReq_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            if (viewport().width >= 480 && viewport().width < 640) {
                if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
                    jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.1.LOOK_UP__']").attr('style', 'margin-' + left + ': 197px !important');
                    jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.2.LOOK_UP__']").attr('style', 'margin-' + left + ': 197px !important');

                }
                jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.1.LOOK_UP__']").attr('style', 'margin-' + left + ': 203px !important');
                jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.2.LOOK_UP__']").attr('style', 'margin-' + left + ': 203px !important');
            }
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },

    SRCorporateGiftCardReq_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            if (viewport().width >= 480 && viewport().width < 640) {
                if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
                    jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.1.LOOK_UP__']").attr('style', 'margin-' + left + ': 197px !important');
                    jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.2.LOOK_UP__']").attr('style', 'margin-' + left + ': 197px !important');

                }
                jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.1.LOOK_UP__']").attr('style', 'margin-' + left + ': 203px !important');
                jQuery("[id='PageConfigurationMaster_RNWUX5W__1:StateCodesListFG.2.LOOK_UP__']").attr('style', 'margin-' + left + ': 203px !important');
            }
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },
    GCRRequestConfirmationUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    GCRCyberReceiptUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRCorporateFDOpening_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var windowWidth = viewport().width;
            if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 711) {
                jQuery("[id='" + groupletId + ":AccountDetailsFG.LOOK_UP__']").parent().css('margin-' + left + '', '47%');
                jQuery("[id='" + groupletId + ":hm2']").css('width', '113px');
                jQuery("[id='" + groupletId + ":hm5']").css('width', '113px');

            }
            jQuery(window).resize(function() {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 711) {
                    jQuery("[id='" + groupletId + ":AccountDetailsFG.LOOK_UP__']").parent().css('margin-' + left + '', '47%');
                    jQuery("[id='" + groupletId + ":hm2']").css('width', '113px');
                    jQuery("[id='" + groupletId + ":hm5']").css('width', '113px');
                } else {
                    jQuery("[id='" + groupletId + ":AccountDetailsFG.LOOK_UP__']").parent().css('margin-' + left + '', '0%');

                }
            });
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }

    },
    SRRetailFDRenewalDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='PageConfigurationMaster_WA101__1:DataEntry_LeftContainer_Stage39.Re10a.C2']").attr('style', 'margin-top: 6px; !important');
            if (viewport().width >= 480 && viewport().width < 640) {
                jQuery("[id='" + groupletId + ":interest2']").attr('style', 'margin-' + left + ' :55% !important');
                jQuery("[id='" + groupletId + ":interest3']").attr('style', 'margin-' + left + ' :55% !important');
            } else if (viewport().width >= 640 && viewport().width <= 900) {
                jQuery("[id='" + groupletId + ":interest2']").attr('style', 'margin-' + left + ' :52% !important');
                jQuery("[id='" + groupletId + ":interest3']").attr('style', 'margin-' + left + ' :52% !important');
            } else {
                jQuery("[id='" + groupletId + ":interest2']").attr('style', 'margin-' + left + ' :50.75% !important');
                jQuery("[id='" + groupletId + ":interest3']").attr('style', 'margin-' + left + ' :50.75% !important');
            }
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }




        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateFDRenewalDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='PageConfigurationMaster_WA101__1:DataEntry_LeftContainer_Stage39.Re10a.C2']").attr('style', 'margin-top: 6px; !important');
            if (viewport().width >= 480 && viewport().width < 640) {
                jQuery("[id='" + groupletId + ":interest2']").attr('style', 'margin-' + left + ' :55% !important');
                jQuery("[id='" + groupletId + ":interest3']").attr('style', 'margin-' + left + ' :55% !important');
            } else if (viewport().width >= 640 && viewport().width <= 900) {
                jQuery("[id='" + groupletId + ":interest2']").attr('style', 'margin-' + left + ' :52% !important');
                jQuery("[id='" + groupletId + ":interest3']").attr('style', 'margin-' + left + ' :52% !important');
            } else {
                jQuery("[id='" + groupletId + ":interest2']").attr('style', 'margin-' + left + ' :50.75% !important');
                jQuery("[id='" + groupletId + ":interest3']").attr('style', 'margin-' + left + ' :50.75% !important');
            }
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }




        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateActivateDebitCardReq_onload: function(groupletId) {
        var windowWidth = viewport().width;
        if (parseInt(windowWidth) < 640) {
            jQuery(".stage3_inputpanel_column").css("width", "38%");
        }
    },
    SRRetailAccountStatement_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C1']").removeClass('stage3_inputpanel_column');
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C1']").addClass('stage3_inputpanel_column_Ebux3');
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C2']").removeClass('querytextright_stage3');
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C2']").addClass('stage3_Notesdetailslink');
            jQuery(".absmiddle1").attr('style', 'margin-top :-5px  !important ; ' + left + ' : 10px !important ; visibility : inherit !important');
            jQuery(".paddingbottom27").attr('style', 'margin-top :-2px !important ; margin-' + right + ' : 1px !important');

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
        if (groupletId == "PageConfigurationMaster_ASRUX4W__1") {
            if (jQuery('#FormManagementFG\\.REPORTTITLE').attr('value') == "ASRDataCaptureUX5") {
                jQuery('.HW_formbtn_search').hide();
            }
        }
    },
    SRCorporateAccountStatement_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C1']").removeClass('stage3_inputpanel_column');
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C1']").addClass('stage3_inputpanel_column_Ebux3');
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C2']").removeClass('querytextright_stage3');
            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rb10.C2']").addClass('stage3_Notesdetailslink');
            jQuery(".absmiddle1").attr('style', 'margin-top :-5px  !important ; ' + left + ' : 10px !important ; visibility : inherit !important');
            jQuery(".paddingbottom27").attr('style', 'margin-top :-2px !important ; margin-' + right + ' : 1px !important');

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailAccountStatementConf_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".step-tracker .step-tracker-line").attr('style', 'margin-top :44px');
    },
    SRCorporateAccountStatementConf_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        jQuery(".step-tracker .step-tracker-line").attr('style', 'margin-top :44px');
    },
    SRRetailAccountStatementCy_onload: function(groupletId) {
        jQuery(".step-tracker .step-tracker-line").attr('style', 'margin-top :44px');
    },
    SRCorporateAccountStatementCy_onload: function(groupletId) {
        jQuery(".step-tracker .step-tracker-line").attr('style', 'margin-top :44px');
    },
    MWNDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBANoticesTrnsfrAcctType";

            script.src = "scripts/NFEBANoticesTrnsfrAcctType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBANoticesTrnsfrAcctType.js");
        }
    },
    WithdrawlNoticesRetail_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBANoticesTrnsfrAcctType";

            script.src = "scripts/NFEBANoticesTrnsfrAcctType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);

            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBANoticesTrnsfrAcctType.js");
        }
    },
    WithdrawlNoticesCorp_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBANoticesTrnsfrAcctType";

            script.src = "scripts/NFEBANoticesTrnsfrAcctType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBANoticesTrnsfrAcctType.js");
        }
    },
    NWNDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBANoticesTrnsfrAcctType";

            script.src = "scripts/NFEBANoticesTrnsfrAcctType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBANoticesTrnsfrAcctType.js");
        }
    },
    CWNDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBANoticesTrnsfrAcctType";

            script.src = "scripts/NFEBANoticesTrnsfrAcctType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBANoticesTrnsfrAcctType.js");
        }
    },
    ASRDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    DRRDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRcorpDebitcardredeem_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRDebitcardredeem_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'NdynamicFetch';

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    FileUploadProductTypeUX5_onload: function(groupletId) {
        jQuery(".productTypeListShadow").attr('style', 'height :0px');
        jQuery(".stage3_listingpaneldiv").attr('style', 'border-bottom: none');

    },
    SRRetailReissueATMPinReq_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        var windowWidth = viewport().width;
        if (parseInt(windowWidth) > 700) {
            jQuery(".lookup_buttonlarge").attr('style', 'margin-' + left + ': 0% !important');
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NFEBADebitCardDtlsCheck";
            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    SRCorporateReissueATMPinReq_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        var windowWidth = viewport().width;
        if (parseInt(windowWidth) > 700) {
            jQuery(".lookup_buttonlarge").attr('style', 'margin-' + left + ': 0% !important');
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            var script = document.createElement('script');
            script.id = "NFEBADebitCardDtlsCheck";
            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    NDPRequestConfirmationUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    NDPCyberReceiptUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    RDORequestConfirmationUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRRetailAppVirtualCardRepDC_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRCorporateAppVirtualCardRepDC_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRRetailAppVirtualCardRep_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRCorporateAppVirtualCardRep_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRRetailAppVirtualCardRepCy_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRCorporateAppVirtualCardRepCy_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    SRRetailFDOpening_onload: function(groupletId) {
        if (viewport().width >= 480 && viewport().width <= 639) {
            if (feba.domManipulator.isRTL()) {
                jQuery(".labelColumn_combo_small").attr('style', 'padding-' + left + ' :13px !important');
            } else {
                jQuery(".labelColumn_combo_small").attr('style', 'padding-' + right + ' :13px !important');
            }
        } else if (viewport().width >= 640 && viewport().width <= 711) {
            if (feba.domManipulator.isRTL()) {
                jQuery(".labelColumn_combo_small").attr('style', 'padding-' + left + ' :13px !important; margin-' + left + ' :10px !important');
            } else {
                jQuery(".labelColumn_combo_small").attr('style', 'padding-' + right + ' :13px !important; margin-' + right + ' :10px !important');
            }
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var windowWidth = viewport().width;
            if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 711) {
                jQuery("[id='" + groupletId + ":AccountDetailsFG.LOOK_UP__']").parent().css('margin-' + left + '', '47%');
                jQuery("[id='" + groupletId + ":hm2']").css('width', '113px');
                jQuery("[id='" + groupletId + ":hm5']").css('width', '113px');

            }
            jQuery(window).resize(function() {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 639 && parseInt(windowWidth) <= 711) {
                    jQuery("[id='" + groupletId + ":AccountDetailsFG.LOOK_UP__']").parent().css('margin-' + left + '', '47%');
                    jQuery("[id='" + groupletId + ":hm2']").css('width', '113px');
                    jQuery("[id='" + groupletId + ":hm5']").css('width', '113px');
                } else {
                    jQuery("[id='" + groupletId + ":AccountDetailsFG.LOOK_UP__']").parent().css('margin-' + left + '', '0%');

                }
            });
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailFDBreakingDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='PageConfigurationMaster_WA101__1:DataEntry_LeftContainer_Stage39.Re10a.C2']").attr('style', 'margin-top: 6px; !important');
            if (viewport().width == 480) {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".labelColumn_combo_small").attr('style', 'padding-' + left + ' :11px !important');
                } else {
                    jQuery(".labelColumn_combo_small").attr('style', 'padding-' + right + ' :11px !important');
                }
            } else if (viewport().width == 640) {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".btn").attr('style', 'padding-' + right + ' :6px !important;padding-' + left + ' :6px !important');
                } else {
                    jQuery(".btn").attr('style', 'padding-' + left + ' :6px !important;padding-' + right + ' :6px !important');
                }
            }
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ViewJointAccountDetailsUX5_onload: function(groupletId) {
        jQuery('.tableoverflowwrapperhw').attr('style', 'border-' + right + ': 1px solid #CCCCCC');
        jQuery('table td .searchsimpletext_wrapnew').attr('style', 'color: inherit;');
    },
    SRCorporateFDBreakingDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='PageConfigurationMaster_WA101__1:DataEntry_LeftContainer_Stage39.Re10a.C2']").attr('style', 'margin-top: 6px; !important');
            if (viewport().width == 480) {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".labelColumn_combo_small").attr('style', 'padding-' + left + ' :11px !important');
                } else {
                    jQuery(".labelColumn_combo_small").attr('style', 'padding-' + right + ' :11px !important');
                }
            } else if (viewport().width == 640) {
                if (feba.domManipulator.isRTL()) {
                    jQuery(".btn").attr('style', 'padding-' + right + ' :6px !important;padding-' + left + ' :6px !important');
                } else {
                    jQuery(".btn").attr('style', 'padding-' + left + ' :6px !important;padding-' + right + ' :6px !important');
                }
            }
            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');

            var1.css('height', '0px');
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    FDODataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    UpdateImagePhrase_onload: function(groupletId) {
        jQuery('.stage3_steptracker_mandatory').css('color', '#505050');
        jQuery(".labelcolumnsmall").attr('style', 'padding-top: 3px !important');
    },
    LORDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateCarLoan_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailCarLoan_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ODLAccountsListUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailchng_ovlmt_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    ODRDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailRequestDDReq_onload: function(groupletId) {

        var windowWidth = viewport().width;
        if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 720) {
            jQuery(".labelColumn").css("width", "45%");
        } else {
            jQuery(".labelColumn").css("width", "253px");
        }

        jQuery(window).resize(function() {
            windowWidth = viewport().width;
            if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 720) {
                jQuery(".labelColumn").css("width", "45%");
            } else {
                jQuery(".labelColumn").css("width", "253px");
            }
        });

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateRequestDDReq_onload: function(groupletId) {

        var windowWidth = viewport().width;
        if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 720) {
            jQuery(".labelColumn").css("width", "45%");
        } else {
            jQuery(".labelColumn").css("width", "253px");
        }

        jQuery(window).resize(function() {
            windowWidth = viewport().width;
            if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 720) {
                jQuery(".labelColumn").css("width", "45%");
            } else {
                jQuery(".labelColumn").css("width", "253px");
            }
        });

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateSwitchMailingAddressList_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },

    //SRCorporateQueryList_onload: function(groupletId){
    //
    //	if(groupletId && groupletId!=null && groupletId.length>0 && groupletId!="undefined"){
    //		 var vpWidth1 = viewport().width;
    //			if(parseInt(vpWidth1)>=480 && parseInt(vpWidth1)<=620){
    //				jQuery('.stage3_searchpaneldiv  .collapsible-wrapper').css("overflow","visible");
    //			}
    //	}
    //},

    SMACIFIdListUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    UATAccountsListUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SMADataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailSwitchMailingAddressList_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateSwitchMailingAddressList_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    UATDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    UpdateAddressType_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    UNDDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            if (viewport().width >= 480 && viewport().width < 640) {
                if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
                    jQuery("[id='" + groupletId + ":StateCodesListFG.LOOK_UP__']").attr('style', 'margin-' + left + ': 197px !important');
                } else {
                    jQuery("[id='" + groupletId + ":StateCodesListFG.LOOK_UP__']").attr('style', 'margin-' + left + ': 203px !important');
                }
            }
            jQuery(".dropdown-button.more").attr('style', 'line-height: 14px !important');
            setTimeout(function() {
                jQuery(".hasPulldownMenu").attr('style', 'margin-top: -11px !important');

            }, 2000);

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    UNDDetailsDisplayUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);

        jQuery(".stage3_listingpaneldiv").css('border-top', '1px solid #E0E0E0');
    },
    EditNomineeDetailsDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    EditNomineeDetailsConf_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);

    },
    EditNomineeDetailsCy_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);

    },
    RRPDataCapture_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    CACDataCapture_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    CHKDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRCorporateChequeBookRequestDC_onload: function(groupletId) {
        //added below line to fix 768165
        feba.domManipulator.getElement(document).scrollTop(0);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSectHeader2']").addClass('h3new');
            jQuery("[id='PageConfigurationMaster_WA101__1:DataEntry_LeftContainer_Stage39.Rb10a.C2']").attr('style', 'margin-top: 6px; !important');

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    SRRetailChequeBookRequestDC_onload: function(groupletId) {
        //added below line to fix 768165
        feba.domManipulator.getElement(document).scrollTop(0);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSectHeader2']").addClass('h3new');
            jQuery("[id='PageConfigurationMaster_WA101__1:DataEntry_LeftContainer_Stage39.Rb10a.C2']").attr('style', 'margin-top: 6px; !important');

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
        }
    },
    BDCDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    BlockDebitCardCorpDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSectHeader2']").addClass('h3new');

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    BlockDebitCardRetailDC_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.SubSectHeader2']").addClass('h3new');

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    ADPDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    SRRetailActivateDebitCard_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    SRCorporateActivateDebitCard_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardDtlsCheck";

            script.src = "scripts/NFEBADebitCardDtlsCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBADebitCardDtlsCheck.js");
        }
    },
    DPCDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    DPCRetail_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    DPCCorp_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardPopulate";

            script.src = "scripts/module/servicerequest/NFEBADebitCardPopulate.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardPopulate.js");
        }
    },
    USCDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }

        jQuery("[id='" + groupletId + ":unstopMultipleCheque']").css('width', '43%');
    },
    USCDataCaptureRet_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }
        jQuery("[id='" + groupletId + ":unstopMultipleCheque']").css('width', '43%');

    },
    USCDataCaptureCorp_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }
        jQuery("[id='" + groupletId + ":unstopMultipleCheque']").css('width', '43%');

    },
    SRRetailCancelStopCheque_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }

    },
    SRCorporateCancelStopCheque_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX5";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }

    },

    CPLPersonalizeLimitsUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX5";

            script.src = "scripts/radioChangeSRUX5.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX5.js");
        }
        setTimeout(function() {
            var drpVal = jQuery("[id*='FormManagementFG.EFF_TXN_TYPE']").val();
            var button = jQuery("[id*='PageConfigurationMaster_SPLUX5W__1:PersonalizeLimitsFG.LOOK_UP__']");
            var buttonParent = jQuery(button).parent();
            if (drpVal != "") {
                jQuery(buttonParent).removeClass("disabled");
            }

        }, 0);
    },
    CPLDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX5";

            script.src = "scripts/radioChangeSRUX5.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX5.js");
        }
        jQuery(".searchsimpletext_Recharge").attr('style', 'font-size : 14px !important; padding-top : 13px !important');
        if (navigator.userAgent.indexOf('MSIE') !== -1 ||
            navigator.appVersion.indexOf('Trident/') > 0) {
            var windowWidth = viewport().width;
            if (parseInt(windowWidth) == 480) {
                jQuery('.querytextboxmedium_small').css('width', '166px');
            }
            jQuery(window).resize(function() {
                //for indicator
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) == 480) {
                    jQuery('.querytextboxmedium_small').css('width', '166px');
                }
            });
        }
        setTimeout(function() {
            var dd1 = jQuery("[id*='FormManagementFG.EFF_TXN_TYPE']").parent().siblings(".autocomplete-dropdown");
            var dd2 = jQuery("[id*='FormManagementFG.CHANNEL_ID']").parent().siblings(".autocomplete-dropdown");
            dd1.prop('readonly', true);
            dd1.attr('disabled', true);
            dd2.prop('readonly', true);
            dd2.attr('disabled', true);
            var selId1 = jQuery("[id*='FormManagementFG.EFF_TXN_TYPE']");
            var selId2 = jQuery("[id*='FormManagementFG.CHANNEL_ID']");
            var par1 = selId1.parent();
            var par2 = selId2.parent();
            var head1 = par1.parent();
            var head2 = par2.parent();
            var sp1 = head1.find(".icon-dropdown");
            var sp2 = head2.find(".icon-dropdown");
            sp1.addClass("disablePointerEvents");
            sp2.addClass("disablePointerEvents");
        }, 0);

    },

    INCollectionRequestUX5_onload: function(groupletId) {

        if (isGroupletExecution(groupletId)) {
            var script = document.createElement('script');
            script.id = "idIMRequestCollection";
            script.src = "scripts/module/inmg/IMRequestCollection.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/inmg/IMRequestCollection.js");
        }
    },

    INCollectionModifyRequestUX5_onload: function(groupletId) {

        if (isGroupletExecution(groupletId)) {
            var script = document.createElement('script');
            script.id = "idIMRequestCollection";
            script.src = "scripts/module/inmg/IMRequestCollection.js?groupletId=" + groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/inmg/IMRequestCollection.js");
        }
    },


    IMGDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }
    },

    SCRDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }

    },
    SCRDataCaptureUX5Corp_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {

                document.head.appendChild(script);
            } else {

                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }

    },
    SCRDataCaptureUX5Retail_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {

                document.head.appendChild(script);
            } else {

                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {

            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }

    },
    SRRetailChequeImage_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {



            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }
    },
    SRCorporateChequeImage_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {



            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";
            var var1 = jQuery("[id='" + groupletId + ":DataEntry_LeftContainer_Stage39.Rhh1b']").css('border-bottom', 'none');
            var1.css('height', '0px');
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }
    },
    CRDataCaptureUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "radioChangeSRUX3";

            script.src = "scripts/radioChangeSRUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/radioChangeSRUX3.js");
        }
    },
    CCAccountDetailsWidUX4_onload: function(groupletId) {
        convertComboboxes();
    },
    DpAccountDetailsWidUX4_onload: function(groupletId) {
        convertComboboxes();
    },
    OpAccountDetailsRetWidUX4_onload: function(groupletId) {
        convertComboboxes();
    },
    GroupAccountSummaryUX4_onload: function(groupletId) {
        if (jQuery('.container-consoAccntSummary').height() < 690) {
            jQuery('.container-consoAccntSummary').css('margin-bottom', '21%')
        } else {
            jQuery('.container-consoAccntSummary').css('margin-bottom', '7%')
        }
        feba.domManipulator.loadScript("scripts/module/accounts/AccountSummaryPulldownMenu.js");
        //feba.domManipulator.loadScript("scripts/common/NAccountSummaryPulldownMenu.js");
        console.log("alert----------------end");
        //code added for showing page heading in Next-gen screens
        var content;
        if (jQuery("#nextGenPgHeading").length === 0) {
            content = jQuery('.container-consoAccntSummary').find('h1');
            jQuery("<div id='nextGenPgHeading'></div>").insertAfter("#BrdCrumbNImg");
            jQuery("#nextGenPgHeading").wrapInner(content);
            jQuery("#nextGenPgHeading").addClass('section pageheadingcapsUX4');
        } else {
            jQuery("#nextGenPgHeading").remove();
            content = jQuery('.container-consoAccntSummary').find('h1');
            jQuery("<div id='nextGenPgHeading'></div>").insertAfter("#BrdCrumbNImg");
            jQuery("#nextGenPgHeading").wrapInner(content);
            jQuery("#nextGenPgHeading").addClass('section pageheadingcapsUX4');
        }
        //loadArrowForFirstElement();
        var noXSmallElements = jQuery('.container-nxtGenxtrasmall').length;
        for (i = 0; i < noXSmallElements; i++) {
            var currElement = jQuery('.container-nxtGenxtrasmall')[i];
            if (jQuery(currElement).children('.widget').length > 0) {
                jQuery(currElement).removeClass('hideElement');
            }
        }

        jQuery(window).resize(function() {
            //for indicator
            var windowWidth = viewport().width;
            if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 990) {
                jQuery(".accountSelectIndicator").css(left, "33.8%");
                jQuery(".accountSelectBorderIndicator").css(left, "33.8%");
            } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                jQuery(".accountSelectIndicator").css(left, "94%");
                jQuery(".accountSelectBorderIndicator").css(left, "94%");
            } else {
                jQuery(".accountSelectIndicator").css(left, "33.7%");
                jQuery(".accountSelectBorderIndicator").css(left, "33.7%");
            }

            //for chart in lower resolution
            if (jQuery("HTML").css("direction") == "rtl") {
                if (parseInt(windowWidth) <= 990) {
                    jQuery('.accountSelectBorderIndicator').css("display", "none");
                    jQuery('.accountSelectIndicator').css("display", "none");
                } else {
                    jQuery(".accountSelectIndicator").css(left, "63.7%");
                    jQuery(".accountSelectBorderIndicator").css(left, "63.5%");
                    jQuery('.accountSelectBorderIndicator').css("display", "block");
                    jQuery('.accountSelectIndicator').css("display", "block");
                }
            }
            if (parseInt(windowWidth) >= 900 && parseInt(windowWidth) <= 1035) {
                jQuery(".legendHolder").css("width", "32%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "250px");
            } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 900) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");
            } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 640) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "335px");
            } else {
                jQuery(".legendHolder").css("width", "42%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "255px");
            }
        });
    },
    DpAccDonutChartUX4_onload: function() {
        convertComboboxes();
        var windowWidth = viewport().width;
        //for chart in lower resolution on load width
        if (parseInt(windowWidth) >= 963 && parseInt(windowWidth) <= 1035) {
            jQuery(".legendHolder").css("width", "38%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "250px");
        } else if (parseInt(windowWidth) >= 900 && parseInt(windowWidth) <= 963) {
            jQuery(".legendHolder").css("width", "100%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");
        } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 900) {
            jQuery(".legendHolder").css("width", "100%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");
        } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 640) {
            jQuery(".legendHolder").css("width", "100%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "335px");
        } else {
            jQuery(".legendHolder").css("width", "42%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "255px");
        }
        jQuery(window).resize(function() {
            var windowWidthInFunc = viewport().width;
            //for chart in lower resolution on load width
            if (parseInt(windowWidthInFunc) >= 963 && parseInt(windowWidthInFunc) <= 1035) {
                jQuery(".legendHolder").css("width", "38%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "250px");
            } else if (parseInt(windowWidthInFunc) >= 900 && parseInt(windowWidthInFunc) <= 963) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");

            } else if (parseInt(windowWidthInFunc) >= 640 && parseInt(windowWidthInFunc) <= 900) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");
            } else if (parseInt(windowWidthInFunc) >= 0 && parseInt(windowWidthInFunc) <= 640) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "335px");
            } else {
                jQuery(".legendHolder").css("width", "42%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "255px");
            }
        });
    },
    LnAccDonutChartUX4_onload: function() {
        convertComboboxes();
        var windowWidth = viewport().width;
        //for chart in lower resolution on load width
        if (parseInt(windowWidth) >= 963 && parseInt(windowWidth) <= 1035) {
            jQuery(".legendHolder").css("width", "38%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "250px");
        } else if (parseInt(windowWidth) >= 900 && parseInt(windowWidth) <= 963) {
            jQuery(".legendHolder").css("width", "100%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");
        } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 900) {
            jQuery(".legendHolder").css("width", "100%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");
        } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 640) {
            jQuery(".legendHolder").css("width", "100%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "335px");
        } else {
            jQuery(".legendHolder").css("width", "42%");
            jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "255px");
        }
        jQuery(window).resize(function() {
            var windowWidthInFunc = viewport().width;
            //for chart in lower resolution on load width
            if (parseInt(windowWidthInFunc) >= 963 && parseInt(windowWidthInFunc) <= 1035) {
                jQuery(".legendHolder").css("width", "38%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "250px");
            } else if (parseInt(windowWidthInFunc) >= 900 && parseInt(windowWidthInFunc) <= 963) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");

            } else if (parseInt(windowWidthInFunc) >= 640 && parseInt(windowWidthInFunc) <= 900) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "330px");
            } else if (parseInt(windowWidthInFunc) >= 0 && parseInt(windowWidthInFunc) <= 640) {
                jQuery(".legendHolder").css("width", "100%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "335px");
            } else {
                jQuery(".legendHolder").css("width", "42%");
                jQuery(".container-nxtGenxtrasmall .widget-small .widget-content").css("min-height", "255px");
            }
        });
    },
    AccountSummaryChartViewUX4_onload: function(groupletId) {
        convertComboboxes();
        if (jQuery('embed').length > 0) {
            jQuery('embed').css('margin-' + left + '', '20%');
        }
        /*jQuery(jQuery('.donutItem')[0]).addClass('donutSelected');
        jQuery('.donutItem').click(function() {
        console.log("1");
        	jQuery('.donutSelected').removeClass('donutSelected');
        	jQuery(this).addClass('donutSelected');

        });*/
        jQuery('.chartFooterDisplay').show();
        if (jQuery('#' + groupletId).find('embed').length == 1) {
            jQuery('.donutItem').addClass('donutItemSingle');
        }

        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
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
        });

        jQuery(jQuery('.donutItem')[0]).addClass('donutSelected');
        var idname = jQuery(jQuery('.donutItem')[0]).attr('data-jsVarName');
        var newId = idname;
        if (newId) {
            var stylepathOriginal = eval(newId).stylePath
            var stylepath = eval(newId).stylePath;
            stylepath = stylepath.replace("/FebaStyle.properties", "/FebaStyleSingleDonut.properties");
            eval(newId).stylePath = stylepath;
            eval(newId).styleOrigPath = stylepathOriginal;
            FINANZTOOLS.taglib.showChart(eval(newId));

            jQuery('.donutItem').mousedown(function() {
                console.log("1");
                //
                var idname = jQuery(jQuery('.donutSelected')[0]).attr('data-jsVarName');
                var newId = idname;
                var stylepathOriginal = eval(newId).stylePath
                var stylepath = eval(newId).styleOrigPath;
                eval(newId).stylePath = stylepath;
                FINANZTOOLS.taglib.showChart(eval(newId));
                //
                jQuery('.donutSelected').removeClass('donutSelected');
                jQuery(this).addClass('donutSelected');
                var objName = jQuery(this).attr("data-jsVarName");
                //
                var stylepathOriginal = eval(objName).stylePath
                var stylepath = eval(objName).stylePath;
                stylepath = stylepath.replace("/FebaStyle.properties", "/FebaStyleSingleDonut.properties");
                eval(objName).stylePath = stylepath;
                eval(objName).styleOrigPath = stylepathOriginal;
                FINANZTOOLS.taglib.showChart(eval(objName));

                //
            });
        } else {

            if (feba.domManipulator.getElementById('display_error_var').attr("value") == "A") {
                var errorMessage = "<div id=\"noAccWrapper\" role=\"alert\" class=\"redbg width100Container\"><a id=\"errorlink1\" href=\"#\"><img class=\"absmiddle\" title=\"" + getMessage("noAccForCriteriaMessage") + "\" " +
                    "alt=\"" + getMessage("NoWidgetsAlt") + "\" src=\"" + getMessage("NoWidgetsImageSrc") + "\"></a><span dir=\"ltr\"><p style=\"display: inline\" > [CONTLS0004] </p><p style=\"display: inline\" > [105246] </p></span> <p style=\"display: inline\" > " + getMessage("noAccForCriteriaMessage") + "</p></div>";
            } else if (feba.domManipulator.getElementById('display_error_var').attr("value") == "E") {
                var errorMessage = "<div id=\"noAccWrapper\" role=\"alert\" class=\"redbg width100Container\"><a id=\"errorlink1\" href=\"#\"><img class=\"absmiddle\" title=\"" + getMessage("noAccForCriteriaMessage") + "\" " +
                    "alt=\"" + getMessage("NoWidgetsAlt") + "\" src=\"" + getMessage("NoWidgetsImageSrc") + "\"></a><span dir=\"ltr\"><p style=\"display: none\" > [CONTLS0004] </p><p style=\"display: inline\" > [105246] </p></span> <p style=\"display: inline\" > " + getMessage("noAccForCriteriaMessage") + "</p></div>";
            } else if (feba.domManipulator.getElementById('display_error_var').attr("value") == "I") {
                var errorMessage = "<div id=\"noAccWrapper\" role=\"alert\" class=\"redbg width100Container\"><a id=\"errorlink1\" href=\"#\"><img class=\"absmiddle\" title=\"" + getMessage("noAccForCriteriaMessage") + "\" " +
                    "alt=\"" + getMessage("NoWidgetsAlt") + "\" src=\"" + getMessage("NoWidgetsImageSrc") + "\"></a><span dir=\"ltr\"><p style=\"display: inline\" > [CONTLS0004] </p><p style=\"display: none\" > [105246] </p></span> <p style=\"display: inline\" > " + getMessage("noAccForCriteriaMessage") + "</p></div>";
            } else {
                var errorMessage = "<div id=\"noAccWrapper\" role=\"alert\" class=\"redbg width100Container\"><a id=\"errorlink1\" href=\"#\"><img class=\"absmiddle\" title=\"" + getMessage("noAccForCriteriaMessage") + "\" " +
                    "alt=\"" + getMessage("NoWidgetsAlt") + "\" src=\"" + getMessage("NoWidgetsImageSrc") + "\"></a><span dir=\"ltr\"><p style=\"display: none\" > [CONTLS0004] </p><p style=\"display: none\" > [105246] </p></span> <p style=\"display: inline\" > " + getMessage("noAccForCriteriaMessage") + "</p></div>";
            }


            jQuery('.chartFooterDisplay').prepend(errorMessage);

        }

        jQuery('.container-nxtGenNoTopmedium').find('.widget-medium').find('.empty-widget').css('min-height', '345px');
    },
    AccountSummaryChartViewWidgetUX4_onload: function(groupletId) {
        convertComboboxes();
        if (jQuery('embed').length > 0) {
            jQuery('embed').css('margin-' + left + '', '20%');
        }
        /*jQuery(jQuery('.donutItem')[0]).addClass('donutSelected');
        jQuery('.donutItem').click(function() {
        console.log("1");
        	jQuery('.donutSelected').removeClass('donutSelected');
        	jQuery(this).addClass('donutSelected');

        });*/
        jQuery('.chartFooterDisplay').show();
        if (jQuery('#' + groupletId).find('embed').length == 1) {
            jQuery('.donutItem').addClass('donutItemSingle');
        }

        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
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
        });

        jQuery(jQuery('.donutItem')[0]).addClass('donutSelected');
        var idname = jQuery(jQuery('.donutItem')[0]).attr('data-jsVarName');
        var newId = idname;
        var stylepathOriginal = eval(newId).stylePath
        var stylepath = eval(newId).stylePath;
        stylepath = stylepath.replace("/FebaStyle.properties", "/FebaStyleSingleDonut.properties");
        eval(newId).stylePath = stylepath;
        eval(newId).styleOrigPath = stylepathOriginal;
        FINANZTOOLS.taglib.showChart(eval(newId));

        jQuery('.donutItem').mousedown(function() {
            console.log("1");
            //
            var idname = jQuery(jQuery('.donutSelected')[0]).attr('data-jsVarName');
            var newId = idname;
            var stylepathOriginal = eval(newId).stylePath
            var stylepath = eval(newId).styleOrigPath;
            eval(newId).stylePath = stylepath;
            FINANZTOOLS.taglib.showChart(eval(newId));
            //
            jQuery('.donutSelected').removeClass('donutSelected');
            jQuery(this).addClass('donutSelected');
            var objName = jQuery(this).attr("data-jsVarName");
            //
            var stylepathOriginal = eval(objName).stylePath
            var stylepath = eval(objName).stylePath;
            stylepath = stylepath.replace("/FebaStyle.properties", "/FebaStyleSingleDonut.properties");
            eval(objName).stylePath = stylepath;
            eval(objName).styleOrigPath = stylepathOriginal;
            FINANZTOOLS.taglib.showChart(eval(objName));

            //
        });
    },
    ABTranChartViewUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace215193049_Lon = undefined;
        toolPlace235193049_Opt = undefined;
        toolPlace2208193049_Dep = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace660101927_Opt)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace660101927_Opt.width = 400;
                    toolPlace660101927_Opt.height = 220;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else if (parseInt(windowWidth) >= 624 && parseInt(windowWidth) <= 719) {
                    toolPlace660101927_Opt.width = 350;
                    toolPlace660101927_Opt.height = 200;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else if (parseInt(windowWidth) >= 525 && parseInt(windowWidth) <= 623) {
                    toolPlace660101927_Opt.width = 430;
                    toolPlace660101927_Opt.height = 220;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 524) {
                    toolPlace660101927_Opt.width = 350;
                    toolPlace660101927_Opt.height = 220;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else {
                    toolPlace660101927_Opt.width = 500;
                    toolPlace660101927_Opt.height = 300;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                }
            }
        });

    },
    ABTranChartViewWidgetUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace215193049_Lon = undefined;
        toolPlace2208193049_Dep = undefined;
        toolPlace235193049_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace660101927_Opt)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace660101927_Opt.width = 400;
                    toolPlace660101927_Opt.height = 220;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 719) {
                    toolPlace660101927_Opt.width = 350;
                    toolPlace660101927_Opt.height = 200;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                    toolPlace660101927_Opt.width = 400;
                    toolPlace660101927_Opt.height = 220;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else {
                    toolPlace660101927_Opt.width = 500;
                    toolPlace660101927_Opt.height = 300;
                    jQuery('#toolPlace660101927').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                }
            }
        });

    },
    OpTransactionChartViewUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace215193049_Lon = undefined;
        toolPlace660101927_Opt = undefined;
        toolPlace2208193049_Dep = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace235193049_Opt)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace235193049_Opt.width = 400;
                    toolPlace235193049_Opt.height = 220;
                    jQuery('#toolPlace235193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 719) {
                    toolPlace235193049_Opt.width = 350;
                    toolPlace235193049_Opt.height = 200;
                    jQuery('#toolPlace235193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                    toolPlace235193049_Opt.width = 400;
                    toolPlace235193049_Opt.height = 220;
                    jQuery('#toolPlace235193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                } else {
                    toolPlace235193049_Opt.width = 500;
                    toolPlace235193049_Opt.height = 300;
                    jQuery('#toolPlace235193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                }
            }
        });
    },
    ABTranChartViewWidgetUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace215193049_Lon = undefined;
        toolPlace2208193049_Dep = undefined;
        toolPlace235193049_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace660101927_Opt)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace660101927_Opt.width = 400;
                    toolPlace660101927_Opt.height = 220;
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 719) {
                    toolPlace660101927_Opt.width = 350;
                    toolPlace660101927_Opt.height = 200;
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                    toolPlace660101927_Opt.width = 400;
                    toolPlace660101927_Opt.height = 220;
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                } else {
                    toolPlace660101927_Opt.width = 500;
                    toolPlace660101927_Opt.height = 300;
                    FINANZTOOLS.taglib.showChart(toolPlace660101927_Opt);
                }
            }
        });

    },
    OpTransactionChartViewWidgetUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace215193049_Lon = undefined;
        toolPlace2208193049_Dep = undefined;
        toolPlace660101927_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace235193049_Opt)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace235193049_Opt.width = 400;
                    toolPlace235193049_Opt.height = 220;
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 719) {
                    toolPlace235193049_Opt.width = 350;
                    toolPlace235193049_Opt.height = 200;
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                    toolPlace235193049_Opt.width = 400;
                    toolPlace235193049_Opt.height = 220;
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                } else {
                    toolPlace235193049_Opt.width = 500;
                    toolPlace235193049_Opt.height = 300;
                    FINANZTOOLS.taglib.showChart(toolPlace235193049_Opt);
                }
            }
        });
    },
    CCHistoryChartViewUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace215193049_Lon = undefined;
        toolPlace2208193049_Dep = undefined;
        toolPlace235193049_Opt = undefined;
        toolPlace660101927_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace1469315903_CC)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace1469315903_CC.width = 380;
                    toolPlace1469315903_CC.height = 220;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                } else if (parseInt(windowWidth) >= 624 && parseInt(windowWidth) <= 719) {
                    toolPlace1469315903_CC.width = 330;
                    toolPlace1469315903_CC.height = 200;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                } else if (parseInt(windowWidth) >= 530 && parseInt(windowWidth) <= 623) {
                    toolPlace1469315903_CC.width = 430;
                    toolPlace1469315903_CC.height = 220;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 529) {
                    toolPlace1469315903_CC.width = 350;
                    toolPlace1469315903_CC.height = 220;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                } else {
                    toolPlace1469315903_CC.width = 500;
                    toolPlace1469315903_CC.height = 300;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                }
            }
        });
    },
    CCHistoryChartViewWidgetUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace215193049_Lon = undefined;
        toolPlace2208193049_Dep = undefined;
        toolPlace235193049_Opt = undefined;
        toolPlace660101927_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace1469315903_CC)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace1469315903_CC.width = 400;
                    toolPlace1469315903_CC.height = 220;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 719) {
                    toolPlace1469315903_CC.width = 350;
                    toolPlace1469315903_CC.height = 200;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                    toolPlace1469315903_CC.width = 400;
                    toolPlace1469315903_CC.height = 220;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                } else {
                    toolPlace1469315903_CC.width = 500;
                    toolPlace1469315903_CC.height = 300;
                    jQuery('#toolPlace1469315903').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace1469315903_CC);
                }
            }
        });
    },
    DpTransactionChartViewUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace215193049_Lon = undefined;
        toolPlace235193049_Opt = undefined;
        toolPlace660101927_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace2208193049_Dep)) {
                var windowWidth = viewport().width;

                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 915) {
                    toolPlace2208193049_Dep.width = 380;
                    toolPlace2208193049_Dep.height = 220;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                } else if (parseInt(windowWidth) >= 624 && parseInt(windowWidth) <= 719) {
                    toolPlace2208193049_Dep.width = 330;
                    toolPlace2208193049_Dep.height = 200;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                } else if (parseInt(windowWidth) >= 530 && parseInt(windowWidth) <= 623) {
                    toolPlace2208193049_Dep.width = 430;
                    toolPlace2208193049_Dep.height = 220;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 529) {
                    toolPlace2208193049_Dep.width = 350;
                    toolPlace2208193049_Dep.height = 220;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                } else {
                    toolPlace2208193049_Dep.width = 500;
                    toolPlace2208193049_Dep.height = 300;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                }
            }
        });
        /*done for teh alignment issue in loans chart view*/
        jQuery(".container-nxtGenmedium .pinnableGroupletWrapper").css('margin-top', '-30px');
    },
    DpTransactionChartViewWidgetUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace215193049_Lon = undefined;
        toolPlace235193049_Opt = undefined;
        toolPlace660101927_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace2208193049_Dep)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace2208193049_Dep.width = 400;
                    toolPlace2208193049_Dep.height = 220;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 719) {
                    toolPlace2208193049_Dep.width = 350;
                    toolPlace2208193049_Dep.height = 200;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                    toolPlace2208193049_Dep.width = 400;
                    toolPlace2208193049_Dep.height = 220;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                } else {
                    toolPlace2208193049_Dep.width = 500;
                    toolPlace2208193049_Dep.height = 300;
                    jQuery('#toolPlace2208193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace2208193049_Dep);
                }
            }
        });
    },
    LnTransactionChartViewWidgetUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace2208193049_Dep = undefined;
        toolPlace660101927_Opt = undefined;
        toolPlace235193049_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace215193049_Lon)) {
                var windowWidth = viewport().width;
                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace215193049_Lon.width = 400;
                    toolPlace215193049_Lon.height = 220;
                    jQuery('#toolPlace215193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                } else if (parseInt(windowWidth) >= 640 && parseInt(windowWidth) <= 719) {
                    jQuery('#toolPlace215193049').find('embed').remove();
                    toolPlace215193049_Lon.width = 350;
                    toolPlace215193049_Lon.height = 200;
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 639) {
                    jQuery('#toolPlace215193049').find('embed').remove();
                    toolPlace215193049_Lon.width = 400;
                    toolPlace215193049_Lon.height = 220;
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                } else {
                    jQuery('#toolPlace215193049').find('embed').remove();
                    toolPlace215193049_Lon.width = 500;
                    toolPlace215193049_Lon.height = 300;
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                }
            }
        });
    },
    LnTransactionChartViewUX4_onload: function(groupletId) {
        convertComboboxes();

        toolPlace1469315903_CC = undefined;
        toolPlace2208193049_Dep = undefined;
        toolPlace660101927_Opt = undefined;
        toolPlace235193049_Opt = undefined;

        jQuery(window).resize(function() {
            if ("undefined" !== typeof(toolPlace215193049_Lon)) {
                var windowWidth = viewport().width;

                if (parseInt(windowWidth) >= 720 && parseInt(windowWidth) <= 899) {
                    toolPlace215193049_Lon.width = 390;
                    toolPlace215193049_Lon.height = 220;
                    jQuery('#toolPlace215193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                } else if (parseInt(windowWidth) >= 624 && parseInt(windowWidth) <= 719) {
                    toolPlace215193049_Lon.width = 340;
                    toolPlace215193049_Lon.height = 200;
                    jQuery('#toolPlace215193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                } else if (parseInt(windowWidth) >= 530 && parseInt(windowWidth) <= 623) {
                    toolPlace215193049_Lon.width = 440;
                    toolPlace215193049_Lon.height = 220;
                    jQuery('#toolPlace215193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                } else if (parseInt(windowWidth) >= 0 && parseInt(windowWidth) <= 529) {
                    toolPlace215193049_Lon.width = 360;
                    toolPlace215193049_Lon.height = 220;
                    jQuery('#toolPlace215193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                } else {
                    toolPlace215193049_Lon.width = 480;
                    toolPlace215193049_Lon.height = 300;
                    jQuery('#toolPlace215193049').find('embed').remove();
                    FINANZTOOLS.taglib.showChart(toolPlace215193049_Lon);
                }
            }
        });
        /*done for teh alignment issue in loans chart view*/
        jQuery(".container-nxtGenmedium .pinnableGroupletWrapper").css('margin-top', '-30px');
    },
    AccountSummaryUX4_onload: function(groupletId) {
        setTimeout(function() {
            if (jQuery('#' + groupletId).find('.widgetPaginationFooterNextGenBorderTop').length == 0 &&
                jQuery('#' + groupletId).find('.nextGenstage3_listingpaneldiv').length > 0) {

                jQuery('#' + groupletId + '_pinnableWrapper').css('position', '');
            }
            jQuery('.positionrelativeimp').removeClass('positionrelativeimp');
            jQuery('.nextGenDetailsPagePulldownHolder').css('position', 'relative');
            jQuery('.nextGenDetailsPagePulldownHolder').css('top', '0px');
        }, 100);

        convertComboboxes();
        jQuery('.container-nxtGenmedium .hasPulldownMenu .menuArrowImageDown').css('margin-' + left + '', '20px');
        jQuery('.container-nxtGenNoTopmedium').find('.widget-medium').find('.empty-widget').css('min-height', '345px');
        if (jQuery('#' + groupletId).find('table').length == 0) {
            jQuery('#' + groupletId).css('background-color', '#FFF');
        }

        if (jQuery('.nextGenUX4').length > 0) {
            var vpWidth = viewport().width;
            if (parseInt(vpWidth) < 640) {
                jQuery(".menuChoices_3,.menuChoices_4,.menuChoices_5").addClass("menuChoiceAccntAlign");
            }
            jQuery(window).resize(function() {
                vpWidth = viewport().width;
                if (parseInt(vpWidth) < 640) {
                    jQuery(".menuChoices_3,.menuChoices_4,.menuChoices_5").addClass("menuChoiceAccntAlign");
                } else {
                    jQuery(".menuChoices_3,.menuChoices_4,.menuChoices_5").removeClass("menuChoiceAccntAlign");
                }
            });
            jQuery('#' + groupletId).addClass('noOverflow');

        }
    },
    /*Modified by Sujatha for lumi*/
    AccountSummaryUX5_onload: function(groupletId) {

        feba.domManipulator.loadScript("scripts/module/accounts/AccountSummaryTabUX5.js");
        feba.js.common.displayWarning = "N";
        //jQuery(document).ready(function(){
        //alert("hello");
        //jQuery("table td .searchsimpletext_wrapnew").attr('color', '#404040 !important');
        jQuery(".section_fourlinbrd").css('border-' + left + '', '1px solid #EFEFEF');
        jQuery(".section_fourlinbrd").css('border-' + right + '', '1px solid #EFEFEF');
        jQuery(".section_fourlinbrd").css('padding-bottom', '10px');
        jQuery(".section_fourlinbrd").css('padding-top', '10px');
        jQuery(".pfm_stage3_ptabgray1_tab").css('width', '33%');
        jQuery(".pfm_grey_active_bold_tab").css('padding', '12px 3px');
        jQuery(".pfm_whitetabhover_bold_tab").css('padding', '12px 3px');
        jQuery(".stage3_searchpanellabel").css('margin-top', '0px');
        //jQuery(".stage3_searchpanellabel").css('color', '#010101');
        jQuery(".hasPulldownMenu").addClass("pullClass");
        setTimeout(function() {
            jQuery(".hasPulldownMenu").attr('style', 'margin-top: -11px !important');

        }, 500);

        jQuery("table td .searchsimpletext_wrapnew").css('color', '#404040 !important');
        jQuery(".HW_tabletextwithpadding ").css('padding-' + left + '', '20px');
        jQuery(".HW_textwithpadding").css('padding-' + left + '', '20px');

        jQuery(".stage3_rowwithmargin").css("height", "45px");
        if (feba.domManipulator.isRTL()) {
            jQuery(".stage3_rowwithmargin").css("margin", "5px 80px 5px 0px !important");
        } else {
            jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px !important");
        }
        jQuery(".stage3_rowwithmargin").css("float", left);
        jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
        jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "140px");


        jQuery(".stage3_listingpaneldiv").css("border-bottom", "0px");
        jQuery(".pfm_stage3_tabmenupanel_tab").css("border-top", "1px solid #EFEFEF");
        jQuery(".pfm_stage3_tabmenupanel_tab").css("width", "100%");
        jQuery(".pagination-wrapper").css("border-bottom", "1px solid #EFEFEF");
        jQuery(".labelcolumnsmall").css("line-height", "0.79em");
        jQuery(".stage3_listingpaneldiv.singleTableHeading").css("border-top", "0px !important");

        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage320']").css('border-bottom', '1px solid #EFEFEF');
        jQuery(".stage3_detailspanel").css("margin-bottom", "-29px");
        jQuery("table.table").css("border", "1px solid #EFEFEF");
        jQuery(".width100percent_downloadIcons").css("padding-bottom", "5px");

        jQuery('#HWListTable10072682.singleTableHeading').attr('style', 'border-bottom: 1px solid #EFEFEF !important');
        jQuery('#HWListTable10072692.singleTableHeading').attr('style', 'border-bottom: 1px solid #EFEFEF !important');
        jQuery('#HWListTable10072792.singleTableHeading').attr('style', 'border-bottom: 1px solid #EFEFEF !important');
        jQuery('#HWListTable10072892.singleTableHeading').attr('style', 'border-bottom: 1px solid #EFEFEF !important');
        //Need to modfy for water mark .labelcolumnsmall:line-height:0.90em
        //Account Summary Snap shot
        jQuery(".section_fourlinbrd").css('border-bottom', '1px solid #EFEFEF');
        jQuery(".stage3_rowwithmargin").css("padding-top", "28px");
        jQuery(".stage3_rowwithmargin").css("padding-bottom", "3px");

        //jQuery("#PAGECONFIGURATIONMASTER_RACUX5W__1 .menuChoices ul li a").css('position','absolute');
        jQuery("[id='" + groupletId + "'] .menuChoices ul li a").css('position', 'absolute');
        jQuery("[id='" + groupletId + "'] .menuChoices ul li a").css('padding', '2px');
        jQuery("[id='" + groupletId + "'] .menuChoices ul li a").css('padding-' + left + '', '5px');

        jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float: none !important');


        var id = "";
        //var tabName="OPR";
        var tabName = "";
        var grpId = "";
        var fgName = "";
        if (groupletId == null || groupletId == "" || groupletId == "undefined") {
            grpId = "";
            fgName = document.getElementById('FORMSGROUP_ID__').value;
        } else {
            grpId = groupletId + ":";
            fgName = document.getElementById(grpId + "GROUPLET_FORMSGROUP_ID__").value;
        }

        if (document.getElementById(grpId + fgName + ".ENABLE_TAB") != null) {
            tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB").value;
        } else {
            grpId = groupletId + ":";

            if (jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']") != null && jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1] != null) {
                fgName = jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1].value;
                tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB").value;
            }
        }
        setAcctabchange(tabName, groupletId, fgName);


        var windowWidth = viewport().width;
        //alert("windowwidth>>"+parseInt(windowWidth));
        if ((parseInt(windowWidth) <= 670 && parseInt(windowWidth) > 630))

        {

            jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "80px");

        }
        if (parseInt(windowWidth) <= 650) {

            if (feba.domManipulator.isRTL()) {
                jQuery(".stage3_rowwithmargin").css("margin", "5px 80px 5px 0px");
            } else {
                jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px");
            }
            jQuery(".stage3_rowwithmargin").css("float", left);
            jQuery(".stage3_rowwithmargin").css("margin-bottom", "0px");
            jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
            jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "13px");
            //jQuery(".more.dropdown-button").css("padding-"+left+"","23px");
            jQuery(".more.dropdown-button").css("padding-" + left + "", "15px");
            jQuery(".pfm_grey_active_bold_tab").css('padding', '12px 2px');
            jQuery(".pfm_whitetabhover_bold_tab").css('padding', '12px 2px');
            jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float:none !important');
            jQuery(".hasPulldownMenu").attr('style', 'margin-top: 4px !important');
            setTimeout(function() {
                jQuery(".hasPulldownMenu").attr('style', 'margin-top: 4px !important');

            }, 500);
            if (navigator.userAgent.indexOf('MSIE') !== -1 ||
                navigator.appVersion.indexOf('Trident/') > 0) {
                if (BrowserDetect.version == 10) {
                    //jQuery(".dropdown-button.more").attr("padding-"+left+"","5px !important");
                    //jQuery(".dropdown-button.more").attr('style', 'padding-left: 3px !important');
                    jQuery(".more.dropdown-button").attr('style', 'padding-' + left + ': 3px !important');
                }

            }

        }


        //});


        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
            //alert("windowwidth>>"+parseInt(windowWidth));
            if (parseInt(windowWidth) <= 650) {
                //alert("windowwidth123456>>"+parseInt(windowWidth));
                if (feba.domManipulator.isRTL()) {
                    jQuery(".stage3_rowwithmargin").css("margin", "5px 80px 5px 0px");
                } else {
                    jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px");
                }
                jQuery(".stage3_rowwithmargin").css("float", left);
                //alert("windowwidth123456789>>"+parseInt(windowWidth));
                jQuery(".stage3_rowwithmargin").css("margin-bottom", "0px");
                jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
                jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "13px");
                jQuery(".more.dropdown-button").css("padding-" + left + "", "23px");
                jQuery(".pfm_grey_active_bold_tab").css('padding', '12px 2px');
                jQuery(".pfm_whitetabhover_bold_tab").css('padding', '12px 2px');
                jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float:none !important');
                setTimeout(function() {
                    jQuery(".hasPulldownMenu").attr('style', 'margin-top: 4px !important');

                }, 500);
            } else {
                if (document.getElementById("PageConfigurationMaster_CACUX5W__1:TabMenuPanel_grpAccntSummary") != null) {
                    jQuery(".stage3_rowwithmargin").css("height", "45px");
                    if (feba.domManipulator.isRTL()) {
                        jQuery(".stage3_rowwithmargin").css("margin", "5px 80px 5px 0px !important");
                    } else {
                        jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px !important");
                    }
                    jQuery(".stage3_rowwithmargin").css("float", left);
                    jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
                    jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "140px");
                    jQuery(".pfm_grey_active_bold_tab").css('padding', '12px 3px');
                    jQuery(".pfm_whitetabhover_bold_tab").css('padding', '12px 3px');
                }


            }

        });
        /*added for top tabs start*/
        var topTabElement = document.getElementById(grpId + "TabMenuPanel_grpAccntSummary");
        var childPTag = jQuery(topTabElement).children().find('p');
        //jQuery(topTabElement).attr("style","border-bottom: 1px solid #EFEFEF;border-"+right+"","1px solid #ccc");
        jQuery(childPTag).css('width', '50%');
        /*added for top tabs end*/

    },
    AccountSummaryLandingUX5_onload: function(groupletId) {

        feba.domManipulator.loadScript("scripts/module/accounts/AccountSummaryVerticalTabUX5.js");
        jQuery(".tableftcontainer").parent().removeClass('pageLeftContainer');
        jQuery(".tableftcontainer").parent().addClass('verticalpageLeftContainer');
        jQuery('#HWListTable10072682.singleTableHeading').attr('style', 'border-bottom: 1px solid #E0E0E0 !important');
        jQuery('#HWListTable10072992.singleTableHeading').attr('style', 'border-bottom: 1px solid #E0E0E0 !important');
        jQuery('#HWListTable10072692.singleTableHeading').attr('style', 'border-bottom: 1px solid #E0E0E0 !important');
        jQuery('#HWListTable10073992.singleTableHeading').attr('style', 'border-bottom: 1px solid #E0E0E0 !important');
        jQuery('#HWListTable10072792.singleTableHeading').attr('style', 'border-bottom: 1px solid #E0E0E0 !important');
        jQuery('#HWListTable10072882.singleTableHeading').attr('style', 'border-bottom: 1px solid #E0E0E0 !important');
        jQuery(".tabrightcontainer .pagination-wrapper").attr('style', "border-top:none !important");
        //jQuery(".tabrightcontainer table.singleTableHeading").attr('style',"width:100.1% !important");
        //jQuery(".tabrightcontainer table.multiTableHeading").attr('style',"width:100.1% !important");

        var id = "";
        //var tabName="OPR";
        var tabName = "";
        var grpId = "";
        var fgName = "";
        if (groupletId == null || groupletId == "" || groupletId == "undefined") {
            grpId = "";
            fgName = document.getElementById('FORMSGROUP_ID__').value;
        } else {
            grpId = groupletId + ":";
            fgName = document.getElementById(grpId + "GROUPLET_FORMSGROUP_ID__").value;
        }

        if (document.getElementById(grpId + fgName + ".ENABLE_TAB_LAND") != null) {
            tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB_LAND").value;
        } else {
            grpId = groupletId + ":";

            if (jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']") != null && jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1] != null) {
                fgName = jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1].value;
                tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB_LAND").value;
            }
        }
        jQuery("[id='" + grpId + "homecurrency']").attr('style', 'float: left !important');

        jQuery("[id='" + grpId + "LeftGrouplet_RightContainer_Stage37.Ra1']").attr('style', 'float: none !important');
        //jQuery('#HWListTable10072892_Footer.pagination-wrapper').attr('style', 'border-'+left+': none !important;border-'+right+': none !important');
        //jQuery('#HWListTable10073992_Footer.pagination-wrapper').attr('style', 'border-'+left+': none !important;border-'+right+': none !important');
        //jQuery("[id='"+grpId+"LeftGrouplet_RightContainer_Stage37.Ra4.C1']").attr('style', 'border-'+left+': 1px solid #D4D4D4;border-'+right+': 1px solid #D4D4D4;border-top: 1px solid #D4D4D4');
        //jQuery("[id='"+grpId+"LeftGrouplet_RightContainer_Stage37.Ra6.C1']").attr('style', 'border-'+left+': 1px solid #D4D4D4;border-'+right+': 1px solid #D4D4D4;border-top: 1px solid #D4D4D4');
        jQuery('#HWListTable10072892.multiTableHeading').attr('style', 'border-' + left + ': 1px solid #D4D4D4;border-' + right + ': 1px solid #D4D4D4;border-top: 1px solid #D4D4D4;border-bottom: 1px solid #D4D4D4');
        var windowWidth = viewport().width;
        if (parseInt(windowWidth) <= 900) {
            jQuery(".rhsExpandIcon").removeClass('rhsExpandIcon');
            jQuery("[id='main']").attr('style', 'width: 96% !important');

        }
        if (!feba.domManipulator.isRTL()) {
            jQuery("[id='" + grpId + "savacctTotalbalance']").attr('style', 'float: left !important');
            jQuery("[id='" + grpId + "curacctTotalbalance']").attr('style', 'float: left !important');
            jQuery("[id='" + grpId + "ccdTotalbalance']").attr('style', 'float: left !important');
            jQuery("[id='" + grpId + "depTotalbalance']").attr('style', 'float: left !important');
            jQuery("[id='" + grpId + "lonTotalbalance']").attr('style', 'float: left !important');
            jQuery("[id='" + grpId + "ccaacctTotalbalance']").attr('style', 'float: left !important');
            jQuery("[id='" + grpId + "odaacctTotalbalance']").attr('style', 'float: left !important');
        }

        //jQuery('.pageheadingcaps').attr('style', 'margin-'+left+': 29px !important');
        //jQuery('.errorDisplayStyle').attr('style', 'margin-'+left+': 31px !important');
        jQuery('.searchsimpletext_accntSummary').attr('style', 'padding-' + right + ': 0px !important');

        jQuery("#multiActionsHeading").addClass('more');
        jQuery("#multiActionsHeading").removeClass('btn');
        jQuery("#multiActionsHeading").removeClass('reset-btn');
        jQuery("a.dropdown-button").html('');
        if (feba.domManipulator.isRTL()) {
            jQuery("#multiActionButtonId").find('.more.dropdown-button').attr('style', 'top: 17px !important;margin-' + left + ': 39px !important;margin-' + right + ': 139px !important');
        } else {
            jQuery("#multiActionButtonId").find('.more.dropdown-button').attr('style', 'top: 17px !important;margin-' + right + ': 39px !important;margin-' + left + ': 139px !important');
        }
        //jQuery("#multiActionButtonId").find('.more.dropdown-button').attr('style', 'top: 17px !important;margin-'+right+': 39px !important;margin-'+left+': 139px !important');
        setAccVerticaltabchange(tabName, groupletId, fgName);
        jQuery(".multiactionStyle .btn-flat ").attr('style', "TEXT-TRANSFORM: capitalize !important");
        jQuery("#multiActionsHeading").attr('title', getMessage('actionToolTip'));
        if ((parseInt(windowWidth) <= 670 && parseInt(windowWidth) > 630)) {
            jQuery("#multiActionButtonId").find('.more.dropdown-button').attr('style', 'top: 17px !important;margin-' + right + ': 39px !important;margin-' + left + ': -36px !important');
        }
        if (parseInt(windowWidth) <= 630) {
            jQuery("#multiActionButtonId").find('.more.dropdown-button').attr('style', 'top: 17px !important;margin-' + right + ': 39px !important;margin-' + left + ': -36px !important');

        }
        /*start fix for ticket:116063*/
        if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {
            jQuery("#multiActionButtonId").find('.more.dropdown-button').attr('style', 'top: 17px !important;margin-' + right + ': 39px !important;margin-' + left + ': 0px !important');
        }
        /*end fix for ticket:116063*/
        if (navigator.userAgent.search("Firefox") >= 0) {
            if (feba.domManipulator.isRTL()) {
                jQuery('.HW_textwithpadding a').removeAttr('style');
            }
        }
    },

    AccountSummaryWidAngular_onload: function(groupletId) {
        /*Added to hide browser scrollbar - Start*/
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            jQuery("[id='CorporateUserDashboardUX5_WANGAS__1']").addClass('chromescrollAngbarstyle');
            jQuery("[id='RetailUserDashboardUX5_WANGAS__1']").addClass('chromescrollAngbarstyle');
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            jQuery("[id='CorporateUserDashboardUX5_WANGAS__1']").addClass('mozillascrollbarstyle');
            jQuery("[id='RetailUserDashboardUX5_WANGAS__1']").addClass('mozillascrollbarstyle');
        } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
            jQuery("[id='CorporateUserDashboardUX5_WANGAS__1']").addClass('iescrollbarstyle');
            jQuery("[id='RetailUserDashboardUX5_WANGAS__1']").addClass('iescrollbarstyle');
        }

    },

    /*Modified by Sujatha for lumi*/
    AccountSummaryWidUX5_onload: function(groupletId) {
        /*Added to hide browser scrollbar - Start*/
        if (navigator.userAgent.indexOf("Chrome") != -1) {
            jQuery("[id='CorporateUserDashboardUX5_WAC85__1']").addClass('chromescrollbarstyle');
            jQuery("[id='RetailUserDashboardUX5_WAC85__1']").addClass('chromescrollbarstyle');
        } else if (navigator.userAgent.indexOf("Firefox") != -1) {
            jQuery("[id='CorporateUserDashboardUX5_WAC85__1']").addClass('mozillascrollbarstyle');
            jQuery("[id='RetailUserDashboardUX5_WAC85__1']").addClass('mozillascrollbarstyle');
        } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
            jQuery("[id='CorporateUserDashboardUX5_WAC85__1']").addClass('iescrollbarstyle');
            jQuery("[id='RetailUserDashboardUX5_WAC85__1']").addClass('iescrollbarstyle');
        }
        /*Added to hide browser scrollbar - End*/
        /*alert("AccountSummaryWidUX5_123onload");*/
        feba.domManipulator.loadScript("scripts/module/accounts/AccountSummaryTabUX5.js");
        feba.js.common.displayWarning = "N";


        jQuery('.stage3_detailspanel').attr('style', 'border-bottom: none !important');
        jQuery(".stage3_detailspanel").css("margin-bottom", "-28px");
        //jQuery(".stage3_detailspanel").css('border-top', '1px solid #ccc');
        jQuery(".stage3_detailspanel").css('border-' + left + '', 'none');
        //jQuery("table td .searchsimpletext_wrapnew").attr('color', '#404040 !important');
        //jQuery(".section_fourlinbrd").css('border-'+left+'', '1px solid #C9CBCC');
        //jQuery(".section_fourlinbrd").css('border-'+right+'', '1px solid #C9CBCC');
        jQuery(".section_fourlinbrd").css('padding-bottom', '10px');

        jQuery('.ui-dialog .stage3_detailspanel').attr('style', 'border-' + left + ':1px solid #E0E0E0 !important');
        jQuery('.ui-dialog .stage3_detailspanel').attr('style', 'border-bottom:none !important');

        /*Added for Border Issue in Insta Widget Overlay --STart*/

        jQuery(".section_fourlinbrd").css('width', '100%');

        jQuery(".pfm_stage3_ptabgray1_tab").css('width', '24.6%');
        //jQuery(".pfm_stage3_tabmenupanel_tab").css("height", "50px !important");
        //jQuery(".pfm_grey_active_bold_tab").css('height', '16px');
        //jQuery(".pfm_grey_active_bold_tab").css('line-height', '20px');


        jQuery(".account-summary-graph-table").css('width', '100%');
        jQuery(".account-summary-graph-table").css('margin-' + left + '', '0px');
        jQuery(".account-summary-graph-table").css('margin-top', '11px');
        jQuery(".widget-medium .hasPulldownMenu").addClass("pullClass");
        jQuery(".widget-content").css('overflow-x', 'hidden');
        jQuery("[id='CorporateUserDashboardUX5_WAC85__1_Title']").attr('style', 'border: none !important');
        jQuery(".HW_tabletextwithpadding ").css('padding-' + left + '', '20px');
        jQuery(".HW_textwithpadding").css('padding-' + left + '', '20px');

        jQuery(".account-summary-graph-widget").css('margin-' + left + '', 'auto !important');
        jQuery(".account-summary-graph-widget").css('margin-' + right + '', 'auto !important');
        jQuery(".account-summary-graph-widget").css('margin-top', '-7px !important');

        jQuery(".account-summary-graph-widget").css('margin-bottom', '0px !important');

        jQuery("table td .searchsimpletext_wrapnew").css('color', '#404040 !important');
        jQuery(".hideElement.resultlistSize").parent().css("display", "none");
        jQuery(".stage3_rowwithmargin").css("height", "45px");
        jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px !important");
        jQuery(".stage3_rowwithmargin").css("float", left);
        jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
        jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "127px");

        //Commented the Line for border issue--Start
        //jQuery(".stage3_listingpaneldiv").css("border-bottom","0px");

        //jQuery(".pfm_stage3_tabmenupanel_tab").css("height", "50px !important");
        //jQuery(".pfm_stage3_tabmenupanel_tab").css("border-top","0px solid #ccc");
        //jQuery(".pfm_stage3_tabmenupanel_tab").css("width","99%");
        //jQuery(".pfm_stage3_tabmenupanel_tab").css("border-"+left+"","0px solid #ccc");
        //jQuery(".widget-medium .errorDisplayStyle").css("border-bottom","1px solid #ccc");


        //	jQuery(".pagination-wrapper").css("border-bottom","1px solid #ccc");
        jQuery(".labelcolumnsmall").css("line-height", "0.79em");
        jQuery(".opdptable").css('margin-' + left + '', '-1px');
        jQuery(".opdptable").css('width', '100%');
        jQuery(".opdptable").css('border', 'none');
        jQuery(".opdptable").css("border-top", "1px solid #ccc");
        jQuery(".opdptable").css("margin-bottom", "-24px");
        jQuery(".opdptable").css('margin-top', '0px');
        jQuery(".widget-medium.hasPulldownMenu").css("margin-top", "-11px");


        jQuery('.ui-dialog .opdptable').attr('style', 'border-' + left + ': 1px solid #D4D4D4 !important');
        jQuery('.ui-dialog .opdptable').attr('style', 'border-' + right + ': 1px solid #D4D4D4 !important');
        jQuery(".ui-dialog .opdptable").attr('style', 'margin-top:0px !important;width:100.01%');
        jQuery('.ui-dialog .more.dropdown-button').attr('style', 'padding-' + left + ':0px !important');
        //Need to modfy for water mark .labelcolumnsmall:line-height:0.90em
        jQuery(".stage3_listingpaneldiv.singleTableHeading").css("border-top", "0px !important");
        jQuery("[id='" + groupletId + ":CenterAlignedPanel_Stage320']").css('border-bottom', '1px solid #ccc');
        jQuery('#HWListTable10072682.singleTableHeading').attr('style', 'border-bottom: 1px solid #CCC !important');
        jQuery('#HWListTable10072692.singleTableHeading').attr('style', 'border-bottom: 1px solid #CCC !important');
        jQuery('#HWListTable10072792.singleTableHeading').attr('style', 'border-bottom: 1px solid #CCC !important');
        jQuery('#HWListTable10072892.singleTableHeading').attr('style', 'border-bottom: 1px solid #CCC !important');
        jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float: none !important');


        var id = "";
        //var tabName="OPR";
        var tabName = "";
        var grpId = "";
        var fgName = "";
        if (groupletId == null || groupletId == "" || groupletId == "undefined") {
            grpId = "";
            fgName = document.getElementById('FORMSGROUP_ID__').value;
        } else {
            grpId = groupletId + ":";
            fgName = document.getElementById(grpId + "GROUPLET_FORMSGROUP_ID__").value;
        }

        if (document.getElementById(grpId + fgName + ".ENABLE_TAB") != null) {
            tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB").value;
        } else {
            grpId = groupletId + ":";
            if (jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']") != null && jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1] != null) {
                fgName = jQuery("[id='" + grpId + "GROUPLET_FORMSGROUP_ID__']")[1].value;
                tabName = document.getElementById(grpId + fgName + ".ENABLE_TAB").value;
            }
        }
        setAcctabchange(tabName, groupletId, fgName);


        var windowWidth = viewport().width;
        //alert("windowwidth>>"+parseInt(windowWidth));
        //alert("offer>>"+parseInt(windowWidth));
        if (parseInt(windowWidth) <= 634) {


            /*jQuery(".pfm_stage3_ptabgray1_tab").css("margin-'+left+'", "-6px");
			           			jQuery(".pfm_stage3_ptabgray1_tab").css("margin-"+right+"", "0px");
			           					jQuery(".pfm_stage3_ptabgray1_tab").css("margin-top", "0px");
			           							jQuery(".pfm_stage3_ptabgray1_tab").css("margin-bottom", "0px");*/
            /*jQuery(".widget-medium .pfm_grey_active_bold_tab").css("padding", "13px 1px");
            	jQuery(".widget-medium .pfm_whitetabhover_bold_tab").css("padding", "16px 1px");*/


            jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px");
            jQuery(".stage3_rowwithmargin").css("float", left);
            jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
            jQuery(".stage3_rowwithmargin").css("margin-bottom", "0px");
            jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "19px");
            //jQuery(".more.dropdown-button").css("padding-"+left+"","23px");
            jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float: none !important');
        }





        jQuery(window).resize(function() {
            var windowWidth = viewport().width;
            //alert("windowwidth>>"+parseInt(windowWidth));
            //alert("offer>>"+parseInt(windowWidth));
            if (parseInt(windowWidth) <= 634) {


                /*jQuery(".pfm_stage3_ptabgray1_tab").css("margin-"+left+"", "-6px");
                jQuery(".pfm_stage3_ptabgray1_tab").css("margin-"+right+"", "0px");
                		jQuery(".pfm_stage3_ptabgray1_tab").css("margin-top", "0px");
                				jQuery(".pfm_stage3_ptabgray1_tab").css("margin-bottom", "0px");*/
                //jQuery(".widget-medium .pfm_grey_active_bold_tab").css("padding", "13px 1px");
                //jQuery(".widget-medium .pfm_whitetabhover_bold_tab").css("padding", "16px 1px");

                //alert("windowwidth123456>>"+parseInt(windowWidth));
                jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px");
                jQuery(".stage3_rowwithmargin").css("float", left);
                //alert("windowwidth123456789>>"+parseInt(windowWidth));
                jQuery(".stage3_rowwithmargin").css("margin-bottom", "0px");
                jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
                jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "19px");
                //jQuery(".more.dropdown-button").css("padding-"+left+"","23px");
                jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float: none !important');
            } else {
                jQuery(".stage3_rowwithmargin").css("height", "45px");
                jQuery(".stage3_rowwithmargin").css("margin", "5px 0px 5px 80px !important");
                jQuery(".stage3_rowwithmargin").css("float", left);
                jQuery(".stage3_rowwithmargin").css("margin-top", "-14px");
                jQuery(".stage3_rowwithmargin").css("margin-" + left + "", "127px");
                //jQuery(".widget-medium .pfm_grey_active_bold_tab").css("padding", "13px 5px");
                //jQuery(".widget-medium .pfm_whitetabhover_bold_tab").css("padding", "16px 5px");



            }

        });


        jQuery(".tabs-with-navigation ul").attr('style', 'display:flex !important');

        jQuery(".ui-dialog-title").removeClass('ui-dialog-heading-level0');
        setTimeout(function() {
            jQuery(".ui-dialog-title").addClass('ui-dialog-heading-level0');
            var uiDialogDiv = jQuery(".ui-dialog .ui-dialog-titlebar .ui-button");
            jQuery(uiDialogDiv[1]).addClass('widget-ui-overlay-close');

        }, 0);
    },

    CorporateApprovalsWidgetUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextleft_widget").css('padding-' + left + '', '20px');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextleft_widget").css('padding-top', '10px');

            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css(right, '25px');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('position', 'absolute');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('padding-top', '10px');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('font-weight', 'bold');



            //jQuery(".simpletext_notify").css('font-weight','600');

            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .simpletext_notify").css('font-family', 'roboto-medium');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .simpletext_notify").css('color', '#000000');
            jQuery('.ui-dialog-title').addClass('corporateHeadingStyle');


        }
    },

    CorporateZeroApprovalsWidgetUX5_onload: function(groupletId) {

        jQuery(".querytextright_widget").attr('style', 'text-align :center; float:none !important');
        jQuery("#CORPORATEUSERDASHBOARDUX5_INWD__1 .querytextleft_widget").attr('style', 'text-align: center; float: right; padding-' + right + ' :40px !important');

        jQuery('.ui-dialog-title').addClass('corporateHeadingStyle');

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            //jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextleft_widget").css("padding-top","78px");
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextleft_widget").css("padding-top", "25px");
            //jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextleft_widget").css("padding-"+left+"","6px");
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextleft_widget").css('width', '100%');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextleft_widget").css('text-align', 'center');

            //jQuery("[id='CorporateUserDashboardUX5_W4UX5__1:WidgetForm.Rf2a.C1']").css("padding-top","78px");
            // jQuery("[id='CorporateUserDashboardUX5_W4UX5__1:WidgetForm.Rf2a.C1']").css("padding-"+left+"","20px");
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('padding-' + right + '', '0px');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('padding-top', '0px');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('font-weight', 'normal');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('width', '100%');
            jQuery("#CorporateUserDashboardUX5_W4UX5__1 .querytextright_widget").css('text-align', 'center');
            /* ENDS Code for displaying the notification messages count*/
        }
    },


    /*Added for account summary screen for ux5 */
    PhotoUploadUX5_onload: function(groupletId) {
        var elementId = 'PROFILEPHOTO';
        var elementId1 = 'FileBrowse993654';
        if (groupletId && groupletId != null) {
            elementId = groupletId + "\\:" + elementId;
            elementId1 = groupletId + "\\:" + elementId1;
        }
        feba.domManipulator.bind(feba.domManipulator.getElementById(elementId1), "change", function() {
            if (this.files && this.files[0]) {
                var reader = new FileReader();

                reader.onload = function(e) {
                    jQuery("#" + elementId + "")
                        .attr('src', e.target.result)
                        .width(100)
                        .height(100);
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    },
    MyProfilePhoto_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.R18d6.C1']").addClass('myprofilehome_details_column1');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.R18d7.C1']").addClass('myprofilehome_label_column1');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.R18d8.C1']").addClass('myprofilehome_label_column1');
        jQuery(".file-field").css("margin-" + right + "", "7px");
        jQuery(".file-field").css("float", "none");
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 486 && parseInt(vpWidth) >= 480)) {
            jQuery(".file-field .btn").css("height", "24px");
            jQuery(".file-field .btn").css("width", "34px");
            jQuery(".file-field .btn").css("line-height", "24px");
            jQuery(".file-field .btn").css("padding", "6px 10px");
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 486 && parseInt(vpWidth) >= 480)) {
                jQuery(".file-field .btn").css("height", "24px");
                jQuery(".file-field .btn").css("width", "34px");
                jQuery(".file-field .btn").css("line-height", "24px");
                jQuery(".file-field .btn").css("padding", "6px 10px");
            }
        });
    },
    DLCCyberReceiptUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "collapsableMenu";

            script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
        }
    },
    RMACyberReceiptUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "collapsableMenu";

            script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
        }
    },
    RMARequestConfirmationUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "collapsableMenu";

            script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
        }
        jQuery(".containerStyle").attr("tabindex", "0");
    },
    ServiceRequestListUX5_onload: function(groupletId) {
        var version = new Function("/*@cc_on return @_jscript_version; @*/")();
        /*Surej RWD for collapsible fix in service request list screen START*/
        jQuery(".newRequest_width60percent").css("width", "100%"); //search button coming down in lower resolns
        jQuery(".simpletextlistingebux").css(right, "7px"); //Note is gettign overlapped with other literals
        jQuery(".width79percent_navigationpanel").css("margin-top", "10px");
        if (version != '10' && version != '9') {
            jQuery(".collapsible_tab").children("span").removeClass("expandMenu_SRListing").addClass("collapseMenu_SRListing");
            if (jQuery(".collapsible_tab").children(".collapseMenu_SRListing").length > 0) {
                jQuery("tr[id^='collapse']").css("display", "none");
            } else {
                jQuery("tr[id^='collapse']").css("display", "table-row");
            }
        } else if (version == '10' || version == '9') {
            jQuery(".collapsible_tab").children("span").removeClass("expandMenu_SRListing_ie10").addClass("collapseMenu_SRListing_ie10");
            if (jQuery(".collapsible_tab").children(".collapseMenu_SRListing_ie10").length > 0) {
                jQuery("tr[id^='collapse']").css("display", "none");
            } else {
                jQuery("tr[id^='collapse']").css("display", "table-row");
            }
        }
        /*Surej RWD for collapsible fix in service request list screen END*/
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "collapsableMenu";

            script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
        }

    },
    WidgetsLibraryUX5_onload: function(groupletId) {

        jQuery('.ui-button').css('display', 'none');
        /*Surej RWD for collapsible fix in service request list screen END*/
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "collapsableMenu";

            script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
        }
        jQuery('.ui-button').css('display', 'none');
        /*jQuery('.ui-dialog').find('.ui-dialog-titlebar-close').css('display','none');
        jQuery(".overlayTitleHeight").find(".uiconfirmtitle").siblings(".ui-button-icon-only").css('display','none');*/

        /* Modify the Top attribute for the Personalized dashboard --Ticket - 779154 --start */
        var parentOverlay = jQuery(".ui-dialog")[1];

        if (typeof parentOverlay != undefined && parentOverlay != null && jQuery(".overlayTitleHeight").length == 0) {
            var modifiedTop = parseInt(jQuery(parentOverlay).css("top")) + 50;
            modifiedTop = modifiedTop + "px";
            jQuery(parentOverlay).css("top", modifiedTop);
        }
        /* Modify the Top attribute for the Personalized dashboard --Ticket - 779154 --End */

    },

    DashboardInstaWidgetUX5_onload: function(groupletId) {



        /*jQuery("[id='DASHL4']").find('.widget-small').css('height','auto');
        jQuery("[id='DASHL4']").find('.widget-content').css('height','auto');*/

        jQuery("[id='DASHL4']").find('.widget-small').addClass("widgetAutoHeight");
        jQuery("[id='DASHL4']").find('.widget-content').addClass("widgetAutoHeight");

    },
    SRCorporateList_onload: function(groupletId) {
        /*Surej RWD for collapsible fix in service request list screen START*/
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 486 && parseInt(vpWidth) >= 480)) {
            jQuery(".newRequest_width25percent").css("width", "2%");
        } else {
            if ((parseInt(vpWidth) <= 639 && parseInt(vpWidth) >= 487)) {
                jQuery(".newRequest_width25percent").css("width", "5%");
            } else {
                jQuery(".newRequest_width25percent").css("width", "25%");
            }
        }

        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 486 && parseInt(vpWidth) >= 480)) {
                jQuery(".newRequest_width25percent").css("width", "2%");
            } else {
                if ((parseInt(vpWidth) <= 639 && parseInt(vpWidth) >= 487)) {
                    jQuery(".newRequest_width25percent").css("width", "5%");
                } else {
                    jQuery(".newRequest_width25percent").css("width", "25%");
                }
            }
        });

        jQuery(".newRequest_width60percent").css("width", "100%"); //search button coming down in lower resolns
        jQuery(".simpletextlistingebux").css(right, "7px"); //Note is gettign overlapped with other literals
        jQuery(".width79percent_navigationpanel").css("margin-top", "10px");

        jQuery(".collapsible_tab").children("span").removeClass("expandMenu_SRListing").addClass("collapseMenu_SRListing");
        if (jQuery(".collapsible_tab").children(".collapseMenu_SRListing").length > 0) {
            jQuery("tr[id^='collapse']").css("display", "none");
        } else {
            jQuery("tr[id^='collapse']").css("display", "table-row");
        }
        /*Surej RWD for collapsible fix in service request list screen END*/
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "collapsableMenu";

            script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
        }

    },
    SRRetailList_onload: function(groupletId) {
        /*Surej RWD for collapsible fix in service request list screen START*/
        jQuery(".newRequest_width60percent").css("width", "100%"); //search button coming down in lower resolns
        jQuery(".simpletextlistingebux").css(right, "7px"); //Note is gettign overlapped with other literals
        jQuery(".width79percent_navigationpanel").css("margin-top", "10px");

        jQuery(".collapsible_tab").children("span").removeClass("expandMenu_SRListing").addClass("collapseMenu_SRListing");
        if (jQuery(".collapsible_tab").children(".collapseMenu_SRListing").length > 0) {
            jQuery("tr[id^='collapse']").css("display", "none");
        } else {
            jQuery("tr[id^='collapse']").css("display", "table-row");
        }
        /*Surej RWD for collapsible fix in service request list screen END*/
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "collapsableMenu";

            script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
        }

    },
    SRQueryHistoryDetailsUX5_onload: function(groupletId) {
        jQuery("h3").removeClass("notopborder");
    },
    PreferencesSetUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    RetailPreferencesSet_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
        /*STARTED: FIX FOR 800659 */
        var errorMessage = jQuery("[id$='PageConfigurationMaster_PSEBUXW__1:errorlink1']").attr('title');
        if (typeof errorMessage != 'undefined' && errorMessage.trim().length > 0 && errorMessage.includes("preferences are updated successfully")) {
            var nickName = jQuery("[id$='USER_NICK_NAME']").attr('value');
            var salutation = jQuery("[id$='salutation']").text();
            if (typeof nickName != 'undefined' && nickName.trim().length > 0) {
                jQuery("[id$='name_header']").text(nickName);

                if (jQuery("[id$='nickName_MyProfile']").text() != 'undefined' && jQuery("[id$='nickName_MyProfile']").text().trim().length > 0) {
                    jQuery("[id$='nickName_MyProfile']").text(nickName);
                    jQuery("[id$='name']").text(salutation + "  " + nickName);
                } else {
                    if (jQuery("[id$='firstName']").text() != 'undefined' && jQuery("[id$='firstName']").text().trim().length > 0) {
                        var firstNameElement = document.getElementById('firstName');
                        var lastNameElement = document.getElementById('lastName');
                        var span = document.createElement('span');
                        span.id = "nickName_MyProfile";
                        span.className = "name_ProfileBx";
                        span.innerText = nickName;
                        document.getElementById(firstNameElement.parentElement.id).appendChild(span);
                        firstNameElement.parentNode.removeChild(firstNameElement);
                        lastNameElement.parentNode.removeChild(lastNameElement);
                    }
                }
            } else {
                var firstName = jQuery("[id$='FIRST_NAME']").attr('value');
                var lastName = jQuery("[id$='LAST_NAME']").attr('value');
                jQuery("[id$='name']").text(salutation + "  " + firstName + " " + lastName);
                jQuery("[id$='name_header']").text("  " + firstName + " " + lastName);

                if (jQuery("[id$='nickName_MyProfile']").text() != 'undefined' && jQuery("[id$='nickName_MyProfile']").text().trim().length > 0) {
                    var element = document.getElementById('nickName_MyProfile');
                    var span = document.createElement('span');
                    span.id = "firstName";
                    span.className = "name_ProfileBx";
                    span.innerText = firstName;
                    document.getElementById(element.parentElement.id).appendChild(span);
                    span = document.createElement('span');
                    span.id = "lastName";
                    span.className = "name_ProfileBx";
                    span.innerText = lastName;
                    document.getElementById(element.parentElement.id).appendChild(span);
                    element.parentNode.removeChild(element);
                }
            }
        } ///*END: FIX FOR 800659   */
    },
    CorporatePreferencesSet_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }

        /*STARTED: FIX FOR 800659   */

        var errorMessage = jQuery("[id$='PageConfigurationMaster_CPREFW__1:errorlink1']").attr('title');
        if (typeof errorMessage != 'undefined' && errorMessage.trim().length > 0 && errorMessage.includes("preferences are updated successfully")) {
            var nickName = jQuery("[id$='USER_NICK_NAME']").attr('value');
            var salutation = jQuery("[id$='salutation']").text();
            var corpName = jQuery("[id$='corpName_MyProfile']").text();

            if (typeof nickName != 'undefined' && nickName.trim().length > 0) {
                jQuery("[id$='name_header']").text(nickName + corpName);

                if (jQuery("[id$='nickName_MyProfile']").text() != 'undefined' && jQuery("[id$='nickName_MyProfile']").text().trim().length > 0) {
                    jQuery("[id$='nickName_MyProfile']").text(nickName);
                    jQuery("[id$='name']").text(salutation + "  " + nickName + corpName);
                } else {
                    if (jQuery("[id$='firstName']").text() != 'undefined' && jQuery("[id$='firstName']").text().trim().length > 0) {
                        var firstNameElement = document.getElementById('firstName');
                        var lastNameElement = document.getElementById('lastName');
                        var span = document.createElement('span');
                        span.id = "nickName_MyProfile";
                        span.className = "name_ProfileBx";
                        span.innerText = nickName;
                        document.getElementById(firstNameElement.parentElement.id).appendChild(span);
                        firstNameElement.parentNode.removeChild(firstNameElement);
                        lastNameElement.parentNode.removeChild(lastNameElement);
                    }
                }
            } else {
                var firstName = jQuery("[id$='FIRST_NAME']").attr('value');
                var lastName = jQuery("[id$='LAST_NAME']").attr('value');
                jQuery("[id$='name']").text(salutation + "  " + firstName + " " + lastName + corpName);
                jQuery("[id$='name_header']").text("  " + firstName + " " + lastName + corpName);

                if (jQuery("[id$='nickName_MyProfile']").text() != 'undefined' && jQuery("[id$='nickName_MyProfile']").text().trim().length > 0) {
                    var element = document.getElementById('nickName_MyProfile');
                    var span = document.createElement('span');
                    span.id = "firstName";
                    span.className = "name_ProfileBx";
                    span.innerText = firstName;
                    document.getElementById(element.parentElement.id).appendChild(span);
                    span = document.createElement('span');
                    span.id = "lastName";
                    span.className = "name_ProfileBx";
                    span.innerText = lastName;
                    document.getElementById(element.parentElement.id).appendChild(span);
                    element.parentNode.removeChild(element);
                }
            }
        } ///*END: FIX FOR 800659   */
    },
    RMPreferencesSet_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    /*Aashish added for corp*/
    CorporatePasswordChange_onload: function(groupletId) {
        loadHorizontalCssFile(groupletId);
        jQuery('#DataEntry_LeftContainer_Stage39\\.Rbb8').css('border-bottom', 'none'); //Aashish added for corp
        jQuery('#NavigationPanel_Stage311').css('padding-bottom', '10px');
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    PasswordChangeUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    AuthRegisterQnAScreenUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    RegisterSQnAScreenUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
        var element = jQuery('.h3GreyTitle');
        jQuery(element).removeClass("h3GreyTitle");
        jQuery(element).addClass("h3whitetitle h3whitetitle_pwdscreen regScreen");
        jQuery('.h3whitetitle').attr('style', 'margin:0px !important;border:none !important');
        jQuery('.width79percent_navigationpanel').addClass("navigationPanel_security");
        jQuery('.section').addClass("sectionPanel_Security");
        jQuery('.pageheadingcaps').addClass("pgheading_security");
        jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:96% !important;margin-' + left + ':2% !important;');
        /*** jQuery('.errorContentWrapper').attr('style', 'width:96% !important;margin-'+left+':2% !important');*/
        jQuery('.errorContentWrapper').attr('style', 'width:99% !important;');
        jQuery('.stage3_inputpanel_leftcontainerLogin').attr('style', 'background-color:white');
        jQuery('.width79percent_navigationpanel').attr('style', 'width:96% !important;margin-top:-13px !important');
    },
    BackendLimitIDLookupUX5_onload: function() {
        jQuery('.tableoverflowwrapperhw').attr('style', 'border-' + left + ':0px solid #D4D4D4 !important');

        jQuery('.pageLeftContainer').attr('style', 'border-top:1px solid #ccc !Important');

    },
    LoginAltFlowQNAScreenUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
        jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:100% !important;margin-' + left + ':0% !important;');
        /*phani for forgotpassword otp
        jQuery('.errorContentWrapper').attr('style', 'width:100% !important;margin-'+left+':0% !important');
        jQuery('.errorDisplayStyle').attr('style', 'width:80% !important;padding-'+left+':10% !important');*/
        jQuery('.errorContentWrapper').attr('style', 'width:99% ;margin-' + left + ':0% ');
        //jQuery('.errorDisplayStyle').attr('style', 'width:74% ;padding-'+left+':17% ');

        jQuery('.pageLeftContainer').attr('style', 'width:80% !important;padding-' + left + ':10% !important;margin-bottom:395px !important;background-color:transparent !important;float:none !important');
        jQuery('.pageheadingcaps').attr('style', 'padding-' + left + ':10% !important;padding-bottom:5px !important');
        jQuery('.width79percent_navigationpanel').attr('style', 'background-color:#FFFFFF !important;border-bottom:1px solid #D4D4D4 !important;margin-bottom: 18px !important');
        jQuery('.print-help-button').attr('style', 'margin-top:-4px !important');
        var viewWidth = viewport().width;
        if (viewWidth >= 901) {
            jQuery('.print-help-button').attr('style', 'margin-' + right + ':93px !important');
        }

        jQuery(window).resize(function() {
            var viewWidth = viewport().width;
            jQuery('.print-help-button').attr('style', 'margin-top:-4px !important');
            if (viewWidth >= 901) {
                jQuery('.print-help-button').attr('style', 'margin-' + right + ':93px !important');
            }
        });
    },
    LoginAltFlowSetPasswordUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    PersonalProfileQnaRegistrationScreenUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    UserContactDetailsUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='" + groupletId + ":StepTracker_Stage311.Ra2']").css('display', 'none');
            //		jQuery('.step_trackerwidth_withoutmargin').addClass('displayNone');
        }
    },
    ViewTransactionStatementList_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "DematTransactionType";

            script.src = "scripts/DematTransactionType.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/DematTransactionType.js");
        }
    },
    ViewTransactionStatementListUX5_onload: function(groupletId) {
        var txnType = jQuery("[id$='DematTransactionFG.TRANSACTION_TYPE']").attr('value');
        if (txnType == "ONT") {
            jQuery("[id$='SearchPanel_Stage34.Rb10']").removeClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb11']").removeClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb12']").removeClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb13']").removeClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb14']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb15']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb16']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb17']").addClass('hideElement');
        } else if (txnType == "OFT") {
            jQuery("[id$='SearchPanel_Stage34.Rb10']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb11']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb12']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb13']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb14']").removeClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb15']").removeClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb16']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb17']").addClass('hideElement');
        } else if (txnType == "IDT") {
            jQuery("[id$='SearchPanel_Stage34.Rb10']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb11']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb12']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb13']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb14']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb15']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb16']").removeClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb17']").removeClass('hideElement');
        } else {
            jQuery("[id$='SearchPanel_Stage34.Rb10']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb11']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb12']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb13']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb14']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb15']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb16']").addClass('hideElement');
            jQuery("[id$='SearchPanel_Stage34.Rb17']").addClass('hideElement');
        }
    },


    ViewDematBillDetailsListUX5_onload: function(groupletId) {
        jQuery(".stage3_leftrightmainpanel").attr('style', 'background:none !important');
        jQuery(".stage3_previewconfirm_label_column").attr('style', 'width:25.4% !important');

    },
    ViewDematBillStatementUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },

    CustomerLedgerRequestUX5_onload: function(groupletId) {
        jQuery(".amountRightAlign").attr('style', 'font-size:14px !important');
    },
    ISINLookUpListUX5_onload: function(groupletId) {
        jQuery(".simpletext_wrap").attr('style', 'font-size:14px');
    },
    ISINLookUpListUX5_onload: function(groupletId) {
        jQuery(".simpletext_wrap").attr('style', 'font-size:14px');
    },
    DematBranchesUX5_onload: function(groupletId) {
        jQuery(".pageLeftContainer").attr('style', 'background:none;border:none;box-shadow:none');
        jQuery(".searchsimpletextCMS").attr('style', 'float:none;padding-top: 8px !important');
        jQuery(".searchsimpletextCMS_nofloat").attr('style', 'padding-top: 8px !important;font-size: 13px;color: #9E9E9E;padding-' + left + ': 28px !important;padding-' + right + ': 4px !important');
        jQuery("[id$='DownloadPanel_Stage315']").removeClass('width100percent_downloadIcons');
        jQuery("[id$='DownloadPanel_Stage315']").removeClass('downloadPanelBorder');

    },
    FDORequestConfirmationUX5_onload: function(groupletId) {
        var stage3Details = jQuery('.stage3_previewconfirmdetails');
        for (j = 0; j < stage3Details.length; j++) {
            var currElement = stage3Details[j];
            if (jQuery(currElement).children().length == 0) {
                jQuery(currElement).css('display', 'none');
            }
        }
    },
    ViewTransactionDetailsRetail_onload: function(groupletId) {
        var showBackToDashboard = jQuery("#showBackToDashboard");
        console.log(showBackToDashboard);
        if (showBackToDashboard && (groupletId == null || groupletId.length == 0 || groupletId == "undefined" || groupletId == "null")) {
            jQuery(".errorContentWrapper").css('width', '100%');
            jQuery(".errorContentWrapper").css('padding-' + left + '', '2px');
            jQuery(".redbgwithwidth").css('width', '100%');
            jQuery(".redbgwithwidth").css('padding-' + left + '', '2px');
            jQuery(".greenbgwithwidth").css('width', '100%');
            jQuery(".greenbgwithwidth").css('padding-' + left + '', '2px');
            var content = jQuery("#ReadOnly_LeftContainer_Stage35").nextAll();
            jQuery("<div id='tempDiv'></div>").insertAfter("#ReadOnly_LeftContainer_Stage35");
            jQuery("#tempDiv").wrapInner(content);
            jQuery("#tempDiv").css('background-color', 'white');

        }
        var stage3Details = jQuery('.stage3_previewconfirmdetails');
        for (j = 0; j < stage3Details.length; j++) {
            var currElement = stage3Details[j];
            if (jQuery(currElement).children().length == 0) {
                jQuery(currElement).css('border-top', '0px');
            }
        }
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.OtherDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
        jQuery(".tableoverflowwrapperhw").addClass('rightBorder');
    },
    OpAccountDetailsRetUX5_onload: function(groupletId) {
        jQuery(".stage3_leftrightmainpanel").attr('style', 'width:99.9% !important');
        jQuery(".width100percentWithBorder").attr('style', 'border-top:0px !important');
        if (jQuery.browser.msie && jQuery("#MODAL_VIEW_CONTAINER").length == 1) {
            jQuery('html, body').animate({
                scrollTop: jQuery("#MODAL_VIEW_CONTAINER").offset().top
            }, 0);
        }
        if (groupletId == null || groupletId.length == 0 || groupletId == "undefined" || groupletId == "null") {
            jQuery(".errorContentWrapper").css('width', '100%');
            jQuery(".errorContentWrapper").css('padding-' + left + '', '2px');
            var content = jQuery("#ReadOnly_LeftContainer_Stage3_ModalView3").nextAll();
            jQuery("<div id='tempDiv'></div>").insertAfter("#ReadOnly_LeftContainer_Stage3_ModalView3");
            jQuery("#tempDiv").wrapInner(content);
            jQuery("#tempDiv").css('background-color', 'white');

        }
        if (groupletId != null && groupletId != "undefined") {
            var obj = jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Rb2.C1']");
            if (obj != null && obj != "undefined") {
                obj.attr('style', 'width:40%');
            }
        }

        var stage3Details = jQuery('.stage3_previewconfirmdetails');
        for (j = 0; j < stage3Details.length; j++) {
            var currElement = stage3Details[j];
            if (jQuery(currElement).children().length == 0) {
                jQuery(currElement).css('border-top', '0px');
            }
        }
    },
    OpAccountDetailsCorpUX5_onload: function(groupletId) {
        jQuery(".width100percentWithBorder").attr('style', 'border-top:0px !important');
        jQuery("[id='PageConfigurationMaster_3CMANTW__1:HREF_actIDOutput']").attr('style', 'word-wrap :initial');

        setTimeout(function() {
            jQuery('.collapsiblelink').each(function(index) {
                var collapsibleContainerDiv = jQuery(this).parent().next();
                var collapsibleClass = collapsibleContainerDiv.attr('class');
                if (collapsibleContainerDiv != null && typeof collapsibleClass !== typeof undefined && collapsibleClass.match('collapsibleContainerDiv')) {
                    jQuery(collapsibleContainerDiv).removeClass('collapsible-body');
                }
            });

        }, 0);

    },
    ACHTransactionEntryDetailsUX5_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
            jQuery('.width100percent_withmargin').addClass('bottomBorderShow');
            jQuery(".stage3_leftrightmainpanel").attr('style', 'padding-bottom:0px !important');

        }
        setTimeout(function() {
            jQuery('.collapsiblelink').each(function(index) {
                var collapsibleContainerDiv = jQuery(this).parent().next();
                var collapsibleClass = collapsibleContainerDiv.attr('class');
                if (collapsibleContainerDiv != null && typeof collapsibleClass !== typeof undefined && collapsibleClass.match('collapsibleContainerDiv')) {
                    jQuery(collapsibleContainerDiv).removeClass('collapsible-body');
                }
            });

        }, 0);
    },
    AdhocPayeeDetailsUX5_onload: function(groupletId) {
        jQuery(".width100percent_withmargin").attr('style', 'border-bottom:0px !important');
        jQuery('#' + groupletId + '\\:Caption7361690').css('padding-' + left + '', '1px');
    },
    ViewPTPCounterPartyDetailsHomeUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");

        jQuery(".InActiveMenu").css('overflow', 'hidden');
        jQuery(".InActiveMenu").ellipsis({
            width: 220
        });
        jQuery(".ActiveMenu").css('overflow', 'hidden');
        jQuery(".ActiveMenu").ellipsis({
            width: 220
        });
        jQuery(window).resize(function() {
            jQuery(".InActiveMenu").css('overflow', 'hidden');
            jQuery(".InActiveMenu").ellipsis({
                width: 220
            });
            jQuery(".ActiveMenu").css('overflow', 'hidden');
            jQuery(".ActiveMenu").ellipsis({
                width: 220
            });

        });
    },
    PTPAddCounterPartyUX5_onload: function(groupletId) {
        displayAdditional(groupletId);
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");

        //logic added for correcting validation icon alignment in lower resolution
        if (groupletId != null && groupletId.length != 0 && groupletId != "undefined" && groupletId != "null") {
            if (jQuery('.invalid') != undefined && jQuery('.invalid') != null &&
                jQuery('.invalid') != "null" && jQuery('.invalid').length != 0) {
                var content = jQuery(jQuery('.invalid')).prev();
                var img = jQuery('.invalid');
                jQuery("<div id='tempDiv' style='display:inline-block'></div>").insertAfter(".invalid");
                jQuery("#tempDiv").wrapInner(img);
                jQuery(content).insertBefore(".invalid");
            } else {
                var content = jQuery(jQuery('.valid')).prev();
                var img = jQuery('.valid');
                jQuery("<div id='tempDiv' style='display:inline-block'></div>").insertAfter(".valid");
                jQuery("#tempDiv").wrapInner(img);
                jQuery(content).insertBefore(".valid");
            }
        }
        jQuery(".InActiveMenu").css('overflow', 'hidden');
        jQuery(".InActiveMenu").ellipsis({
            width: 250
        });
        jQuery(".ActiveMenu").css('overflow', 'hidden');
        jQuery(".ActiveMenu").ellipsis({
            width: 250
        });
        jQuery(window).resize(function() {
            jQuery(".InActiveMenu").css('overflow', 'hidden');
            jQuery(".InActiveMenu").ellipsis({
                width: 250
            });
            jQuery(".ActiveMenu").css('overflow', 'hidden');
            jQuery(".ActiveMenu").ellipsis({
                width: 250
            });

        });
    },
    ViewPTPCounterpartyAllRequestUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");

        jQuery(".InActiveMenu").css('overflow', 'hidden');
        jQuery(".InActiveMenu").ellipsis({
            width: 250
        });
        jQuery(".ActiveMenu").css('overflow', 'hidden');
        jQuery(".ActiveMenu").ellipsis({
            width: 250
        });
        jQuery(window).resize(function() {
            jQuery(".InActiveMenu").css('overflow', 'hidden');
            jQuery(".InActiveMenu").ellipsis({
                width: 250
            });
            jQuery(".ActiveMenu").css('overflow', 'hidden');
            jQuery(".ActiveMenu").ellipsis({
                width: 250
            });

        });
    },
    PTPHostCPApprovalQueueUX5_onload: function() {
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");

        jQuery(".InActiveMenu").css('overflow', 'hidden');
        jQuery(".InActiveMenu").ellipsis({
            width: 250
        });
        jQuery(".ActiveMenu").css('overflow', 'hidden');
        jQuery(".ActiveMenu").ellipsis({
            width: 250
        });
        jQuery(window).resize(function() {
            jQuery(".InActiveMenu").css('overflow', 'hidden');
            jQuery(".InActiveMenu").ellipsis({
                width: 250
            });
            jQuery(".ActiveMenu").css('overflow', 'hidden');
            jQuery(".ActiveMenu").ellipsis({
                width: 250
            });

        });
    },
    AccessSchemeMenuLinkageEntry_onload: function() {
        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/channeladministration/SmartPhone.js");
        var adaptiveMenuPrf = feba.domManipulator.getElementById("AccessSchemeMaintenanceFG.ADAPTIVE_MNU_PRF_CD");
        var adaptiveMenuPrfLabel = feba.domManipulator.getElementById("ADAPTIVE_MNU_PRF_CD");
        feba.domManipulator.hideElement(adaptiveMenuPrf);
        feba.domManipulator.hideElement(adaptiveMenuPrfLabel);
    },
    AccountSummaryMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/AccountSummaryMB.js");
    },
    OpTransactionHistoryMB_onload: function() {
        //console.log("Loading script OpTransactionHistoryMB...");
        feba.domManipulator.loadScript("scripts/module/accounts/OpTransactionHistoryMB.js");
    },
    LnTransactionHistoryMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/LnTransactionHistoryMB.js");
    },
    TransactionHistoryMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/TransactionHistoryMB.js");
    },
    CCTXNHistoryMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/accounts/CCTXNHistoryMB.js");
    },
    TxnEntryDetailsUX5_onload: function() {
        var viewWidth = viewport().width;
        if (parseInt(viewWidth) >= 480 && parseInt(viewWidth) <= 699) {
            jQuery("[id$='ReadOnly_LeftContainer_Stage3_Collapsible8\\.ReadOnlySectHeader']").attr('style', 'width:99.2% !important');
        }

        if (jQuery.browser.msie && jQuery("#MODAL_VIEW_CONTAINER").length == 1) {
            jQuery('html, body').animate({
                scrollTop: jQuery("#MODAL_VIEW_CONTAINER").offset().top
            }, 0);
        }
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ExtraDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_Collapsible8.ReadOnlySectHeader']").addClass('ui-helper-hidden');
    },
    TransactionEntryDetailsUX5_onload: function() {
        var viewWidth = viewport().width;
        if (parseInt(viewWidth) >= 480 && parseInt(viewWidth) <= 699) {
            jQuery("[id$='ReadOnly_LeftContainer_Stage3_Collapsible8\\.ReadOnlySectHeader']").attr('style', 'width:99.2% !important');
            document.getElementById('ReadOnly_LeftContainer_Stage3_Collapsible8').style.visibility = "hidden"
        }
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ExtraDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_Collapsible8.ReadOnlySectHeader']").addClass('ui-helper-hidden');
        document.getElementById('ReadOnly_LeftContainer_Stage35.ExtraDet_SubSection').style.border = "1px solid #E0E0E0";
    },
    ChequeInquiryUX5_onload: function(groupletId) {

        if (jQuery('.modalWrapper').find('.error_highlight').length > 0) {
            var floatDirection = left;
            if (feba.domManipulator.isRTL()) {
                floatDirection = "right";
            }
            jQuery('.modalWrapper').find('.error_highlight').css('float', floatDirection);
            jQuery('.modalWrapper').find('.error_highlight').css('padding-top', '8px');
        }
    },

    OpTransactionHistoryWidUX4_onload: function() {

        convertComboboxes();
        jQuery('.dashboardSection .listgreyrowtxtleftline_new').css('float', 'none');
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".bluelink_wrap").ellipsis({
            width: 100
        });
    },
    OpTransactionHistoryUX4_onload: function(groupletId) {
        jQuery('.nextGenUX4 .listgreyrowtxtleftline_new').css('float', 'none');
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery('#' + groupletId).find(".bluelink_wrap").ellipsis({
            width: 100
        });
    },
    CCTXNDetailsHistoryWidUX4_onload: function() {

        convertComboboxes();
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_cctxnarray").ellipsis({
            width: 120
        });
    },
    CCTXNDetailsHistoryUX4_onload: function() {

        convertComboboxes();
        jQuery('.container-nxtGenmedium .stage3_searchpaneldiv').css('margin-' + left + '', '6px');
        feba.domManipulator.loadScript("scripts/common/NFEBAEllipsis.js");
        jQuery(".searchsimpletext_cctxnarray").ellipsis({
            width: 120
        });
    },
    CCTXNDetailsHistoryWidUX4_onload: function() {

        convertComboboxes();
    },
    LnAmortScheduleUX4_onload: function(groupletId) {
        if (jQuery('.bubble').hasClass('hideElement')) {
            console.log("already hidden");
        } else {
            jQuery('.bubble').addClass('hideElement');
        }

    },
    DpScheduleUX5_onload: function() {
        jQuery(".stage3_rightwithmargin").css('margin-top', '0');

        jQuery(window).resize(function() {
            jQuery(".stage3_rightwithmargin").css('margin-top', '0');
        });
    },

    InitiateChequeIssuancePaymentDetails_onload: function(groupletId) {

        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "inmg";

            script.src = "scripts/module/inmg/inmg.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            displayPayeeDetails(groupletId);

        } else {
            feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        }
    },

    InitiateDemandDraftIssuancePaymentDetails_onload: function(groupletId) {

        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "inmg";

            script.src = "scripts/module/inmg/inmg.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            displayPayeeDetails(groupletId);

        } else {
            feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        }
    },
    InitiateDemandDraftIssuancePrintDetails_onload: function(groupletId) {

        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "inmg";
            script.src = "scripts/module/inmg/inmg.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);

            }
        } else {
            feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        }
        hideEmptyElements(groupletId);
        hideHiddenElements(groupletId);
    },
    InitiateChequeIssuancePrintDetails_onload: function(groupletId) {

        feba.js.common.displayWarning = "N";
        feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = "inmg";
            script.src = "scripts/module/inmg/inmg.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);

            }
        } else {
            feba.domManipulator.loadScript("scripts/module/inmg/inmg.js");
        }

    },
    ActivityInqCorpUX5_onload: function(groupletId) {

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "DetailedInquiryChange";

            script.src = "scripts/module/general/DetailedInquiryChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/general/DetailedInquiryChange.js"); //earlier call added in else
        }
        jQuery(".inputtextarea-span").attr('style', 'background:none;height: 70px;width:100% !important');
        jQuery(".multi_select_dropdown_with_border_searchpanel").attr('style', 'margin-top:-4px !important');
        jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left !important');
        jQuery(".labelcolumnsmall").attr('style', 'line-height: normal !important');
        jQuery(".labelColumn_combo_brdr_small").attr('style', 'margin-top:-2px !important');

    },
    ViewQueryFacilities_onload: function(groupletId) {
        handleUX2toNextGenPageJumps(groupletId);
    },
    LimitNodeDetails_onload: function(groupletId) {
        handleUX2toNextGenPageJumps(groupletId);
    },
    CollectionPreviewConfirmationDetails_onload: function(groupletId) {

        grpId = groupletId + ":";
        jQuery("[id='" + grpId + "DispFormWithListTableWithTableContentSixCol.RowSetHeader21']").css("border-top", "1px solid #979797");
    },
    ActivityInqConsumerUX5_onload: function(groupletId) {

        jQuery(".multi_select_dropdown_with_border_searchpanel").attr('style', 'margin-top:-4px !important');
        jQuery("table tbody tr td.footable-last-column").attr('style', 'text-align:left !important');
        jQuery(".labelColumn_combo_brdr_small").attr('style', 'margin-top:-1px !important');

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "DetailedInquiryChange";

            script.src = "scripts/module/general/DetailedInquiryChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }

        } else {
            feba.domManipulator.loadScript("scripts/module/general/DetailedInquiryChange.js"); //earlier call added in else
        }
    },
    InquiryFacility_onload: function(groupletId) {
        setTimeout(
            function() {

                if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
                    var script = document.createElement('script');
                    script.id = 'NdynamicFetch';
                    script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
                    if (document.head) {
                        document.head.appendChild(script);
                    } else {
                        document.getElementsByTagName('head')[0].appendChild(script);
                    }
                } else {
                    feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
                }
            }, 1000);
    },
    InitiatePaymentMB_onload: function() {
        feba.domManipulator.loadScript("scripts/module/transaction/InitiatePaymentMB.js");
    },
    DpScheduleUX4_onload: function(groupletId) {
        if (jQuery('.bubble').hasClass('hideElement')) {
            console.log("already hidden");
        } else {
            jQuery('.bubble').addClass('hideElement');
        }

    },
    LnAmortScheduleWidUX4_onload: function() {

        convertComboboxes();
        if (jQuery('.bubble').hasClass('hideElement')) {
            console.log("already hidden");
        } else {
            jQuery('.bubble').addClass('hideElement');
        }
    },
    TransactionType_onload: function() {
        jQuery(".labelColumn_combo").addClass("multipleListBoxAdmin");
    },
    DpScheduleWidUX4_onload: function() {

        convertComboboxes();
        if (jQuery('.bubble').hasClass('hideElement')) {
            console.log("already hidden");
        } else {
            jQuery('.bubble').addClass('hideElement');
        }
    },
    UserChannelLinkageMaint_onload: function() {
        hideSameUserIdButtonsRM();
    },
    CreateUserChannelLinkage_onload: function() {
        hideSameUserIdButtons();
    },
    CreateUserChannelLinkageUX5_onload: function(groupletId) {
        hideSameUserIdButtons(groupletId);
    },
    MPCreateUserChannelLinkageUX5_onload: function() {
        hideSameUserIdMPButtons();
    },
    AllTransactionCorpUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='" + groupletId + ":DownloadPanel_Stage315']").css('display', 'none');
            //	     As border issue is not there in 9084 commenting the below lines
            //	     var vpWidth1 = viewport().width;
            //			if(parseInt(vpWidth1)>=480 && parseInt(vpWidth1)<=550){
            //				jQuery('.stage3_listingpaneldiv h3.listingcol').attr('style', 'border-'+right+': 1px solid #D4D4D4 !important');
            //			}
        }
    },
    AllTransactionRetUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            jQuery("[id='" + groupletId + ":DownloadPanel_Stage315']").css('display', 'none');
            //	     As border issue is not there in 9084 commenting the below lines
            //	    var vpWidth1 = viewport().width;
            //			if(parseInt(vpWidth1)>=480 && parseInt(vpWidth1)<=550){
            //			jQuery('.stage3_listingpaneldiv h3.listingcol').attr('style', 'border-'+right+': 1px solid #D4D4D4 !important');
            //			}
        }
    },
    TransactionEntriesListCorpUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            //		    var vpWidth1 = viewport().width;
            //				if(parseInt(vpWidth1)>=480 && parseInt(vpWidth1)<=550){
            //				jQuery('.stage3_listingpaneldiv h3.listingcol').attr('style', 'border-'+right+': 1px solid #D4D4D4 !important');
            //				}
        }
    },
    TransactionEntriesListRetUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            //		    var vpWidth1 = viewport().width;
            //				if(parseInt(vpWidth1)>=480 && parseInt(vpWidth1)<=550){
            //				jQuery('.stage3_listingpaneldiv h3.listingcol').attr('style', 'border-'+right+': 1px solid #D4D4D4 !important');
            //				}
        }
    },
    ScheduledTransactionRetUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');
            jQuery('.step_trackerwidth_withoutmargin').css('width', '99%'); //Added because the calendar button was exceeding the left container border
            script.id = 'SwitchView';

            script.src = "scripts/module/transaction/SwitchView.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/transaction/SwitchView.js");
        }
        feba.domManipulator.loadScript("scripts/module/transaction/ScheduledTxnsFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.scheduledTxnsFEBACalendar);
        jQuery(".scheduleTxnHeader").css('font', 'roboto-regular, OpenSans, Arial, Helvetica, sans-serif, OpenSans, Arial, Helvetica, sans-serif !important');
        jQuery(".scheduleTxnHeader").css('font-weight', 'bold');
        jQuery(".scheduleTxnHeader").css('font-size', '0.9em');
    },
    ScheduledTransactionCorpUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');
            jQuery('.step_trackerwidth_withoutmargin').css('width', '99%'); //Added because the calendar button was exceeding the left container border
            script.id = 'SwitchView';

            script.src = "scripts/module/transaction/SwitchView.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/transaction/SwitchView.js");
        }
        feba.domManipulator.loadScript("scripts/module/transaction/ScheduledTxnsFEBACalendar.js");
        feba.domManipulator.documentReady(feba.useCase.scheduledTxnsFEBACalendar);
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) >= 480 && parseInt(vpWidth) <= 639) {
            jQuery("[id='" + groupletId + ":ListingPanel_LeftContainer_Stage310']").attr('style', 'border:none !important');
            jQuery('.febacal-container table').attr('style', 'width:100.4% ; border-' + right + ':none !important');
            jQuery('.febacal-view-header table td').attr('style', 'width:100.2% !important');
            jQuery('.pageLeftContainer').attr('style', 'width:98.8% !important');
        }
        jQuery(".scheduleTxnHeader").css('font', 'roboto-regular, OpenSans, Arial, Helvetica, sans-serif, OpenSans, Arial, Helvetica, sans-serif !important');
        jQuery(".scheduleTxnHeader").css('font-weight', 'bold');
        jQuery(".scheduleTxnHeader").css('font-size', '0.9em');
    },
    /* Script call for Initiate Batch Header*/
    InitiateBatchTransactionHeaderUX5_onload: function(groupletId) {
        feba.js.common.displayWarning = "N";

        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'InitiateCompanyIDCheck';

            script.src = "scripts/module/transaction/InitiateCompanyIDCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/transaction/InitiateCompanyIDCheck.js");
        }
        updateErrorMsgLocation("div", "stage3_inputpanel_paydetailsrow");

    },
    FBALoginCaptcha_onload: function() {

        if (jQuery.browser.safari) {
            jQuery(".loginPanelFBButtonStyle").addClass('loginPanelFBButtonStyle_Safari');
            jQuery(".loginPanelFBButtonStyle").removeClass('loginPanelFBButtonStyle');
        }

        jQuery('#Details_TopLeftContainer_Stage3_ModalView1').removeClass();
        jQuery('#Details_TopLeftContainer_Stage3_ModalView1').addClass('displayNone');
        if (typeof isAdaptiveUI != 'undefined' && isAdaptiveUI == "true") {
            jQuery('#MBLoginHDisplay\\.Rc1\\.C1').addClass('mbloginPanelColumnDetailNewStyle');
            jQuery('#MBLoginHDisplay\\.Rc1\\.C1').removeClass('mbloginPanelColumnDetailStyle');
        } else {
            jQuery("[name='AuthenticationFG.VERIFICATION_CODE']").attr("placeHolder", getMessage("ConfirmVerification"));
        }

    },
    /*Aashish added for corp*/

    StopPreviewDetailsUX5_onload: function(groupletId) {
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) > 1018)) {
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C3']").attr('style', 'width:17% !important;margin-' + left + ':33px!important;');
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C4']").attr('style', 'margin-' + left + ':2px!important;');
        } else {
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C3']").attr('style', '');
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C4']").attr('style', '');
        }
        jQuery(window).resize(function() {
            var vpWidth2 = viewport().width;
            if ((parseInt(vpWidth2) > 1018)) {
                jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C3']").attr('style', 'width:17% !important;margin-' + left + ':33px!important;');
                jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C4']").attr('style', 'margin-' + left + ':2px!important;');
            } else {
                jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C3']").attr('style', '');
                jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra6.C4']").attr('style', '');
            }
        });

    },


    ChequeInquiry_onload: function(groupletId) {
        /* Added for date error message width issue*/
        // jQuery(".stage3_detailsrow").attr('style', 'width:96% !important'); commented for cheque to responsiveness

        jQuery("h3").css('border-top', 'none');
        /* jQuery('.stage3_detailspanel').css('padding-top','0px'); */
        jQuery('.stage3_detailspanel').addClass("checkInqStagePanelWidth");
        if (jQuery('.modalWrapper').length > 0) {

            jQuery("[id$='Details_TopLeftContainer_Stage33.SubSection3']").parent().css('border-top', '1px solid #CCCCCC');
        }
        /*Added for corp calendar responsive issue*/
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 750 && parseInt(vpWidth) >= 640) || (parseInt(vpWidth) <= 639 && parseInt(vpWidth) >= 0) ||
            (parseInt(vpWidth) <= 940 && parseInt(vpWidth) >= 900)) {
            jQuery('.rightPlaceHolder').addClass('rightPadding');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 750 && parseInt(vpWidth) >= 640) || (parseInt(vpWidth) <= 639 && parseInt(vpWidth) >= 0) ||
                (parseInt(vpWidth) <= 940 && parseInt(vpWidth) >= 900)) {
                jQuery('.rightPlaceHolder').addClass('rightPadding');
            } else {
                jQuery('.rightPlaceHolder').removeClass('rightPadding');
            }
        });

        if (jQuery("[id='" + groupletId + ":FromChequeNumberCriteria']").hasClass('error_highlight')) {
            var id = jQuery("[id='" + groupletId + ":FromChequeNumberCriteria']").attr('id');
            jQuery("[id$='" + groupletId + ":FromChequeNumberCriteria']").css('float', left);
            jQuery("[id$='" + groupletId + ":FromChequeNumberCriteria']").css('padding-top', '12px');

        }

        if (jQuery("[id='" + groupletId + ":toCaption']").hasClass('error_highlight')) {
            var id = jQuery("[id='" + groupletId + ":toCaption']").attr('id');
            jQuery("[id$='" + groupletId + ":toCaption']").css('float', left);
            jQuery("[id$='" + groupletId + ":toCaption']").css('padding-top', '12px');
        }


    },
    FinRuleEditUX5_onload: function(groupletId) {

        jQuery("[id='" + groupletId + "\\:FinRuleCRUDFG.ACCOUNT_NUMBER']").addClass('remarksboxux3 textareaalignment');
        if (jQuery("[id='" + groupletId + ":ToAmount']").hasClass('error_highlight')) {
            var id = jQuery("[id='" + groupletId + ":ToAmount']").attr('id');
            jQuery("[id='" + groupletId + "\\:ToAmount']").css('float', left);
            jQuery("[id='" + groupletId + "\\:ToAmount']").addClass('searchsimpletextresponsive');
        }

    },
    /*Added as fix for ticket 730402 ---start*/
    ViewCounterPartyDetails_onload: function(groupletId) {
        jQuery(".width100percentWithBorder").attr('style', 'border-top:0px !important');
        jQuery('.ui-dialog .pageLeftContainer').attr("style", "border-top:none!important");
        if (jQuery('.ui-dialog .pageLeftContainer').length > 1) {
            jQuery('.ui-dialog .pageLeftContainer').attr("style", "border-top:none!important");
        }
        jQuery("#" + groupletId + "\\:PRINT_MANDATE").removeClass('nextGen_HwButton');
        jQuery("#" + groupletId + "\\:PRINT_MANDATE").parent().removeClass('nextGen_HwButton');
    },
    CounterPartySummaryUX5_onload: function(groupletId) {

        jQuery("#" + groupletId + "\\:PRINT_MANDATE").removeClass('nextGen_HwButton');
        jQuery("#" + groupletId + "\\:PRINT_MANDATE").parent().removeClass('nextGen_HwButton');

    },
    CounterPartyDetailsUX5_onload: function(groupletId) {
        if (jQuery('.ui-dialog .pageLeftContainer').length > 1) {
            jQuery('.ui-dialog .pageLeftContainer').attr("style", "border-top:none!important");
        }
        jQuery("#" + groupletId + "\\:PRINT_MANDATE").removeClass('nextGen_HwButton');
        jQuery("#" + groupletId + "\\:PRINT_MANDATE").parent().removeClass('nextGen_HwButton');

    },
    /*Added as fix for ticket 730402 ---end*/
    /*Added for login flow center alignment of page  --- Start*/
    RegisterSQnAScreen_onload: function() {
        jQuery('form').css('max-width', '1024px');
        jQuery('form').css('margin', 'auto');

    },
    PasswordChangeScreen_onload: function() {
        jQuery('form').css('max-width', '1024px');
        jQuery('form').css('margin', 'auto');

    },


    PasswordChangeScreenUX5_onload: function() {
        if (viewport().width >= 480 && viewport().width < 640) {
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
        var divElement = jQuery('.leftColumnStyle_pwdscreen');
        jQuery(divElement[0]).attr('style', 'margin-bottom:8px;');
        jQuery(divElement[3]).attr('style', 'margin-bottom:8px;');
    },
    RetailPasswordChangeScreen_onload: function() {
        if (viewport().width >= 480 && viewport().width < 640) {
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
        var divElement = jQuery('.leftColumnStyle_pwdscreen');
        jQuery(divElement[0]).attr('style', 'margin-bottom:8px;');
        jQuery(divElement[3]).attr('style', 'margin-bottom:8px;');
    },

    TermsAndConditionsScreen_onload: function() {
        jQuery('form').css('max-width', '1024px');
        jQuery('form').css('margin', 'auto');
        jQuery('#InfoPanel').addClass('infoPanelTermsAndConds');
        jQuery('#NavPanel').addClass('navPanelTermsAndConditions');
        jQuery('#InfoPanel\\.Rowset1').children().addClass('paddingLeftTermsAndConds');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 900) {
            jQuery('#global').css('width', '97.6%');
        }
        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 900) {
                jQuery('#global').css('width', '97.6%');
            } else if (parseInt(vpWidth) > 900) {

                jQuery('#global').css('width', '99%');
            }
        });

    },
    TermsAndConditionsScreenUX5_onload: function() {
        /*text alignment start*/
        var infPanel = jQuery('#InfoPanel');
        var infPanelChild = jQuery(infPanel).children();
        jQuery(infPanelChild).attr('style', 'padding:20px !important;display: inline-block;width:92% !important;word-break:break-word');
        jQuery('#InfoPanel').attr('style', 'border:1px solid #C0C0C0;padding-bottom:5px');
        var infPanelSubChild = jQuery(infPanelChild).children();
        jQuery(infPanelSubChild).attr('style', 'word-wrap: break-word');
        /*text alignment end*/

        /*button alignment start*/
        var buttonIdentifier = jQuery('#NavPanel');
        var buttonChild = jQuery(buttonIdentifier).children().find('p');
        jQuery(buttonChild).attr('style', 'padding-' + right + ':20px');
        var buttonChildSubChild = jQuery(buttonChild).children();
        jQuery(buttonChildSubChild[1]).attr('style', 'float:' + left + '');
        /*button alignment end*/

        /*help and print button issue start*/
        var vpWidth = viewport().width;
        if (vpWidth > 900 && vpWidth <= 1366) {
            jQuery('#HREF_help').attr('style', 'margin-' + right + ':80px !important');
            //jQuery('#HREF_printPreview').attr('style','margin-'+right+':80px !important');
            jQuery('#HREF_printPreview').attr('style', 'margin-right:80px !important; margin-top:-22px !important;');
        }
        jQuery(window).resize(function() {
            var vpWidth2 = viewport().width;
            if (vpWidth2 > 900 && vpWidth2 <= 1366) {
                jQuery('#HREF_help').attr('style', 'margin-' + right + ':80px !important');
                //jQuery('#HREF_printPreview').attr('style','margin-'+right+':80px !important');
                jQuery('#HREF_printPreview').attr('style', 'margin-right:80px !important; margin-top:-22px !important;');
            }
        });
        /*help and print button issue end*/
        /*footer alignment start*/
        var pageleftConatiner = jQuery('.pageLeftContainer');
        jQuery('#BrdCrumbNImg').after('<div id=main_container style=min-height:390px;></div>');
        jQuery('.pageLeftContainer').remove();
        var mainContainer = jQuery('#main_container');
        jQuery(mainContainer).append(pageleftConatiner);
        /*footer alignment end*/

        jQuery('#NavPanel').attr('style', 'border-style: solid;border-width: thin;border-top-width: 0px;border-color: #C0C0C0;padding-bottom: 10px;');
        jQuery('.wrapper_terms_condition').attr('style', 'padding-' + left + ':0px !important;padding-' + right + ':0px !important;width:auto !important;padding-bottom:0px !important;background-color:transparent !important');
        jQuery('.pageLeftContainer').attr('style', 'width:auto !important;margin-' + left + ':6% !important;margin-bottom:397px !important; background-color:white !important; float:none !important;margin-' + right + ':6% !important;margin-top:27px !important');
    },

    SelectRelationshipScreenUX5_onload: function() {
        jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:100% !important;margin-' + left + ':0% !important;');
        jQuery('.errorContentWrapper').attr('style', 'width:100% !important;margin-' + left + ':0% !important');
        jQuery('.pageLeftContainer').attr('style', 'width:76% !important;margin-' + left + ':10% !important;margin-bottom:164px !important; background-color:transparent !important; float:none !important');
        jQuery('.pageheadingcaps').attr('style', 'padding-' + left + ':10% !important;padding-bottom:5px !important');
        jQuery('.section_fourlinbrd').attr('style', 'padding-bottom:0px !important');
        jQuery('.errorDisplayStyle').attr('style', 'width:76% !important;padding-' + left + ':10% !important');
        jQuery('.pagination-wrapper').attr('style', 'background-color:white');
        var width = viewport().width;
        if (width >= 640 && width <= 696) {
            jQuery('.errorCodeWrapper').css('width', '89%');
        }
        jQuery(window).resize(function() {
            vpWidth1 = viewport().width;
            if (parseInt(vpWidth1) >= 640 && vpWidth1 <= 696) {
                jQuery('.errorCodeWrapper').css('width', '89%');
            } else {
                jQuery('.errorCodeWrapper').css('width', '');
            }
        });

    },
    IncompleteTransactionCorpUX5_onload: function(groupletId) {
        var vpWidth2 = viewport().width;
        if (parseInt(vpWidth2) >= 480 && parseInt(vpWidth2) <= 699) {
            jQuery("[id$='ReadOnly_LeftContainer_Stage3_Collapsible8\\.ReadOnlySectHeader']").attr('style', 'width:99.2% !important');
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'radioChangeTxnUX3';

            script.src = "scripts/module/transaction/radioChangeTxnUX3.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/transaction/radioChangeTxnUX3.js.js");
        }


    },


    ViewTranDetailsForSingleEntryUX5_onload: function(groupletId) {
        var vpWidth3 = viewport().width;
        if (parseInt(vpWidth3) >= 480 && parseInt(vpWidth3) <= 699) {
            jQuery("[id$='ReadOnly_LeftContainer_Stage3_Collapsible8\\.ReadOnlySectHeader']").attr('style', 'width:99.2% !important');
        }
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.OtherDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_Collapsible8.ReadOnlySectHeader']").addClass('ui-helper-hidden');
    },
    EncryptionRegistration_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "Encryption";

            script.src = "scripts/module/corporateadministration/Encryption.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/corporateadministration/Encryption.js");
        }
    },
    EncryptionRegistrationUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "Encryption";

            script.src = "scripts/module/corporateadministration/Encryption.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/corporateadministration/Encryption.js");
        }
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc5\\.C2']").css('padding-' + left + '', '7px');
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc4\\.C2']").css('margin-top', '8px');
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc4\\.C2']").css('padding-' + left + '', '7px');
    },
    UpdateEncryptionDetails_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "Encryption";

            script.src = "scripts/module/corporateadministration/Encryption.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/corporateadministration/Encryption.js");
        }

    },
    UpdateEncryptionDetailsUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "Encryption";

            script.src = "scripts/module/corporateadministration/Encryption.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/corporateadministration/Encryption.js");
        }
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc5\\.C2']").css('padding-' + left + '', '7px');
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc4\\.C2']").css('margin-top', '8px');
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc4\\.C2']").css('padding-' + left + '', '7px');
        jQuery("[id$='FileUploadEncryptionCRUDFG\\.ISSIGREQ']").attr('checked', false);
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc5']").css('display', 'none');
        jQuery("[id$='DataEntry_LeftContainer_Stage39\\.Rc6']").css('display', 'none');
    },
    ASLDataCaptureUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "NFEBAAccountServiceLinkage";

            script.src = "scripts/module/servicerequest/NFEBAAccountServiceLinkage.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBAAccountServiceLinkage.js");
        }

    },


    SRRetailActivateDebitCardReq_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "NFEBADebitCardLimitCheck";

            script.src = "scripts/module/servicerequest/NFEBADebitCardLimitCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NFEBADebitCardLimitCheck.js");
        }

    },
    CLMDataCaptureUX5_onload: function(groupletId) {
        if (isGroupletExecution(groupletId)) {

            var script = document.createElement('script');

            script.id = "NdynamicFetch";

            script.src = "scripts/NdynamicFetch.js?groupletId=" + groupletId + ";";
            var script1 = document.createElement('script');

            script1.id = "id1NfnScript";

            script1.src = "scripts/module/servicerequest/NfnScript.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
                document.head.appendChild(script1);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
                document.getElementsByTagName('head')[0].appendChild(script1);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NdynamicFetch.js");
            feba.domManipulator.loadScript("scripts/module/servicerequest/NfnScript.js");
        }

    },
    /* 463143 added for forgot password screen changes start */
    LoginAltFlowOnlineCompleteUX5_onload: function(groupletId) {
        var vpWidth1 = viewport().width;
        if (parseInt(vpWidth1) >= 480 && parseInt(vpWidth1) <= 639) {
            jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
            jQuery(".loginfoorter-wrapper").attr('style', 'margin-top:200px !important');
        }
        jQuery(window).resize(function() {
            vpWidth1 = viewport().width;
            if (parseInt(vpWidth1) >= 1 && parseInt(vpWidth1) <= 900) {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
                jQuery(".loginfoorter-wrapper").attr('style', 'margin-top:200px !important');
            } else {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:73% !important');
                jQuery(".loginfoorter-wrapper").attr('style', 'margin-top:0px !important');
            }
        });
    },
    RetailPasswordChangeUX5_onload: function(groupletId) {
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rb2.C1']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal');
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rc2.C1']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal');
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rb2.C2']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal_marginleft');
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rc2.C2']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal_marginleft');
        var vpWidth1 = viewport().width;
        if (parseInt(vpWidth1) >= 480 && parseInt(vpWidth1) <= 639) {
            jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
            jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:90% !important');
        }
        jQuery(window).resize(function() {
            vpWidth1 = viewport().width;
            if (parseInt(vpWidth1) >= 1 && parseInt(vpWidth1) <= 900) {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
                jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:90% !important');
            } else {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:73% !important');
                jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:73% !important');
            }
        });
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    CorporatePasswordChangeUX5_onload: function(groupletId) {
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rb2.C1']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal');
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rc2.C1']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal');
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rb2.C2']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal_marginleft');
        jQuery("[id='DataEntry_LeftContainer_Stage39.Rc2.C2']").find('input[type=password]').addClass('textboxPasswordChangeHorizontal_marginleft');
        var vpWidth1 = viewport().width;
        if (parseInt(vpWidth1) >= 480 && parseInt(vpWidth1) <= 639) {
            jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
            jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:90% !important');
        }
        jQuery(window).resize(function() {
            vpWidth1 = viewport().width;
            if (parseInt(vpWidth1) >= 1 && parseInt(vpWidth1) <= 900) {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
                jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:90% !important');
            } else {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:73% !important');
                jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:73% !important');
            }
        });
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }
    },
    LoginAltFlowOTPScreenUX5_onload: function(groupletId) {
        var vpWidth1 = viewport().width;
        if (parseInt(vpWidth1) >= 480 && parseInt(vpWidth1) <= 639) {
            jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
            jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:90% !important');
        }
        jQuery(window).resize(function() {
            vpWidth1 = viewport().width;
            if (parseInt(vpWidth1) >= 1 && parseInt(vpWidth1) <= 900) {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:90% !important');
                jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:90% !important');
            } else {
                jQuery(".login_err_messages .redbgwithwidth, .login_err_messages .greenbgwithwidth, .login_err_messages .orangebgwithwidth").attr('style', 'width:73% !important');
                jQuery(".stage3_inputpanel_leftcontainer_passwordscreen").attr('style', 'width:73% !important');
            }
        });
    },
    /* 463143 added for forgot password screen changes end */
    RetailPasswordChange_onload: function(groupletId) {
        if (jQuery("[id$='" + groupletId + ":signOnPwdStrengthImage']").hasClass('simpletext')) {
            jQuery("[id$='" + groupletId + ":signOnPwdStrengthImage']").css('padding-' + left + '', '45.5%');
        }

        if (jQuery("[id$='" + groupletId + ":txnPwdStrengthImage']").hasClass('simpletext')) {
            jQuery("[id$='" + groupletId + ":txnPwdStrengthImage']").css('padding-' + left + '', '45.5%');
        }
        if (jQuery("[id='" + groupletId + ":PasswordChangeFG.SIGNON_CHECK']").hasClass('ui-helper-hidden')) {

            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.SIGNON_CHECK']").removeClass();
            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.SIGNON_CHECK']").addClass('h3Font');
        }

        if (jQuery("[id='" + groupletId + ":PasswordChangeFG.TRANSACTION_CHECK']").hasClass('ui-helper-hidden')) {

            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.TRANSACTION_CHECK']").removeClass();
            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.TRANSACTION_CHECK']").addClass('h3Font');
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }

        if (jQuery('[name=isDashboardWidget]') != null && jQuery('[name=isDashboardWidget]').length > 0) {
            if (jQuery('[name=isDashboardWidget]').val() === 'Y') {
                var element = jQuery('.section_grayborder').find('.querytextleftquickpaywidget');
                if (element != null && element.length > 0) {
                    jQuery(element).removeClass('querytextleftquickpaywidget');
                    jQuery(element).addClass('querytextleft');
                    jQuery(element).siblings().removeClass('querytextrightquickpaywidget');
                    jQuery(element).siblings().addClass('querytextright');
                }
                var userIdLeftEle = jQuery('.section_grayborder').find('.querytextleftStyle');
                var userIdRightEle = jQuery('.section_grayborder').find('.querytextleftStyle').siblings().children();
                if (userIdLeftEle != null && userIdLeftEle.length > 0) {
                    jQuery(userIdLeftEle).removeClass('querytextleftStyle');
                    jQuery(userIdLeftEle).addClass('querytextleft');
                }
                if (userIdRightEle != null && userIdRightEle.length > 0) {
                    jQuery(userIdRightEle).removeClass('querytextboxmedium_search');
                    jQuery(userIdRightEle).addClass('querytextboxmedium_searchquickpayRemark');
                    jQuery(userIdRightEle).children().removeClass('labelcolumnsearch');
                    jQuery(userIdRightEle).children().addClass('labelcolumnsearchquickpayRemark');
                }

            }
        }
        jQuery(window).resize(function() {
            if (jQuery('[name=isDashboardWidget]') != null && jQuery('[name=isDashboardWidget]').length > 0) {
                if (jQuery('[name=isDashboardWidget]').val() === 'Y') {
                    var element = jQuery('.section_grayborder').find('.querytextleftquickpaywidget');
                    if (element != null && element.length > 0) {
                        jQuery(element).removeClass('querytextleftquickpaywidget');
                        jQuery(element).addClass('querytextleft');
                        jQuery(element).siblings().removeClass('querytextrightquickpaywidget');
                        jQuery(element).siblings().addClass('querytextright');
                    }
                    var userIdLeftEle = jQuery('.section_grayborder').find('.querytextleftStyle');
                    var userIdRightEle = jQuery('.section_grayborder').find('.querytextleftStyle').siblings().children();
                    if (userIdLeftEle != null && userIdLeftEle.length > 0) {
                        jQuery(userIdLeftEle).removeClass('querytextleftStyle');
                        jQuery(userIdLeftEle).addClass('querytextleft');
                    }
                    if (userIdRightEle != null && userIdRightEle.length > 0) {
                        jQuery(userIdRightEle).removeClass('querytextboxmedium_search');
                        jQuery(userIdRightEle).addClass('querytextboxmedium_searchquickpayRemark');
                        jQuery(userIdRightEle).children().removeClass('labelcolumnsearch');
                        jQuery(userIdRightEle).children().addClass('labelcolumnsearchquickpayRemark');
                    }

                }
            }
        });

        if (isGroupletExecution(groupletId)) {
            jQuery('[id="' + groupletId + ':DataEntry_LeftContainer_Stage39.SubSection2' + '"]').find('[type="password"]').parent().addClass("textboxPasswordChangeHw");
            jQuery('[id="' + groupletId + ':DataEntry_LeftContainer_Stage39.SubSection3' + '"]').find('[type="password"]').parent().addClass("textboxPasswordChangeHw");
        }
    },
    CorporatePasswordChange_onload: function(groupletId) {

        if (jQuery("[id$='" + groupletId + ":signOnPwdStrengthImage']").hasClass('simpletext')) {
            jQuery("[id$='" + groupletId + ":signOnPwdStrengthImage']").css('padding-' + left + '', '45.5%');
        }

        if (jQuery("[id$='" + groupletId + ":txnPwdStrengthImage']").hasClass('simpletext')) {
            jQuery("[id$='" + groupletId + ":txnPwdStrengthImage']").css('padding-' + left + '', '45.5%');
        }

        if (jQuery("[id='" + groupletId + ":PasswordChangeFG.SIGNON_CHECK']").hasClass('ui-helper-hidden')) {

            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.SIGNON_CHECK']").removeClass();
            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.SIGNON_CHECK']").addClass('h3Font');
        }

        if (jQuery("[id='" + groupletId + ":PasswordChangeFG.TRANSACTION_CHECK']").hasClass('ui-helper-hidden')) {

            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.TRANSACTION_CHECK']").removeClass();
            jQuery("label[for='" + groupletId + "\\:PasswordChangeFG.TRANSACTION_CHECK']").addClass('h3Font');
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NFEBAPasswordChange";

            script.src = "scripts/NFEBAPasswordChange.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/NFEBAPasswordChange.js");
        }

        if (jQuery('[name=isDashboardWidget]') != null && jQuery('[name=isDashboardWidget]').length > 0) {
            if (jQuery('[name=isDashboardWidget]').val() === 'Y') {
                var element = jQuery('.section_grayborder').find('.querytextleftquickpaywidget');
                if (element != null && element.length > 0) {
                    jQuery(element).removeClass('querytextleftquickpaywidget');
                    jQuery(element).addClass('querytextleft');
                    jQuery(element).siblings().removeClass('querytextrightquickpaywidget');
                    jQuery(element).siblings().addClass('querytextright');
                }
                var userIdLeftEle = jQuery('.section_grayborder').find('.querytextleftStyle');
                var userIdRightEle = jQuery('.section_grayborder').find('.querytextleftStyle').siblings().children();
                if (userIdLeftEle != null && userIdLeftEle.length > 0) {
                    jQuery(userIdLeftEle).removeClass('querytextleftStyle');
                    jQuery(userIdLeftEle).addClass('querytextleft');
                }
                if (userIdRightEle != null && userIdRightEle.length > 0) {
                    jQuery(userIdRightEle).removeClass('querytextboxmedium_search');
                    jQuery(userIdRightEle).addClass('querytextboxmedium_searchquickpayRemark');
                    jQuery(userIdRightEle).children().removeClass('labelcolumnsearch');
                    jQuery(userIdRightEle).children().addClass('labelcolumnsearchquickpayRemark');
                }

            }
        }
        jQuery(window).resize(function() {
            if (jQuery('[name=isDashboardWidget]') != null && jQuery('[name=isDashboardWidget]').length > 0) {
                if (jQuery('[name=isDashboardWidget]').val() === 'Y') {
                    var element = jQuery('.section_grayborder').find('.querytextleftquickpaywidget');
                    if (element != null && element.length > 0) {
                        jQuery(element).removeClass('querytextleftquickpaywidget');
                        jQuery(element).addClass('querytextleft');
                        jQuery(element).siblings().removeClass('querytextrightquickpaywidget');
                        jQuery(element).siblings().addClass('querytextright');
                    }
                    var userIdLeftEle = jQuery('.section_grayborder').find('.querytextleftStyle');
                    var userIdRightEle = jQuery('.section_grayborder').find('.querytextleftStyle').siblings().children();
                    if (userIdLeftEle != null && userIdLeftEle.length > 0) {
                        jQuery(userIdLeftEle).removeClass('querytextleftStyle');
                        jQuery(userIdLeftEle).addClass('querytextleft');
                    }
                    if (userIdRightEle != null && userIdRightEle.length > 0) {
                        jQuery(userIdRightEle).removeClass('querytextboxmedium_search');
                        jQuery(userIdRightEle).addClass('querytextboxmedium_searchquickpayRemark');
                        jQuery(userIdRightEle).children().removeClass('labelcolumnsearch');
                        jQuery(userIdRightEle).children().addClass('labelcolumnsearchquickpayRemark');
                    }
                }
            }
        });
        if (isGroupletExecution(groupletId)) {
            jQuery('[id="' + groupletId + ':DataEntry_LeftContainer_Stage39.SubSection2' + '"]').find('[type="password"]').parent().addClass("textboxPasswordChangeHw");
            jQuery('[id="' + groupletId + ':DataEntry_LeftContainer_Stage39.SubSection3' + '"]').find('[type="password"]').parent().addClass("textboxPasswordChangeHw");
        }
    },
    LoginAltFlowOfflineUserDetailsUX5_onload: function(groupletId) {
        jQuery('.inputtextarea-span').addClass('textareaLeftMargin');
        jQuery('.datelabelColumn').addClass('datecomponentLeftPadding');
        jQuery(window).resize(function() {
            jQuery('.inputtextarea-span').addClass('textareaLeftMargin');
            jQuery('.datelabelColumn').addClass('datecomponentLeftPadding');

        });
    },
    UpdatePersonalAssuranceDetailsChangePam_onload: function(groupletId) {
        jQuery('.right').parent().addClass('navPanelSection');
        jQuery(window).resize(function() {
            jQuery('.right').parent().addClass('navPanelSection');
        });
    },

    UpdatePersonalAssuranceDetailsChangePamUX5_onload: function(groupletId) {
        jQuery(".header-text").attr('style', 'display:block ;top:103px; text-align:center; position:relative !important');
        jQuery(".materializelogo_login").attr('style', 'margin-' + left + ':0px !important');
        jQuery(".login-body-style").attr('style', 'max-width :1024px !important');
        jQuery(".pageLeftContainer").attr('style', 'width :100% !important');
        jQuery(".singleTableHeading").attr('style', 'border-top :0px !important');
        /*jQuery(".stage3_inputpanel_column").attr('style', 'width :30% !important');*/
        jQuery(".searchsimpletextCMS").attr('style', 'float:left ;padding-top:8px !important ;width:51% !important');
        jQuery("[id$='PersonalAssuranceFG\\.SELECTED_INDEX']").attr('style', 'visibility:visible ;left:initial;position:inherit');

        jQuery('.phrase_label').text(jQuery('.type_Message')[0].value);
        jQuery('.phrase_label').attr('style', 'display:none ');
        jQuery("input[name='PersonalAssuranceFG.SELECTED_INDEX']:checked").parent().parent().find('.phrase_label').attr('style', 'display:block');
        jQuery("input[name='PersonalAssuranceFG.SELECTED_INDEX']:checked").parent().parent().find('img').css("border", "2px solid #d61a0c");
    },
    //Added by Parvathy for UBA -START
    UpdatePersonalAssuranceDetailsUX5_onload: function(groupletId) {

        var fgName = feba.domManipulator.getFGNameFromPage();

        var fgName1 = document.getElementById("FORMSGROUP_ID__").value;

        var radioName = "__AUTH_TYPE__";
        var radioElement = jQuery('#__AUTH_TYPE__');

        visibleField(radioElement, "N");
    },
    UpdateChannelUserIdUX5_onload: function(groupletId) {
        var fgName = feba.domManipulator.getFGNameFromPage();
        var fgName1 = document.getElementById("FORMSGROUP_ID__").value;
        var radioName = "__AUTH_TYPE__";
        var radioElement = jQuery('#__AUTH_TYPE__');
        visibleField(radioElement, "N");
    },
    //Added by Parvathy for UBA -END
    CCSummary_onload: function(groupletId) {
        /*var idElm = groupletId+"\\:SimpleSearchRow";
        jQuery('#'+idElm).css('border-color','#FFF');*/
    },

    MultiCategoryListingUX5_onload: function(groupletId) {
        var vpWidth = viewport().width;
        setTimeout(function() {
            var listingPresent = jQuery("[id*='MultiCategoryTxnFG.MULTI_CATEGORY_ID_ARRAY']").length;
            if (parseInt(vpWidth) >= 480 && parseInt(vpWidth) <= 640) {
                jQuery(".inputtextareasmall-span").addClass("inputtextareasmall-span_category1");
                jQuery(".inputtextareasmall").attr('style', 'width:100% !important');
                if (listingPresent > 0) {
                    jQuery(jQuery("[id*='MultiCategoryTxnFG.MULTI_CATEGORY_ID_ARRAY']").parent().parent().find("input")).css('width', '65px');
                }
            }
            if (parseInt(vpWidth) > 640) {
                jQuery(".inputtextareasmall-span").addClass("inputtextareasmall-span_category1");
                jQuery(".inputtextareasmall").attr('style', 'width:100% !important');
            }
        }, 200);
    },

    // Added for defect 738647
    ViewIntraDayStatementUX5_onload: function(groupletId) {
        if (jQuery('.modalWrapper').length > 0 && jQuery('.modalWrapper') != undefined) {
            if (jQuery('.dashboardSection').length === 1 && jQuery('.modalWrapper').find('.stage3_rightwithmargin').length === 1) {
                jQuery('.stage3_rightwithmargin').addClass('hideElement')
            }
        }
    },
    ViewIntraDayTransactionDetails_onload: function(groupletId) {
        if (jQuery('.dashboardSection').length === 0 || jQuery('.dashboardSection').length == undefined) {
            if (jQuery('.modalWrapper').find('.right').length === 1) {
                jQuery('.right').addClass('hideElement')
            }
        }
    },
    // Added for defect 739623
    SRRetailFDBreakingCy_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        if (jQuery('.dashboardSection').length === 0 || jQuery('.dashboardSection').length == undefined) {
            jQuery('.sectionDownloadPanelEbux3').addClass('hideElement');
        }
        jQuery("[id='" + groupletId + ":DownloadPanel_Stage315']").attr('style', 'display:none!important');
    },
    SRCorporateFDBreakingCy_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
        if (jQuery('.dashboardSection').length === 0 || jQuery('.dashboardSection').length == undefined) {
            jQuery('.sectionDownloadPanelEbux3').addClass('hideElement');
        }
        jQuery("[id='" + groupletId + ":DownloadPanel_Stage315']").attr('style', 'display:none!important');

    },
    SRRetailFDBreaking_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },

    SRCorporateFDBreaking_onload: function(groupletId) {
        feba.domManipulator.getElement(document).scrollTop(0);
    },
    // Added for defect 738646
    OtherBankAccountDetailsUX5_onload: function(groupletId) {

        if (jQuery('.modalWrapper').length > 0 && jQuery('.modalWrapper') != undefined) {
            if (jQuery('.dashboardSection').length === 1 && jQuery('.modalWrapper').find('.stage3_rightwithmargin').length === 1) {
                jQuery('.stage3_detailspanel').addClass('hideElement');
                jQuery('.stage3_previewconfirmdetails').css('border-top', '0px');
                jQuery(jQuery('.stage3_searchpanel_detailsdiv').next()).css('border-top', '1px solid #CCCCCC');
            }
        }
    },
    //    UpdateRetailAccountNickNamesUX5_onload: function(groupletId){
    //        if(groupletId && groupletId!=null && groupletId.length>0 && groupletId!="undefined"){
    //        	jQuery("[id='"+groupletId+":Authorization.Rowset5']").addClass('leftborder');
    //        }
    //	},
    TransactionHistoryListingUX5_onload: function(groupletId) {
        if (jQuery('.dashboardSection').length === 0 || jQuery('.dashboardSection').length == undefined) {
            if (jQuery('.modalWrapper').find('.right').length === 1) {
                jQuery('.right').addClass('hideElement')
            }
        }
    },
    InvoiceCyberReceipt_onload: function(groupletId) {
        var tablesOnPage = jQuery('.listingrow').find('table');
        if (tablesOnPage.length > 1) {
            var tableId = tablesOnPage[0].id;
            var noOfColumns = jQuery("[id='" + tableId + "']").find("th").length;
            var columnsAccessed = 0;
            var tableColumns = jQuery("[id='" + tableId + "']").find("tbody").find("td").find("span");
            for (i = 0; i < tableColumns.length; i++) {
                innerTableId = tableColumns[i].id;
                var text = jQuery("[id='" + innerTableId + "']").text();
                if (text == '\xa0') {
                    columnsAccessed++;
                } else {
                    columnsAccessed = 0;
                }
                if (columnsAccessed == tableColumns.length) {
                    jQuery("[id='" + tableId + "']").parent().parent().attr("style", "display:none");
                    break;
                }
                if (columnsAccessed == noOfColumns) {
                    if (i == (columnsAccessed - 1)) {
                        jQuery("[id='" + tableId + "']").parent().parent().attr("style", "display:none");
                        break;
                    }
                    jQuery("[id='" + innerTableId + "']").parent().parent().attr("style", "display:none");
                    columnsAccessed = 0;
                }
            }
        }
    },
    Invoice_onload: function(groupletId) {
        var tablesOnPage = jQuery('.listingrow').find('table');
        if (tablesOnPage.length > 1) {
            var tableId = tablesOnPage[0].id;
            var noOfColumns = jQuery("[id='" + tableId + "']").find("th").length;
            var columnsAccessed = 0;
            var tableColumns = jQuery("[id='" + tableId + "']").find("tbody").find("td").find("span");
            for (i = 0; i < tableColumns.length; i++) {
                innerTableId = tableColumns[i].id;
                var text = jQuery("[id='" + innerTableId + "']").text();
                if (text == '\xa0') {
                    columnsAccessed++;
                } else {
                    columnsAccessed = 0;
                }
                if (columnsAccessed == tableColumns.length) {
                    jQuery("[id='" + tableId + "']").parent().parent().attr("style", "display:none");
                    break;
                }
                if (columnsAccessed == noOfColumns) {
                    if (i == (columnsAccessed - 1)) {
                        jQuery("[id='" + tableId + "']").parent().parent().attr("style", "display:none");
                        break;
                    }
                    jQuery("[id='" + innerTableId + "']").parent().parent().attr("style", "display:none");
                    columnsAccessed = 0;
                }
            }
        }
    },
    InvoicePreviewConfirmation_onload: function(groupletId) {
        var tablesOnPage = jQuery('.listingrow').find('table');
        if (tablesOnPage.length > 1) {
            var tableId = tablesOnPage[0].id;
            var noOfColumns = jQuery("[id='" + tableId + "']").find("th").length;
            var columnsAccessed = 0;
            var tableColumns = jQuery("[id='" + tableId + "']").find("tbody").find("td").find("span");
            for (i = 0; i < tableColumns.length; i++) {
                innerTableId = tableColumns[i].id;
                var text = jQuery("[id='" + innerTableId + "']").text();
                if (text == '\xa0') {
                    columnsAccessed++;
                } else {
                    columnsAccessed = 0;
                }
                if (columnsAccessed == tableColumns.length) {
                    jQuery("[id='" + tableId + "']").parent().parent().attr("style", "display:none");
                    break;
                }
                if (columnsAccessed == noOfColumns) {
                    if (i == (columnsAccessed - 1)) {
                        jQuery("[id='" + tableId + "']").parent().parent().attr("style", "display:none");
                        break;
                    }
                    jQuery("[id='" + innerTableId + "']").parent().parent().attr("style", "display:none");
                    columnsAccessed = 0;
                }
            }
        }
    },
    /*Added for login flow center alignment of page  --- End*/
    /* Added for File Upload Title and Breadcrum Value ---- START */
    UploadFileDetailsUX5_onload: function(groupletId) {
        setTimeout(function() {
            var newText = jQuery('h1').text().replace('${productDesc}', jQuery(document.getElementsByName('TEMP_VAR')).attr('value'));
            jQuery('h1').text("");
            jQuery('h1').text(newText);
            var text1 = jQuery('.masterGroupletTitle').parent().text().replace('${productDesc}', jQuery(document.getElementsByName('TEMP_VAR')).attr('value'));
            var element = "<span id='breadcrumbarrow' class='masterGroupletTitle'></span>" + text1;
            jQuery('.masterGroupletTitle').parent().text("");
            jQuery('.masterGroupletTitle').parent().text(text1);
            jQuery('.breadcrumbnew').children(':last').append(element);
            var titleVal = jQuery('title').text().replace('${productDesc}', jQuery(document.getElementsByName('TEMP_VAR')).attr('value'));
            jQuery('title').text("");
            jQuery('title').text(titleVal);
        }, 100);
    },
    GFPFileUploadUX5_onload: function(groupletId) {
        setTimeout(function() {
            var newText = jQuery('h1').text().replace('${productDesc}', jQuery(document.getElementsByName('TEMP_VAR')).attr('value'));
            jQuery('h1').text("");
            jQuery('h1').text(newText);
            var text1 = jQuery('.masterGroupletTitle').parent().text().replace('${productDesc}', jQuery(document.getElementsByName('TEMP_VAR')).attr('value'));
            //var mastGrp=jQuery('.masterGroupletTitle').detach();
            var element = "<span id='breadcrumbarrow' class='masterGroupletTitle'></span>" + text1;
            jQuery('.masterGroupletTitle').parent().text("");
            jQuery('.masterGroupletTitle').parent().text(text1);
            jQuery('.breadcrumbnew').children(':last').append(element);
            //jQuery('.masterGroupletTitle').parent().prepend(mastGrp);

            var titleVal = jQuery('title').text().replace('${productDesc}', jQuery(document.getElementsByName('TEMP_VAR')).attr('value'));
            jQuery('title').text("");
            jQuery('title').text(titleVal);
        }, 100);

        jQuery(".file-path").attr('tabindex', '-1');
    },
    FileUploadRejectConfirmUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.Header2']").css('border-' + left + '', '1px solid #D4D4D4');
            jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.RAuth1']").css('border-' + left + '', '1px solid #D4D4D4');

        }
    },
    FileUploadCancelConfirmUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.Header2']").css('border-' + left + '', '1px solid #D4D4D4');
            jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.RAuth1']").css('border-' + left + '', '1px solid #D4D4D4');
            jQuery(".querytextboxmedium").attr('style', 'padding-top: 0px !important');
        }
    },

    ViewApplicableTxnTypesUX5_onload: function() {
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) > 900) {
            jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb1\\.C4"]').css('width', '23%');
        }
        jQuery('.stage3_leftrightmainpanel').css('border-bottom', '1px solid #D4D4D4');
    },
    PPLCyberReceiptUX5_onload: function() {
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) > 900) {
            jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb1\\.C4"]').css('width', '23%');
            jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb2\\.C4"]').css('width', '23%');
            jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb3\\.C4"]').css('width', '23%');
        }
    },
    /* Added for createfunding request ---- START */
    CreateFundingRequest_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":NavPanel.Ra1.C4']").hide();
        jQuery("[id='" + groupletId + ":NavPanel.Ra1.C5']").hide();
        jQuery("[id='" + groupletId + ":NavPanel.Ra1.C6']").hide();
        jQuery("[id='" + groupletId + ":NavPanel.Ra1.C7']").hide();
        jQuery("[id='" + groupletId + ":NavPanel.Ra1.C8']").hide();

    },
    /* Added for createfunding request ---- END */
    CPL_PPLDetailsDisplayUX5_onload: function() {
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) > 900) {
            jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb1\\.C4"]').css('width', '23%');
            jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb2\\.C4"]').css('width', '23%');
            jQuery('[id$="ReadOnly_LeftContainer_Stage35\\.Rb3\\.C4"]').css('width', '23%');
        }
        jQuery('.stage3_leftrightmainpanel').css('border-bottom', '1px solid #D4D4D4');
    },
    PageMaintenanceCreateConfirmationScreen_onload: function(groupletId) {
        setTimeout(function() {
            for (j = 0; j < jQuery('.ui-sortable').length; j++) {
                if (jQuery(jQuery('.ui-sortable')[j]).children().length == 0) {
                    jQuery(jQuery('.ui-sortable')[j]).hide();
                }
            }
        }, 2000);

    },
    PageMaintenanceHomePage_onload: function(groupletId) {
        convertComboboxes();
        if (jQuery('#MessageDisplay_TABLE').length > 0) {
            jQuery('#contentarea').attr(Constants.GROUPLET_ID_ATTR, "dummy");
        }

    },
    ViewDocumentsUX4_onload: function(groupletId) {
        jQuery('#' + groupletId + "\\:RightContainer_Stage34\\.Rb1").addClass('opstatementux4');
        jQuery('#' + groupletId + "\\:RightContainer_Stage34\\.Rc2").addClass('opstatementux4 opstatementux41');
    },
    SRPaperStatementRetDC_onload: function(groupletId) {
        if (groupletId == "PageConfigurationMaster_PCSUX4W__1") {
            if (jQuery('#FormManagementFG\\.REPORTTITLE').attr('value') == "PCSDataCaptureUX5") {
                jQuery('.HW_formbtn_search').hide();
            }
        }
    },
    PCAGeneralDetails_onload: function(groupletId) {
        jQuery("[id='" + groupletId + "'").css('height', 'auto');
    },
    CCSummaryUX5_onload: function(groupletId) {
        if (groupletId) {
            if (jQuery('.forPinButton').length > 0) {
                if (jQuery('#' + groupletId).find('.widgetPaginationFooterNextGenBorderTop').find('.widgetFooterRight_new').length == 0 && jQuery('.nextGenUX4 :visible').length == 0) {
                    jQuery('#' + groupletId).find('.forPinButton').addClass('paddingtop');
                    jQuery('#' + groupletId).find('.widgetFooterleft_new').addClass('hideElement');
                } else if (jQuery('#' + groupletId).find('table').length > 0 && jQuery('#' + groupletId).find('.widgetPaginationFooterNextGenBorderTop').find('.widgetFooterRight_new').length > 0 && jQuery('.nextGenUX4 :visible').length == 0) {
                    var a = jQuery('.widgetPaginationFooterNextGenBorderTop').find('script').detach();
                    jQuery(a).insertAfter('.widgetPaginationFooterNextGenBorderTop');

                    jQuery('.widgetPaginationFooterNextGenBorderTop ').each(function() {
                        var data = [];
                        jQuery(this).contents().each(function() {
                            if (this.nodeType === Node.TEXT_NODE) {
                                data.push(this);
                            }
                        }).end().append(jQuery('<span class="transactiontxt_new viewingText" />').append(data));
                    });
                    jQuery('.widgetFooterleft_new').css('width', '1px');
                    jQuery('.widgetFooterleft_new').css('padding-' + left + '', '0px');
                    jQuery('.forPinButton').css('margin-top', '15px');
                }
            }
            jQuery('.dropdown-button.more').css('padding-' + left + '', '15px');
            jQuery(".footable-row-detail-value.amtRightAlign").attr('style', 'float: none !important');
            var vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 634) {
                jQuery(".footable-row-detail-value.amtRightAlign").attr('style', 'float: none !important');
                //jQuery('.dropdown-button.more').attr('style','padding-'+left+':1px;');
            }
            if (navigator.userAgent.indexOf('MSIE') !== -1 ||
                navigator.appVersion.indexOf('Trident/') > 0) {
                /* Microsoft Internet Explorer detected in. */
                if (parseInt(vpWidth) <= 640) {
                    jQuery('.dropdown-button.more').attr('style', 'padding-' + left + ':1px;');
                    jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float: none !important');
                }
                jQuery(".footable-row-detail-value .amtRightAlign").attr('style', 'float: none !important');
            }
            if (parseInt(vpWidth) <= 640) {
                jQuery('.dropdown-button.more').attr('style', 'padding-' + left + ':1px;');
            }

        }
    },

    AccountChargeDetailsUX5_onload: function() {

        jQuery(".stage3_inputpanel_column").css("width", "28%");
        jQuery(".stage3_listingpaneldiv").css('border-bottom', 'none !important');
        jQuery(".stage3_listingpaneldiv").attr('style', 'border-bottom: none !important');
        //jQuery("[id$='DisplayForm_ChallanForm2.Rj2']").width('400');
        var vpWidth = viewport().width;
        if (parseInt(vpWidth) <= 500) {
            jQuery(".stage3_inputpanel_column").css("width", "19%");
        }
        jQuery("[id='" + groupletId + ":JavaGraphTag17650259_finanzTool']").attr("width", "100%");
        jQuery("[id='" + groupletId + ":JavaGraphTag17650259_finanzTool']").attr("max-width", "100%");

    },
    AddonCCSummaryUX5_onload: function() {
        jQuery(".iconimagewithmargin").attr('style', 'height:16px !important');


    },
    /* Added for File Upload Title and Breadcrum Value ---- END */
    /* Start: Added For Ticket: 744651 */
    PondicherryChallanForm_onload: function() {

        jQuery("[id$='DisplayForm_ChallanForm2.Rj2']").removeClass('row_withTopRightLeftBorderHeight');
        jQuery("[id$='DisplayForm_ChallanForm2.Rj2']").addClass('row_withTopRightLeftBorderHeightNew');

        jQuery("[id$='DisplayForm_ChallanForm2.Rj3']").removeClass('row_withTopRightLeftBorder');
        jQuery("[id$='DisplayForm_ChallanForm2.Rj3']").addClass('hideElement');

        jQuery("[id$='DisplayForm_ChallanForm2.Rj4']").removeClass('row_withTopRightLeftBorder');
        jQuery("[id$='DisplayForm_ChallanForm2.Rj4']").addClass('hideElement');

    },
    /* End: Added For Ticket: 744651 */
    /* Start: Added For Ticket: 755419 */
    LienInquiryListUX5_onload: function(groupletId) {
        jQuery(".tableoverflowwrapperhw").css("border-" + right + "", "1px solid #D4D4D4");
        if (jQuery("#IS_UX4_SUMMARY_VIEW") != null && jQuery("#IS_UX4_SUMMARY_VIEW").val != null && jQuery("#IS_UX4_SUMMARY_VIEW").val() == "Y") {
            var tableinUi = jQuery("#MODAL_VIEW_CONTAINER").find('table').length;
            if (tableinUi == 0 && jQuery("#MODAL_VIEW_CONTAINER").length > 0) {
                var element = document.getElementById('modalDialog');
                if (element) {
                    if (element && jQuery(element).length > 0) {
                        jQuery('html, body').animate({
                            scrollTop: jQuery(element).offset().top
                        }, 0);
                    }
                }
            }
        }
    },
    /* End: Added For Ticket: 755419 */
    CreditCardDetailsUX5_onload: function(groupletId) {
        jQuery('.datelabelColumn').css('margin-' + left + '', '3px');
        jQuery("input.all-datepicker, input.future-datepicker, input.past-datepicker").attr('style', 'margin-' + left + ':0px !important');
    },
    DpAccountDetailsRetUX5_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {
            setTimeout(function() {
                if (jQuery("#MODAL_VIEW_CONTAINER").length == 1) {
                    if ("PageConfigurationMaster_W103__1" == groupletId && jQuery('.nextGenUX4').length > 0) {
                        jQuery('#modalDialog .hideElement').css('display', 'block');
                    }
                } else {
                    jQuery('#modalDialog .hideElement').css('display', 'none');
                }
            }, 1000);
        }
    },
    LAFOfflineRequestPreviewConfirmationUX5_onload: function(groupletId) {
        jQuery('.formbtn_last').css('padding-top', '4px');
        jQuery('.querytextright_stage3').attr('style', 'padding-top:0px')
    },
    Authorization_onload: function() {

        if (jQuery('#MODAL_VIEW_CONTAINER').find('#IS_MENU_AUTH_VIEW').length > 0) {
            var isauthScreen = jQuery('#MODAL_VIEW_CONTAINER').find('#IS_MENU_AUTH_VIEW').attr('value');
            if (isauthScreen == "Y") {
                jQuery('#MODAL_VIEW_CONTAINER').find(".queryitalictext").removeClass("queryitalictext").addClass("queryitalictext_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".simpletext").removeClass("simpletext").addClass("simpletext_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find("h3").removeClass("h3").addClass("h3_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".formrow").removeClass("formrow").addClass("formrow_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".querytextleft").removeClass("querytextleft").addClass("querytextleft_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".querytextright").removeClass("querytextright").addClass("querytextright_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".formbtn_last3").removeClass("formbtn_last3").addClass("formbtn_last3_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".formbtn3").removeClass("formbtn3 nextGen_HwButton").addClass("formbtn3_menuAuth");
                jQuery(".queryitalictext_menuAuth").after("<span class=\"stage3_steptracker_mandatory\" id=\"mandatoryField\">* Mandatory Fields</span>");
            }
        }
    },
    MenuAuthConfirmationScreenUX5_onload: function() {

        if (jQuery('#MODAL_VIEW_CONTAINER').find('#IS_MENU_AUTH_VIEW').length > 0) {
            var isauthScreen = jQuery('#MODAL_VIEW_CONTAINER').find('#IS_MENU_AUTH_VIEW').attr('value');
            if (isauthScreen == "Y") {
                jQuery('#MODAL_VIEW_CONTAINER').find(".queryitalictext").removeClass("queryitalictext").addClass("queryitalictext_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".simpletext").removeClass("simpletext").addClass("simpletext_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find("h3").removeClass("h3").addClass("h3_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".formrow").removeClass("formrow").addClass("formrow_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".querytextleft").removeClass("querytextleft").addClass("querytextleft_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".querytextright").removeClass("querytextright").addClass("querytextright_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".formbtn_last3").removeClass("formbtn_last3").addClass("formbtn_last3_menuAuth");
                jQuery('#MODAL_VIEW_CONTAINER').find(".formbtn3").removeClass("formbtn3 nextGen_HwButton").addClass("formbtn3_menuAuth");
                jQuery(".queryitalictext_menuAuth").after("<span class=\"stage3_steptracker_mandatory\" id=\"mandatoryField\">* Mandatory Fields</span>");
            }
        }
    },
    SelectSetPasswordModeUX5_onload: function(groupletId) {
        jQuery('#MessageDisplay_TABLE').addClass('floatleft');
    },

    ViewOneTimeTranDetailsForSingleEntryUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.OtherDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
    },

    ViewSinglTransactionDetailsRetail_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.OtherDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
    },

    ViewTransactionEntryDetailsRetail_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.ExtraDet_SubSection']").attr('style', 'border-bottom:1px solid #E0E0E0');
    },
    BillerListMainPageUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ListingPanel_LeftContainer_Stage310.Rc1']").addClass('paddingBorderTop');
    },
    BillerRegistrationConfirmationDetailsUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":InputForm_Authorization_Stage317.Re1.C1']").addClass('noPaddingTop');
    },
    BillerRegistrationDetailsUX5_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35']").addClass('borderBottomGrey');
        if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra3.C2']").addClass('payBillRefNoRes');
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage35.Ra5.C4']").addClass('payBillRefNoRes');
        }
    },
    PresentmentBillerDetailsUX5_onload: function(groupletId) {
        if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
            jQuery('.width100percent_withmargin').addClass('bottomBorderShow');
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Rc1.C2']").addClass('payBillRefNoRes');
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Ra1.C2']").addClass('payBillRefNoRes');
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView7.Rc1.C4']").addClass('payBillRefNoRes');
        }
    },
    ApprovalBillerRegistrationConfirmationDetailsUX5_onload: function(groupletId) {
        if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
            jQuery('#MODAL_VIEW_CONTAINER').find('.pageLeftContainer').addClass('pageLeftContainer1');
            jQuery('#MODAL_VIEW_CONTAINER').find('.pageLeftContainer').removeClass('pageLeftContainer');
            jQuery('.stage3_inputpanel_leftcontainer').addClass('borderTopBillerWF');
        }
    },
    CustomSWIFTRemittanceUX5_onload: function(groupletId) {
        var bnfType = jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:TranRequestManagerFG.SWR_BANK_VALIDATION_TYPE"]').val();

        if (bnfType == "IBAN") {

            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().hide();
        } else if (bnfType == "BIC") {
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().hide();
        } else if (bnfType == "BANKSUITE") {

            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().hide();
        } else {

            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().hide();
        }
    },

    CustomSWIFTRemittanceAddEntryUX5_onload: function(groupletId) {
        var bnfType = jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:TranRequestManagerFG.SWR_BANK_VALIDATION_TYPE"]').val();

        if (bnfType == "IBAN") {

            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().hide();
        } else if (bnfType == "BIC") {
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().hide();
        } else if (bnfType == "BANKSUITE") {

            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().show();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().hide();
        } else {

            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re71.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re70.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re72.C2"]').parent().hide();
            jQuery('[id$="PageConfigurationMaster_RIBSWRW__1:DataEntry_LeftContainer_Stage39.Re73.C2"]').parent().hide();
        }
    },
    /**Added by Parvathy for Mandates Start**/

    RegisterMandateUX5_onload: function(groupletId) {
        //	alert("PG Inside***");
        displayAdditional(groupletId);
        if (groupletId != null && groupletId.length > 0 &&
            groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "MandateFrequencyTypeCheck";

            script.src = "scripts/module/txnss/MandateFrequencyTypeCheck.js?groupletId=" +
                groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator
                .loadScript("scripts/module/txnss/MandateFrequencyTypeCheck.js");
        }

    },
    RegisterMandateUX3_onload: function(groupletId) {
        //alert("PG Inside***");
        displayAdditional(groupletId);
        if (groupletId != null && groupletId.length > 0 &&
            groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "MandateFrequencyTypeCheck";

            script.src = "scripts/module/txnss/MandateFrequencyTypeCheck.js?groupletId=" +
                groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator
                .loadScript("scripts/module/txnss/MandateFrequencyTypeCheck.js");
        }

    },
    RegisterMandate_onload: function(groupletId) {
        //	alert("PG Inside***");
        displayAdditional(groupletId);
        if (groupletId != null && groupletId.length > 0 &&
            groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "MandateFrequencyTypeCheck";

            script.src = "scripts/module/txnss/MandateFrequencyTypeCheck.js?groupletId=" +
                groupletId + ";";
            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator
                .loadScript("scripts/module/txnss/MandateFrequencyTypeCheck.js");
        }

    },
    /**Added by Parvathy for Mandates End**/
    BillerDetailsUX5_onload: function(groupletId) {
        if (jQuery('#MODAL_VIEW_CONTAINER').length > 0) {
            jQuery("[id='" + groupletId + ":ReadOnly_LeftContainer_Stage3_ModalView5.Ra1.C2']").addClass('payBillRefNoRes');
        }
    },
    /**Added by Parvathy for TOL 889354 Start**/
    CustomQNARegistrationModalScreenUX5_onload: function(groupletId) {
        jQuery('[id$="DataEntry_LeftContainer_Stage39.Ra4.C1"]').show();
        jQuery('[id$="DataEntry_LeftContainer_Stage39.Ra5.C1"]').hide();
        jQuery('[id$="DataEntry_LeftContainer_Stage39.Ra5.C1"]').removeAttr('style');
        jQuery('[id$="DataEntry_LeftContainer_Stage39.Ra5.C1"]').addClass('hideElement');

        jQuery('[id$="PageConfigurationMaster_RSSETW__1:DataEntry_LeftContainer_Stage39.Ra4.C1"]').show();
        jQuery('[id$="PageConfigurationMaster_RSSETW__1:DataEntry_LeftContainer_Stage39.Ra5.C1"]').hide();

    }
    /**Added by Parvathy for TOL 889354 End**/
};

feba.js.custom.MailRMCompose_onload = feba.js.custom.MailCompose_onload;
feba.js.module = {
    accounts_onload: function(groupletId) {
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        var typeOfUser = (userTypeValue == 1) ? "consumer" : ((userTypeValue == 2) ? "corporate" : "consumer");
        jQuery("link[rel=stylesheet][href*='account.css']").remove();
        feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L' + jQuery("#languageId").val() + '/' + typeOfUser + '/theme/modules/account.css" type="text/css" />');
    },
    mails_onload: function(groupletId) {
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        var typeOfUser = (userTypeValue == 1) ? "consumer" : ((userTypeValue == 2) ? "corporate" : "consumer");
        jQuery("link[rel=stylesheet][href*='mails.css']").remove();
        feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L' + jQuery("#languageId").val() + '/' + typeOfUser + '/theme/modules/mails.css" type="text/css" />');
    },
    inmg_onload: function(groupletId) {
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        var typeOfUser = (userTypeValue == 1) ? "consumer" : ((userTypeValue == 2) ? "corporate" : "consumer");
        jQuery("link[rel=stylesheet][href*='instrumentManagement.css']").remove();
        feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L' + jQuery("#languageId").val() + '/' + typeOfUser + '/theme/modules/instrumentManagement.css" type="text/css" />');
    },
    /*added for making checkbox clickable without resize  in login page -Start*/
    user_onload: function(groupletId) {


        if (jQuery('#AuthenticationFG\\.REPORTTITLE').val() == 'AuthenticationScreenMB') {
            feba.domManipulator.loadScript("scripts/module/user/AuthenticationScreenMB.js");
        }
        if (jQuery('#ServiceRequestListFG\\.REPORTTITLE').val() == 'AuthenticationScreen') {
            jQuery(".loginPanelColumnDetailStyle1:first").css("width", "30%");

        }
        if (jQuery('#AuthenticationFG\\.REPORTTITLE').val() == 'AuthenticationScreenUX5' || jQuery('#AuthenticationFG\\.REPORTTITLE').val() == 'AuthenticationImagePhraseScreenUX5') {

            if (jQuery('#MessageDisplay_TABLE').text().length > 0) {
                if (jQuery('#MessageDisplay_TABLE').text().indexOf('105411') == -1) {
                    jQuery('#AuthenticationFG\\.REMEMBER_USER_ID').attr("checked", false);
                }
            }
            if (jQuery('#CAN_USER_SELF_ENABLE').length > 0) {
                var userEnableElementVal = jQuery('#CAN_USER_SELF_ENABLE').attr('value');
                if (jQuery('#MessageDisplay_TABLE').text().length > 0) {
                    //alert("Inside exception");
                    if (userEnableElementVal == "Y" && (jQuery('#MessageDisplay_TABLE').text().indexOf('100203') != -1 || jQuery('#MessageDisplay_TABLE').text().indexOf('24036') != -1 || jQuery('#MessageDisplay_TABLE').text().indexOf('106803') != -1)) {
                        //alert("IuserEnableElementVal value is Y");
                        var hrefVal = jQuery('#label_forgot_access_code').attr('href');
                        hrefVal = hrefVal + "&AUTO_REDIRECT_DONE=Y";

                        //var userPrincipalVal= window.open(jQuery('#label_forgot_access_code').attr('href'));
                        var userPrincipalVal = window.open(hrefVal);
                        if (userPrincipalVal && userPrincipalVal != null && userPrincipalVal != "null") {
                            console.log("Yo Success !");
                            userPrincipalVal.focus();
                        } else {
                            var errorMessage = "<div class=\"errorDisplayDiv width100percent\"><p class=\"redbgwithwidth\"><span class=\"redtopleft\"><span></span>" +
                                "</span><span class=\"redbg\"><span></span></span><span class=\"redtopright\"> <span></span></span>" +
                                "</p></div><div role=\"alert\" class=\"errorContentWrapper redbg\" aria-live=\"assertive\"> " +
                                "<a href=\"#\" id=\"errorlink1\" title=\"" + getMessage("popupBlockedUserDisabled") + "\">" +
                                "<img src=\"" + getMessage("NoWidgetsImageSrc") + "\" alt=\"" + getMessage("NoWidgetsAlt") + "\" " +
                                "title=\"" + getMessage("NoWidgetsAlt") + "\" class=\"absmiddle\"></a><span class=\"errorCodeWrapper\" dir=\"ltr\">" + getMessage("popupBlockedUserDisabled") +
                                "</span></div><div class=\"width100percen\"><p class=\"redbgwithwidth\"><span class=\"redbottomleft\"> " +
                                "<span></span></span><span class=\"redbg\"> <span></span></span><span class=\"redbottomright\"> <span></span></span> </p></div>";
                            jQuery('.errorDisplayStyle').append(errorMessage);
                            console.log("Oopss !");
                        }
                    }
                }
            }
        }

        /* Fix for ticket : 778650*/

        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            jQuery(this).prev('input[type="checkbox"]').click();
            event.preventDefault();
            event.stopImmediatePropagation();
        });

        if (jQuery('#dummy1').attr('type') == 'password') {
            jQuery('#dummy1').attr('value', 'dummy');
            jQuery('#dummy2').attr('value', 'dummy');

        }
        if (jQuery('#PasswordChangeFG\\.REPORTTITLE').val() == 'PasswordChangeUX5') {
            var fgName = feba.domManipulator.getFGNameFromPage();

            var fgName1 = document.getElementById("FORMSGROUP_ID__").value;

            var radioName = "__AUTH_TYPE__";
            var radioElement = jQuery('#__AUTH_TYPE__');

            visibleField(radioElement, "N");
        }
        if (jQuery('#AuthenticationFG\\.REPORTTITLE').val() == 'AuthenticationScreenUX5') {

            var ca = document.cookie.split(';');
            var noOfCookies = ca.length;
            var cookieMap = [];
            for (var i = 0; i < noOfCookies; i++) {
                var c = ca[i];
                var cookieArr = c.split('=');
                cookieMap[cookieArr[0].trim()] = cookieArr[1];
            }

            var country_code = cookieMap['bankId'];
            if (country_code == 'BJ') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Benin.png'
            } else if (country_code == 'BF') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/BurkinaFaso.png'
            } else if (country_code == 'CM') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Cameroon.png'
            } else if (country_code == 'CG') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/CongoBrazaville.png'
            } else if (country_code == 'CD') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/CongoDRC.png'
            } else if (country_code == 'CI') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/CoteDIvoire.png'
            } else if (country_code == 'GA') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Gabon.png'
            } else if (country_code == 'GH') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Ghana.png'
            } else if (country_code == 'GN') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/GuineaConakry.png'
            } else if (country_code == 'KE') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Kenya.png'
            } else if (country_code == 'LR') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Liberia.png'
            } else if (country_code == 'ML') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Mali.png'
            } else if (country_code == 'MZ') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Mozambique.png'
            } else if (country_code == 'NG') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Nigeria.png'
            } else if (country_code == 'UG') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Uganda.png'
            } else if (country_code == 'SL') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/sierraleone.png'
            } else if (country_code == 'SN') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Senegal.png'
            } else if (country_code == 'TZ') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Tanzania.png'
            } else if (country_code == 'TD') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Chad.png'
            } else if (country_code == 'ZM') {
                jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Zambia.png'
            }


            //console.log(jQuery('.country_input').find('input[name="autocomplete-dropdown"]').attr('id_'));
            /*var country_code = jQuery('.country_input').find('input[name="autocomplete-dropdown"]').attr('id_');
            if(country_code == 0){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Benin.png'
            		}else if(country_code == 1){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/BurkinaFaso.png'
            		}else if(country_code == 2){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Cameroon.png'
            		}else if(country_code == 3){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/CongoBrazaville.png'
            		}else if(country_code == 4){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/CongoDRC.png'
            		}else if(country_code == 5){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/CoteDIvoire.png'
            		}else if(country_code == 6){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Gabon.png'
            		}else if(country_code == 7){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Ghana.png'
            		}else if(country_code == 8){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/GuineaConakry.png'
            		}else if(country_code == 9){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Kenya.png'
            		}else if(country_code == 10){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Liberia.png'
            		}else if(country_code == 11){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Mali.png'
            		}else if(country_code == 12){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Mozambique.png'
            		}else if(country_code == 13){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Nigeria.png'
            		}else if(country_code == 14){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Uganda.png'
            		}else if(country_code == 15){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/sierraleone.png'
            		}else if(country_code == 16){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Senegal.png'
            		}else if(country_code == 17){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Tanzania.png'
            		}else if(country_code == 18){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Chad.png'
            		}else if(country_code == 19){
            			jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Zambia.png'
            }*/
            /* if(country_code == 13){
            	jQuery('.dropdown_flag_img')[0].src = 'L001/consumer/images/flags/Nigeria.png'
            } */

            jQuery("#upgradation_msg_dialog").dialog({
                width: 600,
                height: 650,
                draggable: false,
                resizable: false,
                dialogClass: 'loginPage_upgrademsg',

            });

            jQuery("#upgradation_main").css("display", "block");
        }

        /* header menu links icons font issue*/
        if (jQuery.browser.safari) {
            jQuery('.header_menuicons_main .loginBottom_contact_lable a').attr("style", "font-family:Lato-Medium !important;");
        }
    },
    /*added for making checkbox clickable without resize  in login page -end*/
    crpadmin_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NAccessScript";

            script.src = "scripts/module/crpadmin/NAccessScript.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }

        } else {
            feba.domManipulator.loadScript("scripts/module/crpadmin/NAccessScript.js");
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');
            script.id = 'id1' + "NFEBAInlineEdit";

            script.src = "scripts/NFEBAInlineEditUX5.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }

        } else {
            feba.domManipulator.loadScript("scripts/NFEBAInlineEditUX5.js");
        }
        // Handle UX2 to next gen switch & vice versa
        handleUX2toNextGenPageJumps(groupletId);
        //handleLangIdChange(groupletId);

        // Fix for ticket ID 743952

        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            jQuery(this).prev('input[type="checkbox"]').click();
            event.preventDefault();
            event.stopImmediatePropagation();
        });
        var styleCheck = jQuery('.stage3_steptracker_mandatory');
        if (typeof undefined != typeof styleCheck && styleCheck != null) {
            var text = jQuery(styleCheck).text();
            if (typeof undefined != typeof text && text != null && text == "* Indicates Mandatory Fields" &&
                jQuery('#CorpAdminFWFG\\.REPORTTITLE').attr('value') != "UserPersonalDetailsUX5" &&
                jQuery('#CorpAdminFWFG\\.REPORTTITLE').attr('value') != "UserContactDetailsUX5") {
                jQuery('.stage3_steptracker_mandatory').css('color', '#505050');
            }
        }
    },

    corporateadministration_onload: function(groupletId) {
        var styleCheck = jQuery('.stage3_steptracker_mandatory');
        if (typeof undefined != typeof styleCheck && styleCheck != null) {
            var text = jQuery(styleCheck).text();
            if (typeof undefined != typeof text && text != null && text == "* Indicates Mandatory Fields") {
                jQuery('.stage3_steptracker_mandatory').css('color', '#505050');
            }
        }
    },

    workflowrule_onload: function(groupletId) {
        handleUX2toNextGenPageJumps(groupletId);
        var styleCheck = jQuery('.stage3_steptracker_mandatory');
        if (typeof undefined != typeof styleCheck && styleCheck != null) {
            var text = jQuery(styleCheck).text();
            if (typeof undefined != typeof text && text != null && text == "* Indicates Mandatory Fields") {
                jQuery('.stage3_steptracker_mandatory').css('color', '#505050');
            }
        }
    },

    workflow_onload: function(groupletId) {
        handleUX2toNextGenPageJumps(groupletId);
    },

    onlinevault_onload: function(groupletId) {
        handleUX2toNextGenPageJumps(groupletId);
    },


    DirectBanking_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/DirectBanking/NAC_OETags.js");
        feba.domManipulator.loadScript("scripts/module/DirectBanking/NDepositCalculator.js");
        feba.domManipulator.loadScript("scripts/module/DirectBanking/Njson.js");
        feba.domManipulator.loadScript("scripts/module/DirectBanking/NSavingsCalculator.js");
        feba.domManipulator.loadScript("scripts/module/DirectBanking/Nutils.js");
        jQuery("link[rel=stylesheet][href*='directBanking.css']").remove();
        feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L' + jQuery("#languageId").val() + '/consumer/theme/modules/directBanking.css" type="text/css" />');
    },
    mufu_onload: function(groupletId) {
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NMFScript";

            script.src = "scripts/module/mufu/NMFScript.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }

        } else {
            feba.domManipulator.loadScript("scripts/module/mufu/NMFScript.js");
        }
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');

            script.id = 'id1' + "NMFSwitchScript";

            script.src = "scripts/module/mufu/NMFSwitchScript.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/mufu/NMFSwitchScript.js");
        }
    },
    servicerequest_onload: function(groupletId) {
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        var typeOfUser = (userTypeValue == 1) ? "consumer" : ((userTypeValue == 2) ? "corporate" : "consumer");
        jQuery("link[rel=stylesheet][href*='serviceRequest.css']").remove();
        feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L' + jQuery("#languageId").val() + '/' + typeOfUser + '/theme/modules/serviceRequest.css" type="text/css" />');
        //feba.domManipulator.loadScript("scripts/module/servicerequest/NfnScript.js");
        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            if (!jQuery(this).siblings().attr('checked')) {
                jQuery(this).siblings().attr('checked', true);
            } else {
                jQuery(this).siblings().attr('checked', false);
            }
            event.preventDefault();
            event.stopImmediatePropagation();
        });
        setTimeout(function() {
            handleRHSAlignment(groupletId);
        }, 1000);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

            var script = document.createElement('script');
            script.id = 'id1' + "NfnScript";
            script.src = "scripts/module/servicerequest/NfnScript.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        } else {
            feba.domManipulator.loadScript("scripts/module/servicerequest/NfnScript.js"); //earlier call added in else
        }

        if (false) { // The below lines are called twice for the SR Approval,Recall and my Request screen.
            /*For aligning the space before buttons in SR module*/
            jQuery(".width79percent_navigationpanel").css("margin-top", "0px");
            /*Surej RWD added for option control collapse issue START */
            jQuery("[id='" + groupletId + "\\:collapsibleMenu']").click(function() {

                if (jQuery("#" + groupletId + "\\:collapsableimg").hasClass("collapseMenu")) {
                    jQuery('#' + groupletId + '\\:collapsableimg').removeClass('collapseMenu');
                    jQuery('#' + groupletId + '\\:collapsableimg').addClass('expandMenu');
                } else {
                    jQuery('#' + groupletId + '\\:collapsableimg').removeClass('expandMenu');
                    jQuery('#' + groupletId + '\\:collapsableimg').addClass('collapseMenu');
                }
                jQuery('#' + groupletId + '\\:collapse').slideToggle();
                return false;
            });
        }
        /*Divya  in service request list screen END*/
        var vpWidth = viewport().width;
        if ((parseInt(vpWidth) <= 640 && parseInt(vpWidth) >= 569)) {
            jQuery('#' + groupletId + '\\:Caption24724934').removeClass('queryitalictextwithspace_srnotes');
            jQuery('#' + groupletId + '\\:Caption24724934').addClass('queryitalictextwithspace_srnotes1');
        } else {
            jQuery('#' + groupletId + '\\:Caption24724934').removeClass('queryitalictextwithspace_srnotes1');
            jQuery('#' + groupletId + '\\:Caption24724934').addClass('queryitalictextwithspace_srnotes');
        }

        jQuery(window).resize(function() {
            vpWidth = viewport().width;
            if ((parseInt(vpWidth) <= 640 && parseInt(vpWidth) >= 569)) {
                jQuery('#' + groupletId + '\\:Caption24724934').removeClass('queryitalictextwithspace_srnotes');
                jQuery('#' + groupletId + '\\:Caption24724934').addClass('queryitalictextwithspace_srnotes1');
            } else {
                jQuery('#' + groupletId + '\\:Caption24724934').removeClass('queryitalictextwithspace_srnotes1');
                jQuery('#' + groupletId + '\\:Caption24724934').addClass('queryitalictextwithspace_srnotes');
            }
        });
        /*Surej RWD added for option control collapse issue END*/
        /*For virtual keypad icon removal*/
        jQuery(".buttonhashed").css("display", "none");
        if (jQuery('.pageLeftContainer').length == 0) {
            jQuery('.container-large').addClass('width100Container');
            //jQuery('.container-xtrasmall').hide();
            if (jQuery('.container-xtrasmall').hasClass("displayBlock")) {
                jQuery('.container-xtrasmall').removeClass('displayBlock');
                jQuery('.container-xtrasmall').addClass('hideElementFromUI');
            } else {
                jQuery('.container-xtrasmall').addClass('hideElementFromUI');
            }
        } else {
            jQuery('.container-large').removeClass('width100Container');
            //jQuery('.container-xtrasmall').show();
            if (jQuery('.container-xtrasmall').hasClass("hideElementFromUI")) {
                jQuery('.container-xtrasmall').removeClass('hideElementFromUI');
                jQuery('.container-xtrasmall').addClass("displayBlock");
            } else {
                jQuery('.container-xtrasmall').addClass("displayBlock");
            }
        }
        // Added to clear the state value if country value is null
        var countryCount = jQuery("label:contains(Country)");
        var countSize = countryCount.size();
        if (countSize > 0) {
            var stateCount = jQuery("label:contains(State)");
            for (var i = 0; i < countSize; i++) {
                var country = countryCount[i].id;
                if (stateCount[i] && stateCount[i].id) {
                    var state = stateCount[i].id;
                    var stelmt = jQuery("[id='" + state + "']").parent().parent().find("input");
                    if (stelmt.length > 0) {
                        var stelmtId = stelmt[0].id;
                        jQuery("[id='" + country + "']").parent().parent().find("select").attr("onchange", "onCountryChangeSR(this.id,'" + stelmtId + "')");
                    }
                }
            }
        }

        /*Added for Contact details Page start*/
        jQuery('.labelCol_text_brdr_number').attr('style', 'background:none !important');
        jQuery('.querytextboxnumber').attr('style', 'background:none !important');
        jQuery('.labelcolnumber_ebux').attr('style', 'padding:1.5px 0 0 0 !important');
        jQuery('.labelcoltxtnumber').attr('style', 'width:39px !important');
        /*Added for Contact details Page end*/

        if (groupletId == "PageConfigurationMaster_RPSTUXW__1") {
            if (jQuery('#FormManagementFG\\.REPORTTITLE').attr('value') == "MCDDataCaptureUX5") {
                if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

                    var script = document.createElement('script');

                    script.id = 'id1' + "collapsableMenu";

                    script.src = "scripts/materializeCollapsableMenu.js?groupletId=" + groupletId + ";";

                    if (document.head) {
                        document.head.appendChild(script);
                    } else {
                        document.getElementsByTagName('head')[0].appendChild(script);
                    }
                } else {
                    feba.domManipulator.loadScript("scripts/materializeCollapsableMenu.js"); //earlier call added in else
                }
                setTimeout(function() {
                    var colapssible = jQuery('.collapsiblePosition');
                    jQuery(colapssible).removeClass();
                    jQuery(colapssible).addClass("collapsiblePosition");
                }, 1);

            }

        }
    },
    pfm_onload: function(groupletId) {
        setTimeout(
            function() {
                if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined") {

                    var script = document.createElement('script');

                    script.id = 'id1' + "NPfmEbux3";

                    script.src = "scripts/module/pfm/NPfmEbux3.js?groupletId=" + groupletId + ";";

                    if (document.head) {
                        document.head.appendChild(script);
                    } else {
                        document.getElementsByTagName('head')[0].appendChild(script);
                    }



                } else {
                    feba.domManipulator.loadScript("scripts/module/pfm/NPfmEbux3.js"); //earlier call added in else
                }
            }, 1000);
    },
    /*transaction_onload : function(groupletId){
    		feba.domManipulator.loadScript("scripts/module/transaction/NPFTotalAmountCalculator.js");
    	},*/
    txnss_onload: function(groupletId) {
        setTimeout(function() {
            handleRHSAlignment(groupletId);
        }, 1000);
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C1']").addClass('border_bottom_clear_imp');
        jQuery("[id='" + groupletId + ":ListingTable_HorizontallyAligned310.Ra1.C2']").addClass('border_bottom_clear_imp');
        //jQuery(".footable-last-column .bluelink").attr('style','float:none !important;padding-'+right+':12px');
        jQuery(".footable-last-column .bluelink").addClass('tableTextBox');
        jQuery(".footable-last-column .bluelink").attr('style', 'padding-' + right + ':13px');

        var vpWidth = viewport().width;

        if (parseInt(vpWidth) <= 639) {
            jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top:11px');
        }

        jQuery(window).resize(function() {

            vpWidth = viewport().width;
            if (parseInt(vpWidth) <= 639) {
                jQuery(".tabNavLinkDelinkTable").attr('style', 'margin-top:11px');
            }
        });

        jQuery(".navAllTab").click(function(e) {
            jQuery(".gradientbgtwolinetxt").attr('style', 'width:100% !important');
            allMenuItemsselected = 'Y';
            invokeNavAllTab();
            return false;
        });
        jQuery('.css-labelcheckbox').die('click');
        jQuery('.css-labelcheckbox').unbind('click');
        jQuery('.css-labelcheckbox').bind('click', function(event) {
            jQuery(this).prev('input[type="checkbox"]').click();
            event.preventDefault();
            event.stopImmediatePropagation();
        });

    },

    transaction_onload: function(groupletId) {
        var userTypeValue = "";
        if (jQuery("#userType") != undefined) {
            userTypeValue = jQuery("#userType").val();
        } else if (jQuery("#usertype") != undefined) {
            userTypeValue = jQuery("#usertype").val();
        }
        var typeOfUser = (userTypeValue == 1) ? "consumer" : ((userTypeValue == 2) ? "corporate" : "consumer");
        jQuery("link[rel=stylesheet][href*='transaction.css']").remove();
        feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L' + jQuery("#languageId").val() + '/' + typeOfUser + '/theme/modules/transaction.css" type="text/css" />');
        /* Added Check for Adaptive UI so that js wont get loaded in Adaptive UI */

        jQuery('.stage3_listingdetails').addClass('listingdetailborders');
        setTimeout(function() {
            handleRHSAlignment(groupletId);
        }, 1000);
        if (groupletId && groupletId != null && groupletId.length > 0 && groupletId != "undefined" && typeof isAdaptiveUI == 'undefined') {

            var script = document.createElement('script');

            script.id = 'id1' + "InitiateCounterpartyTypeCheck";

            script.src = "scripts/module/transaction/InitiateCounterpartyTypeCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }

            var script = document.createElement('script');

            script.id = 'id1' + "InitiateFrequencyTypeCheck";

            script.src = "scripts/module/transaction/materializeInitiateFrequencyTypeCheck.js?groupletId=" + groupletId + ";";

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            script = document.createElement('script');

            script.id = 'id1' + "NPFTotalAmountCalculator"; //Aashish modified for corp

            script.src = "scripts/module/transaction/NPFTotalAmountCalculator.js?groupletId=" + groupletId + ";"

            if (document.head) {
                document.head.appendChild(script);
            } else {
                document.getElementsByTagName('head')[0].appendChild(script);
            }
        }

        feba.domManipulator.loadScript("scripts/module/transaction/NPFTotalAmountCalculator.js");

        var stage3Details = jQuery('.stage3_previewconfirmdetails');
        for (j = 0; j < stage3Details.length; j++) {
            var currElement = stage3Details[j];
            if (jQuery(currElement).children().length == 0) {
                jQuery(currElement).css('border-top', '0px');
            }
        }

        jQuery('.subsection_halfwidth_bluecolor').addClass('subsection_halfwidth_whitecolor');

    },


    tfin_onload: function(groupletId) {
        jQuery("link[rel=stylesheet][href*='tradeFinance.css']").remove();
        feba.domManipulator.getElement('head').append('<link rel="stylesheet" href="L' + jQuery("#languageId").val() + '/corporate/theme/modules/tradeFinance.css" type="text/css" />');
        jQuery("[id='" + groupletId + ":InputForm.Ra1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputForm.Ra1']").addClass('formrow_tfin');
        jQuery("[id='" + groupletId + ":SearchPanel.Ra1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":SearchPanel.Ra1']").addClass('formrow_tfin');

        jQuery("[id='" + groupletId + ":InputFormWithTabsWithListTableContentSixCol.Rq1.C3']").removeClass('querytextleft_leftborder_sixcol');
        jQuery("[id='" + groupletId + ":InputFormWithTabsWithListTableContentSixCol.Rq1.C3']").addClass('querytextleft_leftborder_sixcol_tfin');
        jQuery("[id='" + groupletId + ":InputFormWithTabsWithListTableContentSixCol.Rq1.C5']").removeClass('querytextleft_leftborder_sixcol');
        jQuery("[id='" + groupletId + ":InputFormWithTabsWithListTableContentSixCol.Rq1.C5']").addClass('querytextleft_leftborder_sixcol_tfin');
        jQuery("[id='" + groupletId + ":InputFormWithTabsWithListTableContentSixCol.Rq1.C6']").removeClass('querytextleft_leftborder_sixcol');
        jQuery("[id='" + groupletId + ":InputFormWithTabsWithListTableContentSixCol.Rq1.C6']").addClass('querytextleft_leftborder_sixcol_tfin');
        jQuery('.inputtextarea-span').css('background', 'none');
        jQuery("[id='" + groupletId + ":NavPanel.Ra1.C5']").find("Span").css("margin-top", "5px");
        //TODO -- make below correction in NFebaAjaxOpkect.js and remove from here
        jQuery("[id='" + groupletId + "'").css('height', 'auto');
        jQuery(".dashboardSection").find("[id='" + groupletId + "']").find(".greybg_margin").addClass("greybg_margin_dashtfin");
    },

    eipp_onload: function(groupletId) {
        jQuery("[id='" + groupletId + ":InputForm.Ra1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":InputForm.Ra1']").addClass('formrow_tfin');
        jQuery("[id='" + groupletId + ":SearchPanel.Ra1']").removeClass('formrow');
        jQuery("[id='" + groupletId + ":SearchPanel.Ra1']").addClass('formrow_tfin');
    },
    bonds_onload: function(groupletId) {
        feba.domManipulator.loadScript("scripts/module/bonds/NBondAutoCompleteResponseProcessor.js");
    }
};