const express =require("express");

const router = express.Router();

// middlewares
const { requireSignin, isAdmin } =require("../middlewares/auth.js");
// controllers
const {
  register,
  login,
  secret,
  updateProfile,
  getOrders,
  allOrders,
} =require("../controllers/auth.js");

router.post("/register", register);
router.post("/login", login);
router.get("/auth-check", requireSignin, (req, res) => {
  res.json({ ok: true });
});
router.get("/admin-check", requireSignin, isAdmin, (req, res) => {
  res.json({ ok: true });
});

router.put("/profile", requireSignin, updateProfile);

// testing
router.get("/secret", requireSignin, isAdmin, secret);

// orders
router.get("/orders", requireSignin, getOrders);
router.get("/all-orders", requireSignin, isAdmin, allOrders);

module.exports= router;
