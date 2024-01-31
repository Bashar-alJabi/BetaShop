"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext({mode: '', toggle: () => {}});

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {

    const [mode, setMode] = useState('forest');

    const toggle = () => {
        setMode(prev => prev === 'forest' ? 'cupcake' : 'forest');
    }

    return (
        <ThemeContext.Provider value={{mode, toggle}}>
            <div data-theme={mode} className="theme">
                {children}
            </div>
        </ThemeContext.Provider>
    )
}