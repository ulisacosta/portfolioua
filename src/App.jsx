import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
  GitFork,
  Terminal,
  Cpu,
  Zap,
  Layers,
  Braces,
  Server,
  CloudLightning,
  Rocket,
  User,
  Languages,
} from "lucide-react";
import { motion } from "framer-motion"; // <-- Importación corregida para JSX
import { LanguageProvider, useTranslation } from "./i18n";
import { LanguageToggle } from "./components/LanguageToggle";
import {
  ScrollFadeIn,
  ScrollScaleIn,
  ScrollStagger,
  ScrollParallax,
} from "./components/ScrollAnimations";

function PortfolioContent() {
  const { t } = useTranslation();
  const technologies = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Express",
    "MySQL",
    "Git",
    "REST APIs",
    "Responsive Design",
    "Docker",
    
  ];

  const projects = [
    {
      titleKey: "projects.web-system.title",
      descriptionKey: "projects.web-system.desc",
      media:
        "https://res.cloudinary.com/dphsynf6f/video/upload/v1757168609/PORTFOLIO2/presentaciongalco_nstatn.mp4",
      type: "video",
      demo:"https://res.cloudinary.com/dphsynf6f/video/upload/v1757168609/PORTFOLIO2/presentaciongalco_nstatn.mp4",
        tech: ["React", "Node.js", "MySQL"],
    },
    {
      titleKey: "projects.wallets.title",
      descriptionKey: "projects.wallets.desc",
      media:
        "https://res.cloudinary.com/dphsynf6f/video/upload/v1757343666/PORTFOLIO2/gastosapp_x9pbta.mp4",
      tech: ["React", "Tailwind", "APIs"],
      type: "video",
      github: "https://github.com/ulisacosta/gastosapp",
      demo: "https://res.cloudinary.com/dphsynf6f/video/upload/v1757343666/PORTFOLIO2/gastosapp_x9pbta.mp4",
    },
    {
      titleKey: "projects.stock.title",
      descriptionKey: "projects.stock.desc",
      media:"https://res.cloudinary.com/dphsynf6f/video/upload/v1757093200/PORTFOLIO2/PUNTOVENTA_hho1td.mp4",
      type: "video",
      tech: ["React", "Express", "MySQL", "Tailwind"],
      demo: "https://res.cloudinary.com/dphsynf6f/video/upload/v1757093200/PORTFOLIO2/PUNTOVENTA_hho1td.mp4",
    },
    {
      titleKey: "projects.draganddrop.title",
      descriptionKey: "projects.draganddrop.desc",
      image: "https://res.cloudinary.com/dphsynf6f/image/upload/v1757348671/PORTFOLIO2/draganddrop_grzbrn.jpg",
      type: "image",
      tech: ["JS", "HTML", "CSS",'NodeJS'],
      github: "https://github.com/ulisacosta/imgDragAndDrop",
      demo: "https://draganddropau.onrender.com/",
    },
    {
      titleKey: "projects.movies.title",
      descriptionKey: "projects.movies.desc",
      image: "https://res.cloudinary.com/dphsynf6f/image/upload/v1757347902/PORTFOLIO2/moviesapp_tuno5x.png",
      type: "image",
      tech: ["JS", "APIs", "CSS"],
      github: "https://github.com/ulisacosta/movie-api-react",
      demo: "https://moviespopularapp.netlify.app/",
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Permite el carrusel infinito
    align: 'start',
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const services = [
    {
      icon: <Terminal className='w-8 h-8' />,
      titleKey: "services.fullstack.title",
      descriptionKey: "services.fullstack.desc",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Server className='w-8 h-8' />,
      titleKey: "services.backend.title",
      descriptionKey: "services.backend.desc",
      gradient: "from-purple-500 to-blue-500",
    },
    {
      icon: <CloudLightning className='w-8 h-8' />,
      titleKey: "services.cloud.title",
      descriptionKey: "services.cloud.desc",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      icon: <Cpu className='w-8 h-8' />,
      titleKey: "services.systems.title",
      descriptionKey: "services.systems.desc",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <div className='min-h-screen bg-background relative '>
      {/* Animated Background Grid */}
      <div className='fixed inset-0 tech-grid opacity-30 pointer-events-none' />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className='sticky top-0 z-50 w-full border-b tech-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
      >
        <div className='container mx-auto px-4 flex h-16 items-center justify-between'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className='font-medium flex items-center gap-2'
          >
            <Rocket className='w-5 h-5 text-primary' />
            Ulises Acosta
          </motion.div>
          <nav className='hidden md:flex items-center space-x-6'>
            <a
              href='#inicio'
              className='transition-all duration-300 hover:text-primary hover:glow relative group'
            >
              {t("nav.home")}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#servicios'
              className='transition-all duration-300 hover:text-primary hover:glow relative group'
            >
              {t("nav.services")}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#proyectos'
              className='transition-all duration-300 hover:text-primary hover:glow relative group'
            >
              {t("nav.projects")}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
            </a>
            <a
              href='#contacto'
              className='transition-all duration-300 hover:text-primary hover:glow relative group'
            >
              {t("nav.contact")}
              <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
            </a>
          </nav>
          <div className='flex items-center gap-3'>
            <LanguageToggle />

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className='tech-gradient border-0 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300'
              >
                <a href='mailto:ulisacosta@gmail.com'>
                  <Mail className='w-4 h-4 mr-2' />
                  {t("btn.contact-now")}
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        id='inicio'
        className='py-20 px-4 relative overflow-hidden'
      >
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className='absolute top-20 left-10 w-16 h-16 border tech-border rounded-lg flex items-center justify-center opacity-20'
        >
          <Code className='w-8 h-8 text-primary' />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className='absolute top-40 right-10 w-12 h-12 border tech-border rounded-full flex items-center justify-center opacity-20'
        >
          <Database className='w-6 h-6 text-cyan-400' />
        </motion.div>

        <div className='container mx-auto max-w-5xl text-center'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Badge
                variant='secondary'
                className='mb-6 tech-gradient text-white border-0 px-4 py-2'
              >
                <Zap className='w-4 h-4 mr-2' />
                {t("hero.available")}
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className='mb-6 text-4xl md:text-6xl lg:text-7xl'
            >
              {t("hero.greeting")}{" "}
              <motion.span
                className='bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent'
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Ulises Acosta
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className='mb-6 text-muted-foreground flex items-center justify-center gap-2 flex-wrap'
            >
              <Terminal className='w-5 h-5' />
              {t("hero.role")}
              <Layers className='w-5 h-5' />
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='mb-8 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed'
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center'
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size='lg'
                  asChild
                  className='tech-gradient border-0 hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300'
                >
                  <a href='mailto:ulisacosta@gmail.com'>
                    <Mail className='w-5 h-5 mr-2' />
                    {t("btn.contact-now")}
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant='outline'
                  size='lg'
                  asChild
                  className='tech-border hover:bg-primary/10 transition-all duration-300'
                >
                  <a href='#proyectos'>
                    <Braces className='w-5 h-5 mr-2' />
                    {t("hero.view-projects")}
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.65 }}
              className='mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground'
            >
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4 text-primary' />
                <span>{t("hero.email")}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Globe className='w-4 h-4 text-cyan-400' />
                <span>{t("hero.location")}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Zap className='w-4 h-4 text-purple-400' />
                <span>{t("hero.availability")}</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className='flex flex-wrap gap-3 justify-center mt-16'
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge
                  variant='outline'
                  className='tech-border hover:tech-glow transition-all duration-300 px-3 py-1'
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id='servicios'
        className='py-20 px-4 relative'
      >
        {/* Section Background Effect */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent' />

        <div className='container mx-auto max-w-6xl relative'>
          <ScrollFadeIn className='text-center mb-16'>
            <h2 className='mb-4 flex items-center justify-center gap-3'>
              <Cpu className='w-8 h-8 text-primary' />
              {t("services.title")}
              <Cpu className='w-8 h-8 text-primary' />
            </h2>
            <p className='text-muted-foreground max-w-3xl mx-auto text-lg'>
              {t("services.subtitle")}
            </p>
          </ScrollFadeIn>

          <ScrollStagger className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {services.map((service, index) => (
              <ScrollParallax key={index}>
                <Card className='text-center tech-border bg-card/50 backdrop-blur-sm hover:tech-glow transition-all duration-500 group relative overflow-hidden h-full'>
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <CardHeader className='relative'>
                    <motion.div
                      transition={{ duration: 0.6 }}
                      className='w-16 h-16 mx-auto mb-4 rounded-xl tech-border bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center text-primary group-hover:tech-glow'
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className='text-base group-hover:text-primary transition-colors'>
                      {t(service.titleKey)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className='relative'>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {t(service.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              </ScrollParallax>
            ))}
          </ScrollStagger>
        </div>
      </section>

      {/* Projects Section */}
        <section
        id='proyectos'
        className='py-20 px-4 relative'
      >
        <div className='container mx-auto max-w-6xl'>
          <ScrollFadeIn className='text-center mb-16'>
            <h2 className='mb-4 flex items-center justify-center gap-3'>
              <Braces className='w-8 h-8 text-primary' />
              {t("projects.title")}
            </h2>
            <p className='text-muted-foreground max-w-3xl mx-auto text-lg'>
              {t("projects.subtitle")}
            </p>
          </ScrollFadeIn>

          {/* Carrusel de Proyectos */}
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-4">
                {projects.map((project, index) => (
                  <div key={index} className="flex-none w-full sm:w-1/2 lg:w-1/3 px-4">
                    <ScrollScaleIn delay={index * 0.1}>
                      <Card className='overflow-hidden tech-border bg-card/50 backdrop-blur-sm hover:tech-glow transition-all duration-500 group h-full'>
                        <div className='aspect-video relative overflow-hidden'>
                          {project.type === "video" ? (
                            <video
                              src={project.media}
                              alt={t(project.titleKey)}
                              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                              autoPlay
                              loop
                              muted
                              playsInline
                            />
                          ) : (
                            <img
                              src={project.image}
                              alt={t(project.titleKey)}
                              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                            />
                          )}
                          <div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        </div>

                        <CardHeader>
                          <CardTitle className='text-base flex items-center gap-2 group-hover:text-primary transition-colors'>
                            <Terminal className='w-4 h-4' />
                            {t(project.titleKey)}
                          </CardTitle>
                          <CardDescription>
                            {t(project.descriptionKey)}
                          </CardDescription>
                        </CardHeader>

                        <CardContent>
                          <div className='flex flex-wrap gap-2 mb-4'>
                            {project.tech.map((tech) => (
                              <motion.div key={tech} whileHover={{ scale: 1.05 }}>
                                <Badge
                                  variant='secondary'
                                  className='text-xs tech-border bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300'
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                          <div className='flex gap-2'>
                            {project.github && (
                              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button asChild size="sm" variant="outline" className="w-full tech-border hover:bg-primary/10">
                                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4 mr-2" />
                                    {t('projects.btn.code')}
                                  </a>
                                </Button>
                              </motion.div>
                            )}
                            {project.demo && (
                              <motion.div className="flex-1" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button asChild size="sm" className="w-full tech-gradient border-0">
                                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    {t('projects.btn.demo')}
                                  </a>
                                </Button>
                              </motion.div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollScaleIn>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Botones de navegación */}
            <button 
              onClick={scrollPrev} 
              className="absolute top-1/2 -translate-y-1/2 -left-4 z-10 w-12 h-12 rounded-full tech-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left text-primary"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={scrollNext}   
              className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 w-12 h-12 rounded-full tech-border bg-background/50 backdrop-blur-sm flex items-center justify-center hover:bg-primary/10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right text-primary"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 px-4 relative'>
        {/* Background Pattern */}
        <div className='absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5' />

        <div className='container mx-auto max-w-5xl relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
            <ScrollFadeIn direction='left'>
              <h2 className='mb-8 flex items-center gap-3'>
                <User className='w-8 h-8 text-primary' />
                {t("about.title")}
              </h2>

              <div className='space-y-6'>
                <ScrollFadeIn delay={0.2}>
                  <p className='text-muted-foreground text-lg leading-relaxed'>
                    {t("about.p1")}
                  </p>
                </ScrollFadeIn>

                <ScrollFadeIn delay={0.3}>
                  <p className='text-muted-foreground text-lg leading-relaxed'>
                    {t("about.p2")}
                  </p>
                </ScrollFadeIn>

                {/* Tech Stats */}
                <ScrollFadeIn
                  delay={0.4}
                  className='grid grid-cols-3 gap-4 py-6'
                >
                  <div className='text-center'>
                    <div className='text-2xl text-primary mb-1'>10+</div>
                    <div className='text-sm text-muted-foreground'>
                      {t("about.stats.projects")}
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl text-cyan-400 mb-1'>2+</div>
                    <div className='text-sm text-muted-foreground'>
                      {t("about.stats.years")}
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-2xl text-purple-400 mb-1'>10+</div>
                    <div className='text-sm text-muted-foreground'>
                      {t("about.stats.tech")}
                    </div>
                  </div>
                </ScrollFadeIn>
              </div>

              <ScrollFadeIn
                delay={0.5}
                className='flex gap-4 mt-8'
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                      <a href="https://github.com/ulisacosta" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant='outline'
                    size='sm'
                    className='tech-border hover:tech-glow' 
                  >

                    <Github className='w-4 h-4 mr-2' />
                    GitHub
                  </Button>
                       </a>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                      <a href="https://www.linkedin.com/in/adolfo-ulises-martin-acosta/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant='outline'
                    size='sm'
                    className='tech-border hover:tech-glow'
                  >
                    <Linkedin className='w-4 h-4 mr-2' />
                    LinkedIn
                  </Button>
                  </a>
                </motion.div>
              </ScrollFadeIn>
            </ScrollFadeIn>

            <ScrollFadeIn
              direction='right'
              className='relative'
            >
              <div className='relative'>
                {/* Decorative elements */}
                <div className='absolute -top-4 -left-4 w-24 h-24 tech-border rounded-2xl opacity-30 rotate-12' />
                <div className='absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-cyan-500 rounded-xl opacity-20 -rotate-12' />

                <div className='aspect-square rounded-2xl overflow-hidden tech-border'>
                  <img
                    src='./src/assets/fotocvmejorada.png'
                    alt='Workspace'
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                  />
                  <div className='absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-cyan-500/20' />
                </div>

                {/* Floating tech icons */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className='absolute -top-2 -right-2 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center tech-border'
                >
                  <Code className='w-6 h-6 text-primary' />
                </motion.div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contacto'
        className='py-20 px-4 relative overflow-hidden'
      >
        {/* Background Effects */}
        <div className='absolute inset-0'>
          <div className='absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl' />
          <div className='absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl' />
        </div>

        <div className='container mx-auto max-w-5xl text-center relative'>
          <ScrollFadeIn>
            <h2 className='mb-6 flex items-center justify-center gap-3'>
              <GitFork className='w-8 h-8 text-primary' />
              {t("contact.title")}
            </h2>
            <p className='mb-12 text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed'>
              {t("contact.subtitle")}
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn
            delay={0.2}
            className='flex flex-col sm:flex-row gap-6 justify-center mb-16'
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size='lg'
                asChild
                className='tech-gradient border-0 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 px-8'
              >
                <a href='mailto:ulisacosta@gmail.com'>
                  <Mail className='w-5 h-5 mr-2' />
                  {t("contact.btn.email")}
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant='outline'
                size='lg'
                asChild
                className='tech-border hover:bg-primary/10 hover:tech-glow transition-all duration-300 px-8'
              >
                <a
                  href='https://www.linkedin.com/in/adolfo-ulises-martin-acosta/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin className='w-5 h-5 mr-2' />
                  {t("contact.btn.linkedin")}
                </a>
              </Button>
            </motion.div>
          </ScrollFadeIn>

          <ScrollStagger className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: <Mail className='w-8 h-8' />,
                titleKey: "contact.email",
                value: "ulisacosta@gmail.com",
                color: "text-primary",
              },
              {
                icon: <Globe className='w-8 h-8' />,
                titleKey: "contact.location",
                valueKey: "hero.location",
                color: "text-cyan-400",
              },
              {
                icon: <Zap className='w-8 h-8' />,
                titleKey: "contact.availability",
                valueKey: "contact.available",
                color: "text-purple-400",
              },
            ].map((item, index) => (
              <ScrollParallax
                key={index}
                offset={30}
              >
                <Card className='tech-border bg-card/30 backdrop-blur-sm hover:tech-glow transition-all duration-300 group h-full'>
                  <CardContent className='p-6 text-center'>
                    <div
                      className={`mx-auto mb-4 ${item.color} flex items-center justify-center`}
                    >
                      {item.icon}
                    </div>
                    <h3 className='mb-2 group-hover:text-primary transition-colors'>
                      {t(item.titleKey)}
                    </h3>
                    <p className='text-muted-foreground'>
                      {item.value || t(item.valueKey)}
                    </p>
                  </CardContent>
                </Card>
              </ScrollParallax>
            ))}
          </ScrollStagger>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t tech-border py-12 px-4 relative'>
        <div className='absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent' />

        <div className='container mx-auto max-w-6xl relative'>
          <ScrollFadeIn className=' flex flex-col md:flex-row justify-between items-center'>
            <ScrollFadeIn
              direction='left'
              className='mb-6 md:mb-0 flex items-center gap-3'
            >
              <Rocket className='w-6 h-6 text-primary' />
              <div>
                <p className='text-muted-foreground'>© 2025 Ulises Acosta</p>
                <p className='text-sm text-muted-foreground/70'>
                  {t("footer.role")}
                </p>
              </div>
            </ScrollFadeIn>

            <ScrollFadeIn
              direction='right'
              className='flex gap-3'
            >
              {[
                {
                  icon: <Github className='w-5 h-5' />,
                  link: "https://github.com/ulisacosta",
                  color: "hover:text-white",
                },
                {
                  icon: <Linkedin className='w-5 h-5' />,
                  link: "https://www.linkedin.com/in/adolfo-ulises-martin-acosta/",
                  color: "hover:text-blue-400",
                },
                {
                  icon: <Mail className='w-5 h-5' />,
                  link: "mailto:ulisacosta@gmail.com",
                  color: "hover:text-cyan-400",
                },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                     <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant='ghost'
                    size='sm'
                    className={`tech-border bg-card/30 backdrop-blur-sm hover:tech-glow transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </Button>
                  </a>
                </motion.div>
              ))}
            </ScrollFadeIn>
          </ScrollFadeIn>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
