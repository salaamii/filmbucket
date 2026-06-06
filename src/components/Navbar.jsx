import { useState } from "react"
import SearchBar from "./Searchbar"
import { Link } from "react-router-dom"


const Navbar = ({onSearch, onHome})=> {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
      <>  
        <nav className="flex justify-between items-center border-b px-4 py-4">
           <Link to="/"><img className="h-[4rem] w-full" src="/fb_header.svg" alt="" /></Link>
            <ul className="hidden lg:flex gap-4 uppercase font-body text-[1rem] text-cream">
              <Link to="/"><li className="hover:text-gold cursor-pointer transition-colors duration-200" onClick={onHome}>Home</li></Link>
                <li className="hover:text-gold cursor-pointer transition-colors duration-200">CinemaNow</li>
                <li className="hover:text-gold cursor-pointer transition-colors duration-200">Genres</li>
               <Link to="/bucket"><li className="hover:text-gold cursor-pointer transition-colors duration-200">Bucket</li></Link>
            </ul>
            <div className="hidden lg:flex items-center gap-3">
                <SearchBar onSearch={onSearch}/>
                 <span className="bg-gold w-[40px] h-[40px] flex items-center rounded-full  justify-center items-center font-bold cursor-pointer">SA</span>
            </div>
            {/* Hamburger button - mobile only */}
                <button className="lg:hidden text-cream text-2xl" onClick={() => setMenuOpen(true)}>
                    <i className="ti ti-menu-2"></i>
                </button>
        </nav>
            {/* Overlay */}
                {menuOpen && <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setMenuOpen(false)}/>}

            {/* Sliding panel */}
                <div className={`fixed top-0 right-0 h-full w-[70%] bg-[#0a0a0f] z-50 flex flex-col gap-8 px-6 pt-10 overflow-hidden transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <button className="self-end text-cream text-2xl" onClick={() => setMenuOpen(false)}>
                        <i className="ti ti-x"></i>
                    </button>
                    <ul className="flex flex-col gap-6 uppercase font-body text-cream text-lg">
                        <li className="hover:text-gold cursor-pointer" onClick={() => { onHome(); setMenuOpen(false) }}>Home</li>
                        <li className="hover:text-gold cursor-pointer">CinemaNow</li>
                        <li className="hover:text-gold cursor-pointer">Genres</li>
                       <Link to="/bucket"><li className="hover:text-gold cursor-pointer" onClick={() => setMenuOpen(false)}>Bucket</li></Link>
                    </ul>
                    <SearchBar onSearch={onSearch}/>

                </div>
        
        </>
    )

}

export default Navbar