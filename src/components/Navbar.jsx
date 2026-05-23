import SearchBar from "./Searchbar"

const Navbar = ({onSearch, onHome})=> {

    return (
        <nav className="flex justify-between items-center border-b px-4 py-4">
            <header className="font-heading text-gold text-[1.2rem] lg:text-[2rem]">FILM<span className="text-cream cursor-pointer" onClick={onHome}>BUCKET</span></header>
            <ul className="hidden lg:flex gap-4 uppercase font-body text-[1rem] text-cream">
                <li className="hover:text-gold cursor-pointer transition-colors duration-200" onClick={onHome}>Home</li>
                <li className="hover:text-gold cursor-pointer transition-colors duration-200">CinemaNow</li>
                <li className="hover:text-gold cursor-pointer transition-colors duration-200">Genres</li>
                <li className="hover:text-gold cursor-pointer transition-colors duration-200">Bucket</li>
            </ul>
            <div className="flex items-center gap-3">
                <SearchBar onSearch={onSearch}/>
                 <span className="bg-gold w-[40px] h-[40px] rounded-full hidden lg:flex justify-center items-center font-bold cursor-pointer">SA</span>
            </div>
        </nav>
    )

}

export default Navbar