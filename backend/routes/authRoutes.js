import express from "express";
import auth from "../middleware/authMiddleware.js";
import { signup, 
    login ,
    getProfile,
      updateProfile,
    } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.put("/profile", auth, updateProfile);
router.get("/profile", auth, getProfile);

export default router;