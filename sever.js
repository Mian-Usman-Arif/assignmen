const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("User data received");
});

app.listen(port, () => {
    console.log(`Server is running on http://127.0.0.1:${port}`);
});
