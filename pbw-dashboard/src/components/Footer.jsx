import '../css/Footer/Footer.css'
import 'boxicons'

const Footer = () => {
  return (
    <section id={"footer-root"}>
      <section id={"footer-wrapper"}>
        <h2>Dibangung Dengan</h2>
        <div id={"icon"}>
          <i className='bx bxl-react'></i>
          <i className='bx bxl-sass'></i>
          <i className='bx bxs-package'></i>
          <i className='bx bx-heart'></i>
        </div>
        <p>Oleh Kelompok 2 Kelas E, Copyright © 2023. All Rights Reserved</p>
      </section>
    </section>
  );
};

export default Footer;