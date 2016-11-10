import React from 'react'

var Analysis = React.createClass({
  getInitialState: function(){
    return this.props;
  },

  getRoot: function(store){
    debugger;
    var assets = {
      name: "Assets",
      children: [
        {name: "Cash", size: 0},
        {name: "Items", size: 0},
        {name: "Equipments", size: 0}
      ]
    }

    for(var key in store.items){
      var item = store.items[key];

      if(item.class == "cash"){
        assets["children"][0].size += item.tokenValue * item.amount;
      }else{
        assets["children"][1].size += item.tokenValue * item.amount;
      }
    }

    for(var key in store.equipments){
      var equipment = store.equipments[key];
      assets["children"][2].size += equipment.tokenValue * equipment.amount;
    }

    var relationship = {
      name: "Relationships",
      size: (function(){
        var count = 0;
        for(var key in store.relationships){
          count += store.relationships[key].amount * store.relationships[key].tokenValue
        }
        return count;
      })()
    }

    var temperament = {
      name: "DDFPK",
      children: [
        {
          name: "Dominance",
          size: store.qualities["0001A24"].amount * 10,
        },
        {
          name: "Diplomacy",
          size: store.qualities["0001A25"].amount * 10,
        },
        {
          name: "Fluency",
          size: store.qualities["0001A26"].amount * 10,
        },
        {
          name: "Perception",
          size: store.qualities["0001A27"].amount * 10,
        },
        {
          name: "Knowledge",
          size: store.qualities["0001A28"].amount * 10,
        }
      ]
    }

    return {
      name: "Resources",
      children: [
        assets, relationship, temperament
      ]
    }
  },

  componentDidMount: function(){
    var root = this.getRoot(this.props.store);

    var width = 800,
        height = 800,
        radius = 2*Math.min(width, height)/5;

    var x = d3.scale.linear()
        .range([0, Math.PI]);

    var y = d3.scale.linear()
        .range([0, radius]);

    var color = d3.scale.category20c();

    var svg = d3.select(".analysis-chart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");

    var partition = d3.layout.partition()
        .sort(null)
        .value(function(d) { return d.size; });

    var arc = d3.svg.arc()
        .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
        .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
        .innerRadius(function(d) { return Math.max(0, y(d.y)); })
        .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

    var g = svg.selectAll("g")
      .data(partition.nodes(root))
      .enter().append("g");

    var path = g.append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color(d.name); })
      .on("click", click);

    var text = g.append("text")
      .attr("transform", function(d){
         var rotation = computeTextRotation(d);
         return "rotate(" + rotation + ")";
       })
      .attr("x", function(d){
         return y(d.y);
       })
      .attr("dx", "6") // margin
      .attr("dy", ".35em") // vertical-align
      .text(function(d) { return d.name; });

    function click(d) {}

    d3.select(self.frameElement).style("height", height + "px");

    function computeTextRotation(d) {
      return (x(d.x + d.dx / 2) - Math.PI/2) / Math.PI * 180;
    }
  },

  generateInfoContent: function(){
  },

  render: function(){
    return (
      <div>
        <div className="analysis-info">
        </div>
        <div className="analysis-chart"></div>
      </div>
    );
  }
});

export default Analysis;
