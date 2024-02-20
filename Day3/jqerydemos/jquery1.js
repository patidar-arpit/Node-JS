/*jquery  is a js library 
it  runs on the top of the js 
it reduces the js code
Two ways to connect with jquey
1. Download it and store locally
2 .cdn - content delivery network  using tag
*/

//when our dom is ready this function will be called 
// $ = jQuery
jQuery(document).ready(function () {

    // to selecting the element after rendering

    $('#mydiv').html("this is my div");
    // line No 15 is eqivalent to document.getElementById("mydiv").innerHTML ="this is my div"

    $('#btn').click()    // if the button with id btn is clicked this event will occurred and we dont have to write onclick() event in html 

    $('#btn').click(function () {
        // on clicking the button this function will be get called

        $('h').css("font-size", "20px")

        // now i want to select all the p tag and i want to apply the bg color to red and color to black
        $('p').css({
            "background-color": "red",
            "color": "white"
        })

        // $('p','h').css()  // selecting the two elements

        // $('p,#div1,.nav-bar')  // selecting the tag , specific elem with id #div1 and class selector

    })

    // How to accept data from the from or text Box

    var x = parseInt($('#num1').val())
    var y = parseInt($("#num2").val())
    
    //For assigning value to the input tag, from jQuery
    $('#result').val(x + y);


})


/* other jquery selectors
   
  $('p:contains("xxxxx")')  // select the p tag which contains the content xxxxxx

*/


