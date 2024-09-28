import { Secret } from "jsonwebtoken";
import config from "../../../config";
import { jwtHelpers } from "../../../Helpers/jwtHealpers";
import prisma from "../../../shared/prisma";

type MonthWiseUpdate = {
  name: string;
  total: number;
};

const getDashboardCounts = async () => {
  const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed in JavaScript
  const currentYear = new Date().getFullYear();

  const [userCount, trainerCount, totalMonthly, totalYearly] =
    await Promise.all([
      prisma.user.count(),
      prisma.trainers.count(),
      prisma.payment.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          status: "PAID",
          updatedAt: {
            gte: new Date(currentYear, currentMonth - 1, 1), // First day of the current month
            lt: new Date(currentYear, currentMonth, 1), // First day of the next month
          },
        },
      }),
      prisma.payment.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          status: "PAID",
          updatedAt: {
            gte: new Date(currentYear, 0, 1), // First day of the year
            lt: new Date(currentYear + 1, 0, 1), // First day of the next year
          },
        },
      }),
    ]);

  return {
    userCount,
    trainerCount,
    totalMonthly: totalMonthly._sum.amount || 0, // Default to 0 if no payments
    totalYearly: totalYearly._sum.amount || 0, // Default to 0 if no payments
  };
};

const getMonthWisePaymentUpdate = async () => {
  const currentYear = new Date().getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthWiseUpdate: MonthWiseUpdate[] = [];
  for (let i = 0; i < months.length; i++) {
    const month = months[i];
    const total = await prisma.payment.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: "PAID",
        updatedAt: {
          gte: new Date(currentYear, i, 1), // First day of the month
          lt: new Date(currentYear, i + 1, 1), // First day of the next month
        },
      },
    });
    monthWiseUpdate.push({
      name: month,
      total: total._sum.amount || 0, // Default to 0 if no payments
    });
  }
  return monthWiseUpdate;
};

const getMonthWiseUserUpdate = async () => {
  const currentYear = new Date().getFullYear();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthWiseUpdate: MonthWiseUpdate[] = [];
  for (let i = 0; i < months.length; i++) {
    const month = months[i];
    const total = await prisma.user.count({
      where: {
        createdAt: {
          gte: new Date(currentYear, i, 1), // First day of the month
          lt: new Date(currentYear, i + 1, 1), // First day of the next month
        },
      },
    });
    monthWiseUpdate.push({
      name: month,
      total: total || 0, // Default to 0 if no payments
    });
  }
  return monthWiseUpdate;
};

const getYearlyIncome = async (pastYearsCount = 5) => {
  const currentYear = new Date().getFullYear();
  const yearlyIncome = [];

  for (let year = currentYear; year >= currentYear - pastYearsCount; year--) {
    const total = await prisma.payment.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        status: "PAID",
        updatedAt: {
          gte: new Date(year, 0, 1), // First day of the current year
          lt: new Date(year + 1, 0, 1), // First day of the next year
        },
      },
    });

    yearlyIncome.push({
      year,
      totalIncome: total._sum.amount || 0, // Default to 0 if no payments
    });
  }

  return yearlyIncome;
};

const createUserProfileCounts = async (data: any) => {
  const result = await prisma.userDashboardCount.create({
    data,
  });
  return result;
};
const getSingleUserProfileCounts = async (token: string) => {
  const verifiedUser = jwtHelpers.verifyToken(
    token,
    config.jwt.jwt_secret as Secret
  );
  console.log(verifiedUser);
  const userId = verifiedUser.id;
  // console.log(userId);

  const result = await prisma.userDashboardCount.findUniqueOrThrow({
    where: {
      userId: userId,
    },
  });
  return result;
};

export const DashboardService = {
  getDashboardCounts,
  getMonthWisePaymentUpdate,
  getMonthWiseUserUpdate,
  getYearlyIncome,
  createUserProfileCounts,
  getSingleUserProfileCounts,
};
