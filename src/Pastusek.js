const Pastusek = (rpm, rock, gauge, rate) => {
  
  //configuration
  var calcMax = 13900
  var drillStartHeight = -19.15
  var excitation = 0.5
  
  //set up variables for calculation
  var clab = 23809
  var rsl = 15000
  var c
  var l1 = 15.25
  var l2 = 3.0
  var ga = (l1 + l2) / l1
  var xa
  var zs = 0.01
  var ts = zs / rate * 60
  var k = 11975
  var xbit = new Array(calcMax)
  var currentDepth = drillStartHeight

  //output array
  var result = []

  //run calculations
  for(var counter = 0; counter < calcMax; ++counter) {
    //if above ground
    if(currentDepth < 0) {
      //positive excitation
      if(currentDepth >= -2.85 && currentDepth <= -2.64)
        xbit[counter] = excitation
      //negative excitation
      else if(currentDepth >= -2.52 && currentDepth <= -2.31)
        xbit[counter] = -excitation
      //if not excited, values for this height are zero
      else
        xbit[counter] = 0
    } else {
      //calculate c
      c = ((((clab * 120 / rpm) * rock) / rsl) * gauge) / 12
      //calculate Xa for this depth
      xa = xbit[counter - 1850] + ga * (xbit[counter - 300] - xbit[counter - 1850])
      //calculate ts
      ts = (zs / rate) * 60
      //calculate xbit
      xbit[counter] = (k * xa + (c / ts) * xbit[counter - 1]) / (k + (c / ts))
    }

    result.push(
      {
        'x': currentDepth,
        'y': xbit[counter]
      }
    )
    
    //change depth by zs for next measurement
    currentDepth += zs
  }

  return result
}

export default Pastusek