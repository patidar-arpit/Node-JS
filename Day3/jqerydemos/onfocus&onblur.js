$(document).ready(() => {

    //NOTE
    //Arrow function wont work if we use THIS keyword in the function -->  () => {}
    //We need to use the anonymous functions   -->   function(){ }

    //focus will be called whenever the input tag of text type will be clicked
    $(':input[type="text"]').focus(function () {
        //this keyword to refer to the current element invoking the function
        $(this).css("background-color", "red");
    })
    //when the input text type is changed, it will invoke the blur method
    $(':input[type="text"]').blur(function () {
        $(this).css("background-color", "green");
    })

    //Hover accepts two functions, first is to mouse in and second is to mouse out
    $('p').hover(
        function () {
            $(this).css({
                "background-color": "red",
                "text-align": "right"
            }
            )
        },
        function () {
            $(this).css({
                "background-color": "green",
                "text-align": "left"
            }
            )
        });

    $('p').hover(
        function () {
            $(this).addClass("newClassName");
            $(this).removeClass("oldClassName");
        },
        function () {
            $(this).css({
                "background-color": "green",
                "text-align": "left"
            })
        });



})