/*
  Warnings:

  - Added the required column `running` to the `user_dashboard_count` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workout` to the `user_dashboard_count` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `user_profiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_dashboard_count" ADD COLUMN     "running" INTEGER NOT NULL,
ADD COLUMN     "workout" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user_profiles" ADD COLUMN     "photo" TEXT NOT NULL;
