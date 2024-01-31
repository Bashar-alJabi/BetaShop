"use client"

import { CardContext } from "@/context/CardContext";
import { useContext, useRef } from "react";

const CardDropdown = () => {

    const { items, total } = useContext(CardContext);

    const itemsRef = useRef<HTMLSpanElement>(null);
    const totalRef = useRef<HTMLSpanElement>(null);

    return (
        <>
            <span className="font-bold text-lg" ref={itemsRef}>{items} Items</span>
            <span className="text-info" ref={totalRef}>Subtotal: ${total}</span>
        </>
    )
}

export default CardDropdown;