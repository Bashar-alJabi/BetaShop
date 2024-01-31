"use client"

import { CardContext } from "@/context/CardContext";
import { useContext } from "react";
import styles from "./BuyButton.module.css";

interface BuyButtonProps {
    price: number; style: string;
};

const BuyButton = ({price, style}: BuyButtonProps) => {

    const { setItems, setTotal } = useContext(CardContext);

    const handleBuy = () => {
        setItems((prev: number) => prev + 1);
        setTotal((prev: number) => parseFloat((prev + price).toFixed(2)));
    }

    return (
        <button onClick={handleBuy} className={`${styles.button} ${style} p-3`}>Buy Now</button>
    )
}

export default BuyButton;