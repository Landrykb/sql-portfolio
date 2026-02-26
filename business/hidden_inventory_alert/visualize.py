"""
Units Sold by Product Line
SQL: SELECT product_line, SUM(quantity) as total_qty FROM business_retail GROUP BY product_line ORDER BY total_qty DESC
"""
import pandas as pd
import plotly.express as px

# Load data
df = pd.read_csv('business_retail.csv')

# Run equivalent query and plot
# (Adapt the SQL logic in pandas as needed)
fig = px.bar(df, x='product_line', y='total_qty', title='Units Sold by Product Line')
fig.show()
fig.write_html('hidden_inventory_alert_chart.html')
print("Chart saved to hidden_inventory_alert_chart.html")