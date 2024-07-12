import mongoose from 'mongoose';
import { Product } from '../../models/Product.js';
import { Category } from '../../models/Category.js';
import clientPromise from '../../lib/mongodb.js';

export default async function handler(req, res) {
  const { categoryName } = req.query;
  console.log("API request received for categoryName:", categoryName);

  try {
    const client = await clientPromise;
    if (!client) {
      throw new Error('Failed to connect to database');
    }

    // Fetch the category based on the name
    const category = await Category.findOne({ name: categoryName }).exec();
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Fetch products based on category ID
    const products = await Product.find({ category: category._id }).limit(2).exec();
    console.log("Products found:", products);

    res.status(200).json({
      category,
      products
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}