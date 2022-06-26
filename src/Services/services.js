export const handleOrderSubmit = ({ cartInfo, event }) => {
  console.log({ cartInfo });
};

export const handleSignIn = () => {};
export const handleSignOut = () => {};

export const getReccLocation = (setLocationList) => {
  const defaultLocation = [
    {
      image:
        "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/deck.jpg",
      name: "The Deck",
      vendor_slug: "deck",
    },
    {
      image:
        "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Frontier-Canteen-1024x684.jpg",
      name: "Frontier",
      vendor_slug: "frontier",
    },
  ];
  setLocationList(defaultLocation);
};

export const getMainpageMenu = (setMenu) => {
  const defaultMenu = [
    {
      title: "Pizza",
      description: "Spicy Marinated Chicken Tomato",
      unit_price: 30.7,
      image:
        "https://www.simplyrecipes.com/thmb/qu-AslBeskzh_HG9H0dQAmcrdLQ=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-4-82c60893fcad4ade906a8a9f59b8da9d.jpg",
    },
    {
      title: "Carbonara Pasta",
      description: "May contain Milk",
      unit_price: 5.5,
      image:
        "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-articleLarge-v2.jpg",
    },
    {
      title: "Ice Lemon Tea",
      description: "Fresh made lemonade",
      unit_price: 1.2,
      image:
        "https://static.toiimg.com/thumb/84339280.cms?imgsize=327880&width=800&height=800",
    },
  ];
  setMenu(defaultMenu);
};

export const getMenu = (setMenu, vendor_slug) => {
  // call api + vendor_slug and setMenu
  const defaultMenu = [
    {
      id: 1,
      reviews: [
        {
          product: 1,
          shop: null,
          customer: 1,
          description: "This Spaghetti is creamy",
          date: "2022-06-23",
        },
      ],
      title: "Spaghetti",
      description: "Carbonara, may contain milk",
      unit_price: 5.0,
      stock: 999,
      shop: 1,
      image: "",
    },
    {
      id: 2,
      reviews: [],
      title: "Chicken Rice",
      description: "Cheap",
      unit_price: 2.0,
      stock: 999,
      shop: 1,
      image: "",
    },
    {
      id: 2,
      reviews: [],
      title: "Ice Lemon Tea",
      description: "Fresh made lemonade",
      unit_price: 1.2,
      stock: 999,
      shop: 2,
      image: "",
    },
  ];
  setMenu(defaultMenu);
};

export const addToCart = () => {};
