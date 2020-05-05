const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello all !");
});
app.get("/contact/:userId/send/:content", function (req, res) {
  res.send(
    "Customer have id " +
      req.params.userId +
      "send content" +
      req.params.content
  );
});
app.listen(8080);
