import React, { useState } from 'react';

// icon
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiHome } from 'react-icons/fi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { RiErrorWarningLine } from 'react-icons/ri';
import { BsSun } from 'react-icons/bs';
import { BsMoon } from 'react-icons/bs';

const Navbar = () => {

  const html = document.querySelector('html');
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);


  window.addEventListener("scroll", function() {
    if(this.scrollY > 0) setScroll(true);
    else setScroll(false);
  })


  return (
    <>
      <nav id={"navbar-root"} className={ scroll === true ? "w-full fixed border-b dark:border-b-slate-800 bg-slate-50 dark:bg-slate-800 h-20 lg:h-16 flex justify-center items-center" : "w-full fixed dark:border-b-slate-800 bg-slate-50 dark:bg-slate-800 h-20 lg:h-16 flex justify-center items-center"}>
      <section id={"navbar-wrapper"} className={'h-full w-11/12 lg:w-9/12 xl:w-8/12 flex justify-between items-center'}>

        {/* TODO:brand logo */}
        <div id={"__header-logo-brand"}>
          <p className={'font-mono font-extrabold text-lg lg:text-xl text-violet-500'}>PBW</p>
        </div>
        {/* brand logo */}

        {/* TODO:hamburger */}
        <div id={'__headerhamburger-menu'} className={"md:hidden ml-auto cursor-pointer"}>
          <GiHamburgerMenu size={40} className={'text-violet-400'} />
        </div>
        {/* hamburger */}

        {/* TODO:List menu */}
        <div id={"__header-list-menu"} className={'hidden md:flex'}>
          <ul className={"flex gap-7"}>
            <li><a href={"#"} className={"font-bold"}><FiHome/>Home</a></li>
            <li><a href={"#"} className={"font-bold"}><MdOutlinePeopleAlt/>Member</a></li>
            <li><a href={"#"} className={"font-bold"}><BiTask/>Tasks</a></li>
            <li><a href={"#"} className={"font-bold"}><RiErrorWarningLine/>About</a></li>
          </ul>
        </div>
        {/* List menu */}

        {/* darktoggle */}
        <div onClick={() => {
          setToggle(!toggle);
          html.classList.toggle("dark");
        }} id={"__header-dark-toggle"} className={"p-3 ml-5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"}>
          { toggle === true ? <BsSun className={"text-slate-700 dark:text-slate-100 text-xl"} /> : <BsMoon className={"text-slate-700 dark:text-slate-100 text-xl"} /> }
        </div>
        {/* darktoggle */}

      </section>
    </nav>
    </>
  )
}

export default Navbar
