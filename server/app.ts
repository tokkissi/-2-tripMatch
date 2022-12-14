import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares";
import controller from "./controllers";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", controller);
app.use((req, res, next) => next(new Error("404")));
app.use(errorHandler);

export default app;
