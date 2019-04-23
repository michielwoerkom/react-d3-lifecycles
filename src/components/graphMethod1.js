import React, { Component } from 'react';
import * as d3 from "d3";

import './graphMethod1.scss';
import styles from './graphMethod1.module.scss';

// what are these and are they things that someone should edit
const margin = { top: 30, right: 20, bottom: 60, left: 65 };
const width = 800 - (margin.left + margin.right);
const height = 300 - (margin.top + margin.bottom);
const labelOffset = 50;
const axisOffset = 16;

let data;

class GraphMethod1 extends Component {
  setGraph() {
    // Set the scales
    data = this.props.rows;

    if (data) {
      const x = d3.scaleBand()
        .rangeRound([0, width])
        .domain(data.map((d) => d.sprintName))
        .padding(0.5);

      const y = d3.scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, (d) => d.sprintPoints)]);

      // // Set the axes
      const xAxis = d3.axisBottom()
        .scale(x)
        .tickSize(0);

      const yAxis = d3.axisLeft()
        .ticks(4)
        .tickSize(-width)
        .scale(y.nice());

      // // Set up SVG with initial transform to avoid repeat positioning
      const svg = d3.select('svg.method1')
        .attr('width', width + (margin.left + margin.right))
        .attr('height', height + (margin.top + margin.bottom))

      // Remove all the previous data
      svg.selectAll('.group-container').remove();

      const g = svg.append('g')
        .attr('class', 'group-container')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .attr('font-family', 'ibm-plex-sans');

      // // Add Y axis
      g.append('g')
        .attr('class', 'axis y')
        .attr('stroke-dasharray', '4')
        .call(yAxis)
        .selectAll('text')
        .attr("x", -axisOffset)
        .attr('font-family', 'ibm-plex-sans');

      // // Add Y axis label
      const yLabel = svg.select('.y')
        .append('text')
        .text('POINTS')
        .attr('class', 'label')
        .attr('transform', `translate(${-labelOffset}, ${height / 2}) rotate(-90)`)
        .attr('font-family', 'ibm-plex-sans');

      // // Add X axis
      g.append('g')
        .attr('class', 'axis x')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis)
        .selectAll('text')
        .attr("y", axisOffset)
        .attr('font-family', 'ibm-plex-sans')

      // // Add X axis label
      const xLabel = svg.select('.x')
        .append('text')
        .text('SPRINTS')
        .attr('class', 'label')
        .attr('transform', `translate(${width / 2}, ${labelOffset})`)
        .attr('font-family', 'ibm-plex-sans');

      g.append('g')
        .attr('class', 'bar-container')
        .selectAll('rect')
        .data(data)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(d.sprintName))
        .attr('y', (d) => height)
        .attr('height', 0)
        .attr('width', x.bandwidth())
        .attr('fill', '#00A78F')
        .transition()
        .duration(500)
        .delay((d, i) => i * 50)
        .attr('height', (d) => height - y(d.sprintPoints))
        .attr('y', (d) => y(d.sprintPoints));

      // Select Tooltip
      const tooltip = d3.select('.method1-tooltip');

      const bars = svg.selectAll('.bar')
        .on('mouseover', function(d) {
          let color = d3.color('#00A78F').darker()
          d3.select(this)
              .attr('fill', color)
          tooltip
              .style('display', 'inherit')
              .text(`${d.sprintPoints} points`)
              .style('top', `${y(d.sprintPoints) - axisOffset}px`);
          console.log(y(d.sprintPoints));
          console.log(x(d.sprintName));
          let bandwidth = x.bandwidth();
          let tooltipWidth = tooltip.nodes()[0].getBoundingClientRect().width;
          let offset = (tooltipWidth - bandwidth) / 2;

          tooltip
              .style('left', `${x(d.sprintName) + margin.left - offset}px`)
        })
        .on('mouseout', function(d) {
          d3.select(this)
              .transition()
              .duration(250)
              .attr('fill', '#00A78F')
          tooltip
              .style('display', 'none')
        })
      } else {
        return null;
      }
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setGraph();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    this.setGraph();
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div className={styles.main}>
        <div className="graph-container">
          <svg className='method1'></svg>
          <div className="method1-tooltip tooltip"></div>
        </div>
      </div>
    );
  }
}

export default GraphMethod1;
