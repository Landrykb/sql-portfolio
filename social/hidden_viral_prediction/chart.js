// Plotly.js visualization for: Tweet Volume Trend
// SQL Query: SELECT strftime('%Y-%m', created_at) as month, COUNT(*) as tweet_count FROM tweets GROUP BY month ORDER BY month

const data = [
  {
    "x": [
      "2023-01",
      "2023-02",
      "2023-03",
      "2023-04",
      "2023-05",
      "2023-06",
      "2023-07",
      "2023-08",
      "2023-09",
      "2023-10",
      "2023-11",
      "2023-12",
      "2024-01"
    ],
    "y": [
      818,
      769,
      874,
      821,
      849,
      788,
      787,
      858,
      879,
      891,
      777,
      858,
      31
    ],
    "type": "scatter",
    "mode": "lines+markers",
    "line": {
      "color": "#ff7f0e",
      "width": 2
    }
  }
];

const layout = {
  "title": {
    "text": "Tweet Volume Trend",
    "font": {
      "size": 16
    }
  },
  "xaxis": {
    "title": {
      "text": "Month"
    },
    "type": "date",
    "range": [
      "2022-12-09 11:05:25.8136",
      "2024-01-23 12:54:34.1864"
    ],
    "autorange": true
  },
  "yaxis": {
    "title": {
      "text": "Tweets"
    },
    "type": "linear",
    "range": [
      -41.40549828178695,
      963.405498281787
    ],
    "autorange": true
  },
  "showlegend": false,
  "autosize": true
};

Plotly.newPlot('chart', data, layout, { responsive: true });