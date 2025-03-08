const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
