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
    // For screens with higher pixel density we multiply width and height by 2
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const ctx = canvas.getContext('2d')
    //Also done for high density screens
    ctx.scale(2,2)

    //Settings for canvas element
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
    console.log('testing')
  }

  const penDown = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(offsetX, offsetY)
    isDrawing(true)
    console.log('MOUSE DOWN')
    console.log({offsetX, offsetY})
  }

  const penUp = () => {
    ctxRef.current.closePath()
    console.log('MOUSE UP')
    isDrawing(false)
  }

  return (
    <canvas
      className={styles.frame}
      ref={canvasRef}
      onMouseDown={penDown}
      onMouseMove={draw}
      onMouseUp={penUp}
    />
  )
}

export default GameWindow