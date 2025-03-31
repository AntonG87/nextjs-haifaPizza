import React from 'react';
import {FilterCheckbox,FilterCheckboxProps} from "@/components/shared/filter-checkbox";
import {Input, Skeleton} from "@/components/ui";

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  loading?: boolean;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  selectedIds?:Set<string>;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
                                                        title,
                                                        items,
                                                        defaultItems,
                                                        limit = 5,
                                                        searchInputPlaceholder = 'Search...',
                                                        className,
                                                        onClickCheckbox,
                                                        defaultValue,
                                                        selectedIds,
                                                        name,
                                                        loading,

                                                      }) => {

  const [showAll,setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('')

  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {[...Array(limit)].map((_, index) => (
          <div className="flex gap-3" key={index}>
            <Skeleton className="mb-4 w-full h-6 rounded-[8px]" />
          </div>
        ))}
        <Skeleton className="mb-4 w-24 h-6 rounded-[8px]" />
      </div>
    );
  }

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
            placeholder={searchInputPlaceholder} className='bg-gray-50 border-none'/>
        </div>
      }

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item,index) => (
        <FilterCheckbox
          onCheckedChange={() => onClickCheckbox?.(item.value)}
          checked={selectedIds?.has(item.value)}
          key={String(item.value)}
          value={item.value}
          name={name}
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