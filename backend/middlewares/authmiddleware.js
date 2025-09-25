import jwt from "jsonwebtoken";
import ExpressError from "../utils/ExpressError.js";
import wrapAsync from "../utils/WrapAsync.js";
import Transaction from "../models/Transaction.js";
import User from "../models/UserModel.js";
 const secretKey="12345"
export const authenticationMiddleware=wrapAsync(async(req,res,next)=>{
    
     const {token}= req.signedCookies;
     if (!token) {
    return next(new ExpressError(401, "Authentication required"));
  }
  const {id}=jwt.verify(token,secretKey);
  const user = await User.findById(id);
  req.user=user;
next();
   


});

export const authorizationMiddleware=wrapAsync(async(req,res,next)=>{
  

  if (req.user.role!="admin") {
    return next(new ExpressError(403, "You are not authorized for this action"));
  }


next();
})