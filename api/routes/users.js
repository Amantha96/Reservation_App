import express from 'express';
import {updatedUser,deleteUser,getUser,getUsers} from "../controllers/user.js";
import { verifyAdmin, verifyToken ,verifyUser} from '../utills/verfiyToken.js';

const router =express.Router();

// router.get("/checkauthentication",verifyToken,(req, res, next)=>{
//     res.send("hello user,you are logged in")

// })

// router.get("/checkuser/:id",verifyUser,(req, res, next)=>{
//     res.send("hello user,you are logged in and you can delete your account")

// })

// router.get("/checkadmin/:id",verifyAdmin,(req, res, next)=>{
//     res.send("hello admin,you can logged in and you can delete all accounts")

// })

//UPDATE
router.put("/:id",verifyUser, updatedUser);
//DELETE
router.delete("/:id",verifyUser, deleteUser);
//GET
router.get("/:id",verifyUser, getUser);
//GETALL
router.get("/",verifyAdmin, getUsers);


export default router