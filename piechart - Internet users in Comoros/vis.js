var w = window.innerWidth;
var h = window.innerHeight;

// Creates canvas w × h at 0,0
var r = Raphael(0, 0, w, h);

// Creates pie chart at with center at w/2,h/2 
r.piechart(w/2, h/2, 100, [5.5,94.5],{colors:["#c0392b","#f1c40f"],
									  legend:["5.5% have used","94.5% haven't used"],
									  legendpos:"south"
									  });