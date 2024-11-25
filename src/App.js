import React from "react";


import Header from "./components/Header/header"
import Contact from './components/Contact/contact';
import Aboutme from './components/aboutme/aboutme';
import Project from './components/Project/project.js'
import Footer from './components/Footer/footer.js'
import Home from './components/Home/home.js'


function App() {
  return (
    <div className="App">
        <Header />
        <Home />
        <Aboutme />
        <Project />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
