"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const Navbar = () => {
    const pathname = usePathname();

    const links = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ];

    return (
        <nav className="flex space-x-6 border-b-2 mb-5 px-5 h-14 items-center">
            <Link href="/">
                <AiFillBug />
            </Link>
            <ul className="flex space-x-6">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={classnames({
                                "text-zinc-900": link.href === pathname,
                                "text-zinc-500": link.href !== pathname,
                                "hover:text-zinc-800 transition-colors": true,
                            })}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
