"use client"

import { createContext, useState } from "react";

export const CardContext = createContext({items: 0, setItems: (items: React.SetStateAction<number>) => {}, total: 0, setTotal: (total: React.SetStateAction<number>) => {}, clear: () => {}});

export const CardProvider = ({children}: {children: React.ReactNode}) => {

    const [items, setItems] = useState(0);
    const [total, setTotal] = useState(0);

    const clear = () => {
        setItems(0);
        setTotal(0);
    }

    const values = {items, setItems, total, setTotal, clear}

    return (
        <CardContext.Provider value={values}>
            {children}
        </CardContext.Provider>
    )
}