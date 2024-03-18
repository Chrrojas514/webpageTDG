'use client'
import React from 'react'
import styles from './canvas.module.css'

function ClearCanvasButton() {
  const handleClick = () => {
    console.log('CLICKED')
  }

  return (
    <div className={styles.clearButtonDiv}>
      <button className={styles.clearButton} onClick={() => handleClick()}>Clear Canvas</button>
    </div>
  )
}

export default ClearCanvasButton