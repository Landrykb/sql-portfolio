SELECT tweet_id, created_at, text
FROM tweets
WHERE text LIKE '%#SQL%'
ORDER BY created_at DESC
LiMIT 5
