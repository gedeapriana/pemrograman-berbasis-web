import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Anggota from "./components/Anggota";
import Tugas from "./components/Tugas";
import Kontak from "./components/Kontak";
import Footer from "./components/Footer";

function App() {
  return (
      <>
        <Navbar />
        <Jumbotron />
        <Anggota />
        <Tugas />
        <Kontak />
        <Footer />
      </>
  );
}

export default App;
