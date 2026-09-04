# basics_select

Case: `basics_select` in the **Business** domain.

## Query

```sql
SELECT invoice_id, branch, total
  FROM business_retail WHERE branch = 'A'
  ORDER BY total DESC
  LIMIT 5; 
```

---
*Pushed by **Landrykb** — *bleep* approved.*
