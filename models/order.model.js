const mongoose = require("mongoose");
 
const OrderItemSchema = new mongoose.Schema({ 
  productId: { type: String, required: false }, 
  orderedItems: { type: String, required: false }, 
  amountAll: { type: Number, required: false },
  price: { type: Number, required: false },
  comment: { type: String, required: false }, 
});

const orderSchema = new mongoose.Schema({  
  orders: { type: [OrderItemSchema], required: false },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = {OrderItem : mongoose.model("OrderItem", OrderItemSchema), Order: mongoose.model("Order", orderSchema)};
