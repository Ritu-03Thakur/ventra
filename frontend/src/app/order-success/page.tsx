import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <FaCheckCircle className="text-green-500 text-4xl" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your order has been received and is being processed.
          You will receive a confirmation email with order details shortly.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <h2 className="font-medium text-gray-900 mb-2">What&apos;s next?</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Check your email for order confirmation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>We&apos;ll notify you when your order ships</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Track your order in your account</span>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/order-history"
            className="flex-1 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Orders
          </Link>
          <Link
            href="/"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue Shopping
          </Link>
        </div>
        
        <p className="mt-6 text-sm text-gray-500">
          Need help?{' '}
          <a href="/contact" className="text-indigo-600 hover:text-indigo-500">
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
