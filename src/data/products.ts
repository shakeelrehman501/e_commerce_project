export interface HeroSlides {
  title:string;
  subtitle:string;
  image:string;
  buttonText:string;
}

export const heroSlides:HeroSlides[] = [
    {
      title: "Summer Collection 2026",
      subtitle: "Up to 50% off on selected items",
      image: "https://images.unsplash.com/photo-1528145203756-0ed7f01ee120?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText: "Shop Now"
    },
    {
      title: "New Electronics Arrivals",
      subtitle: "Latest tech at best prices",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&h=600&fit=crop",
      buttonText: "Explore"
    },
    {
      title: "Sportswear Sale",
      subtitle: "Get fit with premium gear",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=600&fit=crop",
      buttonText: "Shop Sale"
    }
  ];


export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  rating: number;
  reviews?: number;
  description: string;
  sizes?: string[];
  colors?: string[];
  images?: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  discount?: number;
  stock?: number;
  inStock?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop",
    category: "Shoes",
    brand: "Nike",
    rating: 4.5,
    reviews: 128,
    description: "Comfortable and stylish white sneakers perfect for everyday wear. Made with premium materials and cushioned sole.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["White", "Black", "Gray"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop"
    ],
    isNew: false,
    discount: 31,
    stock: 3,
    inStock: true
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 159.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    brand: "Sony",
    rating: 5,
    reviews: 256,
    description: "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    colors: ["Black", "Silver", "Rose Gold"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop"
    ],
    isBestSeller: true,
    discount: 20,
    stock: 30,
    inStock: true
  },
  {
    id: 3,
    name: "Leather Backpack",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Bags",
    brand: "Fossil",
    rating: 2.5,
    reviews: 89,
    description: "Stylish leather backpack with laptop compartment and multiple pockets.",
    colors: ["Brown", "Black", "Tan"],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&h=800&fit=crop"
    ],
    isNew: true,
    stock: 20,
    inStock: true
  },
  {
    id: 4,
    name: "Smart Watch Pro",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    brand: "Apple",
    rating: 4.7,
    reviews: 512,
    description: "Advanced smartwatch with health tracking, GPS, and waterproof design.",
    colors: ["Black", "Silver", "Gold"],
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&h=800&fit=crop"
    ],
    isBestSeller: true,
    discount: 25,
    stock: 15,
    inStock: true
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Clothing",
    brand: "Levi's",
    rating: 3.2,
    reviews: 145,
    description: "Classic denim jacket with comfortable fit and timeless style.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue", "Black", "Light Blue"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&h=800&fit=crop"
    ],
    stock: 40,
    inStock: true
  },
  {
    id: 6,
    name: "Minimalist Sunglasses",
    price: 49.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Accessories",
    brand: "Ray-Ban",
    rating: 4.6,
    reviews: 203,
    description: "UV protection sunglasses with sleek design and durable frame.",
    colors: ["Black", "Tortoise", "Clear"],
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop"
    ],
    discount: 38,
    stock: 25,
    inStock: true
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Shoes",
    brand: "Adidas",
    rating: 4.5,
    reviews: 178,
    description: "Lightweight running shoes with excellent cushioning and breathable mesh.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Red", "Blue", "Black"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop"
    ],
    isBestSeller: true,
    stock: 35,
    inStock: true
  },
  {
    id: 8,
    name: "Portable Speaker",
    price: 69.99,
    originalPrice: 99.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    brand: "JBL",
    rating: 2.8,
    reviews: 167,
    description: "Waterproof Bluetooth speaker with 12-hour battery life and powerful bass.",
    colors: ["Black", "Blue", "Red"],
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&h=800&fit=crop"
    ],
    isNew: true,
    discount: 30,
    stock: 10,
    inStock: true
  },
  {
    id: 9,
    name: "Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "Clothing",
    brand: "H&M",
    rating: 3.5,
    reviews: 234,
    description: "Soft cotton t-shirt with comfortable fit, perfect for casual wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Gray", "Navy"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=800&fit=crop"
    ],
    stock: 50,
    inStock: true
  },
  {
    id: 10,
    name: "Basic Flip Flops",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&h=400&fit=crop",
    category: "Shoes",
    brand: "Generic",
    rating: 1.5,
    reviews: 45,
    description: "Simple flip flops for casual beach wear. Basic quality.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "Blue", "Gray"],
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1562843497-745b60c0cd8f?w=800&h=800&fit=crop"
    ],
    isNew:true,
    stock: 20,
    inStock: true
  },
  {
    id: 11,
    name: "Pro Yoga Mat",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
    category: "Sports",
    brand: "Nike",
    rating: 1.1,
    reviews: 156,
    description: "Premium non-slip yoga mat with extra cushioning for comfort during workouts.",
    colors: ["Purple", "Blue", "Black", "Pink"],
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=800&h=800&fit=crop"
    ],
    isNew: true,
    stock: 15,
    inStock: true
  }
];


export const categories = [
  { name: "Electronics", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop" },
  { name: "Clothing", image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop" },
  { name: "Shoes", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop" },
  { name: "Bags", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&h=400&fit=crop" },
  { name: "Accessories", image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop" },
  { name: "Sports", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=400&fit=crop" }
];



export const brands = ["Nike", "Adidas", "Apple", "Sony", "Levi's", "H&M", "Fossil", "Ray-Ban", "JBL", "Lululemon", "Hydro Flask", "Logitech"];

export const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Excellent quality! Highly recommend this product.",
    date: "2026-02-15"
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 4,
    comment: "Great value for money. Fast shipping too!",
    date: "2026-02-20"
  },
  {
    id: 3,
    name: "Emma Williams",
    rating: 5,
    comment: "Love it! Exactly as described.",
    date: "2026-02-28"
  }
];