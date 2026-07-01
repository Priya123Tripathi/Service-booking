import express from "express";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import {
  addService,
  getServices,
  getService,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();
router.post("/", auth, admin,addService);

router.put("/:id", auth, admin, updateService);

router.delete("/:id", auth, admin, deleteService);

router.get("/", getServices);

router.get("/:id", getService);

export default router;