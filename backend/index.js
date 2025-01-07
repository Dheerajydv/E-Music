import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("sajbkjbj World");
});

app.listen(8000, () => {
  try {
    console.log("first");
  } catch (error) {
    console.log(error);
  }
});
