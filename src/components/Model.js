import React, { useRef, useEffect } from 'react'
import Pastusek from '../Pastusek'
import './Model.css'

const xAxisDivisions = 4
const background = "#111111"
const textColor = "#dddddd"
const lineColor = "#555555"
const plotColor = "#ff8000"
const calcMin = 1914
const calcMax = 13900
//const drillStartHeight = -19.15

const Model = (props) => {

  const canvasRef = useRef(null)

  useEffect( () => {
    const { rpm, rock, gauge, rop, l1, l2 } = props
    const points = Pastusek(rpm, rock, gauge, rop, l1, l2)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

		const width = context.canvas.width //= window.innerWidth;
	  const height = context.canvas.height //= window.innerHeight-230;

		//clear canvas
		context.fillStyle = background
		context.fillRect(0, 0, width, height)
		context.lineWidth = 4
		
		//set font
		var fontSize = height / 20
		context.font = fontSize + "px sans-serif"
			
		//draw y axis
		context.fillStyle = lineColor
		context.strokeStyle = lineColor
		const stepSize = 4 / xAxisDivisions
		const stepSizePixels = width / xAxisDivisions
		const center = width / 2
		for(var x = -2; x <= 2; x += stepSize) {
      context.beginPath()
      context.moveTo(center + x * stepSizePixels, 0)
      context.lineTo(center + x * stepSizePixels, height)
      context.stroke()
      context.fillStyle = textColor
      if(x === 2)
        context.fillText(x + '"', center + x * stepSizePixels - fontSize * 1.5, fontSize)
      else
        context.fillText(x + '"', center + x * stepSizePixels + 5, fontSize)
      context.fillStyle = lineColor
    }

		//draw x axis
    context.fillStyle = lineColor
    context.strokeStyle = lineColor
    const depthStep = height / 120;
    for(var y = 0; y <= 120; y += 20) {
      context.beginPath()
      context.moveTo(0, y * depthStep)
      context.lineTo(width, y * depthStep)
      context.stroke()
      context.fillStyle = textColor
      context.fillText("-" + y + "'", 5, y * depthStep - 5)
      context.fillStyle = lineColor
    }

    //draw graph
    context.beginPath()
    context.strokeStyle = plotColor
    var minDepth = 100
    var maxDepth = 100
    var leftMax = 0
    var rightMax = 0
    context.moveTo(center, 0)
    for(var i = calcMin; i < calcMax; ++i) {
      x = points[i].x
      y = points[i].y
      if(y < minDepth)
        minDepth = y
      if(y > maxDepth)
        maxDepth = y
      if(x < leftMax)
        leftMax = x;
      if(x > rightMax)
        rightMax = x;
      context.lineTo(y / 2 * center + center, x / 120 * height);
    }
    context.stroke();
  }, [props])

  return (
    <canvas id="canvas" width="1024" height="1024" ref={canvasRef}/>
  )
}

export default Model