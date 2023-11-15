const express = require("express");
const guestRoutes = require("./routes/guestRoutes");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(express.json()); // Untuk parsing JSON

// Pendefinisian rute
app.use("/guest", guestRoutes);
app.use("/admin", adminRoutes);

// Setup server untuk mendengarkan pada port tertentu
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
