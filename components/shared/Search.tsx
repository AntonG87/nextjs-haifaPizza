'use client';

import { Search } from 'lucide-react';
import React from 'react';
import {cn} from "@/lib/utils";
import {className} from "postcss-selector-parser";
import {useClickAway, useDebounce} from "react-use";
import Link from "next/link";
import {Api} from "@/services/api-client";
import {Product} from "@prisma/client";

export const SearchInput = () => {
  const [focused,setFocused] = React.useState(false)
  const [searchQuery,setSearchQuery] = React.useState('')
  const [products,setProducts] = React.useState<Product[]>([])
  const ref = React.useRef(null);

  useClickAway(ref, () => {
    setFocused(false);
  });

  useDebounce(()=>{
    Api.products.search(searchQuery).then(items =>{
      setProducts(items);
    });
  },
    500,
    [searchQuery]);

  const onClickItem = () =>{
    setFocused(false);
    setProducts([]);
    setSearchQuery('');

  }

  return (
    <>
      {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />}
      <div  ref={ref}
            className={cn("flex rounded-2xl flex-1 justify-between relative h-11 z-30",className)}>
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
          type="text"
          placeholder="Search pizza..."
          onFocus={()=>setFocused(true)}
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
        />

        <div className={cn('absolute w-full bg-white rounded-xl py-2 px-4 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30', focused && 'visible opacity-100 top-12')}>
          {products.map(product =>(
            <Link
              onClick={onClickItem}
              key={product.id}

              href={`/product/${product.id}`}>
              <div className="flex items-center gap-3 w-full px-3 py-2 hover:shadow-md hover:bg-primary/10 rounded-xl ">
                <img
                  className='h-8 w-8 rounded-b-sm'
                  src={product.imageUrl}
                  alt={product.name}

                />
                <span>{product.name}</span>
              </div>
            </Link>
          ))}
        </div>


      </div>
    </>

  );
};