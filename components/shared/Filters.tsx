'use client'

import React from 'react';
import {Title} from "@/components/shared/";
import {Input} from "@/components/ui";
import { RangeSlider } from '../ui/range-slider';
import {
  CheckboxFiltersGroup
} from "@/components/shared/checkbox-filters-group";
import {useIngredients, useFilters, useQueryFilters} from "@/hooks";

interface Props {
  className: string;
}
interface PriceProps{
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {

  const {ingredients,loading} = useIngredients();

  const filters = useFilters();

  useQueryFilters(filters);

  const updatePrices = (prices:number[]) => {
    filters.setPrices('priceFrom',prices[0]);filters.setPrices('priceTo',prices[1]
    )};

  const ingredientsItems = ingredients.map((item) =>
  ({text: item.name, value: String(item.id)}));

  return (
    <div className={className}>
      <Title  text='Product Filtering' size='sm' className='mb-5 font-bold'/>

      {/*checkbox*/}
      <CheckboxFiltersGroup
        name="pizzaTypes"
        className='mb-5'
        title='Types dough :'
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          {text: 'Thin', value: '1'},
          {text: 'Regular', value: '2'}
        ]}/>

      <CheckboxFiltersGroup
        name="sizes"
        className='mb-5'
        title='Sizes:'
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
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
                 value={String(filters.prices.priceFrom)}
                 onChange={(event)=>{filters.setPrices('priceFrom',Number(event.target.value))}}
          />

          <Input type='number'
                 step={10}
                 placeholder='300 ₪'
                 min='100' max='300'
                 value={String(filters.prices.priceTo)}
                 onChange={(event)=>{filters.setPrices('priceTo',Number(event.target.value))}}
          />
        </div>
          <RangeSlider min={0}
                       max={300}
                       step={10}
                       value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 300]}
                       onValueChange={updatePrices}
          />
      </div>
      <CheckboxFiltersGroup title={'Ingredients:'} className='mt-5' limit={6}
                            name="ingredients"
                            defaultItems={ingredientsItems.slice(0,6)}
                            items={ingredientsItems}
                            loading={loading}
                            onClickCheckbox={filters.setSelectedIngredients}
                            selected={filters.selectedIngredients}
     />
    </div>
  );
};
