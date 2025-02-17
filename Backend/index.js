import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import bookRoute from './Route/route.js'
import userRoute from './Route/userRoute.js'
import bodyParser from "body-parser";
const app = express();
app.use(cors());
app.use(express.json()); // Important for parsing JSON
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config()

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected to Mongodb");
} catch (error) {
    console.log("Error");
}

//defining routes
app.use("/book", bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})