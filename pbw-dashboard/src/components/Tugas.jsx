import '../css/Tugas/Tugas.css'
import TugasImage from '../assets/images/tugas.png'
import DataHeader from '../data/Jumbotron/JumbotronCard.json'
import TugasCard from "./Layouts/TugasCard";
import DataTugas from '../data/Tugas/Tugas.json'

const Tugas = () => {
  return (
      <section id={"tugas-root"}>
        <section id={"tugas-wrapper"}>
          <div id="tugas-section">
            {
              DataTugas.map((data) => {
                return (
                    <TugasCard
                        Id={data.id}
                        Title={data.title}
                        Status={data.status}
                        Deadline={data.deadline}
                        Description={data.description}
                        Pengumpulan={data.link.pengumpulan}
                        Template={data.link["template tugas"]}
                        Website={data.link.website}
                        Result={data.result}
                    />
                )
              })
            }
          </div>
          <div id="tugas-image">
            <h2>Tugas</h2>
            <p>{DataHeader[1].desc}</p>
            <img src={TugasImage} alt=""/>
          </div>
        </section>
      </section>
  );
};

export default Tugas;