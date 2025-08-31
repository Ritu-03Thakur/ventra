'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/Component/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: '/images/person.jpg',
      bio: 'With over 15 years in the e-commerce industry, Alex leads Ventra with a vision for sustainable and customer-focused retail.'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Design',
      image: '/images/person.jpg',
      bio: 'Sarah brings creativity and innovation to our product selection, ensuring we offer the best in style and functionality.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Tech Lead',
      image: '/images/person.jpg',
      bio: 'Michael oversees our technology stack, making sure your shopping experience is seamless and secure.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
        </div>
        <motion.div 
          className="container mx-auto px-6 text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Redefining e-commerce with passion, innovation, and a commitment to excellence.
          </p>
        </motion.div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              variants={item}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={item}
            >
              At Ventra, we believe in making quality products accessible to everyone. Our mission is to provide an exceptional shopping experience with a focus on sustainability, innovation, and customer satisfaction.
            </motion.p>
            <motion.div variants={item}>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                Shop Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
          >
            {[
              { number: '10K+', label: 'Happy Customers' },
              { number: '500+', label: 'Quality Products' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="bg-green-50 p-8 rounded-xl text-center"
                variants={item}
              >
                <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Ventra who work tirelessly to bring you the best shopping experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-200 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-900">{member.name}</h3>
                <p className="text-green-600 text-center mb-4">{member.role}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
              Join thousands of satisfied customers who trust Ventra for their shopping needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/product"
                className={cn(
                  "bg-white text-green-700 hover:bg-green-50 px-8 py-6 text-lg",
                  "transition-all duration-300 transform hover:-translate-y-1"
                )}
              >
                Shop Now
              </Link>
              <Link 
                href="/contact"
                className={cn(
                  "border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg",
                  "transition-all duration-300 transform hover:-translate-y-1"
                )}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}