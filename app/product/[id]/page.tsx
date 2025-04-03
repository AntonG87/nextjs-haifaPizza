import { prisma } from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductImage, Title} from "@/components/shared";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product= await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  // Проверка: если продукт не найден
  if (!product) {
    return notFound();
  }

  return (
    <Container className={'flex flex-col my-10'}>
      <div className={'flex flex-1x'}>
        <ProductImage
          size={30}
          imageUrl={product.imageUrl}/>
        <div className={'w-[490px] bg-[#FCFCFC] p-7'}>
          <Title text={product.name} size='md' className={'font-extrabold mb-1'}/>
          <p className={'text-gray-400'}>
            Contrary to popular belief, Lorem Ipsum is not
            simply random text.</p>

        </div>
      </div>

    </Container>
  );
}
