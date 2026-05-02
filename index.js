const express = require('express');
const Log = require('./logging_middleware/logger');

const app = express();
app.use(express.json());

let vehicles = [];
let notifications = [];

app.post('/vehicles', async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Adding vehicle");

    const vehicle = req.body;

    if (!vehicle.name) {
      await Log("backend", "error", "handler", "Vehicle name missing");
      return res.status(400).json({ error: "Name required" });
    }

    vehicles.push(vehicle);

    await Log("backend", "info", "service", "Vehicle added");

    res.status(201).json(vehicle);
  } catch (err) {
    await Log("backend", "fatal", "handler", "Error in adding vehicle");
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/vehicles', async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Fetching vehicles");

    await Log("backend", "debug", "service", `Total vehicles: ${vehicles.length}`);

    res.json(vehicles);
  } catch (err) {
    await Log("backend", "fatal", "handler", "Error fetching vehicles");
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/notify', async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Sending notification");

    const data = req.body;

    if (!data.message) {
      await Log("backend", "error", "handler", "Message missing");
      return res.status(400).json({ error: "Message required" });
    }

    notifications.push(data);

    await Log("backend", "info", "service", "Notification stored");

    res.status(201).json({ message: "Notification sent" });
  } catch (err) {
    await Log("backend", "fatal", "handler", "Error sending notification");
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get('/notifications', async (req, res) => {
  try {
    await Log("backend", "info", "controller", "Fetching notifications");

    await Log("backend", "debug", "service", `Total notifications: ${notifications.length}`);

    res.json(notifications);
  } catch (err) {
    await Log("backend", "fatal", "handler", "Error fetching notifications");
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});