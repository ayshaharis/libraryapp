const express =require("express");
const loginRouter=express.Router();

// const booksRouter=require('./src/routes/bookRoutes')(nav);
// const authorsRouter=require('./src/routes/authorsRoutes')(nav);
// const signUpRouter=require('./src/routes/signUpRouter')(nav);



// loginRouter.use('/books',booksRouter);
// loginRouter.use('/authors',authorsRouter);
// loginRouter.use('/signup',signUpRouter);




function router(nav){
    
    loginRouter.get('/',function(req,res){
        res.render("login",{
          nav,
           title:"Login",
            
        });
    });


    loginRouter.get('/loginbutton',function(req,res){
        res.render("home",{
            nav,
            title:"home"

        });
    });

    return loginRouter;
}

module.exports=router;