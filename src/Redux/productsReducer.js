let initialState = {
  categories: [
    {
      id: 1,
      name: "Металообработка",
      img:
        "https://sun9-37.userapi.com/impg/n7LKUFGEqlxXzmBu5hwXz158wWz6nyguiLXPrg/wPpiww9-2b4.jpg?size=1440x1920&quality=96&sign=963cf3cd5322ad186bbdecc6a4a92e3d&type=album",
      path: "konveyyernaya-lenta",
      amount: 650,
      product: [{}],
    },
    {
      id: 2,
      name: "Конвеерная лента",
      img:
        "https://sun9-44.userapi.com/impg/ejQbgnIAUS0GXFw4cmHoXF18Nv2RSdz-NYTc2w/pAPvsKgu13g.jpg?size=960x1280&quality=96&sign=50f545009303f67872fc74f29462ebc5&type=album",
      path: "rolick",
      amount: 101,
      product: [{}],
    },
  ],
};
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default productsReducer;
