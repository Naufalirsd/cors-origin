import express from "express";

const app = express();

// Contoh middleware logging
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
});

// Contoh endpoint
app.get("/", (req, res) => {
    res.send("Hello, Middleware!");
});

app.listen(3000, () => {
    console.log("Server berjalan pada port 3000");
});
