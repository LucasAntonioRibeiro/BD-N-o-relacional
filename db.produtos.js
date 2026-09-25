db.produtos.insertMany([
    {
    nome: "Sofá Retrátil",
    categoria: "Móveis",
    preco: 2500.00,
    avaliacao: 4.8,
    estoque: 10
  },
  {
    nome: "Mesa de Escritório",
    categoria: "Móveis",
    preco: 1800.00,
    avaliacao: 4.6,
    estoque: 25
  },
  {
    nome: "Cadeira Gamer",
    categoria: "Móveis",
    preco: 2200.00,
    avaliacao: 4.7,
    estoque: 15
  },
  {
    nome: "Notebook Lenovo",
    categoria: "Eletrônicos",
    preco: 3500.00,
    avaliacao: 4.5,
    estoque: 8
  },
  {
    nome: "Monitor 24 Polegadas",
    categoria: "Eletrônicos",
    preco: 1200.00,
    avaliacao: 4.3,
    estoque: 30
  },
  {
    nome: "Teclado Mecânico",
    categoria: "Eletrônicos",
    preco: 450.00,
    avaliacao: 4.7,
    estoque: 40
  },
  {
    nome: "Geladeira",
    categoria: "Eletrodomésticos",
    preco: 4200.00,
    avaliacao: 4.6,
    estoque: 5
  },
  {
    nome: "Micro-ondas",
    categoria: "Eletrodomésticos",
    preco: 900.00,
    avaliacao: 4.4,
    estoque: 22
  },
  {
    nome: "Bicicleta",
    categoria: "Esportes",
    preco: 2000.00,
    avaliacao: 4.9,
    estoque: 12
  },
  {
    nome: "Fone Bluetooth",
    categoria: "Eletrônicos",
    preco: 300.00,
    estoque: 50
  },
  {
    nome: "Estante de Livros",
    categoria: "Móveis",
    preco: 1500.00,
    avaliacao: 4.2,
    estoque: 18
  },
  {
    nome: "Ar-Condicionado",
    categoria: "Eletrodomésticos",
    preco: 3200.00,
    avaliacao: 4.1,
    estoque: 7
  }
])

// Exercicio 1 
db.produtos.find({
    preco: {
        $gte: 2000.00
    }
});

// Exercicio 2
db.produtos.find({
    $and: [
    { categoria: "Móveis" },
    { avaliacao: { $gt: 4.5 } }

]
});

// Exercicio 3
db.produtos.find({
    $or: [
        {preco: { $lt:2000.00 }},
        {estoque: { $gt: 20 }}
    ]
});

// Exercicio 4
db.produtos.find({
    avaliacao: { $exists: true }
});