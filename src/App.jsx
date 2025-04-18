import "./App.css";
import "./Person/Person.css"
import Header from "./Header.jsx";
import PersonList from "./Person/PersonList.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <PersonList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
