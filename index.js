import express from "express";
import ejs from "ejs";


const app = express();
const port = 3000;
app.use(express.static("public"))
app.get("/", (req,res)=>{
    res.render("index.ejs")
})

app.get("/todayList",(req,res)=>{
    res.render("todayList.ejs")
})

app.get("/workList",(req,res)=>{
    res.render("workList.ejs")
})

app.listen(port, ()=>{
    console.log("Server is running at port "+port)
})