import React from 'react';
import {Title} from "@/components/shared/";
import {FilterCheckbox} from "@/components/shared/";
import {Input} from "@/components/ui";
import { RangeSlider } from '../ui/range-slider';
import {
  CheckboxFiltersGroup
} from "@/components/shared/checkbox-filters-group";


interface Props {
  className: string;
}


export const Filters: React.FC<Props> = ({ className }) => {

  return (
    <div className={className}>
      <Title  text='Product Filtering' size='sm' className='mb-5 font-bold'/>
      {/*checkbox*/}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Сan be collected' value='1'/>
        <FilterCheckbox text='Novelty' value='1'/>
      </div>
      {/*price sllider and price input*/}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Price from and to:</p>
        <div className='flex gap-3 mb-5'>
          <Input type='number'  step={10} placeholder='0 ₪' min='0 ₪' max='300 ₪'  />
          <Input type='number'  step={10}  placeholder='300 ₪' min='100 ' max='300 ₪' />
        </div>
          <RangeSlider min={0} max={300} step={10} value={[0,300]}></RangeSlider>
      </div>
      <CheckboxFiltersGroup title={'Ingredients:'} className='mt-5' limit={6}
                            defaultItems={[{
                              text: 'Cheese sauce',
                              value: '1',
                            },
                              {
                                text: 'Mozzarella',
                                value: '2',
                              },
                              {
                                text: 'Garlic',
                                value: '3',
                              },
                              {
                                text: 'Pickles',
                                value: '4',
                              },
                              {
                                text: 'Red onion',
                                value: '5',
                              },
                              {
                                text: 'Tomatoes',
                                value: '6',
                              },
                            ]}
                            items={[
                              {
                                text: 'Cheese sauce',
                                value: '7',
                              },
                              {
                                text: 'Mozzarella',
                                value: '8',
                              },
                              {
                                text: 'Garlic',
                                value: '9',
                              },
                              {
                                text: 'Pickles',
                                value: '10',
                              },
                              {
                                text: 'Red onion',
                                value: '11',
                              },
                              {
                                text: 'Tomatoes',
                                value: '12',
                              },
                              {
                                text: 'Cheese sauce',
                                value: '13',
                              },
                              {
                                text: 'Mozzarella',
                                value: '14',
                              },
                              {
                                text: 'Garlic',
                                value: '15',
                              },
                              {
                                text: 'Pickles',
                                value: '16',
                              },
                              {
                                text: 'Red onion',
                                value: '17',
                              },
                              {
                                text: 'Tomatoes',
                                value: '18',
                              },
                            ]}
     />
    </div>
  );
};
