const express =require("express");
const app=new express();
const port=process.env.PORT|| 3200;
 const nav=[
     {link:'./books',name:"Books"    },
     {link:'./authors',name:"Authors" },
    {link:'./signup',name:"Sign Up" },
    {link:'./login',name:"Login" } ];


const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorsRoutes')(nav);
const signUpRouter=require('./src/routes/signUpRouter')(nav);
const loginRouter=require('./src/routes/loginRouter')(nav);



app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signUpRouter);
app.use('/login',loginRouter);

app.get('/',function(req,res){
    res.render("index",{
        nav,
    
        title:"Library shelf"
    });
});

app.listen(port,()=>{
    console.log("server ready at "+port);
});