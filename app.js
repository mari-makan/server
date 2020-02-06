if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require('cors')
const userRoutes = require("./routes/user")
const port = process.env.PORT;
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({
        data: "home"
    });
});

app.use(userRoutes)

app.listen(port, () => {
    console.log("listening to ", port);
});