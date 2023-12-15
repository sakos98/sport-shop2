/*
  Warnings:

  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `price` DOUBLE NOT NULL;

-- Dodanie kolumny `userId` zezwalającej na wartości NULL dla tabeli `Order`
ALTER TABLE `Order` ADD COLUMN `userId` VARCHAR(255) DEFAULT NULL;
