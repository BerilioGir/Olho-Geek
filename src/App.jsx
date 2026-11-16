import { useState } from 'react'
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { CardProduto } from './components/CardProduto';

function App() {
  const [produtos, setProdutos] = useState([])

  return (
    <body>
      <Header />
      <main className='bg-fundo'>
        <CardProduto />
      </main>
      <Footer />
    </body>
  )
}

export default App
