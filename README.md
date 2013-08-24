flot-downsample: Downsample plugin for Flot
================================================

* Author: Sveinn Steinarsson
* Special thanks: [Borgar Þorsteinsson](https://github.com/borgar) and [DataMarket](http://datamarket.com/)

This plugin for [Flot charts](http://www.flotcharts.org) downsamples
data before rendering the chart. The purpose is to try retain the
visual characteristics of the original line using considerably fewer data points.
The algorithm (called *Largest-Triangle-Three-Buckets*) used in this plugin is described in a 
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


License
-------
flot-downsample is released under the terms of [the MIT License](http://www.opensource.org/licenses/MIT).
