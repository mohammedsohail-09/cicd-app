const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => res.send("Hello from v2 🚀"));
app.listen(PORT, () => console.log(`v2 running on port ${PORT}`));
