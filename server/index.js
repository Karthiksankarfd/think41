const express = require("express")
const app = express()
const loadcsv =  require("./dataassets/importCSV")

loadcsv()

app.get("/" , (req, res)=>{
    res.write("Hello")
    console.log("Hello world")
} )

app.listen(5000 , ()=>{
   console.log("server is running on 3000")
})
