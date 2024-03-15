'use client'
import React, {useEffect, useRef} from 'react'
import styles from './canvas.module.css'

function GameWindow() {
  const canvasRef = useRef(null)

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
  }
  
  useEffect( () => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    draw(context)
  }, [draw] )

  return (
    <canvas ref={canvasRef} width='device-width' height='device-height' />
  )
}

export default GameWindow