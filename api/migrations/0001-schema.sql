CREATE TABLE IF NOT EXISTS clicks (
  user_id TEXT NOT NULL,
  x REAL NOT NULL,
  y REAL NOT NULL,
  timestamp INTEGER NOT NULL,
  PRIMARY KEY (user_id, timestamp)
);
