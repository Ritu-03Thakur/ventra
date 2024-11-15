"use client"
import axios from "axios"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from "react"
import { AiOutlineMail } from "react-icons/ai"
import { BiSolidLockAlt } from "react-icons/bi"
import { useDispatch } from "react-redux"
import { setName } from "@/lib/store/FeaturedSlice/auth"

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
       const response =await axios.post(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/users/login`, user)
        if(response.status == 200){
          const { data: { isLogIn: { name } } } = response;
          dispatch(setName(name));
          const token = response.data.accessToken ; 
           localStorage.setItem("token" , token) ; 
         router.push("/")
        }
       } catch (error) {
        console.log("Login Failed !!")
       }
    }
  return (
    <>
    
     <section className="p-2  bg-cover bg-center text-[#0d3169] min-h-screen">
        <div className="flex items-center mt-3 justify-center  px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2>Demo Purpose -: email- demo@gmail.com and password -: demo123</h2>
            <div className="mb-2 flex justify-center"></div>
            <h2 className="text-center text-textSecondary text-2xl font-bold leading-tight ">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm  ">
              Don&apos;t have an account?{" "}
              <Link
                href={"/signup"}
                title=""
                className="font-semibold  transition-all duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <div className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium "
                  >
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center p-1 pointer-events-none">
                      <AiOutlineMail className="w-4 h-4 " />
                    </div>
                    <input
                    className="flex  h-10 w-full rounded-md border border-[#114b89] bg-transparent px-6 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium "
                    >
                      {" "}
                      Password{" "}
                    </label>
                   
                  </div>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center p-1 pointer-events-none">
                      <BiSolidLockAlt className="w-4 h-4 " />
                    </div>
                    <input
                     className="flex  h-10 w-full rounded-md border border-[#114b89] bg-transparent px-6 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                   className=" authbutton  bg-gradient-to-r from-[#d18a4ef2] to-[#8912b3bf] hover:bg-gradient-to-l hover:from-[#d18a4ef2] hover:to-[#8912b3bf] focus:ring-4 focus:outline-none focus:ring-lime-200"
                    onClick={onLogin}
                  >
                    SIGN IN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
