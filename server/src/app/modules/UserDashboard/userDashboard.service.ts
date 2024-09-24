import prisma from "../../../shared/prisma";

const getUserDashboardCounts = async (payload: { userId: string }) => {
  const { userId } = payload;
  const result = await prisma.userDashboardCount.findUniqueOrThrow({
    where: {
      id: userId,
    },
    include: {
      user: true,
    },
  });
  return result;
};

const createUserDashboardCounts = async (data: any) => {
  const result = await prisma.userDashboardCount.create({
    data: {
      ...data,
    },
  });
  return result;
};

export const UserDashboardService = {
  getUserDashboardCounts,
  createUserDashboardCounts,
};
