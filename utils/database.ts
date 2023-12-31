const mongoose = require("mongoose");

/**
 * Connects to the database
 * @requires MONGO_URI The URI of the MongoDB database in the .env file
 * @returns {Promise<void>}
 */
export const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error: any) {
    console.log(error.message);
    process.exit(1);
  }
};