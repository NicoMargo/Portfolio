
import React from "react";
import { Award, BookOpen, Briefcase, GraduationCap, User } from "lucide-react";
import Navbar from "../components/Navbar";
import { useInView } from "../hooks/useInView";
import Footer from "../components/Footer";
import profilePhoto from "@/assets/profile-photo.jpg";

// Helper components
const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <section className="mb-12 animate-fade-in">
    <div className="flex items-center mb-3 space-x-2">
      {icon}
      <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-pink-400">{title}</h2>
    </div>
    <div className="ml-[1.5rem]">{children}</div>
  </section>
);

// Skills Bar component
const SkillBar = ({
  name,
  value,
  active,
}: {
  name: string;
  value: number;
  active?: boolean;
}) => (
  <div className="mb-2">
    <div className="flex justify-between mb-0.5">
      <span>{name}</span>
      <span className="text-sm font-mono opacity-70">{value}%</span>
    </div>
    <div className="w-full h-2 rounded-full bg-gradient-to-r from-fuchsia-900/40 via-pink-900/30 to-indigo-800/40 overflow-hidden">
      <div
        className="h-2 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-fuchsia-400 via-pink-400 to-pink-300"
        style={{
          width: active ? `${value}%` : "0%",
        }}
      />
    </div>
  </div>
);

