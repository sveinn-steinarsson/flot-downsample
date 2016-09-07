flot-downsample: Downsample plugin for Flot
================================================

* Author: Sveinn Steinarsson
* Special thanks: [Borgar Þorsteinsson](https://github.com/borgar) and [DataMarket](http://datamarket.com/)

This plugin for [Flot charts](http://www.flotcharts.org) downsamples
data before rendering the chart. The purpose is to try retain the
visual characteristics of the original line using considerably fewer data points.
The algorithm (called *Largest-Triangle-Three-Buckets* or *LTTB*) used in this plugin is described in a
Master's thesis (see [hdl.handle.net/1946/15343](http://hdl.handle.net/1946/15343)) in Computer Science by Sveinn Steinarsson 
at the [University of Iceland](http://english.hi.is/). 
The topic of the thesis is how to *downsample time series for visual representation* 
and was initially suggested by [DataMarket](http://datamarket.com/). 
JavaScript optimization was done with the help of [Borgar Þorsteinsson](https://github.com/borgar).


Demo
----
Demo can viewed at [flot.base.is](http://flot.base.is/).

Additional demo concerning chart resizing is also available at [flot.base.is/demo-resize](http://flot.base.is/demo-resize/) 


Usage
-----
```js
series: {
  downsample: {
    threshold: 1000 // 0 disables downsampling for this series.
  }
}
```


Known limitations
-----
* Does not support gaps (null values) in the data array.
* X-values must be in a strictly increasing order.


Articles about the algorithm (LTTB)
-----
* [The Challenge of Metrics Visualization](http://blackops.io/blog/2014/05/time-series-graphs-and-downsampling/) by Mark Troyer
* [Downsampling data – Not a trivial task](http://blog.datamarket.com/2014/02/28/downsampling-data-not-a-trivial-task/) by DataMarket
* [Sampling large datasets in d3fc](http://blog.scottlogic.com/2015/11/16/sampling-large-data-in-d3fc.html) by William Ferguson


The algorithm (LTTB) adapted for other programming languages or frameworks
-----
* [C#](https://gist.github.com/DanielWJudge/63300889f27c7f50eeb7) by Daniel Judge
* [C#](https://gist.github.com/adrianseeley/264417d295ccd006e7fd) by Adrian Seeley
* [Go](https://github.com/dgryski/go-lttb) by Damian Gryski
* [node.js](https://github.com/pingec/downsample-lttb) by Matej Drolc
* [Java](https://github.com/drcrane/downsample) by drcrane
* [Scala](https://github.com/tackley/smoothing) by Graham Tackley
* [R](https://github.com/javiljoen/LTTB) by Jack Viljoen
* [Javascript (without the flot plugin)](https://github.com/joshcarr/largest-triangle-three-buckets.js) by Josh Carr
* [Highcarts Plugin](https://github.com/sveinn-steinarsson/highcharts-downsample) by Sveinn Steinarsson
* [PHP](https://github.com/dbojdo/downsampling) by dbojdo
* [Python] (https://github.com/devoxi/lttb-py) by Olivier Devoisin
* [Perl] (https://github.com/troxel/LargestTriangleThreeBuckets) by troxel
* [C++ Qt] (https://github.com/temap/misc/blob/master/src/lttb.hpp) by Artyom Panfilov
* [Ruby] (https://github.com/Jubke/lttb) by Julian Lübke
* [Swift] (https://github.com/GuillaumeBeal/LTTB) by Guillaume Beal

**Note:** I have not tested all these versions and some might have different or additional features.

*(Please let me know if you make your own port of the LTTB algorithm so I can list it here.)*


License
-------
flot-downsample is released under the terms of [the MIT License](http://www.opensource.org/licenses/MIT).
