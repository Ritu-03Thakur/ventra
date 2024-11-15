import express from "express"
import {getCurrentUser, loginUser, logOutUser, registerUser} from "../controllers/user.controller.js" ; 
import { allProduct, uploadProduct } from "../controllers/product.controller.js";
import {verifyAuth} from "../middlewares/auth.middleware.js" ; 


const userRouter = express.Router() ; 

userRouter.route("/signup").post(registerUser)
userRouter.route("/login").post(loginUser)
userRouter.route("/log-out").post(verifyAuth , logOutUser)
userRouter.route("/current-user").get(verifyAuth , getCurrentUser)




userRouter.route("/product").get(allProduct)

// for one time only 
// userRouter.route("/upload").post(uploadProduct)



export  {userRouter} 