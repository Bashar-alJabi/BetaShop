import BuyButton from "@/elementsClient/BuyButton/BuyButton";
import Image from "next/image";

interface Product {
    id: number; title: string; description: string; category: string; price: number; rating: { rate: number; }; image: string; thumbnail: string; images: string[];
}

async function getData(id: number) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export async function generateMetadata({params}: {params: Product}) {
    const product = await getData(params.id);
    return {
        title: product.title,
        description: product.description,
    }
}

export default async function Post({params}: {params: Product}) {

    const product: Product = await getData(params.id);

    return (
        <div className="text-center sm:text-left">
            <header>
                <div>
                    <h1 className='text-4xl mb-3'>{product.title}</h1>
                    <p className='text-lg mb-3 opacity-80'>{product.description}</p>
                    <div className="flex justify-between items-center mb-3">
                        <p>Rating: {product.rating.rate}⭐</p>
                        <p>Price: {product.price}$</p>
                    </div>
                    <BuyButton price={product.price} style="my-1"/>
                </div>
                <div className='relative h-72 my-6'>
                    <Image src={product.image} className='object-cover rounded-2xl' fill={true} priority={true} alt={product.title} />
                    <span className='absolute bottom-0 right-0 py-1 px-2 rounded-tl-md bg-stone-200 text-black font-bold'>{product.category}</span>
                </div>
            </header>
            <div>
                <p className='text-base columns-2 text-justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis consequuntur cum aliquid ad veritatis exercitationem quibusdam culpa nisi consequatur sequi perferendis doloribus porro temporibus mollitia vero veniam quasi nulla pariatur nobis adipisci, debitis vitae sint odit. Illum officiis officia vitae itaque totam beatae minima eaque amet ipsa accusantium error et cum sint iusto dolore molestias ex nesciunt veniam eligendi provident, incidunt nemo. Sit eius, ea illum fuga laudantium animi saepe debitis suscipit at fugiat eaque eligendi dolorem repellat laborum, quos reprehenderit quas veniam natus soluta reiciendis libero doloribus explicabo. Odit, rem neque soluta provident vel molestias aperiam debitis animi expedita unde, ducimus deleniti vero exercitationem id necessitatibus eveniet excepturi eos accusamus enim. Sapiente incidunt quod earum tempora molestias, soluta voluptatem veniam natus nostrum molestiae temporibus iure dolorum harum saepe fugit reprehenderit officia excepturi dolor consectetur maxime quidem laudantium? Dignissimos dolorum aut quasi eos illum dolores aspernatur quas vitae consectetur! A, culpa. Libero eveniet maxime perferendis! Quae, at vel tenetur id, blanditiis cum obcaecati numquam quaerat culpa distinctio doloremque repudiandae reiciendis voluptatum iste quidem sint. Voluptatibus accusantium eius, non ut maiores suscipit at quisquam tenetur nulla totam ducimus nesciunt aut architecto odit velit nemo natus quas vero tempora repellendus culpa.
                </p>
            </div>
        </div>
    )
}