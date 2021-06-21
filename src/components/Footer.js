import './Footer.css'

const Footer = (props) => {
  return(
    <footer>
      <div className="column">
        <h3>Mathematical Model</h3>
        <p>Based on model developed by Paul Pastusek.</p>
        <ul>
          <li><a href="https://onepetro.org/SPEATCE/proceedings-abstract/03ATCE/All-03ATCE/SPE-84448-MS/137797">SPE84448</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>Implementation</h3>
        <p>Written by Daniel Dupriest.</p>
        <ul>
          <li><a href="mailto:daniel.jon.dupriest@gmail.com">daniel.jon.dupriest@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/daniel-dupriest-76a495188/">Linkedin</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>Code</h3>
        <p>Built using Javascript and <a href="https://reactjs.org/">React</a>. Project source code available under the <a href="https://opensource.org/licenses/MIT">MIT license</a>.</p>
        <ul>
          <li><a href="https://github.com/danieldupriest/bhpfm">GitHub</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer