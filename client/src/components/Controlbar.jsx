import React from 'react';
import styles from './controlbar.css'
import logo from '../assets/logo.png'
import create from '../assets/create.png'
import clear from '../assets/clear.png'
import save from '../assets/save.png'
import sort from '../assets/sort.png'
import * as d3 from 'd3';

class Controlbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      barnum: 0,
    }
    this.handleCreate = this.handleCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInitiate = this.handleInitiate.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleCreate(e) {
    this.props.getConfigHandler(this.state.barnum);
  }

  handleClear(e) {
    const canvas = d3.select('#canvas');
    canvas.selectAll('rect')
      .data([])
      .exit()
      .remove()
  }

  handleInitiate(e) {
    this.props.getConfigHandShake({animation_initiated: true})
  }

  handleChange(e) {
    this.setState({
      barnum: e.target.value,
    })
  }
  
  render () {
    return (
      <div className={styles.control}>
        <img className={styles.logo} src={logo}/>
        <input type="image" className={styles.images} src={create} onClick={this.handleCreate}/>
        <div className={styles.slidecontainer}>
          <input type="range" min="1" max="150" className={styles.slider} onChange={this.handleChange} id="myRange"></input>
        </div>
        <input type="image" className={styles.images} src={sort} onClick={this.handleInitiate}/>
        <input type="image" className={styles.images} src={clear} onClick={this.handleClear}/>
        <input type="image" className={styles.images} src={save} onClick={this.handleCreate}/>
      </div>
    )
  }
}

export default Controlbar;