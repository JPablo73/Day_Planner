
$(document).ready(function () {
    //Adds current day and time when page is loaded
    currentDay.innerHTML = moment().format('LLLL');

    //save button
    $('.saveBtn').click(function () {

        var toDoHour = $(this).siblings('.description').attr('id');
        var singleToDo = $(this).siblings('.description')[0].value;

        //save to local storage
        localStorage.setItem(toDoHour, singleToDo);
    });

    // loop over time blocks
    $('.row').each(function () {

        var hour = moment().hours();

        var blockHour = parseInt($(this).attr('id'));

        console.log(localStorage.getItem(blockHour));

        var currentTextArea = document.querySelector('.textarea' + blockHour)

        currentTextArea.value = localStorage.getItem(blockHour)


        if (blockHour < hour) {
            $(this).addClass('past');
        }
        else if (blockHour === hour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
});
