const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3030;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/fitness", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}.`);
});