if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require('cors')
const recipeRoutes = require("./routes/recipe")
const apiRoutes = require("./routes/api")
const userRoutes = require("./routes/user")
const errorHandler = require("./middlewares/errorHandler")
const port = process.env.PORT;
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors())

app.use("/recipes", recipeRoutes)
app.use(apiRoutes)

app.get("/", (req, res) => {
    res.status(200).json({
        data: "home"
    });
});

app.use(userRoutes)

app.use(errorHandler);

app.listen(port, () => {
    console.log("listening to ", port);
});