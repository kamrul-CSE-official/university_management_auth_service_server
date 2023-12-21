import mongoose from "mongoose";
import app from "./app";
import config from "./config";
const port: number = 5000;

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`Database connected successfully🎁`);

    app.listen(config.port, () => {
      console.log(`This server is runing: ${config.port}`);
    });
  } catch (error) {
    console.log(`Database connection fail `, error);
  }
}
boostrap();
