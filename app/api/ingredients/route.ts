import {NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";

export const GET = async () => {
   const ingredients = await prisma.ingredient.findMany();
  return NextResponse.json(ingredients)
 }