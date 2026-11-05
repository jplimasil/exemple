"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, PhoneCall, X } from "lucide-react";
import { Logo } from "./ui";

interface HeaderProps {
  businessName: string;
  phone: string;
  phoneHref: string;
  nav: { href: string; label: string }[];
}

export function Header({ businessName, phone, phoneHref, nav }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);

  // Close the menu on route change.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        scrolled || open ? "shadow-[0_1px_0_var(--color-line),0_10px_30px_-20px_rgb(10_31_68/0.4)]" : ""
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo name={businessName} />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative rounded-full px-4 py-2 font-semibold text-slate transition-colors hover:text-navy-900 aria-[current=page]:text-navy-900 aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-4 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:rounded-full aria-[current=page]:after:bg-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a href={phoneHref} className="group hidden items-center gap-3 xl:flex">
            <span className="flex size-11 items-center justify-center rounded-full bg-sky text-navy transition-colors group-hover:bg-gold">
              <PhoneCall className="size-5" aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <span className="block text-[0.8125rem] text-slate">Call anytime</span>
              <span className="block font-bold text-navy-900">{phone}</span>
            </span>
          </a>
          <Link href="/contact" className="btn btn-gold hidden min-h-12 px-6 md:inline-flex">
            Get a Free Quote
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-navy-900 transition-colors hover:bg-sky lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <nav id="mobile-menu" aria-label="Main" hidden={!open} className="border-t border-line bg-white lg:hidden">
        <ul className="container-page flex flex-col py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className="flex min-h-13 items-center border-b border-line/70 text-lg font-semibold text-navy-900 aria-[current=page]:text-navy-700"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="grid gap-3 pt-5 pb-3 sm:grid-cols-2">
            <Link href="/contact" className="btn btn-gold w-full">
              Get a Free Quote
            </Link>
            <a href={phoneHref} className="btn btn-ghost-dark w-full">
              <PhoneCall className="size-5" aria-hidden="true" />
              {phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
