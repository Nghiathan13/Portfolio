"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ChevronDown,
  Coffee,
} from "lucide-react";
import { Button, Tooltip, TooltipContent, TooltipTrigger } from "@/shared/ui";
import { useI18n } from "@/shared/i18n";
import { site } from "@/shared/config";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useI18n();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium">
            <Coffee size={14} />
            <span>{t("hero.badge")}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          {t("hero.greeting")}{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Thân Minh Nghĩa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-3"
        >
          {t("hero.role")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
        >
          <MapPin size={16} />
          <span className="text-sm">{t("contact.location.value")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("hero.cta.projects")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("hero.cta.contact")}
          </Button>
          <div className="flex items-center gap-3 ml-2">
            {[
              { icon: Github, label: "GitHub", href: site.github },
              { icon: Linkedin, label: "LinkedIn", href: site.linkedin },
              { icon: Mail, label: "Email", href: `mailto:${site.email}` },
            ].map(({ icon: Icon, label, href }) => (
              <Tooltip key={label}>
                <TooltipTrigger asChild>
                  <a
                    href={href}
                    className="p-2.5 rounded-full border border-border hover:bg-accent hover:border-emerald-500/50 transition-all"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} className="text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
