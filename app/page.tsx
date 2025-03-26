import type {Metadata} from "next";
import {Container, Filters,Title,TopBar} from "@/components/shared";
import {ProductCart} from "@/components/shared/product-cart";
import {ProductGroupList} from "@/components/shared/products-group-list";


export const metadata: Metadata = {
  title: "Haifa Pizza",
  description: "The best taste of pizza in Haifa",
};



export default function Home() {
  return (
      <>
        <Container className='mt-10'>
          <Title text='All Pizzas' size='lg' className='font-extrabold' ></Title>
        </Container>

        <TopBar className={""}/>

        <Container className='pb-14 mt-10'>
          {/*левая часть*/}
         <div className='flex gap-[80px]'>
           {/*фильтрация*/}
           <div className='w-[250px]'>
             <Filters className={""} />
           </div>


          {/* правая часть*/}
          {/*Список пицц*/}

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList title='Pizzas'
               items={[
                {
                  id: 1,
                  name:'Мясная ',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6108e3a1c9952cd3a7f39a4d02.avif',
                  price: 119,
                  items: [{price: 550}]
                },
                {
                  id: 2,
                  name:'Чоризо фреш',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif',
                  price: 99,
                  items: [{price: 550}]
                },
                {
                  id: 3,
                  name:'Ветчина и сыр',
                  imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d60fda22358ac33c6a44eb093a2.avif',
                  price: 110,
                  items: [{price: 550}]
                },{
                   id: 4,
                   name:'Мясная ',
                   imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6108e3a1c9952cd3a7f39a4d02.avif',
                   price: 119,
                   items: [{price: 550}]
                 },
                 {
                   id: 5,
                   name:'Чоризо фреш',
                   imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif',
                   price: 99,
                   items: [{price: 550}]
                 },
                 {
                   id: 6,
                   name:'Ветчина и сыр',
                   imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d60fda22358ac33c6a44eb093a2.avif',
                   price: 110,
                   items: [{price: 550}]
                 },

              ]}
               categoryId={1}/>
              <ProductGroupList title='Combos'
                                items={[
                                  {
                                    id: 1,
                                    name:'Мясная ',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d6108e3a1c9952cd3a7f39a4d02.avif',
                                    price: 119,
                                    items: [{price: 550}]
                                  },
                                  {
                                    id: 2,
                                    name:'Чоризо фреш',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif',
                                    price: 99,
                                    items: [{price: 550}]
                                  },
                                  {
                                    id: 3,
                                    name:'Ветчина и сыр',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d60fda22358ac33c6a44eb093a2.avif',
                                    price: 110,
                                    items: [{price: 550}]
                                  },
                                  {
                                    id: 4,
                                    name:'Чоризо фреш',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d61706d472f9a5d71eb94149304.avif',
                                    price: 99,
                                    items: [{price: 550}]
                                  },
                                  {
                                    id: 5,
                                    name:'Ветчина и сыр',
                                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ee7d60fda22358ac33c6a44eb093a2.avif',
                                    price: 110,
                                    items: [{price: 550}]
                                  },
                                ]}
                                categoryId={2}/>
            </div>
          </div>
         </div>

        </Container>
      </>
  );
}
