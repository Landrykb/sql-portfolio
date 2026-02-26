// Plotly.js visualization for: Units Sold by Product Line
// SQL Query: SELECT product_line, SUM(quantity) as total_qty FROM business_retail GROUP BY product_line ORDER BY total_qty DESC

const data = [
  {
    "x": [
      "Electronic accessories",
      "Food and beverages",
      "Sports and travel",
      "Home and lifestyle",
      "Fashion accessories",
      "Health and beauty"
    ],
    "y": [
      971,
      952,
      920,
      911,
      902,
      854
    ],
    "type": "bar",
    "name": "Units Sold",
    "marker": {
      "color": "#ff7f0e"
    }
  }
];

const layout = {
  "title": {
    "text": "Units Sold by Product Line",
    "font": {
      "size": 16
    }
  },
  "xaxis": {
    "title": {
      "text": "Product Line"
    },
    "tickangle": 45,
    "type": "category",
    "range": [
      -0.5,
      5.5
    ],
    "autorange": true
  },
  "yaxis": {
    "title": {
      "text": "Quantity"
    },
    "type": "linear",
    "range": [
      0,
      1022.1052631578948
    ],
    "autorange": true
  },
  "margin": {
    "b": 140
  },
  "showlegend": false,
  "autosize": true
};

Plotly.newPlot('chart', data, layout, { responsive: true });