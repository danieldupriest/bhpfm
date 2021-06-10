import Slider from 'react-input-slider'
import './Input.css'

const Input = (props) => {
  const { value, label, xmin, xmax, func, suffix } = props
  return (
    <div className="slider-container">
      <div className="text">
        <label>{label}</label>
        <div className="variable-display">{value}{suffix}</div>
      </div>
      <Slider
        className="slider"
        axis="x"
        x={value}
        onChange={func}
        xmin={xmin}
        xmax={xmax}
        styles={{
          track:{backgroundColor: '#000000'},
          active:{backgroundColor: '#ff8000'}
        }}
      />
    </div>
  )
}

export default Input
