import '../css/Anggota/Anggota.css'
import DataHeader from '../data/Jumbotron/JumbotronCard.json'
import DataAnggota from  '../data/Anggota/Anggota.json'
import AnggotaCard from "./Layouts/AnggotaCard";
import AnggotaImage from "../assets/images/anggota.png"

function Anggota(props) {
  return (
      <section id={"anggota-root"}>
        <section id={"anggota-wrapper"}>
          <div id="header">
            <h2>Anggota</h2>
            <p>{DataHeader[0].desc}</p>
          </div>
          
          <div id="image">
            <img src={AnggotaImage} alt="anggota"/>
          </div>
          
          <div id="card">
            {
              DataAnggota.map((data) => {
                return (
                    <AnggotaCard key={data.id} Name={data.name} FullName={data.fullName} Nim={data.nim} />
                )
              })
            }
          </div>
        </section>
      </section>
  );
}

export default Anggota;