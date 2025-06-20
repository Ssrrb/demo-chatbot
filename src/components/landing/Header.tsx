import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const navItems = [
    { label: 'Reservar', href: '#features' },
    { label: 'Chat', href: '#pricing' },
    { label: 'Contactanos', href: '#docs' },
];

export default function Header() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#2c3135] px-4 md:px-10 py-3 bg-background">
            {/* Left: Logo and Title, and Mobile Nav Trigger */}
            <div className="flex items-center gap-2 min-w-0">
                {/* Mobile Nav Trigger */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-white">
                                <AlignJustify size={22} />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-64 max-w-full h-full p-6 bg-background border-r shadow-lg">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="size-6 text-primary">
                                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <span className="text-lg font-bold tracking-tight text-primary">SoftShop IA</span>
                            </div>
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="py-2.5 px-3.5 rounded-md hover:bg-accent transition-colors flex items-center font-medium text-foreground"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                            <Button className="mt-8 w-full rounded-full bg-[#dce8f3] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] min-w-[84px]">
                                Probar Demo
                            </Button>
                        </SheetContent>
                    </Sheet>
                </div>
                {/* Logo and Title (always visible) */}
                <div className="flex items-center gap-2 min-w-0">
                    <div className="size-4 text-white">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <span className="text-white text-lg font-bold leading-tight tracking-[-0.015em] truncate">SoftShop IA</span>
                </div>
            </div>
            {/* Center: Nav links (desktop only) */}
            <nav className="hidden md:flex flex-1 justify-center items-center gap-6 md:gap-9">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
            {/* Right: Probar Demo button and UserButton (desktop only) */}
            <div className="hidden md:flex items-center gap-4">
                <Button className="rounded-full h-10 px-4 bg-[#dce8f3] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] min-w-[84px]" size="lg">
                    <span className="truncate">Probar Demo</span>
                </Button>
                <UserButton afterSignOutUrl="/sign-up" />
            </div>
            {/* Mobile: Probar Demo button (right) */}
            <div className="flex flex-1 justify-end md:hidden items-center gap-4">
                <Button className="rounded-full h-10 px-4 bg-[#dce8f3] text-[#121416] text-sm font-bold leading-normal tracking-[0.015em] min-w-[84px]" size="lg">
                    <span className="truncate">Probar Demo</span>
                </Button>

                <UserButton afterSignOutUrl="/sign-up" />
            </div>
        </header>
    );
}
