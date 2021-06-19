import { useState } from 'react'
import './App.css'
import Model from './components/Model'
import Input from './components/Input'

function App() {
  const [rpm, setRpm] = useState(150)
  const [rock, setRock] = useState(9645)
  const [gauge, setGauge] = useState(2)
  const [rop, setRop] = useState(140)
  const [l1, setL1] = useState(15.25)
  const [l2, setL2] = useState(3.0)

  return (
    <div id="app">
      <header>
        <h1>Bottom Hole Pattern Feedback Model</h1>
      </header>
      <div id="container">
        <main>
          <Model rpm={rpm} rock={rock} gauge={gauge} rop={rop} l1={l1} l2={l2} />
        </main>
        <aside id="settings">
        <h2>Settings</h2>
          <Input key={0} value={rpm} label="RPM" xmin={1} xmax={450} suffix=" rpm" func={({x}) => setRpm(x)}/>
          <Input key={1} value={rock} label="Rock strength" xmin={1000} xmax={40000} suffix=" ksi" func={({x}) => setRock(x)}/>
          <Input key={2} value={gauge} label="Gauge length" xmin={1} xmax={8} suffix=" in" func={({x}) => setGauge(x)}/>
          <Input key={3} value={rop} label="ROP" xmin={1} xmax={400} suffix=" ft/hr" func={({x}) => setRop(x)}/>
          <Input key={4} value={l1} label="L1" xmin={0} xmax={60} suffix=" ft" func={({x}) => setL1(x)}/>
          <Input key={5} value={l2} label="L2" xmin={0} xmax={5} suffix=" ft" func={({x}) => setL2(x)}/>
        </aside>
      </div>
      <footer>
        <h2>About</h2>
        <p>Based on Pastusek model <a href="https://onepetro.org/SPEATCE/proceedings-abstract/03ATCE/All-03ATCE/SPE-84448-MS/137797">SPE84448</a>. Implementation by <a href="mailto:daniel.jon.dupriest@gmail.com">Daniel Dupriest</a>. Project source code available on <a href="https://github.com/danieldupriest/bhpfm">GitHub</a>.</p>
      </footer>
    </div>
  )
}

export default App;
