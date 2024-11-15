import {User} from "./../models/user.model.js"
import {Order} from "./../models/order.model.js"

// place an order
const placeOrder = async (req , res) => {
    try {
        const {items , shippingAddress , totalAmount} = req.body 

        const order =  Order.create({
           user : req.user._id ,
           items , 
          shippingAddress , 
          totalAmount ,
        })
        await order.save() 
        
    // Clear the user's cart after placing the order
    const user = await User.findById(req.user._id);
    user.cart = [];
    await user.save();

    return req.status(201).json(order) ; 

    } catch (error) {
        return res.status(400).json({
            message : "" , 
            error : error.message
         })
    }

}

// get all order histroy 
const orderHistroy = async (req , res) => {
   try {
    const order = await Order.find({user : req.user._id}).populate('items.product') ; 
    return res.status(201).json(order); 
   } catch (error) {
     return res.status(500).json({
        message : "Server Error" , 
        error : error.message
     })
   }
}

export {
    placeOrder,
    orderHistroy
}