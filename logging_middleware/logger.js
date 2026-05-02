const axios = require('axios');

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
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJyZDA4MjBAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzY5ODc3MSwiaWF0IjoxNzc3Njk3ODcxLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNmU4OGU5NDYtM2FkMi00M2U0LTlhNjAtN2VjN2MzNGU4Y2Y2IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoicmlzaGlrYSBkaGFudWthIiwic3ViIjoiNjQzN2MxZmUtYWQ2My00OTE5LWFhZGUtOTFhZjg5YTMyYTJiIn0sImVtYWlsIjoicmQwODIwQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoicmlzaGlrYSBkaGFudWthIiwicm9sbE5vIjoicmEyMzExMDAzMDExMTY1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiNjQzN2MxZmUtYWQ2My00OTE5LWFhZGUtOTFhZjg5YTMyYTJiIiwiY2xpZW50U2VjcmV0IjoiQnp2TUdnZ3R0anpCV3ZiWSJ9.R1oTCFZqqRX8sObNnk3TwPuFJFjZAr-Q5uNLGai_5U4'
        }
      }
    );
  } catch (err) {
    console.log("Log failed");
  }
};

module.exports = Log;