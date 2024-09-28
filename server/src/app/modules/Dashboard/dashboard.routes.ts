import express, { NextFunction, Request, Response } from "express";
import { DashboardController } from "./dashboard.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();
router.get("/count", DashboardController.getDashboardCounts);
router.get("/payment-count", DashboardController.getMonthWisePaymentUpdate);
router.get("/user-count", DashboardController.getMonthWiseUserUpdate);
router.get("/yearly-income", DashboardController.getYearlyIncome);
router.post(
  "/count/profile",
  auth(UserRole.USER),
  DashboardController.createUserProfileCounts
);
router.get(
  "/count/profile",
  auth(UserRole.USER),
  DashboardController.getSingleUserProfileCounts
);
export const DashboardRoutes = router;