// MAIN PAGE CONTENT
const Index = () => {
  // Experience data, etc. You can easily update this!
  const experience = [
    {
      company: "Instituto IT-arg",
      role: "Fullstack Developer & Webmaster",
      period: "2022 - 2025",
      description:
        "Development of IT-arg's website and internal tools. Tech: .NET & WEB REST API C#, SQL Server, REACT, HTML5, CSS3, Javascript, JWT, Bootstrap.",
    },
    {
      company: "Fitness Center & Small Businesses",
      role: "Technical Support",
      period: "2016 – 2025",
      description:
        "Troubleshooting, IT Security, Structured Cabling, Router, Firewall, VPN, pfSense, Assembly and repair of computers.",
    },
    {
      company: "Bitian",
      role: "Junior Developer",
      period: "2021 – 2022",
      description:
        "Junior developer for the company's website and platform. Tech: Asp.net core 3.1, SQL Server, HTML5, CSS3, Javascript, Bootstrap.",
    },
  ];

  const education = [
    {
      logo: "/lovable-uploads/upv-logo.jpg",
      school: "Universitat Politècnica de València (UPV)",
      period: "2025 – 2026",
      degree: "Bachelor in Computer Engineering (Double Degree)",
      note: "Double degree program with Universidad de Belgrano.",
      skills: ["Server Administration", "Cybersecurity", "Linux"],
    },
    {
      logo: "/lovable-uploads/fd415626-a339-4773-a1b6-61ae0c5f0b41.png",
      school: "Universidad de Belgrano",
      period: "2021 – 2026",
      degree: "Bachelor in Computer Engineering",
      skills: [".NET Core"],
    },
    {
      logo: "/lovable-uploads/87deff40-e0a9-49f9-aa9f-16a12e27bd25.png",
      school: "ORT Technical School",
      period: "2014 – 2019",
      degree: "High School Diploma – Web & Mobile Development",
    },
  ];

  const certifications = [
    {
      title: "Virtual Environments Administration",
      org: "IT-arg Institute",
      date: "Sep 2023",
      link: "https://it-arg.com/certificado/NMargossian1-10",
      skills: ["Proxmox", "Linux", "VLAN", "NAS", "Bridging"],
    },
    {
      title: "Specialization in Cybersecurity",
      org: "IT-arg Institute",
      date: "Oct 2022",
      link: "https://it-arg.com/certificado/NMargossian-15",
    },
    {
      title: "Cryptography and Blockchain",
      org: "EducacionIT",
      date: "Sep 2025",
      link: "https://www.educacionit.com/perfil/nicolas-margossian-785417/certificado/58744",
    },
    {
      title: "Linux Operator",
      org: "EducacionIT",
      date: "Mar 2022",
      link: "https://www.educacionit.com/perfil/nicolas-margossian-785417/certificado/56908",
    },
    {
      title: "Computer Networks Technician",
      org: "ITA – Instituto Tecnologico Argentino",
      date: "Dec 2020",
      link: "https://drive.google.com/file/d/1fjUFQWashOwOT0NQ0_OlC2XbZh6mGlv8/view?usp=sharing",
    },
    {
      title: "Expert in PC Hardware",
      org: "ITA – Instituto Tecnologico Argentino",
      date: "Apr 2016",
      link: "https://drive.google.com/file/d/1_EsLd6qyrvzsOWVCBMF7UGnFgRRIufea/view?usp=sharing",
    },
  ];

  const awards = [
    {
      title: "FIRST PLACE – WORLD ORT STEM Communication Awards",
      org: "World ORT & ORT Technical School",
      date: "July 2019",
      description:
        "First prize for producing a clear and concise STEM communication video, explaining quantum computing (as a team with Jonathan Liu).",
    },
  ];

  // Skill Sections
  const languages = [
    { name: "C# .NET API", value: 80 },
    { name: "SQL Server", value: 75 },
    { name: "React/NextJS", value: 60 },
    { name: "Scripting: Python + Bash", value: 35 },
  ];
  const infrastructure = [
    { name: "Proxmox/Linux", value: 85 },
    { name: "OPNsense/pfSense", value: 85 },
    { name: "Docker", value: 75 },
    { name: "Windows Active Directory", value: 70 },
  ];
  const tools = [
    { name: "VMware Workstation Pro", value: 95 },
    { name: "Git", value: 85 },
    { name: "Backups & Replication (ZFS)", value: 70 },
    { name: "Grafana/Prometheus", value: 60 },
  ];

  // Usamos useInView para animar las barras solo cuando Code Arsenal esté visible
  const [arsenalRef, arsenalInView] = useInView<HTMLDivElement>({
    threshold: 0.25,
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 text-white 
        font-sans px-4 md:px-0 
        flex flex-col items-center pt-8 animate-fade-in">
      {/* NAVBAR */}
      <Navbar />
      
      {/* MODERN MINIMAL HEADER */}
      <header className="w-full max-w-5xl mb-16 animate-scale-in">
        <div className="text-center space-y-4">
          {/* Profile Image - Smaller and cleaner */}
          <img 
            src={profilePhoto} 
            alt="Nicolas Margossian" 
            className="w-24 mt-5 h-24 md:w-32 md:h-32 mx-auto rounded-full border-2 border-pink-300/50 shadow-2xl mb-6 object-cover"
          />
          
          {/* Name - Clean and bold */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-300 via-pink-400 to-pink-200 bg-clip-text text-transparent tracking-tight">
            NICOLAS MARGOSSIAN
          </h1>
          
          {/* Role - Simplified */}
          <div className="text-xl md:text-2xl font-light text-pink-100/90 mb-4">
            Fullstack Developer · Cybersecurity
          </div>
          
          {/* Contact Info - Minimal and clean */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 text-sm text-pink-100/70">
            <span>Buenos Aires, Argentina</span>
            <span className="hidden md:inline">·</span>
            <span>nmargo@pm.me</span>
            <span className="hidden md:inline">·</span>
            <a className="hover:text-pink-200 transition-colors underline decoration-pink-300/50" 
               href="https://www.linkedin.com/in/nicolas-margossian/" 
               target="_blank" 
               rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="w-full max-w-5xl space-y-16 mt-24">
        {/* Skills / Arsenal Grid - MOVED TO FIRST */}
        <div ref={arsenalRef}>
          <h2 className="text-center text-3xl font-extrabold mb-7 bg-gradient-to-r from-fuchsia-400 to-pink-300 bg-clip-text text-transparent tracking-tight animate-fade-in">
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-7">
            <div className="bg-gradient-to-br from-indigo-900/60 to-indigo-800/30 border border-pink-400/20 rounded-2xl p-6">
              <div className="text-xl font-bold mb-4 text-pink-200">Programming Languages</div>
              {languages.map((lang) => (
                <SkillBar key={lang.name} name={lang.name} value={lang.value} active={arsenalInView} />
              ))}
            </div>
            <div className="bg-gradient-to-br from-indigo-900/60 to-indigo-800/30 border border-pink-400/20 rounded-2xl p-6">
              <div className="text-xl font-bold mb-4 text-pink-200">Infrastructure</div>
              {infrastructure.map((infra) => (
                <SkillBar key={infra.name} name={infra.name} value={infra.value} active={arsenalInView} />
              ))}
            </div>
            <div className="bg-gradient-to-br from-indigo-900/60 to-indigo-800/30 border border-pink-400/20 rounded-2xl p-6">
              <div className="text-xl font-bold mb-4 text-pink-200">Tools</div>
              {tools.map((tool) => (
                <SkillBar key={tool.name} name={tool.name} value={tool.value} active={arsenalInView} />
              ))}
            </div>
          </div>
        </div>

        {/* Experience */}
        <Section icon={<Briefcase className="text-pink-200" />} title="Work Experience">
          <ol className="relative border-l border-pink-400/30 pl-6 space-y-8 animate-fade-in">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="relative"
              >
                {/* Número FIJO */}
                <span className="absolute left-[-33px] top-2 flex items-center justify-center w-6 h-6 bg-pink-300 rounded-full ring-4 ring-indigo-900 ring-opacity-50 text-indigo-900 font-extrabold animate-scale-in z-10 pointer-events-none">
                  {i + 1}
                </span>
                <li
                  className="
                    group transition-all 
                    hover:scale-105
                    hover:mx-2
                    md:hover:mx-4
                    relative
                    "
                  style={{
                    // Crea padding para que el número nunca se superponga aunque el li crezca
                    paddingLeft: '1.5rem'
                  }}
                >
                  <div className="mb-1 text-lg font-bold text-pink-200">{exp.company}</div>
                  <div className="text-base font-semibold text-pink-100">{exp.role}</div>
                  <div className="text-sm text-pink-100/70 mb-1">{exp.period}</div>
                  <div className="text-sm text-pink-100/80">{exp.description}</div>
                </li>
              </div>
            ))}
          </ol>
        </Section>

        {/* About Me */}
        <Section icon={<User className="text-pink-300" />} title="About Me">
          <div className="max-w-xl leading-relaxed text-lg text-pink-100/90 animate-fade-in">
Since an early age, I’ve been passionate about technology. My journey began at the age of 13, assembling and repairing computers, which gave me strong foundations in hardware and systems. Over time, this hands-on experience evolved into a deep interest in development and cybersecurity.

I enjoy solving complex problems and building user-friendly, efficient solutions. Always eager to learn, I constantly look for new challenges that allow me to grow and push my limits.          </div>
        </Section>

        {/* Education */}
        <Section icon={<GraduationCap className="text-indigo-200" />} title="Education">
          <div className="flex flex-col gap-6 animate-fade-in">
            {education.map((ed, i) => (
              <div key={i} className="flex gap-4 items-center bg-white/5 border border-pink-200/20 rounded-xl p-4 hover:scale-105 transition-all duration-200">
                {ed.logo && (
                  <div className="bg-white rounded-md p-2 flex-shrink-0 hidden md:block">
                    <img alt={`${ed.school} logo`} src={ed.logo} className="w-8 h-8 object-contain" />
                  </div>
                )}
                <div>
                  <div className="font-bold text-pink-200">{ed.school}</div>
                  <div className="text-sm text-pink-100/90">{ed.degree}</div>
                  <div className="text-xs text-pink-100/70">{ed.period}</div>
                  {ed.note && <div className="text-xs text-indigo-200/90">{ed.note}</div>}
                  {ed.skills && <div className="flex flex-wrap gap-2 mt-1">
                    {ed.skills.map((k) => (
                      <span className="px-2 py-0.5 rounded bg-pink-900/30 text-pink-100 text-xs">{k}</span>
                    ))}
                  </div>}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications & Awards */}
        <Section icon={<Award className="text-fuchsia-300" />} title="Certifications & Awards">
          <div className="grid md:grid-cols-2 gap-6 animate-fade-in mb-8">
            {/* Certifications */}
            <div>
              <div className="text-lg font-bold mb-2 text-pink-100">Certifications</div>
              <ul className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center justify-between gap-3 bg-white/5 p-2.5 rounded-lg border border-pink-300/10 hover:scale-105 transition-all">
                    <div className="flex-1">
                      <div className="font-semibold text-pink-100">{cert.title}</div>
                      <div className="text-xs text-pink-100/70">{cert.org} <span className="mx-1">·</span> {cert.date}</div>
                      {cert.skills && <div className="flex flex-wrap gap-2 mt-0.5">
                        {cert.skills.map((k) => (
                          <span key={k} className="px-2 py-0.5 rounded bg-pink-900/30 text-pink-100 text-xs">{k}</span>
                        ))}
                      </div>}
                    </div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-pink-300 hover:text-pink-100 underline underline-offset-2 transition-colors whitespace-nowrap"
                    >
                      View
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Awards */}
            <div>
              <div className="text-lg font-bold mb-2 text-pink-100">Awards</div>
              <ul className="flex flex-col gap-4">
                {awards.map((a, i) => (
                  <li key={i} className="p-3 rounded-lg bg-gradient-to-br from-fuchsia-900/60 to-indigo-900/20 border border-pink-300/20">
                    <div className="font-semibold text-pink-200">{a.title}</div>
                    <div className="text-xs text-pink-100/70">{a.org} <span className="mx-1">·</span> {a.date}</div>
                    <div className="text-sm text-pink-100/85 mt-1">{a.description}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
