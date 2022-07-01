


function doAccordion () {

    $("#accordion-1").dcAccordion({
        eventType: 'click',
        autoClose: false,
        saveState: false,
        disableLink: false,
        speed: 0,
        showCount: true,
        autoExpand: false,
        cookie: 'dcjq-accordion-1',
        classExpand: 'dcjq-current-parent'
    });
}

$(document).ready(function ($) {

    $(".toc ul").attr('id', 'accordion-1');
    doAccordion();
});
