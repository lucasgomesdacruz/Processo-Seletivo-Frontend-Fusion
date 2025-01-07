import Header from "./components/header/Header";
import Sobre from "./components/sobre/Sobre";
import Habilidades from "./components/habilidades/Habilidades";
import Experiencia from "./components/experiencia/Experiencia";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sobre">
          <Sobre />
        </section>
        <section id="habilidades">
          <Habilidades />
        </section>
        <section id="experiencia">
          <Experiencia />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
