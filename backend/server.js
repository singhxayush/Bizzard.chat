//--> Package Imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

//--> File Imports
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectToMongoDB from "./database/connectToMongoDB.js";

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config();

/*
Developers Guide:

--> Routing API's


*/

// ---------[MIDDLEWARES]---------
// A middlware to extract these fields {fullName, userName, password, confirmPassword, gender} from req.body under auth.controller.js
app.use(express.json()); // to parse the incoming request with the JSON payload (req.body)

app.use(cookieParser());

// Authentication Routes MiddleWare
app.use("/api/auth", authRoutes);

// 
app.use("/api/messages", messageRoutes);

// 
app.use("/api/users", userRoutes);

// -------------------------------


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`http://localhost:${PORT}`);
});
