const products = [
  {
    _id: 1,
    name: "Металообработка",
    img: "https://goramet.ru/wp-content/uploads/my/obrabotka-metalla.jpg",
    shortDescr:
      "сталь, толщина стенок - 1.5 мм, 390 мм x 254 мм x 270 мм, вес: 3.3 кг",
    price: "2051",
    recall: "3",
    categoryId: 2,
    characteristic: "",
    description:
      "сталь, толщина стенок - 1.5 мм, 390 мм x 254 мм x 270 мм, вес: 3.3 кг ",
  },
  {
    _id: 4,
    name: "Металл",
    img:
      "https://prom-neva.ru/wp-content/uploads/2013/07/uslugi_frezernoj_obrabotki_metalla_2.jpg",
    shortDescr:
      "сталь, толщина стенок - 1.5 мм, 390 мм x 254 мм x 270 мм, вес: 3.3 кг",
    price: "1011",
    recall: "2",
    categoryId: 2,
    characteristic: "",
    description:
      "Мангал-книжка TONAR (арт. T-MK-13) выполнен в виде книжки. Подобная конструкция отличается повышенной устойчивостью. В днище имеются вентиляционные отверстия для продува воздуха. Мангал легко складывается, что значительно упрощает и облегчает его транспортировку. Преимущества мангала: Устойчивая конструкция; Отлично держит тепло; Простота конструкции позволяет осуществлять быструю сборку и разборку мангала.",
  },
  {
    _id: 9,
    name: "Лента",
    img:
      "https://s-agroservis.ru/assets/images/produkciya/RTI/konveier-lenta/konvejernaya-lenta(1).jpg",
    shortDescr:
      "сталь, толщина стенок - 1.5 мм, 390 мм x 254 мм x 270 мм, вес: 3.3 кг",
    price: "1459",
    recall: "1",
    categoryId: 1,
    characteristic: "",
    description:
      "Практичный и эстетически привлекательный мангал «Optimus» — одно из лучших решений, благодаря которому вы можете не только наслаждаться вкусом любимых блюд, но и обеспечить возможность самостоятельно выбирать место отдыха. Независимо от предпочтений, всего за 30 секунд конструкция складывается в удобный короб небольших размеров и полностью готова к эксплуатации.\n" +
      "Благодаря использованию высокопрочной стали, модель способна выдержать многократные нагревания до температуры в 360 градусов С. Невысокие ножки и конструкционные особенности, при этом, обеспечивают надежность и устойчивость изделия, независимо от особенностей ландшафта. Мангал «Optimus» рассчитан на пять шампуров и оснащен продуваемой жаровней. Особенности конструкции позволяют максимально использовать процесс горения без потери тепла. Сочетание перечисленных качеств делают эксплуатацию устройства простой, удобной и безопасной при любых условиях, а приготовление блюд приятным и несложным процессом.",
  },
  {
    _id: 10,
    name: "Лента вторая",
    img:
      "https://sun9-57.userapi.com/impg/8Jvhgj25WpcvnJQYY3go1M8qoA8H54lGB3e3ZQ/obEK0XlX-NA.jpg?size=1334x1334&quality=96&sign=667f4ecb98f4a84360fe8040773daef2&type=album",
    shortDescr:
      "сталь, толщина стенок - 1.5 мм, 390 мм x 254 мм x 270 мм, вес: 3.3 кг",
    recall: "5",
    price: "1648",
    categoryId: 1,
    characteristic: "",
    description:
      "Шампуры GRINDA - Ваши незаменимые помощники на пикниках и в походах. Удобные, экологичные и безопасные, специально разработанные для приготовления самых различных продуктов на мангале. V-образный профиль шампура позволяет выдерживать вес крупных кусков. Витая рукоятка позволяет удобно и просто переворачивать мясо в мангале. Чехол в комплекте для удобства хранения и транспортировки.",
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
