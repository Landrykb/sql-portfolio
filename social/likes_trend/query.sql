SELECT strftime('%Y-%m', created_at) AS month, COUNT(*) AS tweet_count
FROM tweets
GROUP BY month 
ORDER BY month DESC;

