# Makefile for generating minified file

.PHONY: all

all: jquery.flot.downsample.min.js

jquery.flot.downsample.min.js:
	yui-compressor jquery.flot.downsample.js -o jquery.flot.downsample.min.js

