import React from 'react'

const CurrentWeather = (props) => {

    const temp = Math.floor(props.data.main.temp)
    return (
        <div className="card">
            <div className="top">
                <div>
                    <div className="city">{props.data.name}</div>
                    <div className="description">{props.data.weather[0].description}</div>
                </div>
                <img src={`/icons/${props.data.weather[0].icon}.png`} alt="Weather" />
            </div>
                <div className="bottom">
                    <div className="temperature">{`${temp}°C`}</div>
                    <div className="details">
                        <div className="row">
                        <div className="label">
                            <div>Feels Like</div>
                            <div>Wind</div>
                            <div>Humidity</div>
                            <div>Pressure</div>
                        </div>
                        <div className="value">
                            <div>{props.data.main.feels_like}°C</div>
                            <div>{props.data.wind.speed} m/s</div>
                            <div>{props.data.main.humidity}%</div>
                            <div>{props.data.main.pressure} hPa</div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    )
}

export default CurrentWeather
