"use client";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { cn } from "@/shared/lib";
import { useI18n } from "@/shared/i18n";

export function LocaleToggle({ className }: { className?: string }) {
  const { t, locale, toggleLocale } = useI18n();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={toggleLocale}
          className={cn(
            "size-8 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors inline-flex items-center justify-center",
            className
          )}
          aria-label={t("nav.lang.tooltip")}
        >
          <span className="text-[11px] font-bold uppercase tracking-wide">
            {locale}
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent>{t("nav.lang.tooltip")}</TooltipContent>
    </Tooltip>
  );
}
