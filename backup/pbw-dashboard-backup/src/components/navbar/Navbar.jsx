import {useState} from 'react';
import { RxDragHandleDots2 } from 'react-icons/rx'
import { MdDarkMode } from 'react-icons/md'
import { TbSunLow } from 'react-icons/tb'
import { AiFillHome, AiFillMessage } from 'react-icons/ai'
import { BsFillPeopleFill } from 'react-icons/bs'
import { RiTaskFill } from 'react-icons/ri'
import './navbar.css'

const Navbar = () => {
  
  const [darkMode, setDarkMode] = useState(false);
  const [listWindow, setListWindow] = useState(false);

  return (
    <nav id="__navbar-root" className="w-full h-16 bg-primary-light dark:bg-primary-dark flex justify-center items-center">
      <section id="__navbar-wrapper" className="w-11/12 h-full md:w-10/12 lg:w-8/12 xl:w-7/12 flex justify-between items-center">


        {/* nav-brand */} 
        <div id="__nav-brand" className="font-bold text-2xl text-primary-dark dark:text-primary-light">PBW</div>
        {/* nav-brand */} 


        {/* list */}
        <ul id="__nav-list" className="md:flex gap-5 hidden"> 
          <li><a href=""><AiFillHome />Beranda</a></li>
          <li><a href=""><BsFillPeopleFill />Anggota</a></li>
          <li><a href=""><RiTaskFill />Tugas</a></li>
          <li><a href=""><AiFillMessage />Kontak</a></li>
        </ul>
        {/* list */}



        {/* list (mobile) */}
        <ul id="__nav-list" className= {listWindow ? 
          "absolute gap-2 flex md:hidden flex-col justify-center items-start p-5 bg-primary-light dark:bg-primary-dark border-[1px] hover:shadow-light-mode dark:hover:shadow-dark-mode dark:border-primary-light border-primary-dark right-10 top-20": 
          "absolute gap-2 flex md:hidden flex-col justify-center items-start p-5 bg-primary-light dark:bg-primary-dark border-[1px] hover:shadow-light-mode dark:hover:shadow-dark-mode dark:border-primary-light border-primary-dark right-[-400px] top-20"}> 
          <li><a href=""><AiFillHome />Beranda</a></li>
          <li><a href=""><BsFillPeopleFill />Anggota</a></li>
          <li><a href=""><RiTaskFill />Tugas</a></li>
          <li><a href=""><AiFillMessage />Kontak</a></li>
        </ul>
        {/* list (mobile) */}




        {/* dark-toggle */}
        <div id="__dark-toggle" className="ml-auto md:ml-0 cursor-pointer">
          {
            !darkMode ? 
              <MdDarkMode class="text-3xl" onClick={() => {
                setDarkMode(!darkMode)
                document.querySelector('html').classList.toggle("dark");
              }} /> :
              <TbSunLow class="text-3xl text-primary-light" onClick={() => {
                setDarkMode(!darkMode)
                document.querySelector('html').classList.toggle("dark");
              }} />
          }
        </div>

        
        {/* hamburger */}
        <div id="__nav-hamburger" className="border-primary-dark cursor-pointer md:hidden" onClick={() => {setListWindow(!listWindow)}}>
          <RxDragHandleDots2 className="text-3xl text-primary-dark dark:text-primary-light" />
        </div>
        {/* hamburger */}


      </section>
    </nav>
  )
}

export default Navbar;
