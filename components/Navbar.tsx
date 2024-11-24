"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Clients", href: "/clients" },
  { name: "About Us", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname(); // Get the current route

  return (
    <Disclosure
      as="nav"
      className="bg-black/20 backdrop-blur-sm fixed top-0 left-0 w-full z-30"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo and "EMBERWAVE" (Left) */}
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/singlenobg.png"
                  alt="Logo"
                  width={35}
                  height={35}
                  className="h-auto w-auto"
                />
                <span className="text-white/20 text-sm tracking-widest uppercase font-bold">
                  EmberWave
                </span>
              </div>

              {/* Navigation Links (Right-Aligned) */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-6 justify-end">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "text-orange-400" // Active link color
                          : "text-white/80 hover:text-orange-400", // Default and hover color
                        "text-sm tracking-wider uppercase font-bold"
                      )}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-highlight">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? "text-orange-400" // Active link color
                      : "text-white/20 hover:text-orange-400", // Default and hover color
                    "block text-base font-bold tracking-wider uppercase"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
