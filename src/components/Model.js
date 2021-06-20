import React, { useRef, useEffect } from 'react'
import Pastusek from '../Pastusek'
import './Model.css'

const xAxisDivisions = 4
const textColor = "#a4a4a4"
const textColorPresent = "#ffffff"
const lineColor = "#555555"
const lineColorPresent = "#444444"
const plotColor = "#6262ee"
const plotColorPresent = "#5555ff"
const gridWidth = 2
const lineWidth = 4
const calcMin = 1914
const calcMax = 13900
//const drillStartHeight = -19.15

const Model = (props) => {

  const canvasRef = useRef(null)

  useEffect( () => {
    const { rpm, rock, gauge, rop, l1, l2, present } = props
    const points = Pastusek(rpm, rock, gauge, rop, l1, l2)
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

		const width = context.canvas.width //= window.innerWidth;
	  const height = context.canvas.height //= window.innerHeight-230;
    const center = width / 2

		//clear canvas
		//context.fillStyle = background
		//context.fillRect(0, 0, width, height)
    context.clearRect(0, 0, width, height)
		
		//set font
		var fontSize = height / 20
		context.font = fontSize + "px sans-serif"
		
    //draw graph
    context.beginPath()
    context.lineWidth = lineWidth
    context.strokeStyle = present ? plotColorPresent : plotColor
    var minDepth = 100
    var maxDepth = 100
    var leftMax = 0
    var rightMax = 0
    context.moveTo(center, 0)
    for(var i = calcMin; i < calcMax; ++i) {
      var x = points[i].x
      var y = points[i].y
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

    //set grid width
    context.lineWidth = gridWidth
    
		//draw y axis
		context.fillStyle = lineColor
		context.strokeStyle = present ? lineColorPresent : lineColor
		const stepSize = 4 / xAxisDivisions
		const stepSizePixels = width / xAxisDivisions
		for(x = -2; x <= 2; x += stepSize) {
      if (x !== -2 && x !== 2) {
        context.beginPath()
        context.moveTo(center + x * stepSizePixels, 0)
        context.lineTo(center + x * stepSizePixels, height)
        context.stroke()
      }
      
      context.fillStyle = present ? textColorPresent : textColor
      if(x === 2)
        context.fillText(x + '"', center + x * stepSizePixels - fontSize * 1.5, fontSize)
      else
        context.fillText(x + '"', center + x * stepSizePixels + 5, fontSize)
      context.fillStyle = present ? lineColorPresent : lineColor
    }

    //draw x axis
    context.fillStyle = present ? lineColorPresent : lineColor
    context.strokeStyle = present ? lineColorPresent : lineColor
    const depthStep = height / 120;
    for(y = 0; y <= 120; y += 20) {
      if (y !== 0 && y !== 120) {
        context.beginPath()
        context.moveTo(0, y * depthStep)
        context.lineTo(width, y * depthStep)
        context.stroke()  
      }
      context.fillStyle = present ? textColorPresent : textColor
      context.fillText("-" + y + "'", 5, y * depthStep - 5)
      context.fillStyle = present ? textColorPresent : lineColor
    }
  }, [props])

  return (
    <canvas id="canvas" width="1024" height="1024" ref={canvasRef}/>
  )
}

export default Model