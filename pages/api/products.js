// import dbConnect from '../../lib/dbConnect';
// import clientPromise from '../../lib/mongodb.js';
// import { Product } from '../../models/Product.js';

// export default async function handler(req, res) {
// //   await dbConnect();
// // await clientPromise;

//   const { category } = req.query;
//   // console.log(category);
//   console.log("API request received for category:", category);

//   try {
//     console.log("heloooooooooooooo");
//     const products = await Product.find({ category });
//     console.log("Products found:", products);

//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);

//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// }



// import dbConnect from '../../lib/dbConnect';
// import clientPromise from '../../lib/mongodb.js';




// import { Product } from '../../models/Product.js';

// export default async function handler(req, res) {
//   // await dbConnect();
//   // await clientPromise;

//   const { category } = req.query;
//   console.log("API request received for category:", category);

//   try {
//     const products = await Product.find({ category });
//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: 'Failed to fetch products' });
//   }
// }

import mongoose from 'mongoose';
import { Product } from '../../models/Product.js';
// import clientPromise from '../../lib/mongodb.js';

export default async function handler(req, res) {
  const { category } = req.query;
  console.log("API request received for category:", category);

  try {
    // Ensure that the database connection is ready
    // const client = await clientPromise;
    // if (!client) {
    //   throw new Error('Failed to connect to database');
    // }

    // Convert category to ObjectId if it's not already
    const categoryId = new mongoose.Types.ObjectId(category);

    // Fetch products based on category
    const products = await Product.find({ category: categoryId }).exec();
    console.log("Products found:", products);

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}