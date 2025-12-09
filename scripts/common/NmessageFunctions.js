/**
 * This method is called from JS functions wherever an alert is to be displayed.<b>
 * It first creates an alert messages hash map and retrieves the required message from the same. 
 * The language id used here is an global variable defined on every page.
 */
function getMessage(key) {
    /* Creates alert messages hash map and places it in alertMap*/
    if (!errCodeMap.size()) {
        createMessageMap();
    }
    /*errCodeMap is a global hash map having error code and variable name mapping*/
    var errCode = errCodeMap.get(key);
    /*alertMap is a global variable having error code and message array mapping*/
    var arr = alertMap.get(errCode);
    if (arr == null) {
        return;
    }
    try {
        if (langID === undefined) {
            langID = "001";
        }
    } catch (exception) {
        langID = "001";
    }
    if (langID == null) {
        langID = "001";
    }
    var retMsg = arr[langID];

    /*If no message is present for required language id then message for 001 is retrieved*/
    if (retMsg == null) {
        retMsg = arr["001"];
    }
    if (feba.domManipulator.isRTL()) {
        retMsg = HTMLEncode(retMsg);
    }

    return retMsg;
}
/**
 * Method to add encoded character for the special character
 * 
 */
function HTMLEncode(val) {
    var i = val.length;
    //Array of the Characters for which the Right to Left encoding is required.
    //aRet = [!,#,&,-,.,(,),[,],{,}];
    aRet = [33, 35, 38, 45, 46, 40, 41, 91, 93, 123, 125];
    var rightToLeftEncodingChar = "&rlm;"
    var ret_val = '';
    /* while (i--) {
       var iC = val[i].charCodeAt();
       if ((iC < 65 || iC > 127 || (iC>90 && iC<97))&& iC!=32) {
         aRet[i] = rightToLeft+val[i]+rightToLeft;
       } else {
         aRet[i] = val[i];
       }
      }*/

    /* Added for IE issue - Object doesnt support property or method startsWith */
    if (!String.prototype.startsWith) {
        String.prototype.startsWith = function(searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        };
    }

    if (val.startsWith("L00")) {
        return val;
    }

    for (var i = 0; i < val.length; i++) {
        var ascii = val[i].charCodeAt(); //val.codePointAt(i);
        if (aRet.indexOf(ascii) > -1) {
            ret_val += rightToLeftEncodingChar + val.charAt(i) + rightToLeftEncodingChar;
        } else {
            ret_val += val.charAt(i);
        }
    }
    //return aRet.join(''); 
    return ret_val;
}