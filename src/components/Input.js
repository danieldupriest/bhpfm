import Slider from 'react-input-slider'
import './Input.css'

const Input = (props) => {
  const { value, label, xmin, xmax, func, suffix, step } = props
  return (
    <div className="slider-container">
      <div className="text">
        <label>{label}</label>
        <div className="variable-display">{Math.round(value) !== value ? value.toFixed(2) : value}{suffix}</div>
      </div>
      <Slider
        className="slider"
        axis="x"
        x={value}
        onChange={func}
        xmin={xmin}
        xmax={xmax}
        xstep={step}
        styles={{
          track:{backgroundColor: '#000000'},
          active:{backgroundColor: '#ff8000'}
        }}
      />
    </div>
  )
}

export default Input
