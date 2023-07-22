

const express = require("express");

const app = express();

const PORT = 3000;

app.use("/", require("./routes"));


app.listen(PORT, (err) => {
    if (err) {
        console.log("Unable to start server");
    }
    console.log(`Server up and running at ${PORT}`);
});