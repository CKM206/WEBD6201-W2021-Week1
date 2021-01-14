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

        let clickMeButton = document.getElementById("clickMeButton");

        clickMeButton.addEventListener("click", ()=>
        {
            console.log("Click Me Button Was Clicked!")
        });
    }

    window.addEventListener("load", Start);

    /*
    window.addEventListener("load", ())
        console.log("App Started...");
    */

})();
