import express from "express"
import Connection from "./connection/db.js";
import DefaultData from "./default.js";
import cors from "cors";
import Route from "./routes/route.js"
import dotenv from "dotenv";
const app=express();
dotenv.config();
app.use(cors());
app.use('/',Route);

const PORT=8000;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
Connection(username,password);
app.listen(PORT,()=>console.log(`Server is started on PORT ${PORT}`));
DefaultData();