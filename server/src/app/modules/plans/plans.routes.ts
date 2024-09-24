import express, { NextFunction, Request, Response } from "express";
import { PlanController } from "./plans.controller";

const router = express.Router();
router.post("/create-plan", PlanController.createPlan);
router.get("/", PlanController.getAllPlans);
router.get("/:id", PlanController.getSinglePlan);
export const PlanRoutes = router;
