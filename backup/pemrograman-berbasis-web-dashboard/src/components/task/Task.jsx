import React, { useState } from "react";

import TaskAccordion from "./TaskAccordion";
import TaskTable from "./TaskTable";
import { BiTask } from "react-icons/bi";
import { BsTable } from "react-icons/bs";
import { TfiLayoutAccordionSeparated } from "react-icons/tfi"

const Task = () => {
  const [accordionView, setAccordionView] = useState(true);
  const [tableView, setTableView] = useState(false);

  return (
    <section
      id={"__task-root"}
      className={
        "w-full dark:bg-slate-700 py-24 flex justify-center items-center"
      }
    >
      <section
        id="__task-wrapper"
        className={
          "h-full w-11/12 flex flex-col items-center justify-center lg:w-9/12 xl:w-8/12"
        }
      >
        <p
          id="__task-header"
          className={
            "text-xl lg:text-3xl pb-8 text-violet-500 dark:text-slate-50 flex items-center justify-center gap-2"
          }
        >
          <BiTask className={"inline"} />
          Daftar Tugas
        </p>

				<p className="text-slate-600 dark:text-slate-50">Tampilkan dalam bentuk</p>
				<section className="flex justify-center items-center py-6 gap-1">
					<button onClick={() => {
						setAccordionView(true);
						setTableView(false);
					}} type="button" class="focus:outline-none text-white bg-violet-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><TfiLayoutAccordionSeparated class="inline"/> Accordion</button>
					<button onClick={() => {
						setTableView(true);
						setAccordionView(false);
					}} type="button" class="focus:outline-none text-white bg-violet-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><BsTable class="inline"/> Tabel</button>
				</section>

        {/* data-section */}
        <section id="__task-data" className={"w-full p-10 lg:p-16"}>
					{accordionView ? <TaskAccordion /> : <TaskTable />}
        </section>
        {/* data-section */}
      </section>
    </section>
  );
};

export default Task;
