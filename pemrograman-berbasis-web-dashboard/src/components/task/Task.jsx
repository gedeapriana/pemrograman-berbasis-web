import React from "react";

import TaskAccordion from './TaskAccordion';
import { BiTask } from 'react-icons/bi';
import { Dropdown } from "flowbite-react";

const Task = () => {
  return (
    <section id={"__task-root"} className={"w-full dark:bg-slate-700 py-24 flex justify-center items-center"}>
        <section id="__task-wrapper" className={"h-full w-11/12 flex flex-col items-center justify-center lg:w-9/12 xl:w-8/12"}>
          <p id="__task-header" className={"text-xl lg:text-3xl pb-8 text-violet-500 dark:text-slate-50 flex items-center justify-center gap-2"}><BiTask className={"inline"}/>Daftar Tugas</p>
          <Dropdown
            label="Tampilkan dalam bentuk"
            dismissOnClick={false}
            class="bg-violet-500 text-slate-50 rounded-xl"
          >
            <Dropdown.Item onClick={() => {alert("Hehe")}}>
              Accordion
            </Dropdown.Item>
            <Dropdown.Item>
              Kartu
            </Dropdown.Item>
            <Dropdown.Item>
              Tabel
            </Dropdown.Item>
          </Dropdown>
          
          {/* data-section */}
          <section id="__task-data" className={"w-full p-10 lg:p-16"}>
            <TaskAccordion />
          </section>
          {/* data-section */}

        </section>


    </section>
  )
}

export default Task;
