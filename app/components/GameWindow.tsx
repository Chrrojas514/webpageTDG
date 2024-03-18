'use client'
import React, {useEffect, useRef, useState} from 'react'
import styles from './canvas.module.css'

function GameWindow() {
  const canvasRef = useRef(null)
  //Creating ref for context so that the info isnt lost on re-renders
  const ctxRef = useRef(null)

  const [drawing, isDrawing] = useState(false)

  //initializes the canvas when the component is mounted (thats why dependecy array is empty?)
  useEffect(() => {
    const canvas = canvasRef.current

    const ctx = canvas.getContext('2d')
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'rgb(0,127,0)'
    ctx.lineWidth = 5

    ctxRef.current = ctx
  }, [])

  const draw = ({nativeEvent}) => {
    if (!drawing) {
      return
    }

    const {offsetX, offsetY} = nativeEvent
    ctxRef.current.lineTo(offsetX, offsetY)
    ctxRef.current.stroke() //draws the stroke
  }

  const penDown = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(offsetX, offsetY)
    isDrawing(true)
  }

  const penUp = () => {
    ctxRef.current.closePath()
    isDrawing(false)
  }

  return (
    <canvas
      className={styles.frame}
      ref={canvasRef}
      width={900}
      height={500}
      onMouseDown={penDown}
      onMouseMove={draw}
      onMouseUp={penUp}
    />
  )
}

export default GameWindow