
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Companies from "./Components/Home/Companies/Companies"
import Header from "./Components/Home/Hero/Header"
import Home from "./Components/Home/Home"


function App() {
  return (
    <>
      <section className="app">
        <Header/>
        <Home/>
        <Companies/>
        <About/>
        <Contact/>
        <Footer/>
      </section>
    </>
  )
}

export default App
