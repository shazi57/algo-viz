import React from 'react';
import styles from './app.css';
import Controlbar from './Controlbar.jsx';
import Algobar from './Algobar.jsx';
import Canvas from './Canvas.jsx';
import AlgoRender from './AlgoRender.jsx';
import QuickSort from '../algorithms/quicksort';
import * as d3 from 'd3';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedAlgo: null,
      svgbarnum: 0,
      canvas_created: false,
      animation_initiated: false,
      coordArray: null,
      inputArray: null,
      svgconfig: {
        width: null,
        interval: null,
        speed: null,
      }
    }
    this.selectHandler = this.selectHandler.bind(this);
    this.getConfigHandler = this.getConfigHandler.bind(this);
    this.getConfigHandShake = this.getConfigHandShake.bind(this);
  }

  selectHandler (e) {
    this.setState({
      selectedAlgo: e.target.name
    })
  }

  getConfigHandler (barnum) {
    this.setState({
      svgbarnum: barnum,
      canvas_created: true,
    })
  }

  getConfigHandShake (state) {
    this.setState(state);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div className={styles.container}>
          {(this.state.animation_initiated ? <AlgoRender getConfigHandShake={this.getConfigHandShake} algo={this.state.selectedAlgo} inputArray={this.state.inputArray} config={this.state.svgconfig}/> : null)}
          <Controlbar getConfigHandler={this.getConfigHandler} getConfigHandShake={this.getConfigHandShake}/>
          <Algobar selectHandler={this.selectHandler} selected={this.state.selectedAlgo} selectedAlgo={this.state.selectedAlgo}/>
          <Canvas svgbarnum={this.state.svgbarnum} canvas_created={this.state.canvas_created} getConfigHandShake={this.getConfigHandShake}/>)
        </div>
      </div>
    )
  }
}

export default App;