"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaShoppingBag, FaMapMarkerAlt, FaCreditCard, FaCheck } from 'react-icons/fa';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const PlaceOrder = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate order summary
  const subtotal: number = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping: number = 0; // Free shipping for demo
  const tax: number = subtotal * 0.18; // 18% tax
  const total: number = subtotal + shipping + tax;

  // Load cart items from localStorage (replace with your actual cart state management)
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setOrderItems(cart);
    // Load saved address if available
    const savedAddress = localStorage.getItem('shippingAddress') || '';
    setAddress(savedAddress);
  }, []);

  const handlePayment = async () => {
    if (!address) {
      alert('Please enter your shipping address');
      return;
    }

    setLoading(true);

    try {
      // Create order on your server
      const response = await fetch('/api/razorpay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          currency: 'INR',
        }),
      });

      const order = await response.json();

      // Load Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency,
          name: 'Ventra Fashion',
          description: 'Payment for your order',
          order_id: order.id,
          handler: async function (response: any) {
            // Handle successful payment
            try {
              // Verify payment on your server
              const verifyResponse = await fetch('/api/verify-payment', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  order_id: order.id,
                  payment_id: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                }),
              });

              const result = await verifyResponse.json();
              
              if (result.success) {
                // Clear cart and show success message
                localStorage.removeItem('cart');
                setOrderPlaced(true);
                // Redirect to order success page after 3 seconds
                setTimeout(() => {
                  router.push('/order-success');
                }, 3000);
              } else {
                alert('Payment verification failed. Please contact support.');
              }
            } catch (error) {
              console.error('Payment verification error:', error);
              alert('Error verifying payment. Please contact support.');
            }
          },
          prefill: {
            name: 'Customer Name', // Replace with actual user data
            email: 'customer@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#4F46E5',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };

      document.body.appendChild(script);
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Error creating order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaCheck className="text-green-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h2>
          <p className="text-gray-600 mb-6">Thank you for your purchase. Your order has been received.</p>
          <p className="text-sm text-gray-500">Redirecting to order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <FaShoppingBag className="text-indigo-600 text-2xl mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Shipping & Payment */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <FaMapMarkerAlt size={14} />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Shipping Address</h2>
              </div>
              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your complete delivery address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    localStorage.setItem('shippingAddress', e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 mr-3">
                  <FaCreditCard size={14} />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Payment Method</h2>
              </div>
              
              <div className="space-y-4 mt-4">
                <div className="flex items-center">
                  <input
                    id="razorpay"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    checked={paymentMethod === 'razorpay'}
                    onChange={() => setPaymentMethod('razorpay')}
                  />
                  <label htmlFor="razorpay" className="ml-3 block text-sm font-medium text-gray-700">
                    Credit/Debit Card, UPI, Net Banking (Razorpay)
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="cod"
                    name="payment-method"
                    type="radio"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                  />
                  <label htmlFor="cod" className="ml-3 block text-sm font-medium text-gray-700">
                    Cash on Delivery (Not Available)
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image || '/placeholder-product.jpg'}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="line-clamp-1">{item.name}</h3>
                        <p className="ml-4">₹{item.price.toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                  <p>Subtotal</p>
                  <p>₹{subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <p>Shipping</p>
                  <p>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 mb-4">
                  <p>Tax (18%)</p>
                  <p>₹{tax.toFixed(2)}</p>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <p>Total</p>
                  <p>₹{total.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handlePayment}
                  disabled={loading || orderItems.length === 0}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${(loading || orderItems.length === 0) ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Processing...' : 'Place Order'}
                </button>
              </div>
              
              <p className="mt-4 text-center text-sm text-gray-500">
                By placing this order, you agree to our{' '}
                <a href="/terms" className="text-indigo-600 hover:text-indigo-500">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
