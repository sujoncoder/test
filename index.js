import express from "express";
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));
app.get("/hello", (req, res) => res.send("hello world broooo..."));

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;