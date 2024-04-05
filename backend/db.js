import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}`
    );

    console.log(
      `MongoDB connected !! DB HOST :${connectionInstance.connection.host}`
    );

    const fetched_data1 = await mongoose.connection.db.collection("food_items");
    const data1 = await fetched_data1.find({}).toArray();
    global.food_items = data1;
    //console.log(global.food_items);
    const fetched_data2 = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const data2 = await fetched_data2.find({}).toArray();
    global.foodCategory = data2;
  } catch (error) {
    console.log("MongoDB connection error", error);

    process.exit(1);
  }
};

export default dbConnect;
