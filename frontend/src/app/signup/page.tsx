"use client";
import { setName } from "@/lib/store/FeaturedSlice/auth";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const dispatch = useDispatch()

  const onSignup = async (e: any) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_NEXT_URL}/api/users/signup`,
        user
      );
      if (response.status === 201) {
        dispatch(setName(user.name));
        router.push("/");
      }
    } catch (error) {
      console.log("signup failed");
    }
  };

  return (
    <>
      <section className="p-2  bg-cover bg-center text-[#0d3169] min-h-screen">
        <div className="flex items-center mt-3 justify-center  px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2"></div>
            <h2 className="flex justify-center text-2xl text-textSecondary font-bold leading-tight ">
              Create Account
            </h2>
            <p className="mt-2 text-base ">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="font-medium  transition-all duration-200 hover:underline"
              >
                login
              </Link>
            </p>
            <div className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="Name" className="text-base font-medium ">
                    {" "}
                    Name{" "}
                  </label>

                  <div className="relative mt-2 ">
                    <div className="absolute inset-y-0 left-0 flex  items-center p-1 pointer-events-none">
                      <BsPersonCircle className="w-4 h-4 " />
                    </div>

                    <input
                      className="flex  h-10 w-full rounded-md border border-[#114b89] bg-transparent px-6 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      value={user.name}
                      onChange={(e) =>
                        setUser({ ...user, name: e.target.value })
                      }
                      placeholder="Name"
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-base font-medium ">
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
                      htmlFor="password"
                      className="text-base font-medium "
                    >
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center p-1 pointer-events-none">
                      <BiSolidLockAlt className="w-4 h-4" />
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
                    onClick={onSignup}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
