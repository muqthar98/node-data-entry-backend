import mongoose from "mongoose"

const Connection = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://test:1234@cluster0.rv2dv.mongodb.net/Users?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("Database is connected successfully");
  } catch (err) {
    console.log("Error", err.message);
  }
};

export default Connection;
