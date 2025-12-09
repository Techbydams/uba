/**
 * This is a global hash map implementaion variable.
 * All the alert messages are put into this variable.
 */
var alertMap = new Map();

/**
 * This is a global hash map implementaion variable.
 * The error code and variable name mapping is maintained in this hash map.
 */
var errCodeMap = new Map();

/**
 * This method creates arrays of alert messages. Each array contains one message in different languages.
 * These arrays are put into the global hash map 'alertMap'.
 */
function createMessageMap() {
    var Tooltip = {
        "001": "My Profile",
        "002": "My Profile_म_ब",
        "003": "My Profile_سب"
    };
    var NoMovieFound = {
        "001": "FinanZtools movie not found on this page",
        "002": "FinanZtools movie not found on this page_म_ब",
        "003": "FinanZtools movie not found on this page_سب"
    };
    var PinPadNotSup = {
        "001": "Pin Pad not supported by your browser",
        "002": "Pin Pad not supported by your browser_म_ब ",
        "003": "Pin Pad not supported by your browser_سب "
    };
    var MinYearInputAbove = {
        "001": "The minimum year input for this format is above 2000 only. To enter a lower value, please change the preferred date format to one containing yyyy",
        "002": "The minimum year input for this format is above 2000 only. To enter a lower value, please change the preferred date format to one containing yyyy_म_ब ",
        "003": "The minimum year input for this format is above 2000 only. To enter a lower value, please change the preferred date format to one containing yyyy_سب "
    };
    var SaveAndOpen = {
        "001": "Please save and open the file.",
        "002": "Please save and open the file._म_ब",
        "003": "Please save and open the file._سب "
    };
    var LogOutIfOpened = {
        "001": "You would be logged out of the application, if the file is opened directly.",
        "002": "You would be logged out of the application, if the file is opened directly. _म_ब",
        "003": "You would be logged out of the application, if the file is opened directly._سب"
    };
    var ErrSignFailed = {
        "001": "Error - Signature Failed",
        "002": "Error - Signature Failed_म_ब",
        "003": "Error - Signature Failed._سب"
    };
    var UnderScores = {
        "001": "___________________________________________",
        "002": "____________________________________________म_ब",
        "003": "____________________________________________سب"
    };
    var SignFailReason = {
        "001": "Reason:",
        "002": "Reason: _म_ब",
        "003": "Reason: _سب"
    };

    var BrowserNtJavaEn = {
        "001": "Your browser is not Java enabled. Please enable Java for enhanced security.",
        "002": "Your browser is not Java enabled. Please enable Java for enhanced security._म_ब",
        "003": "Your browser is not Java enabled. Please enable Java for enhanced security. _سب"
    };
    var ExceedMaxLen = {
        "001": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '.",
        "002": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '._म_ब",
        "003": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '._سب"
    };
    var OnlyUpperCase = {
        "001": "Value entered  in $fieldLabel$  field should be in upper case.",
        "002": "Value entered  in $fieldLabel$  field should be in upper case._म_ब",
        "003": "Value entered  in $fieldLabel$  field should be in upper case._سب"
    };
    var OnlyLowerCase = {
        "001": "Value entered  in $fieldLabel$  field should be in lower case.",
        "002": "Value entered  in $fieldLabel$  field should be in lower case. _म_ब",
        "003": "Value entered  in $fieldLabel$  field should be in lower case._سب"
    };
    var ShouldBeAlphaNum = {
        "001": "Value entered  in $fieldLabel$  field should be alphanumeric.",
        "002": "Value entered  in $fieldLabel$  field should be alphanumeric._म_ब",
        "003": "Value entered  in $fieldLabel$  field should be alphanumeric._سب"
    };
    var ShouldBeNumeric = {
        "001": "Value entered  in $fieldLabel$  field should be numeric.",
        "002": "Value entered  in $fieldLabel$  field should be numeric._म_ब",
        "003": "Value entered  in $fieldLabel$  field should be numeric._سب"
    };
    var ShouldBeAlphabets = {
        "001": "Value entered  in $fieldLabel$  field should be alphabets.",
        "002": "Value entered  in $fieldLabel$  field should be alphabets._म_ब",
        "003": "Value entered  in $fieldLabel$  field should be alphabets._سب"
    };
    var JS16 = {
        "001": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '._म_ब",
        "002": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '.",
        "003": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed length ' $maxLength$ '._سب"
    };
    var LessThanMinVal = {
        "001": "Value entered  in $fieldLabel$  field is less than the minimum allowed value ' $minValue$ '.",
        "002": "Value entered  in $fieldLabel$  field is less than the minimum allowed value ' $minValue$ '._म_ब",
        "003": "Value entered  in $fieldLabel$  field is less than the minimum allowed value ' $minValue$ '._سب"
    };
    var ExceedsMaxVal = {
        "001": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed value ' $maxValue$ '._म_ब",
        "002": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed value ' $maxValue$ '.",
        "003": "Value entered  in $fieldLabel$  field is exceeding the maximum allowed value ' $maxValue$ '._سب"
    };
    var OnlyOneChar = {
        "001": "The field  in $fieldLabel$  field should contain only a single character. _म_ब",
        "002": "The field  in $fieldLabel$  field should contain only a single character.",
        "003": "The field  in $fieldLabel$  field should contain only a single character._سب"
    };
    var InValidChar_VALID_SET = {
        "001": "Value entered  in $fieldLabel$  field is not a valid character according to the VALID_SET ' $specialChars$ '.",
        "002": "Value entered  in $fieldLabel$  field is not a valid character according to the VALID_SET ' $specialChars$ '._म_ब",
        "003": "Value entered  in $fieldLabel$  field is not a valid character according to the VALID_SET ' $specialChars$ '._سب"
    };
    var InValidChar_INVALID_SET = {
        "001": "Value entered  in $fieldLabel$  field is not a valid character, since INVALID_SET contains ' $specialChars$ '.",
        "002": "Value entered  in $fieldLabel$  field is not a valid character, since INVALID_SET contains ' $specialChars$ '._म_ब",
        "003": "Value entered  in $fieldLabel$  field is not a valid character, since INVALID_SET contains ' $specialChars$ '._سب"
    };
    var InvInterpretMode = {
        "001": "Invalid interpretation mode for   in $fieldLabel$  field .",
        "002": "Invalid interpretation mode for   in $fieldLabel$  field . _म_ब",
        "003": "Invalid interpretation mode for   in $fieldLabel$  field ._سب"
    };
    var AddMesgType = {
        "001": "Please correct the entered value or clear it to proceed.",
        "002": "Please correct the entered value or clear it to proceed._म_ब",
        "003": "Please correct the entered value or clear it to proceed._سب"
    };
    var InvalidAmount = {
        "001": "Amount entered  in $fieldLabel$  field is not valid.",
        "002": "Amount entered  in $fieldLabel$  field is not valid._म_ब",
        "003": "Amount entered  in $fieldLabel$  field is not valid. _سب"
    };
    var ExceedMaxAmt = {
        "001": "Amount entered  in $fieldLabel$  field is exceeding the maximum allowed amount ' $maxValue$ '.",
        "002": "Amount entered  in $fieldLabel$  field is exceeding the maximum allowed amount ' $maxValue$ '._म_ब",
        "003": "Amount entered  in $fieldLabel$  field is exceeding the maximum allowed amount ' $maxValue$ '._سب"
    };
    var InvalidDateFormat = {
        "001": "Date entered in $fieldLabel$ field is not in the preferred format ' $dateFormat$ ' or the Date entered is Invalid.",
        "002": "Date entered in $fieldLabel$ field is not in the preferred format ' $dateFormat$ ' or the Date entered is Invalid._म_ब",
        "003": "Date entered in $fieldLabel$ field is not in the preferred format ' $dateFormat$ ' or the Date entered is Invalid._سب"
    };
    var JS27 = {
        "001": "You are going to digitally sign the following string with your private key:",
        "002": "You are going to digitally sign the following string with your private key:_म_ब",
        " 003": "You are going to digitally sign the following string with your private key:_سب"
    };
    var InvalidHrsVal = {
        "001": "Invalid hours value: '",
        "002": "Invalid hours value: _म_ब",
        "003": "Invalid hours value:_سب'"
    };
    var AllowedHrsRng = {
        "001": "'.\nAllowed range is 00-23.",
        "002": "'.\nAllowed range is 00-23._म_ब",
        "003": "'.\nAllowed range is 00-23._سب"
    };
    var InvalidMinutesVal = {
        "001": "Invalid minutes value: '",
        "002": "Invalid minutes value: _म_ब",
        "003": "Invalid minutes value: _سب'"
    };
    var AllowedMinutesRng = {
        "001": "'.\nAllowed range is 00-59.",
        "002": "'.\nAllowed range is 00-59. _म_ब",
        "003": "'.\nAllowed range is 00-59._سب"
    };
    var InvalidSecondsVal = {
        "001": "Invalid seconds value: '",
        "002": "Invalid seconds value: _म_ब",
        "003": "Invalid seconds value: _سب'"
    };
    var OnlyUnsignIntAllowed = {
        "001": "'.\nAllowed values are unsigned integers.",
        "002": "'.\nAllowed values are unsigned integers._म_ब",
        "003": "'.\nAllowed values are unsigned integers. _سب"
    };
    var ErrCallingCalendar = {
        "001": "Error calling the calendar: no target control specified",
        "002": "Error calling the calendar: no target control specified_म_ब",
        "003": "Error calling the calendar: no target control specified_سب"
    };
    var ErrCallCalInvalidTar = {
        "001": "Error calling the calendar: parameter specified is not valid target control",
        "002": "Error calling the calendar: parameter specified is not valid target control_म_ब",
        "003": "Error calling the calendar: parameter specified is not valid target control_سب"
    };
    var SignWithPrivateKey = {
        "001": "You are going to digitally sign the following string with your private key:",
        "002": "You are going to digitally sign the following string with your private key: _म_ब",
        "003": "You are going to digitally sign the following string with your private key: _سب"
    };
    var BrowserNotSupp = {
        "001": "Unrecognized browser. Currently this script\nsupports IE 4.0+ and Netscape4.0+ only",
        "002": "Unrecognized browser. Currently this script\nsupports IE 4.0+ and Netscape4.0+ only, _म_ब",
        "003": "Unrecognized browser. Currently this script\nsupports IE 4.0+ and Netscape4.0+ only_سب"
    };
    var UnRecognisedBrwser = {
        "001": "Unrecognized browser.",
        "002": "Unrecognized browser. _म_ब",
        "003": "Unrecognized browser. _سب"
    };
    var FormNotSigned = {
        "001": "The form could not be signed now as the signature operation failed.",
        "002": "The form could not be signed now as the signature operation failed. _म_ब",
        "003": "The form could not be signed now as the signature operation failed. _سب"
    };
    var TryLaterRepToAdm = {
        "001": "Please try later and if problem persists you may like to report following error to administrator.",
        "002": "Please try later and if problem persists you may like to report following error to administrator. _म_ब",
        "003": "Please try later and if problem persists you may like to report following error to administrator. _سب"
    };
    var SigningAborted = {
        "001": "Signing operation aborted by user or no valid user certificate.",
        "002": "Signing operation aborted by user or no valid user certificate. _म_ब",
        "003": "Signing operation aborted by user or no valid user certificate. _سب"
    };
    var CapicomNotInst = {
        "001": "Signature operation failed. The required Signing component (capicom.dll) is not installed on your machine.",
        "002": "Signature operation failed. The required Signing component (capicom.dll) is not installed on your machine._म_ब",
        "003": "Signature operation failed. The required Signing component (capicom.dll) is not installed on your machine. _سب"
    };
    var ContactAdmin = {
        "001": "Please contact administrator for further help.",
        "002": "Please contact administrator for further help._म_ब",
        "003": "Please contact administrator for further help._سب"
    };
    var CapicomNotRegd = {
        "001": "capicom.dll not available/registered on local machine",
        "002": "capicom.dll not available/registered on local machine_म_ब",
        "003": "capicom.dll not available/registered on local machine_سب"
    };
    var ExpandOrCollapse = {
        "001": "Expand or Collapse",
        "002": "Expand or Collapse_म_ब",
        "003": "Expand or Collapse_سب"
    };
    var Expand = {
        "001": "Expand",
        "002": "Expand_म_ब",
        "003": "Expand_سب"
    };
    var ExpandCollapse = {
        "001": "Click to Expand/Collapse",
        "002": "Click to Expand/Collapse_म_ब",
        "003": "Click to Expand/Collapse_سب"
    };
    var Collapse = {
        "001": "Collapse",
        "002": "Collapse_म_ब",
        "003": "Collapse_سب"
    };
    var ConfirmVerification = {
        "001": "Confirm Verification",
        "002": "Confirm Verification_म_ब",
        "003": "Confirm Verification_سب"
    };
    var DashRealign = {
        "001": "Please wait while we realign dashboard to best fit in page",
        "002": "Please wait while we realign dashboard to best fit in page_म_ब",
        "003": "Please wait while we realign dashboard to best fit in page_سب"
    };
    var SessionTimeoutMsg = {
        "001": "Your session will timeout in ",
        "002": "Your session will timeout in_म_ब ",
        "003": "Your session will timeout in_سب "
    };
    var SessionExpiredMsg = {
        "001": "Your session has expired.",
        "002": "Your session has expired. _म_ब",
        "003": "Your session has expired. _سب"
    };
    var ReloginMsg = {
        "001": "You have to re-login to continue working.",
        "002": "You have to re-login to continue working. _म_ब",
        "003": "You have to re-login to continue working. _سب"
    };
    var SessionExpiringMsg = {
        "001": "Your session will expire in ",
        "002": "Your session will expire in _म_ब",
        "003": "Your session will expire in _سب"
    };
    var Seconds = {
        "001": " seconds.",
        "002": " seconds. _म_ब",
        "003": " seconds."
    };
    //Modified by Parvathy for UBA
    var ContinueSessionMsg = {
        "001": "If you want to continue, please click 'Continue Session' button, if not click 'Close' button to close this alert.",
        "002": "If you want to continue, please click 'Continue Session' button, if not click 'Close' button to close this alert. _म_ब",
        "003": "If you want to continue, please click 'Continue Session' button, if not click 'Close' button to close this alert. _سب"
    };
    var SessionAlert = {
        "001": "Session Alert",
        "002": "Session Alert_म_ब",
        "003": "Session Alert_سب"
    };
    var GoToLoginPage = {
        "001": "Go to Login Page.",
        "002": "Go to Login Page._म_ब",
        "003": "Go to Login Page._سب"
    };

    var timeout = {
        "001": "Error Loading Widget ",
        "002": "Error Loading Widget _म_ब",
        "003": "Error Loading Widget _سب"
    };

    var error = {
        "001": "Error Loading Widget ",
        "002": "Error Loading Widget _म_ब",
        "003": "Error Loading Widget_سب "
    };

    var abort = {
        "001": "Error Loading Widget ",
        "002": "Error Loading Widget_म_ब",
        "003": "Error Loading Widget_سب "
    };

    var parsererror = {
        "001": "Error Loading Widget ",
        "002": "Error Loading Widget _म_ब",
        "003": "Error Loading Widget _سب"
    };


    var fatal = {
        "001": "Error Loading Widget ",
        "002": "Error Loading Widget _म_ब",
        "003": "Error Loading Widget _سب"
    };
    var LastWidget = {
        "001": "You are removing the last widget from this page; Do you want to continue?",
        "002": "You are removing the last widget from this page; Do you want to continue?_म_ब",
        "003": "You are removing the last widget from this page; Do you want to continue? _سب"
    };
    var NoWidgets = {
        "001": "You currently have no Widgets added. Add more using the Personalize Dashboard.",
        "002": "You currently have no Widgets added. Add more using the Personalize Dashboard. _म_ब",
        "003": "You currently have no Widgets added. Add more using the Personalize Dashboard. _سب"
    };
    var NoConfiguredWidgets = {
        "001": "You currently have no Widgets.",
        "002": "You currently have no Widgets. _म_ब",
        "003": "You currently have no Widgets. _سب"
    };
    var NoWidgetsTitle = {
        "001": "You have 1 Error Message",
        "002": "You have 1 Error Message_म_ब",
        "003": "You have 1 Error Message_سب"
    };
    var NoWidgetsAlt = {
        "001": "You have 1 Error Message",
        "002": "You have 1 Error Message_म_ब",
        "003": "You have 1 Error Message_سب"
    };
    var NoWidgetsImageSrc = {
        "001": "L001/consumer/images/error_material.png",
        "002": "L002/consumer/images/error_material.png",
        "003": "L003/consumer/images/error_material.png"
    };
    var NoWidgetsInformationImageSrc = {
        "001": "L001/consumer/images/info_material.png",
        "002": "L002/consumer/images/info_material.png",
        "003": "L003/consumer/images/info_material.png"
    };
    var Select = {
        "001": "Select",
        "002": "Select_म_ब",
        "003": "Select_سب"
    };
    var TitleForMinimize = {
        "001": "Minimize",
        "002": "Minimize_म_ब",
        "003": "Minimize_سب"
    };
    var AltForMinimize = {
        "001": "Click to Minimize Widget",
        "002": "Click to Minimize Widget_म_ब",
        "003": "Click to Minimize Widget_سب"
    };
    var TitleForMaximize = {
        "001": "Maximize",
        "002": "Maximize_म_ब",
        "003": "Maximize_سب"
    };
    var AltForMaximize = {
        "001": "Click to Maximize Widget",
        "002": "Click to Maximize Widget_म_ब",
        "003": "Click to Maximize Widget_سب"
    };
    var TitleForClose = {
        "001": "Close",
        "002": "Close_म_ब",
        "003": "Close_سب"
    };
    var AltForClose = {
        "001": "Click to Close widget",
        "002": "Click to Close widget_म_ब",
        "003": "Click to Close widget_سب"
    };
    var TitleForRefresh = {
        "001": "Refresh",
        "002": "Refresh_म_ब",
        "003": "Refresh_سب"
    };
    var AltForRefresh = {
        "001": "Click to Refresh widget",
        "002": "Click to Refresh widget_म_ब",
        "003": "Click to Refresh widget_سب"
    };
    var Refresh = {
        "001": "Refresh Widget",
        "002": "Refresh Widget_म_ब",
        "003": "Refresh Widget_سب"
    };
    var ErrorLoadingWidget = {
        "001": "Error Loading Widget",
        "002": "Error Loading Widget_म_ब",
        "003": "Error Loading Widget_سب"
    };
    var Close = {
        "001": "Close",
        "002": "Close_म_ब",
        "003": "Close_سب"
    };
    var comboBoxNoItemFoundMsg = {
        "001": " did not match any item!",
        "002": " did not match any item! _म_ब",
        "003": " did not match any item! _سب"
    };
    var comboBoxShowAllButton = {
        "001": "Show All Items",
        "002": "Show All Items_म_ब",
        "003": "Show All Items_سب"
    };

    var CacheInvalidationSuccess = {
        "001": "Cache Invalidation Successful on HOST",
        "002": "Cache Invalidation Successful on HOST_म_ब",
        "003": "Cache Invalidation Successful on HOST_سب"
    };
    var ErrorMessageTitle = {
        "001": "You have Error Message",
        "002": "You have Error Message_म_ब",
        "003": "You have Error Message_سب"
    };
    var OneInformtnMessageTitle = {
        "001": "You have  1 Information Message",
        "002": "You have  1 Information Message_म_ब",
        "003": "You have  1 Information Message_سب"
    };
    var CacheInvalidationUnSuccess = {
        "001": "Cache Invalidation Unsuccessful",
        "002": "Cache Invalidation Unsuccessful_म_ब",
        "003": "Cache Invalidation Unsuccessful_سب"
    };
    var Host = {
        "001": "HOST ",
        "002": "HOST_म_ब",
        "003": "HOST _سب"
    };
    var ForPort = {
        "001": " for port number ",
        "002": " for port number_म_ब",
        "003": " for port number_سب "
    };
    var All = {
        "001": "All",
        "002": "All_म_ब",
        "003": "All_سب"
    };
    var ScrollUp = {
        "001": "Scroll Up",
        "002": "Scroll Up_म_ब",
        "003": "Scroll Up_سب"
    };
    var ExpandWidgetBar = {
        "001": "Expand Widget Bar",
        "002": "Expand Widget Bar_म_ब",
        "003": "Expand Widget Bar_سب"
    };
    var CollapseWidgetBar = {
        "001": "Collapse Widget Bar",
        "002": "Collapse Widget Bar_म_ब",
        "003": "Collapse Widget Bar_سب"
    };
    var ScrollDown = {
        "001": "Scroll Down",
        "002": "Scroll Down_म_ब",
        "003": "Scroll Down_سب"
    };

    var EventsDesc = {
        "001": "Events",
        "002": "Events_म_ब",
        "003": "Events_سب"
    };
    var PaginationGo = {
        "001": "Go",
        "002": "Go_म_ब",
        "003": "Go_سب"
    };
    var Page = {
        "001": "Page",
        "002": "Page_म_ब",
        "003": "Page_سب"
    };
    var CalPaginationNoMorePages = {
        "001": "Requested page number does not exist",
        "002": "Requested page number does not exist_म_ब",
        "003": "Requested page number does not exist_سب"
    };
    var CalPaginationInvalidPageNo = {
        "001": "Requested page number does not exist",
        "002": "Requested page number does not exist_म_ब",
        "003": "Requested page number does not exist_سب"
    };

    var CalPreviousMonth = {
        "001": "Previous Month",
        "002": "Previous Month_म_ब",
        "003": "Previous Month_سب"
    };
    var CalResettotoday = {
        "001": "Reset to today",
        "002": "Reset to today_म_ब",
        "003": "Reset to today_سب"
    };
    var CalSelectYear = {
        "001": "Select Year",
        "002": "Select Year_म_ब",
        "003": "Select Year_سب"
    };
    var CalSelectMonth = {
        "001": "Select Month",
        "002": "Select Month_म_ब",
        "003": "Select Month"
    };
    var CalNextMonth = {
        "001": "Next Month",
        "002": "Next Month_म_ब",
        "003": "Next Month"
    };
    var CalViewallscheduledtransactions = {
        "001": "View all scheduled transactions",
        "002": "View all scheduled transactions_म_ब",
        "003": "View all scheduled transactions_سب"
    };
    var CalViewalltransactions = {
        "001": "View all  transactions",
        "002": "View all  transactions_म_ब",
        "003": "View all  transactions_سب"
    };
    var CalViewdetails = {
        "001": "View details",
        "002": "View details_म_ब",
        "003": "View details_سب"
    };
    var CalPrevious = {
        "001": "Previous",
        "002": "Previous_म_ब",
        "003": "Previous_سب"
    };
    var CalNext = {
        "001": "Next",
        "002": "Next_म_ब",
        "003": "Next_سب"
    };
    var CalGo = {
        "001": "Go",
        "002": "Go_म_ब",
        "003": "Go_سب"
    };
    var CalClicktoviewdetails = {
        "001": "Click to view details",
        "002": "Click to view details_म_ब",
        "003": "Click to view details_سب"
    };
    var CalDeleteTransaction = {
        "001": "Drag and drop transaction to delete",
        "002": "Drag and drop transaction to delete_म_ब",
        "003": "Drag and drop transaction to delete_سب"
    };
    /* My Payment Overlay*/
    var ZeroPastTransacation = {
        "001": "There are no transactions available for this day.",
        "002": "There are no transactions available for this day. _म_ब",
        "003": "There are no transactions available for this day. _سب"
    };
    var ZeroFutureTransacation = {
        "001": "There are no transactions scheduled for this day.",
        "002": "There are no transactions scheduled for this day. _म_ब",
        "003": "There are no transactions scheduled for this day. _سب"
    };
    var Today = {
        "001": "Today",
        "002": "Today_म_ब",
        "003": "Today_سب"
    };
    var Selected = {
        "001": "Selected",
        "002": "Selected_म_ब",
        "003": "Selected_سب"
    };
    var MyPaymentNoOfTransactions = {
        "001": "There are $txncount$ $txntype$ transaction(s).",
        "002": "There are $txncount$ $txntype$ transaction(s). _म_ब",
        "003": "There are $txncount$ $txntype$ transaction(s). _سب"
    };
    //var MyPaymentNoOfScheduledTransaction = {"001":"There are $txncount$ $txntype$ transaction(s).","002":"There are $txncount$ $txntype$ transaction(s). _म_ब","003":"There are $txncount$ $txntype$ transaction(s). _سب"};

    var MyPaymentSubHeadingLevel2 = {
        "001": "View Scheduled and Past Transactions",
        "002": "View Scheduled and Past Transactions_म_ब",
        "003": "View Scheduled and Past Transactions_سب"
    };
    /*Make Transfer Overylay*/
    var MakeTransferSubHeadingLevel2 = {
        "001": "Move money between your own accounts",
        "002": "Move money between your own accounts_म_ब",
        "003": "Move money between your own accounts_سب"
    };
    var QuickPaySubHeadingLevel1 = {
        "001": "To your Payees",
        "002": "To your Payees_म_ब",
        "003": "To your Payees_سب"
    };
    var QuickRechargeSubHeadingLevel1 = {
        "001": "To Recharge Mobile",
        "002": "To Recharge Mobile_म_ब",
        "003": "To Recharge Mobile_سب"
    };
    var QuickPaySubHeadingLevel2 = {
        "001": "Make quick payments to your payees with ease and convenience",
        "002": "Make quick payments to your payees with ease and convenience_म_ब",
        "003": "Make quick payments to your payees with ease and convenience_سب"
    };

    var QuickPayConfirSubHeadingLevel1 = {
        "001": "Select approver for this transaction and confirm the payment",
        "002": "Select approver for this transaction and confirm the payment_म_ब",
        "003": "Select approver for this transaction and confirm the payment_سب"
    };
    var QuickPaySubHeadingLevel3 = {
        "001": "* Indicates Mandatory Fields",
        "002": "* Indicates Mandatory Fields_म_ब",
        "003": "* Indicates Mandatory Fields_سب"
    };



    var timeHours = {
        "001": "hrs",
        "002": "hrs_म_ब",
        "003": "hrs_سب"
    };
    var timeMinutes = {
        "001": "mins",
        "002": "mins_म_ब",
        "003": "mins_سب"
    };
    var toggleSlideError = {
        "001": "Toggle Message",
        "002": "Toggle Message_म_ब",
        "003": "Toggle Message_سب"
    };
    var closeSlideError = {
        "001": "Close Message",
        "002": "Close Message_म_ब",
        "003": "Close Message_سب"
    };
    var confirmPinGroupletTitle = {
        "001": "Confirm Widget to Dashboard",
        "002": "Confirm Widget to Dashboard_म_ब",
        "003": "Confirm Widget to Dashboard_سب"
    };
    var confirmPinGrouplet = {
        "001": "Widget '$GROUPLET_TITLE$' will be pinned to Dashboard. Do you want to continue?",
        "002": "Widget '$GROUPLET_TITLE$' will be pinned to Dashboard. Do you want to continue? _म_ब",
        "003": "Widget '$GROUPLET_TITLE$' will be pinned to Dashboard. Do you want to continue? _سب"
    };
    var masterPageTitleVal = {
        "001": "Internet Banking-Nigeria: $MASTER_GROUPET_TITLE_VAL$",
        "002": "Internet Banking-Nigeria_म_ब: $MASTER_GROUPET_TITLE_VAL$",
        "003": "Internet Banking-Nigeria_سب: $MASTER_GROUPET_TITLE_VAL$"
    };

    /* Added to handle RTL in rich text editor START*/
    var bold = {
        "001": "Bold",
        "002": "Bold_म_ब",
        "003": "Bold_سب"
    };
    var italic = {
        "001": "Italic",
        "002": "Italic_म_ब",
        "003": "Italic_سب"
    };
    var underline = {
        "001": "Underline",
        "002": "Underline_म_ब",
        "003": "Underline_سب"
    };
    var strikethrough = {
        "001": "Strikethrough",
        "002": "Strikethrough_म_ब",
        "003": "Strikethrough_سب"
    };
    var subscript = {
        "001": "Subscript",
        "002": "Subscript_म_ब",
        "003": "Subscript_سب"
    };
    var superscript = {
        "001": "Superscript",
        "002": "Superscript_म_ब",
        "003": "Superscript_سب"
    };
    var font = {
        "001": "Font",
        "002": "Font_म_ब",
        "003": "Font_سب"
    };
    var size = {
        "001": "Size",
        "002": "Size_म_ब",
        "003": "Size_سب"
    };
    var style = {
        "001": "Style",
        "002": "Style_म_ब",
        "003": "Style_سب"
    };
    var color = {
        "001": "Font Color",
        "002": "Font Color_म_ब",
        "003": "Font Color_سب"
    };
    var highlight = {
        "001": "Text Highlight Color",
        "002": "Text Highlight Color_म_ब",
        "003": "Text Highlight Color_سب"
    };
    var removeformat = {
        "001": "Remove Formatting",
        "002": "Remove Formatting_म_ब",
        "003": "Remove Formatting_سب"
    };
    var bullets = {
        "001": "Bullets",
        "002": "Bullets_म_ब",
        "003": "Bullets_سب"
    };
    var numbering = {
        "001": "Numbering",
        "002": "Numbering_म_ब",
        "003": "Numbering_سب"
    };
    var outdent = {
        "001": "Outdent",
        "002": "Outdent_म_ब",
        "003": "Outdent_سب"
    };
    var indent = {
        "001": "Indent",
        "002": "Indent_म_ब",
        "003": "Indent_سب"
    };
    var alignleft = {
        "001": "Align Text Left",
        "002": "Align Text Left_म_ब",
        "003": "Align Text Left_سب"
    };
    var center = {
        "001": "Center",
        "002": "Center_म_ब",
        "003": "Center_سب"
    };
    var alignright = {
        "001": "Align Text Right",
        "002": "Align Text Right_म_ब",
        "003": "Align Text Right_سب"
    };
    var justify = {
        "001": "Justify",
        "002": "Justify_म_ब",
        "003": "Justify_سب"
    };
    var undo = {
        "001": "Undo",
        "002": "Undo_म_ब",
        "003": "Undo_سب"
    };
    var redo = {
        "001": "Redo",
        "002": "Redo_म_ब",
        "003": "Redo_سب"
    };
    var rule = {
        "001": "Insert Horizontal Rule",
        "002": "Insert Horizontal Rule_म_ब",
        "003": "Insert Horizontal Rule_سب"
    };
    var image = {
        "001": "Insert Image",
        "002": "Insert Image_म_ब",
        "003": "Insert Image_سب"
    };
    var link = {
        "001": "Insert Hyperlink",
        "002": "Insert Hyperlink_म_ब",
        "003": "Insert Hyperlink_سب"
    };
    var unlink = {
        "001": "Remove Hyperlink",
        "002": "Remove Hyperlink_म_ब",
        "003": "Remove Hyperlink_سب"
    };
    var cut = {
        "001": "Cut",
        "002": "Cut_म_ब",
        "003": "Cut_سب"
    };
    var copy = {
        "001": "Copy",
        "002": "Copy_म_ब",
        "003": "Copy_سب"
    };
    var paste = {
        "001": "Paste",
        "002": "Paste_म_ब",
        "003": "Paste_سب"
    };
    var pastetext = {
        "001": "Paste as Text",
        "002": "Paste as Text_म_ब",
        "003": "Paste as Text_سب"
    };
    var print = {
        "001": "Print",
        "002": "Print_म_ब",
        "003": "Print_سب"
    };
    var source = {
        "001": "Show Source",
        "002": "Show Source_म_ब",
        "003": "Show Source_سب"
    };
    var r1 = "You are about to delete the Folder $foldername$.If it contains Messages, they would be destroyed on deleting this Folder. Are you sure you want to continue?";
    var r1_hindi = "You are about to delete the Folder $foldername$.If it contains Messages, they would be destroyed on deleting this Folder. Are you sure you want to continue?_म_ब";
    var r1_arabic = "You are about to delete the Folder $foldername$.If it contains Messages, they would be destroyed on deleting this Folder. Are you sure you want to continue?_سب";
    var DeletePersonalFolder = {
        "001": r1,
        "002": r1_hindi,
        "003": r1_arabic
    };
    var confirmWatermarkText = {
        "001": "Enter the above text here",
        "002": "Enter the above text here_म_ब",
        "003": "Enter the above text here_سب"
    };
    var headerEventMessage = {
        "001": "Your current data will be lost. Do you want to continue?",
        "002": "Your current data will be lost Do you want to continue? _म_ब",
        "003": "Your current data will be lost, do you want to continue?_سب"
    };
    var noAccForCriteriaMessage = {
        "001": "The accounts do not exist for the given criteria.",
        "002": "The accounts do not exist for the given criteria. _म_ब",
        "003": "The accounts do not exist for the given criteria. _سب"
    };
    var NoWidgetsUX5 = {
        "001": "You have removed the last available widget from the dashboard.",
        "002": "You have removed the last available widget from the dashboard. _म_ब",
        "003": "You have removed the last available widget from the dashboard. _سب"
    };
    var blankSubComposeMail = {
        "001": "Subject line is missing, do you still want to send the message?",
        "002": "Subject line is missing, do you still want to send the message_hindi? _म_ब",
        "003": "Subject line is missing, do you still want to send the message? _سب"
    };
    var popupBlockedUserDisabled = {
        "001": "User ID expired. Please disable pop-up blocker to open the page for further details or click on &#39;Forgot Access Code &#63;&#47;Enable User ID&#39; link to continue.",
        "002": "User ID expired. Please disable pop-up blocker to open the page for further details or click on &#39;Forgot Access Code &#63;&#47;Enable User ID&#39; link to continue. _म_ब",
        "003": "User ID expired. Please disable pop-up blocker to open the page for further details or click on &#39;Forgot Access Code &#63;&#47;Enable User ID&#39; link to continue. _سب"
    };
    var menuSearchText = {
        "001": "What are you looking for?",
        "002": "What are you looking for? _म_ब",
        "003": "What are you looking for? _سب"
    };

    var playTicker = {
        "001": "Play Ticker",
        "002": "Play Ticker_म_ब",
        "003": "Play Ticker_سب"
    };
    var pauseTicker = {
        "001": "Pause Ticker",
        "002": "Pause Ticker_म_ब",
        "003": "Pause Ticker_سب"
    };
    var showTicker = {
        "001": "Show Ticker",
        "002": "Show Ticker_म_ब",
        "003": "Show Ticker_سب"
    };
    var hideTicker = {
        "001": "Hide Ticker",
        "002": "Hide Ticker_म_ब",
        "003": "Hide Ticker_سب"
    };
    var MainMenu = {
        "001": "Main Menu",
        "002": "Main Menu_म_ब",
        "003": "Main Menu_سب"
    };
    var MailPrintHeader = {
        "001": "Mail Details",
        "002": "Mail Details_म_ब",
        "003": "Mail Details_سب"
    };
    var MailPrintedOn = {
        "001": "Printed On",
        "002": "Printed On_म_ब",
        "003": "Printed On_سب"
    };
    var MailPrintButton = {
        "001": "Print",
        "002": "Print_म_ब",
        "003": "Print_سب"
    };
    var MailCloseButton = {
        "001": "Close",
        "002": "Close_म_ब",
        "003": "Close_سب"
    };
    var ContinueSessionButton = {
        "001": "Continue Session",
        "002": "Continue Session_म_ब",
        "003": "Continue Session_سب"
    };
    //Added by Parvathy for UBA
    var LogOutSessionButton = {
        "001": "LogOut",
        "002": "LogOut",
        "003": "LogOut"
    };
    var warningAlertMsg = {
        "001": "You have 1 Warning Message",
        "002": "You have 1 Warning Message_म_ब",
        "003": "You have 1 Warning Message_سب"
    };
    var unSavedAlertMsg = {
        "001": "You have unsaved data on this form.",
        "002": "You have unsaved data on this form._म_ब",
        "003": "You have unsaved data on this form._سب"
    };
    var ignoreChangesMsg = {
        "001": "Click to ignore changes.",
        "002": "Click to ignore changes._म_ब",
        "003": "Click to ignore changes._سب"
    };
    var updateChannelContinue = {
        "001": "Continue",
        "002": "Continue_म_ब",
        "003": "Continue_سب"
    };
    var updateChannelCancel = {
        "001": "Cancel",
        "002": "Cancel_म_ब",
        "003": "Cancel_سب"
    };
    var actionToolTip = {
        "001": "Actions",
        "002": "Actions_म_ब",
        "003": "Actions_سب"
    };
    var ClickToViewLess = {
        "001": "Click to view less",
        "002": "Click to view less_म_ब",
        "003": "Click to view less_سب"
    };
    var ClickToViewMore = {
        "001": "Click to view more",
        "002": "Click to view more_म_ब",
        "003": "Click to view more_سب"
    };
    var ResetMessage = {
        "001": "Are you sure you want to Reset?",
        "002": "Are you sure you want to Reset_म_ब?",
        "003": "Are you sure you want to Reset_سب?"
    };

    /* Added to handle RTL in rich text editor END*/
    //alertMap.put("NoMovieFound",NoMovieFound);
    //alertMap.put("PinPadNotSup",PinPadNotSup);
    //alertMap.put("MinYearInputAbove",MinYearInputAbove);
    //alertMap.put("SaveAndOpen",SaveAndOpen);
    //alertMap.put("LogOutIfOpened",LogOutIfOpened);
    //alertMap.put("ErrSignFailed",ErrSignFailed);
    //alertMap.put("UnderScores",UnderScores);
    //alertMap.put("SignFailReason",SignFailReason);
    //alertMap.put("BrowserNtJavaEn",BrowserNtJavaEn);
    //alertMap.put("ExceedMaxLen",ExceedMaxLen);
    //alertMap.put("OnlyUpperCase",OnlyUpperCase);
    //alertMap.put("OnlyLowerCase",OnlyLowerCase);
    //alertMap.put("ShouldBeAlphaNum",ShouldBeAlphaNum);
    //alertMap.put("ShouldBeNumeric",ShouldBeNumeric);
    //alertMap.put("ShouldBeAlphabets",ShouldBeAlphabets);
    //alertMap.put("JS16",JS16);
    //alertMap.put("LessThanMinVal",LessThanMinVal);
    //alertMap.put("ExceedsMaxVal",ExceedsMaxVal);
    //alertMap.put("OnlyOneChar",OnlyOneChar);
    //alertMap.put("InValidChar_VALID_SET",InValidChar_VALID_SET);
    //alertMap.put("InValidChar_INVALID_SET",InValidChar_INVALID_SET);
    //alertMap.put("InvInterpretMode",InvInterpretMode);
    //alertMap.put("AddMesgType",AddMesgType);
    //alertMap.put("InvalidAmount",InvalidAmount);
    //alertMap.put("ExceedMaxAmt",ExceedMaxAmt);
    //alertMap.put("InvalidDateFormat",InvalidDateFormat);
    //alertMap.put("JS27",JS27);
    //alertMap.put("InvalidHrsVal",InvalidHrsVal);
    //alertMap.put("AllowedHrsRng",AllowedHrsRng);
    //alertMap.put("InvalidMinutesVal",InvalidMinutesVal);
    //alertMap.put("AllowedMinutesRng",AllowedMinutesRng);
    //alertMap.put("InvalidSecondsVal",InvalidSecondsVal);
    //alertMap.put("OnlyUnsignIntAllowed",OnlyUnsignIntAllowed);
    //alertMap.put("ErrCallingCalendar",ErrCallingCalendar);
    //alertMap.put("ErrCallCalInvalidTar",ErrCallCalInvalidTar);
    //alertMap.put("SignWithPrivateKey",SignWithPrivateKey);
    //alertMap.put("BrowserNotSupp",BrowserNotSupp);
    //alertMap.put("UnRecognisedBrwser",UnRecognisedBrwser);
    //alertMap.put("FormNotSigned",FormNotSigned);
    //alertMap.put("TryLaterRepToAdm",TryLaterRepToAdm);
    //alertMap.put("SigningAborted",SigningAborted);
    //alertMap.put("CapicomNotInst",CapicomNotInst);
    //alertMap.put("ContactAdmin",ContactAdmin);
    //alertMap.put("CapicomNotRegd",CapicomNotRegd);

    /** 
     * Every error message array is mapped to an error code. These error 
     * codes are not taken from VERT table but kept for future reference.
     */

    alertMap.put(110000, NoMovieFound);
    alertMap.put(110001, PinPadNotSup);
    alertMap.put(110002, MinYearInputAbove);
    alertMap.put(110003, SaveAndOpen);
    alertMap.put(110004, LogOutIfOpened);
    alertMap.put(110005, ErrSignFailed);
    alertMap.put(110006, UnderScores);
    alertMap.put(110007, SignFailReason);
    alertMap.put(110008, BrowserNtJavaEn);
    alertMap.put(110009, ExceedMaxLen);
    alertMap.put(110010, OnlyUpperCase);
    alertMap.put(110011, OnlyLowerCase);
    alertMap.put(110012, ShouldBeAlphaNum);
    alertMap.put(110013, ShouldBeNumeric);
    alertMap.put(110014, ShouldBeAlphabets);
    alertMap.put(110015, LessThanMinVal);
    alertMap.put(110016, ExceedsMaxVal);
    alertMap.put(110017, OnlyOneChar);
    alertMap.put(110018, InValidChar_VALID_SET);
    alertMap.put(110019, InValidChar_INVALID_SET);
    alertMap.put(110020, InvInterpretMode);
    alertMap.put(110021, AddMesgType);
    alertMap.put(110022, InvalidAmount);
    alertMap.put(110023, ExceedMaxAmt);
    alertMap.put(110024, InvalidDateFormat);
    alertMap.put(110025, InvalidHrsVal);
    alertMap.put(110026, AllowedHrsRng);
    alertMap.put(110027, InvalidMinutesVal);
    alertMap.put(110028, AllowedMinutesRng);
    alertMap.put(110029, InvalidSecondsVal);
    alertMap.put(110030, OnlyUnsignIntAllowed);
    alertMap.put(110031, ErrCallingCalendar);
    alertMap.put(110032, ErrCallCalInvalidTar);
    alertMap.put(110033, SignWithPrivateKey);
    alertMap.put(110034, BrowserNotSupp);
    alertMap.put(110035, UnRecognisedBrwser);
    alertMap.put(110036, FormNotSigned);
    alertMap.put(110037, TryLaterRepToAdm);
    alertMap.put(110038, SigningAborted);
    alertMap.put(110039, CapicomNotInst);
    alertMap.put(110040, ContactAdmin);
    alertMap.put(110041, CapicomNotRegd);
    alertMap.put(110042, ExpandOrCollapse);
    alertMap.put(110043, Expand);
    alertMap.put(110044, Collapse);
    alertMap.put(110045, LastWidget);
    alertMap.put(110046, NoWidgets);
    alertMap.put(110047, NoWidgetsTitle);
    alertMap.put(110048, NoWidgetsAlt);
    alertMap.put(110049, NoWidgetsImageSrc);
    alertMap.put(110050, Select);
    alertMap.put(110051, TitleForMinimize);
    alertMap.put(110052, TitleForMaximize);
    alertMap.put(110053, TitleForRefresh);
    alertMap.put(110054, TitleForClose);
    alertMap.put(110055, Refresh);
    alertMap.put(110056, ErrorLoadingWidget);
    /*For alt attribute*/
    alertMap.put(110057, AltForMinimize);
    alertMap.put(110058, AltForMaximize);
    alertMap.put(110059, AltForRefresh);
    alertMap.put(110060, AltForClose);
    alertMap.put(110061, Close);

    alertMap.put(110062, SessionTimeoutMsg);
    alertMap.put(110063, SessionExpiredMsg);
    alertMap.put(110064, ReloginMsg);
    alertMap.put(110065, SessionExpiringMsg);
    alertMap.put(110066, Seconds);
    alertMap.put(110067, ContinueSessionMsg);
    alertMap.put(110068, SessionAlert);
    alertMap.put(110069, GoToLoginPage);
    alertMap.put(110070, comboBoxNoItemFoundMsg);
    alertMap.put(110071, comboBoxShowAllButton);
    alertMap.put(110072, timeout);
    alertMap.put(110073, error);
    alertMap.put(110074, abort);
    alertMap.put(110075, parsererror);
    alertMap.put(110076, fatal);
    alertMap.put(110077, CacheInvalidationSuccess);
    alertMap.put(110078, ErrorMessageTitle);
    alertMap.put(110079, OneInformtnMessageTitle);
    alertMap.put(110080, CacheInvalidationUnSuccess);
    alertMap.put(110081, Host);
    alertMap.put(110082, NoConfiguredWidgets);
    alertMap.put(110083, ForPort);
    alertMap.put(110084, All);
    alertMap.put(110085, ScrollUp);
    alertMap.put(110086, ScrollDown);
    alertMap.put(110087, ExpandWidgetBar);
    alertMap.put(110088, CollapseWidgetBar);

    alertMap.put(110089, timeHours);
    alertMap.put(110090, timeMinutes);

    alertMap.put(110091, DashRealign);
    alertMap.put(110092, EventsDesc);
    alertMap.put(110093, PaginationGo);
    alertMap.put(110094, Page);
    alertMap.put(110095, CalPaginationNoMorePages);
    alertMap.put(110096, CalPaginationInvalidPageNo);
    alertMap.put(110097, CalPreviousMonth);
    alertMap.put(110098, CalResettotoday);
    alertMap.put(110099, CalSelectYear);
    alertMap.put(1100100, CalSelectMonth);
    alertMap.put(1100101, CalPreviousMonth);
    alertMap.put(1100102, CalNextMonth);
    alertMap.put(1100103, CalViewallscheduledtransactions);
    alertMap.put(1100104, CalViewdetails);
    alertMap.put(1100105, CalPrevious);
    alertMap.put(1100106, CalNext);
    alertMap.put(1100107, CalGo);
    alertMap.put(1100108, CalClicktoviewdetails);
    alertMap.put(1100109, toggleSlideError);
    alertMap.put(11001010, closeSlideError);
    alertMap.put(11001011, CalViewalltransactions);
    alertMap.put(11001012, confirmPinGroupletTitle);
    alertMap.put(11001013, confirmPinGrouplet);
    alertMap.put(11001014, masterPageTitleVal);

    /* Added to handle RTL in rich text editor START*/

    alertMap.put(11002001, bold);
    alertMap.put(11002002, italic);
    alertMap.put(11002003, underline);
    alertMap.put(11002004, strikethrough);
    alertMap.put(11002005, subscript);
    alertMap.put(11002006, superscript);
    alertMap.put(11002007, font);
    alertMap.put(11002008, size);
    alertMap.put(11002009, style);
    alertMap.put(11002010, color);
    alertMap.put(11002011, highlight);
    alertMap.put(11002012, removeformat);
    alertMap.put(11002013, bullets);
    alertMap.put(11002014, numbering);
    alertMap.put(11002015, outdent);
    alertMap.put(11002016, indent);
    alertMap.put(11002017, alignleft);
    alertMap.put(11002018, center);
    alertMap.put(11002019, alignright);
    alertMap.put(11002020, justify);
    alertMap.put(11002021, undo);
    alertMap.put(11002022, redo);
    alertMap.put(11002023, rule);
    alertMap.put(11002024, image);
    alertMap.put(11002025, link);
    alertMap.put(11002026, unlink);
    alertMap.put(11002027, cut);
    alertMap.put(11002028, copy);
    alertMap.put(11002029, paste);
    alertMap.put(11002030, pastetext);
    alertMap.put(11002031, print);
    alertMap.put(11002032, source);
    alertMap.put(11002034, DeletePersonalFolder);
    alertMap.put(11002035, confirmWatermarkText);
    alertMap.put(11002036, headerEventMessage);
    alertMap.put(11002037, ConfirmVerification);
    alertMap.put(11002038, CalDeleteTransaction);
    alertMap.put(11002039, noAccForCriteriaMessage);
    alertMap.put(11002040, ExpandCollapse);
    alertMap.put(11002041, MakeTransferSubHeadingLevel2);
    alertMap.put(11002042, QuickPaySubHeadingLevel3);
    alertMap.put(11002043, MyPaymentSubHeadingLevel2);
    alertMap.put(11002044, ZeroPastTransacation);
    alertMap.put(11002045, ZeroFutureTransacation);
    alertMap.put(11002046, Today);
    alertMap.put(11002047, Selected);
    alertMap.put(11002048, Tooltip);
    alertMap.put(11002049, QuickPayConfirSubHeadingLevel1);

    alertMap.put(11002050, NoWidgetsUX5);
    alertMap.put(11002051, QuickPaySubHeadingLevel2);
    alertMap.put(11002052, blankSubComposeMail);
    alertMap.put(11002053, popupBlockedUserDisabled);
    alertMap.put(11002054, menuSearchText);
    alertMap.put(11002053, NoWidgetsInformationImageSrc);
    alertMap.put(11002055, QuickPaySubHeadingLevel1);
    alertMap.put(11002056, QuickRechargeSubHeadingLevel1);

    alertMap.put(11002057, playTicker);
    alertMap.put(11002058, pauseTicker);
    alertMap.put(11002059, showTicker);
    alertMap.put(11002060, hideTicker);
    alertMap.put(11002061, MainMenu);
    alertMap.put(11002062, MailPrintHeader);
    alertMap.put(11002063, MailPrintedOn);
    alertMap.put(11002064, MailPrintButton);
    alertMap.put(11002065, MailCloseButton);
    alertMap.put(11002066, ContinueSessionButton);
    alertMap.put(11002067, warningAlertMsg);
    alertMap.put(11002068, unSavedAlertMsg);
    alertMap.put(11002069, ignoreChangesMsg);
    alertMap.put(11002070, updateChannelContinue);
    alertMap.put(11002071, updateChannelCancel);
    alertMap.put(11002072, actionToolTip);
    alertMap.put(11002073, ClickToViewLess);
    alertMap.put(11002074, ClickToViewMore);
    alertMap.put(11002075, ResetMessage);
    alertMap.put(11002076, MyPaymentNoOfTransactions);
    //Added by Parvathy for UBA session pop up
    alertMap.put(12002066, LogOutSessionButton);
    //alertMap.put(11002077,MyPaymentNoOfScheduledTransaction);

    /* Added to handle RTL in rich text editor END*/
    /**
     * Error code and variable name mapping is done in this hash map.
     */
    errCodeMap.put("Tooltip", 11002048);
    errCodeMap.put("NoWidgetsInformationImageSrc", 11002053);
    errCodeMap.put("DeletePersonalFolder", 11002034);
    errCodeMap.put("headerEventMessage", 11002036);
    errCodeMap.put("NoMovieFound", 110000);
    errCodeMap.put("PinPadNotSup", 110001);
    errCodeMap.put("MinYearInputAbove", 110002);
    errCodeMap.put("SaveAndOpen", 110003);
    errCodeMap.put("LogOutIfOpened", 110004);
    errCodeMap.put("ErrSignFailed", 110005);
    errCodeMap.put("UnderScores", 110006);
    errCodeMap.put("SignFailReason", 110007);
    errCodeMap.put("BrowserNtJavaEn", 110008);
    errCodeMap.put("ExceedMaxLen", 110009);
    errCodeMap.put("OnlyUpperCase", 110010);
    errCodeMap.put("OnlyLowerCase", 110011);
    errCodeMap.put("ShouldBeAlphaNum", 110012);
    errCodeMap.put("ShouldBeNumeric", 110013);
    errCodeMap.put("ShouldBeAlphabets", 110014);
    errCodeMap.put("LessThanMinVal", 110015);
    errCodeMap.put("ExceedsMaxVal", 110016);
    errCodeMap.put("OnlyOneChar", 110017);
    errCodeMap.put("InValidChar_VALID_SET", 110018);
    errCodeMap.put("InValidChar_INVALID_SET", 110019);
    errCodeMap.put("InvInterpretMode", 110020);
    errCodeMap.put("AddMesgType", 110021);
    errCodeMap.put("InvalidAmount", 110022);
    errCodeMap.put("ExceedMaxAmt", 110023);
    errCodeMap.put("InvalidDateFormat", 110024);
    errCodeMap.put("InvalidHrsVal", 110025);
    errCodeMap.put("AllowedHrsRng", 110026);
    errCodeMap.put("InvalidMinutesVal", 110027);
    errCodeMap.put("AllowedMinutesRng", 110028);
    errCodeMap.put("InvalidSecondsVal", 110029);
    errCodeMap.put("OnlyUnsignIntAllowed", 110030);
    errCodeMap.put("ErrCallingCalendar", 110031);
    errCodeMap.put("ErrCallCalInvalidTar", 110032);
    errCodeMap.put("SignWithPrivateKey", 110033);
    errCodeMap.put("BrowserNotSupp", 110034);
    errCodeMap.put("UnRecognisedBrwser", 110035);
    errCodeMap.put("FormNotSigned", 110036);
    errCodeMap.put("TryLaterRepToAdm", 110037);
    errCodeMap.put("SigningAborted", 110038);
    errCodeMap.put("CapicomNotInst", 110039);
    errCodeMap.put("ContactAdmin", 110040);
    errCodeMap.put("CapicomNotRegd", 110041);
    errCodeMap.put("ExpandOrCollapse", 110042);
    errCodeMap.put("Expand", 110043);
    errCodeMap.put("Collapse", 110044);
    errCodeMap.put("LastWidget", 110045);
    errCodeMap.put("NoWidgets", 110046);
    errCodeMap.put("NoWidgetsTitle", 110047);
    errCodeMap.put("NoWidgetsAlt", 110048);
    errCodeMap.put("NoWidgetsImageSrc", 110049);
    errCodeMap.put("Select", 110050);
    errCodeMap.put("TitleForMinimize", 110051);
    errCodeMap.put("TitleForMaximize", 110052);
    errCodeMap.put("TitleForRefresh", 110053);
    errCodeMap.put("TitleForClose", 110054);
    errCodeMap.put("Refresh", 110055);
    errCodeMap.put("ErrorLoadingWidget", 110056);
    errCodeMap.put("AltForMinimize", 110057);
    errCodeMap.put("AltForMaximize", 110058);
    errCodeMap.put("AltForRefresh", 110059);
    errCodeMap.put("AltForClose", 110060);
    errCodeMap.put("Close", 110061);

    errCodeMap.put("SessionTimeoutMsg", 110062);
    errCodeMap.put("SessionExpiredMsg", 110063);
    errCodeMap.put("ReloginMsg", 110064);
    errCodeMap.put("SessionExpiringMsg", 110065);
    errCodeMap.put("Seconds", 110066);
    errCodeMap.put("ContinueSessionMsg", 110067);
    errCodeMap.put("SessionAlert", 110068);
    errCodeMap.put("GoToLoginPage", 110069);
    errCodeMap.put("comboBoxNoItemFoundMsg", 110070);
    errCodeMap.put("comboBoxShowAllButton", 110071);
    errCodeMap.put("timeout", 110072);
    errCodeMap.put("error", 110073);
    errCodeMap.put("abort", 110074);
    errCodeMap.put("parsererror", 110075);
    errCodeMap.put("fatal", 110076);
    errCodeMap.put("CacheInvalidationSuccess", 110077);
    errCodeMap.put("ErrorMessageTitle", 110078);
    errCodeMap.put("OneInformtnMessageTitle", 110079);
    errCodeMap.put("CacheInvalidationUnSuccess", 110080);
    errCodeMap.put("Host", 110081);
    errCodeMap.put("NoConfiguredWidgets", 110082);
    errCodeMap.put("ForPort", 110083);
    errCodeMap.put("All", 110084);
    errCodeMap.put("ScrollUp", 110085);
    errCodeMap.put("ScrollDown", 110086);
    errCodeMap.put("ExpandWidgetBar", 110087);
    errCodeMap.put("CollapseWidgetBar", 110088);

    errCodeMap.put("timeHours", 110089);
    errCodeMap.put("timeMinutes", 110090);

    errCodeMap.put("DashRealign", 110091);
    errCodeMap.put("EventsDesc", 110092);
    errCodeMap.put("PaginationGo", 110093);
    errCodeMap.put("Page", 110094);
    errCodeMap.put("CalPaginationNoMorePages", 110095);
    errCodeMap.put("CalPaginationInvalidPageNo", 110096);
    errCodeMap.put("CalPreviousMonth", 110097);
    errCodeMap.put("CalResettotoday", 110098);
    errCodeMap.put("CalSelectYear", 110099);
    errCodeMap.put("CalSelectMonth", 1100100);
    errCodeMap.put("CalPreviousMonth", 1100101);
    errCodeMap.put("CalNextMonth", 1100102);
    errCodeMap.put("CalViewallscheduledtransactions", 1100103);
    errCodeMap.put("CalViewdetails", 1100104);
    errCodeMap.put("CalPrevious", 1100105);
    errCodeMap.put("CalNext", 1100106);
    errCodeMap.put("CalGo", 1100107);
    errCodeMap.put("CalClicktoviewdetails", 1100108);
    errCodeMap.put("toggleSlideError", 1100109);
    errCodeMap.put("closeSlideError", 11001010);
    errCodeMap.put("CalViewalltransactions", 11001011);
    errCodeMap.put("confirmPinGroupletTitle", 11001012);
    errCodeMap.put("confirmPinGrouplet", 11001013);
    errCodeMap.put("masterPageTitleVal", 11001014);
    /* Added to handle RTL in rich text editor START*/
    errCodeMap.put("bold", 11002001);
    errCodeMap.put("italic", 11002002);
    errCodeMap.put("underline", 11002003);
    errCodeMap.put("strikethrough", 11002004);
    errCodeMap.put("subscript", 11002005);
    errCodeMap.put("superscript", 11002006);
    errCodeMap.put("font", 11002007);
    errCodeMap.put("size", 11002008);
    errCodeMap.put("style", 11002009);
    errCodeMap.put("color", 11002010);
    errCodeMap.put("highlight", 11002011);
    errCodeMap.put("removeformat", 11002012);
    errCodeMap.put("bullets", 11002013);
    errCodeMap.put("numbering", 11002014);
    errCodeMap.put("outdent", 11002015);
    errCodeMap.put("indent", 11002016);
    errCodeMap.put("alignleft", 11002017);
    errCodeMap.put("center", 11002018);
    errCodeMap.put("alignright", 11002019);
    errCodeMap.put("justify", 11002020);
    errCodeMap.put("undo", 11002021);
    errCodeMap.put("redo", 11002022);
    errCodeMap.put("rule", 11002023);
    errCodeMap.put("image", 11002024);
    errCodeMap.put("link", 11002025);
    errCodeMap.put("unlink", 11002026);
    errCodeMap.put("cut", 11002027);
    errCodeMap.put("copy", 11002028);
    errCodeMap.put("paste", 11002029);
    errCodeMap.put("pastetext", 11002030);
    errCodeMap.put("print", 11002031);
    errCodeMap.put("source", 11002032);
    errCodeMap.put("confirmWatermarkText", 11002035);
    errCodeMap.put("ConfirmVerification", 11002037);
    errCodeMap.put("CalDeleteTransaction", 11002038);
    errCodeMap.put("noAccForCriteriaMessage", 11002039);
    errCodeMap.put("ExpandCollapse", 11002040);
    errCodeMap.put("MakeTransferSubHeadingLevel2", 11002041);
    errCodeMap.put("QuickPaySubHeadingLevel3", 11002042);
    errCodeMap.put("MyPaymentSubHeadingLevel2", 11002043);
    errCodeMap.put("ZeroPastTransacation", 11002044);
    errCodeMap.put("ZeroFutureTransacation", 11002045);
    errCodeMap.put("Today", 11002046);
    errCodeMap.put("Selected", 11002047);
    errCodeMap.put("QuickPayConfirSubHeadingLevel1", 11002049);
    errCodeMap.put("NoWidgetsUX5", 11002050);
    errCodeMap.put("QuickPaySubHeadingLevel2", 11002051);
    errCodeMap.put("blankSubComposeMail", 11002052);
    errCodeMap.put("popupBlockedUserDisabled", 11002053);
    errCodeMap.put("menuSearchText", 11002054);
    errCodeMap.put("QuickPaySubHeadingLevel1", 11002055);
    errCodeMap.put("QuickRechargeSubHeadingLevel1", 11002056);

    errCodeMap.put("playTicker", 11002057);
    errCodeMap.put("pauseTicker", 11002058);
    errCodeMap.put("showTicker", 11002059);
    errCodeMap.put("hideTicker", 11002060);
    errCodeMap.put("MainMenu", 11002061);
    errCodeMap.put("MailPrintHeader", 11002062);
    errCodeMap.put("MailPrintedOn", 11002063);
    errCodeMap.put("MailPrintButton", 11002064);
    errCodeMap.put("MailCloseButton", 11002065);
    errCodeMap.put("ContinueSessionButton", 11002066);
    errCodeMap.put("warningAlertMsg", 11002067);
    errCodeMap.put("unSavedAlertMsg", 11002068);
    errCodeMap.put("ignoreChangesMsg", 11002069);
    errCodeMap.put("updateChannelContinue", 11002070);
    errCodeMap.put("updateChannelCancel", 11002071);
    errCodeMap.put("actionToolTip", 11002072);
    errCodeMap.put("ClickToViewLess", 11002073);
    errCodeMap.put("ClickToViewMore", 11002074);
    errCodeMap.put("ResetMessage", 11002075);
    errCodeMap.put("MyPaymentNoOfTransactions", 11002076);
    //Added by Parvathy for UBA session pop up
    errCodeMap.put("LogOutSessionButton", 12002066);
    //errCodeMap.put("MyPaymentNoOfScheduledTransaction",11002077);

    /* Added to handle RTL in rich text editor END*/

}