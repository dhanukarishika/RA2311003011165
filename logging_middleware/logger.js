const axios = require('axios');

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyZDA4MjBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMTE0MiwiaWF0IjoxNzc3NzAwMjQyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiOTkzMDE1YWMtODNiOS00NDUwLTgwODUtYTcwN2VhYzA1NTZlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmlzaGlrYSBkaGFudWthIiwic3ViIjoiNjQzN2MxZmUtYWQ2My00OTE5LWFhZGUtOTFhZjg5YTMyYTJiIn0sImVtYWlsIjoicmQwODIwQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoicmlzaGlrYSBkaGFudWthIiwicm9sbE5vIjoicmEyMzExMDAzMDExMTY1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNjQzN2MxZmUtYWQ2My00OTE5LWFhZGUtOTFhZjg5YTMyYTJiIiwiY2xpZW50U2VjcmV0IjoiQnp2TUdnZ3R0anpCV3ZiWSJ9.xWokFRLzryQfk9B2aUhFaU9ffSHNH6N6kZrbir-Lp88";

const Log = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      'http://20.207.122.201/evaluation-service/logs',
      {
        stack: stack,
        level: level,
        package: pkg,
        message: message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );
  } catch (err) {
    console.log("Log failed:", err.response?.data || err.message);
  }
};

module.exports = Log;