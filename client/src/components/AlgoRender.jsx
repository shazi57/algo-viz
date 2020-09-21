import React, {useEffect} from 'react';
import quicksort from '../algorithms/quicksort.js'
import * as d3 from 'd3';

const AlgoRender = (props) => {
  const { algo, inputArray, config, getConfigHandShake} = props;
  let coordArr = [];
  const target = d3.select('#canvas');
  quicksort(inputArray, coordArr);

  useEffect(() => {
    const renderQuickSort = function(data) {

      var moveBar = function(coord, from = 0, dest = 1) {
        //console.log(coord);
        console.log(config.speed);
         target.select(`#num_${coord[2]}`).style('fill', 'blue');
         
         target
          .select(`#num_${coord[from]}`)
          .transition()
          .duration(config.speed)
          .attr('x', (d, i) => 100 + (i + coord[dest]) * config.interval)
          .attr('id', `num_${coord[dest]}-changed`)
          .style('fill', 'red')
          .on('end', function() {
            if (data.length === 0) {
              moveBar(coord, 1, 0);
              console.log('bye');
              coordArr = [];
              return;
            } else if (from === 1 && dest === 0) {
              console.log('remaining mappings : ', data);
              console.log(`Switched ${coord[from]} <--> ${coord[dest]}`);
              target.select(`#num_${coord[from]}-changed`).attr('id', `num_${coord[from]}`);
              target.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
              coord = data.shift();
              moveBar(coord);
            } else if (coord[from] === coord[dest]) {
              target.select(`#num_${coord[dest]}-changed`).attr('id', `num_${coord[dest]}`);
              moveBar(coord, 1, 0);
            } else  {
              moveBar(coord, 1, 0);
            }
          })
      }
  
      moveBar(data.shift())
    }
    renderQuickSort(coordArr);
    

    getConfigHandShake({
      animation_initiated: false
    })
  })

  return null;
}

export default AlgoRender;