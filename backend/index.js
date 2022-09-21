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
const categoryRouter = require("./routers/category")
const commentRouter = require("./routers/comment")
const collectionRouter = require("./routers/collection")
const categoryThumbRouter = require("./routers/categorythumb")
const filterRouter = require("./routers/filter")
const Comment = require("./models/comment");

//conect database
connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    // credentials: true, //access-control-allow-credentials:true
  },
});
const corsConfig = {
  origin: true,
  credentials: true,
};

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
    const {id, star, comment, createdAt, name, send} = msg
    const newComment = new Comment({
          id,
          star,
          comment,
          name,
          createdAt
    });
    if(send === 'replyComment'){
      const {_id, id, comment, name, createdAt} = newComment
      console.log( newComment)
      
      const comments = await Comment.findById(id)
      
      if(comments){
        comments.reply.push({_id, comment, name, createdAt})
        console.log( "oh",comments.reply)
        
                await comments.save()
                io.to(comments.id).emit('sendReplyCommentToClient', comments)
            }
        }else{
            await newComment.save()
            io.to(newComment.id).emit('sendCommentToClient', newComment)
        }

  })
  socket.on('disconnect', () => {
    console.log(socket.id + ' disconnected.')
  })

})


app.use(cookieParser());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
//ROUTES
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/products", productRouter);
app.use("/api/filters", filterRouter);
app.use("/api/category",  categoryRouter);
app.use("/api/collection",  collectionRouter);
app.use("/api/categoryThumb",  categoryThumbRouter);
app.use("/api", commentRouter)



app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
