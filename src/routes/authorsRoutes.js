const express =require("express");
const Bookdata = require("../model/bookData");
const authorsRouter=express.Router();


function router(nav){
    var authors=[
        { name:"paulo coelho",
          img:"a3.jpg",
          details:"The Brazilian author PAULO COELHO was born in 1947 in the city of Rio de Janeiro. Before dedicating his life completely to literature, he worked as theatre director and actor, lyricist and journalist."

        },
        {
            name:"Anne Frank",
            img:"a1.jpg",
            details:"Born in Frankfurt, Germany, she lived most of her life in or near Amsterdam, Netherlands, having moved there with her family at the age of four and a half when the Nazis gained control over Germany. Born a German national, she lost her citizenship in 1941 and thus became stateless. "
        },
        {
            name:"H G Wells",
            img:"a2.jpg",
            details:"H.G. Wells, in full Herbert George Wells, (born September 21, 1866, Bromley, Kent, England—died August 13, 1946, London), English novelist, journalist, sociologist, and historian best known for such science fiction novels as The Time Machine and The War of the Worlds and such comic novels as Tono-Bungay and The History of Mr. Polly."
        }


    ];
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
          nav,
           title:"Library",
            authors
        });
    });


    authorsRouter.get('/:id',function(req,res){
        const id= req.params.id
         Bookdata.findOne({_id:id})
         .then(function(authors){
            res.render('author',{
                nav,
                title:"Library",
                authors
            });

         })
         
     });
    return authorsRouter;
}

module.exports=router;