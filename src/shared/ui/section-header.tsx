"use client";

import { motion } from "framer-motion";
import { Badge } from "./badge";
import { fadeUp } from "@/shared/lib";

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={0}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto"
    >
      <Badge
        variant="outline"
        className="mb-4 text-emerald-500 border-emerald-500/30"
      >
        {label}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
        {title}
      </h2>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}
