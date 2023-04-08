import '../../css/Layouts/tugasCard.css'
import 'boxicons'
import {useState} from "react";

const TugasCard = (props) => {
  
  const [expand, setExpand] = useState(false);
  const ketentuan = Array.from(props.Description.ketentuan)
  
  return (
    <>
      <section key={props.Id} id={"tugas-card"} onClick={() => setExpand(!expand)}>
        <div id={"card-number"}>
          <h3>{props.Id}</h3>
        </div>
        <div id={"card-title"}>
          <h4>{props.Title}</h4>
        </div>
        <div id={"card-expand"}>
          {
            expand ? <i className='bx bx-minus' /> : <i className='bx bx-plus' />
          }
        </div>
      </section>
      
      <section id={"detail-tugas-card"} className={expand ? "show-desc" : "hidden-desc"}>
        <div id="header">
          <h5 id={"status"}><i className='bx bx-map-pin' /> {props.Status}</h5>
          <h5 id={"deadline"}><i className='bx bx-time-five' /> Deadline {props.Deadline}</h5>
        </div>
        
        <div id="content">
          <h4>Detail Tugas</h4>
          <p>{props.Description.detail}</p>
          <ul>
            {
              ketentuan.map((el) => {
                return (
                  <li><i className='bx bxs-right-arrow' /> {el}</li>
                )
              })
            }
          </ul>
        </div>
        
        <div id="footer">
          <a href={props.Pengumpulan}>Link Pengumpulan</a>
          <a href={props.Template}>Template Laporan</a>
          <a href={props.Website}>Link Website</a>
          <a href={props.Result}>Download Hasil (Laporan)</a>
        </div>
      </section>
    </>
  );
};

export default TugasCard;