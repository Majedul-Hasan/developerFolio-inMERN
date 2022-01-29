import express from "express";
import dotenv from "dotenv";

import morgan  from "morgan"
import connectDB from "./config/db.js";
import dataRoutes from "./routes/dataRoutes.js";

import cors from 'cors';
import path  from "path";


dotenv.config();
const app = express();
connectDB()

if (process.env.NODE_ENV === "Development") {
    app.use(morgan("dev"));

  
} 


const __dirname = path.resolve()
if (process.env.NODE_ENV === "Production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')));
      app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    )
}else {
  app.get("/", (req, res) => {
    res.send("api is running...");
  });
}


// corse
app.use(cors())

app.use("/api/data", dataRoutes);

const PORT = process.env.PORT || 4050;

app.listen(
    PORT,
    console.log(
        `server is running in ${process.env.NODE_ENV} mode port No. ${PORT} to exit press ctrl + C`
        )
        );
