// api-gateway/server.js
const express = require("express");
const jwt = require("jsonwebtoken"); // or you can delegate token checks to Auth Service
const app = express();
const authRoutes = require("./routes/authRoutes");
// const recipeRoutes = require("./routes/recipeRoutes"); //more on this to come

// Middleware to check for a token and validate it
app.use((req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  }

  // Optionally verify locally, or forward token to Auth Service
  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    req.user = decoded; // Attach decoded user info for route use
    next();
  });
});

// TEST HOME ROUTE FOR THE BACKEND
app.get("/", (req, res) => {
  res.status(200).json("Auth in the API_GATEWAY is live");
});

// Route requests to appropriate services
app.use("/auth", authRoutes); // Auth-related routes
app.use("/recipes", recipeRoutes); // Recipe-related routes

app.listen(8080, () => console.log("API Gateway running on port 8080"));
