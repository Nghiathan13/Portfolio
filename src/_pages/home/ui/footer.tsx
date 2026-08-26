"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Facebook, Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { site } from "@/shared/config";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {site.name}. {t("footer.copyright")}
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: site.github, label: "GitHub" },
            { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
            { icon: Facebook, href: site.facebook, label: "Facebook" },
            { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              </TooltipTrigger>
              <TooltipContent>{label}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </footer>
  );
}
