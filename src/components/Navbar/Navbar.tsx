import Link from "next/link";
import { links } from "./data";

interface NavLinks {
    id: number, url: string, title: string,
}

const Navbar = () => {

    const navLinks: NavLinks[] = links;

	return (
        <div className="navbar flex justify-center items-center relative z-40">
            <div className="navbar-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                        {navLinks.map(link => <li key={link.id}><Link href={link.url}>{link.title}</Link></li>)}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden sm:flex">
                <ul className="menu menu-horizontal gap-1">
                    {navLinks.map(link => <li key={link.id}><Link href={link.url}>{link.title}</Link></li>)}
                </ul>
            </div>
        </div>
	);
}

export default Navbar;