import bcrypt from "bcryptjs"; // serve per criptare la password

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Arianna",
    email: "arianna@example.com",
    password: bcrypt.hashSync("admin", 10),
  },
];

export default users;
