var w = window.innerWidth;
var h = window.innerHeight;

// Creates canvas w × h at 0,0
var r = Raphael(0, 0, w, h);

/*Creates linechart at center at w/3,h/4
 * x-values: 2005,2010,2011
 * y-values: 2.0, 5.1, 5.5
 */
var linechart = r.linechart(w/3,h/4,w/4,h/2,[2005,2010,2011],[2.0,5.1,5.5],{smooth: true, colors: ['#8e44ad'],symbol: 'circle',axis:'0 0 1 1',axisxstep:4})

linechart.hoverColumn(function () {
	
	this.tags = r.set();

    for (var i = 0, ii = this.y.length; i < ii; i++) {
        	this.tags.push(r.tag(this.x, this.y[i], this.values[i], 160, 10).insertBefore(this));
    	}
    }, function () {
        	this.tags && this.tags.remove();
    });

