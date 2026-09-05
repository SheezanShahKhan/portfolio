const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is working!",
  });
});

// Contact API
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Display submitted data
    console.log("--------------------------------");
    console.log("New Contact Form Submission");
    console.log("--------------------------------");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", subject);
    console.log("Message:", message);

    console.log("--------------------------------");

    // Send response to frontend
    res.status(200).json({
      success: true,
      message: "Message received successfully!",
    });
  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
