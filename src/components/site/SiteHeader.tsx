import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "The Story", href: "#story" },
  { label: "The Origin", href: "#origin" },
  { label: "The Craft", href: "#craft" },
  { label: "The Artisans", href: "#artisans" },
  { label: "Authenticity", href: "#authenticity" },
  { label: "Support", href: "#support" },
];

interface SiteHeaderProps {
  brandName?: string;
  navigation?: { label: string; href: string }[];
  previewMode?: boolean;
}

export function SiteHeader({
  brandName = "Discovering Roots",
  navigation = navItems,
  previewMode = false,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {previewMode && (
        <div
          role="status"
          className="fixed inset-x-0 top-0 z-[60] flex h-10 items-center justify-center gap-3 whitespace-nowrap bg-slate px-4 text-center text-xs text-paper"
        >
          <span>Draft preview</span>
          <a
            href="/api/preview/disable"
            className="font-semibold underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Return to published site
          </a>
        </div>
      )}
      <header
        className={`fixed inset-x-0 z-50 border-b border-border bg-paper/85 backdrop-blur-sm ${previewMode ? "top-10" : "top-0"}`}
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-xl tracking-wide">
            {brandName}
          </a>
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex gap-8">
              {navigation.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="eyebrow !text-foreground/80 transition-colors hover:!text-foreground"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            className="lg:hidden p-2"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-border bg-paper lg:hidden"
          >
            <ul className="flex flex-col px-5 py-4">
              {navigation.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
