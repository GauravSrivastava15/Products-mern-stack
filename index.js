require("dotenv").config();
const mongoose = require('mongoose');
const { Schema } = mongoose;
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path")
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
// console.log("env", process.env.DB_PASSWORD);

//db connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connected")
}

//schema


//bodyParser
server.use(cors());
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
// server.use("/users", userRouter.router);
server.use('*', (req, res) =>{
  // res.sendFile(__dirname+'/build/index.html')
  res.sendFile(path.resolve(__dirname, 'build', "index.html"))
})

server.listen(process.env.PORT, () => {
  console.log("server started");
});
