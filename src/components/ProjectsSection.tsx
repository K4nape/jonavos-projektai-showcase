import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ginetasLogo from "@/assets/ginetas-logo.png";

import bridgeImg from "@/assets/project-bridge.jpg";
import floodImg from "@/assets/project-flood.jpg";
import parkingImg from "@/assets/project-parking.jpg";
import trafficImg from "@/assets/project-traffic.jpg";
import airqualityImg from "@/assets/project-airquality.jpg";

const projects = [
  {
    title: "Tilto apšvietimo valdymas",
    description:
      "Išmanioji LED apšvietimo sistema leidžia nuotoliniu būdu valdyti tilto apšvietimą, keisti spalvas pagal renginius ir optimizuoti energijos suvartojimą.",
    image: bridgeImg,
    status: "active" as const,
    statusLabel: "Veikia",
    link: "https://jonava.lt",
    stats: [
      { label: "Energijos taupymas", value: "40%" },
      { label: "LED taškai", value: "320" },
    ],
  },
  {
    title: "Potvynio rizikos vertinimas",
    description:
      "Realaus laiko vandens lygio stebėsenos sistema su automatiniais perspėjimais gyventojams ir tarnyboms apie galimą potvynio grėsmę.",
    image: floodImg,
    status: "active" as const,
    statusLabel: "Veikia",
    link: "https://jonava.lt",
    stats: [
      { label: "Jutikliai", value: "12" },
      { label: "Perspėjimai", value: "< 5 min" },
    ],
  },
  {
    title: "Išmanioji stovėjimo aikštelė",
    description:
      "Laisvų vietų rodymui skirta sistema su jutikliais kiekvienoje vietoje ir realaus laiko informacijos atvaizdavimas programėlėje bei informaciniuose ekranuose.",
    image: parkingImg,
    status: "progress" as const,
    statusLabel: "Kuriama",
    stats: [
      { label: "Vietos", value: "150" },
      { label: "Užimtumas", value: "Real-time" },
    ],
  },
  {
    title: "Eismo stebėjimo sistema",
    description:
      "Intelektuali transporto srautų analizės sistema, padedanti optimizuoti šviesoforų ciklus ir mažinti spūstis pagrindinėse miesto gatvėse.",
    image: trafficImg,
    status: "progress" as const,
    statusLabel: "Kuriama",
    stats: [
      { label: "Kameros", value: "24" },
      { label: "Sankryžos", value: "8" },
    ],
  },
  {
    title: "Oro kokybės monitoringas",
    description:
      "Aplinkos stebėsenos stočių tinklas, matuojantis oro kokybę, triukšmo lygį ir kitus aplinkos parametrus realiuoju laiku.",
    image: airqualityImg,
    status: "planned" as const,
    statusLabel: "Planuojama",
    stats: [
      { label: "Stotys", value: "6" },
      { label: "Parametrai", value: "8" },
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section className="relative px-6 py-24 md:px-12 lg:px-24">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
          Mūsų darbai
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
          Projektai Jonavoje
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Kiekvienas projektas — žingsnis link protingesnio ir patogesnio miesto
        </p>
        <div className="mx-auto mt-8 w-24 line-glow" />
      </motion.div>

      {/* Project cards */}
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} {...project} index={i} />
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-24 text-center"
      >
        <div className="mx-auto w-24 line-glow mb-8" />
        <p className="text-sm text-muted-foreground">
          © 2024 Jonava · Išmanaus miesto projektai
        </p>
        <a
          href="https://ginetas.lt"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground/60 transition-colors hover:text-primary"
        >
          <img src={ginetasLogo} alt="Ginetas" className="h-4 w-4 object-contain opacity-50 transition-opacity group-hover:opacity-100" />
          Sukūrė ginetas.lt
        </a>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
