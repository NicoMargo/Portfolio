import React from "react";
import Navbar from "../components/Navbar";
import { Presentation, Laptop } from "lucide-react";
import Footer from "../components/Footer";

const nerdearlaDescription = (
  <>
    <div>
      <b>Mi nube, mis reglas, libre de suscripciones: Proxmox + Docker + VPN + Nextcloud</b>
      <p className="mt-2 text-pink-100/90 text-sm">
        En esta charla te explico cómo armé una infraestructura NAS usando Proxmox, Docker, Nextcloud, Tailscale, para reemplazar servicios pagos y privativos como Google Drive, Google Photos y sin depender de terceros. Explicaré el uso de contenedores LXC en Proxmox, la visualización y alertas del sistema con Prometheus y Grafana, y el acceso remoto seguro mediante VPN (Tailscale). También mostraré cómo apliqué aislamiento entre servicios, medidas de seguridad concretas, y replicación de datos con ZFS, en una infraestructura robusta y completamente autogestionada.
      </p>
      <span className="block text-pink-100/70 text-xs mt-2">Tags: Proxmox, Docker, Nextcloud, Tailscale, VPN, Prometheus, Grafana, ZFS, Self-hosting</span>
    </div>
  </>
);

const flisolDescription = (
  <>
    <div>
      <b>Proyecto Manhattan: Mini PC con componentes de escritorio para transportar en mochila</b>
      <p className="mt-2 text-pink-100/90 text-sm">
        Mini pc con componentes de computadora de escritorio para transportar en una mochila con mucha potencia. Tiene un diseño estético muy bien logrado inspirado en el proyecto manhattan. Sistema Operativo: EndeavourOS basado en Arch linux con i3 (Tiling window manager). Factor de forma: Mini ITX. Procesador: I5 13600K 14 nucleos 20 hilos. RAM: 32gb DDR5 6400mhz. SSD: 1TB Samsung 980 Pro. Mother: Asrock Z790M-ITX WiFi. Se le aplicó trabajo de Overclocking y undervolting. Esta pc se desarrolló con el fin de usarla todos los días en la facultad.
      </p>
      <p className="mt-2 text-pink-100/90 text-sm">
        La charla cubrió: ventajas contra una notebook, justificación de componentes, proceso de armado, diseño exterior, Arch Linux y su filosofía, diferencia entre Desktop Environment y Tiling Window Manager, y problemas resueltos durante la instalación.
      </p>
      <span className="block text-pink-100/70 text-xs mt-2">Tags: Linux, Arch Linux, Hardware, Mini ITX, i3, Tiling Window Manager, Desktop Environment</span>
    </div>
  </>
);

export default function Work() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 text-white flex flex-col items-center pt-8 animate-fade-in">
      <Navbar />
      <main className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-fuchsia-400 via-pink-400 to-indigo-200 bg-clip-text text-transparent tracking-tight">
          Conferences
        </h1>
        <div className="space-y-9">
          <section
            className="
              p-6 rounded-xl bg-gradient-to-br from-indigo-900/60 to-indigo-800/30 border border-pink-400/20 shadow-lg
              mx-6 md:mx-16 my-5
              border-animate-box
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <Presentation className="text-pink-400 w-6 h-6" />
              <span className="text-xl font-semibold text-pink-200">
                Nerdearla <span className="text-pink-100/80 font-normal text-base">(Nov 2025, Madrid, España)</span>
              </span>
            </div>
            {nerdearlaDescription}
            <a 
              href="https://www.nerdearla.es/speakers/nicolas-margossian/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-400 hover:to-pink-400 text-white text-sm font-semibold rounded-md transition-all"
            >
              Ver en Nerdearla →
            </a>
          </section>
          <section
            className="
              p-6 rounded-xl bg-gradient-to-br from-indigo-900/60 to-fuchsia-900/40 border border-pink-400/20 shadow-lg
              mx-6 md:mx-16 my-5
              border-animate-box
            "
          >
            <div className="flex items-center gap-3 mb-3">
              <Laptop className="text-indigo-300 w-6 h-6" />
              <span className="text-xl font-semibold text-pink-200">
                FliSol - Festival Latinoamericano de Instalación de Software Libre <span className="text-pink-100/80 font-normal text-base">(27/04/2024, Buenos Aires, Argentina)</span>
              </span>
            </div>
            {flisolDescription}
          </section>
        </div>
      </main>
      <div className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
