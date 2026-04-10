use("user");

db.createCollection("products");

db.products.insertOne({
  id: 1,
  name: "Laptop",
  price: 999.99,
  category: "Electronics",
  stock: 50,
});

db.products.find();
