import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "MedzLegal — Corporate Healthcare-Legal Website",
    description:
      "Developed a professional corporate website focused on responsive design, structured service presentation, and performance optimization for the healthcare-legal industry. Worked on frontend customization, responsive layouts, UI enhancements, and interactive sections using WordPress, HTML, CSS, JavaScript, and Bootstrap. Improved website usability, responsiveness, and loading performance across desktop, tablet, and mobile devices.",
    image: "/projects/project-1.png",
    tags: ["Html", "Css", "Javascript", "WordPress", "Responsive Design"],
    link: "https://medzlegal.co/",
    github: "#",
  },
  {
    title: "DMK ICF Labour Union App — Member Communication Platform",
    description:
      "Contributed to an AI-assisted mobile application designed for labour union communication and member information management. Worked on UI structuring, responsive interface handling, feature integration, and frontend workflow improvements while gaining exposure to Supabase integration and modern application development practices.",
    image: "/projects/project4.png",
    tags: ["Flutter", "AI-Assisted Development", "Mobile UI", "Supabase"],
    link: "#",
    github: "#",
  },
  {
    title: "Laya Initiatives — Environmental & Volunteering Platform",
    description:
      "Built a responsive and visually engaging website for an environmental initiative focused on volunteering and social impact activities. Contributed to responsive UI implementation, layout structuring, frontend optimization, and user experience improvements to ensure seamless accessibility and smooth interaction across devices.",
    image: "/projects/project-2.png",
    tags: ["Html", "Css", "Javascript", "WordPress", "Responsive Testing"],
    link: "https://layainitiatives.com/",
    github: "#",
  },
  {
    title: "UI/UX Designer Portfolio Website",
    description:
      "Designed and developed a modern portfolio website for a UI/UX Designer client focused on visual storytelling, user experience, responsive interface design, and smooth user interaction. Created clean layouts, modern typography, interactive sections, and animation-driven experiences to showcase the client’s design work in a visually engaging and professional manner.",
    image: "/projects/project-3.png",
    tags: ["React.js", "JavaScript", "Tailwind Css", "Responsive Design"],
    link: "https://vaideesh-portfolio07.netlify.app/",
    github: "#",
  },
  
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of projects where I contributed to both web development
            and quality validation, ensuring performance, usability, and
            stability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => window.open(project.link, "_blank")}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 cursor-pointer hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 
                  bg-gradient-to-t from-card via-card/40 to-transparent opacity-70"
                />

                {/* Top Right Icon */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-xl font-semibold group-hover:text-primary hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </a>
                </div>

                <p className="text-muted-foreground text-sm text-justify leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};