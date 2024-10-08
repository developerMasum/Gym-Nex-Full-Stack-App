import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { DashboardService } from "./dashboard.service";

const getDashboardCounts = catchAsync(async (req: Request, res: Response) => {
  const result = await DashboardService.getDashboardCounts();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Dashboard counts retrieved successfully!",
    data: result,
  });
});
const getMonthWisePaymentUpdate = catchAsync(
  async (req: Request, res: Response) => {
    const result = await DashboardService.getMonthWisePaymentUpdate();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "getMonthWisePaymentUpdate counts retrieved successfully!",
      data: result,
    });
  }
);
const getMonthWiseUserUpdate = catchAsync(
  async (req: Request, res: Response) => {
    const result = await DashboardService.getMonthWiseUserUpdate();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "getMonthWiseUserUpdate counts retrieved successfully!",
      data: result,
    });
  }
);

const getYearlyIncome = catchAsync(async (req: Request, res: Response) => {
  const result = await DashboardService.getYearlyIncome();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Yearly Income counts retrieved successfully!",
    data: result,
  });
});
const createUserProfileCounts = catchAsync(
  async (req: Request, res: Response) => {
    const result = await DashboardService.createUserProfileCounts(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Profile counts created successfully!",
      data: result,
    });
  }
);
const getSingleUserProfileCounts = catchAsync(
  async (req: Request, res: Response) => {
    const authorization: string = req.headers.authorization || "";
    const result = await DashboardService.getSingleUserProfileCounts(
      authorization
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User Profile counts retrieved successfully!",
      data: result,
    });
  }
);

export const DashboardController = {
  getDashboardCounts,
  getMonthWisePaymentUpdate,
  getMonthWiseUserUpdate,
  getYearlyIncome,
  createUserProfileCounts,
  getSingleUserProfileCounts,
};
