"use client";

import { motion } from "framer-motion";
import { Card, CardContent, SectionHeader } from "@/shared/ui";
import { fadeUp, stagger } from "@/shared/lib";
import { useI18n } from "@/shared/i18n";
import { TECH_STACK } from "../model/tech-stack";

export function Skills() {
  const { t } = useI18n();
  const skillBars = [
    { name: t("skills.frontend"), level: 90 },
    { name: t("skills.backend"), level: 85 },
    { name: t("skills.database"), level: 80 },
    { name: t("skills.devops"), level: 70 },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("skills.label")}
          title={t("skills.title")}
          description={t("skills.description")}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12"
        >
          {TECH_STACK.map((tech, i) => (
            <motion.div key={tech.name} variants={fadeUp} custom={i}>
              <Card className="group hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 cursor-default h-full">
                <CardContent className="p-4 flex flex-col items-center gap-3 text-center">
                  <div className="p-3 rounded-xl bg-muted group-hover:bg-accent transition-colors">
                    <img
                      src={`https://cdn.simpleicons.org/${tech.slug}`}
                      alt={tech.name}
                      width={28}
                      height={28}
                      className="grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-medium">{tech.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-2 gap-6"
        >
          {skillBars.map((skill, i) => (
            <motion.div key={skill.name} variants={fadeUp} custom={i}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
