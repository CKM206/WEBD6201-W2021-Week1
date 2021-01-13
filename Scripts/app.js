/* Custom Scripts Go Here */

// IIFE - Immediatley Invoked Function Expression
//AKA: Anonymous Self-Executing Function
(function()
{
    function Start()
    {
        console.log("App Started...");

        for (let index = 0; index < 5; index++) {
            console.log(index);
            
        }
    
    }

    window.addEventListener("load", Start);

    /*
    window.addEventListener("load", ())
        console.log("App Started...");
    */

})();
