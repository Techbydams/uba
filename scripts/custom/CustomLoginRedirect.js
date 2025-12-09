var oldtitle;

function countryRedirect(object) {

    var title = object.title;
    var title = object.title
    var value = object.value;

    if (title == oldtitle)
        return;
    oldtitle = title;
    if (value == "NG") {
        window.location.href = "https://ibank.ubagroup.com/obng/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=" + value;

        //    window.location.href = "http://localhost:8080/EBankingWeb/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=" + value;
    }
    if (value == "CI") {

        window.location.href = "https://ibank.ubagroup.com/cote/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=" + value;
    }
    if (value == "BJ") {
        window.location.href = "https://ibank.ubagroup.com/cote/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=" + value;

        //   window.location.href = "https://ibank.ubagroup.com/cote/AuthenticationController? __START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID= BJ&LANGUAGE_ID=001";
    }
    if (value == "BF") {
        window.location.href = "https://ibank.ubagroup.com/cote/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=BF";
    }
    if (value == "CG") {
        window.location.href = "https://ibank.ubagroup.com/cemac/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=CG";
    }
    if (value == "CM") {
        //window.location.href = "https://ibank.ubagroup.com/cemac/AuthenticationController? __START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID= CM&LANGUAGE_ID=001";
        window.location.href = "https://ibank.ubagroup.com/cemac/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=CM";
    }
    if (value == "TD") {
        window.location.href = "https://ibank.ubagroup.com/cemac/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=TD";
    }
    if (value == "CD") {
        window.location.href = "https://ibank.ubagroup.com/cemac/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=CD";
    }
    if (value == "GA") {
        window.location.href = "https://ibank.ubagroup.com/cemac/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&__FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=GA";
    }
    if (value == "GH") {
        window.location.href = "https://ibank.ubagroup.com/eng/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=GH&LANGUAGE_ID=001";
    }
    if (value == "GN") {
        window.location.href = "https://ibank.ubagroup.com/cote/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=GN";
    }
    if (value == "KE") {
        window.location.href = "https://ibank.ubagroup.com/eng/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=KE&LANGUAGE_ID=001";
    }
    if (value == "LR") {
        window.location.href = "https://ibank.ubagroup.com/eng/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=LR&LANGUAGE_ID=001";
    }
    if (value == "MZ") {
        window.location.href = "https://ibank.ubagroup.com/moz/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=MZ&LANGUAGE_ID=001";
    }
    if (value == "SN") {
        window.location.href = "https://ibank.ubagroup.com/cote/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=SN";
    }
    if (value == "SL") {
        window.location.href = "https://ibank.ubagroup.com/eng/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=SL&LANGUAGE_ID=001";
    }
    if (value == "ML") {
        window.location.href = "							  https://ibank.ubagroup.com/obml/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ML&LANGUAGE_ID=002";
    }
    if (value == "TZ") {
        window.location.href = "https://ibank.ubagroup.com/eng/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=TZ&LANGUAGE_ID=001";
    }
    if (value == "UG") {
        window.location.href = "https://ibank.ubagroup.com/obug/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=UG&LANGUAGE_ID=001";
    }
    if (value == "ZM") {
        window.location.href = "https://ibank.ubagroup.com/eng/AuthenticationController?__START_TRAN_FLAG__=Y&FORMSGROUP_ID__=AuthenticationFG&__EVENT_ID__=LOAD&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=ZM&LANGUAGE_ID=001";
    }

}