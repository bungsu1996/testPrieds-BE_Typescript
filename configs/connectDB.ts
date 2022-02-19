import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class connectDBMongoose {
  constructor() {}
  public static connectDB = async () => {
    try {
      const dbPathUrl =
        "mongodb://hmztest-api:testhmz160196@cluster0-shard-00-00.cs6eg.mongodb.net:27017,cluster0-shard-00-01.cs6eg.mongodb.net:27017,cluster0-shard-00-02.cs6eg.mongodb.net:27017/hmztest-api?ssl=true&replicaSet=atlas-oqy34o-shard-0&authSource=admin&retryWrites=true&w=majority";
      await mongoose.connect(`${dbPathUrl}`);
      console.log("Database Has Been Connected");
    } catch (error) {
      console.log(error);
      console.error((error as Error).message);
    }
  };
}

export default connectDBMongoose;
