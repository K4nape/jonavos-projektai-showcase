import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  status: "active" | "progress" | "planned";
  statusLabel: string;
  index: number;
  stats?: { label: string; value: string }[];
}

const statusClasses: Record<string, string> = {
  active: "badge-status-active",
  progress: "badge-status-progress",
  planned: "badge-status",
};

const ProjectCard = ({
  title,
  description,
  image,
  status,
  statusLabel,
  index,
  stats,
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`flex flex-col gap-8 overflow-hidden rounded-2xl border border-border gradient-card transition-all duration-500 hover:border-primary/30 card-glow hover:card-glow-hover md:flex-row ${
          !isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="relative w-full overflow-hidden md:w-1/2">
          <div className="aspect-video md:aspect-auto md:h-full">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className={statusClasses[status]}>
              <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-glow" />
              {statusLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col justify-center p-6 md:w-1/2 md:p-10">
          <h3 className="font-display text-2xl font-bold text-foreground md:text-3xl">
            {title}
          </h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {description}
          </p>

          {stats && (
            <div className="mt-6 flex gap-6">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-xl font-bold text-primary">
                    {s.value}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 line-glow" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
