import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";
import jonavaLogo from "@/assets/jonava-logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />
      <div className="absolute inset-0 bg-background/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Logo area */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex items-center gap-4"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-secondary/80 backdrop-blur-sm">
            <img src={jonavaLogo} alt="Jonava" className="h-9 w-9 object-contain" />
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex flex-col items-start">
            <span className="font-display text-sm font-semibold tracking-wider text-foreground uppercase">
              Jonava
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">
              Išmanusis miestas
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl"
        >
          Išmanūs sprendimai{" "}
          <span className="text-primary text-glow">Jonavai</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Kuriame modernias technologines sistemas, kurios padeda miestui veikti
          efektyviau, saugiau ir patogiau gyventojams.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex gap-12"
        >
          {[
            { value: "5+", label: "Projektai" },
            { value: "24/7", label: "Stebėsena" },
            { value: "2024", label: "Nuo metų" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-3xl font-bold text-primary">
                {stat.value}
              </span>
              <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            Projektai
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="h-6 w-4 rounded-full border border-muted-foreground/40 flex items-start justify-center pt-1"
          >
            <div className="h-1.5 w-1 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
