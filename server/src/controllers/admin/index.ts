import { Router } from "express";
import usersController from "./users";

const adminController = Router();

adminController.use("/users", usersController);

export default adminController;
