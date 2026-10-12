db.menu.insertMany ([
    {
    dish: "Pizza",
    ingredients: ["Dough", "Tomato Sauce", "Cheese"],
    price: 30,
    }, 
    {
    dish: "Sushi",
    ingredients: ["Rice", "Fish", "Vegetables"],
    price: 40,
    },
    {
        dish: "Taco",
        ingredients: ["Tortilla", "Beef", "Cheese", ],
        price: 15,
    }
]);

// O restaurante decidiu aumentar o preço de todos os pratos em 10%. Atualize os preços.

db.menu.updateMany(
    {},
    { $mul: { price: 1.1 } }
);

db.menu.find();

//O Taco agora vem com "Guacamole". Adicione esse ingrediente à lista ingredients.

db.menu.updateOne(
    { dish: "Taco" },
    { $push: { ingredients: "Guacamole" } }
);

//O Sushi teve um reajuste e agora custa 35. Atualize esse valor.
db.menu.updateOne(
    { dish: "Sushi" },
    { $set: { price: 35 } }
);

//O restaurante removeu "Beef" dos Tacos e substituiu por "Chicken".
// Atualize a lista de ingredientes do Taco.

db.menu.updateOne(
    { dish: "Taco" },
    { $pull: { ingredients: "Beef" } }
);
db.menu.updateOne(
    { dish: "Taco" },
    { $push: { ingredients: "Chicken" } }
);