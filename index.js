if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const express = require('express');
const tripRoute = require('./routes/tripRoute');
const errorHandler = require("./middlewares/errorHandler");
const cors = require('cors')

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    console.log("Test Masuk");
    res.status(200).json({
        message: "Test Masuk",
    });
});

// Menggunakan route trip
app.use("/api", tripRoute);

// Middleware error handler
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
