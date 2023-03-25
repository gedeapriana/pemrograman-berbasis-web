import React from "react";
import Tasks from "./Data.json";
import { TbPlaystationCircle } from "react-icons/tb";
import { Badge } from "flowbite-react";
import { Accordion, Button } from "flowbite-react";
import {
  AiOutlineCheckCircle,
  AiOutlineLink,
  AiOutlineFileWord,
} from "react-icons/ai";

const TaskTable = () => {
  return (
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-md bg-violet-400 text-slate-100 uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Pertemuan
            </th>
            <th scope="col" class="px-6 py-3">
              Materi
            </th>
            <th scope="col" class="px-6 py-3">
              Deadline
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Deskripsi Tugas
            </th>
            <th scope="col" class="px-6 py-3">
              Link
            </th>
            <th scope="col" class="px-6 py-3">
              Hasil Tugas
            </th>
          </tr>
        </thead>
        <tbody>
          {Tasks.map((task) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600">
                <td class="px-6 py-4">{task.pertemuan}</td>
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 block w-[500px] dark:text-white"
                >
                  {task.title}
                </th>
                <td class="px-6 py-4 whitespace-nowrap">{task.deadline}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  {task.status === "Proses" ? (
                    <div className="flex flex-wrap gap-2">
                      <Badge color="warning">
                        <TbPlaystationCircle className="text-sm inline" />{" "}
                        {task.status}
                      </Badge>
                    </div>
                  ) : task.status === "Selesai" ? (
                    <div className="flex flex-wrap gap-2">
                      <Badge color="success">
                        <TbPlaystationCircle className="text-sm inline" />{" "}
                        {task.status}
                      </Badge>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      <Badge color="failure">
                        <TbPlaystationCircle className="text-sm inline" />{" "}
                        {task.status}
                      </Badge>
                    </div>
                  )}
                </td>
                <td class="px-6 py-4 block w-80">
                  {task.description.detail}
                  {task.description.ketentuan !== "" ? (
                    <ul className="list-disc mx-5 text-xs text-slate-700 dark:text-slate-300">
                      {task.description.ketentuan.map((el) => {
                        return <li style={{ fontFamily: "qsand" }}>{el}</li>;
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </td>
                <td class="px-6 py-4 text-right whitespace-nowrap">
                  <Button.Group>
                    <Button
                      color="gray"
                      href={task.link.pengumpulan}
                      target="_blank"
                    >
                      <AiOutlineLink className="mr-1" />
                      Link Pengumpulan
                    </Button>
                    <Button
                      color="gray"
                      href={task.link["template tugas"]}
                      target="_blank"
                    >
                      <AiOutlineFileWord className="mr-1" />
                      Template Laporan
                    </Button>
                  </Button.Group>
                </td>
                <td class="px-6 py-4 text-right whitespace-nowrap">
                  {task.status === "Selesai" ? (
                    <a href={task.result} target="_blank">
                      <Button class="bg-violet-400 text-slate-100 rounded-lg">
                        <AiOutlineCheckCircle className="lg:mr-1" /> Download
                        atau lihat hasil disini
                      </Button>
                    </a>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
