import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { UserDashboardService } from "./userDashboard.service";

const getUserDashboardCounts = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserDashboardService.getUserDashboardCounts();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Dashboard counts retrieved successfully!",
      data: result,
    });
  }
);
const createUserDashboardCounts = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserDashboardService.createUserDashboardCounts(
      req.body
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Dashboard counts created successfully!",
      data: result,
    });
  }
);

const getCyclingData = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDashboardService.getCyclingData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cycling data retrieved successfully!",
    data: result,
  });
});

const getGymData = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDashboardService.getGymData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Gym data retrieved successfully!",
    data: result,
  });
});

const getFitnessData = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDashboardService.getFitnessData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Fitness data retrieved successfully!",
    data: result,
  });
});

const getWeightData = catchAsync(async (req: Request, res: Response) => {
  const result = await UserDashboardService.getWeightData();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Weight data retrieved successfully!",
    data: result,
  });
});

export const UserDashboardController = {
  getUserDashboardCounts,
  createUserDashboardCounts,
  getCyclingData,
  getGymData,
  getFitnessData,
  getWeightData,
};
