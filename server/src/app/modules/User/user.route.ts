import express, { NextFunction, Request, Response } from "express";
import { userController } from "./user.controller";

import { userValidation } from "./user.validation";
import { ZodError } from "../../Interfaces/errorSource";

const router = express.Router();

router.post(
  "/create-user",
  (req: Request, res: Response, next: NextFunction) => {
    try {
      userValidation.createUser.parse(req.body);

      return userController.createUser(req, res, next);
    } catch (error: unknown) {
      if (error instanceof Error && "issues" in error) {
        const zodError = error as ZodError;
        const errorDetails = {
          issues: zodError.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        };
        const errorMessage = zodError.issues
          .map((issue) => issue.message)
          .join(". ");

        return res.status(400).json({
          success: false,
          message: errorMessage,
          errorDetails: errorDetails,
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          error: (error as Error).message || "Unknown error occurred",
        });
      }
    }
  }
);
router.get("/users", userController.getAllUser);
router.delete("/users/:id", userController.deleteUser);
router.post("/create-trainer", userController.createTrainer);
router.get("/trainers", userController.getTrainers);
router.get("/trainer/:id", userController.getSingleTrainers);
router.delete("/trainer/:id", userController.deleteTrainer);

export const UserRoutes = router;
