const {Order} = require('../models/order.model');
const {OrderItem} = require('../models/order.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Order.find());
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
};

exports.getById = async (req, res) => {
  try {
    const ord = await Order.findById(req.params.id);
    if(!ord) res.status(404).json({ message: 'Not found' });
    else res.json(ord);
  }
  catch(err) {
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  console.log("entering POST order");
    try {
        const { orders, name, address, phoneNumber, email } = req.body;  
        const orderItems = [];
        if(orders === undefined) {
          throw new Error('No order items in order. BTW in free time change orders to orderItems - here and in database');
        }
        orders.forEach(element => {
          orderItem = new OrderItem({productId: element.productId, orderedItems: element.orderedItems, amountAll: element.amountAll, comment: element.comment });
          orderItems.push(orderItem);
        }); 
        const newOrder = new Order({ orders: orderItems, name, address, phoneNumber, email });
        console.log("POST order before SAVE");
        await newOrder.save();
        console.log("POST order after SAVE");
        res.json({ message: 'OK' });
    } catch (err) {
      console.log("POST order error", err);
      res.status(500).json({ message: err.message });
    }
};