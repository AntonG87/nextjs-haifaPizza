import type {Metadata} from "next";
import {Container, Filters,Title,TopBar,ProductGroupList} from "@/shared/components/shared";

import {prisma} from "@/prisma/prisma-client";

export const metadata: Metadata = {
  title: "Haifa Pizza",
  description: "The best taste of pizza in Haifa",
};

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true
        },
      },
    },
  });



  return (
      <>
        <Container className='mt-10'>
          <Title text='All Pizzas' size='lg' className='font-extrabold' ></Title>
        </Container>

        <TopBar className={""} categories={categories.filter(
          (category)=> category.products.length > 0)} />

        <Container className='pb-14 mt-10 mt-[80px]'>
          {/*левая часть*/}
         <div className='flex gap-[80px]'>
           {/*фильтрация*/}
           <div className='w-[250px]'>
             <Filters className={""} />
           </div>


          {/* правая часть*/}
          {/*Список пицц*/}

          <div className="flex-1">
            <div className="flex flex-col gap-16  ">
              {
                categories.map(category => (
                  category.products.length > 0 &&
                  <ProductGroupList
                    key={category.id}
                    categoryId={category.id}
                    title={category.name}
                    items={category.products}
                  />
                ))
              }
            </div>
          </div>
         </div>

        </Container>
      </>
  );
}
