import express from "express";
import adminAuth from "../middleware/auth.js";
import authUser from "../middleware/auth.js";
import {
  placeOrder,
  userOrders,
  updateStatus,
  placeOrderRazorpay,
  allOrders,
  verifyRazorpay,
  removeOrder,
} from "../controllers/orderController.js";
const orderRouter = express.Router();
// admin feature
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);
orderRouter.post("/remove", adminAuth, removeOrder);


// Payment feature
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);


// user feature
orderRouter.post("/userorders", authUser, userOrders);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

export default orderRouter;
