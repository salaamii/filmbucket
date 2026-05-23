import { useState } from "react";

const SearchBar = ({onSearch})=>{

    const [searchRes, setSearchRes] = useState("");
return (
    <div className="search-container bg-[rgba(255,255,255,0.05)] rounded-[20px] border border-[rgba(255,255,255,0.2)] px-3 py-2 flex items-center justify-center">
        <input value={searchRes} onKeyDown={(e)=> {if (e.key === 'Enter') onSearch(searchRes)}} onChange={(e)=> {setSearchRes(e.target.value)}} className="bg-transparent outline-none text-cream placeholder:text-[rgba(240,238,232,0.3)] " type="text" placeholder="Search films" name="Search" id="search" />
        <i className="ti ti-search ti-xl text-cream text-[1.2rem] ml-4 mr-1 cursor-pointer " onClick={()=> {onSearch(searchRes)}}></i>
    
    </div>
    
)

}

export default SearchBar;