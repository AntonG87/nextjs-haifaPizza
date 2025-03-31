import {ApiRoutes} from "@/services/constants";
import {Ingredient} from "@prisma/client";
import {axiosInstance} from "@/services/instance";

export const getIngredients = async ():Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
