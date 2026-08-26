"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { ThemeToggle } from "./theme-toggle";
import { LocaleToggle } from "./locale-toggle";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { key: "nav.about", id: "About" },
    { key: "nav.skills", id: "Skills" },
    { key: "nav.projects", id: "Projects" },
    { key: "nav.experience", id: "Experience" },
    { key: "nav.contact", id: "Contact" },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id.toLowerCase());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const refY = window.scrollY + window.innerHeight * 0.3;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= refY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          &lt;Nghia /&gt;
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.id.toLowerCase();
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative h-8 px-3 text-sm font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {t(link.key)}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-emerald-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          <LocaleToggle className="ml-1" />
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="size-8 rounded-md hover:bg-accent inline-flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {mobileOpen ? t("nav.menu.close") : t("nav.menu.open")}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const isActive = activeId === link.id.toLowerCase();
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative h-8 px-3 text-sm font-medium text-left transition-colors duration-200 inline-flex items-center ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(link.key)}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-mobile"
                      className="absolute left-0 top-0.5 bottom-0.5 w-0.5 rounded-full bg-emerald-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
