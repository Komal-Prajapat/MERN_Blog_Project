import express from "express";
import { register ,login } from "../controllers/user.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "this is home route",
  });
  console.log("this is home route");
});

router.post("/register", register);
router.post("/login", login);

export default router;
