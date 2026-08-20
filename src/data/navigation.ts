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
    name: "Soluciones",
    href: "/solutions",
  },
  {
    name: "Nosotros",
    href: "/about",
  },
  {
    name: "Contacto",
    href: "/contact",
  },
];
