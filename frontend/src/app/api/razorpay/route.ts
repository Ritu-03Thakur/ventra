import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';  


export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    console.log("amount",amount)
    
    // Initialize Razorpay with your credentials
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SECRET!,
    });

    // Create an order
    const options = {
      amount: amount * 100, // Razorpay works in paise (1 INR = 100 paise)
      currency: 'INR',
      receipt: 'order_rcptid_' + Math.floor(Math.random() * 1000),
      payment_capture: 1,
    };

    const order = await razorpay.orders.create(options);
    
    return NextResponse.json({
      id: order.id,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { error: 'Error creating order' },
      { status: 500 }
    );
  }
}
