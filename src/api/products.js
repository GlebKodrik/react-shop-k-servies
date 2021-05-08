const products = [
  {
    _id: 1,
    name: "Металообработка",
    img: "https://goramet.ru/wp-content/uploads/my/obrabotka-metalla.jpg",
    categoryId: 1,
  },
  {
    _id: 2,
    name: "Металл",
    img:
      "https://prom-neva.ru/wp-content/uploads/2013/07/uslugi_frezernoj_obrabotki_metalla_2.jpg",
    categoryId: 1,
  },
  {
    _id: 1,
    name: "Металообработка",
    img: "https://goramet.ru/wp-content/uploads/my/obrabotka-metalla.jpg",
    categoryId: 1,
  },
  {
    _id: 2,
    name: "Металл",
    img:
      "https://prom-neva.ru/wp-content/uploads/2013/07/uslugi_frezernoj_obrabotki_metalla_2.jpg",
    categoryId: 1,
  },
  {
    _id: 1,
    name: "Металообработка",
    img: "https://goramet.ru/wp-content/uploads/my/obrabotka-metalla.jpg",
    categoryId: 1,
  },
  {
    _id: 2,
    name: "Металл",
    img:
      "https://prom-neva.ru/wp-content/uploads/2013/07/uslugi_frezernoj_obrabotki_metalla_2.jpg",
    categoryId: 1,
  },
  {
    _id: 1,
    name: "Металообработка",
    img: "https://goramet.ru/wp-content/uploads/my/obrabotka-metalla.jpg",
    categoryId: 1,
  },
  {
    _id: 2,
    name: "Металл",
    img:
      "https://prom-neva.ru/wp-content/uploads/2013/07/uslugi_frezernoj_obrabotki_metalla_2.jpg",
    categoryId: 1,
  },
  {
    _id: 3,
    name: "Лента",
    img:
      "https://s-agroservis.ru/assets/images/produkciya/RTI/konveier-lenta/konvejernaya-lenta(1).jpg",
    categoryId: 2,
  },
  {
    _id: 4,
    name: "Лента вторая",
    img:
      "https://lh3.googleusercontent.com/proxy/3o2LFeHKA01TJIq9jp0NbuF9wjZhsNe7nszdZpxluyISi7lseuTMAaKRNwAZl018VTaJkCl4cWOZpX_lDcHIYHsboKvodPZAZyaTw0ij",
    categoryId: 2,
  },
];

export const fetchCategories = () =>
  Promise.resolve({
    data: [
      {
        _id: 1,
        name: "Конвеерная лента",
        img:
          "https://sun9-44.userapi.com/impg/ejQbgnIAUS0GXFw4cmHoXF18Nv2RSdz-NYTc2w/pAPvsKgu13g.jpg?size=960x1280&quality=96&sign=50f545009303f67872fc74f29462ebc5&type=album",
        url: "rolick",
      },
      {
        _id: 2,
        name: "Металообработка",
        img:
          "https://sun9-37.userapi.com/impg/n7LKUFGEqlxXzmBu5hwXz158wWz6nyguiLXPrg/wPpiww9-2b4.jpg?size=1440x1920&quality=96&sign=963cf3cd5322ad186bbdecc6a4a92e3d&type=album",
        url: "konveyyernaya-lenta",
      },
    ],
    errors: [],
  });

export const fetchProducts = (categoryId) =>
  Promise.resolve({
    data: categoryId
      ? products.filter((el) => el.categoryId === categoryId)
      : products,
    errors: [],
  });
