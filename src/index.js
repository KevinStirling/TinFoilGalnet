import './index.css';
import * as d3 from 'd3';
import { blue } from 'ansi-colors';


var svg = d3.select('svg');

var data = $.ajax({
    type: 'GET',
    accept: '*/*',
    url: 'https://www.alpha-orbital.com/galnet-feed',
    dataType: 'JSON',
    crossDomain: true,
    success: function() {
      console.log(data.responseJSON);
      printList(data.responseJSON)
    },
    error: function() {
      alert('Error:');
    }
  });

function printList(dataList) {
    d3.select(".stories")
        .selectAll("div")
        .data(dataList)
            .enter()
            .append("div")
            .attr("class", "story")
            .text(function(d){ return d.title; });

}
