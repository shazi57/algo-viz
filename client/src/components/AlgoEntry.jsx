import React from 'react';
import styles from './algobar.css';
import checkbox_unchecked from '../assets/checkbox.png';
import checkbox_checked from '../assets/checkbox-checked.png';


const AlgoEntry = (props) => {
  const {name, selectHandler, selectedAlgo} = props;
  let checkbox;
  if (selectedAlgo === name) {
    checkbox = checkbox_checked;
  } else {
    checkbox = checkbox_unchecked;
  }
  return (
    <input className= {styles.algo} type="image" name={name} src={checkbox} onClick={selectHandler}></input>
  )
}

export default AlgoEntry;