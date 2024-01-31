import Button from "@/components/Button/Button";
import BuyButton from "@/elementsClient/BuyButton/BuyButton";
import Image from "next/image";

interface Products {
    id: number; title: string; image: string; description: string; price: number; rating: { rate: number; };
}

export const metadata = {
	title: "Betashop - Products",
	description: "Products page",
};

async function getDate() {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Products() {

    const data = await getDate();
    const products: Products[] = data;

    return (
        <div className='flex flex-wrap gap-4 w-fit justify-center items-center'>
            {products.map(product => (
                <div key={product.id}>
                    <div className="card grow w-80 bg-base-100 shadow-xl relative top-0 hover:-top-3 transition-all duration-300">
                        <figure className="relative h-40">
                            <Image src={product.image} className="w-full h-full object-cover" fill={true} sizes="100%" priority={true} alt={product.title}/>
                            <span className='absolute top-0 left-0 py-1 px-2 bg-stone-200 text-black rounded-br-md'>{`${product.rating.rate}⭐`}</span>
                            <span className='absolute top-0 right-0 py-1 px-2 bg-stone-200 text-black rounded-bl-md'>{`${product.price}$`}</span>
                        </figure>
                        <div className="card-body">
                            <h2 className="text-ellipsis whitespace-nowrap overflow-hidden text-xl font-bold">{product.title}</h2>
                            <p className="text-ellipsis whitespace-nowrap overflow-hidden">{product.description}</p>
                            <div className="flex justify-between items-center">
                                <Button href={`/products/${product.id}`} title="Details" style="card-actions justify-start p-3"/>
                                <BuyButton price={product.price} style="card-actions justify-end" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}