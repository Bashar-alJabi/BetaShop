"use client"

import { CardContext } from "@/context/CardContext";
import { useContext } from "react";

interface CounterProps {
    style: string;
}

const Counter = ({style}: CounterProps) => {

    const { items } = useContext(CardContext);

    return (
        <span className={style}>{items}</span>
    )
}

export default Counter;