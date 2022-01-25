import express from "express";
import { createUser,getAllUsers,getUser,updateUser,deleteUser } from "./userRoute.js";
const route = express.Router();

route.post('/register',createUser)
route.get('/getAllUsers',getAllUsers)
route.get('/getUserById/:id',getUser)
route.put('/updateUser/:id',updateUser)
route.delete('/deleteUser/:id',deleteUser)

export default route;