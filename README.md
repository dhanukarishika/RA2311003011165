# Backend Evaluation Submission

## Overview

This repository contains the backend solution for the evaluation. It includes:

* Logging Middleware (mandatory integration)
* Vehicle Maintenance Scheduler (optimization problem)
* Notification APIs
* System Design (Stage 1–6)

---

## Tech Stack

* Node.js
* Express.js
* Axios

---

## Folder Structure

```
logging_middleware/
vehicle_maintence_scheduler/
notification_app_be/
screenshots/
index.js
notification_system_design.md
```

---

## Logging Middleware

A reusable logging function is implemented:

```
Log(stack, level, package, message)
```

* Sends logs to the evaluation server
* Used across all APIs and scheduler
* Covers info, debug, error, and fatal levels

---

## Vehicle Maintenance Scheduler

### Problem

Select a subset of vehicles such that:

* Total duration does not exceed available mechanic hours
* Total impact score is maximized

### Approach

Implemented using the 0/1 Knapsack algorithm (Dynamic Programming).

### Execution

```
node vehicle_maintence_scheduler/scheduler.js
```

### Sample Output

```
Max Impact: 163
```

---

## Notification APIs

### Create Notification

POST `/notify`

Request:

```
{
  "message": "Service due soon"
}
```

Response:

```
{
  "message": "Notification sent"
}
```

---

### Get Notifications

GET `/notifications`

---

## Vehicle APIs

### Create Vehicle

POST `/vehicles`

### Get Vehicles

GET `/vehicles`

---

## System Design

Refer to `notification_system_design.md` for detailed design across all stages, including:

* API design
* Database schema
* Query optimization
* Performance improvements
* Reliable system architecture
* Priority notification handling

---

## Notes

* Logging is integrated throughout the application as required
* APIs follow standard REST conventions with proper status codes
* In-memory storage is used for simplicity
* Focus is on correctness, clarity, and completeness of implementation
