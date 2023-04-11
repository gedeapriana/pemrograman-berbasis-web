import React, { useState } from "react";

// icon
import { GiHamburgerMenu } from "react-icons/gi";
import { FiHome } from "react-icons/fi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";

const Navbar = () => {
  const html = document.querySelector("html");
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.scrollY > 0) setScroll(true);
    else setScroll(false);
  });

  return (
    <>
      <nav
        id={"navbar-root"}
        className={
          scroll === true
            ? "w-full z-10 fixed border-b dark:border-b-slate-800 bg-white dark:bg-slate-800 h-20 lg:h-16 flex justify-center items-center"
            : "w-full fixed z-10 dark:border-b-slate-800 bg-white dark:bg-slate-800 h-20 lg:h-16 flex justify-center items-center"
        }
      >
        <section
          id={"navbar-wrapper"}
          className={
            "h-full w-11/12 lg:w-9/12 xl:w-8/12 flex justify-between items-center"
          }
        >
          {/* TODO:brand logo */}
          <div id={"__header-logo-brand"}>
            <p
              className={
                "font-mono font-extrabold text-lg lg:text-xl text-violet-500"
              }
            >
              PBW
            </p>
          </div>
          {/* brand logo */}

          {/* TODO:hamburger */}
          <div
            id={"__headerhamburger-menu"}
            className={"md:hidden ml-auto cursor-pointer"}
          >
            <GiHamburgerMenu
              size={40}
              onClick={() => {
                setMobileNav(!mobileNav);
              }}
              className={"text-violet-400"}
            />
          </div>

          {mobileNav ? (
            <nav className="absolute overflow-hidden m-3 right-0 top-20">
              <div class="w-48 text-sm overflow-hidden font-medium md:hidden text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-600 dark:text-white">
                <a
                  href="#"
                  class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                  Beranda
                </a>
                <a
                  href="#__member-root"
                  class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                  Anggota
                </a>
                <a
                  href="#__task-root"
                  class="block w-full px-4 py-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                  Tugas
                </a>
                <a
                  href="#__contact-root"
                  class="block w-full px-4 py-2 rounded-b-lg cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                  Kontak
                </a>
              </div>
            </nav>
          ) : (
            ""
          )}
          {/* hamburger */}

          {/* TODO:List menu */}
          <div id={"__header-list-menu"} className={"hidden md:flex"}>
            <ul className={"flex gap-7"}>
              <li>
                <a href={"#"} className={"font-bold"}>
                  <FiHome />
                  Beranda
                </a>
              </li>
              <li>
                <a href={"#__member-root"} className={"font-bold"}>
                  <MdOutlinePeopleAlt />
                  Anggota
                </a>
              </li>
              <li>
                <a href={"#__task-root"} className={"font-bold"}>
                  <BiTask />
                  Tugas
                </a>
              </li>
              <li>
                <a href={"#__contact-root"} className={"font-bold"}>
                  <TbMessage2 />
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          {/* List menu */}

          {/* darktoggle */}
          <div
            onClick={() => {
              setToggle(!toggle);
              html.classList.toggle("dark");
            }}
            id={"__header-dark-toggle"}
            className={
              "p-3 ml-5 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            }
          >
            {toggle === true ? (
              <BsSun className={"text-slate-700 dark:text-slate-100 text-xl"} />
            ) : (
              <BsMoon
                className={"text-slate-700 dark:text-slate-100 text-xl"}
              />
            )}
          </div>
          {/* darktoggle */}
        </section>
      </nav>
    </>
  );
};

export default Navbar;
