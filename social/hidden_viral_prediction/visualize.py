"""
Tweet Volume Trend
SQL: SELECT strftime('%Y-%m', created_at) as month, COUNT(*) as tweet_count FROM tweets GROUP BY month ORDER BY month
"""
import pandas as pd
import plotly.express as px

# Load data
df = pd.read_csv('tweets.csv')

# Run equivalent query and plot
# (Adapt the SQL logic in pandas as needed)
fig = px.scatter(df, x='month', y='tweet_count', title='Tweet Volume Trend')
fig.show()
fig.write_html('hidden_viral_prediction_chart.html')
print("Chart saved to hidden_viral_prediction_chart.html")