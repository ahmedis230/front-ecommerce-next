// import mongoose from "mongoose"

// export function mongooseConnect() {

//   if (mongoose.connection.readyState === 1) {
//     return mongoose.connection.asPromise();

//   } else {
//     const uri = process.env.MONGODB_URI
//     return mongoose.connect(uri);
//   }
// }
import mongoose from "mongoose";

const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
};

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI;
    return mongoose.connect(uri, connectionOptions);
  }
}