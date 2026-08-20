import Image from "next/image";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const technologies = [
  {
    name: "Microsoft Azure",
    category: "Cloud",
    logo: "/technologies/azure.svg",
  },
  {
    name: "Amazon Web Services",
    category: "Cloud",
    logo: "/technologies/aws.svg",
  },
  {
    name: "Kubernetes",
    category: "Containers",
    logo: "/technologies/kubernetes.svg",
  },
  {
    name: "Docker",
    category: "Containers",
    logo: "/technologies/docker.svg",
  },
  {
    name: "Terraform",
    category: "Infrastructure as Code",
    logo: "/technologies/terraform.svg",
  },
  {
    name: "Linux",
    category: "Infrastructure",
    logo: "/technologies/linux.svg",
  },
  {
    name: "GitHub",
    category: "DevOps",
    logo: "/technologies/github.svg",
  },
  {
    name: "GitLab",
    category: "DevOps",
    logo: "/technologies/gitlab.svg",
  },
  {
    name: "Cloudflare",
    category: "Security & Networking",
    logo: "/technologies/cloudflare.svg",
  },
  {
    name: "Grafana",
    category: "Monitoring",
    logo: "/technologies/grafana.svg",
  },
  {
    name: "Prometheus",
    category: "Monitoring",
    logo: "/technologies/prometheus.svg",
  },
  {
    name: "Proxmox",
    category: "Virtualization",
    logo: "/technologies/proxmox.svg",
  },
];

export default function Technologies() {
  const items = [...technologies, ...technologies];

  return (
    <Section className="overflow-hidden bg-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Tecnologías
          </div>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Tecnologías y plataformas con las que trabajamos.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Utilizamos tecnologías empresariales para diseñar, implementar,
            proteger y administrar soluciones adaptadas a cada necesidad.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="overflow-hidden">
            <div className="flex w-max animate-[technologies-scroll_35s_linear_infinite] gap-5 hover:[animation-play-state:paused]">
              {items.map((technology, index) => (
                <article
                  key={`${technology.name}-${index}`}
                  className="group w-[220px] shrink-0 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2 shadow-sm ring-1 ring-neutral-200">
                      <Image
                        src={technology.logo}
                        alt={`${technology.name} logo`}
                        width={40}
                        height={40}
                        className={`object-contain ${
                          technology.name === "Microsoft Azure" ||
                          technology.name === "Amazon Web Services"
                            ? "h-10 w-11"
                            : "h-10 w-10"
                        }`}
                      />
                    </div>

                    <span className="max-w-[110px] text-right text-xs font-medium uppercase tracking-wider text-neutral-400">
                      {technology.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-neutral-950">
                    {technology.name}
                  </h3>

                  <div className="mt-3 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-16" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
