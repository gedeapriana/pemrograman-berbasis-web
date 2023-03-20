import React, { useEffect } from "react";
import { Accordion, Badge, Button } from "flowbite-react";
import Tasks from './Data.json';

const TaskAccordion = () => {


  return (
    <>
      <Accordion class="w-full" alwaysOpen={true} flush={false}>
        {
          Tasks.map((task) => {
            return (
              <Accordion.Panel>
                <Accordion.Title>
                  {task.title}
                </Accordion.Title>
                <Accordion.Content >
                  <section className="flex items-center justify-start gap-3 flex-wrap">
                    {task.status === "Proses" ? <div className="flex flex-wrap gap-2"><Badge color="warning">Status {task.status}</Badge></div> : task.status === "Selesai" ? <div className="flex flex-wrap gap-2"><Badge color="success">Status {task.status}</Badge></div> : <div className="flex flex-wrap gap-2"><Badge color="failure">Status {task.status}</Badge></div> }

                    {task.deadline !== "" ? <div className="flex flex-wrap gap-2"><Badge color="failure">Deadline {task.deadline}</Badge></div> : ""}

                  </section>
                  <section className="w-full p-3 bg-violet-100 dark:bg-slate-800 my-3 rounded-lg">
                    <p className="text-violet-500 text-xs">Detail tugas</p>
                    <p className="text-sm dark:text-slate-50 text-slate-700 pt-3 py-1">{task.description.detail}</p>
                    {task.description.ketentuan !== "" ? <ul className="list-disc mx-5 text-xs text-slate-700 dark:text-slate-300"><li style={{fontFamily: "qsand"}}>{task.description.ketentuan}</li></ul> : ""}
                  </section>
                  <section className="w-full flex gap-5 justify-start items-center flex-wrap">
                    <Button.Group>
                      <Button color="gray" href="https://www.google.com" target="_blank">
                        Link Pengumpulan
                      </Button>
                      <Button color="gray">
                        Template Laporan
                      </Button>
                    </Button.Group>

                    {
                      task.status === "Selesai" ? 
                        <a href={task.result} target="_blank">
                          <Button class="bg-violet-400 text-slate-100 rounded-lg">
                            Success
                          </Button>
                        </a> : ""
                    }
                  </section>
                </Accordion.Content>
              </Accordion.Panel>
            )
        })
        }
      </Accordion>
    </>
  )
}

export default TaskAccordion;
