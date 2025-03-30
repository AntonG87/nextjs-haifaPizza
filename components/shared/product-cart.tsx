import React from 'react';
import Link from "next/link";
import {Title} from "@/components/shared/title";
import {Button} from "@/components/ui";
import {Plus} from "lucide-react";

interface Props {
  imageUrl:string;
  name:string;
  price:number;
  id:number;
  className?:string;

}

export const ProductCart: React.FC<Props> = ({ className,name,price,id,imageUrl}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <img className='w-[215px] h-[215px]' src={imageUrl} alt="logo"/>
        </div>

        <Title text={name} size={'sm'} className={'mb-1 mt-3 font-bold'}></Title>
        <p className={'text-sm text-gray-400'}>
          Lorem lorem loremloremloremloremloremloremloremloremlorem
          lorem loremloremlorem lorem vloremloremlorem lorem
        </p>
        <div className={'flex justify-between items-center mt-4'}>
          <span className={'text-[20px]'}>
            From  <b className={'text-[21px]'}>{price} ₪</b>
          </span>

          <Button variant={'secondary'}>
            <Plus className={'w-5 h-5 mr-1'}/>
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
