import React from 'react'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satruday', 'Sunday']

const Forecast = (props) => {

    const dayInWeek = new Date().getDay();
    const forecastDays = weekDays.slice(dayInWeek, weekDays.length).concat(weekDays.slice(0, dayInWeek))
    return (
        <div className="forecast-container"><h2>Daily Forecast</h2>
            <Accordion allowZeroExpanded>
                {props.data.list.splice(0, 7).map((item, index) => (
                    <AccordionItem key={index}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`icons/${item.weather[0].icon}.png`
                                    } alt="Item" className='forecast-icon' />
                                    <label className="day">{forecastDays[index]} </label>
                                    <label className="forecast-description">{item.weather[0].description} </label>
                                    <label className="temp">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="details-grid">
                                    <div className="details-grid-items">
                                        <label className='field'>Pressure </label>
                                        <label>{item.main.pressure} hPa</label>
                                    </div>
                                    <div className="details-grid-items">
                                        <label className='field'>Humidity </label>
                                        <label>{item.main.humidity}%</label>
                                    </div>
                                    <div className="details-grid-items">
                                        <label className='field'>Clouds </label>
                                        <label>{item.clouds.all}%</label>
                                    </div>
                                    <div className="details-grid-items">
                                        <label className='field'>Wind Speed </label>
                                        <label>{item.wind.speed} m/s</label>
                                    </div>
                                    <div className="details-grid-items">
                                        <label className='field'>Sea Level </label>
                                        <label>{item.main.sea_level}m</label>
                                    </div>
                                    <div className="details-grid-items">
                                        <label className='field'>Feels Like </label>
                                        <label>{Math.round(item.main.feels_like)}°C</label>
                                    </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Forecast
