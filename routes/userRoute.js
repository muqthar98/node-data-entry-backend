import User from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const {name,phoneNumber,itemName,advanceAmount,address,isPaid} = req.body;
    const user = await User.create({name,phoneNumber,itemName,advanceAmount,address,isPaid});
    res.json({status:200,message:"User created successfully",user});
  } catch (err) {
    res.json({status:401, message: err.message });
  }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json({status:200,message:"User record found",data:users});
      } catch (err) {
        res.json({status:401, message: "User record not found" });
      }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({status:200,message:"User record found",data:user});
      } catch (err) {
        res.json({status:401, message: "User record not found" });
      }
}

export const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
    (user.name = req.body.name || user.name),
    (user.phoneNumber = req.body.phoneNumber || user.phoneNumber);
    (user.itemName = req.body.itemName || user.itemName);
    (user.advanceAmount = req.body.advanceAmount || user.advanceAmount);
    (user.address = req.body.address || user.address);
    (user.isPaid = req.body.isPaid || user.isPaid);

    await user.save();
  
      res.json({
        status: 200,
        message: "User updated successfully",
        data: user
      })
  
    } else {
      res.json({status:401, message: "User not updated"});
    }
}

export const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.json({status:200,message:"User deleted successfully"});
    } else {
      res.json({status:401, message: "User not deleted"});
    }
}
