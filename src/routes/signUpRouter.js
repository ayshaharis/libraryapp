const express =require("express");
const signUpRouter=express.Router();



function router(nav){
    
    signUpRouter.get('/',function(req,res){
        res.render("signup",{
          nav,
           title:"Sign Up",
            
        });
    });
    return signUpRouter;
}

module.exports=router;