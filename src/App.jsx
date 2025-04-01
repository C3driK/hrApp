import "./App.css";
import Header from "./Header.jsx";
import Person from "./Person.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Person
          name="Phil Jones"
          title="CEO"
          salary={6000}
          phone="0457566"
          email="phil@jones.email"
          favAnimal="frog"
        />
        <Person
          name="Will Smith"
          title="COO"
          salary={5500}
          phone="3339994"
          email="will@smith.email"
          favAnimal="fox"
        />
        <Person
          name="Sam Jones"
          title="Intern"
          salary={1600}
          phone="4874484"
          email="sam@jones.email"
          favAnimal="goat"
        />
        <Person
          name="Mai Tran"
          title="chef"
          salary={1000}
          phone="6767484"
          email="mai@tran.email"
          favAnimal="octopus"
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
