const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server in running on port ${PORT}`);
});
