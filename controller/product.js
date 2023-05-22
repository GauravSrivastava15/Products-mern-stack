const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;
const mongoose = require('mongoose');

exports.createProduct = async (req, res) => {
  const product = new Product(req.body);
  try{
    const result = await product.save();
    res.status(201).json(result);
    console.log(result)
  }catch(error){
    res.status(400).json(error);
    console.log(error)
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findById(id)
  res.json(products);
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndReplace({_id:id}, req.body, {new:true})
    res.status(201).json(doc);
  }
  catch(error){
    console.log(error)
    res.status(400).json(erroe);
  }
  
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndUpdate({_id:id}, req.body, {new:true})
    res.status(201).json(doc);
  }
  catch(error){
    console.log(error)
    res.status(400).json(erroe);
  }
  
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc);
  }
  catch(error){
    console.log(error)
    res.status(400).json(error);
  }
  
};
