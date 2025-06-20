"use client";

import React from "react";
import Link from "next/link";

// Link definitions for footer navigation
type NavLink = {
    href: string;
    label: string;
};

const NAV_LINKS: NavLink[] = [
    { href: "/terms", label: "Términos de Servicio" },
    { href: "/privacy", label: "Política de Privacidad" },
    { href: "/contact", label: "Contactanos" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-[var(--border-color)] bg-[var(--accent-color)]/30">
            <div className="mx-auto max-w-5xl px-5 py-10 text-center">
                <nav aria-label="Footer navigation" className="mb-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-normal leading-normal text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <p className="text-sm font-normal leading-normal text-[var(--text-secondary)]">
                    © {year} Equipo de IA SoftShop. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
}
