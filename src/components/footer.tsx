"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  VercelLogoIcon,
  SunIcon,
  MoonIcon,
  DesktopIcon,
} from "@radix-ui/react-icons";

export function Footer() {
  const { setTheme } = useTheme();

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <VercelLogoIcon className="h-7 w-24 text-black dark:text-white" />
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">
              Resources
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  href="#"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  href="#"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">
              SoftShop
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  href="#"
                >
                  Acerca
                </a>
              </li>
              <li>
                <a
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  href="#"
                >
                  Open source
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">
              Legal
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  href="#"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
