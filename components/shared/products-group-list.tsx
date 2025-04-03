'use client';
import React from 'react';
import { Title } from "@/components/shared/title";
import { cn } from "@/lib/utils";
import { ProductCart } from "@/components/shared/product-cart";
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/store/category";

interface Props {
  className?: string;
  title: string;
  items:any[];
  listClassName?: string;
  categoryId:number
}

export const ProductGroupList: React.FC<Props> = ({
                                                    className,
                                                    title,
                                                    items,
                                                    listClassName,
                                                    categoryId

                                                  }) => {
  const setActiveCategoryId = useCategoryStore((state)=>state.setActiveId)
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });

  React.useEffect(()=>{
    if(intersection?.isIntersecting){
      setActiveCategoryId(categoryId);
    }
  },[categoryId,intersection?.isIntersecting,title])
  return (
    <div className={cn('scroll-mt-[157px]', className)}
         id={title}
         ref={intersectionRef}>
      <Title text={title} size={'lg'} className='font-extrabold mb-5' />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((product, i) => (
          <ProductCart
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}

          />
        ))}
      </div>
    </div>
  );
};
