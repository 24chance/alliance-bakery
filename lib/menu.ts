export type MenuItem = {
  name: string;
  note: string;
  group: "Bakery" | "Savoury" | "Drinks";
  img: string;
};

export const menu: MenuItem[] = [
  { name: "Sambusa",          note: "Crispy & savoury",    group: "Savoury", img: "/others/sambusa.jpg"   },
  { name: "Fresh Daily Bread",note: "Baked every morning", group: "Bakery",  img: "/others/bread.jpeg"   },
  { name: "Croissant",        note: "Golden & flaky",      group: "Bakery",  img: "/others/croissant.jpeg"},
  { name: "Pizza",            note: "Hot & cheesy",        group: "Savoury", img: "/others/pizza.jpeg"   },
  { name: "Sausage",          note: "Juicy bites",         group: "Savoury", img: "/others/sausage.jpeg" },
  { name: "Inyange Juice",    note: "Refreshing",          group: "Drinks",  img: "/others/inyange.jpeg" },
  { name: "Fresh Milk",       note: "Pure & creamy",       group: "Drinks",  img: "/others/milk.webp"    },
];
