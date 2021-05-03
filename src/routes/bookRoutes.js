const express =require("express");
const booksRouter=express.Router();

function router(nav){
    var books=[
        {
           title:"Alchemist",
           author:"Paulo coelo",
           genre:"fiction",
           img:"b1.jpg"
        
        },
        {
            title:"Time Machine",
            author:"H.G. Wells",
            genre:"fiction",
            img:"b2.jpg"
         
         },
         {
            title:"The diary of a young girl",
            author:"Ann Frank",
            genre:"Biography",
            img:"b3.jpg"
         
         }
    
    ];
    booksRouter.get('/',function(req,res){
        res.render("books",{
          nav,
           title:"Library",
            books
        });
    });
    //url accessing i using colon 
    booksRouter.get('/:id',function(req,res){
       const id= req.params.id
        res.render('book',{
            nav,
            title:"Library",
            book:books[id] 
        });
    });
    return booksRouter;
}


module.exports=router;