import { useState } from 'react'
import './App.css'
import Model from './components/Model'
import Input from './components/Input'
import Footer from './components/Footer'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

function App() {
  const [rpm, setRpm] = useState(150)
  const [rock, setRock] = useState(9645)
  const [gauge, setGauge] = useState(2)
  const [rop, setRop] = useState(140)
  const [l1, setL1] = useState(15.25)
  const [l2, setL2] = useState(3.0)
  const [present, setPresent] = useState(false)

  const togglePresentation = () => {
    setPresent(current => {
      return !current
    })
  }

  return (
    <div id="app" className={present ? "present" : ""}>
      <header>
        <h1>Spiral Borehole Model</h1>
      </header>
      <div id="container">
        
        <div className="row">
          <div id="settings" className="pane">
            <h2>Settings</h2>
            <div id="sliders">
              <label id="toggle-label">Present
                <Toggle id="presentation-toggle" defaultChecked={present} onChange={togglePresentation} />
              </label>
              <Input key={0} value={rpm} label="RPM" xmin={1} xmax={450} step={1} suffix=" rpm" func={({x}) => setRpm(x)}/>
              <Input key={1} value={rock} label="Rock strength" xmin={1000} xmax={40000} step={1} suffix=" ksi" func={({x}) => setRock(x)}/>
              <Input key={2} value={gauge} label="Gauge length" xmin={1} xmax={8} step={0.25} suffix=" in" func={({x}) => setGauge(x)}/>
              <Input key={3} value={rop} label="ROP" xmin={1} xmax={400} step={1} suffix=" ft/hr" func={({x}) => setRop(x)}/>
              <Input key={4} value={l1} label="L1" xmin={0} xmax={60} step={0.25} suffix=" ft" func={({x}) => setL1(x)}/>
              <Input key={5} value={l2} label="L2" xmin={0} xmax={5} step={0.25} suffix=" ft" func={({x}) => setL2(x)}/>
            </div>
          </div>
          <Model rpm={rpm} rock={rock} gauge={gauge} rop={rop} l1={l1} l2={l2} present={present} />
        </div>

        <div className="row">
          <div id="instructions" className="pane">
            <h2>Instructions</h2>
            <p><img className="right" src="./images/diagram.png" alt="Diagram of bent motor and parameters" />Click on the slider and move its position left or right to reduce or increase its value of each factor. Observe the sensitivity of the pattern’s tendency to gain or decay with each value. Because the user cannot typically control the rock strength, L1 or L2, the key design choices are usually gauge length, bit RPM and drill rate.</p>
            <ul>
              <li><strong>RPM</strong> - Bit speed in rounds per minute. Equals motor plus top drive speeds</li>
              <li><strong>Rock strength</strong> - In situ rock compressive strength (psi)</li>
              <li><strong>Gauge length</strong> - Distance from last trim cutter to upper shoulder of the bit (in.)</li>
              <li><strong>ROP</strong> - Rate of penetration (ft/hr)</li>
              <li><strong>L1</strong> - Distance from midpoint of the bearing stabilizer to the top motor stabilizer, or wall contact if no top stabilizer is present (ft)</li>
              <li><strong>L2</strong> - Distance from bit to bearing stabilizer or wear pad (ft)</li>
            </ul>
            <p>The tendency of the spiral to gain in amplitude may be much greater with motor bends greater than the 1.5 degrees, or if there is additional side force on the bit due to whirl.</p>
          </div>  
          <div id="whirl" className="pane">
            <h2>Borehole Pattern</h2>
            <p><img className="right" src="./images/whirl.png" alt="Rendering of whirl showing borehole pattern" />This simulation demonstrates the effects six factors have on whether a bent housing motor will create a spiral pattern. Spiraling occurs due to feedback between the bit and the first contact point with the borehole wall above it, which is typically the bearing housing stabilizer or wear pad. We cannot prevent a bent motor from attempting to start a pattern. Instead, the design objective is to select a combination of these six items that ensure it always rapidly decay so it does no effect operations.</p>
            <p>The physics of spiraling and the mathematics in this model are discussed in detail in <a href="https://onepetro.org/SPEATCE/proceedings-abstract/03ATCE/All-03ATCE/SPE-84448-MS/137797">SPE 84448</a>, Pastusek and Bracken.</p>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default App;
