var trace1 = {
  x: ["Computer Science","Master of Business Administration","Economics"],
  y: [435,387,360],
  type: "bar"
};

var data = [trace1];

var layout = {
  title: "Top 3 Graduate Degrees",
  xaxis: { title: "Graduate Degrees"},
  yaxis: { title: "Num of Schools"}
};

Plotly.newPlot("plot", data, layout);