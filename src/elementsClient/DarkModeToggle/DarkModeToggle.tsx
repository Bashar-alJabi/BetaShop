"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const DarkModeToggle = () => {

	const { toggle } = useContext(ThemeContext);

	return (
		<input onClick={toggle} type="checkbox" className="theme-controller" value="synthwave" id="check" />
	);
}

export default DarkModeToggle