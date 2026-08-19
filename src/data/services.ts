export interface Service {
  title: string;
  description: string;
  capabilities: string[];
  href: string;
}

export const services: Service[] = [
  {
    title: "Cloud e infraestructura",
    description:
      "Diseño, implementación y administración de infraestructura cloud y entornos empresariales.",
    capabilities: [
      "Azure",
      "AWS",
      "Kubernetes",
      "Terraform",
      "Infraestructura híbrida",
    ],
    href: "/cloud",
  },
  {
    title: "Ciberseguridad",
    description:
      "Protección, monitoreo y fortalecimiento de la seguridad de tus sistemas y datos.",
    capabilities: [
      "Seguridad cloud",
      "Hardening",
      "Monitoreo",
      "Gestión de accesos",
      "Evaluación de seguridad",
    ],
    href: "/security",
  },
  {
    title: "Servicios administrados",
    description:
      "Administración y soporte continuo de infraestructura, plataformas y servicios tecnológicos.",
    capabilities: [
      "Soporte TI",
      "Monitoreo",
      "Administración de servidores",
      "Backups",
      "Mantenimiento",
    ],
    href: "/services",
  },
  {
    title: "Tecnología empresarial",
    description:
      "Soluciones de hardware, software, licenciamiento y tecnología para las necesidades de tu empresa.",
    capabilities: [
      "Hardware",
      "Software",
      "Licenciamiento",
      "Equipamiento empresarial",
      "Consultoría",
    ],
    href: "/technology",
  },
];
