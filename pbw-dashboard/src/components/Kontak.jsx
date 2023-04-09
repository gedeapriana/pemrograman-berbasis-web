import '../css/Kontak/Kontak.css'
import DataHeader from '../data/Jumbotron/JumbotronCard.json'
import KontakImage from '../assets/images/kontak.png'

const Kontak = () => {
  return (
    <section id={"kontak-root"}>
      <section id={"kontak-wrapper"}>
        <div id={"kontak-image"}>
          <h2>Hubungi Kami</h2>
          <p>{DataHeader[2].desc}</p>
          <img src={KontakImage} alt=""/>
        </div>
        <div id={"kontak-content"}>
          <form action="">
            <div id={"nama-lengkap"}>
              <label for={"nama-lengkap-input"}>Nama Lengkap</label>
              <input type="text" id={"nama-lengkap-input"} placeholder={"Masukkan Nama Lengkap"} required/>
            </div>
            <div id={"email"}>
              <label for={"email-input"}>Email</label>
              <input type="email" id={"email-input"} placeholder={"Masukkan Email"} required/>
            </div>
            <div id={"pesan"}>
              <label for={"pesan-input"}>Email</label>
              <textarea name="" id={"pesan-input"} placeholder={"Masukkan Pesan"} required></textarea>
            </div>
            <button type={"submit"}>Kirim</button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Kontak;