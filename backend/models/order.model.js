import mongoose, { Schema } from "mongoose";

// orderItems , user ,cart ,paymentDetails , shippingAddress , totalprice
const orderSchema = new Schema(
  {
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    cart: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
      },
    ],

    // paymentDetails : {
    //     paymentDetails: {
    //         orderId: { type: String, required: true },
    //         stripePaymentIntentId: { type: String, required: true },
    //         stripePaymentMethodId: { type: String, required: true },
    //         paymentStatus: { type: String, required: true },
    //       },
    // } ,

    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    totalPrice: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Order = mongoose.model("order", orderSchema);
