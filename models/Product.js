import mongoose, {model, Schema, models} from "mongoose";

const ProductSchema = new Schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  price: {type: Number, required: true},
  images: [{type: String}],
  category: {type:mongoose.Types.ObjectId, ref:'Category'},
  // category: [{type: String}],

});

export const Product = models.Product || model('Product', ProductSchema);

// import mongoose, { model, Schema, models } from "mongoose";

// const ProductSchema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   images: [{ type: String }],
//   category: { type: mongoose.Types.ObjectId, ref: 'Category', index: true }, // Add index here
// });

// export const Product = models.Product || model('Product', ProductSchema);