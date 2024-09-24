import prisma from "../../../shared/prisma";
const getSinglePlan = async (id: string) => {
  // console.log(data);

  const result = await prisma.membershipPlans.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const getAllPlans = async () => {
  const result = await prisma.membershipPlans.findMany();
  return result;
};
const createPlan = async (data: any) => {
  const result = await prisma.membershipPlans.create({
    data: {
      ...data,
    },
  });
  console.log(result);
  return result;
};

export const PlanService = {
  getAllPlans,
  getSinglePlan,
  createPlan,
};
