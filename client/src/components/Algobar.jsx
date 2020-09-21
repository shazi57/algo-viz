import React from 'react'
import AlgoEntry from './AlgoEntry.jsx';
import styles from './algobar.css'
import bubble from '../assets/bubblesort.png';
import quick from '../assets/quicksort.png';
import selection from '../assets/selectionsort.png';
import merge from '../assets/mergesort.png';

const Algobar = (props) => {
  const {selectHandler, selectedAlgo} = props;
  return (
    <div className={styles.algobar}>
      <img className={styles.algo} src={quick}></img>
      <AlgoEntry name={'quicksort'} image={quick} selectHandler={selectHandler} selectedAlgo={selectedAlgo}/>
      <img className={styles.algo} src={selection}></img>
      <AlgoEntry name={'selectionsort'} image={selection} selectHandler={selectHandler} selectedAlgo={selectedAlgo}/>
      <img className={styles.algo} src={merge}></img>
      <AlgoEntry name={'mergesort'} image={merge} selectHandler={selectHandler} selectedAlgo={selectedAlgo}/>
      <img className={styles.algo} src={bubble}></img>
      <AlgoEntry name={'bubblesort'} image={bubble} selectHandler={selectHandler} selectedAlgo={selectedAlgo}/>
    </div>
  )
}

export default Algobar;