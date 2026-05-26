import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing structured automation scripts and maintainable test frameworks.",
  },
  {
    icon: Rocket,
    title: "Quality & Reliability",
    description:
      "Ensuring bug-free, stable software through effective testing practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with developers and stakeholders to improve product quality.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Improvement",
    description:
      "Learning modern automation tools and best testing practices to stay ahead.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building modern, responsive, and reliable
              <span className="font-serif italic font-normal text-white">
                {" "}
                 web experiences.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m passionate about creating modern and user-focused web experiences that combine responsive design, clean frontend architecture, and performance-driven development. With hands-on experience in business and corporate website development, I focus on building interfaces that are visually engaging, scalable, and optimized for seamless usability across all devices and browsers.
              </p>
              <p>
                My experience includes working on responsive UI implementation, frontend customization, interactive web sections, animations, landing pages, and website optimization for projects across different industries. I enjoy transforming ideas into functional and intuitive digital experiences while maintaining clean code structure, responsiveness, and consistent user interaction.
              </p>
              <p>
                I have worked on projects such as MedzLegal, Ethiqx, and Laya Initiatives, contributing to frontend development, UI enhancement, responsive layouts, website performance improvement, and interactive feature implementation using modern web technologies and WordPress-based development workflows.
              </p>
              <p>
                Alongside frontend development, I continuously explore modern tools and technologies to strengthen my overall development expertise. I am currently expanding my knowledge in backend development concepts, scalable application workflows, and modern development practices to build more efficient and reliable web applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My goal is to develop digital experiences that not only look modern and professional but also deliver smooth performance, accessibility, usability, and long-term scalability for users and businesses.”
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};