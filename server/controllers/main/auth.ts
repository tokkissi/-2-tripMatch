import { Router } from "express";
import { userService } from "../../services";

const authController = Router();

authController.post("/email", async (req, res, next) => {
  try {
    const result = await userService.checkEmail(req.body);
    if (result === "OK") res.status(201).end();
    else next(new Error("409"));
  } catch (err) {
    next(err);
  }
});
authController.post("/certify", async (req, res, next) => {
  try {
    await userService.checkNumber(req.body);
    res.status(200).end();
  } catch (err) {
    next(err);
  }
});
authController.post("/join", async (req, res, next) => {
  try {
    await userService.join(req.body);
    res.status(201).end();
  } catch (err) {
    next(err);
  }
});

export default authController;
