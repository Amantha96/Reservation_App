import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utills/error.js";

export const createRoom =async (req, res, next) => {

    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)

    try{
        const savedRoom = await newRoom.save();

    try {
    await Hotel.findByIdAndUpdate (hotelId,{
        $push:{rooms:savedRoom._id},
    })

}catch(err){
    next(err)
}
res.status(200).json(savedRoom);

}catch(err){
    next(err)
}
}

import Hotel  from "../models/Hotel.js";

export const createHotel =async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)

    } catch (err) {
        next(err)

    }

}

export const updatedRoom =async (req, res, next) => {
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }

        );
        res.status(200).json(updatedRoom)

    } catch (err) {
        next(err)

    }

}
export const deleteRoom =async (req, res, next) => {
    const hotelId =req.params.hotelId;
    try {
        await Room.findByIdAndDelete(
            req.params.id
            

        );

        try {
            await Hotel.findByIdAndUpdate (hotelId,{
                $pull:{rooms:req.params.id},
            })
        
        }catch(err){
            next(err)
        }
        res.status(200).json("Room has been deleted")

    } catch (err) {
        next(err);

    }

}
export const getRoom =async (req, res, next) => {
    try {

        const room = await Room.findById(
            req.params.id

        );
        res.status(200).json(room)

    } catch (err) {
        next(err)

    }

}
export const getRooms =async (req, res, next) => {

        try {
    
            const rooms = await Rooms.find();
            res.status(200).json(rooms)
    
        } catch (err) {
        next(err)

    }

}