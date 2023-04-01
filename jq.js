$(
    function(){
/**ide írunk mindent amit eddig az initbe írtunk */
        const obj = {
            nev: "Jakab"
        }
        const articleELEM = $("article")
        articleELEM.append("<h1>JQueryvel írtam bele</h1>")
        /**jQueryvel nem kell ciklus */

        articleELEM.on("click", function()
        {
            console.log($(event.target))
        })

    }
)