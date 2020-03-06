// jQuery(document).ready( function () {} );

jQuery();
$();

jQuery(document).ready( function () {

    console.log("hello");

    jQuery("h1").css(
        {
            "font-size": "100px",
            "color": "pink"
        }
    );

    jQuery("ul").css(
        {
            "border": "solid green 10px"
        }
    );

    jQuery("button").click( function () {
        console.log("hello");

        jQuery("body").css({
            "background-color": "black"
        });
        jQuery("h1").css({
            "margin-top": "500px"
        });
    });

} );