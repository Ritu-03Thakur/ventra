import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { MdOutlineCurrencyExchange, MdOutlineSupportAgent } from "react-icons/md";

const desc = "Our premium collection of stylish and comfortable clothing is designed for modern fashion enthusiasts. Made from high-quality fabrics, each piece offers durability, breathability, and an impeccable fit. Suitable for every season, our clothing line enhances your wardrobe, providing elegance and versatility for any occasion. With a focus on style and sustainability, our pieces are perfect for creating timeless looks that reflect your unique personality.";
const clothesTitle = "Stylish Collection"

const productItems = [
    {
        id: 'PO1',
        title: clothesTitle,
        description: desc, 
        price: 899, 
        category: "Clothes", 
        srcImage: "/images/t1.jpg",
        isNew: true,
        isBestseller: true
    }, 
    {
        id: 'PO2',
        title: clothesTitle,
        description: desc, 
        price: 3499, 
        category: "Clothes", 
        srcImage: "/images/t2.jpg",
        isNew: false,
        isBestseller: true
    },
    {
        id: 'PO3',
        title: clothesTitle,
        description: desc, 
        price: 1799, 
        category: "Clothes", 
        srcImage: "/images/t3.jpg",
        isNew: true,
        isBestseller: false
    }, 
    {
        id: 'PO4',
        title: clothesTitle,
        description: desc, 
        price: 1299, 
        category: "Clothes", 
        srcImage: "/images/t4.jpg",
        isNew: false,
        isBestseller: true
    },
    {
        id: 'PO5',
        title: clothesTitle,
        description: desc, 
        price: 1899, 
        category: "Clothes", 
        srcImage: "/images/t5.jpg",
        isNew: true,
        isBestseller: false
    },
    {
        id: 'PO6',
        title: clothesTitle,
        description: desc, 
        price: 1199, 
        category: "Clothes", 
        srcImage: "/images/t6.jpg",
        isNew: false,
        isBestseller: true
    },
    {
        id: 'PO7',
        title: clothesTitle,
        description: desc, 
        price: 2499, 
        category: "RClothes", 
        srcImage: "/images/t7.jpg",
        isNew: true,
        isBestseller: false
    },
    {
        id: 'PO8',
        title: clothesTitle,
        description: desc, 
        price: 1599, 
        category: "RClothes",  
        srcImage: "/images/t8.jpg",
        isNew: false,
        isBestseller: true
    },
    {
        id: 'PO9',
        title: clothesTitle,
        description: desc, 
        price: 1499, 
        category: "RClothes",  
        srcImage: "/images/t9.jpg",
        isNew: true,
        isBestseller: false
    },
    {
        id: 'PO10',
        title: clothesTitle,
        description: desc, 
        price: 4999, 
        category: "RClothes",  
        srcImage: "/images/t1.jpg",
        isNew: false,
        isBestseller: true
    },
];





const policyText =  [
    {
      id: "PT1", 
      icon : MdOutlineCurrencyExchange , 
      title : "Easy Exchange Policy" , 
      description : "We offer hassle free  exchange policy",
    } , 
    {
      id: "PT2" , 
      icon : IoShieldCheckmarkSharp , 
      title : "7 Days Return Policy" , 
      description : "We provide 7 days free return policy",
    } , 
    {
      id: "PT3" , 
      icon : MdOutlineSupportAgent  , 
      title : "Best customer support" , 
      description : "we provide 24/7 customer support",
    } , 
  ]

export {productItems , policyText}