export interface Service {
  title: string;
  problem: string;
  description: string;
  capabilities: string[];
  href: string;
}

export const services: Service[] = [
  {
    title: "Tu tecnología no puede detener tu negocio",
    problem:
      "Servidores lentos, sistemas que fallan o una infraestructura que ya no soporta el crecimiento.",
    description:
      "Diseñamos y administramos infraestructura moderna para que tus sistemas sean estables, escalables y estén disponibles cuando los necesitas.",
    capabilities: [
      "Cloud",
      "Servidores",
      "Kubernetes",
      "Redes",
      "Infraestructura híbrida",
    ],
    href: "/cloud",
  },
  {
    title: "¿Te preocupa la seguridad de tu información?",
    problem:
      "Un acceso no autorizado, una vulnerabilidad o una mala configuración puede convertirse en un problema serio.",
    description:
      "Ayudamos a proteger tus sistemas, usuarios y datos mediante controles de seguridad, monitoreo y buenas prácticas.",
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
    title: "Tu equipo necesita soporte tecnológico",
    problem:
      "No quieres que tus colaboradores pierdan tiempo resolviendo problemas de servidores, respaldos o infraestructura.",
    description:
      "Nos encargamos de la operación y mantenimiento de tu tecnología para que puedas concentrarte en tu negocio.",
    capabilities: [
      "Soporte TI",
      "Monitoreo",
      "Servidores",
      "Backups",
      "Mantenimiento",
    ],
    href: "/services",
  },
  {
    title: "Necesitas la tecnología adecuada",
    problem:
      "Comprar equipos, software o licencias sin conocer realmente lo que necesitas puede terminar costando más.",
    description:
      "Te ayudamos a elegir, implementar y mantener hardware, software y tecnología adecuada para tu operación.",
    capabilities: [
      "Computadoras",
      "Servidores",
      "Software",
      "Licenciamiento",
      "Equipamiento empresarial",
    ],
    href: "/technology",
  },
];
