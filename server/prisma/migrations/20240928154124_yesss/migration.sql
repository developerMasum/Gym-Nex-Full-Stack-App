/*
  Warnings:

  - Added the required column `about` to the `user_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `user_profiles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `occupation` to the `user_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_profiles" ADD COLUMN     "about" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "occupation" TEXT NOT NULL;
