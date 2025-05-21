import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Razorpay  from 'razorpay';
import 'dotenv/config';

const currency="INR"
// const deliveryCharge =10;
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
// place using cod
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    console.log(req.body)
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod:'COD',
      payment: false, // Payment status will be updated based on payment method
      date: Date.now()
    }
    const newOrder = new orderModel(orderData);

    await newOrder.save();
    
    // Clear user's cart after order placement
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ 
      success: true, 
      message: 'Order placed successfully',
    });
  } catch (error) {
    console.error('Error in placeOrder:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Place order with Razorpay payment

const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
  
    // if (!userId || !items || !amount || !address || !paymentMethod || !razorpay_payment_id) {
    //   return res.status(400).json({ success: false, message: 'Missing required fields' });
    // }

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod:"Razorpay",
      // status: "Order Placed",
      payment: false, // Razorpay payments are processed immediately
      date: Date.now()
    };
    const newOrder =new orderModel(orderData)
    await newOrder.save();
    // await userModel.findByIdAndUpdate(userId, { cartData: {} });

    const options ={
      amount:amount*100,
      currency,
      receipt:newOrder._id.toString()
    }
    await razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.json({ success: false, message: error });
      }
      res.json({ success: true, message: 'Order placed successfully with Razorpay', order });
    })

  } catch (error) {
    console.error('Error in placeOrderRazorpay:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
const verifyRazorpay = async(req,res)=>{
  try {
    const {userId, razorpay_order_id}=req.body;
    const orderInfo=await razorpayInstance.orders.fetch(razorpay_order_id);
    if(orderInfo.status==="paid"){
      await orderModel.findByIdAndUpdate(orderInfo.receipt,{payment:true})
      await userModel.findByIdAndUpdate(userId,{cartData:{}})
      res.json({success:true,message:"Payment successful"})
    }
    else{
            res.json({success:false,message:"Payment failed"})
    }
  } catch (error) {
    console.log(error)
                res.json({success:false,message:error.message})

  }
}

// Get all orders (Admin panel)
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error in allOrders:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// Get user's orders (Frontend)
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID is required' });
    }

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error in userOrders:', error);
    res.status(500).json({ success: false, message: 'Internal server error ' });
  }
};

// Update order status (Admin panel)
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    
    if (!orderId || !status) {
      return res.status(400).json({ success: false, message: 'Missing required fields in order status' });
    }

    await orderModel.findByIdAndUpdate(
      orderId,
      { status }
    );
    res.json({ success: true, message: 'Order status updated' });
  } catch (error) {
    console.error('Error in updateStatus:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
const removeOrder = async (req, res) => {
  try {
    const orderId = req.body.id;
    if (!orderId) {
      return res.json({ success: false, message: "Order ID missing" });
    }
    await orderModel.findByIdAndDelete(orderId);
    res.json({ success: true, message: "Order deleted" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { removeOrder,placeOrder, placeOrderRazorpay,verifyRazorpay, allOrders, userOrders, updateStatus };