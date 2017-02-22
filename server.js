const express 		= require("express");
const app			= express();



app.use(express.static("public"));

// app.get("/", (req, res) =>{
// 	res.send("Welcome to the Homepage");
// });


app.listen(3000, (req,res) =>{
	console.log("Server Deployed!");
});