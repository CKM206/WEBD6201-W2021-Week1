/* Custom Scripts Go Here */

// IIFE - Immediatley Invoked Function Expression
//AKA: Anonymous Self-Executing Function
(function()
{
    function Start()
    {
        console.log("App Started...");
        /*
        $("#clickMeButton").on("click", function(){
            console.log("Click Me Button was clicked!");
        });
        */

        // Add a reference to an html element by its id
        let clickMeButton = document.getElementById("clickMeButton");

        // Create an Event listener for the reference
        //-Will look for a click event, will print a log to console on click.
        clickMeButton.addEventListener("click", ()=>
        {
            console.log("Click Me Button Was Clicked!");
        });
    }

    window.addEventListener("load", Start);

    /*
    window.addEventListener("load", ())
        console.log("App Started...");
    */

})();
