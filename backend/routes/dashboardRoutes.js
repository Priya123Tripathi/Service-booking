import express from "express";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import { adminDashboard } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", auth, admin, adminDashboard);

export default router;