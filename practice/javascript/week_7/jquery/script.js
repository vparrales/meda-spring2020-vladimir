// jQuery(document).ready( function () {} );

//jQuery selector line 4 and line 5 are the same thing, line 5 is a short hand for jQuery();
// jQuery();
// $();

jQuery(document).ready( function () {

    $("body").empty();

    $("body").append("<h1>Welcome!</h1><p>Topic one</p><ul><li>item 1</li><li>item 2</li><li>item 3</li></ul>");

    jQuery("h1").css({
        "border": "dashed black 10px"
        });
    $("ul").css({
        "background-color": "lightgrey"
    });

    // $("li:nth-child(2)").remove();

    $("li")[1].remove();

    //jQuery .next(), .prev();
    //jQuery .parent(), .child()

    $("body").children("ul").prev().prev().next().remove();
   
});

    // $("html").remove();

    // $("#light-off").click(function () {
    //     $("body").css ( {"background-color": "black"});
    //     $("body").css("color", "white");
    //     });

    //     $("#light-on").click(function () {
    //         var body = $("body");

    //     body.css({"background-color": "white"});
    //     body.css("color", "black");
    //         });

    //         //new javaScript function, takes two arguments, first is callback, second is how long in milliseconds.
    //     setTimeout(function () {
            
    //         // Add an element to the webpage. .append()
    //     $("ol").append("<li>This was added after the fact.</li>");
        
    //     // Add an element to the end of the child list, .append()
    //     $("body").append("<h1>New section</h1><p>Welcome to this new section</p>")
    //     //Adds an element to the start of the child list, .prepend()
    //     $("body").prepend("<h1 style='color: red'>Alert! new viruse!</h1>");

    //     //Adds an html as a child, replacing existing children, .html()

    //     $("ol").html("<li>All tasks done!</li>");
       
    //     }, 5000);
    //     // Removes the element you have seleted.
    //     $("#recycleButton").click(function () {
    //         $('body').remove();
        
    //     //Removes all children of the element you have selected.
    //     $("#recycleButton").click(function () {
    //         $("body").empty();
    //     });
    // });




    // console.log("hellothere");

    // jQuery("h1").css(
    //     {
    //         "font-size": "100px",
    //         "color": "pink"
    //     }
    // );

    // jQuery("ul").css(
    //     {
    //         "border": "solid green 10px"
    //     }
    // );

    // // jQuery("button").click( function () {
    // //     console.log("hello");

    // //     jQuery("body").css({
    // //         "background-color": "black"
    // //     });
    // //     jQuery("h1").css({
    // //         "margin-top": "500px"
    // //     });
    // // });

    // $("body").append("<h4>This was created in jQuery.</h4>");