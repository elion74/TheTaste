import SearchIcon from "../assets/search.png"

import "./SearchBar.css"


export default function SearchBar() {
 return (
    <div className="searchbar">
        <button className="buttonsearch">
            <img className = "icon" src = {SearchIcon}/>
        </button>
        <input className="input-search" type = "text"/> 
    </div>
  )
}
