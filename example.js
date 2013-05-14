$(function() {
    "use strict";

    var plot_options = {
        series: {
            shadowSize: 0,
            downsample: { threshold: 1000 } // Default downsampling threshold 
        }
    };
    var demo_idx = 0;
    var plot = $.plot("#placeholder", [demo_data[demo_idx]] , plot_options);

    // Initialize slider
    var $slider = $("#slider-threshold").slider({
        value: plot.getOptions().series.downsample.threshold,
        min: 2,
        max: demo_data[demo_idx].length,
        slide: function( event, ui ) {
            $("#threshold").val(ui.value);
            plot.getOptions().series.downsample.threshold = ui.value;
            plot.setData([demo_data[demo_idx]]);
            plot.draw();
       }
    });
    $("#threshold").val( $slider.slider("value") );
    $("#length").text( demo_data[demo_idx].length );

    // On demo data change
    $("#data").change(function () {
        demo_idx = $(this).val();
        plot.getOptions().series.downsample.threshold = 1000; // Default

        $slider.slider("option", "max", demo_data[demo_idx].length);
        $slider.slider("value", plot.getOptions().series.downsample.threshold);

        plot.setData([demo_data[demo_idx]]);
        plot.setupGrid();
        plot.draw();

        $("#threshold").val( $( "#slider-threshold" ).slider( "value" ) );
        $("#length").text( demo_data[demo_idx].length );
    });

});
