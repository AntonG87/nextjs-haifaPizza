'use client'

import React from 'react';
import {Title} from "@/components/shared/";
import {FilterCheckbox} from "@/components/shared/";
import {Input} from "@/components/ui";
import { RangeSlider } from '../ui/range-slider';
import {
  CheckboxFiltersGroup
} from "@/components/shared/checkbox-filters-group";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import {useSet} from "react-use";
import qs from 'qs';
import {useRouter} from "next/navigation";


interface Props {
  className: string;
}

interface PriceProps{
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();


  const {ingredients,loading,onAddId,selectedIngredients} = useFilterIngredients();

  const [sizes, {  toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [types, {  toggle: toggleTypes }] = useSet(new Set<string>([]));



  const ingredientsItems = ingredients.map((item) =>
  ({text: item.name, value: String(item.id)}));

  const [prices,setPrice] = React.useState<PriceProps>(
    {priceFrom:0,priceTo:300}
  );
  const updatePrice = (name: keyof PriceProps, value:number )=>{
    setPrice({
      ...prices,
      [name] :value});
  };

  React.useEffect(() => {
    const filterParams = {
     ...prices,
      pizzaTypes: Array.from(types),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIngredients || []),
    };

    const queryString = qs.stringify(filterParams,
      {skipNulls:true,
       arrayFormat:'comma'});

    router.push(`?${queryString}`);
  }, [prices, types, sizes, selectedIngredients]);

  return (
    <div className={className}>
      <Title  text='Product Filtering' size='sm' className='mb-5 font-bold'/>

      {/*checkbox*/}
      <CheckboxFiltersGroup
        name="pizzaTypes"
        className='mb-5'
        title='Types dough :'
        onClickCheckbox={toggleTypes}
        selected={types}
        items={[
          {text: 'Thin', value: '1'},
          {text: 'Regular', value: '2'}
        ]}/>

      <CheckboxFiltersGroup
        name="sizes"
        className='mb-5'
        title='Sizes:'
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          {text: '20 cm', value: '20'},
          {text: '30 cm', value: '30'},
          {text: '40 cm', value: '40'},
        ]}/>



      {/*price sllider and price input*/}

      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price from and to:</p>
        <div className='flex gap-3 mb-5'>

          <Input type='number'  step={10}

                 placeholder='0 ₪'
                 min='0' max='300'
                 value={String(prices.priceFrom)}
                 onChange={(event)=>{updatePrice('priceFrom',Number(event.target.value))}}
          />

          <Input type='number'
                 step={10}
                 placeholder='300 ₪'
                 min='100' max='300'
                 value={String(prices.priceTo)}
                 onChange={(event)=>{updatePrice('priceTo',Number(event.target.value))}}
          />
        </div>
          <RangeSlider min={0}
                       max={300}
                       step={10}
                       value={[prices.priceFrom, prices.priceTo]}
                       onValueChange={([priceFrom,priceTo]) => setPrice({priceFrom,priceTo})}
          />
      </div>
      <CheckboxFiltersGroup title={'Ingredients:'} className='mt-5' limit={6}
                            name="ingredients"
                            defaultItems={ingredientsItems.slice(0,6)}
                            items={ingredientsItems}
                            loading={loading}
                            onClickCheckbox={onAddId}
                            selected={selectedIngredients}
     />
    </div>
  );
};
