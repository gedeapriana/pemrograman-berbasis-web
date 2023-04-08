import TeamGroupImage from '../../assets/images/teamgoup.png'
import './jumbotron.css'
import TextBox from '../layouts/stacked-box/TextBox.jsx'

import { MdOutlineWavingHand } from 'react-icons/md'
import JumbotronBox from "../layouts/card-box/JumbotronBox.jsx";

const Jumbotron = () => {
  return (
    <main id="__jumbotron-root" className="w-full bg-primary-light dark:bg-primary-dark flex justify-center items-center">
      <section id="__jumbotron-wrapper" className="w-11/12 md:gap-0 gap-12 h-full md:w-10/12 lg:w-8/12 xl:w-7/12 flex flex-col md:flex-row justify-center items-center">

        {/* Image Section */}
        <div id="__images-section" className="flex justify-center items-center md:4/12 p-10 p-52">
          <img src={TeamGroupImage} alt="teamgoup" className="w-40 md:w-48" />
        </div>
        {/* Image Section */}


        {/* Desc Section */}
        <div id="__desc-section" className='flex flex-col items-center w-full md:items-start justify-center md:w-8/12'>
          <div id="__desc-section-header" className='flex flex-col justify-center md:items-start items-center'>
            <div className='font-bold text-xl p-2 flex gap-2 dark:text-primary-light'><MdOutlineWavingHand class='mt-[3px]' />Selamat Datang Di</div>
            <TextBox Text={"KELOMPOK 2"} />
          </div>
          <div id="__desc-section-card" className={"flex flex-col w-full gap-2 md:flex-row"}>
            <JumbotronBox Header={"Anggota"}/>
            <JumbotronBox Header={"Tugas"}/>
            <JumbotronBox Header={"Kontak"}/>
          </div>
        </div>
        {/* Desc Section */}

      </section>
    </main>
  )
}

export default Jumbotron;
