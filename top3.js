var trace1 = {
  values: [435,387,360],
  labels: ["Computer Science","Master of Business Administration","Economics"],
  type: "pie"
};

var data = [trace1];

var layout = {
  title: "Top 3 Graduate Degrees",
  height: 400,
  width: 500
};

Plotly.newPlot("plot", data, layout);