/**
 * NFEBACombobox.js
 * 
 * This plugin is built from the demo at http://jqueryui.com/autocomplete/#combobox
 */
(function($, undefined) {
    $.widget("ui.febaCombobox", {

        update: function(type) {

            var inputElement = jQuery(this.element).parent().find('input');
            var dropdownValues = jQuery(inputElement).siblings(".autocomplete-values");
            var textElement = jQuery(this.element).parent().siblings('.autocomplete-dropdown'); //dropdownText.parent().parent().find('.autocomplete-dropdown');
            var iconElement = jQuery(textElement).siblings('.icon-dropdown');

            var selected = dropdownValues.children(":selected");
            var selectedOption = selected || dropdownValues.find("option:first");
            if (typeof selectedOption !== typeof undefined) {
                jQuery(textElement).val(jQuery(selectedOption).text());
                jQuery(textElement).attr("id_", dropdownValues.find("option:first").index());
                dropdownValues.val(jQuery(selectedOption).val()).change();
            }
        },

        disable: function(type) {

            var inputElement = jQuery(this.element).parent().find('input');
            var dropdownValues = jQuery(inputElement).siblings(".autocomplete-values");
            var textElement = jQuery(this.element).parent().siblings('.autocomplete-dropdown'); //dropdownText.parent().parent().find('.autocomplete-dropdown');
            var iconElement = jQuery(textElement).siblings('.icon-dropdown');

            textElement.addClass('disablePointerEvents');
            iconElement.addClass('disablePointerEvents');
        },
        /*This method was used for converting EBUX3 combobox back to EBUX2 dropdowns when screen navigation happens from EBUX3 to EBUX2 */
        destroy: function() {
            var textElement = jQuery(this.element).parent().siblings(".autocomplete-dropdown");
            var dataActivate = jQuery(textElement).data("activates");
            jQuery(textElement).removeClass("initialized");
            jQuery('.' + dataActivate).remove();
            jQuery(textElement).data().sc.remove();
        },

        enable: function(type) {

            var inputElement = jQuery(this.element).parent().find('input');
            var dropdownValues = jQuery(inputElement).siblings(".autocomplete-values");
            var textElement = jQuery(this.element).parent().siblings('.autocomplete-dropdown'); //dropdownText.parent().parent().find('.autocomplete-dropdown');
            var iconElement = jQuery(textElement).siblings('.icon-dropdown');

            if (textElement.hasClass('disablePointerEvents')) {
                textElement.removeClass('disablePointerEvents');
            }
            if (iconElement.hasClass('disablePointerEvents')) {
                iconElement.removeClass('disablePointerEvents');
            }
        }
    });
})(jQuery);