const axios = require('axios');
const Log = require('../logging_middleware/logger');

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyZDA4MjBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMTE0MiwiaWF0IjoxNzc3NzAwMjQyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOTkzMDE1YWMtODNiOS00NDUwLTgwODUtYTcwN2VhYzA1NTZlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmlzaGlrYSBkaGFudWthIiwic3ViIjoiNjQzN2MxZmUtYWQ2My00OTE5LWFhZGUtOTFhZjg5YTMyYTJiIn0sImVtYWlsIjoicmQwODIwQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoicmlzaGlrYSBkaGFudWthIiwicm9sbE5vIjoicmEyMzExMDAzMDExMTY1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNjQzN2MxZmUtYWQ2My00OTE5LWFhZGUtOTFhZjg5YTMyYTJiIiwiY2xpZW50U2VjcmV0IjoiQnp2TUdnZ3R0anpCV3ZiWSJ9.xWokFRLzryQfk9B2aUhFaU9ffSHNH6N6kZrbir-Lp88";

async function fetchData() {
  const headers = { Authorization: `Bearer ${TOKEN}` };

  const depots = await axios.get(
    'http://20.207.122.201/evaluation-service/depots',
    { headers }
  );

  const vehicles = await axios.get(
    'http://20.207.122.201/evaluation-service/vehicles',
    { headers }
  );

  return {
    depot: depots.data.depots[0], // take one depot
    vehicles: vehicles.data.vehicles
  };
}

function knapsack(tasks, maxTime) {
  const n = tasks.length;
  const dp = Array(n + 1).fill().map(() => Array(maxTime + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    let { Duration, Impact } = tasks[i - 1];

    for (let w = 0; w <= maxTime; w++) {
      if (Duration <= w) {
        dp[i][w] = Math.max(
          Impact + dp[i - 1][w - Duration],
          dp[i - 1][w]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][maxTime];
}

async function run() {
  try {
    await Log("backend", "info", "service", "Fetching data");

    const { depot, vehicles } = await fetchData();

    await Log("backend", "info", "service", "Running knapsack");

    const result = knapsack(vehicles, depot.MechanicHours);

    console.log("Max Impact:", result);

    await Log("backend", "info", "service", "Computation done");
  } catch (err) {
    await Log("backend", "fatal", "handler", "Scheduler error");
  }
}

run();