export const API_URL = 'https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals';
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
        id: 1,
        name: "Home",
        route: "#",
      },
      {
        id: 2,
        name: "Order",
        route: "#",
      },
      {
        id: 3,
        name: "FAQ",
        route: "#",
      },
      {
        id: 4,
        name: "Contact",
        route: "#",
      },
    ],
  },
  {
    id: 5,
    title: "TEMPLATE",
    links: [
      {
        id: 6,
        name: "Style Guide",
        route: "#",
      },
      {
        id: 7,
        name: "Changelog",
        route: "#",
      },
      {
        id: 8,
        name: "Licence",
        route: "#",
      },
      {
        id: 9,
        name: "Webflow University",
        route: "#",
      },
    ],
  },
  {
    id: 10,
    title: "FLOWBASE",
    links: [
      {
        id: 11,
        name: "More Cloneables",
        route: "#",
      },
    ],
  },
];

export interface MenuItem {
  id: string;
  meal: string;
  price: number;
  instructions: string;
  img: string;
  category: string;
}

/* export const MENUITEMS: MenuItem[] = [
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
 */