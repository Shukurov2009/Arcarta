import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero/hero"
import { Money } from "./components/Money"
import { Art } from "./components/art"
import { Bg } from "./components/bg"
import { Footer } from "./components/footer"

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bg />
        <Card />
        <Money />
        <Art />
        <Footer/>
      </main>
    </>
  )
}

export default App
