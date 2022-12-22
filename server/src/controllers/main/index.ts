import { Router } from "express";
import authController from "./auth";
import communitiesController from "./communities";
import commentController from "./comment";

const mainController = Router();

mainController.use("/auth", authController);
mainController.use("/communities", communitiesController);
mainController.use("/comment", commentController);

export default mainController;
