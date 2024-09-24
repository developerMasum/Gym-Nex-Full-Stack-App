import express from "express";
import { UserDashboardController } from "./userDashboard.controller";

const router = express.Router();
router.get("/count", UserDashboardController.getUserDashboardCounts);
router.post("/count", UserDashboardController.createUserDashboardCounts);

export const DashboardRoutes = router;
