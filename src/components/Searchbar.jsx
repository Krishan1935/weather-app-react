import { FaSearch } from "react-icons/fa";

const Searchbar = (props) => {
    function getcity(e) {
        let setcity = props.setcity;
        setcity(e.target.value);
    }

  return (
    <form
    className="flex w-full justify-center items-center gap-2"
     onSubmit={props.getWeather}>
        <input 
        className="w-full px-4 py-1 outline-none rounded-lg text-lg font-sans"
        onChange={getcity}
         type="text" name="" id="" value={props.city} placeholder="Enter city" />

        <button
        className="text-lg bg-[rgba(255,255,255,0.5)] px-2 py-2 rounded-lg hover:bg-[rgba(255,255,255,0.8)]"
        type="submit">
            <FaSearch></FaSearch>
        </button>
    </form>
  )
}

export default Searchbar