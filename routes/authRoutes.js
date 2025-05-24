import express from "express"
import jwt from "jsonwebtoken"

const router = express.Router();


const adminUser = {
  email: "manish@lovorise.com",
  password: "manish@0077",
  id: 1,
  role: "admin",
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === adminUser.email && password === adminUser.password) {
    const token = jwt.sign(
      { id: adminUser.id, role: adminUser.role, email: adminUser.email },
      "lovorise_secret_key",
      { expiresIn: "1h" }
    );

    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

export default router
