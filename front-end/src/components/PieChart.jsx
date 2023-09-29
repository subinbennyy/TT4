// src/components/PieChart.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data && data.length > 0) {
      // Create a D3 pie chart here using the data
    }
  }, [data]);

  return <div ref={chartRef}></div>;
};

export default PieChart;
