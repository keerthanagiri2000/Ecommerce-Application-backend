import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import {errorHandler, notFound} from "./Middleware/Error.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/OrderRoutes.js";

dotenv.config();
connectDatabase()
const app = express();
app.use(cors());
app.use(express.json());

//API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);


//ERROR HANDLER
app.use(notFound);
app.use(errorHandler);



app.get("/", (req,res) =>{
    res.send("API is running")
});

const PORT = process.env.PORT;
app.listen(PORT, console.log(`server run in ${PORT}`));