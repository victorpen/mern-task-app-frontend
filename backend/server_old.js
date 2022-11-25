//===============================================
// const dotenv = require("dotenv").config();
// const express = require("express");
// const connectDB = require('./config/connectDB')

// const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>Home Page</h1>')
// })

// const PORT = process.env.PORT || 8000;
// const startServer = async () => {
//   try {
//     await connectDB()
//     app.listen(PORT, () => {
//       console.log(`Server started on port ${PORT}`)
//     }) 
//   } catch (error) {
//     console.log(error);
//   }
// }
// startServer() 

//===============================================
const dotenv = require("dotenv").config();
const express = require("express");
// const connectDB = require('./config/connectDB')
const mongoose = require("mongoose");
const Task = require("./models/taskModel")

const taskRoutes = require("./routes/taskRoute");


const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(taskRoutes);
app.use("/api/tasks", taskRoutes);

// const logger = (req, res) => {
//   console.log("Middleware ran");
//   console.log(req.method);
//   next()
// }

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})


/*
// Create a Task
// app.post('/api/tasks', logger, async (req, res) => {
app.post('/api/tasks', async (req, res) => {
  // console.log(req.body);
  // res.send('Task Created')
  try {
    const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})


// Get/Read Data
app.get('/api/tasks', async (req, res) => {
   // console.log(req.body);
  // res.send('Get all Tasks')
  try {
    const task = await Task.find()
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json({ msg: error.message })
  }
})
*/

const PORT = process.env.PORT || 8000;
// Connect DB & start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}...`);
    })
  )
  .catch((err) => console.log(err));


