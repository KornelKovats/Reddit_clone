import express from "express";
const cors = require("cors");
import mongoose from "mongoose";
import { helloController, postsController, loginController } from "../controllers";

const router = express.Router();

mongoose.connect("mongodb://localhost/redditclone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
router.use(cors());
router.use(express.json());

router.get("/hello", helloController.get);
router.post("/login", loginController.post);
router.get("/posts", postsController.get);

export default router;
