import logo from '../assets/images/logo.svg'

export default function Header(){
    return(
        <div>
            <img src={logo} alt="Wheather Now logo" />
            <select name="units" id="units">
                <option value="">Switch to imperial</option>
                <optgroup label='Templerature'>
                    <option value="celsius">Celsius (°C)</option>
                    <option value="fahrenheit">Fahrenheit (°F)</option>
                </optgroup>
                <optgroup label='Wind Speed'>
                    <option value="kmh">km/h</option>
                    <option value="mph">mph</option>
                </optgroup>
                <optgroup label='Precipitation'>
                    <option value="millimeters">Millimeters (mm)</option>
                    <option value="inches">Inches (in)</option>
                </optgroup>
            </select>
        </div>
        
    )
}