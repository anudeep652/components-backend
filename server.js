require("dotenv").config();
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const componentsRoutes = require("./routes/componentsRoutes");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors());

app.use("/user", userRoutes);
app.use("/components", componentsRoutes);

// Serve frontend
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(
//       path.resolve(__dirname, "../", "frontend", "build", "index.html")
//     )
//   );
// } else {
//   app.get("/", (req, res) => res.send("App is under development"));
// }

const PORT = process.env.PORT || 5000;

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
