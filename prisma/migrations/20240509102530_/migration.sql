/*
  Warnings:

  - You are about to drop the column `participants` on the `Room` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "participants";

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");
