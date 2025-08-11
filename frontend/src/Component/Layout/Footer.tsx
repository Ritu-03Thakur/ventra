import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">VENTRA</h3>
            <p className="text-gray-400 text-sm">Elevating your style with premium fashion essentials.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4">SHOP</h4>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Collections', 'Sale'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-medium mb-4">CUSTOMER SERVICE</h4>
            <ul className="space-y-3">
              {['Contact Us', 'FAQs', 'Shipping & Returns', 'Size Guide'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">LEGAL</h4>
            <ul className="space-y-3">
              {['Terms & Conditions', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-white font-medium hover:text-gray-300 transition-colors">
              VENTRA
            </Link>
          </div>
          <div className="flex space-x-6">
            <p>© {currentYear} VENTRA. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {['Instagram', 'Twitter', 'Facebook', 'Pinterest'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

 

export default Footer ; 
