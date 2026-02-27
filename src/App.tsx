import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Cpu, Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "crm next platform",
    description: "A CRM platform built with Next.js, featuring user authentication. Login: usern88@mail.ru, Password: 12345678.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Gemini API", "JWT Auth"],
    link: "https://crm-muhammadyusuf.vercel.app/login",
    github: "https://github.com/Furqatovm/crm_next",
    image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/b3eb716b-55bc-4dd8-b1f3-f03c37b60f00.png"
  },
  {
    title: "Green shop",
    description: "A responsive online store for eco-friendly products, designed with modern UI and smooth navigation.",
    tags: ["React", "TypeScript", "ANT Design", "API", "Axios"],
    link: "https://green-shop-muhammadyusuff.vercel.app",
    github: "https://github.com/Furqatovm/Green-shop",
    image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/7c85567a-0756-41aa-8fbb-329e6c752ba4.png"
  },
  {
    title: "Elite sat Platform",
    description: "An online platform for Temurbek School students to browse courses and register for classes easily.",
    tags: ["React", "TypeScript", "ANT Design", "Redux Toolkit", "API", "Axios"],
    link: "https://elite-sat-prep-platform.vercel.app/",
    github: "https://github.com/Furqatovm/elite-sat-prep-platform",
    image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/f2e972d9-193b-43bb-9e25-24137cc9b07d.png"
  },
  {
    title: "Next todo",
    description: "A minimalist Next.js todo application with end-to-end encryption, focusing on privacy and productivity.",
    tags: ["Next.js", "TypeScript", "Redux Toolkit", "Mock API", "Tailwind CSS"],
    link: "https://next-todo-muhammadyusuf.vercel.app/",
    github: "https://github.com/Furqatovm/next-todoapp",
    image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/6c8d2508-f6f1-433e-8b50-9f08684fd19a.png"
  },
  {
    title: "Temurbek school",
    description: "Official website for Temurbek School, showcasing courses, news, and student resources.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://muxammadyusuf.uz",
    github: "https://github.com/Furqatovm/Temurbek_school_website",
    image: "https://muxammadyusuf.uz/myprojects/image.png"
  },
  {
    title: "Quiz app",
    description: "A web-based quiz application for students to practice tests, built with Python, Flask, SQLite3, JavaScript, HTML, and CSS.",
    tags: ["Python", "Flask", "SQLite3", "JavaScript", "HTML", "CSS"],
    link: "https://tests-nmk7.onrender.com",
    github: "https://github.com/Furqatovm",
    image: "https://muxammadyusuf.uz/myprojects/quiz%20app.png"
  },
  {
    title: "Khan academy",
    description: "A project replicating the core features of Khan Academy, focused on interactive lessons and exercises.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage", "DOM Manipulation"],
    link: "https://javascsript-full-exam.vercel.app",
    github: "https://github.com/Furqatovm/Javascsript_full-exam",
    image: "https://pub-1407f82391df4ab1951418d04be76914.r2.dev/uploads/a00d21d0-3d56-4007-ab68-8bd28b9d3d85.png"
  }
];

export default function App() {


  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            MUHAMMADYUSUF<span className="text-emerald-500">.</span>
          </motion.span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button 
             onClick={() => window.open("/cv.pdf", "_blank")}
              className="px-4 cursor-pointer py-2 bg-white text-black rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </button>
          </div>
        </div>
      </nav>

      <main className="relative overflow-hidden">
        {/* Decorative Orbs */}
        <div className="glow-orb -top-40 -right-40" />
        <div className="glow-orb top-1/2 -left-40 opacity-50" />

        {/* Hero Section */}
        <section id="about" className="pt-40 pb-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-500 text-xs font-medium mb-6">
                  Available for new opportunities
                </span>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.9]">
                  Crafting digital <br />
                  <span className="text-zinc-500">experiences that matter.</span>
                </h1>
                <p className="text-xl text-zinc-400 max-w-xl mb-10 leading-relaxed">
                I'm Muhammadyusuf, a front-end developer and designer focused on building performant, accessible, and visually engaging web applications.
                </p>
                <div className="flex flex-wrap gap-4 mb-12">
                  <button className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-semibold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
                    Let's Talk
                  </button>
                  <div className="flex items-center gap-4 px-4">
                    <a href="https://github.com/Furqatovm" className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                      <Github size={20} />
                    </a>
                    <a  href="https://www.linkedin.com/in/muhammadyusuf-furqatov-608586353/"  className="p-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>

                {/* Tech Stack Mini-Grid */}
                <div className="pt-8 border-t border-white/5">
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Core Technologies</p>
                  <div className="flex flex-wrap gap-3">
                    {["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"].map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Hero Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-3xl p-2 shadow-2xl overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/portfolio-hero/800/1000" 
                    alt="Creative Workspace" 
                    className="rounded-2xl w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Stats Card */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 -left-8 p-6 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <Code2 size={24} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">500+</p>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Commits this year</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                {/* Decorative background shape */}
                <div className="absolute -inset-4 border border-emerald-500/20 rounded-[40px] -z-10 rotate-3" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "React", "TypeScript", "Redux", "Next.js", 
                "Javascript", "API", "HTML", "Css", 
                "Bootstrap", "Sass", "Tailwind css", "Ant Design"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-2xl border border-white/5 bg-zinc-900/30 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all group"
                >
                  <div className="text-zinc-400 group-hover:text-emerald-400 transition-colors">
                    <Code2 size={24} />
                  </div>
                  <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors text-center">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">Selected Works</h2>
                <p className="text-zinc-400 max-w-md">
                  A collection of projects where I've combined design thinking with technical excellence.
                </p>
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-2 rounded-full border border-white/10 text-sm flex items-center gap-2">
                  <Code2 size={14} /> 12+ Repos
                </div>
                <div className="px-4 py-2 rounded-full border border-white/10 text-sm flex items-center gap-2">
                  <Cpu size={14} /> 5+ APIs
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex flex-col rounded-3xl border border-white/5 bg-zinc-900/50 overflow-hidden hover:border-emerald-500/30 transition-all"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-zinc-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                      <a href={project.link} className="flex items-center gap-2 text-sm font-medium hover:text-emerald-400 transition-colors">
                        View Project <ExternalLink size={14} />
                      </a>
                      {project.github && (
                        <a href={project.github} className="text-zinc-500 hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">
                Ready to start <br />
                <span className="text-emerald-500">something great?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12">
                I'm currently looking for new opportunities and collaborations. 
                Whether you have a question or just want to say hi, my inbox is always open.
              </p>
              <a 
                href="mailto:muhammadyusuffurqatov91@gmail.com"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-bold text-lg hover:bg-emerald-500 hover:text-white transition-all"
              >
                Send a Message
                <Mail size={20} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-zinc-500 text-sm">
            <Globe size={16} />
            <span>Based in Tashkent, Uzbekistan</span>
          </div>
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Muhammadyusuf. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Furqatovm" className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/muhammadyusuf-furqatov-608586353" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
