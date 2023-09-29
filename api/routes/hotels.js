import express from 'express';
import Hotel from "../models/Hotel.js";

import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utills/verfiyToken.js';

const router = express.Router();


//CREATE
router.post("/",verifyAdmin, createHotel);
//UPDATE
router.put("/:id",verifyAdmin, updatedHotel);
//DELETE
router.delete("/:id",verifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getHotels);

export default router