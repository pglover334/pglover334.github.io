var trace1 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [248,155,139],
  name: 'United States',
  type: 'bar'
};

var trace2 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [50,68,52],
  name: 'United Kingdom',
  type: 'bar'
};

var trace3 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [29,16,23],
  name: 'Canada',
  type: 'bar'
};

var trace4 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [11,28,10],
  name: 'Australia',
  type: 'bar'
};

var trace5 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [7,5,11],
  name: 'Germany',
  type: 'bar'
};

var trace6 = {
  x: ['Computer Science', 'Master of Business Administration', 'Economics'],
  y: [7,6,9],
  name: 'Italy',
  type: 'bar'
};
var data = [trace1, trace2, trace3, trace4, trace5, trace6];

var layout = {barmode: 'stack',
  title: "Number of Schools per Country Offering Top 3 Degrees",
  xaxis: { title: "Graduate Degrees"},
  yaxis: { title: "Num of Schools"}};

Plotly.newPlot('plot', data, layout);