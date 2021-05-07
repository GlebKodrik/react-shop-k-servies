const GET_CARD_CATEGORY = "products/GET_CARD_CATEGORY";

let initialState = {
  categories: [
    {
      id: 1,
      name: "Металообработка",
      img:
        "https://sun9-37.userapi.com/impg/n7LKUFGEqlxXzmBu5hwXz158wWz6nyguiLXPrg/wPpiww9-2b4.jpg?size=1440x1920&quality=96&sign=963cf3cd5322ad186bbdecc6a4a92e3d&type=album",
      path: "konveyyernaya-lenta",
      amount: 650,
      product: [
        {
          id: 1,
          name: "Металообработка",
          img: "https://goramet.ru/wp-content/uploads/my/obrabotka-metalla.jpg",
        },
        {
          id: 2,
          name: "Металл",
          img:
            "https://prom-neva.ru/wp-content/uploads/2013/07/uslugi_frezernoj_obrabotki_metalla_2.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Конвеерная лента",
      img:
        "https://sun9-44.userapi.com/impg/ejQbgnIAUS0GXFw4cmHoXF18Nv2RSdz-NYTc2w/pAPvsKgu13g.jpg?size=960x1280&quality=96&sign=50f545009303f67872fc74f29462ebc5&type=album",
      path: "rolick",
      amount: 101,
      product: [
        {
          id: 1,
          name: "Лента",
          img:
            "https://s-agroservis.ru/assets/images/produkciya/RTI/konveier-lenta/konvejernaya-lenta(1).jpg",
        },
        {
          id: 2,
          name: "Лента вторая",
          img:
            "https://lh3.googleusercontent.com/proxy/3o2LFeHKA01TJIq9jp0NbuF9wjZhsNe7nszdZpxluyISi7lseuTMAaKRNwAZl018VTaJkCl4cWOZpX_lDcHIYHsboKvodPZAZyaTw0ij",
        },
      ],
    },
  ],
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD_CATEGORY: {
      return state;
    }
    default: {
      return state;
    }
  }
};
export const getCardCategory = (id) => ({ type: GET_CARD_CATEGORY, id });

export const cardCategory = (id) => (dispatch) => {
  dispatch(getCardCategory(id));
};

export default productsReducer;
