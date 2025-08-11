import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const { order_id, payment_id, signature } = await req.json();
    
    // Verify the payment signature
    const text = order_id + '|' + payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(text)
      .digest('hex');

    const isSignatureValid = expectedSignature === signature;

    if (isSignatureValid) {
      // Here you would typically:
      // 1. Save the order to your database
      // 2. Update inventory
      // 3. Send confirmation email, etc.
      
      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        order_id,
        payment_id
      });
    } else {
      return NextResponse.json(
        { success: false, error: 'Invalid signature' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { success: false, error: 'Error verifying payment' },
      { status: 500 }
    );
  }
}
