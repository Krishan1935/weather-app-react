import { WiHumidity } from "react-icons/wi";
import { FaWind, FaCloudRain } from "react-icons/fa";
import { FiSunrise,FiSunset } from "react-icons/fi";

import React from 'react'

const Infosection = ({data}) => {
    console.log(data)
  return (
    <div>
        {
            (data !== undefined) ? (
            <div>
                <p>{data.resolvedAddress} </p>
                <p>{data.timezone} </p>
    
                <p>{data.currentConditions.conditions} </p>
                <p>Feels like: {data.currentConditions.temp} </p>
                <p>Humidity <WiHumidity/> : {data.currentConditions.humidity} </p>
                <p>Wind Speed: <FaWind/> : {data.currentConditions.windspeed} </p>
                <p>Rain <FaCloudRain/> : {data.currentConditions.precipprob}% </p>
                <p>Sunrise <FiSunrise/> : {data.currentConditions.sunrise} </p>
                <p>Sunset <FiSunset/> : {data.currentConditions.sunset} </p>
            </div>
            ) : (
                <div>
                    Search city...
                </div>
            )
        }
    </div>
  )
}

export default Infosection