const express 		= require("express");
const app			= express();

const port          = process.env.PORT || 3000;

app.use(express.static("public"));

// app.get("/", (req, res) =>{
// 	res.send("Welcome to the Homepage");
// });


app.listen(port, (req,res) =>{
	console.log("Server Deployed!");
});