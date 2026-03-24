-- Hidden Viral Prediction
-- Domain: Social
-- My solution query

SELECT strftime('%Y-%m', created_at) as month, COUNT(*) as tweet_count FROM tweets GROUP BY month ORDER BY month
