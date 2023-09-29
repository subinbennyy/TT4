// src/components/BarChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const margin = { top: 20, right: 30, bottom: 40, left: 40 };
      const width = 400 - margin.left - margin.right;
      const height = 200 - margin.top - margin.bottom;

      const svg = d3
        .select(chartRef.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      const x = d3
        .scaleBand()
        .domain(data.map(item => item.label))
        .range([0, width])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, item => item.value)])
        .nice()
        .range([height, 0]);

      svg
        .selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', item => x(item.label))
        .attr('y', item => y(item.value))
        .attr('width', x.bandwidth())
        .attr('height', item => height - y(item.value));
    }
  }, [data]);

  return <svg ref={chartRef}></svg>;
};

export default BarChart;
