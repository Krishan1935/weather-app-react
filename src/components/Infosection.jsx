import { WiHumidity } from "react-icons/wi";
import { FaWind, FaCloudRain } from "react-icons/fa";
import { FiSunrise,FiSunset } from "react-icons/fi";
import { FaThermometerEmpty } from "react-icons/fa";

import React from 'react'

const Infosection = ({data}) => {
    console.log(data)
  return (
    <div>
        {
            (data !== undefined) ? (
            <div className="py-2 flex flex-col gap-3 justify-center items-center">
                {/* Name, Timezone, Conditions */}
                <div className="text-white flex flex-col items-center justify-center">
                    <p className="font-bold text-lg">{data.resolvedAddress} </p>
                    <p className="text-gray-300 font-semibold text-sm">{data.timezone} </p>
                    <p className="font-bold text-base">{data.currentConditions.conditions} </p>
                </div>
                {/* cards */}
                <div className="grid grid-cols-3 grid-rows-2 gap-3 place-items-start text-white">
                    <div className="w-full h-full border-2 border-gray-300 rounded-md p-2 flex flex-col justify-between items-center">
                        <p>{data.currentConditions.temp}°C</p> 
                        <div className="flex items-center justify-center gap-1">
                            <p>Temprature</p> 
                            <FaThermometerEmpty/> 
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-gray-300 rounded-md p-2 flex flex-col justify-between items-center">
                        <p>{data.currentConditions.humidity} g/Kg</p> 
                        <div className="flex items-center justify-center gap-1">
                            <p>Humidity </p> 
                            <WiHumidity/> 
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-gray-300 rounded-md p-2 flex flex-col justify-between items-center">
                        <p>{data.currentConditions.windspeed}</p> 
                        <div className="flex items-center justify-center gap-1">
                            <p>Wind Speed </p> 
                            <FaWind/>  
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-gray-300 rounded-md p-2 flex flex-col justify-between items-center">
                        <p>{data.currentConditions.precipprob}%</p> 
                        <div className="flex items-center justify-center gap-1">
                            <p>Rain </p> 
                            <FaCloudRain/> 
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-gray-300 rounded-md p-2 flex flex-col justify-between items-center">
                        <p>{data.currentConditions.sunrise}</p> 
                        <div className="flex items-center justify-center gap-1">
                            <p>Sunrise </p> 
                            <FiSunrise/> 
                        </div>
                    </div>
                    <div className="w-full h-full border-2 border-gray-300 rounded-md p-2 flex flex-col justify-between items-center gap-2">
                        <p>{data.currentConditions.sunset}</p> 
                        <div className="flex items-center justify-center gap-1">
                            <p>Sunset </p> 
                            <FiSunset/> 
                        </div>
                    </div>
                </div>
            </div>
            ) : (
                <div className="font-semibold text-lg text-white py-4">
                    Search city...
                </div>
            )
        }
    </div>
  )
}

export default Infosection