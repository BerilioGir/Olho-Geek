import { useState } from 'react'
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { CardProduto } from './components/CardProduto';
import { Destaque } from './components/Destaques';

function App() {
  const [produtos, setProdutos] = useState([])

  return (
    <body>
      <Header />
      <main className='bg-fundo md:px-[12%]'>
        <Destaque/>
        <CardProduto />
      </main>
      <Footer />
    </body>
  )
}

export default App
