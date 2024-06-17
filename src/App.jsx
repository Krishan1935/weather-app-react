import Searchbar from "./components/Searchbar";
import Infosection from "./components/Infosection";
import Loader from "./components/Loader";
import { useState } from "react";
import { toast } from "react-toastify";

// const apiurl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=AW2L7NU7VEKSSLEYQDJFBEMQ3&unitGroup=metric"

function App() {
    const [city, setCity] = useState();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    function getWeather(e) {
        e.preventDefault();
        async function fetchweather() {
            setLoading(true);
            try {
                const weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=AW2L7NU7VEKSSLEYQDJFBEMQ3&unitGroup=metric`)
                const weatherdata = await weather.json();
                setData(weatherdata);
            }
            catch (e) {
                toast.error("something went wrong",{
                    theme: "dark",
                })
            }
            setLoading(false);
        }
        fetchweather()
    }

  return (
    <div className="bg-[url('./assets/bg.jpg')] w-full min-h-[100vh] bg-cover bg-center flex justify-center items-center">
        <div className="bg-transparent  backdrop-blur-xl w-fit p-2 rounded-lg border-gray-300 border-2">
            <Searchbar city = {city} setcity = {setCity} getWeather={getWeather}></Searchbar>
            {
                (loading && data.length === 0) ? (<Loader></Loader>) : (<Infosection data = {data}></Infosection>)
            }
        </div>

    </div>
  );
}

export default App;
