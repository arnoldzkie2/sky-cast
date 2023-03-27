import React from 'react'
import { useState, useEffect } from 'react'
import {AsyncPaginate} from 'react-select-async-paginate'
import { geoOptions, GEO_URL } from '../Api'

const Search = (props) => {

    const [search, setSearch] = useState(null)

    const handleOnChange = (selectedOption) => {
        setSearch(selectedOption)
        props.onSearchChange(selectedOption)
    }
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_URL}cities?namePrefix=${inputValue}`, geoOptions)
            .then(response => response.json())
            .then(response => {
                return {
                    options: response.data.map(city => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name} ${city.countryCode}`,
                            country: `${city.country}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const clock = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => {
          clearInterval(clock);
        };
      }, []);
    
    return (
        <div className="search-wrapper">
        <div className='search-container'>
            <div className="app-name">
                Sky Cast
            </div>
            <AsyncPaginate
                className='search'
                placeholder='Search for City'
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
            <div className="country-time">
                <div className="time">
                        {time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })}
                    </div>  
                <div className="country">
                    {props.data && props.data.city}
                </div>
            </div>
        </div>
    )
}

export default Search