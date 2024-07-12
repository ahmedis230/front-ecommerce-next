// // import dbConnect from '../../lib/dbConnect';
// import clientPromise from '../../lib/mongodb.js';
// import { Categories } from '../../models/Category.js';

// export default async function handler(req, res) {
// //   await dbConnect();
// // await clientPromise();

//   const { category } = req.query;
//   console.log(category);
//   console.log("API request received for category:", category);

//   try {
//     console.log("heloooooooooooooo");
//     const categories = await Categories.find({ name });
//     console.log("categories found:", categories);

//     res.status(200).json(categories);
//   } catch (error) {
//     console.error("Error fetching categories:", error);

//     res.status(500).json({ error: 'Failed to fetch categories' });
//   }
// }


// api/category.js
// import dbConnect from '../../lib/dbConnect';
// import clientPromise from '../../lib/mongodb.js';
// import { Categories } from '../../models/Category.js';

// export default async function handler(req, res) {
//   // await dbConnect();
//   // await clientPromise;

//   // const { category } = req.query;
//   // console.log("API request received for category:", category);

//   // try {
//   //   console.log("hellooooooo");

//   //   // Fetch categories based on category name
//   //   const categories = await Categories.find({ name: category }); // Adjusted here
//   //   console.log("categories found:", categories);

//   //   res.status(200).json(categories);
//   // } catch (error) {
//   //   console.error("Error fetching categories:", error);

//   //   res.status(500).json({ error: 'Failed to fetch categories' });
//   // }


//   try {
//     // await clientPromise;

//     const { category } = req.query;
//     console.log(` my category ${category}`);
//     console.log("API request received for category:", category);

//     const categories = await Categories.find({ name: category });
//     console.log("categories found:", categories);

//     res.status(200).json(categories);
//   } catch (error) {
//     console.error("Error fetching categories:", error);
//     res.status(500).json({ error: 'Failed to fetch categories' });
//   }
// }


import clientPromise from '../../lib/mongodb.js';
import { Categories } from '../../models/Category.js';

export default async function handler(req, res) {
  const { category } = req.query;
  console.log("API request received for category:", category);

  try {
    const client = await clientPromise;
    const db = client.db();
    
    // Fetch categories based on category name
    const categories = await db.collection('categories').find({ name: category }).toArray();
    console.log("Categories found:", categories);

    res.status(200).json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
}
