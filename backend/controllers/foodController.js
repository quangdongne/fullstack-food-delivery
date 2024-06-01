import foodModel from "../models/foodModel.js";
import express from "express";

import fs from "fs";

//add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: "Food added unsuccessfully" });
  }
};
//display foods list

const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Can not display foods list" });
  }
};
//remove food items
const removeFood = async (req,res) => {
    try {
        const food = await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success: true,message:"Food removed successfully"})
    } catch (error) {
        console.log(error)
        res.json({success: false,message:"Food removed successfully"})
    }
}

export { addFood, listFood,removeFood };
