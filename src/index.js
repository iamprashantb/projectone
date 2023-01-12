import express from "express";
import Connection from "./models/index.js";
import bookRoute from "./routes/bookroutes.js";
import "dotenv/config";
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.get("/", (req, res) =>{
    res.send("Backend is working");
});

app.use("/book", bookRoute);

app.listen(process.env.PORT || 8000, async() => {

} )

app.listen(8000, async () => {
    console.log("Server has Started");

    try{
        await connection.authenticate();
        connection.sync();
        console.log("Successfully Connected to database");
    }catch(err){
        console.error("Error during connection to the database", err);
    }

    await connection.authenticate();
});

