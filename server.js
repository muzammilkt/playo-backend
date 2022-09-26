const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const port = process.env.PORT;
const cors = require("cors");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/districts", require("./routes/districtRoutes"));
app.use("/api/personalDetails", require("./routes/personalDetailRoutes"));
app.use("/api/turfs", require("./routes/turfRoutes"));
app.use("/api/timeSlots", require("./routes/timeSlotsRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server is running at port ${port}`));
