import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
    href: string; title: string; style: string;
}

const Button = (props: ButtonProps) => {

	return (
        <Link href={props.href} className={`${styles.button} ${props.style}`}>{props.title}</Link>
	);
}

export default Button;