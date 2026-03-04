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
              Building reliable web applications through
              <span className="font-serif italic font-normal text-white">
                {" "}
                development and automation.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                Web Developer with over 2 years of experience in WordPress-based web development and web application architecture. Extensive experience in building responsive and performance-optimized websites has provided a strong understanding of application behavior, user interface workflows, and overall system reliability.
              </p>
              <p>
                Alongside development responsibilities, actively performed functional testing, defect identification, and feature validation to ensure smooth user experiences and stable application performance across releases.
              </p>
              <p>
                Currently advancing expertise in QA and automation testing, with hands-on learning in Java and Selenium, and strengthening knowledge in regression testing, automation frameworks, and API testing practices.
              </p>
              <p>
                Committed to combining development expertise with structured testing methodologies to contribute to the delivery of reliable, scalable, and high-quality web applications.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                “My mission is to ensure software quality by combining development knowledge with automation expertise — delivering reliable, high-performance applications that users trust.”
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