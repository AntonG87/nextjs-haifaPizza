import React from "react";
import qs from "qs";
import {Filters} from "@/hooks/use-filters";
import {useRouter} from "next/navigation";



export const useQueryFilters = (filters:Filters) => {
  const router = useRouter();

  React.useEffect(() => {
    const params = {
      ...filters.prices,
      pizzaTypes: Array.from(filters.pizzaTypes),
      sizes: Array.from(filters.sizes),
      ingredients: Array.from(filters.selectedIngredients || []),
    };

    const queryString = qs.stringify(params,
      {skipNulls:true,
        arrayFormat:'comma'});

    router.push(`?${queryString}`,{scroll:false});
  },[filters,router]);


};