import express from 'express';
import Hotel from "../models/Hotel.js";

import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from '../controllers/hotel.js';

const router = express.Router();


//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updatedHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET
router.get("/:id", getHotel);
//GETALL
router.get("/", getHotels);

export default router