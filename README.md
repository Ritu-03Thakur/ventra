# Ventra - E-commerce Platform

![Ventra Banner](https://via.placeholder.com/1200x400/4F46E5/FFFFFF?text=Ventra+E-commerce+Platform)

Ventra is a modern, full-stack e-commerce platform built with Next.js (frontend) and Node.js with Express (backend). This project provides a complete online shopping experience with user authentication, product catalog, shopping cart, and order management.

## ✨ Features

### Frontend
- 🛍️ **Product Catalog** - Browse and search products with filters
- 🛒 **Shopping Cart** - Add/remove items, update quantities
- 🔐 **User Authentication** - Secure signup and login
- 📱 **Responsive Design** - Works on all device sizes
- ⚡ **Fast Performance** - Built with Next.js for optimal performance
- 🎨 **Modern UI** - Clean, intuitive interface with Tailwind CSS
- 🔄 **State Management** - Redux Toolkit for efficient state management

### Backend
- 🔒 **JWT Authentication** - Secure user authentication
- 🗄️ **MongoDB Database** - Scalable NoSQL database
- 🛡️ **API Security** - Protected routes and input validation
- 📦 **Product Management** - CRUD operations for products
- 🚚 **Order Processing** - Handle orders and inventory

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **UI Components**: Shadcn UI, Lucide Icons
- **Animation**: Framer Motion
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT, bcrypt
- **API Documentation**: (Add if applicable)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

### Installation

#### 1. Clone the repository
```bash
git clone https://github.com/Ritu-03Thakur/ventra.git
cd ventra
```

#### 2. Set up the Backend
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory with the following variables:
```env
MONGODB_URI=your_mongodb_connection_string
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=your_access_expiry
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=your_refresh_expiry
PORT=5000
```

#### 3. Set up the Frontend
```bash
cd ../frontend
npm install
```

Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```

2. In a new terminal, start the frontend development server:
```bash
cd frontend
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ventra/
├── frontend/               # Frontend application
│   ├── src/
│   │   ├── app/           # Next.js app router
│   │   ├── components/     # Reusable components
│   │   ├── lib/           # Utility functions
│   │   └── store/         # Redux store
│   ├── public/            # Static files
│   └── ...
│
├── backend/               # Backend server
│   ├── controllers/       # Route controllers
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── ...
└── README.md             # This file
```

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with nodemon

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

---

<div align="center">
  Made with ❤️ by Ritu Thakur
</div>
