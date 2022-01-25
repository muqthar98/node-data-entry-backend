import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    itemName :{
        type: String,
    },
    advanceAmount:{
        type: Number,
    },
    address:{
        type: String,
    },
    isPaid:{
        type: String,
    }
},{timestamps:true});

const User = mongoose.model("User", userSchema);

export default User;