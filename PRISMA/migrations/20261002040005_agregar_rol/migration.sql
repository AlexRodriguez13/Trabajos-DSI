/*
  Warnings:

  - Made the column `password` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "password" SET NOT NULL;
