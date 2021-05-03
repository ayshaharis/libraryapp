const express =require("express");
const authorsRouter=express.Router();


function router(nav){
    var authors=[
        { name:"paulo coelho",
          img:"a1.jpg"

        },
        {
            name:"Anne Frank",
            img:"a2.jpg"
        },
        {
            name:"H G Wells",
            img:"a3.jpg"
        }


    ];
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
          nav,
           title:"Library",
            authors
        });
    });
    return authorsRouter;
}

module.exports=router;