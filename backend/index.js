const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database/db")
const bodyparser = require('body-parser')
const cloudinary = require("./config/cloudinary/cloudinary.js")

const authRouter = require("./routers/auth");
const userRouter = require("./routers/user");
const productRouter = require("./routers/product")
const CategoryRouter = require("./routers/category")
const commentRouter = require("./routers/comment")

const Comment = require("./models/comment");

//conect database
connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Soketio
let users = [];
io.on('connection', socket => {
  console.log(socket.id + ' connected.')
  socket.on("joinRoom", (id) => {
    const user = { userId: socket.id, room: id };

    const check = users.every((user) => user.userId !== socket.id);

    if (check) {
      users.push(user);
      socket.join(user.room);
    } else {
      users.map((user) => {
        if (user.userId === socket.id) {
          if (user.room !== id) {
            socket.leave(user.room);
            socket.join(id);
            user.room = id;
          }
        }
      });
    }

    console.log(users)
    console.log(socket.adapter.rooms)
  });

  socket.on('createReview', async msg => {
    const {id, star, comment, name} = msg
    const newComment = new Comment({
          id,
          star,
          comment,
          name,
    });
    console.log(newComment.id)
    await newComment.save()
    io.to(newComment.id).emit(
    "sendCommentToClient",
    newComment
    );

  })


  socket.on('disconnect', () => {
    console.log(socket.id + ' disconnected.')
  })

})
  
  
app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors());

//ROUTES
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/category",  CategoryRouter);
app.use("/api", commentRouter)

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


app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
