import Button from "@/components/Button/Button";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/images/hero.svg";

export const metadata = {
	title: "Betashop - About",
	description: "About page",
};

export default function About() {
    return (
        <div className='flex items-center gap-10 flex-col md:flex-row'>

            <div className='flex-1 flex flex-col gap-5 text-center sm:text-left'>
                <h1 className={styles.title}>Your Best Online Shop Destination!</h1>
                <p className='text-xl'>Discover a world of endless shopping possibilities at our online store. Browse, choose, and order your favorite products from the comfort of your home.</p>
                <Button href='/products' title='Shop Now' style='p-5 mx-auto sm:mx-0'/>
            </div>

            <Image src={Hero} priority={true} className="w-80 hidden md:block" alt="Betashop"/>

        </div>
    )
}