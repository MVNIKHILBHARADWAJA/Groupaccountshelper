import {Router} from "express";
import { logOut, profile, signIn, signUp } from "../controllers/userControllers.js";
import { authenticationMiddleware} from "../middlewares/authmiddleware.js";




   const router=Router();

router.route("/signUp").post(signUp);
router.route("/signIn").post(signIn);
router.route("/logout").get(authenticationMiddleware,logOut);
router.route("/profile").get(authenticationMiddleware,profile);

export default router;
