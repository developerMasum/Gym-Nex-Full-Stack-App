import express from "express";
import { PaymentController } from "./payment.controller";
import auth from "../../middleware/auth";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post("/ipn", PaymentController.validate);

router.post("/init/:id", PaymentController.initPayment);
router.post("/offline-payment", PaymentController.offlinePayment);
router.get("/offline-payments", PaymentController.getOfflinePayments);
router.get("/offline-payments/:id", PaymentController.getMyPaymentInfo);
router.patch("/offline-payments/:id", PaymentController.validateOfflinePayment);

export const PaymentRoutes = router;
