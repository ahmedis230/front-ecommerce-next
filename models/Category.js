import mongoose, {model, Schema, models} from "mongoose";

const CategorySchema = new Schema({

//   category: {type:mongoose.Types.ObjectId, ref:'Category'},
  // category: [{type: String}],
  name: [{type:String}]

});

export const Categories = models.categories || model('categories', CategorySchema);