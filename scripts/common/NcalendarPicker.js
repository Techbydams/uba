function calendarPicker(link_id, obj_target, obj_target_img, imgId, calType, dt_format, yearRangeJs, path, p_year_scroll, p_time_com, p_mask_type) {

    var dateObj = feba.domManipulator.getElement(obj_target);
    var dateImgObj = feba.domManipulator.getElement(obj_target_img);
    var imgIdObj = imgId;
    var todaysDate = getTodaysDate(dt_format, calType);
    if (calType == null) {
        calType = 'gregorian';
    }

    if (yearRangeJs == null) {
        yearRangeJs = '1920:2099';
    }

    if (typeof(dateObj) != 'undefined') {
        if (p_mask_type == 'Past') {
            dateObj.calendarsPicker({
                calendar: jQuery.calendars.instance(calType),
                showOnFocus: false,
                showTrigger: imgIdObj,
                dateFormat: dt_format,
                minDate: todaysDate,
                yearRange: yearRangeJs
            });
        } else if (p_mask_type == 'Future') {
            dateObj.calendarsPicker({
                calendar: jQuery.calendars.instance(calType),
                showOnFocus: false,
                showTrigger: imgIdObj,
                dateFormat: dt_format,
                maxDate: todaysDate,
                yearRange: yearRangeJs
            });
        } else {
            dateObj.calendarsPicker({
                calendar: jQuery.calendars.instance(calType),
                showOnFocus: false,
                showTrigger: imgIdObj,
                dateFormat: dt_format,
                yearRange: yearRangeJs
            });
        }
    }

}

function MaterializeCalendarPicker(link_id, obj_target, obj_target_img, calType, dt_format, yearRangeJs, path, p_year_scroll, p_time_com, p_mask_type) {

    var dateObj = feba.domManipulator.getElement(obj_target);
    hijiri_user_format = dt_format;
    var dateImgObj = feba.domManipulator.getElement(obj_target_img);
    // var imgIdObj=imgId;
    var todaysDate = getTodaysDate(dt_format, calType);
    if (calType == null) {
        calType = 'gregorian';
    }

    if (yearRangeJs == null) {
        yearRangeJs = '1920:2099';
    }

    var years = yearRangeJs.split(':');
    var minYear = Number(years[0]);

    var maxYear = Number(years[1])

    if (typeof(dateObj) != 'undefined') {
        if (p_mask_type == 'Past') {
            dateMaskType = 'Past';
            dateObj.materializeCalendarsPicker({
                calendar: jQuery.calendars.instance(calType),
                showOnFocus: false,
                dateFormat: dt_format,
                minDate: todaysDate,
                minYearRange: minYear,
                maxYearRange: maxYear,
                dateMaskType: p_mask_type
            });
        } else if (p_mask_type == 'Future') {
            dateMaskType = 'Future';
            dateObj.materializeCalendarsPicker({
                calendar: jQuery.calendars.instance(calType),
                showOnFocus: false,
                dateFormat: dt_format,
                maxDate: todaysDate,
                minYearRange: minYear,
                maxYearRange: maxYear,
                dateMaskType: p_mask_type
            });
        } else {
            dateObj.materializeCalendarsPicker({
                calendar: jQuery.calendars.instance(calType),
                showOnFocus: false,
                dateFormat: dt_format,
                minYearRange: minYear,
                maxYearRange: maxYear
            });
        }
    }

}
//Gives the todays date for supplied date format
function getTodaysDate(dataFormat, calType) {
    //	var todayDate = new Date();
    /*
    	if(dataFormat == 'dd,M,yyyy'){
    		dataFormat = 'dd,mmm,yyyy';
    	}else if(dataFormat == 'dd-M-yyyy'){
    		dataFormat = 'dd-mmm-yyyy';
    	}else if(dataFormat == 'M dd yyyy'){
    		dataFormat = 'mmm dd yyyy';
    	}
    	*/
    //var date  = jQuery.febaCalendar.formatDate(todayDate,dataFormat);
    var date = jQuery.calendars.instance(calType).newDate().formatDate(dataFormat);
    return date;
}