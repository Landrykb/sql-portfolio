# agg_revenue

Case: `agg_revenue` in the **Business** domain.

## Query

```sql
SELECT product_line, SUM(total) AS total_revenue
FROM business_retail
GROUP BY product_line
ORDER BY SUM(total);
```

---
*Pushed by **Landrykb** — *bleep* approved.*
