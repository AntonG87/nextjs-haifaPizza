import React from 'react';
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared";
import Image from 'next/image'
import {Button} from "@/components/ui";
import {ArrowRight, User} from 'lucide-react';
import {ShoppingCart} from "lucide-react";

interface Props {
  className: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border border-b', className)}>
      <Container className='flex items-center justify-between '>

        {/*Левая часть*/}
        <div className='flex items-center gap-4'>
          <Image src='/logo.png' alt='Logo' width={80} height={80}/>
          <div className=''>
            <h1 className='text-2xl uppercase font-black'>Haifa Pizza</h1>
            <p className='text-sm text-gray-400 leading-3'>Indulge in The Best Taste of Pizza</p>
          </div>
        </div>

        {/*Правая часть*/}
        <div className='flex items-center gap-3'>
          <Button variant='outline' className='flex items-center gap-3'>
            <User size={16} />
            Sign In
          </Button>

          <div>
            <Button className='group relative'>
              <b>140 ₪</b>
              <span className='h-full w-[2px] bg-white/40 mx-3'></span>
              <div className='flex  items-center gap-1 transition duration-300 group-hover:opacity-0'>
                <ShoppingCart className='h-4 w-4 relative'/>
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
