import React from "react";

import { SiInstagram } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";

const MemberCard = (props) => {
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-700 p-8 w-full sm:w-auto rounded-3xl gap-2">
        <div className="__card-profile w-full flex items-center justify-center">
          <div className="__img w-20 h-20 rounded-full bg-violet-400"></div>
        </div>
        <div className="__card-desc w-full flex justify-center items-center flex-col">
          <p className="__name text-violet-400 text-lg lg:text-xl">
            {props.Name}
          </p>
          <p
            className="__name text-slate-400 text-xm lg:text-sm"
            style={{ fontFamily: "qsand" }}
          >
            {props.FullName}
          </p>
          <span
            className={
              "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 m-3"
            }
          >
            {props.Nim}
          </span>
        </div>
        <div className="__card-social flex gap-2">
          <a href="">
            <SiWhatsapp className="text-violet-400" />
          </a>
          <a href="">
            <SiInstagram className="text-violet-400" />
          </a>
        </div>
      </section>
    </>
  );
};

export default MemberCard;
