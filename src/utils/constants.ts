export const HEADERLINKS = [
  {
    id: 0,
    name: "Home",
    route: "/",
  },
  {
    id: 1,
    name: "Menu",
    route: "/menu",
  },
  {
    id: 2,
    name: "Company",
    route: "/company",
  },
  {
    id: 3,
    name: "Login",
    route: "/login",
  },
];

export const FOOTERCONTENT = [
  {
    id: 0,
    title: "COMPANY",
    links: [
      {
        id: 0,
        name: "Home",
        route: "#",
      },
      {
        id: 1,
        name: "Order",
        route: "#",
      },
      {
        id: 2,
        name: "FAQ",
        route: "#",
      },
      {
        id: 3,
        name: "Contact",
        route: "#",
      },
    ],
  },
  {
    id: 1,
    title: "TEMPLATE",
    links: [
      {
        id: 0,
        name: "Style Guide",
        route: "#",
      },
      {
        id: 1,
        name: "Changelog",
        route: "#",
      },
      {
        id: 2,
        name: "Licence",
        route: "#",
      },
      {
        id: 3,
        name: "Webflow University",
        route: "#",
      },
    ],
  },
  {
    id: 1,
    title: "FLOWBASE",
    links: [
      {
        id: 0,
        name: "More Cloneables",
        route: "#",
      },
    ],
  },
];

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  category: string;
}

export const MENUITEMS: MenuItem[] = [
  {
    id: 0,
    name: "Burger Dreams",
    price: 9.2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "img_1.png",
    category: "Dinner",
  },
  {
    id: 1,
    name: "Burger Waldo",
    price: 10.0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "img_2.png",
    category: "Dinner, Breakfast",
  },
  {
    id: 2,
    name: "Burger Cali",
    price: 8.0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "img_3.png",
    category: "Dinner, Breakfast",
  },
  {
    id: 3,
    name: "Burger Bacon Buddy",
    price: 8.0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "img_4.png",
    category: "Dinner, Breakfast",
  },
  {
    id: 4,
    name: "Burger Spicy",
    price: 9.2,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "img_5.png",
    category: "Dinner, Breakfast",
  },
  {
    id: 5,
    name: "Burger Classic",
    price: 8.0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img: "img_6.png",
    category: "Dinner, Breakfast",
  },
];
