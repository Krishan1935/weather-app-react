import { FaSearch } from "react-icons/fa";

const Searchbar = (props) => {
    function getcity(e) {
        let setcity = props.setcity;
        setcity(e.target.value);
    }

  return (
    <form
    className="flex justify-center items-center"
     onSubmit={props.getWeather}>
        <input 
        className=""
        onChange={getcity}
         type="text" name="" id="" value={props.city} placeholder="Enter city" />
        <button
        type="submit">
            <FaSearch></FaSearch>
        </button>
    </form>
  )
}

export default Searchbar