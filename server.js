const express = require("express");
const guestRoutes = require("./routes/guestRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(express.json()); // For JSON parsing

// Route definition
app.use("/guest", guestRoutes);
app.use("/admin", adminRoutes);

// Setup the server to listen on a specific port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
