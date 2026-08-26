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
            { icon: Github, href: site.github, label: "GitHub", hover: "hover:text-[#181717] dark:hover:text-white" },
            { icon: Linkedin, href: site.linkedin, label: "LinkedIn", hover: "hover:text-[#0A66C2]" },
            { icon: Facebook, href: site.facebook, label: "Facebook", hover: "hover:text-[#1877F2]" },
            { icon: Mail, href: `mailto:${site.email}`, label: "Email", hover: "hover:text-emerald-500" },
          ].map(({ icon: Icon, href, label, hover }) => (
            <Tooltip key={label}>
              <TooltipTrigger asChild>
                <a
                  href={href}
                  className={`text-muted-foreground transition-colors ${hover}`}
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
