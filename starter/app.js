const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());
app.use(express.static("./public")); // adding static files

// routes
// specifies that all routes defined in the tasks router should be prefixed with '/api/v1/tasks'
//  So, when you define router.route("/") in the tasks module, it translates to '/api/v1/tasks/'
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

// connectDB returns a promise, so using async function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(`server is listening to the port ${port}....`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
