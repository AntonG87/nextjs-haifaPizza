import {ApiRoutes} from "@/services/constants";
import {Ingredient} from "@prisma/client";
import {axiosInstance} from "@/services/instance";

export async function getAll() {

}


export const getIngredients = async ():Promise<Ingredient[]> => {
  return (await axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS)).data
}
