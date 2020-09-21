import React, {useRef, useEffect} from 'react';
import styles from './canvas.css';
import {randomInt} from 'd3-random';
import * as d3 from 'd3';

const createRandomArray = (length) => {
  var data = [];
  var randomSize = randomInt(1, 70);
  for (let i = 0; i < length; i++) {
    data.push(randomSize());
  }
  return data;
}


const Canvas = (props) => {
  const ref = useRef();
  const {svgbarnum, getConfigHandShake, canvas_created} = props;
  const inputArray = createRandomArray(svgbarnum);

  useEffect(() => {
    if (canvas_created && svgbarnum !== 0) {
      const svgCanvas = d3.select(ref.current);
      const width = 1500 / svgbarnum / 5 * 4
      const interval = width * 1.2
      const speed = 8000/ svgbarnum;
      svgCanvas.selectAll('rect')
        .data(inputArray)
        .enter()
        .append('rect')
        .attr('id', (d, i) => `num_${i}`)
        .attr('y', 0)
        .attr('x', 300)
        .style('fill', 'white')
        .transition()
        .duration(2000)
        .delay((d, i) => (i * 10))
        .attr('x', (d, i) => 100 + i * interval)
        .attr('y', (d, i) => 920 - 11* d)
        .attr('width', width)
        .attr('height', d => (d * 11))
        .style('fill', 'white');
      
      getConfigHandShake({
        canvas_created: false,
        inputArray,
        svgconfig: {
          width: width,
          interval: interval,
          speed: speed,
        }
      });
    }
  })

  return (
      <svg 
        ref={ref} key="canvas" id="canvas" className={styles.canvas}
      />
  )
}
  
  export default Canvas;