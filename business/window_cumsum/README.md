# window_cumsum

Case: `window_cumsum` in the **Business** domain.

## Query

```sql
SELECT branch, date, total, 
SUM(total) OVER(PARTITION BY branch ORDER BY date) AS cumulative_sales
FROM business_retail 
ORDER BY branch, date;
```

---
*Pushed by **Landrykb** — *bleep* approved.*
