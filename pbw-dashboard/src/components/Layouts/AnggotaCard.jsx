import '../../css/Layouts/anggotaCard.css'
import 'boxicons';

const AnggotaCard = (props) => {
  return (
      <section id={"anggota-card"}>
        <div id="image-profile">
          <i className='bx bx-user' />
        </div>
        <h3>{props.Name}</h3>
        <p>{props.FullName}</p>
        <div id="social-media">
          <a href="" target={"_blank"}><i className='bx bxl-whatsapp' /></a>
          <a href="" target={"_blank"}><i className='bx bxl-instagram' /></a>
          <a href="" target={"_blank"}><i className='bx bx-envelope' /></a>
        </div>
        <h4>{props.Nim}</h4>
      </section>
  );
};

export default AnggotaCard;