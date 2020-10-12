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
Demo can viewed at [base.is/flot/](https://www.base.is/flot/).

Additional demo concerning chart resizing is also available at [base.is/flot/resize/](https://www.base.is/flot/resize/) 


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


Articles related to the algorithm (LTTB)
-----

* [The Billion Data Point Challenge](https://eng.uber.com/billion-data-point-challenge/) by Benjamin Raskin and Nikunj Aggarwal at Uber Technologies Inc.
* [An SQL implementation of the 'Largest Triangle Three Bucket' algorithm](https://medium.com/@hayley.morrison/sampling-time-series-data-sets-fc16caefff1b) by Peter Coppens
* [Visualize Big Data on Mobile](http://dduraz.com/2019/04/26/data-visualization-mobile/) by dduraz
* [The Challenge of Metrics Visualization](http://blackops.io/blog/2014/05/time-series-graphs-and-downsampling/) by Mark Troyer
* [Downsampling data – Not a trivial task](https://web.archive.org/web/20140625052324/https://blog.datamarket.com/2014/02/28/downsampling-data-not-a-trivial-task/) by DataMarket (The company was acquired by Qlik. Linking to archived version since the original blog is no longer accessible)
* [Sampling large datasets in d3fc](http://blog.scottlogic.com/2015/11/16/sampling-large-data-in-d3fc.html) by William Ferguson
* [Downsampling algorithms](http://www.adrian.idv.hk/2018-01-24-downsample/) by Adrian S. Tam
* [Plot your data faster without losing its shape with Elixir and ExLTTB](https://blog.ispirata.com/plot-your-data-faster-without-losing-its-shape-with-elixir-and-exlttb-6917f6dd4f7e) by Riccardo Binetti
* [Implementation of Downsampling Algorithm in MSChart Extension](https://www.codearteng.com/2020/08/implementation-of-downsampling.html) by Code Artist


The algorithm (LTTB) adapted for other programming languages or frameworks
-----
* [C#](https://gist.github.com/DanielWJudge/63300889f27c7f50eeb7) by Daniel Judge
* [C#](https://gist.github.com/adrianseeley/264417d295ccd006e7fd) by Adrian Seeley
* [MSChartExtension in C#](https://github.com/Code-Artist/MSChartExtension/blob/master/MSChartExtension/DownSampling.cs) by Code Artist
* [Elixir](https://github.com/ispirata/ex_lttb) by Riccardo Binetti
* [Go](https://github.com/dgryski/go-lttb) by Damian Gryski
* [node.js](https://github.com/pingec/downsample-lttb) by Matej Drolc
* [Java](https://github.com/drcrane/downsample) by drcrane
* [Java8](https://github.com/ggalmazor/lt_downsampling_java8) by Guillermo Gutierrez Almazor
* [Scala](https://github.com/tackley/smoothing) by Graham Tackley
* [R](https://github.com/javiljoen/LTTB) by Jack Viljoen
* [Javascript (without the flot plugin)](https://github.com/joshcarr/largest-triangle-three-buckets.js) by Josh Carr
* [Highcarts Plugin](https://github.com/sveinn-steinarsson/highcharts-downsample) by Sveinn Steinarsson
* [Chart.js Plugin](https://github.com/AlbinoDrought/chartjs-plugin-downsample) by Sean
* [PHP](https://github.com/dbojdo/downsampling) by dbojdo
* [Python](https://github.com/devoxi/lttb-py) by Olivier Devoisin
* [Python + Numpy](https://github.com/javiljoen/lttb.py) by Jack Viljoen
* [Python using C](https://github.com/dgoeries/lttbc) by dgoeries
* [Perl](https://github.com/troxel/LargestTriangleThreeBuckets) by troxel
* [C++](https://github.com/parkertomatoes/lttb-cpp) by parkertomatoes
* [Ruby](https://github.com/Jubke/lttb) by Julian Lübke
* [Swift](https://github.com/GuillaumeBeal/LTTB) by Guillaume Beal
* [Rust](https://github.com/jeromefroe/lttb-rs) by Jerome Froelich
* [Clojure](https://github.com/viesti/clj-lttb) by Kimmo Koskinen

**Note:** I have not tested all these versions and some might have different or additional features.

*(Please let me know if you make your own port of the LTTB algorithm so I can list it here.)*


License
-------
flot-downsample is released under the terms of [the MIT License](http://www.opensource.org/licenses/MIT).
