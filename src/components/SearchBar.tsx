import SearchIcon from "../assets/search.png"
import { useState } from "react";

import "./SearchBar.css"


export default function SearchBar({callback}:any) {

  const [searchName, setSearchName] = useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const search  =(e:any) => {

    e.preventDefault();
    console.log(searchName)

    callback(searchName);
  }

  return (
    <div className="searchbar">

      <form onSubmit={search}>
        <button className="buttonsearch" type="submit">
            <img className = "icon" src = {SearchIcon}/>
        </button>
        <input className="input-search" type = "text" onChange={(e) => setSearchName(e.target.value)}/> 
        </form>
    </div>
  )
}
