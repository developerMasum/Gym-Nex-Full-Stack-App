import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import prisma from "../../../shared/prisma";
import { sslServices } from "../ssl/ssl.service";
import { PaymentStatus } from "@prisma/client";
// import { PaymentStatus } from "@prisma/client";

const initPayment = async (data: any, id: string) => {
  const userData = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  if (!userData) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      "Payment information not found!"
    );
  }
  // if (userData.status === PaymentStatus.PAID) {
  //   throw new ApiError(
  //     httpStatus.BAD_REQUEST,
  //     "You already pay for the appointment!"
  //   );
  // }

  const paymentSession = await sslServices.initPayment({
    amount: 2000,
    transactionId: "userData.transactionId",
    customerName: "Customer1",
    customerEmail: "YK2yQ@example.com",
  });
  return {
    paymentUrl: paymentSession.GatewayPageURL,
  };
};

const validate = async (payload: any) => {
  // if (!payload || !payload?.status || payload?.status !== 'VALID') {
  //     return {
  //         massage: 'Invalid Payment!'
  //     }
  // }
  // const result = await sslServices.validate(payload);

  // if (result?.status !== 'VALID') {
  //     return {
  //         massage: 'Payment failed'
  //     }
  // }
  // const { tran_id } = result;

  // Uncomment when validate in locally
  const { tran_id } = payload;

  await prisma.$transaction(async (transactionClient) => {
    const paymentData = await transactionClient.payment.update({
      where: {
        transactionId: tran_id,
      },
      data: {
        status: PaymentStatus.PAID,
        // paymentGatewayData: payload,
      },
    });

    await transactionClient.user.update({
      where: {
        id: paymentData.userId,
      },
      data: {
        plan: "PREMIUM",
      },
    });
  });

  return {
    massage: "Payment Success",
  };
};

const offlinePayment = async (data: any) => {
  // console.log("data", data);
  const result = await prisma.payment.create({
    data: {
      ...data,
    },
  });

  return result;
};
const getOfflinePayments = async () => {
  const result = await prisma.payment.findMany({
    include: {
      user: true,
    },
  });
  return result;
};
const validateOfflinePayment = async (payload: any) => {
  const result = await prisma.payment.update({
    where: {
      id: payload.id,
    },
    data: {
      status: PaymentStatus.PAID,
      user: {
        update: {
          plan: payload.plan,
          status: payload.status,
        },
      },
    },
    include: {
      user: true,
    },
  });
  return result;
};
const getMyPaymentInfo = async (id: string) => {
  const result = await prisma.payment.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

export const PaymentService = {
  initPayment,
  validate,
  offlinePayment,
  getOfflinePayments,
  validateOfflinePayment,
  getMyPaymentInfo,
};
