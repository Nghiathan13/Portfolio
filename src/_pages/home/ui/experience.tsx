"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Badge, Card, CardContent, SectionHeader } from "@/shared/ui";
import { fadeUp, stagger } from "@/shared/lib";
import { useI18n } from "@/shared/i18n";
import { EDUCATION, EXPERIENCES } from "../model/experience";

export function Experience() {
  const { t } = useI18n();
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("experience.label")}
          title={t("experience.title")}
          description={t("experience.description")}
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {EXPERIENCES.length > 0 ? (
          <div className="lg:col-span-2">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3
                variants={fadeUp}
                custom={0}
                className="text-lg font-semibold flex items-center gap-2"
              >
                <Briefcase size={20} className="text-emerald-500" />
                {t("experience.work")}
              </motion.h3>

              <div className="relative pl-6 border-l-2 border-emerald-500/20 space-y-8">
                {EXPERIENCES.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i + 1}
                    className="relative"
                  >
                    <div className="absolute -left-[calc(0.75rem+1px+4px)] top-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-background" />
                    <Card className="hover:border-emerald-500/30 transition-colors">
                      <CardContent className="p-5">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                          <h4 className="font-semibold">{t(exp.roleKey)}</h4>
                          <span className="text-sm text-muted-foreground">
                            {t(exp.periodKey)}
                          </span>
                        </div>
                        <p className="text-sm text-emerald-500 font-medium mb-3">
                          {t(exp.companyKey)}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                          {t(exp.descriptionKey)}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          ) : null}

          <div className={EXPERIENCES.length > 0 ? "" : "lg:col-span-3 max-w-xl"}>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.h3
                variants={fadeUp}
                custom={0}
                className="text-lg font-semibold flex items-center gap-2"
              >
                <GraduationCap size={20} className="text-teal-500" />
                {t("experience.education")}
              </motion.h3>

              <div className="relative pl-6 border-l-2 border-teal-500/20 space-y-6">
                {EDUCATION.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i + 1}
                    className="relative"
                  >
                    <div className="absolute -left-[calc(0.75rem+1px+4px)] top-1 w-3 h-3 rounded-full bg-teal-500 border-2 border-background" />
                    <Card className="hover:border-teal-500/30 transition-colors">
                      <CardContent className="p-5">
                        <h4 className="font-semibold">{t(edu.degreeKey)}</h4>
                        <p className="text-sm text-teal-500 font-medium mt-1">
                          {t(edu.schoolKey)}
                        </p>
                        {edu.periodKey ? (
                          <p className="text-xs text-muted-foreground mt-2">
                            {t(edu.periodKey)}
                          </p>
                        ) : null}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
