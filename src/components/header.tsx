import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, GitBranch, Bot } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bot className="w-6 h-6 mr-2 text-black" />
            <span className="font-bold text-lg text-gray-900">IA SoftShop</span>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <a className="text-gray-600 hover:text-gray-900" href="#">
              Contacto
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-48 lg:w-64"
                placeholder="Search..."
                type="text"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="bg-gray-100 border border-gray-200 rounded px-2 py-1 text-xs font-sans">
                  ⌘K
                </kbd>
              </div>
            </div>
            <Button asChild className="hidden md:flex">
              <a href="#">
                <GitBranch className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Bot className="h-6 w-6" />
                    <span className="sr-only">IA SoftShop</span>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contacto
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
