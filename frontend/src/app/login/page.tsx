"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineMail } from "react-icons/ai"
import { BiSolidLockAlt } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { setName } from "@/lib/store/FeaturedSlice/auth"
import { toast } from "react-toastify"

const Login = () => {
 const [user , setUser] = useState({
    email: "",
    password: "",
 })

 const router = useRouter() 
 const dispatch = useDispatch() 
 
    const onLogin = async (e : any) => {  
       try {
         e.preventDefault()
       const response =await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, user)
        if(response.status == 200){
          const { data: { isLogIn: { name } } } = response;
          dispatch(setName(name));
          const token = response.data.accessToken ; 
           localStorage.setItem("token" , token) ; 
         router.push("/")
        }
       } catch (error) {
        console.log("Login Failed !!")
        toast.error("Login Failed !!")
       }
    }
  // Animated gradient background colors
  const colors = [
    'from-indigo-50 via-blue-50 to-purple-50',
    'from-blue-50 via-purple-50 to-pink-50',
    'from-purple-50 via-pink-50 to-indigo-50',
  ]
  
  const [currentColorIndex, setCurrentColorIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length)
    }, 10000) // Change gradient every 10 seconds
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Gradient Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentColorIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className={`absolute inset-0 bg-gradient-to-br ${colors[currentColorIndex]} transition-colors duration-1000`}
        >
          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 0, 0, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 0, 0, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
              WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.2))',
              opacity: 0.3
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-900 to-transparent" />
          </div>

        </motion.div>
      </AnimatePresence>
      
      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 mt-header">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in to access your account</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
          <div className="mb-6 text-sm bg-blue-50 text-blue-700 p-3 rounded-md">
            <p className="font-medium">Demo Account:</p>
            <p>Email: demo@gmail.com</p>
            <p>Password: demo123</p>
          </div>

          <form className="space-y-6" onSubmit={onLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <AiOutlineMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <BiSolidLockAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="••••••••"
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign in with Google</span>
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </Link>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login
