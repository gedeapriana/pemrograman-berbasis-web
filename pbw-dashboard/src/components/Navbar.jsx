import '../css/Navbar/Navbar.css'
import { RxDragHandleDots2 } from 'react-icons/rx'
import {useState} from "react";
import {RiHomeLine} from "react-icons/ri";
import {MdPeopleOutline} from "react-icons/md";
import {BsCodeSlash} from "react-icons/bs";


const Navbar = () => {
  
  const [mobileNavList, setMobileNavList] = useState(true);
  const [mobileView, setMobileView] = useState(false);
  
  window.addEventListener("resize", () => {
    window.screen.width <= 1024 ? setMobileView(true) : setMobileView(false);
  });
  
  return(
      <nav id={"nav-root"}>
        <div id={"nav-wrapper"}>
        
        {/*Nav Brand*/}
          <h1 id={"nav-brand"}>PBW</h1>
        {/*Nav Brand End*/ }
        
        {/* Nav list*/}
          <ul id={"nav-list"} style={mobileNavList && mobileView ? {transform: "translateX(500px)"} : {transform: "translateX(0)"}}>
            <li><a href=""><RiHomeLine />Beranda</a></li>
            <li><a href=""><MdPeopleOutline />Anggota</a></li>
            <li><a href=""><BsCodeSlash />Tugas</a></li>
          </ul>
        {/* Nav list end*/}
        
        {/* Kontak button */}
          <a href="" id={"nav-contact"}>Kontak</a>
        {/* Kontak button end */}
        
        {/* Hamburger */}
          <RxDragHandleDots2 id={"nav-hamburger"} onClick={() => {setMobileNavList(!mobileNavList)}}/>
        {/* Hamburger end */}
        
        </div>
      </nav>
  );
}

export default Navbar;