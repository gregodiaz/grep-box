import express, { json } from "express";
import morgan from "morgan";
import cors from "cors";
import { upload } from '../controllers/uploads'

// routes imports
import uploadRouter from "../routes/uploads";

// inits
const app = express();

// middlewares
app.use((err, req, res, next) => console.log(`Error: ${err.message}`));
app.use(morgan("dev"));
app.use(cors());
app.use(upload.single('file'))

// routes
app.use("/uploads", uploadRouter)

export default app;
