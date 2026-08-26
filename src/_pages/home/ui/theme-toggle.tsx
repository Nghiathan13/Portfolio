"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="size-8 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors inline-flex items-center justify-center"
          aria-label="Toggle theme"
        >
          <span className="inline-flex size-4 items-center justify-center">
            {mounted ? isDark ? <Moon size={16} /> : <Sun size={16} /> : null}
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        {mounted
          ? isDark
            ? t("nav.theme.light")
            : t("nav.theme.dark")
          : t("nav.theme.dark")}
      </TooltipContent>
    </Tooltip>
  );
}
