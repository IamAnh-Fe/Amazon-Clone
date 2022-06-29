
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const cookieParser = require("cookie-parser")

const authRouter = require('./routers/auth')
const postRouter = require('./routers/post')


const connectDB = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@amazone-dev.qaslbs4.mongodb.net/?retryWrites=true&w=majority`,
			{
				// useCreateIndex: true,
				useNewUrlParser: true,
				useUnifiedTopology: true,
				// useFindAndModify: false
			}
		)

		console.log('MongoDB connected')
	} catch (error) {
		console.log("error message:",error.message)
		process.exit(1)
	}
}

connectDB()

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)


const PORT = process.env.PORT || 7000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))