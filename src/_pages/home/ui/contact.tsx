"use client";

import { motion } from "framer-motion";
import { Github, Mail, MapPin, Send } from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  SectionHeader,
  Separator,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/ui";
import { fadeUp, stagger } from "@/shared/lib";
import { useI18n } from "@/shared/i18n";

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("contact.label")}
          title={t("contact.title")}
          description={t("contact.description")}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} custom={0} className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              {t("contact.intro")}
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: t("contact.email.label"),
                  value: t("contact.email.value"),
                  href: `mailto:${t("contact.email.value")}`,
                },
                {
                  icon: MapPin,
                  label: t("contact.location.label"),
                  value: t("contact.location.value"),
                  href: "#",
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-emerald-500/50 hover:bg-accent transition-all group"
                >
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon size={20} className="text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">
                {t("contact.find_me")}
              </span>
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/Nghiathan13" },
              ].map(({ icon: Icon, label, href }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <a
                      href={href}
                      className="p-2 rounded-lg border border-border hover:border-emerald-500/50 hover:bg-accent transition-all"
                      aria-label={label}
                    >
                      <Icon size={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("contact.form.name.placeholder")}
                      className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("contact.form.email.placeholder")}
                      className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t("contact.form.subject")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.form.subject.placeholder")}
                    className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    rows={5}
                    placeholder={t("contact.form.message.placeholder")}
                    className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                  />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                  <Send size={16} className="mr-2" />
                  {t("contact.form.submit")}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
