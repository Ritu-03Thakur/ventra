
"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import Card from '@/Component/Common/Card'
import { Heading, SubHeading } from '@/Component/Common/Common'
import { productItems } from '@/Data/Data'
import { Button } from '@/Component/ui/button'
import { Filter, Search, ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"

// Category filter options
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'new', name: 'New Arrivals' },
  { id: 'bestsellers', name: 'Bestsellers' },
  { id: 'sale', name: 'On Sale' },
]

// Sort options
const sortOptions = [
  { id: 'featured', name: 'Featured' },
  { id: 'price-asc', name: 'Price: Low to High' },
  { id: 'price-desc', name: 'Price: High to Low' },
  { id: 'newest', name: 'Newest Arrivals' },
]

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const word = "Discover the latest trends and timeless classics at our online store, where fashion meets convenience. From chic dresses to stylish accessories, we have everything you need to elevate your wardrobe."

  // Filter and sort products
  const filteredProducts = productItems
    .filter(item => {
      if (selectedCategory === 'all') return true
      if (selectedCategory === 'new') return item.isNew
      if (selectedCategory === 'bestsellers') return item.isBestseller
      if (selectedCategory === 'sale') return item.price < 1500 // Items under 1500 are considered on sale
      return true
    })
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price
      if (sortBy === 'price-desc') return b.price - a.price
      if (sortBy === 'newest') return b.isNew === a.isNew ? 0 : b.isNew ? -1 : 1
      return 0 // featured - keep original order
    })

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <motion.div 
        className="relative h-64 md:h-96  w-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={"/images/collectionFront.png"}
          alt="Fashion Collection"
          fill
          className="object-cover mt-header-md"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-center p-8 ">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            SHOP COLLECTION
          </motion.h1>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <Heading heading="SHOP" className="mb-4" />
          <SubHeading 
            subheading={word} 
            className="mb-8"
            maxWidth="max-w-3xl"
          />
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="w-full md:w-auto flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => {
                  setIsFilterOpen(!isFilterOpen)
                  if (isSortOpen) setIsSortOpen(false)
                }}
              >
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="p-2">
                    <h3 className="px-3 py-2 text-sm font-medium text-gray-700">Categories</h3>
                    <div className="space-y-1">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            selectedCategory === category.id 
                              ? 'bg-accent/10 text-accent font-medium' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => {
                            setSelectedCategory(category.id)
                            setIsFilterOpen(false)
                          }}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => {
                  setIsSortOpen(!isSortOpen)
                  if (isFilterOpen) setIsFilterOpen(false)
                }}
              >
                Sort
                <ChevronDown className={`h-4 w-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
              </Button>
              
              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                  <div className="p-2">
                    <h3 className="px-3 py-2 text-sm font-medium text-gray-700">Sort By</h3>
                    <div className="space-y-1">
                      {sortOptions.map((option) => (
                        <button
                          key={option.id}
                          className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                            sortBy === option.id 
                              ? 'bg-accent/10 text-accent font-medium' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                          onClick={() => {
                            setSortBy(option.id)
                            setIsSortOpen(false)
                          }}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 1 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {filteredProducts.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card 
                  {...item} 
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900">No products found</h3>
            <p className="mt-2 text-gray-500">Try adjusting your search or filter to find what you&apos;re looking for.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSelectedCategory('all')
                setSearchQuery('')
                setSortBy('featured')
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
