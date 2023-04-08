import '../css/Jumbotron/Jumbotron.css'
import Jimage from '../assets/images/teamgoup.png'
import JumbotronCard from "./Layouts/JumbotronCard";
import cardData from '../data/Jumbotron/JumbotronCard.json'
import {MdPeopleOutline} from 'react-icons/md'
import {BsCodeSlash} from 'react-icons/bs'
import {TbMessages} from  'react-icons/tb'

const Jumbotron = () => {
  return (
      <main id={"main-root"} className={""}>
        <div id={"main-wrapper"}>
          
          <div id="main-image-section">
            <img src={Jimage} alt="" id={""}/>
          </div>
          
          <div id="main-header-section">
            <h3>Selamat datang di</h3>
            <h1>KELOMPOK 2</h1>
          </div>
          
          <div id="main-card-section">
            {
              cardData.map((data) => {
               return (
                 <JumbotronCard Header={data.header} Text={data.desc} Icon={data.icon} Link={data.link} />
               )
              })
            }
          </div>
        </div>
      </main>
  );
};

export default Jumbotron;