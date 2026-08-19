export interface Service {
  title: string;
  description: string;
  href: string;
  capabilities: string[];
}

export const services: Service[] = [
  {
    title: "Cloud & Infrastructure",
    description:
      "Diseñamos, migramos y administramos infraestructura tecnológica segura, escalable y preparada para el crecimiento.",
    href: "/cloud",
    capabilities: [
      "Azure",
      "AWS",
      "VMware",
      "Proxmox",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    title: "Ciberseguridad",
    description:
      "Evaluamos, fortalecemos y monitoreamos la seguridad de tu infraestructura para reducir riesgos y proteger la operación.",
    href: "/security",
    capabilities: [
      "Auditorías",
      "Hardening",
      "SIEM",
      "Wazuh",
      "Microsoft Sentinel",
      "WAF",
      "Firewalls",
    ],
  },
  {
    title: "Managed IT",
    description:
      "Nos convertimos en tu equipo externo de tecnología para mantener servidores, bases de datos, respaldos y plataformas operativas.",
    href: "/services",
    capabilities: [
      "Linux",
      "Windows Server",
      "Bases de datos",
      "Backups",
      "Monitoreo",
      "Microsoft 365",
      "Soporte",
    ],
  },
  {
    title: "Business & Technology",
    description:
      "Integramos aplicaciones empresariales, licenciamiento, hardware y servicios tecnológicos para cubrir las necesidades de tu negocio.",
    href: "/business",
    capabilities: [
      "ERP",
      "Odoo Community",
      "Aplicaciones empresariales",
      "Microsoft Licensing",
      "Hardware",
      "Migraciones",
      "Consultoría",
    ],
  },
];
