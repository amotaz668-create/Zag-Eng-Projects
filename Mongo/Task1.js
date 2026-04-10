use("Library_System");
db.users.insertMany([
  {
    id: 1,
    name: "Moataz",
    age: 15,
    email: "moataz@example.com",
    role: "admin",
  },
  {
    id: 2,
    name: "Ahmed",
    age: 19,
    email: "ahmed@example.com",
    role: "user",
  },
  {
    id: 3,
    name: "Mohmed",
    age: 35,
    email: "mohmed@example.com",
    role: "student",
  },
  {
    id: 4,
    name: "Fatima",
    age: 28,
    email: "fatima@example.com",
    role: "librarian",
  },
  {
    id: 5,
    name: "Youssef",
    age: 32,
    email: "youssef@example.com",
    role: "member",
  },
]);

db.books.insertMany([
  {
    id: 1,
    title: "Mongo Basics",
    author: "John Doe",
    pages: 180,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    pages: 167,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 270,
  },
]);
// ================ part 3 =================
// 1)
db.users.find({ age: { $gt: 21 } });
// 2)
db.users.find({ $or: [{ age: { $lt: 20 } }, { role: "admin" }] });
// 3)
db.users.find({ age: { $gt: 20, $lt: 30 } });
// 4)
db.users.find({ role: { $exists: false } });
// 5)
db.books.find({ pages: { $gt: 200 } });
// 6)
db.books.find({ $or: [{ title: "Mongo Basics" }, { pages: { $lt: 180 } }] });
// 7)
db.books.find({}, { title: 1, pages: 1, _id: 0 }).sort({ pages: -1 }).limit(2);
// 8)
db.users.updateMany({ age: { $lt: 21 } }, { $inc: { age: 1 } });
// 9)
db.users.updateMany({ role: "admin" }, { $set: { isActive: true } });
// 10)
db.users.deleteMany({ age: { $lt: 18 } });
// 11)
db.books.deleteMany({ pages: { $lt: 150 } });
