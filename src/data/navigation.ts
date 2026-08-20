export interface NavigationItem {
  name: string;
  href: string;
  external?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    name: "Tienda",
    href: "https://compumercado.shop/",
    external: true,
  },
  {
    name: "Servicios",
    href: "/services",
  },
  {
    name: "Cloud",
    href: "/cloud",
  },
  {
    name: "Seguridad",
    href: "/security",
  },
  {
    name: "Tecnología",
    href: "/technology",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];
