import React from "react";
import Navbar from "../components/Navbar";
import { SquareCode, FileText, Laptop } from "lucide-react";
import Footer from "../components/Footer";

const projects = [
  {
    name: "Manhattan Mini Workstation",
    description: "A high-performance, ultra-compact and portable desktop PC designed for virtualization environments. Enables the creation and management of multiple powerful virtual machines in a transportable small form factor.",
    details:
      "Custom case design, powerful CPU, ECC RAM, efficient cooling for silent operation. Ideal for developers, cybersecurity labs, and IT pros.",
    highlights: [
      "Ultra-portable, high power/volume ratio",
      "Runs Proxmox, KVM with Windows/Linux VMs",
      "Daily personal use as a developer/cybersecurity platform",
    ],
    important: true,
  },
  {
    name: "Ultimate Home NAS & Cloud",
    description: "Modular Proxmox-based NAS with full Nextcloud stack: Redis, Traefik, SMB, disk replication/backup, SDN, firewall, Wake on LAN, RDP, VPN via Traefik. Highly secure, includes automated backups and cloud synchronization.",
    highlights: [
      "True cloud service at home (Nextcloud + SMB)",
      "Multi-layer firewall, dynamic VPN, full disk redundancy",
      "Web panel for easy backup/restore"
    ],
    important: true,
  },
  {
    name: "UBSocial",
    description: "A social platform for university students to connect, share events, and study resources. Built as a group university project, focused on collaboration, chat, and resource management.",
    highlights: [
      "Group chat",
      "Event calendar",
      "Study resources management"
    ],
    important: false,
  },
  {
    name: "ANTFIP Invoicing System",
    description: "A web-based invoicing system designed for SMEs. Includes electronic invoicing, customer management, and sales statistics for more efficient business operations.",
    highlights: [
      "Automated bill generation",
      "Client database",
      "Sales analytics dashboard"
    ],
    important: false,
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 text-white flex flex-col items-center pt-8 animate-fade-in">
      <Navbar />
      <main className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-fuchsia-400 via-pink-400 to-indigo-200 bg-clip-text text-transparent tracking-tight">Projects</h1>
        <div className="space-y-8">
          {projects.map((project, i) => (
            <section
              key={project.name}
              className={`
                p-6 rounded-xl border border-pink-400/20 shadow-lg transition-all duration-200
                mx-6 md:mx-16 my-5
                border-animate-box
                ${project.important
                  ? "bg-gradient-to-br from-pink-950/80 via-fuchsia-900/60 to-indigo-900/80"
                  : "bg-gradient-to-br from-indigo-900/60 to-indigo-800/30"
                }
              `}
            >
              <div className="flex items-center gap-3 mb-2">
                {project.important ? (
                  <Laptop className="text-pink-300 w-6 h-6 animate-pulse" />
                ) : (
                  <FileText className="text-pink-200 w-6 h-6" />
                )}
                <span className={`text-xl font-bold ${project.important ? "text-fuchsia-200" : "text-pink-200"}`}>
                  {project.name}
                </span>
              </div>
              <div className="text-base md:text-lg text-pink-100 mb-1">{project.description}</div>
              {project.details && <div className="text-sm text-pink-100/90 mb-1">{project.details}</div>}
              {project.name === "Manhattan Mini Workstation" && (
                <div className="flex gap-4 my-4">
                  {[
                    "/lovable-uploads/manhattan-1.png",
                    "/lovable-uploads/manhattan-2.png",
                    "/lovable-uploads/manhattan-3.png"
                  ].map((src, n) => (
                    <div
                      key={n}
                      className="flex-1 h-52 rounded-lg border border-pink-400/20 overflow-hidden bg-pink-100/5"
                    >
                      <img 
                        src={src} 
                        alt={`Manhattan Workstation ${n + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
              <ul className="list-disc ml-6 text-pink-100/80 text-sm">
                {project.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <div className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
