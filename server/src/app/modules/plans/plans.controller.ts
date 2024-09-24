import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { PlanService } from "./plans.service";

const getSinglePlan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await PlanService.getSinglePlan(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: " single Plan retrieved successfully!",
    data: result,
  });
});

const getAllPlans = catchAsync(async (req: Request, res: Response) => {
  const result = await PlanService.getAllPlans();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plans retrieved successfully!",

    data: result,
  });
});
const createPlan = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.body);
  const result = await PlanService.createPlan(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Plans Created successfully!",

    data: result,
  });
});
export const PlanController = {
  getAllPlans,
  getSinglePlan,
  createPlan,
};
