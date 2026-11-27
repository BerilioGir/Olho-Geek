import { useState } from 'react'
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Destaque } from './components/Destaques';
import { Produtos } from './components/Produtos';

function App() {
  const [produtos, setProdutos] = useState([])

  return (
    <>
      <Header />
      <main className='bg-fundo md:px-[12%]'>
        <Destaque/>
        <Produtos />
      </main>
      <Footer />
    </>
  )
}

export default App
