"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  ChevronDown,
  Briefcase,
  GraduationCap,
  Award,
  Coffee,
  Moon,
  Sun,
  Menu,
  X,
  Layers,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useI18n } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/*  ANIMATION HELPERS                                                  */
/* ------------------------------------------------------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */
const TECH_STACK = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Git", slug: "git" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "GraphQL", slug: "graphql" },
];

const PROJECTS = [
  {
    titleKey: "projects.placeholder.title",
    titleArgs: { n: "1" },
    descriptionKey: "projects.placeholder.description",
    tags: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    titleKey: "projects.placeholder.title",
    titleArgs: { n: "2" },
    descriptionKey: "projects.placeholder.description",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    titleKey: "projects.placeholder.title",
    titleArgs: { n: "3" },
    descriptionKey: "projects.placeholder.description",
    tags: ["Python", "FastAPI", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    titleKey: "projects.placeholder.title",
    titleArgs: { n: "4" },
    descriptionKey: "projects.placeholder.description",
    tags: ["React", "GraphQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

const EXPERIENCES = [
  {
    roleKey: "experience.role",
    companyKey: "experience.company",
    periodKey: "experience.period",
    descriptionKey: "experience.work.description",
    tags: ["Tech 1", "Tech 2", "Tech 3"],
  },
  {
    roleKey: "experience.role",
    companyKey: "experience.company",
    periodKey: "experience.period.end",
    descriptionKey: "experience.work.description",
    tags: ["Tech 1", "Tech 2"],
  },
];

const EDUCATION = [
  {
    degreeKey: "experience.degree",
    schoolKey: "experience.school",
    periodKey: "experience.school.period",
  },
];

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                             */
/* ------------------------------------------------------------------ */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const { theme, setTheme } = useTheme();
  const { t, locale, toggleLocale } = useI18n();

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { key: "nav.about", id: "About" },
    { key: "nav.skills", id: "Skills" },
    { key: "nav.projects", id: "Projects" },
    { key: "nav.experience", id: "Experience" },
    { key: "nav.contact", id: "Contact" },
  ];

  // Track active section: scroll-position-based
  // Reference point = top of viewport + 30% viewport height
  // Active = last section whose top offset <= reference point
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id.toLowerCase());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const refY = window.scrollY + window.innerHeight * 0.3;
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= refY) {
          current = id;
        }
      }
      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
        >
          &lt;Tên của bạn /&gt;
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeId === link.id.toLowerCase();
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative h-8 px-3 text-sm font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {t(link.key)}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-emerald-500"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
          {/* Language toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleLocale}
                className="ml-1 size-8 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors inline-flex items-center justify-center"
                aria-label={t("nav.lang.tooltip")}
              >
                <span className="text-[11px] font-bold uppercase tracking-wide">
                  {locale}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent>{t("nav.lang.tooltip")}</TooltipContent>
          </Tooltip>
          {/* Theme toggle */}
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="size-8 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors inline-flex items-center justify-center"
                aria-label="Toggle theme"
              >
                <span suppressHydrationWarning>
                  {theme === "dark" ? (
                    <Moon size={16} />
                  ) : (
                    <Sun size={16} />
                  )}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span suppressHydrationWarning>
                {theme === "dark"
                  ? t("nav.theme.light")
                  : t("nav.theme.dark")}
              </span>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={toggleLocale}
                className="size-8 rounded-md hover:bg-accent text-muted-foreground inline-flex items-center justify-center"
                aria-label={t("nav.lang.tooltip")}
              >
                <span className="text-[11px] font-bold uppercase tracking-wide">
                  {locale}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent>{t("nav.lang.tooltip")}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="size-8 rounded-md hover:bg-accent text-muted-foreground inline-flex items-center justify-center"
                aria-label="Toggle theme"
              >
                <span suppressHydrationWarning>
                  {theme === "dark" ? (
                    <Moon size={16} />
                  ) : (
                    <Sun size={16} />
                  )}
                </span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span suppressHydrationWarning>
                {theme === "dark"
                  ? t("nav.theme.light")
                  : t("nav.theme.dark")}
              </span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="size-8 rounded-md hover:bg-accent inline-flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {mobileOpen ? t("nav.menu.close") : t("nav.menu.open")}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border"
        >
          <div className="px-4 py-3 flex flex-col">
            {navLinks.map((link) => {
              const isActive = activeId === link.id.toLowerCase();
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative h-8 px-3 text-sm font-medium text-left transition-colors duration-200 inline-flex items-center ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(link.key)}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-mobile"
                      className="absolute left-0 top-0.5 bottom-0.5 w-0.5 rounded-full bg-emerald-500"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */
function Hero() {
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
      {/* Background gradient orbs */}
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
            Tên của bạn
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
              { icon: Github, label: "GitHub", href: "#" },
              { icon: Linkedin, label: "LinkedIn", href: "#" },
              { icon: Mail, label: "Email", href: "#" },
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
                <TooltipContent>{label}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
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

/* ------------------------------------------------------------------ */
/*  ABOUT                                                              */
/* ------------------------------------------------------------------ */
function About() {
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
          {/* Avatar placeholder */}
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

          {/* Bio */}
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

/* ------------------------------------------------------------------ */
/*  SKILLS                                                             */
/* ------------------------------------------------------------------ */
function Skills() {
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

        {/* Skill bars */}
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

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */
function Projects() {
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
                {/* Project image placeholder */}
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <span className="text-muted-foreground/50 text-sm z-0">
                    {t("projects.image")}
                  </span>
                  {/* Hover overlay */}
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

/* ------------------------------------------------------------------ */
/*  EXPERIENCE                                                         */
/* ------------------------------------------------------------------ */
function Experience() {
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
          {/* Work experience */}
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

          {/* Education */}
          <div>
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
                        <p className="text-xs text-muted-foreground mt-2">
                          {t(edu.periodKey)}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Certificates placeholder */}
              <motion.h3
                variants={fadeUp}
                custom={3}
                className="text-lg font-semibold flex items-center gap-2 pt-4"
              >
                <Award size={20} className="text-cyan-500" />
                {t("experience.certificates")}
              </motion.h3>
              <motion.div variants={fadeUp} custom={4}>
                <Card className="border-dashed">
                  <CardContent className="p-5 text-center">
                    <p className="text-sm text-muted-foreground">
                      {t("experience.certificates.placeholder")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  CONTACT                                                            */
/* ------------------------------------------------------------------ */
function Contact() {
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
          {/* Contact info */}
          <motion.div
            variants={fadeUp}
            custom={0}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              {t("contact.intro")}
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: t("contact.email.label"),
                  value: t("contact.email.value"),
                  href: "mailto:email@example.com",
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
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
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

          {/* Contact form */}
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

/* ------------------------------------------------------------------ */
/*  FOOTER                                                             */
/* ------------------------------------------------------------------ */
function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tên của bạn. {t("footer.copyright")}
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#", label: "Email" },
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

/* ------------------------------------------------------------------ */
/*  SHARED                                                             */
/* ------------------------------------------------------------------ */
function SectionHeader({
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

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function PortfolioPage() {
  return (
    <TooltipProvider delayDuration={300}>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </TooltipProvider>
  );
}
