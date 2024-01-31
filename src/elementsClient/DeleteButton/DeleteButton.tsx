"use client";

import { CardContext } from "@/context/CardContext";
import { useContext } from "react";

interface DeleteButtonProps {
	style: string;
}

const DeleteButton = ({style}: DeleteButtonProps) => {

	const { clear } = useContext(CardContext);

	return (
		<button className={style} onClick={clear}>Delete All</button>
	);
};

export default DeleteButton;