const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database/db")
const bodyparser = require('body-parser')
const cloudinary = require("./config/cloudinary/cloudinary.js")

const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const productRouter = require("./routers/product")


//conect database
connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors());

//ROUTES
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);

app.post("/api/upload", async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: "amazon",
    });
    console.log(uploadResponse);
    res.json({ msg: "yaya" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Something went wrong" });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
