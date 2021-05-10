const express =require("express");
const booksRouter=express.Router();
const Bookdata=require('../model/bookData');

function router(nav){
    // var books=[
    //     {
    //        title:"Alchemist",
    //        author:"Paulo coelo",
    //        genre:"fiction",
    //        img:"b1.jpg"
        
    //     },
    //     {
    //         title:"Time Machine",
    //         author:"H.G. Wells",
    //         genre:"fiction",
    //         img:"b2.jpg"
         
    //      },
    //      {
    //         title:"The diary of a young girl",
    //         author:"Ann Frank",
    //         genre:"Biography",
    //         img:"b3.jpg"
         
    //      }
    
    // ];
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){
            res.render("books",{
                nav,
                 title:"Library",
                  books
                });

        })
        
       
    });
    //url accessing id using colon 
    booksRouter.get('/:id',function(req,res){
       const id= req.params.id
       Bookdata.findOne({_id:id})
       .then(function(book){
        res.render('book',{
            nav,
            title:"Library",
            book
        });
       })
       
    });
    return booksRouter;
}


module.exports=router;