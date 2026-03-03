import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Corporate Healthcare-Legal Website",
    description:
      "Developed a professional corporate website for MedzLegal using WordPress, focusing on responsive UI design, structured service presentation, and performance optimization. Along with development, I performed functional testing, cross-browser validation, and pre-deployment quality checks to ensure stability and reliability.",
    image: "/projects/project-1.png",
    tags: ["Html", "Css", "Javascript", "WordPress", "Performance Testing"],
    link: "#",
    github: "#",
  },
  {
    title: "Environmental Volunteer Platform",
    description:
      "Built a responsive organizational website to promote environmental initiatives and volunteer programs. Contributed to WordPress implementation, UI validation, mobile responsiveness testing, and regression checks during updates to maintain consistent performance and usability.",
    image: "/projects/project-2.png",
    tags: ["Html", "Css", "Javascript", "WordPress", "Responsive Testing"],
    link: "#",
    github: "#",
  },
  {
    title: "Modern Developer Portfolio Website",
    description:
      "Designed and developed a modern portfolio website using React and Tailwind CSS with responsive layouts and smooth UI animations. Conducted component-level testing, manual functional validation, and performance monitoring to ensure optimal user experience.",
    image: "/projects/project-3.png",
    tags: ["React", "JavaScript", "Tailwind Css", "UI Testing"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "Contributed to a collaborative project management tool featuring real-time updates and task tracking. Worked on frontend modules, prepared test cases, performed API validation using Postman, and conducted functional and regression testing to maintain application quality.",
    image: "/projects/project4.png",
    tags: ["Next.js", "MongoDB", "Functional Testing", "API Testing"],
    link: "#",
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
            A selection of projects where I contributed to both web development and quality validation, ensuring performance, usability, and stability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0  w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
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

        {/* View All CTA */}
        
      </div>
    </section>
  );
};