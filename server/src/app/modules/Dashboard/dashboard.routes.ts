import express, { NextFunction, Request, Response } from "express";
import { DashboardController } from "./dashboard.controller";

const router = express.Router();
router.get("/count", DashboardController.getDashboardCounts);
router.get("/payment-count", DashboardController.getMonthWisePaymentUpdate);
router.get("/user-count", DashboardController.getMonthWiseUserUpdate);
router.get("/yearly-income", DashboardController.getYearlyIncome);
export const DashboardRoutes = router;
