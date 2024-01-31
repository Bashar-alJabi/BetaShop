import Button from "@/components/Button/Button";
import type { Metadata } from "next";
import Image, { StaticImageData } from "next/image";
import { images } from "./data";

interface Images {
    id: number, src: StaticImageData, slides: string[],
}

export const metadata: Metadata = {
	title: "Betashop - Home",
	description: "Home page",
};

export default function Home() {

    const imgs: Images[] = images;

    return (
        <>
            <div className="carousel w-full h-96 rounded-xl">
                {imgs.map(image =>
                    <div key={image.id} id={image.slides[0]} className="carousel-item relative w-full h-full rounded-xl">
                        <div className="absolute w-full h-full bg-black bg-opacity-70 z-10"></div>
                        <Image src={image.src} priority={true} className="absolute w-full h-full z-0 object-cover" alt="HomeImg" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-30">
                            <a href={`#${image.slides[1]}`} className="btn btn-circle">❮</a>
                            <a href={`#${image.slides[2]}`} className="btn btn-circle">❯</a>
                        </div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 sm:left-1/3 flex flex-col items-end gap-5 z-20">
                            <div className="text-3xl md:text-5xl lg:text-7xl text-white text-end uppercase font-bold">
                                <p>Autumn</p>
                                <p>2024</p>
                            </div>
                            <Button href='/products' title='Shop Now' style='text-sm p-2 sm:text-md sm:p-3 md:text-1xl md:p-4 lg:text-2xl lg:p-5 '/>
                        </div>
                    </div>
                    )
                }
            </div>
        </>
    )
}