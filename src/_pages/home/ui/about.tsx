"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, Layers } from "lucide-react";
import { SectionHeader } from "@/shared/ui";
import { fadeUp, stagger } from "@/shared/lib";
import { useI18n } from "@/shared/i18n";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("about.label")}
          title={t("about.title")}
          description={t("about.description")}
        />

        <div className="grid md:grid-cols-5 gap-8 mt-12">
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-border flex items-center justify-center">
              <span className="text-6xl sm:text-7xl">👤</span>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3 space-y-4"
          >
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-muted-foreground leading-relaxed"
            >
              {t("about.p1")}
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-muted-foreground leading-relaxed"
            >
              {t("about.p2")}
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="text-muted-foreground leading-relaxed"
            >
              {t("about.p3")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap gap-3 pt-4"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Briefcase size={16} className="text-emerald-500" />
                <span className="text-sm font-medium">
                  X+ {t("about.years")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <Layers size={16} className="text-teal-500" />
                <span className="text-sm font-medium">
                  X+ {t("about.projects")}
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                <Award size={16} className="text-cyan-500" />
                <span className="text-sm font-medium">
                  X {t("about.certificates")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
