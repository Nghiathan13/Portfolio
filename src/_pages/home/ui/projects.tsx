"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Badge, Card, CardContent, SectionHeader } from "@/shared/ui";
import { fadeUp, stagger } from "@/shared/lib";
import { useI18n } from "@/shared/i18n";
import { PROJECTS } from "../model/projects";

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t("projects.label")}
          title={t("projects.title")}
          description={t("projects.description")}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
          {PROJECTS.map((project, i) => (
            <motion.div key={i} variants={fadeUp} custom={i}>
              <Card className="group hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 h-full overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <span className="text-muted-foreground/50 text-sm z-0">
                    {t("projects.image")}
                  </span>
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center gap-3">
                    <a
                      href={project.liveUrl}
                      className="p-2.5 rounded-full bg-background/90 border border-border hover:bg-background transition-colors"
                      aria-label={t("projects.live")}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2.5 rounded-full bg-background/90 border border-border hover:bg-background transition-colors"
                      aria-label={t("projects.code")}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-500 transition-colors">
                    {t(project.titleKey).replace(
                      "{{n}}",
                      project.titleArgs?.n ?? ""
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(project.descriptionKey)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
        </motion.div>
      </div>
    </section>
  );
}
