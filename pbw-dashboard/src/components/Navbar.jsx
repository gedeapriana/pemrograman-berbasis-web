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
          <ul id={"nav-list"}>
            <li><a href={"#main-root"}><RiHomeLine />Beranda</a></li>
            <li><a href={"#anggota-root"}><MdPeopleOutline />Anggota</a></li>
            <li><a href={"#tugas-root"}><BsCodeSlash />Tugas</a></li>
          </ul>
        {/* Nav list end*/}
        
        {/* Kontak button */}
          <a href={"#kontak-root"} id={"nav-contact"}>Kontak</a>
        {/* Kontak button end */}
        
        {/* Hamburger */}
          <RxDragHandleDots2 id={"nav-hamburger"} onClick={() => {setMobileNavList(!mobileNavList)}}/>
        {/* Hamburger end */}
        
        </div>
      </nav>
  );
}

export default Navbar;