SELECT u.user_name, COUNT(t.tweet_id) AS tweet_count
  FROM tweets t
  JOIN users u ON t.user_id = u.user_id
  GROUP BY u.user_name
  ORDER BY tweet_count DESC
LIMIT 5;

  