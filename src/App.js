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
        <h1>Bottom Hole Pattern Feedback Model</h1>
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
            <p><img className="right" src="./images/diagram.png" alt="Diagram of bent motor and parameters" />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>  
          <div id="whirl" className="pane">
            <h2>Borehole Pattern</h2>
            <p><img className="right" src="./images/whirl.png" alt="Rendering of whirl showing borehole pattern" />"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default App;
