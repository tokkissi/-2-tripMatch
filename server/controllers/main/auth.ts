import { Router } from "express";
import { userService } from "../../services";

const authController = Router();

authController.post("/join", async (req, res, next) => {
  try {
    await userService.join(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default authController;
