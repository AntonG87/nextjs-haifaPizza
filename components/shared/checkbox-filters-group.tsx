'use client';

import React from 'react';
import {FilterCheckbox,FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                        title,
                                                        items,
                                                        defaultItems,
                                                        limit = 5,
                                                        searchInputPlaceholder = 'Поиск...',
                                                        className,
                                                        onChange,
                                                        defaultValue,
                                                      }) => {

  const [showAll,setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('')
  
  const list = showAll
    ?items.filter((item)=> item.text.toLowerCase().includes(searchValue.toLowerCase()))
    :defaultItems?.slice(0,limit)

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchValue(e.target.value)
  }

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {
        showAll &&
        <div className='mb-5'>
          <Input
            onChange={onChangeSearchInput}
            placeholder='Search...' className='bg-gray-50 border-none'/>
        </div>
      }

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item,index) => (
        <FilterCheckbox
          onCheckedChange={(ids) => console.log(ids)}
          checked={false}
          key={String(item.value)}
          value={item.value}
          text={item.text}
          endAdornment={item.endAdornment}/>))}
      </div>

       {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Hide' : '+ Show All'}
          </button>
        </div>
      )}
    </div>

  );
};