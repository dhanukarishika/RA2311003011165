# Stage 1: API Design

Endpoints:
- POST /notifications
- GET /notifications
- PATCH /notifications/:id/read

Headers:
- Content-Type: application/json

Real-time:
- WebSockets or Server-Sent Events

---

# Stage 2: Database Design

DB: PostgreSQL

Schema:
notifications(
  id,
  studentID,
  type,
  message,
  isRead,
  createdAt
)

Issues:
- Large data growth

Solutions:
- Indexing
- Partitioning

---

# Stage 3: Query Optimization

Query:
SELECT * FROM notifications
WHERE studentID = 1042 AND isRead = false
ORDER BY createdAt DESC;

Problem:
- No index → full table scan

Fix:
CREATE INDEX idx_student_read ON notifications(studentID, isRead);

Adding indexes on all columns is bad because:
- Slows down inserts/updates

---

# Stage 4: Performance Improvement

Solutions:
- Redis caching
- Pagination
- Lazy loading

---

# Stage 5: Reliable System Design

Problems:
- Email failure midway

Solution:
- Use message queue (Kafka/RabbitMQ)
- Retry mechanism

Improved flow:
enqueue → worker → send → retry if failed

---

# Stage 6: Priority Notifications

Logic:
- Placement > Result > Event
- Sort by timestamp

Approach:
- Use max heap / sorting
- Maintain top 10 efficiently