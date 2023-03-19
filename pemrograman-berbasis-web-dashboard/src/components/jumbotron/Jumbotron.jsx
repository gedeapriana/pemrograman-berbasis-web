import React, { useEffect } from 'react'
import note from '../../assets/images/3d-note.png';
import Typed from 'typed.js';

import { BiCaretDownCircle } from 'react-icons/bi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdOutlineWavingHand } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';


const Jumbotron = () => {

  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Class E', 'Pemrograman Berbasis Web'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: ' | PBW ',
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <main id={"__main-root"} className={"flex dark:bg-slate-700 items-center justify-center"}>
        <section id={"__main-wrapper"} className={"h-full gap-5 mt-52 mb-40 md:mt-48 w-11/12 lg:w-9/12 xl:w-8/12 flex flex-col md:flex-row"}>
          
          {/* logo */}
          <div className="__main-logo w-full md:w-1/2 overflow-hidden flex justify-center items-center">
            <img src={note} alt="" className={"w-1/2 md:w-6/12"} />
          </div>
          {/* logo */}

          {/* content */}
          <div className="__main-content w-full md:w-1/2  flex flex-col justify-center items-center md:items-start">
            <h1 style={{fontWeight: 700}} className={'text-xl dark:text-slate-100 font-bold md:text-2xl text-slate-700'}><MdOutlineWavingHand className={"inline"}/> Welcome to</h1>
            <h1 style={{fontWeight: 700}} className={'text-3xl flex flex-col items-center justify-center md:items-start w-full py-4 font-bold md:text-4xl text-violet-400'}>
              <span className={"bg-violet-100 text-violet-600 px-3 py-2 rounded-xl dark:bg-violet-900 dark:text-violet-300"}>GROUP 2</span>
              <p className={"py-3 text-lg lg:text-2xl"}><span ref={el}></span></p>
            </h1>
            <div className="__main-submenu py-5 w-full flex flex-col lg:flex-row lg:items-start gap-1 justify-center items-center">

              <div class="w-full p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-slate-800 dark:border-gray-700"> <HiOutlineUserGroup className={"text-4xl text-violet-500"} />
                  <a href="#">
                      <h5 class="mb-2 text-lg font-semibold tracking-tight text-violet-500 dark:text-white">Anggota</h5>
                  </a>
                  <p class="mb-3 lg:hidden xl:inline text-xs font-normal text-gray-500 dark:text-gray-400">Daftar anggota pada kelompok ini</p>
                  <a href="#" class="py-3 flex items-center text-violet-600 hover:underline">
                    Scroll down <BiCaretDownCircle  className={"mx-1"} />
                  </a>
              </div>

              <div class="w-full p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-slate-800 dark:border-gray-700"> <BiTask className={"text-4xl text-violet-500"} />
                  <a href="#">
                      <h5 class="mb-2 text-lg font-semibold tracking-tight text-violet-500 dark:text-white">Tugas</h5>
                  </a>
                  <p class="mb-3 lg:hidden xl:inline text-xs font-normal text-gray-500 dark:text-gray-400">List tugas kelompok</p>
                  <a href="#" class="py-3 flex items-center text-violet-600 hover:underline">
                    Scroll down <BiCaretDownCircle  className={"mx-1"} />
                  </a>
              </div>

              <div class="w-full p-6 bg-white border border-gray-200 rounded-2xl shadow dark:bg-slate-800 dark:border-gray-700"> <BsCodeSlash className={"text-4xl text-violet-500"} />
                  <a href="#">
                      <h5 class="mb-2 text-lg font-semibold tracking-tight text-violet-500 dark:text-white">Tentang</h5>
                  </a>
                <p class="mb-3 lg:hidden xl:inline text-xs font-normal text-gray-500 dark:text-gray-400">Lebih banyak tentang website ini</p>
                  <a href="#" class="py-3 flex items-center text-violet-600 hover:underline">
                    Scroll down <BiCaretDownCircle  className={"mx-1"} />
                  </a>
              </div>
            </div>
          </div>
          {/* content */}
        </section>
      </main>
    </>
  )
}

export default Jumbotron
