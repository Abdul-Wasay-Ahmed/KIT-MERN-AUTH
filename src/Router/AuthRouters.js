import { Router,application } from "express";
import AuthController from "../Controller/AuthController.js";


export let AuthRouters = Router();

AuthRouters.route("/createprofile").post(AuthController.createUser)
AuthRouters.route("/login").post(AuthController.login)
AuthRouters.route("/getprofile").get(AuthController.getProfile)