if (process.env.NODE_ENV === "development") {
    require("dotenv").config();
}
const express = require("express");
const app = express();
const cors = require('cors')
const routes = require("./routes/index")
const port = process.env.PORT;
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
app.use(cors())

app.use(routes)

app.listen(port, () => {
    console.log("listening to ", port);
});