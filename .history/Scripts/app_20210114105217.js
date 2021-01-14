/* Custom Scripts Go Here */

// IIFE - Immediatley Invoked Function Expression
//AKA: Anonymous Self-Executing Function
(function()
{
    function Start()
    {
        console.log("App Started...");

        $("#clickMeButton").on("click", function(){
        });
    
    }

    window.addEventListener("load", Start);

    /*
    window.addEventListener("load", ())
        console.log("App Started...");
    */

})();
