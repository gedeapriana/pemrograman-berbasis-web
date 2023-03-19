import React from "react";

import wave from '../../assets/images/wave.svg';
import MemberCard from "../card/MemberCard";

const Member = () => {
  return (
    <>
      {/* <div className="__wave w-full overflow-hidden dark:bg-slate-700"> */}
      {/*   <img src={wave} alt="" className="object-bottom" /> */}
      {/* </div> */}
      <section id={"__member-root"} className="bg-violet-400 dark:bg-slate-800 p-10 w-full flex items-center justify-center">
        <section id="__member-wrapper" className={"h-full text-slate-50 w-11/12 flex flex-col items-center justify-center lg:w-9/12 xl:w-8/12"}>
          <p id="__member-header" className={"text-xl lg:text-3xl p-5"}>Anggota Kelompok</p>
          <div id="__member-cards" className={"flex gap-5 flex-wrap items-center justify-center"}>
            <MemberCard Name={"Kenny"} FullName={"Kenny Belle Lesmana"} Nim={"2108561031"}/>
            <MemberCard Name={"Apriana"} FullName={"I Komang Gede Apriana"} Nim={"2108561031"} />
            <MemberCard Name={"Albert"} FullName={"Albert Okario"} Nim={"2108561031"} />
            <MemberCard Name={"Wisnu"} FullName={"I Gusti Putu Wisu Wardhana"} Nim={"2108561031"} />
          </div>
        </section>
      </section>
      {/* <div className="__wave w-full overflow-hidden dark:bg-slate-700"> */}
      {/*   <img src={wave} alt="" className="object-bottom rotate-180" /> */}
      {/* </div> */}
    </>
  )
}

export default Member
