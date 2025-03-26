import { PrismaClient } from "@prisma/client";

// Create a function that returns a new PrismaClient instance
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Declare a global variable to store the Prisma client instance
declare global {
  var prismaGlobal: PrismaClient | undefined;
}

// Initialize Prisma client, using the global instance in development to avoid multiple instances
export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

// If we're in development, assign the global instance to avoid hot-reloading issues
if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
