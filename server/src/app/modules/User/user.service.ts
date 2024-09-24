import { Prisma, PrismaClient, User } from "@prisma/client";
import * as bcrypt from "bcrypt";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { paginationHelper } from "../../../Helpers/paginationHelpers";

import { jwtHelpers } from "../../../Helpers/jwtHealpers";
import config from "../../../config";
import { Secret } from "jsonwebtoken";
import prisma from "../../../shared/prisma";
import { userSearchAbleFields } from "./user.constants";

type CreateUserInput = {
  name: string;
  age: string;
  phone: string;
  email: string;
  password: string;
  profilePhoto?: string;
};

const createUserIntoDB = async (userData: CreateUserInput) => {
  const hashedPassword: string = await bcrypt.hash(userData.password, 12);

  try {
    const result = await prisma.$transaction(async (tx) => {
      const createdUser = await tx.user.create({
        data: {
          name: userData.name,
          age: userData.age,
          phone: userData.phone,
          email: userData.email,
          password: hashedPassword,
          profilePhoto: userData.profilePhoto,
        },
      });

      // Exclude password and role from the returned object
      const { password, role, ...userWithoutPasswordAndRole } = createdUser;

      return { data: userWithoutPasswordAndRole };
    });

    return result;
  } catch (error) {
    // Handle any errors that occur during the transaction
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
};

const getAllUser = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.UserWhereInput[] = [];

  //console.log(filterData);
  if (params.searchTerm) {
    andConditions.push({
      OR: userSearchAbleFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.UserWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.user.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
    select: {
      id: true,
      name: true,
      phone: true,
      email: true,
      age: true,
      profilePhoto: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  const total = await prisma.user.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createTrainer = async (data: any) => {
  const result = await prisma.trainers.create({
    data: {
      ...data,
    },
  });
  return result;
};
const getTrainers = async () => {
  const result = await prisma.trainers.findMany();
  return result;
};
const getSingleTrainers = async (id: any) => {
  const result = await prisma.trainers.findUnique({
    where: {
      id,
    },
  });
  return result;
};
const deleteUser = async (id: any) => {
  const result = await prisma.user.delete({
    where: {
      id,
    },
  });
  return result;
};
const deleteTrainer = async (id: any) => {
  const result = await prisma.trainers.delete({
    where: {
      id,
    },
  });
  return result;
};

export const userService = {
  createUserIntoDB,
  deleteUser,
  getAllUser,
  createTrainer,
  getTrainers,
  getSingleTrainers,
  deleteTrainer,
};
